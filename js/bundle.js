// ==========================================================
// ZIYOFAT — Complete Standalone Application Bundle
// Zero-dependency, 100% offline-ready & compatible with file:/// protocol
// ==========================================================

// 1. DATA: DISHES & CATEGORIES
const DISHES = [
  {
    id: 'osh-ziyofat',
    name: 'Ziyofat To‘y Oshi',
    category: 'milliy',
    categoryName: 'Milliy taomlar',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    description: 'Devzira guruch, sarxil qo‘y go‘shti, sariq sabzi, no‘xat, mayiz va bedana tuxumlari bilan tayyorlangan shohona osh.',
    badge: 'Xit taom',
    rating: 4.9,
    reviewsCount: 142,
    prepTime: '20-25 daqiqa',
    calories: '680 kkal'
  },
  {
    id: 'manti-an-ana',
    name: 'An’anaviy Tandir Manti',
    category: 'milliy',
    categoryName: 'Milliy taomlar',
    price: 48000,
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80',
    description: 'Yupqa xamir ichida mayda to‘g‘ralgan mol go‘shti, piyoz va xushbo‘y ziravorlar. Qatiq va ko‘katlar bilan tortiladi.',
    badge: 'Tavsiya',
    rating: 4.8,
    reviewsCount: 98,
    prepTime: '15-20 daqiqa',
    calories: '490 kkal'
  },
  {
    id: 'uygurcha-lagmon',
    name: 'Uyg‘urcha Cho‘zma Lag‘mon',
    category: 'milliy',
    categoryName: 'Milliy taomlar',
    price: 52000,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    description: 'Qo‘lda cho‘zilgan yangi xamir, shirali mol go‘shti, bolgar qalampiri, selderey va maxsus xushbo‘y sous uyg‘unligi.',
    badge: 'Mashhur',
    rating: 4.9,
    reviewsCount: 115,
    prepTime: '15-20 daqiqa',
    calories: '540 kkal'
  },
  {
    id: 'tandir-somsa',
    name: 'Tandir Go‘shtli Somsa (3 dona)',
    category: 'milliy',
    categoryName: 'Milliy taomlar',
    price: 36000,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    description: 'Qarsildoq qatlama xamir, mayin qo‘y go‘shti, sedana va kunjut sepilgan issiq tandir somsalari.',
    badge: 'Issiq tandir',
    rating: 4.9,
    reviewsCount: 88,
    prepTime: '10-15 daqiqa',
    calories: '420 kkal'
  },
  {
    id: 'qo-y-shashlik',
    name: 'Qo‘y Go‘shtidan Mayin Shashlik',
    category: 'milliy',
    categoryName: 'Milliy taomlar',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    description: 'Ko‘mir cho‘g‘ida pishirilgan shirali lula va qiymali shashlik. Sirkalangan piyoz va yangi kashnich bilan.',
    badge: 'Xit taom',
    rating: 5.0,
    reviewsCount: 167,
    prepTime: '15 daqiqa',
    calories: '450 kkal'
  },
  {
    id: 'kosa-shorva',
    name: 'Xonadon Sho‘rvasi',
    category: 'milliy',
    categoryName: 'Milliy taomlar',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    description: 'Qo‘y suyagi va go‘shtidan uzoq qaynatilgan tiniq va xushbo‘y sho‘rva, yangi sabzavotlar va shifobaxsh ko‘katlar.',
    badge: null,
    rating: 4.7,
    reviewsCount: 64,
    prepTime: '10-15 daqiqa',
    calories: '380 kkal'
  },
  {
    id: 'tandir-kabob',
    name: 'G‘ijduvon Tandir Kabob',
    category: 'milliy',
    categoryName: 'Milliy taomlar',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: 'Archa shoxlari tutunida pishirilgan maxsus qo‘y qovurg‘alari. Og‘izda eriydigan mayinlik va takrorlanmas hid.',
    badge: 'Chef tanlovi',
    rating: 5.0,
    reviewsCount: 130,
    prepTime: '25-30 daqiqa',
    calories: '750 kkal'
  },
  {
    id: 'norin-an-ana',
    name: 'Kaziyli Toshkent Norini',
    category: 'milliy',
    categoryName: 'Milliy taomlar',
    price: 58000,
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=800&q=80',
    description: 'Qo‘lda mayda qirqilgan nozik xamir, ot go‘shti va halol ot go‘shti qazisi. Issiq suzma sho‘rvasi bilan taqdim etiladi.',
    badge: 'Tarixiy lazzat',
    rating: 4.8,
    reviewsCount: 79,
    prepTime: '10 daqiqa',
    calories: '510 kkal'
  },
  {
    id: 'pitsa-margarita',
    name: 'Italyancha Pitsa Margarita',
    category: 'pitsa',
    categoryName: 'Pitsa',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80',
    description: 'Italiya unidan tayyorlangan yupqa qarsildoq xamir, San Marzano pomidor sousi, yangi Mozzarella pishlog‘i va rayhon barglari.',
    badge: 'Klassik',
    rating: 4.8,
    reviewsCount: 92,
    prepTime: '15-20 daqiqa',
    calories: '620 kkal'
  },
  {
    id: 'pitsa-peperoni',
    name: 'Maxsus Achchiq Pitsa Peperoni',
    category: 'pitsa',
    categoryName: 'Pitsa',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
    description: 'Halol mol go‘shtidan tayyorlangan qarsildoq peperoni kolbasalari, mo‘l-ko‘l Mozzarella va o‘tkir sous.',
    badge: 'Xit taom',
    rating: 4.9,
    reviewsCount: 140,
    prepTime: '15-20 daqiqa',
    calories: '710 kkal'
  },
  {
    id: 'ziyofat-burger',
    name: 'Ziyofat Blek Angus Burger',
    category: 'fastfood',
    categoryName: 'Fast food',
    price: 62000,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    description: 'Marmar mol go‘shtidan shirali 200g kotlet, erigan Cheddar pishlog‘i, karamellangan piyoz, aysberg va maxsus trufel sousi.',
    badge: 'Premial',
    rating: 4.9,
    reviewsCount: 156,
    prepTime: '15 daqiqa',
    calories: '650 kkal'
  },
  {
    id: 'ziyofat-lavash',
    name: 'Pishloqli Ziyofat Lavash',
    category: 'fastfood',
    categoryName: 'Fast food',
    price: 42000,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
    description: 'Grilda pishirilgan mayin mol go‘shti, Golland pishlog‘i, yangi pomidor va bodring, xushta’m sarimsoqli oq sous.',
    badge: null,
    rating: 4.7,
    reviewsCount: 84,
    prepTime: '10-12 daqiqa',
    calories: '490 kkal'
  },
  {
    id: 'muzdek-cola',
    name: 'Muzdek Coca-Cola (0.5L shisha)',
    category: 'ichimliklar',
    categoryName: 'Ichimliklar',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    description: 'Shisha idishdagi muzdek klassik Coca-Cola, limon bo‘lagi va tabiiy muz bilan tortiladi.',
    badge: null,
    rating: 4.9,
    reviewsCount: 52,
    prepTime: '3 daqiqa',
    calories: '140 kkal'
  },
  {
    id: 'yangi-limonad',
    name: 'Tabiiy Yalpizli Sitrus Limonad (1L)',
    category: 'ichimliklar',
    categoryName: 'Ichimliklar',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    description: 'Yangi siqilgan laym, apelsin, xushbo‘y yalpiz barglari va tog‘ asalidan tayyorlangan tetiklashtiruvchi mualliflik ichimligi.',
    badge: 'Tavsiya',
    rating: 5.0,
    reviewsCount: 76,
    prepTime: '5-7 daqiqa',
    calories: '90 kkal'
  },
  {
    id: 'nyu-york-chizkeyk',
    name: 'Nyu-York Klassik Chizkeyk',
    category: 'shirinliklar',
    categoryName: 'Shirinliklar',
    price: 42000,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    description: 'Filadelfiya qaymoqli pishlog‘i, vanil va tabiiy malina jem sousi bilan bezatilgan shohona shirinlik.',
    badge: 'Nozik ta’m',
    rating: 4.9,
    reviewsCount: 91,
    prepTime: '5 daqiqa',
    calories: '360 kkal'
  },
  {
    id: 'shokoladli-fondan',
    name: 'Fransuz Shokoladli Fondani',
    category: 'shirinliklar',
    categoryName: 'Shirinliklar',
    price: 46000,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    description: 'Issiq oquvchi Belgiya qora shokoladi va yonida sovuq vanilli muzqaymoq koptogi. Shirinlik ixlosmandlari uchun.',
    badge: 'Chef tanlovi',
    rating: 5.0,
    reviewsCount: 110,
    prepTime: '12-15 daqiqa',
    calories: '440 kkal'
  }
];

const CATEGORIES = [
  { id: 'barchasi', name: 'Barchasi', icon: 'utensils' },
  { id: 'milliy', name: 'Milliy taomlar', icon: 'flame' },
  { id: 'fastfood', name: 'Fast food', icon: 'sandwich' },
  { id: 'pitsa', name: 'Pitsa', icon: 'pizza' },
  { id: 'ichimliklar', name: 'Ichimliklar', icon: 'cup-soda' },
  { id: 'shirinliklar', name: 'Shirinliklar', icon: 'cake-slice' }
];

// 2. DATA: REVIEWS
const REVIEWS = [
  {
    id: 1,
    name: 'Alisher Qodirov',
    role: 'Doimiy mehmon (Demo sharh)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '14-Oktyabr, 2026',
    dish: 'Ziyofat To‘y Oshi',
    text: 'Ziyofat restoranida oilamiz bilan kechki ovqat qildik. Oshning ta’mi xuddi Samarqand to‘ylaridagidek benuqson! Go‘shti og‘izda eriydi, xizmat ko‘rsatish esa oliy darajada.'
  },
  {
    id: 2,
    name: 'Madina Usmonova',
    role: 'Oila bekasi (Demo sharh)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '18-Oktyabr, 2026',
    dish: 'Fransuz Shokoladli Fondani',
    text: 'Muhit juda qulay va osoyishta. Bolalar bilan kelish uchun ajoyib maskan. Chizkeyk va fondan shirinliklari kutilganidan ham a’lo chiqdi. Barchaga tavsiya qilaman!'
  },
  {
    id: 3,
    name: 'Jahongir Rahimov',
    role: 'Tadbirkor (Demo sharh)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '20-Oktyabr, 2026',
    dish: 'G‘ijduvon Tandir Kabob',
    text: 'Biznes hamkorlarimiz bilan VIP xonada stol band qilgan edik. Tandir kabob va shashliklar xushbo‘y, go‘shti judayam mayin. Tashkiliy ishlar va interyer alohida e’tirofga loyiq.'
  },
  {
    id: 4,
    name: 'Nodira Salimova',
    role: 'Dizayner (Demo sharh)',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '22-Oktyabr, 2026',
    dish: 'Italyancha Pitsa Peperoni',
    text: 'Restoranning ichki dizayni va yoritilishi haqiqiy estetika! Pitsasi qarsildoq, mahsulotlar sifatliligi birinchi luqmadanoq seziladi. Savat orqali buyurtma berish ham juda qulay.'
  },
  {
    id: 5,
    name: 'Bobur Mirzayev',
    role: 'Gastronom ixlosmand (Demo sharh)',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '24-Oktyabr, 2026',
    dish: 'Uyg‘urcha Cho‘zma Lag‘mon',
    text: 'Lag‘mon xamiri haqiqatan qo‘lda cho‘zilgan, sabzavotlari esa yangi va qarsildoq pishirilgan. Shahardagi eng munosib restoranlardan biri!'
  }
];

// 3. DATA: GALLERY
const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Markaziy Shaffof Zal',
    category: 'interior',
    categoryName: 'Interyer',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    description: 'Zamonaviy billur qandillar va sokin yorug‘lik bilan boyitilgan hashamatli bosh zalimiz.'
  },
  {
    id: 2,
    title: 'Shohona Milliy Dasturxon',
    category: 'food',
    categoryName: 'Taomlar',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    description: 'Sarxil go‘shtlar va yangi sabzavotlardan tayyorlangan mualliflik taomlari taqdimoti.'
  },
  {
    id: 3,
    title: 'Bosh Oshpaz Mahorati',
    category: 'chef',
    categoryName: 'Oshpazlar',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80',
    description: 'Har bir taomga san’at asari sifatida yondashuvchi xalqaro toifadagi bosh oshpazimiz.'
  },
  {
    id: 4,
    title: 'Oilaviy Tantana va Qutlovlar',
    category: 'dining',
    categoryName: 'Tadbirlar',
    image: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?auto=format&fit=crop&w=1200&q=80',
    description: 'Yaqinlar davrasida o‘tadigan iliq suhbatlar va unutilmas quvonchli lahzalar.'
  },
  {
    id: 5,
    title: 'Ochiq Osmon Ostidagi Teras',
    category: 'terrace',
    categoryName: 'Teras',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80',
    description: 'Kechki shahar manzarasi, toza havo va mayin musiqa sadosida dam olish imkoniyati.'
  },
  {
    id: 6,
    title: 'Alohida VIP Xona',
    category: 'interior',
    categoryName: 'Interyer',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Muhim biznes uchrashuvlari va sokin oilaviy kechalar uchun mo‘ljallangan maxsus xona.'
  },
  {
    id: 7,
    title: 'Issiq Non va Milliy Osh',
    category: 'food',
    categoryName: 'Taomlar',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
    description: 'Dasturxonga tortilayotgan shohona osh va tandirdan endigina uzilgan shirmoy nonlar.'
  },
  {
    id: 8,
    title: 'Yashil Bog‘li Romantik Burchak',
    category: 'terrace',
    categoryName: 'Teras',
    image: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=1200&q=80',
    description: 'Jonli o‘simliklar va yoqimli chiroqlar bilan o‘ralgan romantik stol.'
  }
];

// 4. AUDIO MANAGER
class SoundManager {
  constructor() {
    this.audioCtx = null;
    this.enabled = true;
  }
  init() {
    if (!this.audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtx();
    }
  }
  playPop() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.12);
    } catch {}
  }
  playSuccess() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
      const now = this.audioCtx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);
        gain.gain.setValueAtTime(0.06, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.25);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.25);
      });
    } catch {}
  }
}
const sound = new SoundManager();

// 5. TOAST MANAGER
class ToastManager {
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
  show({ title, message, type = 'success', duration = 3500 }) {
    if (!this.container) this.init();
    const toast = document.createElement('div');
    toast.className = `toast toast-${type} animate-slide-in`;
    const iconSvg = type === 'success' 
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4A853" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E63946" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;

    toast.innerHTML = `
      <div class="toast-icon">${iconSvg}</div>
      <div class="toast-content">
        <h4 class="toast-title">${title}</h4>
        <p class="toast-message">${message}</p>
      </div>
      <button class="toast-close" aria-label="Yopish">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
      <div class="toast-progress">
        <div class="toast-progress-bar" style="animation-duration: ${duration}ms"></div>
      </div>
    `;

    toast.querySelector('.toast-close').addEventListener('click', () => this.dismiss(toast));
    this.container.appendChild(toast);
    toast._timer = setTimeout(() => this.dismiss(toast), duration);
  }
  dismiss(toast) {
    if (toast._timer) clearTimeout(toast._timer);
    toast.classList.remove('animate-slide-in');
    toast.classList.add('animate-fade-out');
    toast.addEventListener('animationend', () => toast.remove(), { once: true });
  }
}
const toast = new ToastManager();

// 6. CART MANAGER
const STORAGE_KEY = 'ziyofat_cart_v1';
const ORDERS_STORAGE_KEY = 'ziyofat_demo_orders';
const DELIVERY_FEE = 15000;
const FREE_DELIVERY_THRESHOLD = 150000;

class CartManager {
  constructor() {
    this.items = this.loadFromStorage();
    this.discountPercent = 0;
    this.appliedPromo = null;
    this.isDrawerOpen = false;

    this.cartDrawer = document.getElementById('cart-drawer');
    this.cartOverlay = document.getElementById('cart-overlay');
    this.cartItemsContainer = document.getElementById('cart-items-list');
    this.cartCountBadges = document.querySelectorAll('.cart-count-badge');
    this.cartSubtotalEl = document.getElementById('cart-subtotal');
    this.cartDeliveryEl = document.getElementById('cart-delivery-fee');
    this.cartDiscountRow = document.getElementById('cart-discount-row');
    this.cartDiscountEl = document.getElementById('cart-discount-amount');
    this.cartTotalEl = document.getElementById('cart-total-price');
    this.cartEmptyState = document.getElementById('cart-empty-state');
    this.cartFooter = document.getElementById('cart-footer');
    this.checkoutModal = document.getElementById('checkout-modal');
    this.orderConfirmModal = document.getElementById('order-confirmation-modal');

    this.initEvents();
    this.render();
  }

  loadFromStorage() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  saveToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
    } catch (e) {
      console.warn('Storage save error:', e);
    }
  }

  initEvents() {
    document.querySelectorAll('[data-action="open-cart"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openCart();
      });
    });

    document.querySelectorAll('[data-action="close-cart"]').forEach(btn => {
      btn.addEventListener('click', () => this.closeCart());
    });

    if (this.cartOverlay) {
      this.cartOverlay.addEventListener('click', () => this.closeCart());
    }

    const checkoutBtn = document.getElementById('btn-checkout');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        if (this.items.length === 0) {
          toast.show({
            title: 'Savat bo‘sh',
            message: 'Buyurtma berish uchun avval taom tanlang',
            type: 'error'
          });
          return;
        }
        this.closeCart();
        this.openCheckoutModal();
      });
    }

    const promoBtn = document.getElementById('btn-apply-promo');
    const promoInput = document.getElementById('cart-promo-input');
    if (promoBtn && promoInput) {
      promoBtn.addEventListener('click', () => {
        const code = promoInput.value.trim().toUpperCase();
        if (code === 'ZIYOFAT' || code === 'ZIYOFAT10') {
          this.discountPercent = 10;
          this.appliedPromo = code;
          toast.show({
            title: 'Promokod qabul qilindi!',
            message: '10% chegirma hisoblandi',
            type: 'success'
          });
          this.render();
        } else if (code === 'VIP20') {
          this.discountPercent = 20;
          this.appliedPromo = code;
          toast.show({
            title: 'VIP Promokod!',
            message: '20% chegirma taqdim etildi',
            type: 'success'
          });
          this.render();
        } else if (code) {
          toast.show({
            title: 'Promokod topilmadi',
            message: 'To‘g‘ri promokodni kiriting (Masalan: ZIYOFAT10)',
            type: 'error'
          });
        }
      });
    }

    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
      checkoutForm.addEventListener('submit', (e) => this.handleCheckoutSubmit(e));
    }

    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-close-modal');
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.remove('modal-active');
      });
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (this.isDrawerOpen) this.closeCart();
        if (this.checkoutModal?.classList.contains('modal-active')) {
          this.checkoutModal.classList.remove('modal-active');
        }
        if (this.orderConfirmModal?.classList.contains('modal-active')) {
          this.orderConfirmModal.classList.remove('modal-active');
        }
      }
    });
  }

  addItem(dish) {
    const existing = this.items.find(item => item.id === dish.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({
        id: dish.id,
        name: dish.name,
        price: dish.price,
        image: dish.image,
        categoryName: dish.categoryName,
        quantity: 1
      });
    }
    this.saveToStorage();
    this.render();
    sound.playPop();
    toast.show({
      title: 'Savatga qo‘shildi',
      message: `${dish.name} savatingizga muvaffaqiyatli qo‘shildi`,
      type: 'success'
    });
  }

  updateQuantity(dishId, delta) {
    const itemIndex = this.items.findIndex(item => item.id === dishId);
    if (itemIndex === -1) return;

    this.items[itemIndex].quantity += delta;
    if (this.items[itemIndex].quantity <= 0) {
      const removedName = this.items[itemIndex].name;
      this.items.splice(itemIndex, 1);
      toast.show({
        title: 'Taom o‘chirildi',
        message: `${removedName} savatdan olib tashlandi`,
        type: 'info'
      });
    }
    this.saveToStorage();
    this.render();
    sound.playPop();
  }

  removeItem(dishId) {
    const item = this.items.find(i => i.id === dishId);
    if (item) {
      this.items = this.items.filter(i => i.id !== dishId);
      this.saveToStorage();
      this.render();
      sound.playPop();
      toast.show({
        title: 'Taom o‘chirildi',
        message: `${item.name} savatdan olib tashlandi`,
        type: 'info'
      });
    }
  }

  clearCart() {
    this.items = [];
    this.appliedPromo = null;
    this.discountPercent = 0;
    this.saveToStorage();
    this.render();
  }

  getTotals() {
    const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const count = this.items.reduce((sum, item) => sum + item.quantity, 0);
    let delivery = 0;
    if (subtotal > 0) {
      delivery = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
    }
    const discountAmount = Math.round((subtotal * this.discountPercent) / 100);
    const total = Math.max(0, subtotal - discountAmount + delivery);
    return { subtotal, delivery, discountAmount, total, count };
  }

  formatPrice(num) {
    return num.toLocaleString('uz-UZ') + " so‘m";
  }

  render() {
    const { subtotal, delivery, discountAmount, total, count } = this.getTotals();

    this.cartCountBadges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-flex' : 'none';
    });

    if (this.items.length === 0) {
      if (this.cartEmptyState) this.cartEmptyState.style.display = 'flex';
      if (this.cartItemsContainer) this.cartItemsContainer.style.display = 'none';
      if (this.cartFooter) this.cartFooter.style.display = 'none';
      return;
    }

    if (this.cartEmptyState) this.cartEmptyState.style.display = 'none';
    if (this.cartItemsContainer) this.cartItemsContainer.style.display = 'block';
    if (this.cartFooter) this.cartFooter.style.display = 'block';

    if (this.cartItemsContainer) {
      this.cartItemsContainer.innerHTML = this.items.map(item => `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" loading="lazy"/>
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.name}</h4>
            <span class="cart-item-category">${item.categoryName || ''}</span>
            <div class="cart-item-price">${this.formatPrice(item.price)}</div>
          </div>
          <div class="cart-item-controls">
            <button class="cart-qty-btn" data-action="dec" data-id="${item.id}" aria-label="Kamaytirish">−</button>
            <span class="cart-qty-val">${item.quantity}</span>
            <button class="cart-qty-btn" data-action="inc" data-id="${item.id}" aria-label="Ko'paytirish">+</button>
            <button class="cart-remove-btn" data-action="remove" data-id="${item.id}" aria-label="O'chirish">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </div>
      `).join('');

      this.cartItemsContainer.querySelectorAll('.cart-qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          const act = btn.getAttribute('data-action');
          this.updateQuantity(id, act === 'inc' ? 1 : -1);
        });
      });

      this.cartItemsContainer.querySelectorAll('.cart-remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          this.removeItem(id);
        });
      });
    }

    if (this.cartSubtotalEl) this.cartSubtotalEl.textContent = this.formatPrice(subtotal);
    if (this.cartDeliveryEl) {
      this.cartDeliveryEl.textContent = delivery === 0 ? 'BEPUL' : this.formatPrice(delivery);
      if (delivery === 0) {
        this.cartDeliveryEl.classList.add('text-free');
      } else {
        this.cartDeliveryEl.classList.remove('text-free');
      }
    }

    if (this.cartDiscountRow && this.cartDiscountEl) {
      if (discountAmount > 0) {
        this.cartDiscountRow.style.display = 'flex';
        this.cartDiscountEl.textContent = `-${this.formatPrice(discountAmount)} (${this.discountPercent}%)`;
      } else {
        this.cartDiscountRow.style.display = 'none';
      }
    }

    if (this.cartTotalEl) this.cartTotalEl.textContent = this.formatPrice(total);
  }

  openCart() {
    this.isDrawerOpen = true;
    if (this.cartDrawer) this.cartDrawer.classList.add('cart-drawer-open');
    if (this.cartOverlay) this.cartOverlay.classList.add('cart-overlay-active');
    document.body.style.overflow = 'hidden';
  }

  closeCart() {
    this.isDrawerOpen = false;
    if (this.cartDrawer) this.cartDrawer.classList.remove('cart-drawer-open');
    if (this.cartOverlay) this.cartOverlay.classList.remove('cart-overlay-active');
    document.body.style.overflow = '';
  }

  openCheckoutModal() {
    const { subtotal, delivery, discountAmount, total } = this.getTotals();
    const summaryList = document.getElementById('checkout-items-summary');
    const checkoutTotal = document.getElementById('checkout-modal-total');

    if (summaryList) {
      summaryList.innerHTML = this.items.map(item => `
        <div class="checkout-summary-item">
          <span>${item.name} × ${item.quantity}</span>
          <span class="font-medium">${this.formatPrice(item.price * item.quantity)}</span>
        </div>
      `).join('') + `
        <div class="checkout-summary-row mt-2 pt-2 border-t">
          <span>Yetkazib berish:</span>
          <span>${delivery === 0 ? 'BEPUL' : this.formatPrice(delivery)}</span>
        </div>
        ${discountAmount > 0 ? `
          <div class="checkout-summary-row text-gold">
            <span>Chegirma (${this.discountPercent}%):</span>
            <span>-${this.formatPrice(discountAmount)}</span>
          </div>
        ` : ''}
      `;
    }

    if (checkoutTotal) checkoutTotal.textContent = this.formatPrice(total);
    if (this.checkoutModal) this.checkoutModal.classList.add('modal-active');
  }

  handleCheckoutSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.customerName.value.trim();
    const phone = form.customerPhone.value.trim();
    const address = form.customerAddress.value.trim();
    const payment = form.paymentMethod.value;
    const notes = form.customerNotes.value.trim();

    if (!name || !phone || !address) {
      toast.show({
        title: 'Ma’lumotlarni to‘ldiring',
        message: 'Ism, telefon raqami va manzil maydonlari majburiydir',
        type: 'error'
      });
      return;
    }

    if (phone.replace(/\D/g, '').length < 9) {
      toast.show({
        title: 'Telefon noto‘g‘ri',
        message: 'Iltimos, amaldagi telefon raqamingizni kiriting',
        type: 'error'
      });
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner-small"></span> <span>Buyurtma rasmiylashtirilmoqda...</span>`;
    }

    setTimeout(() => {
      const orderId = 'ZY-' + Math.floor(10000 + Math.random() * 90000);
      const totals = this.getTotals();
      const orderData = {
        orderId,
        date: new Date().toLocaleString('uz-UZ'),
        customer: { name, phone, address, notes, payment },
        items: [...this.items],
        totals,
        status: 'Demo qabul qilindi'
      };

      try {
        const pastOrders = JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY) || '[]');
        pastOrders.unshift(orderData);
        localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(pastOrders.slice(0, 10)));
      } catch (err) {}

      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Buyurtmani tasdiqlash</span>`;
      }

      if (this.checkoutModal) this.checkoutModal.classList.remove('modal-active');
      this.clearCart();
      this.showOrderConfirmation(orderData);
      sound.playSuccess();
    }, 700);
  }

  showOrderConfirmation(orderData) {
    const modal = document.getElementById('order-confirmation-modal');
    if (!modal) return;

    const orderIdEl = document.getElementById('confirm-order-id');
    const orderCustomerEl = document.getElementById('confirm-order-customer');
    const orderAddressEl = document.getElementById('confirm-order-address');
    const orderTotalEl = document.getElementById('confirm-order-total');
    const orderPaymentEl = document.getElementById('confirm-order-payment');
    const orderItemsEl = document.getElementById('confirm-order-items');

    if (orderIdEl) orderIdEl.textContent = '#' + orderData.orderId;
    if (orderCustomerEl) orderCustomerEl.textContent = orderData.customer.name + ' (' + orderData.customer.phone + ')';
    if (orderAddressEl) orderAddressEl.textContent = orderData.customer.address;
    if (orderTotalEl) orderTotalEl.textContent = this.formatPrice(orderData.totals.total);
    if (orderPaymentEl) {
      const p = orderData.customer.payment;
      orderPaymentEl.textContent = p === 'cash' ? 'Naqd pulda (kuryerga)' : p === 'payme' ? 'Payme (Demo)' : 'Click (Demo)';
    }

    if (orderItemsEl) {
      orderItemsEl.innerHTML = orderData.items.map(item => `
        <div class="confirm-item-row">
          <span>${item.name} × ${item.quantity}</span>
          <span>${this.formatPrice(item.price * item.quantity)}</span>
        </div>
      `).join('');
    }

    modal.classList.add('modal-active');
  }
}

// 7. MENU MANAGER
class MenuManager {
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

    if (this.container) {
      this.container.addEventListener('click', (e) => {
        const addBtn = e.target.closest('.btn-add-to-cart');
        if (!addBtn) return;
        const dishId = addBtn.getAttribute('data-id');
        const dish = DISHES.find(d => d.id === dishId);
        if (dish && this.cartManager) {
          this.cartManager.addItem(dish);
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
      return 0;
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
      <div class="dish-card animate-card-entrance" style="animation-delay: ${index * 40}ms">
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              <span>Savatga</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// 8. RESERVATION MANAGER
const RESERVATION_STORAGE_KEY = 'ziyofat_demo_reservations';

class ReservationManager {
  constructor() {
    this.form = document.getElementById('reservation-form');
    this.modal = document.getElementById('reservation-confirmation-modal');
    this.dateInput = document.getElementById('res-date');
    this.init();
  }

  init() {
    if (this.dateInput) {
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
      submitBtn.innerHTML = `<span class="spinner-small"></span> <span>Stol band qilinmoqda...</span>`;
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

      try {
        const list = JSON.parse(localStorage.getItem(RESERVATION_STORAGE_KEY) || '[]');
        list.unshift(reservationData);
        localStorage.setItem(RESERVATION_STORAGE_KEY, JSON.stringify(list.slice(0, 10)));
      } catch (err) {}

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
    }, 600);
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

// 9. GALLERY MANAGER
class GalleryManager {
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
    this.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        this.activeFilter = filter;
        this.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.render();
      });
    });

    if (this.grid) {
      this.grid.addEventListener('click', (e) => {
        const itemEl = e.target.closest('.gallery-item');
        if (!itemEl) return;
        const id = parseInt(itemEl.getAttribute('data-id'), 10);
        const filtered = this.getFilteredItems();
        const index = filtered.findIndex(item => item.id === id);
        if (index !== -1) this.openLightbox(index);
      });
    }

    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    const closeBtn = document.getElementById('lightbox-close');

    if (prevBtn) prevBtn.addEventListener('click', () => this.navigate(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => this.navigate(1));
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeLightbox());

    if (this.lightbox) {
      this.lightbox.addEventListener('click', (e) => {
        if (e.target === this.lightbox) this.closeLightbox();
      });
    }

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
      <div class="gallery-item animate-card-entrance" data-id="${item.id}" style="animation-delay: ${index * 50}ms">
        <img src="${item.image}" alt="${item.title}" class="gallery-thumb" loading="lazy"/>
        <div class="gallery-overlay">
          <div class="gallery-badge">${item.categoryName}</div>
          <h4 class="gallery-item-title">${item.title}</h4>
          <p class="gallery-item-desc">${item.description}</p>
          <div class="gallery-zoom-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
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

// 10. REVIEWS MANAGER
class ReviewsManager {
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
      this.carousel.addEventListener('mouseenter', () => this.isPaused = true);
      this.carousel.addEventListener('mouseleave', () => this.isPaused = false);
    }
  }

  goTo(index) {
    this.currentIndex = index;
    if (this.track) {
      this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }
    if (this.dotsContainer) {
      const dots = this.dotsContainer.querySelectorAll('.review-dot');
      dots.forEach((dot, i) => dot.classList.toggle('active', i === this.currentIndex));
    }
  }

  next() {
    this.goTo((this.currentIndex + 1) % this.reviews.length);
  }

  prev() {
    this.goTo((this.currentIndex - 1 + this.reviews.length) % this.reviews.length);
  }

  startAutoPlay() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.autoPlayInterval = setInterval(() => {
      if (!this.isPaused) this.next();
    }, 4500);
  }

  restartAutoPlay() {
    if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
    this.startAutoPlay();
  }
}

// 11. CONTACT MANAGER
class ContactManager {
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
      submitBtn.innerHTML = `<span class="spinner-small"></span> <span>Xabar jo‘natilmoqda...</span>`;
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
    }, 600);
  }
}

// 12. ANIMATIONS & SCROLL MANAGER
class AnimationManager {
  constructor() {
    this.header = document.getElementById('main-header');
    this.mobileMenuBtn = document.getElementById('mobile-menu-btn');
    this.mobileCloseBtn = document.getElementById('mobile-drawer-close');
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
    const hide = () => {
      this.preloader.classList.add('preloader-hidden');
    };
    window.addEventListener('load', () => setTimeout(hide, 300));
    setTimeout(hide, 1200); // safety fallback
  }

  initStickyHeader() {
    if (!this.header) return;
    const handleScroll = () => {
      if (window.scrollY > 40) {
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

    if (this.mobileCloseBtn) {
      this.mobileCloseBtn.addEventListener('click', () => toggle(false));
    }

    if (this.mobileOverlay) {
      this.mobileOverlay.addEventListener('click', () => toggle(false));
    }

    this.mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggle(false));
    });
  }

  initBackToTop() {
    if (!this.backToTopBtn) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        this.backToTopBtn.classList.add('visible');
      } else {
        this.backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    this.backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  initScrollReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
  }

  initNavSmoothScroll() {
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

// 13. BOOTSTRAP APPLICATION
document.addEventListener('DOMContentLoaded', () => {
  const cart = new CartManager();
  const menu = new MenuManager(cart);
  const reservation = new ReservationManager();
  const gallery = new GalleryManager();
  const reviews = new ReviewsManager();
  const contact = new ContactManager();
  const animations = new AnimationManager();

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
    setTimeout(() => window.lucide.createIcons(), 300);
  }

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

  console.log('%c🍽 ZIYOFAT — Premium Restoran Veb-sayti tayyor!', 'color: #D4A853; font-size: 14px; font-weight: bold;');
});
