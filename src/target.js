'use strict';

import Log from './log'
import Event from './event';
import {
  nanoid
} from 'nanoid'

export default class Target {
  constructor(obj = null) {
    this.target = null;
    this.timerID = null;
    this.timeout = 3000;
    this.timerLoop = false;
    this.timerLoopLimit = null;
    if (obj) {
      Object.assign(this, obj);
    }
    this.refreshId();
    this._timerLoopCount = 0;
  }
  get id() {
    return this._id;
  }
  get target() {
    return this._target;
  }
  set target(target) {
    this._target = target;
  }
  get timerID() {
    return this._timerID;
  }
  set timerID(timerID) {
    this._timerID = timerID;
  }
  get timeout() {
    return this._timeout;
  }
  set timeout(timeout) {
    this._timeout = timeout;
  }
  get timerLoop() {
    return this._timerLoop;
  }
  set timerLoop(timerLoop) {
    this._timerLoop = timerLoop;
  }
  get timerLoopLimit() {
    return this._timerLoopLimit;
  }
  set timerLoopLimit(timerLoopLimit) {
    this._timerLoopLimit = timerLoopLimit;
  }
  get timerLoopLimitReached() {
    return (
      this.timerLoopLimit > 0 &&
      this.timerLoopCount > this.timerLoopLimit
    );
  }
  get timerLoopCount() {
    return this._timerLoopCount;
  }

  get describe() {
    return {
      eventTargetId: this.target.id,
      eventTarget: this.target,
      inviewTargetId: this.id,
      inviewTarget: this
    };
  }

  refreshId() {
    this._id = nanoid(4);
  }

  logEvent(...args) {
    Log.log(...args, this.describe)
  }

  makeEvent(eventType) {
    return new CustomEvent(eventType, {
      detail: this.describe
    });
  }

  dispatch(eventType) {
    this.target.dispatchEvent(this.makeEvent(eventType));
    this.logEvent(eventType);
  }

  setTimer() {
    if (this.timerLoopLimitReached) {
      this.logEvent('already timer loop limit reached');
      return;
    }
    this.logEvent(Event.TIMER_SET);
    const timerID = window.setTimeout(() => {
      this.dispatch(Event.TIMER_TIMEDOUT);
      this.timerID = null;
      if (this.timerLoop) {
        this._timerLoopCount++;
        if (this.timerLoopLimitReached) {
          this.logEvent(Event.TIMER_LOOP_LIMIT_REACHED);
          this.dispatch(Event.TIMER_LOOP_LIMIT_REACHED);
          return;
        }
        this.logEvent(`timer loop trying #${this.timerLoopCount}`);
        this.setTimer();
      } else {
        this.logEvent(Event.TIMER_TERMINATED);
        this.dispatch(Event.TIMER_TERMINATED);
      }
    }, this.timeout);
    this.timerID = timerID;
  }

  clearTimer() {
    if (this.timerID) {
      window.clearTimeout(this.timerID);
      this.dispatch(Event.TIMER_CANCELED);
    }
  }
};
