"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/motion";
import { useMotionVariant } from "@/lib/useMotionVariant";

type RevealProps = {
  children: ReactNode;
  variant?: Variants;
  className?: string;
};

/**
 * Generyczny wrapper house-style: fade+rise w viewport (once).
 * Respektuje prefers-reduced-motion przez useMotionVariant().
 */
export function Reveal({ children, variant = fadeUp, className }: RevealProps) {
  const resolved = useMotionVariant(variant);

  return (
    <motion.div
      className={className}
      variants={resolved}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_ONCE}
    >
      {children}
    </motion.div>
  );
}
