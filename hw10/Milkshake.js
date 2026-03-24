import { Drink } from "./Drink.js";

export class Milkshake extends Drink {
  #temperature
  constructor(name, size, price, temperature, ingredient, hasToppings){
    super(name, size, price, temperature);
    this.ingredient = ingredient;
    this.hasToppings = hasToppings;
  }

  addIceCream(iceCream) {
    console.log(`The ${iceCream} Ice Cream is added to the Milkshake`);
  }
}