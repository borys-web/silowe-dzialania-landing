"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { copy } from "@/content/copy";
import { siteConfig } from "@/content/site.config";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { EASE_HOUSE, VIEWPORT_ONCE } from "@/lib/motion";

/**
 * Sekcja 7 — Dowody / konkretne zmiany (jasna).
 * Format kart: wideo-testimonial (struktura jak wiktormariczew.pl).
 * Render TYLKO gdy siteConfig.flags.showProofSection === true.
 */
export function ProofSection() {
  const reduce = useReducedMotion();
  const { proof } = copy;

  if (!siteConfig.flags.showProofSection || proof.testimonials.length === 0) {
    return null;
  }

  const header: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_HOUSE } },
      };

  const grid: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const cardVariant: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_HOUSE } },
      };

  return (
    <section
      aria-label="Dowody — konkretne zmiany"
      className="w-full bg-cream px-5 py-24 text-ink sm:px-8 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionKicker index="07" label="Dowody" theme="light" />
        <motion.h2
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
        >
          {proof.h2}
        </motion.h2>
        <motion.p
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-5 max-w-2xl text-base leading-relaxed text-muted-light sm:text-lg"
        >
          {proof.intro}
        </motion.p>

        <motion.ul
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6"
        >
          {proof.testimonials.map((t) => (
            <TestimonialCard
              key={t.videoId ?? t.name}
              testimonial={t}
              variants={cardVariant}
            />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
