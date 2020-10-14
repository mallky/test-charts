import { action, makeObservable, observable } from 'mobx';
import { Days } from '../constants/Days';

class ModalStore {
  isOpen: boolean = false;
  day: Days = Days.monday;
  time: string = '';

  constructor() {
    makeObservable(this, {
      isOpen: observable,
      day: observable,
      time: observable,
      openModal: action,
      closeModal: action,
    });

    this.isOpen = false;
  }

  openModal(day: Days, time: string) {
    this.isOpen = true;
    this.day = day;
    this.time = time;
  }

  closeModal() {
    this.isOpen = false;
  }
}

export default ModalStore;
