"use client";

import { useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { SPRING_HOUSE } from "@/lib/motion";

/**
 * Wspólne warianty sekcji — reveal on scroll (fade + y: 20), stagger list.
 * prefers-reduced-motion → czysty fade, bez transformacji.
 */
export function useSectionMotion(stagger = 0.1) {
  const reduce = useReducedMotion();

  const header: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: SPRING_HOUSE,
        },
      };

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0.05 : stagger } },
  };

  const item: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: SPRING_HOUSE,
        },
      };

  return { header, container, item, reduce };
}
