import type { Variants, Transition } from "framer-motion";

/**
 * Scentralizowane warianty animacji (motion brief).
 * Importowane w komponentach — NIE redefiniujemy ich per sekcja.
 *
 * House style: fade + rise 8–16px, 400–600ms, easing cubic-bezier(0.16,1,0.3,1),
 * trigger whileInView z viewport={{ once: true, margin: "-100px" }}.
 */

export const EASE_HOUSE = [0.16, 1, 0.3, 1] as const;

export const VIEWPORT_ONCE = { once: true, margin: "-100px" } as const;

const baseTransition: Transition = {
  duration: 0.5,
  ease: EASE_HOUSE,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: baseTransition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: baseTransition },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: baseTransition },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: baseTransition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: EASE_HOUSE },
  },
};

export const lineDraw: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.6, ease: EASE_HOUSE },
  },
};

/** Kontener do staggerowania dzieci. */
export const staggerContainer = (
  stagger = 0.1,
  delayChildren = 0,
): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/**
 * Wersje "reduced" — czysty fade opacity, zero transformacji.
 * Używane gdy useReducedMotion() === true.
 */
export const fadeReduced: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3, ease: "linear" } },
};
