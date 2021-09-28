export default class Event {
  static get TARGET_INVIEW() {
    return 'target inview';
  }

  static get TARGET_OUTVIEW() {
    return 'target outview';
  }

  static get TIMER_SET() {
    return 'timer set';
  }

  static get TIMER_TIMEDOUT() {
    return 'timer timedout';
  }

  static get TIMER_LOOP_LIMIT_REACHED() {
    return 'timer loop limit reached';
  }

  static get TIMER_TERMINATED() {
    return 'timer terminated';
  }

  static get TIMER_CANCELED() {
    return 'timer canceled';
  }
}
