import { CartManager } from './modules/cart.js';
import { MenuManager } from './modules/menu.js';
import { ReservationManager } from './modules/reservation.js';
import { GalleryManager } from './modules/gallery.js';
import { ReviewsManager } from './modules/reviews.js';
import { ContactManager } from './modules/contact.js';
import { AnimationManager } from './modules/animations.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons if loaded
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  // Initialize Core Managers
  const cart = new CartManager();
  const menu = new MenuManager(cart);
  const reservation = new ReservationManager();
  const gallery = new GalleryManager();
  const reviews = new ReviewsManager();
  const contact = new ContactManager();
  const animations = new AnimationManager();

  // Re-run lucide icon generator after dynamic renders
  setTimeout(() => {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }, 200);

  // Global smooth scroll helper for any anchor tags
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  console.log('%c🍽 ZIYOFAT — Premium Restoran Veb-sayti faollashtirildi', 'color: #D4A853; font-size: 14px; font-weight: bold;');
});
