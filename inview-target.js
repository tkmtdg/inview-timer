class InviewTarget {
  constructor(obj = null) {
    this.debug = false;
    this.target = null;
    this.timerID = null;
    this.timeout = 3000;
    this.timerLoop = false;
    if (obj) {
      Object.assign(this, obj);
    }
  }
  get debug() {
    return this._debug;
  }
  set debug(debug) {
    this._debug = debug;
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

  log(...args) {
    if (this.debug) {
      console.log(this.constructor.name, ...args);
    }
  }

  makeEvent(eventType) {
    return new CustomEvent(eventType, {
      detail: {
        inviewTarget: this.target
      }
    });
  }

  dispatch(eventType) {
    this.target.dispatchEvent(this.makeEvent(eventType));
  }

  setTimer() {
    this.log('timer set', {
      eventTarget: this.target
    });
    const timerID = window.setTimeout(() => {
      this.timerID = null;
      this.log('timer timedout', {
        eventTarget: this.target
      });
      this.dispatch('timer timedout');
      if (this.timerLoop) {
        this.log('timer loop', {
          eventTarget: this.target
        });
        this.setTimer();
      }
    }, this.timeout);
    this.timerID = timerID;
  }

  clearTimer() {
    if (this.timerID) {
      window.clearTimeout(this.timerID);
      this.log('timer canceled', {
        eventTarget: this.target
      });
      this.dispatch('timer canceled');
    }
  }
};

export {
  InviewTarget
}
