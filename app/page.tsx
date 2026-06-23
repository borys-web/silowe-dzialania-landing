import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { Recognition } from "@/components/sections/Recognition";
import { System } from "@/components/sections/System";
import { Author } from "@/components/sections/Author";
import { Faq } from "@/components/sections/Faq";
import { Pricing } from "@/components/sections/Pricing";
import { AmbientFlux } from "@/components/ui/AmbientFlux";
import { Footer } from "@/components/ui/Footer";
import { PromoTopBar } from "@/components/ui/PromoTopBar";
import { RedThread } from "@/components/ui/RedThread";
import { StickyMobileCta } from "@/components/ui/StickyMobileCta";
import { siteConfig } from "@/content/site.config";

/**
 * Kompozycja landinga (architektura v3 — audyt strategiczny).
 * Cel: usunięcie powtórzeń, jaśniejszy flow decyzyjny, unifikacja wizualna.
 * 1. Hero (nowe zdjęcie) ✓
 * 2. Testimoniale (Kuba + Szymon) ✓
 * 3. Problem — „Ten sam dzień. W kółko." ✓
 * 4. System — scalony Mechanizm + Co dostajesz (4 lekcje + mockup bundla) ✓
 * 5. Autor (skrócony) ✓
 * 6. FAQ ✓
 * 7. Pricing + Final CTA (scalone: kroki Kupujesz → Mail → Lekcja 1) ✓
 */
export default function Home() {
  return (
    <>
      <PromoTopBar />
      <AmbientFlux />
      <RedThread />
      <main className="organic-flow relative z-10">
        <Hero />
        <Testimonials />
        <Recognition />
        <System />
        <Author />
        <Faq />
        <Pricing />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      {siteConfig.flags.stickyMobileCta && <StickyMobileCta />}
    </>
  );
}
