import { convertFormDataToObject } from "./homework-9.js";
import { Modal } from "./modal.js";
/*
Создать файл Form.js и реализовать класс для формы
под названием Form. Он будет принимать 1 параметр - айди формы.
Внутри класса будут методы:
  I. Для получения всех значений формы.
 II. Для проверки валидности формы (метод возвращает true/false в зависимости
 от того, валидна ли форма).
 III. Для сброса значений формы.
Используя данный класс - переписать логику задания №9,
связанной с формами. Как? Используя внутренние методы
- мы можем управлять через айди формы получением значений и всем,
что должна делать модалка.
*/

export class Form {
  constructor(idForm) {
    this.idForm = idForm;
    this.myFormWindow = document.getElementById(this.idForm);
    this.userObject = null;
  }

  reset() {
    this.myFormWindow.reset();
  }

  submit(event) {
    this.userObject = convertFormDataToObject(event);
    const createdOnTime = new Date();
    this.userObject.createdOn = createdOnTime.toLocaleTimeString();
    this.reset();
  }

  isValid(password, passwordRepeat, modalForm) {
    return !(password.value != passwordRepeat.value || !modalForm.checkValidity());
  }
}