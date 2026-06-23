/**
 * Centralna konfiguracja landinga.
 * Wszystkie wartości "do podstawienia" (cena, linki CTA, Pixel, bio, case'y)
 * trzymamy TUTAJ, nie hardkodujemy w komponentach.
 */

export const siteConfig = {
  name: "Silne Działania",
  title: "Sprawa na 10 minut. Zjadła Ci cały dzień? — mini-kurs (teraz 47 zł)",
  description:
    "Mini-kurs dla przeciążonych przedsiębiorców. 4 lekcje, 2 arkusze. Teraz 47 zł zamiast 77 zł. Pierwsze ćwiczenie kończysz, zanim wystygnie kawa.",
  // URL produkcyjny (Vercel) — podmienić po deployu.
  url: "https://example.com",

  // --- Cena / promocja (JEDNO źródło prawdy) ---
  // pricePromo  → cena teraz (w trakcie promocji)
  // priceRegular → cena regularna (po wygaśnięciu promocji) — pokazywana przekreślona
  // promoEndsAt  → koniec promocji (ISO timestamp). Edytuj TYLKO tutaj.
  pricePromo: 47,
  priceRegular: 77,
  promoEndsAt: "2026-06-29T21:59:00.000Z",
  currency: "zł",

  // --- CTA / ścieżka konwersji ---
  // Placeholder: docelowo podłączymy checkout / formularz zapisu.
  cta: {
    primaryHref: "#cena",
    checkoutHref: "#", // <- tu wejdzie link do płatności / formularza
    // Mikrocommitment: język korzyści, nie transakcji.
    primaryLabel: "Odbieram dostęp",
    buyLabel: "Odbieram dostęp",
  },

  // --- Meta Pixel (slot, gotowy na ID) ---
  // Wpisz ID (np. "1234567890") aby aktywować ładowanie pixela.
  metaPixelId: "" as string,

  // --- Flagi sekcji ---
  flags: {
    // Sekcja 8 (Dowody) renderuje się TYLKO gdy true. Domyślnie false,
    // dopóki nie mamy realnych case'ów — strona nie pójdzie live z placeholderami.
    showProofSection: true,
    // Smooth scroll (Lenis) — w v1 wyłączony.
    smoothScroll: false,
    // Sticky CTA bar na mobile po przewinięciu hero.
    stickyMobileCta: true,
  },

  // --- Autor ---
  author: {
    name: "Wiktor Mariczew",
    photo: "/images/wiktor.jpg",
    bio: [
      "Nazywam się Wiktor Mariczew. Pracuję z właścicielami firm i ludźmi wysokiej odpowiedzialności — takimi, którzy na zewnątrz dowożą, a w środku jadą na rezerwie.",
      "Nie uczę pozytywnego myślenia. Nie dokładam kolejnej teorii. Nie sprzedaję motywacji. Pokazuję system pracy z zasobami: czasem, energią, uwagą i fokusem.",
      "Ten mini-kurs to najprostszy pierwszy krok, żeby zobaczyć, gdzie dziś przecieka Twoje działanie — i zatrzymać ten przeciek tego samego wieczoru.",
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

/** Liczba dni trwania promocji (do etykiet typu „przez X dni"). */
export const PROMO_DAYS = 7;

/**
 * Czy promocja nadal trwa (na podany moment).
 * Bez argumentu liczy względem Date.now() — bezpieczne w SSR i kliencie
 * (na serwerze i tak renderujemy stan "promo aktywne", a klient skoryguje).
 */
export function isPromoActive(now: number = Date.now()): boolean {
  return now < new Date(siteConfig.promoEndsAt).getTime();
}

/** Aktualna cena: promo gdy trwa, w przeciwnym razie regularna. */
export function currentPrice(now: number = Date.now()): number {
  return isPromoActive(now) ? siteConfig.pricePromo : siteConfig.priceRegular;
}

/** Procent rabatu promocyjnego (np. 39 dla 47/77). Zaokrąglony. */
export function promoDiscountPercent(): number {
  const { pricePromo, priceRegular } = siteConfig;
  if (priceRegular <= 0) return 0;
  return Math.round((1 - pricePromo / priceRegular) * 100);
}

/** Sformatowana cena, np. "47 zł". */
export function formatPrice(value: number): string {
  return `${value} ${siteConfig.currency}`;
}

/**
 * Wstawia AKTUALNĄ cenę w miejsce znacznika [CENA] w tekstach copy.
 * W trakcie promocji → cena promocyjna; po promocji → regularna.
 */
export function withPrice(text: string, now: number = Date.now()): string {
  return text.replaceAll("[CENA]", String(currentPrice(now)));
}
