import { sound } from './sound.js';
import { toast } from './toast.js';

const STORAGE_KEY = 'ziyofat_cart_v1';
const ORDERS_STORAGE_KEY = 'ziyofat_demo_orders';
const DELIVERY_FEE = 15000;
const FREE_DELIVERY_THRESHOLD = 150000;

export class CartManager {
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
      console.warn('Storage save failed:', e);
    }
  }

  initEvents() {
    // Open cart buttons
    document.querySelectorAll('[data-action="open-cart"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openCart();
      });
    });

    // Close cart button & overlay
    document.querySelectorAll('[data-action="close-cart"]').forEach(btn => {
      btn.addEventListener('click', () => this.closeCart());
    });

    if (this.cartOverlay) {
      this.cartOverlay.addEventListener('click', () => this.closeCart());
    }

    // Checkout button
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

    // Promo code apply
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

    // Checkout form submission
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
      checkoutForm.addEventListener('submit', (e) => this.handleCheckoutSubmit(e));
    }

    // Close modals
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-close-modal');
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.remove('modal-active');
      });
    });

    // Close on Escape
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

    return {
      subtotal,
      delivery,
      discountAmount,
      total,
      count
    };
  }

  formatPrice(num) {
    return num.toLocaleString('uz-UZ') + " so‘m";
  }

  render() {
    const { subtotal, delivery, discountAmount, total, count } = this.getTotals();

    // Badges
    this.cartCountBadges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-flex' : 'none';
    });

    // Empty state vs items list
    if (this.items.length === 0) {
      if (this.cartEmptyState) this.cartEmptyState.style.display = 'flex';
      if (this.cartItemsContainer) this.cartItemsContainer.style.display = 'none';
      if (this.cartFooter) this.cartFooter.style.display = 'none';
      return;
    }

    if (this.cartEmptyState) this.cartEmptyState.style.display = 'none';
    if (this.cartItemsContainer) this.cartItemsContainer.style.display = 'block';
    if (this.cartFooter) this.cartFooter.style.display = 'block';

    // Render list
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </div>
      `).join('');

      // Wire item events
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

    // Update totals
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

    if (checkoutTotal) {
      checkoutTotal.textContent = this.formatPrice(total);
    }

    if (this.checkoutModal) {
      this.checkoutModal.classList.add('modal-active');
    }
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

    // Basic phone validation for Uzbekistan
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
      submitBtn.innerHTML = `
        <span class="spinner-small"></span>
        <span>Buyurtma rasmiylashtirilmoqda...</span>
      `;
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

      // Save demo order in localStorage
      try {
        const pastOrders = JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY) || '[]');
        pastOrders.unshift(orderData);
        localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(pastOrders.slice(0, 10)));
      } catch (err) {
        console.warn('Orders storage error:', err);
      }

      // Reset form and UI
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Buyurtmani tasdiqlash</span>`;
      }

      // Close checkout modal
      if (this.checkoutModal) this.checkoutModal.classList.remove('modal-active');

      // Clear cart
      this.clearCart();

      // Show confirmation
      this.showOrderConfirmation(orderData);
      sound.playSuccess();
    }, 900);
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
