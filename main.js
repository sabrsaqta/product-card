import { socialMediaComments } from './comments.js';
import { productCards } from './product-cards.js';
import './oldmain.js';
import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';


//3. Создать структуру на ваш выбор, как было показано в лекции
// (имеется ввиду - с машинами/бьюти-продуктами). Придумайте свою
// структуру и реализуйте наследуемость классов

class Device {
  constructor(type, model) {
    this.type = type;
    this.model = model;
  }

  unpack() {
    console.log(`Your ${this.type} ${this.model} is unpacked`);
  }
}

class Laptop extends Device {
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

const macbookAir = new Laptop('Macbook', 'Air M1', 100);
macbookAir.unpack();
macbookAir.charge();

const kettleXiaomi = new Device('Kettle', 'Xiaomi');
kettleXiaomi.unpack();


