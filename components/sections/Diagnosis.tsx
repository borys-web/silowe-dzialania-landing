"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { copy } from "@/content/copy";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { EASE_HOUSE, VIEWPORT_ONCE } from "@/lib/motion";

/**
 * Sekcja 4 — Diagnoza / „Problem nie leży w dyscyplinie". Ciemna.
 * Cel: reframing — problem to mechanizm, nie brak dyscypliny.
 * Mocny insight: nagłówek z rysującym się podkreśleniem, główne zdanie z akcentem,
 * 3 insighty po kolei (ostatni mocniej wyróżniony), subtelny scroll cue do Mechanizmu.
 * prefers-reduced-motion → czysty fade, podkreślenie statyczne.
 */
export function Diagnosis() {
  const { diagnosis } = copy;
  const reduce = useReducedMotion();
  const lastIndex = diagnosis.bullets.length - 1;

  const header: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_HOUSE } },
      };

  const listContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
  };
  // Osobowość ruchu: cięcie — bullety wjeżdżają ostro z lewej, krótko i zdecydowanie.
  const item: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, x: -16 },
        show: { opacity: 1, x: 0, transition: { duration: 0.38, ease: EASE_HOUSE } },
      };

  return (
    <section
      aria-label="Diagnoza"
      className="surface-ink w-full px-5 py-24 text-cream sm:px-8 sm:py-32"
    >
      <div className="mx-auto w-full max-w-3xl">
        <SectionKicker index="03" label="Diagnoza" theme="dark" />
        <div className="inline-block">
          <motion.h2
            variants={header}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            {diagnosis.h2}
          </motion.h2>
          <motion.span
            aria-hidden
            initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={VIEWPORT_ONCE}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: 0.45, ease: EASE_HOUSE, delay: 0.15 }
            }
            className="mt-3 block h-[3px] w-full origin-left rounded-full bg-red"
          />
        </div>

        {/* Główne zdanie — „cięcie": wipe z lewej (clip-path) zamiast zwykłego fade */}
        <motion.p
          initial={
            reduce
              ? { opacity: 0 }
              : { opacity: 0, clipPath: "inset(0 100% 0 0)" }
          }
          whileInView={
            reduce
              ? { opacity: 1 }
              : { opacity: 1, clipPath: "inset(0 0% 0 0)" }
          }
          viewport={VIEWPORT_ONCE}
          transition={
            reduce
              ? { duration: 0.4 }
              : { duration: 0.55, ease: EASE_HOUSE, delay: 0.15 }
          }
          className="mt-8 text-lg font-medium leading-relaxed text-cream sm:text-2xl sm:leading-relaxed"
        >
          {diagnosis.body}
        </motion.p>

        <motion.ul
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-12 flex flex-col"
        >
          {diagnosis.bullets.map((b, i) => {
            const isLast = i === lastIndex;
            return (
              <motion.li
                key={b}
                variants={item}
                className={
                  isLast
                    ? "border-l-2 border-cream py-5 pl-5 text-lg font-semibold leading-snug text-cream sm:text-xl"
                    : "border-t border-white/10 py-5 text-base leading-snug text-cream/75 first:border-t-0 sm:text-lg"
                }
              >
                {b}
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Subtelny scroll cue do sekcji Mechanizm */}
        <motion.div
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-12"
        >
          <a
            href="#mechanizm"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-dark underline-offset-4 transition-colors hover:text-cream hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          >
            Zobacz mechanikę
            <span aria-hidden className="transition-transform duration-150 group-hover:translate-y-0.5">
              &darr;
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
