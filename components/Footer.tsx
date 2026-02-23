const footerLinks = {
  catalog: {
    title: 'Katalog',
    links: [
      { label: 'Yashash xonasi', href: '#' },
      { label: 'Yotoqxona', href: '#' },
      { label: 'Oshxona', href: '#' },
      { label: 'Xona bezaklari', href: '#' },
      { label: 'Maxsus takliflar', href: '#' }
    ]
  },
  services: {
    title: 'Xizmatlar',
    links: [
      { label: 'Dizayn maslahat', href: '#' },
      { label: 'Montaj xizmati', href: '#' },
      { label: "O'lchov olish", href: '#' },
      { label: 'Kafolat servisi', href: '#' },
      { label: 'Yetkazib berish', href: '#' }
    ]
  },
  company: {
    title: 'Kompaniya',
    links: [
      { label: 'Biz haqimizda', href: '/#biz-haqimizda' },
      { label: 'Online Magazine', href: '/online-magazine' },
      { label: 'Showroom', href: '/#aksessuarlar' },
      { label: 'Aloqa', href: '#' },
      { label: 'Karyera', href: '#' }
    ]
  }
};

export function Footer() {
  return (
    <footer className="w-full bg-charcoal text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="h-8 w-8 rounded-lg bg-greenDeep flex items-center justify-center">
                <span className="font-display text-sm font-bold italic text-goldAccent">S</span>
              </span>
              <span className="text-lg font-semibold tracking-tight">
                <span className="font-display italic text-goldAccent">Sof</span> Mebel
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/55 max-w-xs">
              Toshkentdagi premium mebel showroomi. Italiya va Skandinaviya uslublaridan ilhomlanib yaratilgan kolleksiyalar.
            </p>

            {/* Contact */}
            <div className="mt-7 space-y-2.5 text-sm text-white/55">
              <div className="flex items-center gap-2.5">
                <svg className="h-4 w-4 text-goldAccent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:+998901234567" className="hover:text-white transition-colors">+998 90 123 45 67</a>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="h-4 w-4 text-goldAccent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:info@sofmebel.uz" className="hover:text-white transition-colors">info@sofmebel.uz</a>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="h-4 w-4 text-goldAccent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Toshkent sh., Chilonzor ko&apos;chasi 45</span>
              </div>
            </div>

            {/* Social */}
            <div className="mt-7 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition-all hover:border-goldAccent/50 hover:bg-goldAccent/10 hover:text-goldAccent"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Telegram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition-all hover:border-goldAccent/50 hover:bg-goldAccent/10 hover:text-goldAccent"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition-all hover:border-goldAccent/50 hover:bg-goldAccent/10 hover:text-goldAccent"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/40">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-14 rounded-2xl border border-white/8 bg-white/5 p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-base font-semibold text-white">Yangiliklar va maxsus takliflar</p>
              <p className="text-sm text-white/45 mt-0.5">Yangi kolleksiyalar haqida birinchi bo&apos;lib biling</p>
            </div>
            <div className="flex gap-2 sm:min-w-[360px]">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="flex-1 rounded-xl border border-white/15 bg-white/8 px-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-goldAccent"
              />
              <button type="button" className="btn-gold text-xs py-2.5 px-5 whitespace-nowrap">
                Obuna bo&apos;lish
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 sm:flex-row sm:px-8 lg:px-10">
          <p className="text-xs text-white/30">© 2026 Sof Mebel. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-5 text-xs text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-white/60 transition-colors">Foydalanish shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
