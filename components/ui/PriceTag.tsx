"use client";

import { cn } from "@/lib/cn";
import {
  formatPrice,
  promoDiscountPercent,
  PROMO_DAYS,
  siteConfig,
} from "@/content/site.config";

type Size = "sm" | "md" | "lg";

type PriceTagProps = {
  /** true = po wygaśnięciu promocji (pokazuje tylko cenę regularną). */
  expired?: boolean;
  size?: Size;
  /** Etykieta „-39% przez 7 dni". */
  showBadge?: boolean;
  className?: string;
};

const promoSize: Record<Size, string> = {
  sm: "text-2xl",
  md: "text-4xl sm:text-5xl",
  lg: "text-6xl sm:text-7xl",
};

const regularSize: Record<Size, string> = {
  sm: "text-base",
  md: "text-xl sm:text-2xl",
  lg: "text-2xl sm:text-3xl",
};

/**
 * Cena z price anchoringiem: duża cena promocyjna + obok mniejsza,
 * WIDOCZNIE przekreślona cena regularna. Wszystkie liczby z site.config.ts.
 * Po wygaśnięciu promocji (`expired`) pokazuje wyłącznie cenę regularną.
 */
export function PriceTag({
  expired = false,
  size = "lg",
  showBadge = false,
  className,
}: PriceTagProps) {
  const { pricePromo, priceRegular } = siteConfig;

  if (expired) {
    return (
      <div className={cn("flex items-baseline gap-3", className)}>
        <span
          className={cn(
            "font-display font-extrabold tracking-tight text-cream",
            promoSize[size],
          )}
        >
          {formatPrice(priceRegular)}
        </span>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap items-baseline gap-x-4 gap-y-1", className)}>
      <span
        className={cn(
          "font-display font-extrabold tracking-tight text-red drop-shadow-[0_0_26px_rgba(209,26,42,0.62)]",
          promoSize[size],
        )}
      >
        {formatPrice(pricePromo)}
      </span>
      <span
        className={cn(
          "font-display font-semibold text-cream/45 line-through decoration-red decoration-2",
          regularSize[size],
        )}
      >
        {formatPrice(priceRegular)}
      </span>
      {showBadge && (
        <span className="rounded-full border border-red/30 bg-red/15 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-red shadow-[0_0_22px_rgba(209,26,42,0.28)]">
          -{promoDiscountPercent()}% przez {PROMO_DAYS} dni
        </span>
      )}
    </div>
  );
}
