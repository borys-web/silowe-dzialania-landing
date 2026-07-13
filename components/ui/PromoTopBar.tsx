"use client";

import { useEffect } from "react";
import { Countdown } from "@/components/ui/Countdown";
import {
  formatPrice,
  isPromoActive,
  OFFER,
  PURCHASE_URL,
  promoEndsAtIso,
  topBarCtaLabel,
} from "@/config/offer";
import { cn } from "@/lib/cn";
import { trackInitiateCheckout } from "@/lib/fbq";
import { useCountdown } from "@/lib/useCountdown";

/** Wysokość paska treści (px) — bez safe-area. */
export const PROMO_BAR_HEIGHT_PX = 40;

/**
 * Globalny sticky top bar z licznikiem promocji.
 * Znika po wygaśnięciu lub gdy licznik nie ma czego odliczać.
 * Rezerwuje miejsce w layoucie (spacer) — brak skoku treści.
 */
export function PromoTopBar() {
  const promoEndsAt = promoEndsAtIso();
  const { isExpired, mounted } = useCountdown(promoEndsAt);
  const promoActive = isPromoActive();

  const hidden = !promoActive || !mounted || isExpired;

  useEffect(() => {
    const root = document.documentElement;
    if (hidden) {
      root.style.removeProperty("--promo-bar-height");
      root.classList.remove("promo-bar-active");
      return;
    }
    root.style.setProperty(
      "--promo-bar-height",
      `calc(${PROMO_BAR_HEIGHT_PX}px + env(safe-area-inset-top, 0px))`,
    );
    root.classList.add("promo-bar-active");
    return () => {
      root.style.removeProperty("--promo-bar-height");
      root.classList.remove("promo-bar-active");
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <>
      <div
        role="banner"
        aria-label="Informacja o kończącej się promocji"
        className={cn(
          "fixed inset-x-0 top-0 z-50",
          "flex h-10 items-center",
          "border-b border-white/10 bg-white/[0.025] shadow-[0_12px_36px_rgba(0,0,0,0.22)] backdrop-blur-2xl",
          "pt-[env(safe-area-inset-top,0px)]",
          "text-cream",
        )}
      >
        <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between gap-2 px-3 sm:px-6">
          <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
            <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-cream/50" />
            <p className="min-w-0 truncate text-[0.68rem] font-semibold leading-none text-cream/72 sm:text-xs">
              <span className="hidden sm:inline">
                {formatPrice(OFFER.pricePromo)} zamiast {formatPrice(OFFER.priceRegular)} - oferta kończy się za{" "}
              </span>
              <span className="sm:hidden">
                {OFFER.pricePromo} zł zamiast {OFFER.priceRegular} zł - kończy się za{" "}
              </span>
              <Countdown
                targetIso={promoEndsAt}
                variant="inline"
                autoSecondsBelow24h
                className="inline text-[0.68rem] font-bold leading-none text-cream sm:text-xs"
              />
            </p>
          </div>

          <a
            href={PURCHASE_URL}
            onClick={trackInitiateCheckout}
            aria-label={topBarCtaLabel()}
            className={cn(
              "inline-flex shrink-0 items-center justify-center rounded-full",
              "h-8 border border-white/10 bg-white/[0.04] px-3.5 text-xs font-bold text-white shadow-[0_10px_28px_rgba(0,0,0,0.2)] backdrop-blur-2xl",
              "transition-[background-color,border-color] duration-200 hover:border-white/20 hover:bg-white/[0.08]",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
              "min-w-[44px] sm:px-4 sm:text-sm",
            )}
          >
            {topBarCtaLabel()}
          </a>
        </div>
      </div>

      <div
        aria-hidden
        className="shrink-0 pt-[env(safe-area-inset-top,0px)]"
        style={{ height: PROMO_BAR_HEIGHT_PX }}
      />
    </>
  );
}
