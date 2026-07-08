"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { CtaButton } from "@/components/ui/CtaButton";
import { Countdown } from "@/components/ui/Countdown";
import { PriceTag } from "@/components/ui/PriceTag";
import { copy } from "@/content/copy";
import {
  formatPrice,
  OFFER,
  PRICE_ANCHOR,
  promoEndsAtIso,
  PURCHASE_URL,
  withPrice,
  ctaAriaLabel,
} from "@/config/offer";
import { SPRING_HOUSE, VIEWPORT_ONCE } from "@/lib/motion";
import { useCountdown } from "@/lib/useCountdown";

/**
 * Sekcja 10 — Cena / oferta + koszt bezczynności (ciemna).
 * CRO: price anchoring (promo 47 zł obok przekreślonej 77 zł, etykieta -39%),
 * countdown do promoEndsAt + komunikat „Potem cena wraca do 77 zł",
 * oraz wzmocniony risk reversal (osobny panel z ikoną).
 * Wszystkie liczby z site.config.ts. prefers-reduced-motion → czysty fade.
 */
export function Pricing() {
  const { pricing } = copy;
  const reduce = useReducedMotion();
  const { isExpired, mounted } = useCountdown(promoEndsAtIso());
  const promoActive = !(mounted && isExpired);

  const header: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: SPRING_HOUSE },
      };

  const card: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 24, scale: 0.98 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { ...SPRING_HOUSE, staggerChildren: 0.1, delayChildren: 0.1 },
        },
      };
  const item: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1, transition: SPRING_HOUSE },
      };
  const priceVariant: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: -16, scale: 1.05 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: SPRING_HOUSE,
        },
      };

  return (
    <section
      id="cena"
      aria-label="Cena"
      className="section-shell surface-ink-spotlight relative w-full scroll-mt-8 overflow-hidden px-5 py-20 text-cream sm:px-8 sm:py-32"
    >
      <div aria-hidden className="glow-orb absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/[0.12]" />
      <div className="mx-auto w-full max-w-2xl text-center">
        <motion.h2
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="heading-display text-cream mx-auto max-w-2xl lg:text-6xl"
        >
          {pricing.h2}
        </motion.h2>

        <motion.div
          variants={card}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="pricing-red-glow glass-panel panel-glow-center panel-elevated relative mt-12 rounded-[2rem] p-8 text-center sm:p-10"
        >
          <motion.ul variants={item} className="relative mx-auto flex max-w-md flex-col items-center gap-3">
            {pricing.bullets.map((b) => (
              <motion.li key={b} variants={item} className="flex items-start justify-center gap-3 text-center sm:items-center">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red/15 text-red shadow-[0_0_18px_rgba(209,26,42,0.45)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-3 w-3">
                    <path d="M5 12.5l4.5 4.5L19 7" />
                  </svg>
                </span>
                <span className="text-base leading-snug text-cream/90">{b}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Cena + price anchoring */}
          <motion.div
            variants={priceVariant}
            data-red-thread-node="pricing"
            data-red-thread-position="above"
            className="relative mt-8 border-t border-white/10 pt-8 text-center"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-6 h-36 w-64 -translate-x-1/2 rounded-full bg-red/[0.14] blur-3xl"
            />
            <div className="relative mb-4 flex items-center justify-center gap-2">
              <svg
                aria-hidden
                className="h-4 w-4 shrink-0 text-red"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold text-red">
                Ryzykujesz jedną kawę, nie weekend.
              </span>
            </div>
            <PriceTag
              expired={!promoActive}
              size="lg"
              showBadge={promoActive}
              className="relative justify-center"
            />
            <p className="relative mt-3 text-sm text-cream/[0.58]">{pricing.body}</p>
          </motion.div>

          {/* Countdown — pilność (tylko gdy promocja trwa) */}
          {promoActive && (
            <motion.div variants={item} className="mt-8 rounded-3xl border border-red/20 bg-red/[0.08] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <Countdown
                targetIso={promoEndsAtIso()}
                variant="boxes"
                autoSecondsBelow24h
              />
              <p className="mt-3 text-sm font-medium text-cream/[0.62]">
                Potem cena wraca do {formatPrice(OFFER.priceRegular)}.
              </p>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div variants={item} className="mt-8 flex flex-col items-center">
            <CtaButton
              href={PURCHASE_URL}
              ariaLabel={ctaAriaLabel()}
              className="w-full text-lg sm:w-auto"
              redThreadNode="pricing"
              redThreadPosition="above"
            >
              {withPrice(pricing.cta)}
            </CtaButton>
          </motion.div>

          {/* Risk reversal — osobny panel z ikoną */}
          <motion.div
            variants={item}
            className="glass-panel mt-8 flex items-start gap-4 rounded-2xl p-5 text-left"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red/15 text-red">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-6 w-6">
                <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </span>
            <div>
              <p className="font-display text-base font-bold tracking-tight text-cream">
                {pricing.guaranteeTitle}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-dark">
                {pricing.riskReversal}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Co dzieje się po kliknięciu — 3 kroki (scalone z dawnej sekcji „Zacznij od 30 minut") */}
        <motion.div
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red">
            {pricing.stepsTitle}
          </p>
          <ol className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:gap-0">
            {pricing.steps.map((step, i) => (
              <li key={step.label} className="flex flex-1 items-stretch">
                <div className="glass-panel flex w-full flex-col items-center gap-2 rounded-2xl px-5 py-6 text-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red/15 font-display text-sm font-bold text-red">
                    {i + 1}
                  </span>
                  <span className="font-display text-base font-bold tracking-tight text-cream">
                    {step.label}
                  </span>
                  <span className="text-sm leading-snug text-cream/65">
                    {step.detail}
                  </span>
                </div>
                {i < pricing.steps.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden shrink-0 items-center px-3 text-2xl text-muted-light sm:flex"
                  >
                    &rarr;
                  </span>
                )}
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
