"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useCallback, useRef, type MouseEvent } from "react";
import { CtaButton } from "@/components/ui/CtaButton";
import { PlanningPattern } from "@/components/ui/PlanningPattern";
import { copy } from "@/content/copy";
import { siteConfig } from "@/content/site.config";
import { EASE_HOUSE, SPRING_HOUSE } from "@/lib/motion";
import { useMediaQuery } from "@/lib/useMediaQuery";

const PARALLAX_SPRING = { stiffness: 150, damping: 22, mass: 0.6 };

/**
 * Sekcja 1 — Hero.
 * Jedna scena 3D: Wiktor (warstwa tła) + szklana karta (przód), nachodzą na siebie.
 * Desktop: parallax myszki (karta ±15px, Wiktor ±5px przeciwnie, glow ±2px).
 * Mobile: Wiktor jako przyciemnione tło pod kartą, bez parallaxu.
 */
export function Hero() {
  const { hero } = copy;
  const [entrepreneursFact, companiesFact] = siteConfig.author.facts;
  const sectionRef = useRef<HTMLElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const reduceMotion = useReducedMotion();
  const parallaxEnabled = isDesktop && !reduceMotion;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cardX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-15, 15]),
    PARALLAX_SPRING,
  );
  const cardY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-15, 15]),
    PARALLAX_SPRING,
  );
  const wiktorX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [5, -5]),
    PARALLAX_SPRING,
  );
  const wiktorY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [5, -5]),
    PARALLAX_SPRING,
  );
  const glowX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-2, 2]),
    { stiffness: 100, damping: 26, mass: 0.8 },
  );
  const glowY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-2, 2]),
    { stiffness: 100, damping: 26, mass: 0.8 },
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (!parallaxEnabled) return;
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [parallaxEnabled, mouseX, mouseY],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const wiktorInitial = reduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 20 };
  const wiktorAnimate = { opacity: 1, y: 0 };
  const cardInitial = reduceMotion
    ? { opacity: 1, y: 0, x: 0 }
    : { opacity: 0, y: 28, x: -16 };
  const cardAnimate = { opacity: 1, y: 0, x: 0 };

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hero-section section-shell relative isolate flex min-h-[calc(100dvh-var(--promo-bar-height))] w-full items-center overflow-hidden px-5 text-cream sm:px-8"
    >
      {/* Warstwa 0 — tło */}
      <div aria-hidden className="hero-bg">
        <PlanningPattern variant="hero" className="opacity-[0.04] sm:opacity-[0.06]" />
      </div>

      {/* Mobile — Wiktor jako przyciemnione tło */}
      <div aria-hidden className="hero-wiktor-mobile lg:hidden">
        <div className="hero-wiktor-mobile__img">
          <Image
            src="/images/wiktor-hero.png"
            alt=""
            fill
            unoptimized
            preload
            sizes="100vw"
            className="object-contain object-bottom"
          />
        </div>
        <div className="hero-wiktor-mobile__shade" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl py-20 sm:py-24">
        {/* Scena 3D — karta i Wiktor w jednym kontenerze, nachodzą na siebie */}
        <div className="hero-stage">
          <motion.div
            aria-hidden
            className="hero-bg__glow"
            style={parallaxEnabled ? { x: glowX, y: glowY } : undefined}
          />

          {/* Warstwa 1 — Wiktor (za kartą, nachodzi na nią od prawej) */}
          <motion.div
            className="hero-wiktor-desktop hidden lg:block"
            initial={wiktorInitial}
            animate={wiktorAnimate}
            transition={{
              ...SPRING_HOUSE,
              delay: reduceMotion ? 0 : 0.05,
            }}
          >
            <motion.figure
              className="hero-wiktor-desktop__figure"
              style={parallaxEnabled ? { x: wiktorX, y: wiktorY } : undefined}
            >
              <div className="hero-wiktor__mask">
                <Image
                  src="/images/wiktor-hero.png"
                  alt=""
                  fill
                  unoptimized
                  preload
                  sizes="(min-width: 1024px) 50vw, 0px"
                  className="hero-wiktor__img object-contain object-bottom"
                />
              </div>
            </motion.figure>
          </motion.div>

          {/* Warstwa 2 — szklana karta (przód sceny) */}
          <motion.div
            className="hero-card-wrap"
            initial={cardInitial}
            animate={cardAnimate}
            transition={{
              ...SPRING_HOUSE,
              delay: reduceMotion ? 0 : 0.18,
              ease: EASE_HOUSE,
            }}
          >
            <motion.div
              className="hero-card-parallax"
              style={parallaxEnabled ? { x: cardX, y: cardY } : undefined}
            >
              <div aria-hidden className="hero-card__shadow" />

              <div className="hero-card">
                <div aria-hidden className="hero-card__edge" />

                <div className="hero-card__inner">
                  <p className="glass-panel flex items-center gap-3 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cream/70 sm:text-sm">
                    <span
                      aria-hidden
                      className="h-px w-8 shrink-0 bg-gradient-to-r from-red via-electric to-transparent"
                    />
                    {hero.eyebrow}
                  </p>

                  <h1 className="text-balance font-display text-4xl font-extrabold leading-[0.98] tracking-[-0.07em] text-cream drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-6xl xl:text-7xl">
                    {hero.h1}
                  </h1>

                  <p className="body-copy max-w-xl text-base md:text-lg">
                    {hero.body}
                  </p>

                  <div className="pt-1">
                    <CtaButton
                      href={siteConfig.cta.primaryHref}
                      ariaLabel="Odbieram dostęp do mini-kursu za 47 zł"
                      className="w-full text-lg sm:w-auto"
                      withArrow={false}
                      redThreadNode="cta"
                      redThreadPosition="above"
                    >
                      {hero.cta}
                    </CtaButton>
                  </div>

                  <div className="flex flex-col items-start gap-4">
                    <div className="inline-flex items-center gap-2 rounded-lg border border-red/20 bg-red/10 px-4 py-2">
                      <svg
                        aria-hidden
                        className="h-4 w-4 shrink-0 text-red"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-semibold text-red">
                        30 dni gwarancji zwrotu
                      </span>
                    </div>

                    <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-base font-semibold tracking-tight text-cream sm:text-lg">
                      <span>{entrepreneursFact.highlight} przedsiębiorców</span>
                      <span aria-hidden className="text-cream/35">/</span>
                      <span>{companiesFact.highlight} spółek</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/50 sm:flex"
      >
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
          Przewiń
        </span>
        <span className="scroll-cue text-lg leading-none">&darr;</span>
      </div>
    </section>
  );
}
