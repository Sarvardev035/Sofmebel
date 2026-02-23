'use client';

import { useState } from 'react';

export function CTASection() {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.name.trim()) {
      setError('Iltimos ismingizni kiriting');
      return;
    }
    if (!formData.phone.trim()) {
      setError('Iltimos telefon raqamingizni kiriting');
      return;
    }
    if (!formData.service) {
      setError('Iltimos xizmat turini tanlang');
      return;
    }

    // Simulate sending
    setSuccess(true);
    setFormData({ name: '', phone: '', service: '' });
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <section id="cta" className="w-full bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-greenDeep px-8 py-16 shadow-strong sm:px-12 lg:px-20 lg:py-20">
          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-goldAccent/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-greenLight/20 blur-3xl" />
          <div className="pointer-events-none absolute right-1/3 bottom-0 h-48 w-px bg-gradient-to-t from-goldAccent/30 to-transparent" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* Text */}
            <div>
              <span className="section-label mb-4 inline-block">Bepul maslahat</span>
              <h2 className="font-display text-4xl font-normal leading-tight text-white sm:text-5xl lg:text-6xl">
                Interyeringiz uchun<br />
                <span className="italic text-goldAccent">ideal mebel</span> topaylik
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65">
                Dizaynerimiz bilan bepul 30 daqiqalik maslahat oling. Xona o&apos;lchamingizga mos, estetik va uzoq xizmat qiladigan mebel yechimini birga tanlaymiz.
              </p>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  { icon: '✓', text: 'Bepul konsultatsiya' },
                  { icon: '✓', text: '3D interyer loyiha' },
                  { icon: '✓', text: 'Montaj kiritilgan' }
                ].map((b) => (
                  <div key={b.text} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-goldAccent/20 text-xs text-goldAccent font-bold">{b.icon}</span>
                    {b.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Form card */}
            <div className="w-full rounded-2xl border border-white/10 bg-white/8 p-7 backdrop-blur-sm lg:w-80">
              {success ? (
                <div className="flex flex-col items-center justify-center gap-3 py-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                    <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-center text-sm font-medium text-white">Xabaringiz muvaffaqiyatli yuborildi!</p>
                  <p className="text-center text-xs text-white/50">Tez orada siz bilan bog&apos;lanamiz</p>
                </div>
              ) : (
                <>
                  <p className="mb-5 text-sm font-semibold text-white">Tezkor aloqa</p>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Ismingiz"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-all focus:border-goldAccent focus:ring-2 focus:ring-goldAccent/30"
                    />
                    <input
                      type="tel"
                      placeholder="Telefon raqamingiz"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-all focus:border-goldAccent focus:ring-2 focus:ring-goldAccent/30"
                    />
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/70 outline-none transition-all focus:border-goldAccent appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-greenDeep">Xizmat turi</option>
                      <option value="design" className="bg-greenDeep">Dizayn maslahat</option>
                      <option value="order" className="bg-greenDeep">Mahsulot buyurtma</option>
                      <option value="showroom" className="bg-greenDeep">Showroomga tashrif</option>
                    </select>
                    {error && <p className="text-xs text-red-300">{error}</p>}
                    <button
                      type="submit"
                      className="btn-gold w-full justify-center py-3.5 hover:scale-105 transition-transform"
                    >
                      Arizani yuborish
                    </button>
                  </form>
                </>
              )}
              <p className="mt-4 text-center text-[11px] text-white/35">
                Yoki qo&apos;ng&apos;iroq qiling: <a href="tel:+998901234567" className="text-goldAccent hover:underline">+998 90 123 45 67</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
