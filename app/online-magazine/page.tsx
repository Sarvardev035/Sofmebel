import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductsSection } from '@/components/ProductsSection';

export default function OnlineMagazinePage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden pb-10">
        <div className="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full bg-goldAccent/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-64 h-96 w-96 rounded-full bg-greenDeep/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1600px] px-3 pt-3 sm:px-5 sm:pt-5">
          <Navbar />

          <div className="relative mt-28 lg:mt-32">
            <ProductsSection />
          </div>

          <section className="relative mt-16 rounded-2xl border border-greenDeep/10 bg-[#f5f2eb] p-8 shadow-soft sm:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.24em] text-goldAccent">Yana savol bormi?</p>
              <h2 className="mt-3 font-display text-3xl text-greenDeep sm:text-4xl">Bosh sahifaga qaytish</h2>
              <p className="mt-4 text-base text-greenDeep/80 sm:text-lg">Batafsil ma&apos;lumot uchun bizga murojaat qiling</p>

              <div className="mt-8">
                <Link
                  href="/#cta"
                  className="inline-flex rounded-2xl bg-greenDeep px-6 py-3 text-sm font-semibold text-beigeLight transition duration-300 hover:-translate-y-0.5 hover:bg-[#294d38]"
                >
                  Aloqa qilish
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
