import { Drink } from "./Drink.js";

export class Coffee extends Drink {
  #temperature
  constructor(name, size, price, temperature, beanType, hasMilk){
    super(name, size, price, temperature);
    this.beanType = beanType;
    this.hasMilk = hasMilk;
  }
  
  addCinnamon() {
    console.log(`The pinch of cinnamon was added to your ${this.name} coffee`);
  }
}