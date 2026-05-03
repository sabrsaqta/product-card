//Все данные должны быть синхронизированы с локальным хранилищем.
// Если вы удалили карточку — то после перезагрузки страницы их должно
// быть то же количество.
import { getData } from "./async.js";

const userCardTemplate = document.getElementById('user-card-template');
const userCardList = document.querySelector('.users-cards-list');


export function renderCards(fetchedArray){
  for (let i = 0; i < fetchedArray.length; i++){
    const userCardClone = userCardTemplate.content.cloneNode(true);
    const deleteBtn = userCardClone.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      const newArray = fetchedArray.filter((userItem) => {
        return userItem.id !== fetchedArray[i].id;
      });
      saveNewArray(newArray);
    })
    userCardClone.querySelector('.user-id').textContent = fetchedArray[i].id;
    userCardClone.querySelector('.user-name').textContent = fetchedArray[i].name;
    userCardClone.querySelector('.user-surname').textContent = fetchedArray[i].surname;
    userCardClone.querySelector('.user-email').textContent = fetchedArray[i].email;
    userCardClone.querySelector('.user-age').textContent = fetchedArray[i].age;
    userCardList.appendChild(userCardClone);
  }
}

export function saveNewArray(newArray) {
  localStorage.setItem('users', JSON.stringify(newArray));
  userCardList.innerHTML = '';
  renderCards(newArray);
}

const btnDeleteAll = document.querySelector('.btn-delete-all');
const btnGetAll = document.querySelector('.btn-get-all');

btnDeleteAll.addEventListener('click', () => {
  saveNewArray([]);
});

btnGetAll.addEventListener('click', () => {
  saveNewArray([]);
  getData();
})