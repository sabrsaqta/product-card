import { socialMediaComments } from "./comments.js";

//2. Создать массив чисел от 1 до 10. Отфильтровать его
// таким образом, что бы мы получил массив чисел, начиная с 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.filter(number => number >= 5));

//3. Создать массив строк, относящихся к любой сущности
// (название фильмов/книг, кухонные приборы, мебель и т.д.),
// проверить, есть ли в массиве какая-то определенная сущность.

const objects = ['knife', 'fork', 'plate', 'glass', 'bottle'];
console.log(objects.includes('fork'));

//4. Написать функцию, которая аргументом будет принимать массив
// и изменять его порядок на противоположный ("переворачивать").
// Два вышеуказанных массива с помощью этой функции перевернуть.

function reverseArray(array){
  array.reverse();
  return array;
}
const reversedNumbers = reverseArray(numbers);
const reversedObjects = reverseArray(objects);
console.log(reversedNumbers);
console.log(reversedObjects);

//Уровень 2:

// 7. Вывести в консоль массив тех комментариев, почта пользователей
// которых содержит ".com"

const isComIncluded = (object) => object.email.includes('.com');
const newCommentsArray = socialMediaComments.filter(comment => isComIncluded(comment));
console.log(newCommentsArray);

//8. Перебрать массив таким образом, что бы пользователи с id меньше или
// равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const newPostIdArray = socialMediaComments.map(comment => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
  };
});
console.log(newPostIdArray);


//9. Перебрать массив, что бы объекты состояли только из айди и имени

const nameAndIdOnlyArray = socialMediaComments.map(comment => {
  return {
    name: comment.name,
    id: comment.id
  };
});
console.log(nameAndIdOnlyArray);

//10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем:
// если длина тела сообщения (body) больше 180 символов - устанавливаем true,
// меньше - false.

const validatedArray = socialMediaComments.map(comment =>
  ({
    ...comment,
    isInvalid: comment.body.length > 180
  }));
console.log(validatedArray);


//Уровень 3:

//11. Почитать про метод массива reduce. Используя его, вывести массив
// почт и провернуть тоже самое с помощью метода map

const emailsArray = socialMediaComments.reduce((accumulator, comment) => {
  accumulator.push(comment.email);
  return accumulator;
}, []);

console.log(emailsArray);

const emailArrayByMap = socialMediaComments.map(comment => comment.email);
console.log(emailArrayByMap);


//12. Почитать про методы toString(), join() и перебрав массив
// с задания №11, привести его к строке.

const emailsString = emailsArray.toString();
console.log(emailsString);

const emailsStringByJoin = emailsArray.join(', ');
console.log(emailsStringByJoin);