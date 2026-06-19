"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { copy } from "@/content/copy";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { EASE_HOUSE, VIEWPORT_ONCE } from "@/lib/motion";
import { useIsDesktop } from "@/lib/useMediaQuery";

/**
 * Sekcja 2 — Rozpoznanie siebie (ciemna, priorytet wysoki).
 * Cel: identyfikacja z problemem, budowanie napięcia po Hero.
 * Efekt dominujący: sekwencyjne wejście słów cyklu (AnimatePresence) z podkreśleniem,
 * grające raz i zatrzymujące się na ostatnim słowie. Bullety wchodzą jeden po drugim.
 * prefers-reduced-motion → statyka + czysty fade.
 */
export function Recognition() {
  const { recognition } = copy;
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();

  const cycleRef = useRef<HTMLDivElement>(null);
  const cycleInView = useInView(cycleRef, { once: true, margin: "-120px" });
  const [idx, setIdx] = useState(0);
  const lastIdx = recognition.cycle.length - 1;

  useEffect(() => {
    if (reduce || !cycleInView || idx >= lastIdx) return;
    const t = setTimeout(() => setIdx((i) => i + 1), 900); // 700ms widoczne + 200ms pauza
    return () => clearTimeout(t);
  }, [reduce, cycleInView, idx, lastIdx]);

  const header: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: EASE_HOUSE },
        },
      };

  const cardsContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0.12 : 0.22 } },
  };
  // Osobowość ruchu: niepokój — karty wchodzą „rozsypane" (naprzemienny x + lekki obrót),
  // dopiero potem osiadają. Tylko desktop: na mobile (karty pełnej szerokości) proste fade-up,
  // żeby uniknąć poziomego ruchu przy krawędzi i utrzymać szybkość.
  const card: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : !isDesktop
      ? {
          hidden: { opacity: 0, y: 12 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: EASE_HOUSE },
          },
        }
      : {
          hidden: (i: number) => ({
            opacity: 0,
            x: i % 2 === 0 ? -20 : 20,
            y: 8,
            rotate: i % 2 === 0 ? -1.4 : 1.4,
          }),
          show: {
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0,
            transition: { duration: 0.55, ease: EASE_HOUSE },
          },
        };

  return (
    <section
      aria-label="Rozpoznanie siebie"
      className="surface-ink w-full px-5 py-24 text-cream sm:px-8 sm:py-32"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-12 md:gap-16">
        {/* Lewa kolumna: nagłówek + animowany cykl */}
        <div className="md:col-span-5">
          <SectionKicker index="01" label="Rozpoznanie" theme="dark" />
          <motion.h2
            variants={header}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            {recognition.h2}
          </motion.h2>

          <div ref={cycleRef} className="mt-10">
            {reduce ? (
              <ul className="space-y-1">
                {recognition.cycle.map((w) => (
                  <li
                    key={w}
                    className="font-display text-2xl font-bold text-cream/80 sm:text-3xl"
                  >
                    {w}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="relative h-14 sm:h-16">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={recognition.cycle[idx]}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: EASE_HOUSE }}
                    className="absolute inset-0 flex flex-col items-start"
                  >
                    <span className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                      {recognition.cycle[idx]}
                    </span>
                    <motion.span
                      aria-hidden
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, ease: EASE_HOUSE, delay: 0.1 }}
                      className="mt-2 h-[3px] w-16 origin-left rounded-full bg-red"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>

        {/* Prawa kolumna: body + karty problemu */}
        <div className="md:col-span-7">
          <motion.p
            variants={header}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
          >
            {recognition.body}
          </motion.p>

          <motion.ul
            variants={cardsContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="mt-8 flex flex-col gap-4"
          >
            {recognition.bullets.map((b, i) => (
              <motion.li
                key={b}
                custom={i}
                variants={card}
                className="rounded-xl border border-white/10 bg-ink-soft/80 px-5 py-4 text-base leading-snug text-cream/90 sm:text-lg"
              >
                {b}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
