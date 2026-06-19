# Landing — Mini-kurs „Silne Działania”

Landing page dla płatnego mini-kursu (ruch z Meta Ads, 11 sekcji wg specyfikacji w `brief:/`).

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (konfiguracja przez `@theme` w `app/globals.css`)
- **Framer Motion 12** — jedyna biblioteka animacji
- `next/font` (Inter + Sora, z `latin-ext` dla polskich znaków)
- Deploy: **Vercel**

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Strona: [http://localhost:3000](http://localhost:3000)

Inne komendy:

```bash
npm run build   # produkcyjny build
npm run start   # serwer produkcyjny (po build)
npm run lint    # ESLint
```

## Struktura

```
app/
  layout.tsx        # html lang=pl, fonty, metadata/OG, slot Meta Pixel
  page.tsx          # kompozycja sekcji (na razie placeholder fundamentu)
  globals.css       # Tailwind v4 + paleta (ink/cream/red) + reduced-motion
components/
  ui/               # Section, CtaButton, Reveal
  analytics/        # MetaPixel (slot)
  sections/         # 11 sekcji landinga (kolejne etapy)
  layout/           # StickyCtaBar / SmoothScroll (kolejne etapy)
content/
  copy.ts           # całe copy 1:1 (źródło prawdy)
  site.config.ts    # cena (97 zł), CTA, Meta Pixel ID, flagi sekcji, autor
lib/
  motion.ts         # warianty animacji (house style)
  useMotionVariant.ts  # redukcja ruchu (prefers-reduced-motion)
  cn.ts
public/images/      # zdjęcia (next/image)
```

## Konfiguracja

Edytuj `content/site.config.ts`:

- `price` — cena (obecnie `97`)
- `cta.checkoutHref` — link do płatności / formularza (placeholder `#`)
- `metaPixelId` — wpisz ID, aby aktywować Meta Pixel
- `flags.showProofSection` — sekcja „Dowody” renderuje się tylko gdy `true`
- `author.bio` / `author.facts` — placeholdery do uzupełnienia
