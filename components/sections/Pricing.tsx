"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { copy } from "@/content/copy";
import { siteConfig, withPrice } from "@/content/site.config";
import { EASE_HOUSE, VIEWPORT_ONCE } from "@/lib/motion";

/**
 * Sekcja 10 — Cena / oferta + koszt bezczynności (ciemna).
 * Hierarchia: koszt bezczynności (H2) → zakres → cena → CTA → risk reversal.
 * Cena z site.config.ts (jedno miejsce zmiany). Bez badge'y/pilności.
 * prefers-reduced-motion → czysty fade.
 */
export function Pricing() {
  const { pricing } = copy;
  const reduce = useReducedMotion();

  const priceLabel = `${siteConfig.price} ${siteConfig.currency}`;
  // Zakres z body bez prefiksu ceny (single source: copy.pricing.body).
  const priceCaption = pricing.body.replace("[CENA] zł", "").trim();

  const header: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_HOUSE } },
      };

  const card: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: EASE_HOUSE, staggerChildren: 0.1, delayChildren: 0.1 },
        },
      };
  const item: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_HOUSE } },
      };
  // Osobowość ruchu: „osiadanie" — cena schodzi z góry i spokojnie się układa (decyzja, ciężar).
  const priceVariant: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: -16, scale: 1.05 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, ease: EASE_HOUSE },
        },
      };

  return (
    <section
      id="cena"
      aria-label="Cena"
      className="surface-ink-spotlight w-full scroll-mt-8 px-5 py-24 text-cream sm:px-8 sm:py-32"
    >
      <div className="mx-auto w-full max-w-2xl text-center">
        <SectionKicker index="09" label="Oferta" theme="dark" className="justify-center" />
        {/* Koszt bezczynności */}
        <motion.h2
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mx-auto max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          {pricing.h2}
        </motion.h2>

        {/* Blok ofertowy */}
        <motion.div
          variants={card}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-12 rounded-3xl border border-white/15 bg-ink-soft p-8 text-center shadow-2xl shadow-black/40 sm:p-10"
        >
          {/* Zakres */}
          <motion.ul variants={item} className="mx-auto flex max-w-md flex-col items-center gap-3">
            {pricing.bullets.map((b) => (
              <li key={b} className="flex items-start justify-center gap-3 text-center sm:items-center">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cream/15 text-cream">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-3 w-3">
                    <path d="M5 12.5l4.5 4.5L19 7" />
                  </svg>
                </span>
                <span className="text-base leading-snug text-cream/90">{b}</span>
              </li>
            ))}
          </motion.ul>

          {/* Cena */}
          <motion.div
            variants={priceVariant}
            className="relative mt-8 border-t border-white/10 pt-8 text-center"
          >
            {/* Reflektor — ciepła, czerwona poświata skupiająca wzrok na cenie */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-6 h-32 w-56 -translate-x-1/2 rounded-full bg-red/20 blur-3xl"
            />
            <div className="relative flex items-baseline justify-center gap-3">
              <span className="font-display text-6xl font-extrabold tracking-tight text-cream sm:text-7xl">
                {priceLabel}
              </span>
            </div>
            <p className="relative mt-2 text-sm text-muted-dark">{priceCaption}</p>
          </motion.div>

          {/* CTA */}
          <motion.div variants={item} className="mt-8 flex flex-col items-center">
            <CtaButton
              href={siteConfig.cta.checkoutHref}
              className="w-full text-lg sm:w-auto"
            >
              {withPrice(pricing.cta)}
            </CtaButton>
            {/* Risk reversal / gwarancja */}
            <p className="mt-4 text-sm leading-relaxed text-muted-dark">
              {pricing.riskReversal}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
