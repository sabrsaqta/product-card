/*
4. Создать файл Modal.js и в нем создать  класс для модального окна под названием Modal.
Он будет принимать 1 параметр через конструктор - айди модального окна.
Внутри класса будут методы:
  I. Для открытия модального окна.
 II. Для закрытия модального окна.
 III. Для проверки, открыто ли сейчас модальное окно.
 IV. Метод, который слушает кнопку (крестик) для закрытия модалки и закрывает модалку 
 (реализовать через eventListener) и вызывать в конструкторе
Используя данный класс - переписать логику задания №9, связанной с модальными окнами.
Как? Используя внутренние методы - мы можем управлять через айди модалки ее закрытием, открытием.
*/

export class Modal {
  constructor(modalId) {
    this.modalWindow = document.getElementById(modalId);
    this.closeButton = document.querySelector('.close-cross');

    this.listenCloseButton();
  }
  
  openModal() {
    this.modalWindow.classList.toggle('modal-showed');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modalWindow.classList.remove('modal-showed');
    document.body.style.overflow = '';
  }

  isOpenModal() {
    return this.modalWindow.classList.contains('modal-showed')
  }

  listenCloseButton() {
    this.closeButton.addEventListener('click', () => {
      this.closeModal();
    });
  }
}