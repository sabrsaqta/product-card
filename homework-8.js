import { productCards } from "./product-cards.js";

const productCardTemplate = document.getElementById('product-card-template');
const productCardList = document.querySelector('.product-card-list');
console.log(productCardTemplate);

//4. Используя метод .reduce(), получить массив объектов, где ключем является
// название продукта, а значением - его описание
const nameDescriptionArray = productCards.reduce((accum, card) => {
  accum.push({ [card.title]: card.description });
  return accum;
}, []);

console.log(nameDescriptionArray);

//3. По аналогии из лекции — создать и реализовать шаблон
// для продуктовых карточек.  (Посмотрите сразу задание 5)

//5*. Реализовать функцию, которая при старте страницы выводит сообщение
// (через функцию prompt) "Сколько карточек отобразить? От 1 до 5" и в зависимости
// от результата - будет выводить введенное количество. Должна быть защита
// от ввода других значений (проверка if). То-есть: у нас будет 2 функции,
// одна возвращает количество карточек, которое нужно ввести, другая - рендерить
// эти карточки (принимая массив аргументом)

let numOfCards;
while (true){
  numOfCards = prompt('Сколько карточек отобразить? (числа от 1 до 5)');
  if (numOfCards == null) break;
  if ((numOfCards != "" && !isNaN(numOfCards)) && (numOfCards >= 1 && numOfCards <= 5)){
    numOfCards = Number(numOfCards);
    break;
  }
  alert("Введите корректный ответ (числа от 1 до 5)");
}

function renderCards(array, numberOfCards){
  for (let i = 0; i < numberOfCards; i++){
    const productCardClone = productCardTemplate.content.cloneNode(true);
    if (i != 0){
      const bgImage = productCardClone.querySelector('.bg-image-block');
      if (bgImage) bgImage.remove();
    }
    productCardClone.querySelector('.img-bottle').src = array[i].image;
    productCardClone.querySelector('.transparent').textContent = array[i].preTitle;
    productCardClone.querySelector('h2').textContent = array[i].title;
    productCardClone.querySelector('.description').textContent = array[i].description;
    productCardClone.querySelector('.content').textContent = "Состав:";
    const productDescriptionList = productCardClone.querySelectorAll('.list-item');
    productDescriptionList.forEach((listItem, index) => {
      if (array[i].listItems[index]){
        listItem.textContent = array[i].listItems[index];
      }
    });
    productCardClone.querySelector('.price').textContent = "Цена";
    productCardClone.querySelector('.price-tag').textContent = array[i].priceTag;
    productCardList.appendChild(productCardClone);
  }
}

if (numOfCards){
  renderCards(productCards, numOfCards);
}