//Все данные должны быть синхронизированы с локальным хранилищем.
// Если вы удалили карточку — то после перезагрузки страницы их должно
// быть то же количество.
import { getData } from "./async.js";

const userCardTemplate = document.getElementById('user-card-template');
const userCardList = document.querySelector('.users-cards-list');


export function renderCards(fetchedArray){
  fetchedArray.forEach((user) => {
    const userCardClone = userCardTemplate.content.cloneNode(true);
    const deleteBtn = userCardClone.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      const newArray = fetchedArray.filter((userItem) => {
        return userItem.id !== user.id;
      });
      rewriteChangedArray(newArray);
    })
    userCardClone.querySelector('.user-id').textContent = user.id;
    userCardClone.querySelector('.user-name').textContent = user.name;
    userCardClone.querySelector('.user-surname').textContent = user.surname;
    userCardClone.querySelector('.user-email').textContent = user.email;
    userCardClone.querySelector('.user-age').textContent = user.age;
    userCardList.appendChild(userCardClone);
  });
}

export function rewriteChangedArray(newArray) {
  localStorage.setItem('users', JSON.stringify(newArray));
  userCardList.innerHTML = '';
  renderCards(newArray);
}

const btnDeleteAll = document.querySelector('.btn-delete-all');
const btnGetAll = document.querySelector('.btn-get-all');

btnDeleteAll.addEventListener('click', () => {
  rewriteChangedArray([]);
});

btnGetAll.addEventListener('click', () => {
  rewriteChangedArray([]);
  getData();
})