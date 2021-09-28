'use strict';

import Log from './log'
import Event from './event';
import Target from './target'

export default class Lalo {
  constructor(obj = null) {
    this.debug = false;
    this.observeTargets = [];
    this.inviewTargets = [];
    this.inviewTargetOptions = null;
    this.intersectionObserverOptions = null;
    if (obj) {
      Object.assign(this, obj);
    }
  }

  get debug() {
    return this._debug;
  }
  set debug(debug) {
    this._debug = debug;
    Log.debug = this._debug;
  }

  get observeTargets() {
    return this._observeTargets;
  }
  set observeTargets(observeTargets) {
    this._observeTargets = observeTargets;
  }

  get inviewTargets() {
    return this._inviewTargets;
  }
  set inviewTargets(inviewTargets) {
    this._inviewTargets = inviewTargets;
  }

  get inviewTargetOptions() {
    return this._inviewTargetOptions;
  }
  set inviewTargetOptions(inviewTargetOptions) {
    this._inviewTargetOptions = inviewTargetOptions;
  }

  get intersectionObserverOptions() {
    return this._intersectionObserverOptions;
  }
  set intersectionObserverOptions(intersectionObserverOptions) {
    this._intersectionObserverOptions = intersectionObserverOptions;
  }

  avoidIdCollision(inviewTarget) {
    const collision = this.inviewTargets.some(e => {
      return inviewTarget.id === e.id;
    });
    if (collision) {
      Log.log(`ID collision detected: "${inviewTarget.id}"`);
      inviewTarget.refreshId();
      this.avoidIdCollision(inviewTarget);
    }
  }

  observe() {
    const callback = (entries) => {
      for (const entry of entries) {
        for (const inviewTarget of this.inviewTargets) {
          if (inviewTarget.target === entry.target) {
            inviewTarget.inview = entry.isIntersecting;
            const eventType = inviewTarget.inview ? Event.TARGET_INVIEW : Event.TARGET_OUTVIEW;
            inviewTarget.dispatch(eventType);
            break;
          }
        }
      }
    };

    const observer = new IntersectionObserver(callback, this.intersectionObserverOptions);

    for (const observeTarget of this.observeTargets) {
      const inviewTarget = new Target({
        debug: this.debug,
        target: observeTarget,
        ...this.inviewTargetOptions,
      });
      this.avoidIdCollision(inviewTarget);
      this.inviewTargets.push(inviewTarget);

      inviewTarget.target = observeTarget;
      observeTarget.addEventListener(Event.TARGET_INVIEW, () => {
        inviewTarget.setTimer();
      });
      observeTarget.addEventListener(Event.TARGET_OUTVIEW, () => {
        inviewTarget.clearTimer();
      });
      observeTarget.addEventListener(Event.TIMER_TIMEDOUT, () => {
        // noop
      });
      observeTarget.addEventListener(Event.TIMER_TERMINATED, () => {
        observer.unobserve(observeTarget);
      });
      observeTarget.addEventListener(Event.TIMER_CANCELED, () => {
        // noop
      });
      observeTarget.addEventListener(Event.TIMER_LOOP_LIMIT_REACHED, () => {
        observer.unobserve(observeTarget);
      });

      observer.observe(observeTarget);
    }
  }
};
