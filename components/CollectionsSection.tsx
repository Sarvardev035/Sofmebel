import Image from 'next/image';

const collections = [
  {
    title: 'Yashash xonasi',
    description: 'Keng, qulay va zamonaviy divalar, jurnalni stollar va modulli sistemalar.',
    image: '/images/real/collection-living.jpg',
    tag: 'Eng mashhur',
    count: '120+ mahsulot'
  },
  {
    title: 'Yotoqxona',
    description: 'Minimalist va nafis yotoq-platformalar, shkaflar va yon stolchalar.',
    image: '/images/real/collection-bedroom.jpg',
    tag: 'Yangi',
    count: '85+ mahsulot'
  },
  {
    title: 'Oshxona va ovqatlanish',
    description: "Oilaviy to'planishlar uchun issiq muhit yaratadigan stol-stul garnitürlari.",
    image: '/images/real/collection-dining.jpg',
    tag: 'Premium',
    count: '60+ mahsulot'
  },
  {
    title: 'Xona bezaklari',
    description: "Uy interyerini to'liq qiladigan aksessuarlar, lampalar va dekor elementlar.",
    image: '/images/real/showroom-side-2.jpg',
    tag: 'Yangi',
    count: '200+ mahsulot'
  }
];

export function CollectionsSection() {
  return (
    <section id="mebel" className="w-full bg-beigeMid py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label mb-3">Kolleksiyalar</p>
            <h2 className="section-title">
              Har xona uchun<br />
              <span className="italic">maxsus yechim</span>
            </h2>
          </div>
          <a href="#" className="btn-outline self-start sm:self-auto">
            Barcha mahsulotlar →
          </a>
        </div>

        {/* Grid: big + small cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {/* Hero card */}
          <article className="group relative overflow-hidden rounded-3xl lg:col-span-7"
            style={{ minHeight: '480px' }}>
            <Image
              src={collections[0].image}
              alt={collections[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-greenDeep/80 via-greenDeep/20 to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="rounded-full bg-goldAccent px-3 py-1 text-xs font-semibold text-white">
                {collections[0].tag}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-xs uppercase tracking-widest text-white/60">{collections[0].count}</p>
              <h3 className="font-display text-3xl font-normal text-white mt-1">{collections[0].title}</h3>
              <p className="mt-2 text-sm text-white/70 max-w-xs">{collections[0].description}</p>
              <a href="#" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-5 py-2.5 text-sm text-white backdrop-blur-sm transition-all hover:bg-white/25">
                Ko&apos;rish
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </article>

          {/* Right stack */}
          <div className="grid gap-5 lg:col-span-5">
            {collections.slice(1).map((col) => (
              <article
                key={col.title}
                className="group relative flex items-center gap-5 overflow-hidden rounded-2xl bg-cream p-5 card-hover"
              >
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-goldAccent">{col.tag}</span>
                    <span className="text-[10px] text-muted">· {col.count}</span>
                  </div>
                  <h3 className="font-display text-xl text-greenDeep">{col.title}</h3>
                  <p className="mt-1 text-xs text-greenDeep/60 line-clamp-2">{col.description}</p>
                </div>
                <svg className="h-5 w-5 flex-shrink-0 text-greenDeep/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-greenDeep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom promo band */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-greenDeep px-7 py-5 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-goldAccent/20">
              <svg className="h-5 w-5 text-goldAccent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-white/80">
              Barcha mahsulotlar <span className="font-semibold text-white">5 yil kafolat</span> bilan ta&apos;minlangan
            </p>
          </div>
          <a href="#cta" className="btn-gold text-xs py-2.5 whitespace-nowrap">
            Hozir buyurtma bering
          </a>
        </div>
      </div>
    </section>
  );
}
