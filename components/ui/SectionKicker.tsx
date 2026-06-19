"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { EASE_HOUSE, VIEWPORT_ONCE } from "@/lib/motion";

type SectionKickerProps = {
  /** Numer sekcji, np. "01". Pomiń dla sekcji domykających. */
  index?: string;
  label: string;
  theme?: "dark" | "light";
  className?: string;
};

/**
 * Etykieta sekcji: krótka kreska (fragment motywu „nici") + numer + label.
 * Buduje rytm scrolla i „systemowy" charakter strony. Monochrom (bez czerwieni).
 * Animacja: lekki fade + rise; prefers-reduced-motion → czysty fade.
 */
export function SectionKicker({
  index,
  label,
  theme = "dark",
  className,
}: SectionKickerProps) {
  const reduce = useReducedMotion();

  // Czerwona kreska = powracająca sygnatura marki przy każdej sekcji.
  const indexColor = theme === "dark" ? "text-cream/55" : "text-ink/45";
  const labelColor = theme === "dark" ? "text-muted-dark" : "text-muted-light";

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.4, ease: EASE_HOUSE }}
      className={cn("mb-6 flex items-center gap-3", className)}
    >
      <span aria-hidden className="h-px w-8 shrink-0 bg-red" />
      {index && (
        <span className={cn("font-display text-sm font-bold tracking-wide", indexColor)}>
          {index}
        </span>
      )}
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.2em]",
          labelColor,
        )}
      >
        {label}
      </span>
    </motion.div>
  );
}
