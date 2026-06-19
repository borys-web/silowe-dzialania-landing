"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { copy } from "@/content/copy";
import { siteConfig } from "@/content/site.config";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { EASE_HOUSE, VIEWPORT_ONCE } from "@/lib/motion";

/**
 * Sekcja 6 — Kim jestem (Wiktor Mariczew). Ciemna.
 * Cel: zbudować zaufanie przed FAQ i ceną; rozbroić obiekcję „scam / ekspert od wszystkiego".
 * prefers-reduced-motion → czysty fade.
 */
export function Author() {
  const { author } = siteConfig;
  const reduce = useReducedMotion();

  const fade: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_HOUSE } },
      };

  const textGroup: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };

  const item: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_HOUSE } },
      };

  const statNumber: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, scale: 0.88, y: 10 },
        show: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.6, ease: EASE_HOUSE },
        },
      };

  const statLabel: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, x: -8 },
        show: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.45, ease: EASE_HOUSE, delay: 0.08 },
        },
      };

  return (
    <section
      aria-label="Kim jestem — Wiktor Mariczew"
      className="surface-ink w-full px-5 py-24 text-cream sm:px-8 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionKicker index="06" label="Kto za tym stoi" theme="dark" />
        <motion.h2
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
        >
          {copy.author.h2}
        </motion.h2>

        <div className="mt-12 grid items-start gap-10 md:grid-cols-12 md:gap-14">
          <motion.div
            variants={textGroup}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="order-2 md:order-1 md:col-span-7"
          >
            <motion.div variants={item} className="flex flex-col gap-4">
              {author.bio.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-cream/85 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <ul className="mt-10 flex flex-col gap-6">
              {author.facts.map((fact) =>
                "highlight" in fact && fact.highlight ? (
                  <motion.li
                    key={fact.label}
                    variants={item}
                    className="flex items-baseline gap-3 sm:gap-4"
                  >
                    <motion.span
                      variants={statNumber}
                      className="relative shrink-0 font-display text-4xl font-extrabold leading-none tracking-tight text-red sm:text-5xl"
                    >
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -inset-x-2 -inset-y-1 rounded-lg bg-red/20 blur-xl"
                      />
                      <span className="relative tabular-nums">{fact.highlight}</span>
                    </motion.span>
                    <motion.span
                      variants={statLabel}
                      className="text-base leading-snug text-cream/90 sm:text-lg"
                    >
                      {fact.label}
                    </motion.span>
                  </motion.li>
                ) : (
                  <motion.li
                    key={fact.label}
                    variants={item}
                    className="flex items-start gap-3 border-t border-white/10 pt-6"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cream/50"
                    />
                    <span className="text-base leading-snug text-cream/85 sm:text-lg">
                      {fact.label}
                    </span>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>

          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="order-1 md:order-2 md:col-span-5"
          >
            <figure className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-ink-soft shadow-2xl shadow-black/40 md:mx-0">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={author.photo}
                  alt={`${author.name} — autor mini-kursu`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-[center_18%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <span className="font-display text-lg font-bold tracking-tight text-cream">
                  {author.name}
                </span>
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
