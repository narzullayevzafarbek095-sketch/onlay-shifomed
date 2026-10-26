export class AnimationManager {
  constructor() {
    this.header = document.getElementById('main-header');
    this.mobileMenuBtn = document.getElementById('mobile-menu-btn');
    this.mobileNav = document.getElementById('mobile-nav-drawer');
    this.mobileOverlay = document.getElementById('mobile-nav-overlay');
    this.backToTopBtn = document.getElementById('back-to-top');
    this.preloader = document.getElementById('preloader');

    this.init();
  }

  init() {
    this.initPreloader();
    this.initStickyHeader();
    this.initMobileNav();
    this.initBackToTop();
    this.initScrollReveal();
    this.initNavSmoothScroll();
  }

  initPreloader() {
    if (!this.preloader) return;
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.preloader.classList.add('preloader-hidden');
      }, 400);
    });

    // Fallback if load event already fired
    setTimeout(() => {
      if (this.preloader) this.preloader.classList.add('preloader-hidden');
    }, 1500);
  }

  initStickyHeader() {
    if (!this.header) return;
    const handleScroll = () => {
      if (window.scrollY > 50) {
        this.header.classList.add('header-scrolled');
      } else {
        this.header.classList.remove('header-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  initMobileNav() {
    if (!this.mobileMenuBtn || !this.mobileNav) return;

    const toggle = (open) => {
      const isOpen = open !== undefined ? open : !this.mobileNav.classList.contains('mobile-nav-open');
      this.mobileNav.classList.toggle('mobile-nav-open', isOpen);
      if (this.mobileOverlay) this.mobileOverlay.classList.toggle('active', isOpen);
      this.mobileMenuBtn.classList.toggle('is-active', isOpen);
      this.mobileMenuBtn.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    this.mobileMenuBtn.addEventListener('click', () => toggle());

    if (this.mobileOverlay) {
      this.mobileOverlay.addEventListener('click', () => toggle(false));
    }

    // Close when clicking nav links inside mobile drawer
    this.mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggle(false));
    });
  }

  initBackToTop() {
    if (!this.backToTopBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        this.backToTopBtn.classList.add('visible');
      } else {
        this.backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    this.backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  initScrollReveal() {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  initNavSmoothScroll() {
    // Active link highlight on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const spyScroll = () => {
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', spyScroll, { passive: true });
  }
}
