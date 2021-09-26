import Log from './log'
import InviewTarget from './inview-target'

export default class InviewTimer {
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

  log(...args) {
    Log.log(this.constructor.name, ...args);
  }

  avoidIdCollision = (inviewTarget) => {
    const collision = this.inviewTargets.some(e => {
      return inviewTarget.id === e.id;
    });
    if (collision) {
      this.log(`ID collision detected: "${inviewTarget.id}"`);
      inviewTarget.refreshId();
      this.avoidIdCollision(inviewTarget);
    }
  };

  observe() {
    const callback = (entries, observer) => {
      for (const entry of entries) {
        for (const v of this.inviewTargets) {
          if (v.target === entry.target) {
            v.inview = entry.isIntersecting;
            const inviewTarget = this.inviewTargets.find((e, i, a) => {
              return e.target === entry.target;
            });
            const eventType = v.inview ? 'inview in' : 'inview out';
            inviewTarget.dispatch(eventType);
            break;
          }
        }
      }
    };

    const observer = new IntersectionObserver(callback, this.intersectionObserverOptions);

    for (const observeTarget of this.observeTargets) {
      const inviewTarget = new InviewTarget({
        debug: this.debug,
        target: observeTarget,
        ...this.inviewTargetOptions,
      });
      this.avoidIdCollision(inviewTarget);
      this.inviewTargets.push(inviewTarget);

      inviewTarget.target = observeTarget;
      observeTarget.addEventListener('inview in', (event) => {
        this.log(event.type, inviewTarget.describe);
        inviewTarget.setTimer();
      });
      observeTarget.addEventListener('inview out', (event) => {
        this.log(event.type, inviewTarget.describe);
        inviewTarget.clearTimer();
      });
      observeTarget.addEventListener('timer timedout', (event) => {
        this.log(event.type, inviewTarget.describe);
      });
      observeTarget.addEventListener('timer canceled', (event) => {
        this.log(event.type, inviewTarget.describe);
      });

      observer.observe(observeTarget);
    }
  }
};
