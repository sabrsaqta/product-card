/*
4. После того, как реализовали класс "напиток" и его наследников, приступаем к классу "Кафе".
Он у нас будет принимать 2 параметра, например название кафе и его месторасположение.
Реализуем 2 метода внутри него:
1) получить информацию про кафе
2) заказать напиток

При заказе напитка мы будем передавать аргументом сам напиток и вызывать его внутренние методы,
например - подать напиток, А этот метод внутри себя вызывает метод для готовки напитка и выполняет
всякие побочные действия, по типу изменения температуры и прочее.

Что итоговое должно получиться:
1. Можем получить информацию про кафе
2. Можем заказать напиток
3. Можем получить информацию про напиток
*/

import { Coffee } from "./Coffee.js";
import { Tea } from "./Tea.js";
import { Milkshake } from "./Milkshake.js";
import Drink from "./Drink.js";

const iceLatte = new Coffee('Ice Latte', 'Standard', 350, 10, 'Arabica', true);
const blackTea = new Tea('Black Tea', 'Standard', 150, 70, 'India', false);
const vanillaShake = new Milkshake('Vanilla Milkshake', 'Big', 450, 15, 'vanilla', true);


export class Cafe {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }

  getCafeInfo() {
    return [this.name, this.city].toString();
  }

  orderDrink(drink, temp) {
    if (!(drink instanceof Drink)){
      console.log('Ошибка, введите напиток');
      return;
    }
    console.log(drink.giveDrink(temp));
  }
}

const newCafe = new Cafe('Iftar', 'Almaty');
console.log(newCafe.getCafeInfo()); //инфо о кафе

newCafe.orderDrink(iceLatte, 12); //заказ напитка

iceLatte.showDrinkInfo(); //инфо о напитке

