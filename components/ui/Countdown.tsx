"use client";

import { cn } from "@/lib/cn";
import {
  countdownAriaLabel,
  countdownDisplayMode,
  countdownInlineText,
  countdownSegments,
} from "@/lib/countdownFormat";
import { useCountdown } from "@/lib/useCountdown";

type CountdownProps = {
  targetIso: string;
  variant?: "boxes" | "inline";
  className?: string;
  /** Poniżej 24h przełącza format na h:m:s (z sekundami). */
  autoSecondsBelow24h?: boolean;
  /** Callback gdy promocja wygaśnie (np. przełączenie ceny). */
  onExpire?: () => void;
};

/**
 * Licznik odliczający do końca promocji.
 * autoSecondsBelow24h: powyżej 24h → d:h:m, poniżej → h:m:s.
 * SSR-safe (mounted gating). Gdy minie → return null.
 */
export function Countdown({
  targetIso,
  variant = "boxes",
  className,
  autoSecondsBelow24h = false,
}: CountdownProps) {
  const state = useCountdown(targetIso);
  const { isExpired, mounted } = state;

  if (mounted && isExpired) return null;

  const aria = countdownAriaLabel(state, autoSecondsBelow24h);

  if (variant === "inline") {
    const urgent = countdownDisplayMode(state.total, autoSecondsBelow24h) === "urgent";
    return (
      <span
        role="timer"
        className={cn(
          "tabular-nums font-semibold tracking-tight",
          urgent && "text-red drop-shadow-[0_0_12px_rgba(209,26,42,0.72)]",
          className,
        )}
        aria-label={aria}
      >
        {countdownInlineText(state, autoSecondsBelow24h)}
      </span>
    );
  }

  const segments = countdownSegments(state, autoSecondsBelow24h);
  const urgent = countdownDisplayMode(state.total, autoSecondsBelow24h) === "urgent";

  return (
    <div
      className={cn("flex items-stretch justify-center gap-2 sm:gap-3", className)}
      role="timer"
      aria-label={aria}
    >
      {segments.map((unit, i) => (
        <div key={unit.label} className="flex items-stretch gap-2 sm:gap-3">
          <div
            className={cn(
              "flex min-w-[3.75rem] flex-col items-center rounded-xl border px-3 py-2 sm:min-w-[4.5rem]",
              urgent && unit.label === "sek"
                ? "border-red/50 bg-red/[0.18] shadow-[0_0_28px_rgba(209,26,42,0.28)]"
                : "border-white/[0.12] bg-white/[0.07]",
            )}
          >
            <span className="font-display text-2xl font-extrabold tabular-nums leading-none text-red drop-shadow-[0_0_14px_rgba(209,26,42,0.55)] sm:text-3xl">
              {unit.value}
            </span>
            <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-cream/50">
              {unit.label}
            </span>
          </div>
          {i < segments.length - 1 && (
            <span
              aria-hidden
              className="flex items-center font-display text-2xl font-extrabold text-red/50 sm:text-3xl"
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
