export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.closeButton = this.modal.querySelector('#modal-close-button');
    this.callCloseProperty = this.callClose.bind(this); //назвал callCloseProperty, чтобы не путаться с методом, для понимания своего
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#initOpen(buttonId);
  }

  open() {
    this.#initClose(this.shouldCloseOnOverlay); //вешаем слушатель на крестик
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    if(this.shouldCloseOnOverlay){
      this.overlay.addEventListener('click', this.callClose);
    }
  }
  
  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    this.overlay.removeEventListener('click', this.callClose);
    this.closeButton.removeEventListener('click', this.callClose); //снимаем слушатель с крестика
  }

  callClose = () => {
    this.close();
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }

  #initClose(shouldCloseOnOverlay) {
    const closeButton = this.modal.querySelector('#modal-close-button')
    closeButton.addEventListener('click', this.callClose);
  }
}