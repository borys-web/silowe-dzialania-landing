import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { Recognition } from "@/components/sections/Recognition";
import { System } from "@/components/sections/System";
import { TextReviews } from "@/components/sections/TextReviews";
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
 * 1. Hero → 2. Problem → 3. System → 4. Autor → 5. Testimoniale (wideo) → 6. Opinie (czat) → 7. FAQ → 8. Pricing
 * Logika dowodu: najpierw KTO uczy, potem dowód na osobę (wideo), potem dowód na produkt (screeny).
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
        <TextReviews />
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
