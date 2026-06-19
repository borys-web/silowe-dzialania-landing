"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { ReactNode } from "react";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { copy } from "@/content/copy";
import { siteConfig } from "@/content/site.config";
import { EASE_HOUSE, VIEWPORT_ONCE } from "@/lib/motion";

/**
 * Sekcja 6 — Co dokładnie dostajesz (jasna).
 * Cel: użytkownik widzi precyzyjnie, co fizycznie odbiera po zakupie.
 * Karta z 4 elementami (ikona + opis), pierwszy mocny CTA po hero,
 * subtelne przejście do sekcji ceny. Motion: header fade, lista stagger 80ms,
 * CTA jednorazowy scale-in. prefers-reduced-motion → czysty fade.
 */

// Minimalne, stonowane ikony liniowe (nie emoji, nie "startup") — kolejność = bullety copy.
const icons: ReactNode[] = [
  // 4 lekcje wideo
  <svg key="video" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-6 w-6">
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
    <path d="M10 9.5l4.5 2.5L10 14.5z" fill="currentColor" stroke="none" />
  </svg>,
  // 2 arkusze
  <svg key="sheet" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-6 w-6">
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4" />
    <path d="M9 12h6M9 16h6" />
  </svg>,
  // dostęp od razu i na zawsze
  <svg key="access" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-6 w-6">
    <path d="M7 10V8a5 5 0 0 1 10 0v2" />
    <rect x="5" y="10" width="14" height="10" rx="2.5" />
    <path d="M12 14v3" />
  </svg>,
  // pierwsze ćwiczenie w 12 minut
  <svg key="clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-6 w-6">
    <circle cx="12" cy="13" r="8" />
    <path d="M12 9v4l2.5 2M9 3h6" />
  </svg>,
];

export function WhatYouGet() {
  const { whatYouGet } = copy;
  const reduce = useReducedMotion();

  const header: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_HOUSE } },
      };

  const listContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const item: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_HOUSE } },
      };

  const cta: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, scale: 0.97 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE_HOUSE } },
      };

  return (
    <section
      aria-label="Co dokładnie dostajesz"
      className="w-full bg-cream-soft px-5 py-24 text-ink sm:px-8 sm:py-32"
    >
      <div className="mx-auto w-full max-w-4xl">
        <SectionKicker index="05" label="Zakres" theme="light" />
        <motion.h2
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
        >
          {whatYouGet.h2}
        </motion.h2>
        <motion.p
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-5 max-w-2xl text-base leading-relaxed text-muted-light sm:text-lg"
        >
          {whatYouGet.body}
        </motion.p>

        {/* Karta z elementami */}
        <motion.ul
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2"
        >
          {whatYouGet.bullets.map((b, i) => (
            <motion.li
              key={b}
              variants={item}
              className="flex items-start gap-4 bg-white p-6"
            >
              <span className="mt-0.5 shrink-0 text-ink">{icons[i]}</span>
              <span className="text-base leading-snug text-ink/90 sm:text-[1.05rem]">
                {b}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA + przejście do ceny */}
        <motion.div
          variants={cta}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-10 flex flex-col items-start gap-3"
        >
          <CtaButton href={siteConfig.cta.primaryHref} className="text-lg">
            {whatYouGet.cta}
          </CtaButton>
          <a
            href={siteConfig.cta.primaryHref}
            className="text-sm font-medium text-muted-light underline-offset-4 hover:text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Cena i szczegóły niżej &darr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
