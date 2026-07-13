"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { trackInitiateCheckout } from "@/lib/fbq";
import { SPRING_HOUSE } from "@/lib/motion";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  withArrow?: boolean;
  ariaLabel?: string;
  redThreadNode?: string;
  redThreadPosition?: "above" | "below" | "center";
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
  redThreadNode,
  redThreadPosition = "above",
}: CtaButtonProps) {
  return (
    <motion.a
      href={href}
      onClick={trackInitiateCheckout}
      aria-label={ariaLabel}
      data-red-thread-node={redThreadNode}
      data-red-thread-position={redThreadNode ? redThreadPosition : undefined}
      whileHover={{ scale: 1.035, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={SPRING_HOUSE}
      className={cn(
        "group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full",
        "bg-red px-7 py-3 text-base font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)]",
        "transition-[background-color,box-shadow] duration-200 hover:bg-red-hover hover:shadow-[0_20px_58px_rgba(209,26,42,0.5)]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream",
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
