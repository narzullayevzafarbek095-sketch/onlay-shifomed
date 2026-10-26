export class ToastManager {
  constructor() {
    this.container = null;
    this.init();
  }

  init() {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      container.setAttribute('aria-live', 'polite');
      document.body.appendChild(container);
    }
    this.container = container;
  }

  show({ title, message, type = 'success', duration = 3500, icon = 'check-circle' }) {
    if (!this.container) this.init();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type} animate-slide-in`;

    const iconSvg = this.getIconSvg(type, icon);

    toast.innerHTML = `
      <div class="toast-icon">
        ${iconSvg}
      </div>
      <div class="toast-content">
        <h4 class="toast-title">${title}</h4>
        <p class="toast-message">${message}</p>
      </div>
      <button class="toast-close" aria-label="Yopish">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
      <div class="toast-progress">
        <div class="toast-progress-bar" style="animation-duration: ${duration}ms"></div>
      </div>
    `;

    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
      this.dismiss(toast);
    });

    this.container.appendChild(toast);

    const timer = setTimeout(() => {
      this.dismiss(toast);
    }, duration);

    toast._timer = timer;
  }

  dismiss(toast) {
    if (toast._timer) clearTimeout(toast._timer);
    toast.classList.remove('animate-slide-in');
    toast.classList.add('animate-fade-out');
    toast.addEventListener('animationend', () => {
      toast.remove();
    }, { once: true });
  }

  getIconSvg(type, icon) {
    if (type === 'success') {
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4A853" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
    } else if (type === 'error') {
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E63946" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
    } else {
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4A853" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }
  }
}

export const toast = new ToastManager();
