//3. Создать структуру на ваш выбор, как было показано в лекции
// (имеется ввиду - с машинами/бьюти-продуктами). Придумайте свою
// структуру и реализуйте наследуемость классов

export class Device {
  constructor(type, model) {
    this.type = type;
    this.model = model;
  }

  unpack() {
    console.log(`Your ${this.type} ${this.model} is unpacked`);
  }
}

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