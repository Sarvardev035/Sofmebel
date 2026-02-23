import Image from 'next/image';

export function Hero() {
  return (
    <section id="bosh-sahifa" className="relative min-h-[92vh] w-full overflow-hidden bg-greenDeep">
      {/* Background image */}
      <Image
        src="/images/real/hero.jpg"
        alt="Premium zamonaviy yashash xonasi"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-greenDeep/95 via-greenDeep/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-greenDeep/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-goldAccent/40 bg-goldAccent/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-goldAccent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-goldAccent">
              Premium mebel showroom — Toshkent
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl font-normal leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            Uyingizni<br />
            <span className="italic text-goldAccent">gozal</span> qiling
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
            Sof Mebel — zamonaviy Italiya va Skandinaviya uslubida premium mebellar. Har bir mahsulot sifat, estetika va uzoq xizmat uchun yaratilgan.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="/#mebel" className="btn-gold">
              Kolleksiyani korish
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/#aksessuarlar" className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909" />
                </svg>
              </span>
              Showroomni ko'rish
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/15 pt-8">
            {[
              { value: '500+', label: 'Mahsulot assortimenti' },
              { value: '12 yil', label: 'Bozordagi tajriba' },
              { value: '4.9 ★', label: 'Mijozlar bahosi' },
              { value: '10 kun', label: "O'rtacha yetkazish" }
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-semibold text-goldAccent">{s.value}</p>
                <p className="mt-0.5 text-xs text-white/55">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] uppercase tracking-widest">Pastga</span>
        <div className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
