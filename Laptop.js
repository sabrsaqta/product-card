import { Device } from "./Device.js";

export class Laptop extends Device {
  constructor(type, model, battery) {
    super(type, model);
    this.battery = battery;
  }

  unpack() {
    super.unpack();
    console.log(`Your ${this.type} ${this.model}'s battery is ${this.battery}`);
  }

  charge() {
    console.log(`Your ${this.type} ${this.model} is charging`);
  }
}