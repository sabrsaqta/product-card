export class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
  }

  showModal(modalClass, overlayClass) {
    this.modal.classList.add(modalClass);
    this.overlay.classList.add(overlayClass);
  }

  closeModal(modalClass, overlayClass) {
    this.modal.classList.remove(modalClass);
    this.overlay.classList.remove(overlayClass);
  }
}