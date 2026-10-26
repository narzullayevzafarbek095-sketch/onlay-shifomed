import { REVIEWS } from '../data/reviews.js';

export class ReviewsManager {
  constructor() {
    this.reviews = REVIEWS;
    this.currentIndex = 0;
    this.autoPlayInterval = null;
    this.isPaused = false;

    this.track = document.getElementById('reviews-track');
    this.dotsContainer = document.getElementById('reviews-dots');
    this.prevBtn = document.getElementById('reviews-prev');
    this.nextBtn = document.getElementById('reviews-next');
    this.carousel = document.getElementById('reviews-carousel');

    this.init();
  }

  init() {
    this.render();
    this.initEvents();
    this.startAutoPlay();
  }

  render() {
    if (!this.track) return;

    this.track.innerHTML = this.reviews.map(review => `
      <div class="review-card">
        <div class="review-header">
          <img src="${review.avatar}" alt="${review.name}" class="review-avatar" loading="lazy"/>
          <div class="review-author-info">
            <h4 class="review-author-name">${review.name}</h4>
            <span class="review-author-role">${review.role}</span>
          </div>
          <div class="review-stars">
            ${Array.from({ length: review.rating }).map(() => `
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#D4A853" stroke="#D4A853"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            `).join('')}
          </div>
        </div>
        <p class="review-text">“${review.text}”</p>
        <div class="review-footer">
          <span class="review-dish-tag">Taom: ${review.dish}</span>
          <span class="review-date">${review.date}</span>
        </div>
      </div>
    `).join('');

    if (this.dotsContainer) {
      this.dotsContainer.innerHTML = this.reviews.map((_, i) => `
        <button class="review-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Sharh ${i + 1}"></button>
      `).join('');
    }
  }

  initEvents() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        this.prev();
        this.restartAutoPlay();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        this.next();
        this.restartAutoPlay();
      });
    }

    if (this.dotsContainer) {
      this.dotsContainer.addEventListener('click', (e) => {
        const dot = e.target.closest('.review-dot');
        if (!dot) return;
        const index = parseInt(dot.getAttribute('data-index'), 10);
        this.goTo(index);
        this.restartAutoPlay();
      });
    }

    if (this.carousel) {
      this.carousel.addEventListener('mouseenter', () => {
        this.isPaused = true;
      });
      this.carousel.addEventListener('mouseleave', () => {
        this.isPaused = false;
      });
    }
  }

  goTo(index) {
    this.currentIndex = index;
    if (this.track) {
      this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }

    if (this.dotsContainer) {
      const dots = this.dotsContainer.querySelectorAll('.review-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === this.currentIndex);
      });
    }
  }

  next() {
    const nextIndex = (this.currentIndex + 1) % this.reviews.length;
    this.goTo(nextIndex);
  }

  prev() {
    const prevIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
    this.goTo(prevIndex);
  }

  startAutoPlay() {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    this.autoPlayInterval = setInterval(() => {
      if (!this.isPaused) {
        this.next();
      }
    }, 4500);
  }

  restartAutoPlay() {
    if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
    this.startAutoPlay();
  }
}
