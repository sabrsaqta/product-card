// 3. Создайте объект на основе ваших данных.
// Имя, фамилия, почта, работа, должность, возраст, страна, город,
// статус отношений и так далее. Чем больше - тем лучше
// (но не увлекайтесь, до 10 максимум).
// Подберите правильное название для переменной.

const myInfo = {
  name: 'Chingiz',
  surname: 'Khojakov',
  email: '1sabrsaqta1@gmail.com',
  job: 'Frontend Developer',
  age: 21,
  country: 'Kazakhstan',
  isMarried: false
}

//4. Создайте объект, который будет хранить данные об автомобиле
// (марка, модель, год выпуска, цвет, вид коробки). Добавьте
// дополнительное свойство - владелец авто, значением которого
// будет ОБЪЕКТ, описанный в пункте №3. Желательно добавлять
// отдельной строкой (имеется ввиду не при создании объекта)

const carInfo = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2015,
  color: 'navy blue',
  transmission: 'Automatic',
}

carInfo.owner = myInfo;
console.log(carInfo);


//5. Написать функцию которая аргументом будет принимать объект,
// описанный в пункте №4. Она проверяет, есть ли в объекте свойство
// "максимальная скорость", если нет - добавляет его и задает значение,
// если есть - прекращает выполнение (ничего не делает)

function assignMaxSpeedInfo(carObject){
  if (carObject.maxSpeed === undefined){
    carObject.maxSpeed = 180;
  }
}

assignMaxSpeedInfo(carInfo);


//6. Написать функцию, которая получает первым аргументом
// — объект, а вторым аргументом — свойство объекта, которое
// нужно вывести и выводит его значение.

function outputObjectProperty(object, key){
  console.log(object[key]);
}

outputObjectProperty(carInfo, 'owner');


//7. Создать массив, который содержит названия продуктов (просто строки)

const goods = ['bread', 'milk', 'meat', 'vegetables'];


//8. Создать массив, состоящий из объектов, где объект представляет собой книгу
// (название, автор, год выпуска, цвет обложки, жанр) (3-5 книг).
// После, используя известный нам метод массив, добавить еще одну
// книгу в конец списка. Можете заменить книги на фильмы, или другую
// сущность, идею вы поняли.

const booksArray = [
  { title: 'Book 1', author: 'Author 1', year: 1999 },
  { title: 'Book 2', author: 'Author 2', year: 2021 },
  { title: 'Book 3', author: 'Author 3', year: 2009 },
  { title: 'Book 4', author: 'Author 4', year: 2013 },
];

booksArray.push({ title: 'Book 5', author: 'Author 5', year: 2024});

console.log(booksArray);


//9. Создать еще один массив, состоящих из тех же книг, но относящийся
// к определенной вселенной (Гарри Поттер, Марвел и так далее).
// (Если используете другую, свою сущность - импровизируйте).
// С помощью известного нам метода массива или оператора (рекомендую
// использовать оператор), объединить эти два массива в один

const computerScienceBooks = [
  {
    title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
    author: 'Donald Knuth',
    year: 1968
  },
  {
    title: 'The Art of Computer Programming, Vol. 2: Seminumerical Algorithms',
    author: 'Donald Knuth',
    year: 1969
  },
  {
    title: 'The Art of Computer Programming, Vol. 3: Sorting and Searching',
    author: 'Donald Knuth',
    year: 1973
  },
  {
    title: 'The Art of Computer Programming, Vol. 4A: Combinatorial Algorithms',
    author: 'Donald Knuth',
    year: 2011
  }
];

const unitedArrayOfBooks = [...booksArray, ...computerScienceBooks];

console.log(unitedArrayOfBooks);



//10. Почитать про метод массива — map. Написать функцию, которая принимает
// массив сущностей с задания №9. Добавляем новое свойство для объекта
// "isRare (это редкий)" и в зависимости от года выпуска книги
// (или какой-то логики, связанной с вашей сущностью), устанавливаем true
// или false. Что я хочу этим сказать: если книга выпущена позже 2000 года,
// устанавливаем true (да, это редкий), нет - false (значит это не редкий).

function assignRarityFlag(object){
  if (object.year <= 2000){
    object.isRare = true;
  } else {
    object.isRare = false;
  }
  return object;
}

const updatedArrayOfBooks = unitedArrayOfBooks.map(assignRarityFlag)

console.log(updatedArrayOfBooks);