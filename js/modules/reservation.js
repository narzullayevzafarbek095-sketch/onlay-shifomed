import { sound } from './sound.js';
import { toast } from './toast.js';

const RESERVATION_STORAGE_KEY = 'ziyofat_demo_reservations';

export class ReservationManager {
  constructor() {
    this.form = document.getElementById('reservation-form');
    this.modal = document.getElementById('reservation-confirmation-modal');
    this.dateInput = document.getElementById('res-date');

    this.init();
  }

  init() {
    if (this.dateInput) {
      // Set min date to today
      const today = new Date().toISOString().split('T')[0];
      this.dateInput.setAttribute('min', today);
      this.dateInput.value = today;
    }

    if (this.form) {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = this.form;

    const name = form.resName.value.trim();
    const phone = form.resPhone.value.trim();
    const date = form.resDate.value;
    const time = form.resTime.value;
    const guests = form.resGuests.value;
    const zone = form.resZone ? form.resZone.value : 'Umumiy zal';
    const notes = form.resNotes ? form.resNotes.value.trim() : '';

    if (!name || !phone || !date || !time || !guests) {
      toast.show({
        title: 'Barcha maydonlarni to‘ldiring',
        message: 'Ism, telefon, sana, vaqt va mehmonlar sonini ko‘rsating',
        type: 'error'
      });
      return;
    }

    if (phone.replace(/\D/g, '').length < 9) {
      toast.show({
        title: 'Telefon raqami noto‘g‘ri',
        message: 'Iltimos, haqiqiy telefon raqamini kiriting',
        type: 'error'
      });
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="spinner-small"></span>
        <span>Stol band qilinmoqda...</span>
      `;
    }

    setTimeout(() => {
      const code = 'STOL-' + Math.floor(1000 + Math.random() * 9000);
      const reservationData = {
        code,
        name,
        phone,
        date,
        time,
        guests,
        zone,
        notes,
        createdAt: new Date().toLocaleString('uz-UZ'),
        status: 'Demo band qilindi'
      };

      // Save to localStorage
      try {
        const list = JSON.parse(localStorage.getItem(RESERVATION_STORAGE_KEY) || '[]');
        list.unshift(reservationData);
        localStorage.setItem(RESERVATION_STORAGE_KEY, JSON.stringify(list.slice(0, 10)));
      } catch (err) {
        console.warn('Reservation storage failed:', err);
      }

      // Reset
      form.reset();
      if (this.dateInput) {
        this.dateInput.value = new Date().toISOString().split('T')[0];
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Stol band qilish</span>`;
      }

      this.showConfirmation(reservationData);
      sound.playSuccess();
    }, 700);
  }

  showConfirmation(data) {
    if (!this.modal) return;

    const codeEl = document.getElementById('confirm-res-code');
    const nameEl = document.getElementById('confirm-res-name');
    const dateTimeEl = document.getElementById('confirm-res-datetime');
    const guestsEl = document.getElementById('confirm-res-guests');
    const zoneEl = document.getElementById('confirm-res-zone');

    if (codeEl) codeEl.textContent = '#' + data.code;
    if (nameEl) nameEl.textContent = data.name + ' (' + data.phone + ')';
    if (dateTimeEl) dateTimeEl.textContent = `${data.date}, soat ${data.time}`;
    if (guestsEl) guestsEl.textContent = `${data.guests} nafar mehmon`;
    if (zoneEl) zoneEl.textContent = data.zone;

    this.modal.classList.add('modal-active');

    toast.show({
      title: 'Stol muvaffaqiyatli band qilindi!',
      message: `Sizning bron raqamingiz: #${data.code} (Demo)`,
      type: 'success'
    });
  }
}
