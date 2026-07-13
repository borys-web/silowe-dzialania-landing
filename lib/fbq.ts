import { currentPrice } from "@/config/offer";
import { siteConfig } from "@/content/site.config";
import { hasMarketingConsent } from "@/lib/consent";

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      push?: unknown;
      loaded?: boolean;
      version?: string;
    };
    _fbq?: unknown;
  }
}

let pixelLoaded = false;

/** Bramka: Pixel działa tylko z niepustym ID i zgodą marketingową. */
function pixelAllowed(): boolean {
  if (typeof window === "undefined") return false;
  return Boolean(siteConfig.metaPixelId) && hasMarketingConsent();
}

/**
 * Ładuje fbevents.js, inicjalizuje Pixel i wysyła PageView.
 * Wywoływać WYŁĄCZNIE po zgodzie marketingowej - przed zgodą skrypt
 * Meta nie może się załadować.
 */
export function initPixelIfConsented() {
  if (!pixelAllowed() || pixelLoaded) return;
  pixelLoaded = true;

  if (!window.fbq) {
    const fbq: NonNullable<Window["fbq"]> = (...args: unknown[]) => {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue?.push(args);
    };
    fbq.queue = [];
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    window.fbq = fbq;
    window._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  window.fbq("init", siteConfig.metaPixelId);
  window.fbq("track", "PageView");
}

/**
 * Zdarzenie lejka Meta: kliknięcie CTA prowadzącego do checkoutu.
 * No-op bez zgody marketingowej lub bez wpiętego Pixela.
 */
export function trackInitiateCheckout() {
  if (!pixelAllowed()) return;
  window.fbq?.("track", "InitiateCheckout", {
    value: currentPrice(),
    currency: "PLN",
    content_name: "mini-kurs-planowanie",
  });
}
