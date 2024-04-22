class Observable {
  static instance: {};
  handlers: { [key: string]: Function } = {};
  constructor() {
    if (Observable.instance instanceof Observable) {
      return Observable.instance;
    }
    Observable.instance = Object.freeze(this);
  }
  subscribe(fnName: string, callback: Function) {
    this.handlers[fnName] = callback;
  }
  unsubscribe(fnName: string) {
    delete this.handlers[fnName];
  }
  fire(fnName: string, data?: any) {
    if (this.handlers[fnName]) {
      this.handlers[fnName](data);
    }
  }
  isExit(handlerKey: string) {
    return this.handlers[handlerKey];
  }
}

export const observer = new Observable();
