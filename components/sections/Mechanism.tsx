"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { copy } from "@/content/copy";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { EASE_HOUSE, VIEWPORT_ONCE } from "@/lib/motion";
import { useIsDesktop } from "@/lib/useMediaQuery";

/**
 * Sekcja 5 — Mechanizm / 4 lekcje (jasna, priorytet wysoki).
 * Cel: problem to nie brak dyscypliny, tylko układ działania.
 * Wizualizacja mechanizmu: 4 etapy jako sekwencja połączona linią,
 * która wypełnia się przy scrollu (chaos → diagnoza → układ → pierwszy ruch).
 * Mobile: linia wyłączona, karty wertykalnie. prefers-reduced-motion → fade + linia statyczna.
 */
export function Mechanism() {
  const { mechanism } = copy;
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  // Węzły „zapalają się" sekwencyjnie, gdy linia (postęp scrolla) je mija — układ się składa.
  const o0 = useTransform(scrollYProgress, [0.0, 0.12], [0.4, 1]);
  const o1 = useTransform(scrollYProgress, [0.28, 0.42], [0.4, 1]);
  const o2 = useTransform(scrollYProgress, [0.54, 0.68], [0.4, 1]);
  const o3 = useTransform(scrollYProgress, [0.8, 0.94], [0.4, 1]);
  const s0 = useTransform(scrollYProgress, [0.0, 0.12], [0.9, 1]);
  const s1 = useTransform(scrollYProgress, [0.28, 0.42], [0.9, 1]);
  const s2 = useTransform(scrollYProgress, [0.54, 0.68], [0.9, 1]);
  const s3 = useTransform(scrollYProgress, [0.8, 0.94], [0.9, 1]);
  const nodeOpacity = [o0, o1, o2, o3];
  const nodeScale = [s0, s1, s2, s3];

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
    show: { transition: { staggerChildren: reduce ? 0.08 : 0.15 } },
  };
  const card: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: EASE_HOUSE },
        },
      };

  return (
    <section
      ref={sectionRef}
      id="mechanizm"
      aria-label="Mechanizm — 4 lekcje"
      className="w-full scroll-mt-8 bg-cream px-5 py-24 text-ink sm:px-8 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionKicker index="04" label="Mechanizm" theme="light" />
        <motion.h2
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
        >
          {mechanism.h2}
        </motion.h2>
        <motion.p
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-5 max-w-2xl text-base leading-relaxed text-muted-light sm:text-lg"
        >
          {mechanism.body}
        </motion.p>

        {/* Schemat etapów */}
        <div className="relative mt-16">
          {/* Linia łącząca (desktop only). Track + progress wypełniany scrollem. */}
          <div
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden md:block"
          >
            <div className="h-px w-full bg-ink/15" />
            <motion.div
              style={{ scaleX: reduce ? 1 : scrollYProgress }}
              className="absolute inset-x-0 top-0 h-[3px] w-full origin-left rounded-full bg-red"
            />
          </div>

          <motion.ol
            variants={cardsContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-5"
          >
            {mechanism.lessons.map((lesson, i) => (
              <motion.li
                key={lesson.tag}
                variants={card}
                className="relative flex flex-col"
              >
                <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-5">
                  {/* Numer etapu — „zapala się", gdy linia go mija (tylko desktop:
                      na mobile brak linii, więc węzły są pełne, bez wygaszania) */}
                  <motion.span
                    style={
                      reduce || !isDesktop
                        ? undefined
                        : { opacity: nodeOpacity[i], scale: nodeScale[i] }
                    }
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink font-display text-lg font-bold text-cream shadow-lg shadow-ink/10"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-light">
                    {lesson.tag}
                  </span>
                </div>

                <div className="mt-5 rounded-2xl border border-ink/10 bg-white/60 p-5">
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {lesson.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-light sm:text-base">
                    {lesson.result}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
