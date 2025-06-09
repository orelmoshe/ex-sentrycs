interface Listener {
  (data: any): void;
}

class EventListener {
  private listeners: { [action: string]: Listener[] };
  private static instance: EventListener;

  constructor() {
    if (EventListener.instance) {
      return EventListener.instance;
    }
    EventListener.instance = this;
    this.listeners = {};
  }

  static getInstance(): EventListener {
    if (!EventListener.instance) {
      EventListener.instance = new EventListener();
    }
    return EventListener.instance;
  }

  registerListener(action: string, listener: Listener): void {
    if (!this.listeners[action]) {
      this.listeners[action] = [];
    }

    this.listeners[action].push(listener);
  }

  removeListener(action: string): void {
    if (this.listeners[action]) {
      delete this.listeners[action];
    }
  }

  emit(action: string, data?: any): void {
    if (!this.listeners[action]) {
      throw new Error(`Can't emit an event. Event "${action}" doesn't exist.`);
    }

    this.listeners[action].forEach(listener => listener(data));
  }
}

export default EventListener;
