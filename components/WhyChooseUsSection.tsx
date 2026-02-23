const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'Tabiiy premium materiallar',
    description: 'Italiya daraxt massivi, Skandinaviya matosi va kafolatlangan aksessuarlar — sifat nazoratidan o\'tgan.'
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Moslashtirilgan dizayn',
    description: 'Har bir buyurtma interyer uslubingizga mos rang, o\'lcham va kompozitsiya bilan individual tarzda tayyorlanadi.'
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: 'Tez va xavfsiz yetkazib berish',
    description: 'O\'rtacha 10 kun ichida yetkazib beramiz. Montaj brigada uyingizda o\'rnatib, sinab ko\'rsatib ketadi.'
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: '5 yillik kafolat va servis',
    description: 'Yetkazib berishdan keyin ham texnik servis va kafolat xizmatlari davom etadi. Biz sizning ishonchingiz uchun javobgarmiz.'
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: '24/7 Mijozlar qo\'llab-quvvatlashi',
    description: 'Istalgan vaqtda savol yoki muammongiz bo\'lsa, bizning jamoamiz doimo siz uchun tayyor.'
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: 'Bepul dizayn maslahat',
    description: 'Tajribali interyer dizaynerimiz bilan birgalikda uyingizga mos optimal mebel yechimini ishlab chiqamiz.'
  }
];

const stats = [
  { value: '900+', label: 'Bajarilgan loyiha' },
  { value: '12+', label: 'Yillik tajriba' },
  { value: '4.9', label: 'Yulduz reyting' },
  { value: '98%', label: 'Mamnun mijozlar' }
];

export function WhyChooseUsSection() {
  return (
    <section className="w-full bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="section-label mb-4">Nega Sof Mebel</p>
          <h2 className="section-title">Sifat, uslub va<br /><span className="italic">qulaylik — bir joyda</span></h2>
          <p className="mt-5 text-base text-greenDeep/65 leading-relaxed">
            Biz shunchaki mebel sotmaymiz — biz hayot tarzingizni yaxshilaymiz. Har bir mahsulotimiz, har bir xizmatimiz shu maqsad bilan yaratilgan.
          </p>
        </div>

        {/* Stats band */}
        <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-beigeDark bg-beigeMid px-5 py-6 text-center">
              <p className="font-display text-4xl font-semibold text-greenDeep">{s.value}</p>
              <p className="mt-1 text-xs text-greenDeep/55">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-beigeDark bg-beigeMid p-7 transition-all duration-300 hover:border-greenDeep/20 hover:bg-greenDeep hover:shadow-strong"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-greenDeep/10 text-greenDeep transition-all duration-300 group-hover:bg-goldAccent/20 group-hover:text-goldAccent">
                {f.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold text-greenDeep transition-colors duration-300 group-hover:text-white">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-greenDeep/65 transition-colors duration-300 group-hover:text-white/70">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
