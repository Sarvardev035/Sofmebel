import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { CollectionsSection } from '@/components/CollectionsSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { ShowroomSection } from '@/components/ShowroomSection';
import { ProductsSection } from '@/components/ProductsSection';
import { ARVisualizerSection } from '@/components/ARVisualizerSection';
import { CTASection } from '@/components/CTASection';
import { CommentsSection } from '@/components/CommentsSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <CollectionsSection />
        <WhyChooseUsSection />
        <ShowroomSection />
        <ProductsSection />
        <ARVisualizerSection />
        <CTASection />
        <CommentsSection />
      </main>
      <Footer />
    </>
  );
}
