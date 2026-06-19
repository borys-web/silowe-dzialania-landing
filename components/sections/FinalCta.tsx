"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { copy } from "@/content/copy";
import { siteConfig } from "@/content/site.config";
import { EASE_HOUSE, VIEWPORT_ONCE } from "@/lib/motion";

/**
 * Sekcja 11 — Finalne CTA + „co dalej” (ciemna, domknięcie strony).
 * Charakter decyzyjny/proceduralny: sekwencja kroków klik → mail → lekcja 1.
 * Inny layout niż sekcja Cena (poziomy flow zamiast karty z ceną).
 * prefers-reduced-motion → czysty fade.
 */
export function FinalCta() {
  const { finalCta } = copy;
  const reduce = useReducedMotion();

  const container: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: EASE_HOUSE, staggerChildren: 0.12, delayChildren: 0.1 },
        },
      };
  const item: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_HOUSE } },
      };

  return (
    <section
      aria-label="Finalne CTA"
      className="surface-ink w-full px-5 py-24 text-cream sm:px-8 sm:py-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT_ONCE}
        className="mx-auto w-full max-w-3xl text-center"
      >
        <SectionKicker label="Pierwszy ruch" theme="dark" className="justify-center" />
        <motion.h2
          variants={item}
          className="mx-auto max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          {finalCta.h2}
        </motion.h2>

        <motion.p
          variants={item}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg"
        >
          {finalCta.body}
        </motion.p>

        {/* Sekwencja kroków: klik → mail → lekcja 1 */}
        <motion.ol
          variants={item}
          className="mt-12 flex flex-col items-stretch gap-3 sm:flex-row sm:items-stretch sm:gap-0"
        >
          {finalCta.bullets.map((step, i) => (
            <li key={step} className="flex flex-1 items-stretch">
              <div className="flex w-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-ink-soft/80 px-5 py-6 text-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/15 font-display text-sm font-bold text-cream">
                  {i + 1}
                </span>
                <span className="text-sm leading-snug text-cream/90">{step}</span>
              </div>
              {i < finalCta.bullets.length - 1 && (
                <span
                  aria-hidden
                  className="hidden shrink-0 items-center px-3 text-2xl text-muted-light sm:flex"
                >
                  &rarr;
                </span>
              )}
            </li>
          ))}
        </motion.ol>

        <motion.div variants={item} className="mt-12">
          <CtaButton
            href={siteConfig.cta.checkoutHref}
            className="w-full text-lg sm:w-auto"
          >
            {finalCta.cta}
          </CtaButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
