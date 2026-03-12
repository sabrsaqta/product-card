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