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
 * 1. Hero → 2. Problem → 3. System → 4. Autor → 5. Testimoniale → 6. FAQ → 7. Pricing
 */
export default function Home() {
  return (
    <>
      <PromoTopBar />
      <AmbientFlux />
      <RedThread />
      <main className="organic-flow relative z-10">
        <Hero />
        <Recognition />
        <System />
        <Author />
        <Testimonials />
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
