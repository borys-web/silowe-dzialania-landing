/**
 * Centralna konfiguracja landinga.
 * Cena / promocja → config/offer.ts (JEDNO źródło prawdy).
 */

import {
  OFFER,
  PRICE_ANCHOR,
  PROMO_DAYS,
  PURCHASE_URL,
  buildSiteDescription,
  buildSiteTitle,
  currentPrice,
  formatPrice,
  isPromoActive,
  promoDiscountPercent,
  promoEndsAtIso,
  withPrice,
  heroEyebrow,
  ctaAriaLabel,
  topBarCtaLabel,
} from "@/config/offer";

export {
  OFFER,
  PRICE_ANCHOR,
  PROMO_DAYS,
  PURCHASE_URL,
  buildSiteDescription,
  buildSiteTitle,
  ctaAriaLabel,
  currentPrice,
  formatPrice,
  heroEyebrow,
  isPromoActive,
  promoDiscountPercent,
  promoEndsAtIso,
  topBarCtaLabel,
  withPrice,
};

export const siteConfig = {
  name: "Silne Działania",
  title: buildSiteTitle(),
  description: buildSiteDescription(),
  url: "https://silowe-dzialania-landing.vercel.app",

  pricePromo: OFFER.pricePromo,
  priceRegular: OFFER.priceRegular,
  promoEndsAt: promoEndsAtIso(),
  currency: OFFER.currency,

  cta: {
    primaryHref: PURCHASE_URL,
    checkoutHref: PURCHASE_URL,
    primaryLabel: "Odbieram dostęp",
    buyLabel: "Odbieram dostęp",
  },

  metaPixelId: "" as string,

  flags: {
    showProofSection: true,
    smoothScroll: false,
    stickyMobileCta: true,
  },

  author: {
    name: "Wiktor Mariczew",
    photo: "/images/wiktor.jpg",
    bio: [
      "Nazywam się Wiktor Mariczew. Pracuję z właścicielami firm i ludźmi wysokiej odpowiedzialności - takimi, którzy na zewnątrz dowożą, a w środku jadą na rezerwie.",
      "Nie uczę pozytywnego myślenia. Nie dokładam kolejnej teorii. Nie sprzedaję motywacji. Pokazuję system pracy z zasobami: czasem, energią i uwagą.",
      "Ten mini-kurs to najprostszy pierwszy krok, żeby zobaczyć, gdzie dziś przecieka Twoje działanie - i zatrzymać ten przeciek tego samego wieczoru.",
    ],
    facts: [
      {
        highlight: "200+",
        label: "przedsiębiorców, którym pomogłem",
      },
      {
        highlight: "16",
        label: "spółek, w których prowadzę business tracking",
      },
      {
        label: "pracuję na realnych sytuacjach właścicieli firm.",
      },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
