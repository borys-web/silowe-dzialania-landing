/**
 * Centralna konfiguracja landinga.
 * Wszystkie wartości "do podstawienia" (cena, linki CTA, Pixel, bio, case'y)
 * trzymamy TUTAJ, nie hardkodujemy w komponentach.
 */

export const siteConfig = {
  name: "Silne Działania",
  title: "Sprawa na 10 minut. Zjadła Ci cały dzień? — mini-kurs",
  description:
    "Mini-kurs dla przeciążonych przedsiębiorców. 4 lekcje, 2 arkusze. Pierwsze ćwiczenie kończysz, zanim wystygnie kawa.",
  // URL produkcyjny (Vercel) — podmienić po deployu.
  url: "https://example.com",

  // --- Cena ---
  price: 97,
  currency: "zł",

  // --- CTA / ścieżka konwersji ---
  // Placeholder: docelowo podłączymy checkout / formularz zapisu.
  cta: {
    primaryHref: "#cena",
    checkoutHref: "#", // <- tu wejdzie link do płatności / formularza
    primaryLabel: "Odbieram mini-kurs",
    buyLabel: "Kupuję mini-kurs",
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
      "Nazywam się Wiktor Mariczew.",
      "Pracuję z właścicielami firm i osobami wysokiej odpowiedzialności, które z zewnątrz dowożą, ale w środku jadą na rezerwie.",
      "Nie uczę pozytywnego myślenia.",
      "Nie dokładam kolejnej teorii.",
      "Nie sprzedaję motywacji.",
      "Pokazuję system pracy z zasobami: czasem, energią, uwagą, fokusem i pewnością.",
      "Ten mini-kurs to najprostszy pierwszy krok, żeby zobaczyć, gdzie dziś przecieka Twoje działanie.",
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

/** Wstawia aktualną cenę w miejsce znacznika [CENA] w tekstach copy. */
export function withPrice(text: string): string {
  return text.replaceAll("[CENA]", String(siteConfig.price));
}
