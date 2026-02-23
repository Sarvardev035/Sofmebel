'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Premium Qora Divan',
    category: 'Divan',
    originalPrice: 2500000,
    discountedPrice: 2000000,
    discount: 20,
    delivery: '10 kun',
    image: '/images/real/collection-living.jpg',
    description: 'Yumshoq va qulay, italiya materialidan tayyorlangan premium divan',
    features: ['120x80, Qora rang', 'Natural yog\'och', '5 yil kafolat']
  },
  {
    id: 2,
    name: 'Modern Chef Stuli',
    category: 'Stul',
    originalPrice: 450000,
    discountedPrice: 360000,
    discount: 20,
    delivery: '7 kun',
    image: '/images/real/collection-dining.jpg',
    description: 'Ergonomik va zamonaviy stul, ovqat uchun ideal',
    features: ['Minimalist dizayn', 'Mato qoplama', 'Chap va o\'ng']
  },
  {
    id: 3,
    name: 'Skandinaviya Stolchasi',
    category: 'Stolchasi',
    originalPrice: 650000,
    discountedPrice: 520000,
    discount: 20,
    delivery: '8 kun',
    image: '/images/real/showroom-main.jpg',
    description: 'Yumshoq yon stolchasi, dam olish uchun qulay',
    features: ['2 dona', 'Kremli rang', 'Pufik o\'z ichiga oladi']
  },
  {
    id: 4,
    name: 'Italiya Stol-Kombinatsiya',
    category: 'Stol',
    originalPrice: 1800000,
    discountedPrice: 1440000,
    discount: 20,
    delivery: '12 kun',
    image: '/images/real/showroom-side-1.jpg',
    description: 'Yog\'och va shisha, ovqatlanish zonasi uchun',
    features: ['140x70 santimetr', 'Qo\'shiladigan stullar', 'Montaj kiritilgan']
  },
  {
    id: 5,
    name: 'Minimalist Yotoq-Platform',
    category: 'Yotoq',
    originalPrice: 3200000,
    discountedPrice: 2560000,
    discount: 20,
    delivery: '14 kun',
    image: '/images/real/collection-bedroom.jpg',
    description: 'Skandinaviya stilida, keng va qulay yotoq',
    features: ['King size', 'Qo\'shimcha shkaflar', 'Ortopedik matras']
  },
  {
    id: 6,
    name: 'Trend Lampa Set',
    category: 'Aksessuar',
    originalPrice: 380000,
    discountedPrice: 304000,
    discount: 20,
    delivery: '5 kun',
    image: '/images/real/showroom-side-2.jpg',
    description: 'Zamonaviy dizayn, 3 dona lampa to\'plami',
    features: ['LED texnologiyasi', 'Adjust qilinadigan', 'Energiya tejamkor']
  },
  {
    id: 7,
    name: 'Klassik Kreslo',
    category: 'Kreslo',
    originalPrice: 1200000,
    discountedPrice: 960000,
    discount: 20,
    delivery: '9 kun',
    image: '/images/real/collection-living.jpg',
    description: 'Klassik disayn, gut\'ali dam olish uchun',
    features: ['Qora yag\'och', 'Premium mato', 'Ortopedik dizayn']
  },
  {
    id: 8,
    name: 'Dekor Jurnalli Stol',
    category: 'Stol',
    originalPrice: 580000,
    discountedPrice: 464000,
    discount: 20,
    delivery: '8 kun',
    image: '/images/real/collection-dining.jpg',
    description: 'Chini va yog\'och, yashash xonasi uchun',
    features: ['Marmur stol', 'Tutash shkaf', 'Minimalista']
  },
  {
    id: 9,
    name: 'Corner Divan Setka',
    category: 'Divan',
    originalPrice: 4500000,
    discountedPrice: 3600000,
    discount: 20,
    delivery: '15 kun',
    image: '/images/real/showroom-main.jpg',
    description: 'Burchak divan, katta oilalar uchun',
    features: ['L-shaped', 'Transformable', 'USB-charger built-in']
  },
  {
    id: 10,
    name: 'Barcha To\'plam Bundle',
    category: 'Bundle',
    originalPrice: 7800000,
    discountedPrice: 6240000,
    discount: 20,
    delivery: 'Tekin montaj',
    image: '/images/real/showroom-side-1.jpg',
    description: 'To\'liq yashash xonasi to\'plami - hamma birgalikda',
    features: ['Divan + Stol + 4 Stul', 'Aksessuarlar + namoz', 'Expert konsultatsiya']
  }
];

function FlashSaleTimer() {
  const [timeLeft, setTimeLeft] = useState(8000); // 2 hours in seconds
  const [isExpiring, setIsExpiring] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          setTimeLeft(8000);
          return 8000;
        }
        if (prev <= 600) setIsExpiring(true);
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${
      isExpiring 
        ? 'animate-pulse bg-red-500/20 text-red-500' 
        : 'bg-goldAccent/20 text-goldAccent'
    }`}>
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6z" clipRule="evenodd" />
      </svg>
      <span>
        {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
}

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <section className="w-full bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="section-label mb-3">Cheksiz Aksiya</p>
            <h2 className="section-title">
              20% OFF<br />
              <span className="italic">2 soat ichida</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <FlashSaleTimer />
            <p className="text-xs text-greenDeep/60">Aksiya tez tugaydi - hozir buyurtma bering!</p>
          </div>
        </div>

        {/* Info banner */}
        <div className="mb-8 rounded-2xl border-2 border-goldAccent/30 bg-goldAccent/10 p-5">
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-bold text-goldAccent">20%</span>
              <span className="text-greenDeep/70">Barcha mahsulotlarga chegirma</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-goldAccent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-greenDeep/70">Tez yetkazib berish - 5-15 kun</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-goldAccent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-greenDeep/70">5 yil kafolat</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-beigeDark bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-strong"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-beigeMid">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Discount badge */}
                <div className="absolute top-3 right-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 shadow-lg">
                  <span className="text-center">
                    <p className="text-xs font-bold text-white">{product.discount}%</p>
                    <p className="text-[10px] text-white/80">OFF</p>
                  </span>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3 rounded-full bg-greenDeep/80 px-3 py-1 text-xs font-semibold text-white">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-lg font-semibold text-greenDeep line-clamp-2 group-hover:text-goldAccent transition-colors">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs text-greenDeep/60 line-clamp-2">{product.description}</p>

                {/* Features */}
                <ul className="mt-3 space-y-1">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-greenDeep/70">
                      <span className="h-1 w-1 rounded-full bg-goldAccent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mt-auto space-y-2 pt-3 border-t border-beigeDark">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-2xl font-bold text-greenDeep">
                      {(product.discountedPrice / 1000000).toFixed(1)}M
                    </span>
                    <span className="text-sm text-greenDeep/50 line-through">
                      {(product.originalPrice / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-greenDeep/60">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 2m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {product.delivery}
                  </div>
                </div>

                {/* CTA Button with animation */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(product);
                  }}
                  className="mt-4 w-full rounded-xl bg-gradient-to-r from-greenDeep to-greenMid px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-strong hover:scale-105 active:scale-95 animate-pulse"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11l-4-4m0 0L8 7m4 0v10m0 0h10m-10 0H4" />
                    </svg>
                    Batafsil ko'rish
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-strong"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-beigeMid hover:bg-beigeDark"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative h-80 w-full overflow-hidden bg-beigeMid">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-greenDeep px-4 py-1 text-xs font-semibold text-white">
                    {selectedProduct.category}
                  </span>
                  <span className="rounded-full bg-red-500 px-4 py-1 text-xs font-bold text-white">
                    {selectedProduct.discount}% OFF
                  </span>
                </div>

                <h2 className="font-display text-3xl font-bold text-greenDeep">{selectedProduct.name}</h2>
                <p className="mt-2 text-greenDeep/70">{selectedProduct.description}</p>

                {/* Features List */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {selectedProduct.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 rounded-lg border border-beigeDark bg-cream p-3">
                      <svg className="h-5 w-5 text-goldAccent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-greenDeep">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="mt-8 rounded-2xl border-2 border-goldAccent/30 bg-goldAccent/10 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-greenDeep/60">Chegirmali narx</p>
                      <p className="font-display text-4xl font-bold text-greenDeep">
                        {(selectedProduct.discountedPrice / 1000000).toFixed(1)}M
                      </p>
                      <p className="mt-1 text-sm text-greenDeep/50 line-through">
                        {(selectedProduct.originalPrice / 1000000).toFixed(1)}M
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-greenDeep/60">Yetkazib berish</p>
                      <p className="font-display text-2xl font-bold text-goldAccent">{selectedProduct.delivery}</p>
                      <p className="mt-1 text-xs text-greenDeep/60">Tekin yetkazib berish</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 flex gap-4">
                  <a
                    href="#cta"
                    onClick={() => setSelectedProduct(null)}
                    className="btn-primary flex-1"
                  >
                    Buyurtma qilish
                  </a>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="btn-outline flex-1"
                  >
                    Boshqasini ko'rish
                  </button>
                </div>

                {/* Trust info */}
                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-beigeDark pt-6">
                  {[
                    { icon: '✓', text: '5 yil kafolat' },
                    { icon: '🚚', text: 'Tekin montaj' },
                    { icon: '☎', text: '24/7 qo\'llab-quv' }
                  ].map((item, idx) => (
                    <div key={idx} className="text-center">
                      <p className="mb-1 text-xl">{item.icon}</p>
                      <p className="text-xs text-greenDeep/70">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
