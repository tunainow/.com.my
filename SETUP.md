# Langkah-Langkah Setup & Run TunaiNow

## 1️⃣ Install Dependencies

```bash
npm install
```

Ini akan install semua packages yang diperlukan dari `package.json`.

## 2️⃣ Setup Environment Variables

```bash
cp .env.example .env
```

Edit `.env` file dan tambah API keys anda (optional untuk development):
```
VITE_FIREBASE_API_KEY=your_key_here
VITE_SUPABASE_URL=your_url_here
VITE_STRIPE_PUBLISHABLE_KEY=your_key_here
```

## 3️⃣ Run Development Server

```bash
npm run dev
```

Output akan jadi:
```
  VITE v8.0.1  ready in 123 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

## 4️⃣ Buka Browser

Pergi ke: **http://localhost:5173**

### Halaman yang tersedia:

- 🏠 **Home Page** → http://localhost:5173/
  - Landing page dengan loan repayment info
  - Repayment calculator
  - How to apply section
  - Benefits showcase
  - FAQ

- 🕐 **Digital Clock** → http://localhost:5173/clock
  - Global time zone clock
  - 16 different time zones
  - Real-time updates
  - Add/remove zones

## 5️⃣ Troubleshooting

### ❌ White Page?
- **Check browser console:** Tekan `F12`, go to Console tab
- **Check network:** Ensure all JS files loaded (Network tab)
- **Hard refresh:** `Ctrl+Shift+R` or `Cmd+Shift+R`

### ❌ Port 5173 sudah pakai?
Edit `vite.config.ts` dan tukar port:
```typescript
server: {
  port: 5174,  // tukar ke port lain
  open: true,
},
```

### ❌ Module not found error?
```bash
# Clear node_modules dan reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### ❌ TypeScript errors?
```bash
npm run type-check
```

## 6️⃣ Build untuk Production

```bash
npm run build
```

Output akan jadi di folder `dist/`

## 7️⃣ Preview Build

```bash
npm run preview
```

## 📁 Project Structure

```
tunainow/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LoanCalculator.tsx
│   │   ├── HowToApply.tsx
│   │   ├── Benefits.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   └── DigitalClock.tsx
│   ├── pages/
│   │   ├── home/
│   │   │   └── page.tsx
│   │   ├── clock/
│   │   │   └── page.tsx
│   │   └── NotFound.tsx
│   ├── hooks/
│   │   └── useInView.ts
│   ├── mocks/
│   │   └── tunaiNowData.ts
│   ├── locales/
│   │   ├── en.ts
│   │   └── ms.ts
│   ├── App.tsx
│   ├── router.tsx
│   ├── i18n.ts
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🌐 Features

✅ **Loan Repayment Platform:**
- Responsive design (mobile-first)
- Multi-language support (English & Malay)
- Loan calculator
- Payment method selector
- FAQ section
- Dark/Light theme ready

✅ **Digital Clock:**
- Real-time time display
- 16 time zones
- Add/remove zones
- Beautiful UI

## 💡 Tips

- **Hot Module Reload (HMR)** - File changes auto-reload di browser
- **TypeScript** - Full type safety dengan IntelliSense
- **Tailwind CSS** - Utility-first CSS framework
- **i18next** - Easy language switching (EN/MS)
- **React Router** - Client-side routing

## 🚀 Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Open http://localhost:5173
4. ✅ Explore homepage at `/`
5. ✅ Check clock at `/clock`
6. ✅ Start developing! 💻

Enjoy! 🎉
