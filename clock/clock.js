const padNumber = number => number.toString().padStart(2, '0');

export class Clock {
  constructor(hour = 0, minute = 0) {
    this.time = new Date();
    this.time.setHours(hour);
    this.time.setMinutes(minute);
  }

  toString() {
    return `${padNumber(this.time.getHours())}:${padNumber(this.time.getMinutes())}`;
  }

  plus(min) {
    this.time.setMinutes(this.time.getMinutes() + min)
    return this
  }

  minus(min) {
    this.time.setMinutes(this.time.getMinutes() - min)
    return this
  }

  equals(time) {
    return time.toString() === this.toString() ? true : false
  }
}
