//4. К Форме, которая прикреплена в футере - добавить логику: 
// email должен соответствовать стандартам (добавить валидацию),
// если он не заполнен - форма не отправляется. Кнопка "Подписаться"
// и есть "отправкой формы", при нажатии на которую мы будем выводить
// консоль лог в виде объекта:  { email: 'введенная почта' }

function convertFormDataToObject(event) {
  event.preventDefault();
  const form = event.target; //кто затригерил ивент
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries()); //из массива массивов в объект
  return data;
}

const formEmail = document.querySelector('#email-form');
formEmail.addEventListener('submit', (event) => {
  const data = convertFormDataToObject(event);
  console.log(data);
});


//5. Создать кнопку "Регистрация". Создать модальное окно,
// используя классы "modal, modal-showed". Логика такая:
// при нажатии на кнопку у нас открывается модальное окно
// путем добавления modal-showed к div с классом modal.
// Не забываем добавить кнопку для закрытия модалки (крестик в углу).  
//Важные правила создания модалки:
//1) Задний фон должен быть затемнён, но не полностью черный
// (Создаем класс overlay, который будет затемнять всю страницу)
//2) Модальное окно находиться ровно по центру страницы, независимо от масштаба

const buttonRegister = document.querySelector('.register-button');
const modalWindow = document.querySelector('.modal');
const bodyTag = document.body;

buttonRegister.addEventListener('click', () => {
  modalWindow.classList.toggle('modal-showed');
  bodyTag.style.overflow = 'hidden';
});

const buttonCloseModal = document.querySelector('.close-cross');

buttonCloseModal.addEventListener('click', () => {
  modalWindow.classList.remove('modal-showed');
  bodyTag.style.overflow = '';
})

//Если пользователь ввел два разных пароля или форма невалидна
// (используем метод checkValidity()) - мы должны предупредить
// его о том, что регистрация отклонена. Если регистрация успешна
// - выводим значения формы в лог, как в задании №4. Дополнительно
// мы должны добавить к этому объекту свойство createdOn и указать
// туда время создания (используем сущность new Date()). Также создайте
// внешнюю переменную user и присвойте ей этот объект. После успешной
// регистрации - модалка должны закрыться. 

const password = document.querySelector('#user-pwd');
const passwordRepeat = document.querySelector('#user-pwd-repeat');
const modalForm = document.querySelector('#modal-form');
let user;

modalForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (password.value != passwordRepeat.value || !modalForm.checkValidity()) {
    alert('Регистрация отклонена, проверьте введенные данные');
  } else {
    const user = convertFormDataToObject(event);
    const createdOnTime = new Date();
    user.createdOn = createdOnTime.toLocaleTimeString();
    console.log(user);
    modalWindow.classList.remove('modal-showed');
    bodyTag.style.overflow = '';
  }
});

