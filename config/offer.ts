/**
 * Jedno źródło prawdy: cena, promocja, link zakupu.
 * Edytuj TYLKO ten plik, aby zmienić ofertę na całej stronie.
 */
export const OFFER = {
  priceRegular: 77,
  pricePromo: 47,
  promoEndsAt: new Date("2026-07-20T23:59:59+02:00"),
  currency: "zł",
} as const;

export const PURCHASE_URL =
  "https://www.naffy.io/silowe-dzialania/planowanie";

export const PRICE_ANCHOR = "#cena";

export function promoEndsAtIso(): string {
  return OFFER.promoEndsAt.toISOString();
}

export function isPromoActive(now: number = Date.now()): boolean {
  return now < OFFER.promoEndsAt.getTime();
}

export function currentPrice(now: number = Date.now()): number {
  return isPromoActive(now) ? OFFER.pricePromo : OFFER.priceRegular;
}

export function formatPrice(value: number): string {
  return `${value} ${OFFER.currency}`;
}

/** Liczba dni trwania promocji (do etykiet typu „przez X dni"). */
export const PROMO_DAYS = 7;

export function promoDiscountPercent(): number {
  const { pricePromo, priceRegular } = OFFER;
  if (priceRegular <= 0) return 0;
  return Math.round((1 - pricePromo / priceRegular) * 100);
}

export function withPrice(text: string, now: number = Date.now()): string {
  return text.replaceAll("[CENA]", String(currentPrice(now)));
}

export function ctaAriaLabel(now: number = Date.now()): string {
  return `Odbieram dostęp do mini-kursu za ${currentPrice(now)} zł`;
}

export function heroEyebrow(now: number = Date.now()): string {
  if (isPromoActive(now)) {
    return `MINI-KURS · 4 LEKCJE · ${OFFER.pricePromo} ZŁ ZAMIAST ${OFFER.priceRegular} ZŁ`;
  }
  return `MINI-KURS · 4 LEKCJE · ${OFFER.priceRegular} ZŁ`;
}

export function topBarCtaLabel(now: number = Date.now()): string {
  return `Odbieram za ${currentPrice(now)} zł`;
}

export function buildSiteTitle(now: number = Date.now()): string {
  if (isPromoActive(now)) {
    return `Sprawa na 10 minut. Zjadła Ci cały dzień? - mini-kurs (teraz ${OFFER.pricePromo} zł)`;
  }
  return `Sprawa na 10 minut. Zjadła Ci cały dzień? - mini-kurs (${OFFER.priceRegular} zł)`;
}

export function buildSiteDescription(now: number = Date.now()): string {
  if (isPromoActive(now)) {
    return `Mini-kurs dla przeciążonych przedsiębiorców. 4 lekcje, 2 arkusze. Teraz ${OFFER.pricePromo} zł zamiast ${OFFER.priceRegular} zł. Pierwsze ćwiczenie kończysz, zanim wystygnie kawa.`;
  }
  return `Mini-kurs dla przeciążonych przedsiębiorców. 4 lekcje, 2 arkusze. ${OFFER.priceRegular} zł. Pierwsze ćwiczenie kończysz, zanim wystygnie kawa.`;
}
