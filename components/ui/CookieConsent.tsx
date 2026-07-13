"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import {
  OPEN_COOKIE_SETTINGS_EVENT,
  readConsent,
  saveConsent,
} from "@/lib/consent";
import { initPixelIfConsented } from "@/lib/fbq";

type View = "hidden" | "banner" | "settings";

const actionButtonClass = cn(
  "inline-flex min-h-[44px] flex-1 items-center justify-center rounded-full",
  "border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-cream",
  "transition-[background-color,border-color] duration-200 hover:border-white/30 hover:bg-white/[0.1]",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream",
  "sm:flex-none",
);

function ConsentSwitch({
  checked,
  onChange,
  disabled = false,
  label,
}: {
  checked: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={cn(
        "relative h-7 w-12 shrink-0 rounded-full border transition-colors duration-200",
        checked ? "border-red/60 bg-red/80" : "border-white/20 bg-white/[0.08]",
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute top-0.5 h-[1.375rem] w-[1.375rem] rounded-full bg-cream shadow transition-[left] duration-200",
          checked ? "left-[1.5rem]" : "left-0.5",
        )}
      />
    </button>
  );
}

/**
 * Baner zgody cookie (RODO/ePrivacy).
 * Pasek na dole strony - nie zasłania treści ani CTA, bez cookie walla.
 * Piksel Meta ładuje się WYŁĄCZNIE po zgodzie marketingowej.
 */
export function CookieConsent() {
  const reduce = useReducedMotion();
  const [view, setView] = useState<View>("hidden");
  const [marketingOn, setMarketingOn] = useState(false);

  useEffect(() => {
    const consent = readConsent();
    if (!consent) {
      setView("banner");
      return;
    }
    if (consent.marketing) initPixelIfConsented();
  }, []);

  useEffect(() => {
    const openSettings = () => {
      setMarketingOn(readConsent()?.marketing ?? false);
      setView("settings");
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
    return () =>
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  const decide = useCallback((marketing: boolean) => {
    saveConsent(marketing);
    if (marketing) initPixelIfConsented();
    setView("hidden");
  }, []);

  return (
    <AnimatePresence>
      {view !== "hidden" && (
        <motion.div
          role="dialog"
          aria-label="Zgody na pliki cookies"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-[#141419]/95 text-cream shadow-[0_-18px_52px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          {view === "banner" ? (
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
              <p className="max-w-3xl text-sm leading-relaxed text-cream/80">
                Używamy cookies niezbędnych do działania strony oraz - za Twoją
                zgodą - marketingowych (piksel Meta) do mierzenia skuteczności
                reklam. Szczegóły w{" "}
                <a
                  href="/polityka-prywatnosci"
                  className="font-semibold text-cream underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                >
                  Polityce prywatności
                </a>
                .
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                <button
                  type="button"
                  onClick={() => decide(true)}
                  className={actionButtonClass}
                >
                  Akceptuję
                </button>
                <button
                  type="button"
                  onClick={() => decide(false)}
                  className={actionButtonClass}
                >
                  Odrzucam
                </button>
                <button
                  type="button"
                  onClick={() => setView("settings")}
                  className={actionButtonClass}
                >
                  Ustawienia
                </button>
              </div>
            </div>
          ) : (
            <div className="mx-auto w-full max-w-6xl px-5 py-5 sm:px-8">
              <h2 className="font-display text-base font-bold tracking-tight text-cream">
                Ustawienia cookies
              </h2>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-cream">Niezbędne</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-cream/65">
                      Konieczne do działania strony i realizacji zakupu. Zawsze
                      aktywne.
                    </p>
                  </div>
                  <ConsentSwitch checked disabled label="Cookies niezbędne (zawsze aktywne)" />
                </div>

                <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-cream">
                      Marketingowe (piksel Meta)
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-cream/65">
                      Mierzenie skuteczności reklam i remarketing. Włączane tylko
                      za Twoją zgodą.
                    </p>
                  </div>
                  <ConsentSwitch
                    checked={marketingOn}
                    onChange={setMarketingOn}
                    label="Cookies marketingowe (piksel Meta)"
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                <button
                  type="button"
                  onClick={() => decide(marketingOn)}
                  className={actionButtonClass}
                >
                  Zapisz wybór
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
