//При переходе на async.html мы отображаем по центру страницы строку:
// "Данные загружаются". Это в том случае, если локальное хранилище
// не заполнено данными и мы еще не сделали запрос.
import { Modal } from "./Modal.js";
import { renderCards, saveNewArray } from "./render.js";

const loadingModal = new Modal('modal-screen');
const screenMessage = document.getElementById('screen-message');

export async function getData() {
  if (checkStorage()) {
    showModal('modal-showed', 'overlay-showed');

    const fetchedData = await requestData();
    if (fetchedData) {
      saveToLocalStorage(fetchedData);
      renderCards(fetchedData);
    }
  } else {
    const currentArray = JSON.parse(localStorage.getItem('users'));
    renderCards(currentArray);
  }
};

getData();

function checkStorage() {
  const savedData = localStorage.getItem('users');
  let isStorageEmpty;
  if (!savedData) {
    isStorageEmpty = true;
    return isStorageEmpty;
  }
  try {
    const usersArray = JSON.parse(savedData);
    if (usersArray === null || usersArray.length === 0) {
      isStorageEmpty = true;
    } else {
      isStorageEmpty = false;
    }
  } catch (error) {
    isStorageEmpty = true;
  }
  return isStorageEmpty;
}

function showModal(modalId, overlayId) {
  loadingModal.modal.classList.add(modalId);
  loadingModal.overlay.classList.add(overlayId);
}

function closeModal(modalId, overlayId) {
  loadingModal.modal.classList.remove(modalId);
  loadingModal.overlay.classList.remove(overlayId);
}

//Что бы запросить данные - мы должны сделать запрос через fetch
// (используйте setTimeout для симуляции длительной загрузки) к нашему
// json файлу и получив их - сохранить в локальное хранилище
// (если их там не было при загрузке страницы. Если данные  изначально
// были в локальном хранилище, то делать запрос — нет смысла).


async function requestData() {
  try {
    await new Promise((resolve) => {
      console.log('Timer has started')
      screenMessage.textContent = 'Загрузка данных';
      setTimeout(resolve, 2000);
    })
    const responseFromFetch = await fetch('users.json'); //возвращает промис с записью объекта Response
    if (!responseFromFetch.ok) throw new Error('Ошибка при загрузке данных');
    const usersArray = await responseFromFetch.json(); //возвращает промис с записью результата(данные из файла)
    screenMessage.textContent = 'Данные успешно загружены';
    return usersArray;
  }
  catch (err) {
    screenMessage.textContent = "Ошибка при загрузке данных: " + err.message;
  }
  finally {
    await new Promise(resolve => {
      setTimeout(resolve, 3000);
    });
    closeModal('modal-showed', 'overlay-showed');
  }
}


function saveToLocalStorage(fetchedData) {
  localStorage.setItem('users', JSON.stringify(fetchedData));
}

