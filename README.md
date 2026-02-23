# 🛋️ Sof Mebel - Premium Furniture E-Commerce Platform

A modern, feature-rich e-commerce platform for premium furniture showcasing Uzbek and international furniture designs. Built with Next.js 14, TypeScript, and Tailwind CSS.

**Live Demo:** https://localhost:3001

---

## ✨ Features

### 🏠 Core Sections
- **Hero Section** - Stunning landing page with call-to-action
- **About Section** - Company mission and awards showcase
- **Collections** - Curated furniture collections with masonry layout
- **Showroom** - High-end gallery of furniture showcases
- **Products (10 Items)** - Premium furniture catalog with:
  - Real-time flash sale (20% OFF)
  - 2-hour countdown timer
  - Delivery information
  - Product details modal
  - Price comparison view

### 📸 AR Visualizer
- **Camera Integration** - Live camera access for room photos
- **Virtual Try-On** - Overlay furniture on your room photos
- **Size Adjustment** - Responsive scaling slider (10-80%)
- **Download Preview** - Save composite images as JPEG
- **File Upload** - Alternative image upload option

### 💬 Social Proof
- **Customer Testimonials** - 3+ sample reviews with ratings
- **Star Ratings** - Visual 5-star rating system
- **Trust Indicators** - Warranty, installation, support badges

### 📝 Contact & CTA
- **Functional Form** - Full validation with error messages
- **Form Validation** - Name, phone, service type required
- **Success Message** - "Xabaringiz muvaffaqiyatli yuborildi!" confirmation
- **Auto-Reset** - 4-second auto-reset after submission

### 🎨 Design System
- **Premium Aesthetic** - Inspired by Article.com, West Elm, BoConcept
- **Color Palette**:
  - Deep Green: `#1A3327`
  - Mid Green: `#254D38`
  - Gold Accent: `#C6A253`
  - Beige Palette: `#F7F4EE`, `#F5E6D3`, `#EDD5C8`
- **Typography**:
  - Inter (body text)
  - Playfair Display (headings)
- **Responsive Design** - Mobile-first, works on all devices

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.30 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.17
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **UI Components**: Custom React components
- **State Management**: React Hooks (useState, useRef, useEffect)
- **Browser APIs**: WebRTC (camera access), Canvas API, File API

---

## 📦 Project Structure

```
sofmebel/
├── app/
│   ├── globals.css              # Global styles & utilities
│   ├── layout.tsx               # Root layout with fonts
│   ├── page.tsx                 # Main landing page
│   └── online-magazine/
│       └── page.tsx             # Products showcase page
├── components/
│   ├── Navbar.tsx               # Navigation with sticky header
│   ├── Hero.tsx                 # Hero section with CTA
│   ├── AboutSection.tsx         # Company info & awards
│   ├── CollectionsSection.tsx   # Furniture collections
│   ├── WhyChooseUsSection.tsx   # Features & benefits
│   ├── ShowroomSection.tsx      # Gallery showcase
│   ├── ProductsSection.tsx      # 10 products with flash sale
│   ├── ARVisualizerSection.tsx  # AR try-on feature
│   ├── CTASection.tsx           # Contact form
│   ├── CommentsSection.tsx      # Customer testimonials
│   └── Footer.tsx               # Footer with links
├── public/
│   └── images/real/             # Product images
├── tailwind.config.ts           # Tailwind customization
├── tsconfig.json                # TypeScript config
├── next.config.mjs              # Next.js config
└── package.json                 # Dependencies

```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/Sarvardev035/Sofmebel.git
cd sofmebel

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run start
```

---

## 📋 Key Components

### ProductsSection
- 10 curated furniture items
- Live countdown timer (2-hour flash sale)
- 20% discount on all products
- Delivery estimates (5-15 days)
- Detailed product modals
- Category badges and filters

**Example Product:**
```typescript
{
  id: 1,
  name: 'Qora Divan',
  originalPrice: 2500000,
  discountedPrice: 2000000,
  discount: 20,
  delivery: '10 kun',
  category: 'Divan',
  features: ['120x80', 'Qora rang', '5 yil kafolat']
}
```

### ARVisualizerSection
- Camera access with permissions handling
- Canvas-based image composition
- Real-time furniture overlay
- Scale adjustment slider
- Download functionality
- File upload alternative

**Supported Actions:**
- 📷 Capture photo from camera
- 📁 Upload existing image
- 🛋️ Select from 6 furniture items
- 📐 Adjust size (10-80%)
- 👁 Preview result
- ⬇️ Download composite image

### CTASection
```typescript
// Form state management
const [formData, setFormData] = useState({
  name: '',
  phone: '',
  service: ''
});

// Validation with error messages
// Success state shows confirmation
// Auto-resets after 4 seconds
```

---

## 🎯 Features in Detail

### Flash Sale System
- Automatic 2-hour countdown timer
- Red pulsing animation when time expires
- "Aksiya tez tugaydi" (Sale ending soon) messaging
- Discount badges on all products

### Virtual Try-On (AR)
1. Open camera or upload image
2. Select furniture item
3. Adjust size with slider
4. Preview position and scale
5. Download and share result

### Testimonials System
```typescript
// 3 sample customers:
- Dilnoza Yusupova (House owner) ⭐⭐⭐⭐⭐
- Akbar Karimov (Office manager) ⭐⭐⭐⭐⭐
- Gulnora Rahimova (Interior designer) ⭐⭐⭐⭐⭐
```

---

## 🌐 Language & Localization

**Primary Language**: Uzbek (Lotin yozuvi)

### Key UI Terms
- `Batafsil ko'rish` - View Details
- `Xabaringiz muvaffaqiyatli yuborildi!` - Your message sent successfully!
- `Yetkazib berish` - Delivery
- `Aksiya` - Sale/Promotion
- `Mebel` - Furniture

All text is in Uzbek to serve local Tashkent market.

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)
- **Wide**: > 1280px (xl)

All components are mobile-first and fully responsive.

---

## 🎨 Customization

### Modify Colors
Edit `tailwind.config.ts`:
```typescript
extend: {
  colors: {
    greenDeep: '#1A3327',    // Main brand color
    goldAccent: '#C6A253',   // Highlight color
    // ... other colors
  }
}
```

### Update Products
Edit `components/ProductsSection.tsx`:
```typescript
const products = [
  { id, name, price, image, ... },
  // Add more products
]
```

### Change Testimonials
Edit `components/CommentsSection.tsx` - replace sample data with your customer reviews.

---

## ⚡ Performance

- Optimized images with Next.js Image component
- Code splitting per route
- CSS-in-JS with Tailwind (utility-first)
- Client-side form handling (no server round-trip)
- Canvas API for fast image processing

---

## 🔒 Security

- Client-side form validation
- No sensitive data exposure
- CORS-safe image handling
- TypeScript for type safety

---

## 📊 SEO & Meta

- Open Graph tags for social sharing
- Meta descriptions
- Semantic HTML structure
- Fast page loads for better rankings

---

## 🚧 Future Enhancements

- [ ] Backend API for form submissions
- [ ] Database for persistent testimonials
- [ ] Payment integration (UzCard, Humo)
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Analytics tracking
- [ ] Multi-language support
- [ ] WhatsApp integration
- [ ] Real AR (WebAR) implementation
- [ ] Furniture 3D models

---

## 💬 Support

For issues or feature requests:
- 📧 Email: sarvarbek@sofmebel.uz
- 📱 Phone: +998 90 123 45 67
- 🌐 Website: https://sofmebel.uz

---

## 📄 License

This project is proprietary software. All rights reserved © 2026 Sof Mebel.

---

## 👨‍💻 Developer

**Sarvarbek** - Full Stack Developer
- GitHub: [@Sarvardev035](https://github.com/Sarvardev035)
- Portfolio: [sofmebel.uz](https://sofmebel.uz)

---

## 🙏 Acknowledgments

- Design inspiration: Article.com, West Elm, BoConcept, Muuto
- Framework: Next.js & React community
- Icons & Fonts: Google Fonts, Tailwind UI
- Premium UI concepts from modern e-commerce platforms

---

**Built with ❤️ for Sof Mebel - Tashkent, Uzbekistan 🇺🇿**

