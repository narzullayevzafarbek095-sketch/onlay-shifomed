# ZIYOFAT — Premium Restoran Veb-sayti

Hashamatli, zamonaviy va to‘liq interaktiv restoran veb-sayti. Loyiha yuqori toifadagi mehmonlar uchun mo‘ljallangan bo‘lib, milliy va xalqaro gastronomiyaning eng sara taomlarini taqdim etadi.

---

## Asosiy Xususiyatlar

1. **Hashamatli Dizayn & Estetika**:
   - Maxsus ranglar palitrasi: To‘q yashil (`#12372A`), iliq qaymoq (`#FFF8ED`), oltin (`#D4A853`), qora ko‘mir (`#1C211E`) va oq (`#FFFFFF`).
   - Elegant shriftlar: *Playfair Display* va *Plus Jakarta Sans*.
   - Glassmorphism, mayin soyalar, nurli effektlar va mikro-animatsiyalar.
   - To‘liq o‘zbek tilidagi interfeys.

2. **Interaktiv Taomlar Menyusi**:
   - 6 ta asosiy toifa: *Barchasi*, *Milliy taomlar*, *Fast food*, *Pitsa*, *Ichimliklar*, *Shirinliklar*.
   - Jonli qidiruv tizimi (taom nomi va tavsifi bo‘yicha tezkor filtr).
   - Saralash imkoniyati: Narx (arzon/qimmat) va eng mashhur taomlar bo‘yicha.
   - Har bir taom kartasida yuqori sifatli fotosurat, nomi, tavsifi, UZS narxi, tayyorlanish vaqti, reyting va savatga qo‘shish tugmasi.

3. **To‘liq Ishlaydigan Xarid Savati (Cart Drawer)**:
   - Mahsulotlarni qo‘shish, sonini oshirish/kamaytirish va o‘chirish.
   - Oraliq jami, yetkazib berish (150 000 so‘mdan yuqori buyurtmalarda **BEPUL**) va chegirma hisob-kitobi.
   - Promokod tizimi (masalan: `ZIYOFAT10` - 10% chegirma, `VIP20` - 20% chegirma).
   - `localStorage` orqali savatni brauzerda eslab qolish.
   - Buyurtmani rasmiylashtirish shakli (ism, telefon, manzil, to‘lov turi, eslatmalar).
   - Rasmiylashtirishdan so‘ng unikal buyurtma raqamli (`#ZY-XXXXX`) chek modali.
   - Sintizatsiyalangan xushovoz Web Audio API tovush effektlari.

4. **Stol Band Qilish (Table Reservation)**:
   - Ism, telefon, tashrif sanasi (bugundan boshlab), vaqti, mehmonlar soni va zal hududi (Umumiy zal, Ochiq teras, VIP xona, Oilaviy burchak).
   - Shakl validatsiyasi va `localStorage` ga saqlash.
   - Maxsus bron kodi (`#STOL-XXXX`) bilan tasdiqlovchi kvitansiya modali.

5. **Interaktiv Galereya & Lightbox**:
   - Toifalar bo‘yicha filtrlar (Interyer, Taomlar, Oshpazlar, Tadbirlar, Teras).
   - To‘liq ekranli Lightbox modali: kattalashtirilgan surat, tavsif, oldingi/keyingi tugmalar va klaviatura yordamida boshqarish (`Esc`, `←`, `→`).

6. **Mijozlar Sharhlari (Carousel Slider)**:
   - Haqiqiy mijozlar sharhlari (demo), yulduzli baholar, sinab ko‘rilgan taomlar.
   - Avtomatik almashinish (autoplay), sichqoncha kelganda to‘xtash (pause-on-hover), o‘tkazish tugmalari va nuqtali indikatorlar.

7. **Biz haqimizda & Ustunliklarimiz**:
   - 15+ yillik an’ana va raqamli statistika.
   - 6 ta animatsiyali afzallik kartalari.

8. **Aloqa & Manzil**:
   - Manzil, telefon, ish vaqti, interaktiv xarita kartasi va xabar yuborish shakli.

9. **Qo‘shimcha Qulayliklar**:
   - Yopishqoq (sticky) va xiralashuvchi navigatsiya paneli.
   - Mobil qurilmalar uchun yon menyu (drawer).
   - Toast xabarnomalar tizimi (progress bar bilan).
   - Sahifa boshiga qaytish (Back to top) suzuvchi tugmasi.
   - `prefers-reduced-motion` orqali qulaylik va qulay ko‘rish standarti.

---

## Loyihani Ishga Tushirish

### 1-usul: To‘g‘ridan-to‘g‘ri brauzerda ochish (Hech qanday o‘rnatishsiz!)
Loyiha toza va mustaqil ES modullari asosida qurilgan. Istalgan brauzerda to‘g‘ridan-to‘g‘ri:
- Loyiha papkasidagi `index.html` faylini brauzerda ochishingiz kifoya!
- Yoki VS Code Live Server kengaytmasi orqali oching.

### 2-usul: Vite bilan mahalliy serverda ishga tushirish (Tavsiya etiladi)
Agar kompyuteringizda Node.js o‘rnatilgan bo‘lsa:

```bash
# 1. Bog'liqliklarni o'rnatish
npm install

# 2. Ishga tushirish (Dev server)
npm run dev
```

Brauzeringizda `http://localhost:3000` manzilini oching.

---

## Loyiha Strukturasi

```
shifomed/
├── index.html                 # Asosiy semantik sahifa
├── favicon.svg                # ZIYOFAT oltin logotip belgisi
├── package.json               # Loyiha konfiguratsiyasi
├── vite.config.js             # Vite sozlamalari
├── README.md                  # Hujjatlar
├── css/
│   ├── variables.css          # Dizayn tokenlari va ranglar
│   ├── base.css               # Bazaviy tipografiya va konteynerlar
│   ├── components.css         # Barcha komponentlar va modallar
│   ├── animations.css         # Animatsiyalar va o'tishlar
│   ├── responsive.css         # Moslashuvchanlik (mobil/planshet)
│   └── styles.css             # Asosiy birlashtiruvchi CSS
└── js/
    ├── app.js                 # Asosiy ishga tushiruvchi
    ├── data/
    │   ├── dishes.js          # Taomlar ma'lumotlari (16 ta taom)
    │   ├── gallery.js         # Galereya fotosuratlari
    │   └── reviews.js         # Mijozlar sharhlari
    └── modules/
        ├── cart.js            # Savat va buyurtma menejeri
        ├── menu.js            # Menyu, qidiruv va filtrlash
        ├── reservation.js     # Stol band qilish
        ├── gallery.js         # Galereya va Lightbox
        ├── reviews.js         # Sharhlar slayderi
        ├── contact.js         # Aloqa shakli
        ├── toast.js           # Xabarnomalar (Toast)
        ├── sound.js           # Web Audio tovush effektlari
        └── animations.js      # Skroll va mobil menyu
```

---

## Eslatma (Demo Disclaimer)
Ushbu loyiha portfolio, ko‘rgazma va dasturiy taqdimot maqsadida yaratilgan. Buyurtmalar va stol band qilish brauzerning `localStorage` xotirasida demo rejimida ishlaydi va haqiqiy moliyaviy to‘lovlar amalga oshirilmaydi.
# restaran
