import { Hero } from "@/components/sections/Hero";
import { Recognition } from "@/components/sections/Recognition";
import { ForWhom } from "@/components/sections/ForWhom";
import { Diagnosis } from "@/components/sections/Diagnosis";
import { Mechanism } from "@/components/sections/Mechanism";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { Author } from "@/components/sections/Author";
import { ProofSection } from "@/components/sections/ProofSection";
import { Faq } from "@/components/sections/Faq";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/ui/Footer";
import { ThreadSpine } from "@/components/ui/ThreadSpine";

/**
 * Kompozycja landinga (architektura v2). Kolejność zgodna ze specyfikacją.
 * 1. Hero ✓
 * 2. Rozpoznanie siebie ✓
 * 3. Dla kogo to jest / dla kogo nie ✓
 * 4. Diagnoza ✓
 * 5. Mechanizm ✓
 * 6. Co dokładnie dostajesz ✓
 * 7. Kim jestem — Wiktor Mariczew ✓
 * 8. Dowody — konkretne zmiany ✓ (widoczna: showProofSection=true, sloty „do uzupełnienia")
 * 9. FAQ / obiekcje ✓
 * 10. Cena / oferta ✓
 * 11. Finalne CTA + co dalej ✓
 */
export default function Home() {
  return (
    <>
      <ThreadSpine />
      <main>
        <Hero />
        <Recognition />
        <ForWhom />
        <Diagnosis />
        <Mechanism />
        <WhatYouGet />
        <Author />
        <ProofSection />
        <Faq />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
