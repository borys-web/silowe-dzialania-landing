"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { copy } from "@/content/copy";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { EASE_HOUSE, VIEWPORT_ONCE } from "@/lib/motion";

/**
 * Sekcja 3 — Dla kogo to jest (i dla kogo zdecydowanie nie). Jasna.
 * Cel: kwalifikacja odbiorcy, budowanie zaufania przez selektywność.
 * Dwie kontrastowe kolumny (filled vs outline). Motion: header spokojnie,
 * kolumny wchodzą z przeciwnych stron (fadeLeft/fadeRight), stagger 150ms.
 * prefers-reduced-motion → czysty fade.
 */

function CheckMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-4 w-4">
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

function CrossMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-4 w-4">
      <path d="M7 7l10 10M17 7L7 17" />
    </svg>
  );
}

export function ForWhom() {
  const { forWhom } = copy;
  const reduce = useReducedMotion();

  const header: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_HOUSE } },
      };

  const columns: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };
  const fromLeft: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.45 } } }
    : {
        hidden: { opacity: 0, x: -24 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE_HOUSE } },
      };
  const fromRight: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.45 } } }
    : {
        hidden: { opacity: 0, x: 24 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE_HOUSE } },
      };

  return (
    <section
      aria-label="Dla kogo to jest"
      className="w-full bg-cream px-5 py-24 text-ink sm:px-8 sm:py-32"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionKicker index="02" label="Kwalifikacja" theme="light" />
        <motion.h2
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
        >
          {forWhom.h2}
        </motion.h2>
        <motion.p
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-5 max-w-2xl text-base leading-relaxed text-muted-light sm:text-lg"
        >
          {forWhom.body}
        </motion.p>

        <motion.div
          variants={columns}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6"
        >
          {/* Dla Ciebie — karta wypełniona (mocny akcent) */}
          <motion.div
            variants={fromLeft}
            className="rounded-2xl bg-ink p-7 text-cream sm:p-8"
          >
            <h3 className="font-display text-lg font-bold tracking-tight sm:text-xl">
              {forWhom.forYou.title}
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              {forWhom.forYou.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cream/15 text-cream">
                    <CheckMark />
                  </span>
                  <span className="text-base leading-snug text-cream/90">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Nie dla Ciebie — karta konturowa (wyciszona) */}
          <motion.div
            variants={fromRight}
            className="rounded-2xl border border-ink/15 bg-transparent p-7 text-ink sm:p-8"
          >
            <h3 className="font-display text-lg font-bold tracking-tight text-muted-light sm:text-xl">
              {forWhom.notForYou.title}
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              {forWhom.notForYou.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/20 text-muted-light">
                    <CrossMark />
                  </span>
                  <span className="text-base leading-snug text-muted-light">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
