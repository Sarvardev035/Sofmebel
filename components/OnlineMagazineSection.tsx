import Image from 'next/image';

const magazineStacks = [
  {
    title: 'Italian Design Notes',
    description: 'Minimal shakllar, yumshoq ranglar va premium kompozitsiya yondashuvlari.',
    image: '/images/real/magazine-italian.jpg'
  },
  {
    title: 'Turkiya Mebel Trendlari',
    description: 'Ustaxona sifati, klassik elementlar va zamonaviy interyerga mos yechimlar.',
    image: '/images/real/magazine-turkiya.jpg'
  },
  {
    title: 'Material & Texture',
    description: 'Mato, yog‘och va metal uyg‘unligi bo‘yicha amaliy tavsiyalar va case studylar.',
    image: '/images/real/magazine-material.jpg'
  }
];

export function OnlineMagazineSection() {
  return (
    <section id="online-magazine" className="mx-auto mt-10 w-full max-w-7xl px-5 sm:px-8 lg:mt-14 lg:px-10">
      <div className="rounded-2xl border border-greenDeep/15 bg-[#f6f2e8] p-6 shadow-soft sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-goldAccent">Online Magazine</p>
            <h2 className="mt-2 font-display text-3xl text-greenDeep sm:text-4xl">Italian va Turkiya uslubida ilhomlar</h2>
          </div>
          <span className="inline-flex w-fit items-center rounded-full border border-goldAccent/40 bg-goldAccent/15 px-4 py-1 text-sm font-medium text-greenDeep">
            Tez orada
          </span>
        </div>
        <p className="mt-4 text-sm text-greenDeep/75">Tez orada ishga tushadi bu qism.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {magazineStacks.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-greenDeep/10 bg-white/70 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-goldAccent/40"
            >
              <div className="relative mb-3 h-36 overflow-hidden rounded-xl border border-greenDeep/10">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <h3 className="font-display text-xl text-greenDeep">{item.title}</h3>
              <p className="mt-2 text-sm text-greenDeep/75">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
