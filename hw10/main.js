import { Coffee } from "./Coffee.js";
import { Tea } from "./Tea.js";
import { Milkshake } from "./Milkshake.js";
import { Drink } from "./Drink.js"
import { Cafe } from "./Cafe.js";

const iceLatte = new Coffee('Ice Latte', 'Standard', 350, 10, 'Arabica', true);
const blackTea = new Tea('Black Tea', 'Standard', 150, 70, 'India', false);
const vanillaShake = new Milkshake('Vanilla Milkshake', 'Big', 450, 15, 'vanilla', true);


const newCafe = new Cafe('Iftar', 'Almaty');
console.log(newCafe.getCafeInfo()); //инфо о кафе

newCafe.orderDrink(iceLatte, 12); //заказ напитка

iceLatte.showDrinkInfo(); //инфо о напитке

iceLatte.addCinnamon();

blackTea.addSugar(2);

vanillaShake.addIceCream('Banana');