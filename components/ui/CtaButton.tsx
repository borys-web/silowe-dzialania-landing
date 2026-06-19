"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  withArrow?: boolean;
  ariaLabel?: string;
};

/**
 * Jedyny komponent CTA na stronie.
 * Mikrointerakcje: hover scale 1.02 + ciemniejsza czerwień, active 0.98,
 * widoczny focus-visible, opcjonalna strzałka. Tap target >= 44px.
 */
export function CtaButton({
  href,
  children,
  className,
  withArrow = true,
  ariaLabel,
}: CtaButtonProps) {
  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={cn(
        "group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full",
        "bg-red px-7 py-3 text-base font-semibold text-white",
        "transition-colors duration-150 hover:bg-red-hover",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
        className,
      )}
    >
      <span>{children}</span>
      {withArrow && (
        <span
          aria-hidden
          className="transition-transform duration-150 group-hover:translate-x-1"
        >
          &rarr;
        </span>
      )}
    </motion.a>
  );
}
