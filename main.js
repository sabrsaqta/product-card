//покраска одной карточки
const productCard = document.querySelector('.product-card.first');
const colorChangeBtn = document.querySelector('#change-color-btn');
const blueHash = '#AFEEEE';

colorChangeBtn.addEventListener('click', () => {
  productCard.style.backgroundColor = blueHash;
});

//покраска всех карточек
const productCards = document.querySelectorAll('.product-card');
const allColorChangeBtn = document.querySelector('#change-color-all-btn');

const yellowHash = '#deeeafff';

allColorChangeBtn.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = yellowHash);
});


//открыть Google
const googleOpenBtn = document.querySelector('#open-google-first');

googleOpenBtn.addEventListener('click', () => {
  window.open('https://google.com');
  console.log('сработал первый способ')
})


//второй способ
const googleOpenBtn2 = document.querySelector('#open-google-second');


function openGoogleFunc(){
  const answer = confirm('Открыть Google.com?');
  if(answer){
    window.open('https://google.com');
  }
}

googleOpenBtn2.addEventListener('click', () => {
  openGoogleFunc();
  console.log('сработал второй способ')
})

//Вывод лога в консоль

const consoleOutputBtn = document.querySelector('#console-output-btn');
consoleOutputBtn.addEventListener('click', () => outputConsole('HW #4'));

function outputConsole(message){
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
const selfColorChangeBtn = document.getElementById('change-self-color-btn');

selfColorChangeBtn.addEventListener('click', () => toggleClass());

function toggleClass(){
  selfColorChangeBtn.classList.toggle('change-self-color-btn-active');
}