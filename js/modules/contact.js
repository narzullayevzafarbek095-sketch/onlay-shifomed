import { toast } from './toast.js';
import { sound } from './sound.js';

export class ContactManager {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.init();
  }

  init() {
    if (!this.form) return;
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = this.form;

    const name = form.contactName.value.trim();
    const phone = form.contactPhone.value.trim();
    const subject = form.contactSubject.value.trim();
    const message = form.contactMessage.value.trim();

    if (!name || !phone || !message) {
      toast.show({
        title: 'Maydonlarni to‘ldiring',
        message: 'Ism, telefon raqami va xabar matnini kiriting',
        type: 'error'
      });
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="spinner-small"></span>
        <span>Xabar jo‘natilmoqda...</span>
      `;
    }

    setTimeout(() => {
      form.reset();

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Xabarni yuborish</span>`;
      }

      toast.show({
        title: 'Xabaringiz qabul qilindi!',
        message: 'Tez orada operatorlarimiz siz bilan bog‘lanishadi (Demo xabar)',
        type: 'success'
      });

      sound.playSuccess();
    }, 700);
  }
}
