import Image from 'next/image';

const gallery = [
  { src: 'images/real/showroom-main.jpg', alt: 'Premium showroom — Luxury Living Line', wide: true },
  { src: 'images/real/showroom-side-1.jpg', alt: 'Zamonaviy ovqatlanish zonasi', wide: false },
  { src: 'images/real/showroom-side-2.jpg', alt: 'Minimalist mehmonxona interyeri', wide: false },
  { src: 'images/real/collection-bedroom.jpg', alt: 'Yotoqxona kolleksiyasi', wide: false },
  { src: 'images/real/collection-dining.jpg', alt: 'Ovqatlanish stol garnitüri', wide: false }
];

const highlights = [
  { icon: '🛋', title: '2 000 m²', subtitle: 'Showroom maydoni' },
  { icon: '✦', title: '500+', subtitle: 'Namoyish mahsulot' },
  { icon: '📍', title: 'Toshkent', subtitle: "Chilonzor ko'ch, 45" }
];

export function ShowroomSection() {
  return (
    <section id="aksessuarlar" className="w-full bg-greenDeep py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label mb-3">Showroom</p>
            <h2 className="font-display text-4xl font-normal leading-tight text-white sm:text-5xl">
              Jonli interyer<br />
              <span className="italic text-goldAccent">ilhomlari</span>
            </h2>
          </div>
          <div className="flex flex-col gap-1 sm:text-right">
            <p className="text-sm text-white/50">Mebellarni jonli ko&apos;ring</p>
            <a href="#cta" className="btn-gold self-start text-xs py-2.5 sm:self-auto">
              Showroomga tashrif
            </a>
          </div>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {/* Wide main image */}
          <div className="group relative col-span-2 overflow-hidden rounded-3xl" style={{ height: '420px' }}>
            <Image
              src={gallery[0].src}
              alt={gallery[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-greenDeep/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="rounded-full bg-beigeLight/90 px-4 py-1.5 text-xs font-medium text-greenDeep">
                Luxury Living Line
              </span>
            </div>
          </div>

          {/* Tall right image */}
          <div className="group relative overflow-hidden rounded-3xl row-span-2" style={{ minHeight: '420px' }}>
            <Image
              src={gallery[1].src}
              alt={gallery[1].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-greenDeep/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs uppercase tracking-widest text-white/60">Ovqatlanish zonasi</p>
            </div>
          </div>

          {/* Small bottom-left images */}
          {gallery.slice(2, 4).map((img) => (
            <div key={img.alt} className="group relative overflow-hidden rounded-3xl" style={{ height: '220px' }}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-greenDeep/50 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Info badges */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
              <span className="text-2xl">{h.icon}</span>
              <div>
                <p className="text-lg font-semibold text-white">{h.title}</p>
                <p className="text-xs text-white/50">{h.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
