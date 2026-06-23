"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { EASE_HOUSE, VIEWPORT_ONCE } from "@/lib/motion";
import { useSectionMotion } from "@/lib/sectionMotion";

type SectionKickerProps = {
  index?: string;
  label: string;
  className?: string;
};

/** Etykieta sekcji — monochrom, subtelna kreska, reveal on scroll. */
export function SectionKicker({ index, label, className }: SectionKickerProps) {
  const { header, reduce } = useSectionMotion();

  return (
    <motion.div
      variants={header}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_ONCE}
      transition={reduce ? undefined : { duration: 0.45, ease: EASE_HOUSE }}
      className={cn("mb-6 flex items-center gap-3", className)}
    >
      <span aria-hidden className="h-px w-8 shrink-0 bg-gradient-to-r from-red via-electric to-transparent" />
      {index && (
        <span className="text-sm font-semibold tracking-wide text-red">{index}</span>
      )}
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/55">
        {label}
      </span>
    </motion.div>
  );
}
