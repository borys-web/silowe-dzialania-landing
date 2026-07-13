"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Countdown } from "@/components/ui/Countdown";
import {
  formatPrice,
  isPromoActive,
  OFFER,
  PURCHASE_URL,
  promoEndsAtIso,
  ctaAriaLabel,
} from "@/config/offer";
import { siteConfig } from "@/content/site.config";
import { trackInitiateCheckout } from "@/lib/fbq";
import { useCountdown } from "@/lib/useCountdown";

/**
 * Sticky CTA bar (mobile/tablet).
 * Pojawia się po przewinięciu Hero, chowa gdy widoczna sekcja Cena (#cena).
 */
export function StickyMobileCta() {
  const reduce = useReducedMotion();
  const { isExpired, mounted } = useCountdown(promoEndsAtIso());
  const [pastHero, setPastHero] = useState(false);
  const [pricingVisible, setPricingVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = document.getElementById("cena");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPricingVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !pricingVisible;
  const promoActive = isPromoActive() && mounted && !isExpired;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: "100%" }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-white/[0.025] shadow-[0_-18px_52px_rgba(0,0,0,0.26)] backdrop-blur-2xl lg:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 px-4 py-3">
            <div className="flex flex-col">
              {promoActive ? (
                <>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl font-extrabold leading-none tracking-tight text-cream">
                      {formatPrice(OFFER.pricePromo)}
                    </span>
                    <span className="text-sm font-semibold text-cream/60 line-through decoration-red decoration-2">
                      {formatPrice(OFFER.priceRegular)}
                    </span>
                  </div>
                  <Countdown
                    targetIso={promoEndsAtIso()}
                    variant="inline"
                    autoSecondsBelow24h
                    className="mt-0.5 text-xs text-cream/60"
                  />
                </>
              ) : (
                <span className="font-display text-2xl font-extrabold leading-none tracking-tight text-cream">
                  {formatPrice(OFFER.priceRegular)}
                </span>
              )}
            </div>

            <a
              href={PURCHASE_URL}
              onClick={trackInitiateCheckout}
              aria-label={ctaAriaLabel()}
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 text-base font-semibold text-white shadow-[0_14px_34px_rgba(0,0,0,0.24)] backdrop-blur-2xl transition-[background-color,border-color] duration-200 hover:border-white/20 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              {siteConfig.cta.primaryLabel}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
