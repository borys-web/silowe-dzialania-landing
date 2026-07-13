import { currentPrice } from "@/config/offer";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Zdarzenie lejka Meta: kliknięcie CTA prowadzącego do checkoutu.
 * No-op, gdy Pixel nie jest wpięty (brak metaPixelId) lub zablokowany.
 */
export function trackInitiateCheckout() {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "InitiateCheckout", {
    value: currentPrice(),
    currency: "PLN",
    content_name: "mini-kurs-planowanie",
  });
}
