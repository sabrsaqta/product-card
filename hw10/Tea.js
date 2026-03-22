import Drink from "./Drink.js";

export class Tea extends Drink{
  #temperature
  constructor(name, size, price, temperature, originCountry, hasMilk){
    super(name, size, price, temperature);
    this.originCountry = originCountry;
    this.hasMilk = hasMilk;
  }
}