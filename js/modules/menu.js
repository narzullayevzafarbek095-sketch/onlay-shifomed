import { DISHES, CATEGORIES } from '../data/dishes.js';

export class MenuManager {
  constructor(cartManager) {
    this.cartManager = cartManager;
    this.activeCategory = 'barchasi';
    this.searchQuery = '';
    this.sortBy = 'default';

    this.container = document.getElementById('menu-grid');
    this.tabsContainer = document.getElementById('menu-category-tabs');
    this.searchInput = document.getElementById('menu-search-input');
    this.sortSelect = document.getElementById('menu-sort-select');
    this.emptyState = document.getElementById('menu-empty-state');
    this.resultsCount = document.getElementById('menu-results-count');

    this.init();
  }

  init() {
    this.renderTabs();
    this.initEvents();
    this.renderDishes();
  }

  renderTabs() {
    if (!this.tabsContainer) return;
    this.tabsContainer.innerHTML = CATEGORIES.map(cat => `
      <button class="menu-tab-btn ${cat.id === this.activeCategory ? 'active' : ''}" data-category="${cat.id}">
        ${this.getCategoryIcon(cat.id)}
        <span>${cat.name}</span>
      </button>
    `).join('');

    this.tabsContainer.querySelectorAll('.menu-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-category');
        this.activeCategory = cat;
        this.tabsContainer.querySelectorAll('.menu-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.renderDishes();
      });
    });
  }

  initEvents() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderDishes();
      });
    }

    if (this.sortSelect) {
      this.sortSelect.addEventListener('change', (e) => {
        this.sortBy = e.target.value;
        this.renderDishes();
      });
    }

    // Delegate cart addition
    if (this.container) {
      this.container.addEventListener('click', (e) => {
        const addBtn = e.target.closest('.btn-add-to-cart');
        if (!addBtn) return;
        const dishId = addBtn.getAttribute('data-id');
        const dish = DISHES.find(d => d.id === dishId);
        if (dish && this.cartManager) {
          this.cartManager.addItem(dish);
          
          // Animate button briefly
          addBtn.classList.add('btn-added-pulse');
          setTimeout(() => addBtn.classList.remove('btn-added-pulse'), 500);
        }
      });
    }
  }

  getFilteredDishes() {
    return DISHES.filter(dish => {
      const matchesCategory = this.activeCategory === 'barchasi' || dish.category === this.activeCategory;
      const matchesSearch = !this.searchQuery || 
        dish.name.toLowerCase().includes(this.searchQuery) || 
        dish.description.toLowerCase().includes(this.searchQuery) ||
        dish.categoryName.toLowerCase().includes(this.searchQuery);
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (this.sortBy === 'price-asc') return a.price - b.price;
      if (this.sortBy === 'price-desc') return b.price - a.price;
      if (this.sortBy === 'rating') return b.rating - a.rating;
      return 0; // default order
    });
  }

  getCategoryIcon(catId) {
    switch (catId) {
      case 'barchasi':
        return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"></path><line x1="15" y1="2" x2="15" y2="22"></line><line x1="9" y1="2" x2="9" y2="7"></line><line x1="6" y1="2" x2="6" y2="7"></line><line x1="3" y1="2" x2="3" y2="7"></line><path d="M3 7a3 3 0 0 0 6 0"></path><line x1="6" y1="7" x2="6" y2="22"></line></svg>`;
      case 'milliy':
        return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z"></path></svg>`;
      case 'fastfood':
        return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="3" rx="1"></rect><path d="M5 11a7 7 0 0 1 14 0"></path><path d="M5 18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4H5v4z"></path><line x1="4" y1="14" x2="20" y2="14"></line></svg>`;
      case 'pitsa':
        return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 11h.01"></path><path d="M11 15h.01"></path><path d="M16 16h.01"></path><path d="m2 16 20 6-6-20A20 20 0 0 0 2 16Z"></path><path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"></path></svg>`;
      case 'ichimliklar':
        return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line></svg>`;
      case 'shirinliklar':
        return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m20 21-8-8-8 8"></path><path d="M4 21V10a7 7 0 0 1 14 0v11"></path><circle cx="12" cy="4" r="1.5"></circle></svg>`;
      default:
        return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>`;
    }
  }

  getBadgeIcon(badgeText) {
    if (!badgeText) return '';
    if (badgeText.includes('Xit') || badgeText.includes('Mashhur')) {
      return `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;
    }
    if (badgeText.includes('Chef') || badgeText.includes('Premial')) {
      return `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`;
    }
    if (badgeText.includes('Tandir') || badgeText.includes('Issiq')) {
      return `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z"></path></svg>`;
    }
    return `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
  }

  formatPrice(num) {
    return num.toLocaleString('uz-UZ') + " so‘m";
  }

  renderDishes() {
    if (!this.container) return;
    const dishes = this.getFilteredDishes();

    if (this.resultsCount) {
      this.resultsCount.textContent = `${dishes.length} ta taom topildi`;
    }

    if (dishes.length === 0) {
      this.container.innerHTML = '';
      if (this.emptyState) this.emptyState.style.display = 'block';
      return;
    }

    if (this.emptyState) this.emptyState.style.display = 'none';

    this.container.innerHTML = dishes.map((dish, index) => `
      <div class="dish-card animate-card-entrance" style="animation-delay: ${index * 45}ms">
        <div class="dish-image-wrapper">
          <img src="${dish.image}" alt="${dish.name}" class="dish-image" loading="lazy"/>
          ${dish.badge ? `<span class="dish-badge">${this.getBadgeIcon(dish.badge)} <span>${dish.badge}</span></span>` : ''}
          <div class="dish-prep-time">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>${dish.prepTime}</span>
          </div>
        </div>
        <div class="dish-content">
          <div class="dish-header">
            <span class="dish-category-tag">${dish.categoryName}</span>
            <div class="dish-rating">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#D4A853" stroke="#D4A853" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span>${dish.rating}</span>
              <span class="dish-reviews-count">(${dish.reviewsCount})</span>
            </div>
          </div>
          <h3 class="dish-title">${dish.name}</h3>
          <p class="dish-desc">${dish.description}</p>
          <div class="dish-footer">
            <div class="dish-price-wrap">
              <span class="dish-price-label">Narxi:</span>
              <span class="dish-price">${this.formatPrice(dish.price)}</span>
            </div>
            <button class="btn btn-primary btn-add-to-cart" data-id="${dish.id}" aria-label="${dish.name} savatga qo'shish">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              <span>Savatga</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }
}
