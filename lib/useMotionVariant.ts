"use client";

import { useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { fadeReduced } from "@/lib/motion";

/**
 * Zwraca pełny wariant ruchu albo jego zredukowaną wersję (czysty fade),
 * gdy użytkownik ma włączone prefers-reduced-motion.
 * Hook na poziomie komponentu — jedyne źródło decyzji o redukcji.
 */
export function useMotionVariant(variant: Variants): Variants {
  const reduce = useReducedMotion();
  return reduce ? fadeReduced : variant;
}

/** Czy redukować ruch (do wyłączania pętli/parallaxu/scroll-scrubbingu). */
export function usePrefersReducedMotion(): boolean {
  return useReducedMotion() ?? false;
}
