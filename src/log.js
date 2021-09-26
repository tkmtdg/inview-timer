class Log {
  constructor() {
    this.debug = false;
  }
  get debug() {
    return this._debug;
  }
  set debug(debug) {
    this._debug = debug;
  }
  log(...args) {
    if (this._debug) {
      console.log(...args);
    }
  }
}

export default new Log();
