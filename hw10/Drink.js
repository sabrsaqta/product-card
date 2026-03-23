/*
3. Реализовать абстрактный класс Drink (абстрактный он, потому что
не должен иметь экземпляров. Он используется только для наследования).
От него мы будем создавать наследников - лимонад, чай, кофе и прочие напитки,
которые посчитаете нужным. Их должно быть от 3 до 5. 

Наш абстрактный класс должен содержать общие свойства, связанные со всеми напитками
(это то, что есть у каждого напитка), а это: 
1) название
2) размер
3) цена
4) температура (приватный). Почему? Потому что мы не можем влиять на температуру вне класса.

Также наш класс должен содержать общие методы, такие как:
1) получить информацию про напиток
2) получить температуру напитка
3) установить температуру напитка
4) приготовить напиток (приватный)
5) подать напиток
*/

export class Drink {
  #temperature;
  constructor(name, size, price, temperature){
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  showDrinkInfo() {
    console.log(`Напиток ${this.name}, размер ${this.size}, стоимость ${this.price}, температура ${this.#temperature} градусов`);

  }

  getDrinkTemperature() {
    return this.#temperature;
  }

  setDrinkTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }

  #prepareDrink(temp) {
    console.log(`Начинаю готовку напитка ${this.name}`);
    this.setDrinkTemperature(temp);
    console.log('Напиток готов')
  }

  giveDrink(temp) {
    this.#prepareDrink(temp);
    return `Напиток ${this.name}, размер ${this.size}, стоимость ${this.price}, температура ${this.getDrinkTemperature()} градусов`;
  }
}