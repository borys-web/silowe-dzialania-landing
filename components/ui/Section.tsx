import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Theme = "dark" | "light";

type SectionProps = {
  id?: string;
  theme?: Theme;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  ariaLabel?: string;
};

/**
 * Wrapper sekcji: ustala motyw (ciemny/jasny zgodnie z rytmem strony),
 * spójne paddingi i wyśrodkowany kontener.
 */
export function Section({
  id,
  theme = "dark",
  className,
  containerClassName,
  children,
  ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "w-full px-5 py-20 sm:px-8 sm:py-28",
        theme === "dark" ? "bg-ink text-cream" : "bg-cream text-ink",
        className,
      )}
    >
      <div className={cn("mx-auto w-full max-w-5xl", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
