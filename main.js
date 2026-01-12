//покраска одной карточки
const productCard = document.querySelector('.product-card.first');
const changeColorBtn = document.querySelector('#change-color-btn');
const blue = '#AFEEEE';

changeColorBtn.addEventListener('click', () => {
  productCard.style.backgroundColor = blue;
});

//покраска всех карточек
const productCards = document.querySelectorAll('.product-card');
const changeColorAllBtn = document.querySelector('#change-color-all-btn');

const yellow = '#deeeafff';

changeColorAllBtn.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = yellow);
});


//открыть Google
const openGoogleBtn = document.querySelector('#open-google-first');

openGoogleBtn.addEventListener('click', () => {
  window.open('https://google.com');
  console.log('сработал первый способ')
})


//второй способ
const openGoogleBtn2 = document.querySelector('#open-google-second');


function openGoogleFunc(){
  const answer = confirm('Открыть Google.com?');
  if(answer){
    window.open('https://google.com');
  }
}

openGoogleBtn2.addEventListener('click', () => {
  openGoogleFunc();
  console.log('сработал второй способ')
})

//Вывод лога в консоль

const outputConsoleBtn = document.querySelector('#console-output-btn');
outputConsoleBtn.addEventListener('click', () => outputConsoleFunc('HW #4'));

function outputConsoleFunc(message){
  console.log(message);
  alert(message);
}

//Вывод содержимого в консоль при наведении курсора
const pageTitle = document.getElementById('page-title')

pageTitle.addEventListener('mouseover', () => {
  const content = pageTitle.textContent;
  console.log(content);
});


//Кнопка с меняющимися цветами
const changeSelfColorBtn = document.getElementById('change-self-color-btn');

changeSelfColorBtn.addEventListener('click', () => toggleClass());

function toggleClass(){
  changeSelfColorBtn.classList.toggle('change-self-color-btn-active');
}