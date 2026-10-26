import { GALLERY_ITEMS } from '../data/gallery.js';

export class GalleryManager {
  constructor() {
    this.items = GALLERY_ITEMS;
    this.activeFilter = 'all';
    this.currentIndex = 0;

    this.grid = document.getElementById('gallery-grid');
    this.filterBtns = document.querySelectorAll('.gallery-filter-btn');
    this.lightbox = document.getElementById('gallery-lightbox');
    this.lightboxImg = document.getElementById('lightbox-image');
    this.lightboxTitle = document.getElementById('lightbox-title');
    this.lightboxDesc = document.getElementById('lightbox-desc');
    this.lightboxCounter = document.getElementById('lightbox-counter');

    this.init();
  }

  init() {
    this.render();
    this.initEvents();
  }

  initEvents() {
    // Filter buttons
    this.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        this.activeFilter = filter;
        this.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.render();
      });
    });

    // Lightbox triggers
    if (this.grid) {
      this.grid.addEventListener('click', (e) => {
        const itemEl = e.target.closest('.gallery-item');
        if (!itemEl) return;
        const id = parseInt(itemEl.getAttribute('data-id'), 10);
        const filtered = this.getFilteredItems();
        const index = filtered.findIndex(item => item.id === id);
        if (index !== -1) {
          this.openLightbox(index);
        }
      });
    }

    // Lightbox navigation
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    const closeBtn = document.getElementById('lightbox-close');

    if (prevBtn) prevBtn.addEventListener('click', () => this.navigate(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => this.navigate(1));
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeLightbox());

    if (this.lightbox) {
      this.lightbox.addEventListener('click', (e) => {
        if (e.target === this.lightbox) {
          this.closeLightbox();
        }
      });
    }

    // Keyboard support
    window.addEventListener('keydown', (e) => {
      if (!this.lightbox || !this.lightbox.classList.contains('lightbox-active')) return;
      if (e.key === 'Escape') this.closeLightbox();
      if (e.key === 'ArrowLeft') this.navigate(-1);
      if (e.key === 'ArrowRight') this.navigate(1);
    });
  }

  getFilteredItems() {
    if (this.activeFilter === 'all') return this.items;
    return this.items.filter(item => item.category === this.activeFilter);
  }

  render() {
    if (!this.grid) return;
    const items = this.getFilteredItems();

    this.grid.innerHTML = items.map((item, index) => `
      <div class="gallery-item animate-card-entrance" data-id="${item.id}" style="animation-delay: ${index * 60}ms">
        <img src="${item.image}" alt="${item.title}" class="gallery-thumb" loading="lazy"/>
        <div class="gallery-overlay">
          <div class="gallery-badge">${item.categoryName}</div>
          <h4 class="gallery-item-title">${item.title}</h4>
          <p class="gallery-item-desc">${item.description}</p>
          <div class="gallery-zoom-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          </div>
        </div>
      </div>
    `).join('');
  }

  openLightbox(index) {
    const items = this.getFilteredItems();
    if (index < 0 || index >= items.length) return;
    this.currentIndex = index;
    this.updateLightboxContent();

    if (this.lightbox) {
      this.lightbox.classList.add('lightbox-active');
      document.body.style.overflow = 'hidden';
    }
  }

  closeLightbox() {
    if (this.lightbox) {
      this.lightbox.classList.remove('lightbox-active');
      document.body.style.overflow = '';
    }
  }

  navigate(dir) {
    const items = this.getFilteredItems();
    this.currentIndex = (this.currentIndex + dir + items.length) % items.length;
    this.updateLightboxContent();
  }

  updateLightboxContent() {
    const items = this.getFilteredItems();
    const item = items[this.currentIndex];
    if (!item) return;

    if (this.lightboxImg) {
      this.lightboxImg.src = item.image;
      this.lightboxImg.alt = item.title;
    }
    if (this.lightboxTitle) this.lightboxTitle.textContent = item.title;
    if (this.lightboxDesc) this.lightboxDesc.textContent = item.description;
    if (this.lightboxCounter) {
      this.lightboxCounter.textContent = `${this.currentIndex + 1} / ${items.length}`;
    }
  }
}
