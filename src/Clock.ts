export interface Clock {
  now(): Date;
}

export class SystemClock implements Clock {
  now(): Date {
    return new Date();
  }

}

export class ControllableClock implements Clock {
  constructor(private date: Date = new Date()){}

  now(): Date {
    return this.date;
  }

  moveForward(days: number) {
    this.date = new Date(this.date.getTime() + days*24*60*60*1000);
  }

}
