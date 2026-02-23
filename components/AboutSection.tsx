import Image from 'next/image';

const awards = [
  { label: 'Best Interior Brand', year: '2023' },
  { label: 'Quality Certificate', year: '2022' },
  { label: 'Top Showroom UZ', year: '2024' }
];

export function AboutSection() {
  return (
    <section id="biz-haqimizda" className="w-full bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Label */}
        <p className="section-label mb-4">Biz haqimizda</p>

        {/* Two-column layout */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-center">

          {/* Left: image grid */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="relative h-72 col-span-2 overflow-hidden rounded-2xl sm:col-span-1 sm:h-80">
              <Image
                src="images/real/about.jpg"
                alt="Sof Mebel showroom"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-2xl sm:h-80 sm:mt-12">
              <Image
                src="images/real/showroom-main.jpg"
                alt="Premium kolleksiya"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-2xl">
              <Image
                src="images/real/showroom-side-1.jpg"
                alt="Dizayn detallar"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-4 rounded-2xl bg-greenDeep px-6 py-4 shadow-strong">
              <p className="font-display text-3xl font-semibold text-goldAccent">12+</p>
              <p className="text-xs text-white/70 mt-0.5">Yillik tajriba</p>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <h2 className="section-title">
              Har bir uy uchun<br />
              <span className="italic">nafis yechim</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-greenDeep/70">
              2012-yildan beri Sof Mebel Toshkentdagi eng yaxshi interyer va mebel showroomlaridan biri sifatida mijozlarimizga xizmat qilmoqda. Biz Italiya va Skandinaviya ishlab chiqaruvchilari bilan hamkorlik qilib, faqat premium sifatli mahsulotlarni taqdim etamiz.
            </p>
            <p className="mt-4 text-base leading-relaxed text-greenDeep/70">
              Har bir buyurtmada mijozning xohish va interyeriga qarab individual yondashuv ta&apos;minlaymiz — dizayn maslahatidan tortib, montaj va keyingi xizmatgacha.
            </p>

            {/* Feature tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                'Italiya importi',
                'Individual dizayn',
                'Montaj xizmati',
                'Kafolat 5 yil',
                'Tez yetkazib berish',
                '500+ mahsulot'
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-greenDeep/20 bg-beigeMid px-4 py-1.5 text-xs font-medium text-greenDeep"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Awards */}
            <div className="mt-10 grid grid-cols-3 divide-x divide-beigeDark rounded-2xl border border-beigeDark bg-beigeMid">
              {awards.map((a) => (
                <div key={a.label} className="px-4 py-4 text-center">
                  <p className="font-display text-lg font-semibold text-greenDeep">{a.year}</p>
                  <p className="mt-0.5 text-[11px] text-greenDeep/60">{a.label}</p>
                </div>
              ))}
            </div>

            <a href="#cta" className="btn-primary mt-8 w-fit">
              Biz bilan bog&apos;laning
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
