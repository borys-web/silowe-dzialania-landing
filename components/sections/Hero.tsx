"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { CtaButton } from "@/components/ui/CtaButton";
import { copy } from "@/content/copy";
import { siteConfig } from "@/content/site.config";
import { EASE_HOUSE } from "@/lib/motion";
import { useIsDesktop } from "@/lib/useMediaQuery";

/**
 * Sekcja 1 — Hero (priorytet wysoki).
 * Motion: staggered reveal (eyebrow→H1→body→bullety→CTA) + parallax tła (desktop)
 * + ambient zoom zdjęcia (CSS). prefers-reduced-motion → czysty fade, zero ruchu tła.
 */
export function Hero() {
  const { hero } = copy;
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();
  const parallaxOn = isDesktop && !reduce;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  // Warianty: stagger kontenera + house-style dla dzieci (lub czysty fade przy redukcji).
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.11, delayChildren: 0.1 },
    },
  };
  const item: Variants = reduce
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.4, ease: "linear" } },
      }
    : {
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: EASE_HOUSE },
        },
      };

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="relative isolate flex min-h-dvh w-full items-center overflow-hidden bg-ink"
    >
      {/* Tło: zdjęcie z parallaxem (desktop) + ambient zoom (CSS) */}
      <motion.div
        aria-hidden
        style={parallaxOn ? { y: bgY } : undefined}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 -top-[8%] h-[116%]">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            priority
            quality={80}
            sizes="100vw"
            className={`object-cover object-[75%_center] ${reduce ? "" : "ambient-zoom"}`}
          />
        </div>
        {/* Overlay: czytelność tekstu (mocny od lewej na desktopie, od dołu na mobile) */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent md:via-transparent" />
        {/* Film grain — spójna faktura z resztą ciemnych sekcji */}
        <div className="grain-overlay absolute inset-0 opacity-60" />
      </motion.div>

      {/* Treść */}
      <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-2xl flex-col items-start gap-6"
        >
          <motion.p
            variants={item}
            className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-dark sm:text-sm"
          >
            <span aria-hidden className="h-px w-8 shrink-0 bg-red" />
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl"
          >
            {hero.h1}
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg"
          >
            {hero.body}
          </motion.p>

          <motion.ul variants={item} className="flex flex-col gap-3">
            {hero.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-cream/90">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cream/50"
                />
                <span className="text-sm leading-snug sm:text-base">{b}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={item} className="pt-2">
            <CtaButton href={siteConfig.cta.primaryHref} className="text-lg">
              {hero.cta}
            </CtaButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue — wizualna zachęta do zejścia niżej */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1, ease: EASE_HOUSE }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-dark sm:flex"
      >
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
          Przewiń
        </span>
        <span className="scroll-cue text-lg leading-none">&darr;</span>
      </motion.div>
    </section>
  );
}
