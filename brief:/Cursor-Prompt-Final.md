Budujesz landing page dla płatnego mini-kursu skierowanego do przeciążonych właścicieli firm. Zanim napiszesz jakikolwiek kod, przeczytaj cały ten prompt do końca. Na końcu znajdziesz instrukcję dotyczącą kolejności pracy — zastosuj się do niej dosłownie.

---

## 1. Cel strony

Cel: maksymalizacja liczby zapisów na minikurs (zakup, niski próg cenowy, dalsza ścieżka to konsultacja — ale tego nie sprzedajemy na tej stronie).

Odbiorca: właściciel firmy / founder, 1–12 lat doświadczenia, wysoka odpowiedzialność (ludzie, wynik, terminy, klienci), działa zrywami („zapał → odcięcie → regeneracja → powtórka"), na zewnątrz dowozi, w środku jedzie na rezerwie. Przychodzi pod presją, nie z ciekawości. Nie kupuje „rozwoju", „coachingu", „nowego poziomu" — to dla niego sygnał ściemy.

Ruch: Meta Ads (reklamy statyczne 4:5), ruch zimny i ciepły.

Ton: premium, konkretny, zero coachingu, zero webinarowego blichtru, zero obietnic „zmienię Twoje życie".

---

## 2. Stack technologiczny

- Next.js, App Router, TypeScript
- Tailwind CSS do layoutu i stylów
- Framer Motion (`motion`/`react`) — jedyna biblioteka animacji
- `next/image` dla wszystkich zdjęć (hero z `priority`, resztę lazy)
- Opcjonalnie Lenis dla smooth scroll — desktop only, wyłączony na mobile
- Wykluczone: GSAP, Three.js, Lottie, jakiekolwiek biblioteki particle/confetti, animacje CSS-in-JS poza Tailwind/Framer Motion

---

## 3. Struktura sekcji (11 sekcji, w tej kolejności, nie zmieniać)

1. Hero
2. Rozpoznanie siebie (ból)
3. Dla kogo to jest / dla kogo nie
4. Diagnoza — dlaczego to nie jest kwestia dyscypliny
5. Mechanizm — 4 lekcje
6. Co dokładnie dostajesz
7. Kim jestem — autor
8. Dowody — konkretne zmiany
9. Pytania, które na pewno masz (FAQ)
10. Cena
11. Finalne CTA

Tła sekcji alternują ciemne/jasne: 1, 2, 4, 7, 9, 10 ciemne; 3, 5, 6, 8 jasne. To część rytmu strony, nie przypadek.

---

## 4. Final copy (do wdrożenia 1:1, nie parafrazować)

### 1. Hero
Eyebrow: MINI-KURS DLA PRZECIĄŻONYCH PRZEDSIĘBIORCÓW
H1: Sprawa na 10 minut. Zjadła Ci cały dzień?
Body: Nie chodzi o lenistwo. Chodzi o zasób, który masz na cały dzień, a wraca Ci go na pół. 4 lekcje. 2 arkusze. Pierwsze ćwiczenie kończysz, zanim wystygnie kawa.
Bullety:
- Masz firmę i prawie wszystko jest na Twojej głowie
- Na zewnątrz dowozisz wynik, w środku jedziesz na rezerwie
- „Zaraz to zrobię" trwa u Ciebie cały dzień, nie 10 minut
CTA: Odbieram mini-kurs

### 2. Rozpoznanie siebie
H2: Ten sam dzień. W kółko.
Body: Zapał. Odcięcie. Regeneracja. Powtórka. Dużo pracy, mało kontroli — a cena (psychiczna, rodzinna) rośnie szybciej niż efekt.
Bullety:
- „Zaraz to zrobię." Tylko że „zaraz" trwa do wieczora.
- „Jutro zaczynam." Tylko że jutro wygląda jak wczoraj.
- „Tym razem się zmobilizuję." Mobilizujesz się. Na dwa dni.
CTA: brak

### 3. Dla kogo to jest (i dla kogo zdecydowanie nie)
H2: Dla kogo to jest. I dla kogo zdecydowanie nie.
Body: Jeśli się rozpoznajesz wyżej — sprawdź, czy to faktycznie dla Ciebie. Ten mini-kurs nie jest dla każdego przedsiębiorcy. Jest dla człowieka pod presją, nie z ciekawości.
Bullety — kolumna 1 „Dla Ciebie, jeśli":
- prowadzisz firmę i większość decyzji jest na Twojej głowie
- dowozisz na zewnątrz, a w środku jedziesz na rezerwie
- jesteś gotów zobaczyć, co realnie zjada Twój czas — nawet jeśli to niewygodne
Bullety — kolumna 2 „Nie dla Ciebie, jeśli":
- szukasz dawki motywacji na wieczór
- liczysz na „nowy poziom" bez zmiany niczego w działaniu
- temat oceniasz jako „ciekawy", a nie „pali się"
CTA: brak

### 4. Diagnoza
H2: Problem nie leży w dyscyplinie.
Body: Dziesięciominutowa sprawa rozciąga się na cały dzień nie dlatego, że jesteś słaby. Dlatego, że głowa w tle pracuje nad czymś innym — sprawą, której nie domknąłeś.
Bullety:
- Nie rozpraszają Cię media społecznościowe. Rozpraszają Cię rzeczy, których nigdy nie zacząłeś.
- Planujesz dobre rzeczy. W złej kolejności.
- Podświadomość nie słyszy deklaracji. Słyszy tylko to, co robisz.
CTA: brak

### 5. Mechanizm — 4 lekcje
H2: 4 krótkie lekcje. Nie motywacja. Mechanika.
Body: Każda lekcja ma jeden rezultat. Nie „zrozumiesz siebie" — zobaczysz, zdiagnozujesz, zrobisz.
Bullety (4 karty):
- Lekcja 1 — Diagnoza: zobaczysz dokładnie, gdzie ucieka Twój czas i energia, zamiast zgadywać
- Lekcja 2 — Przyczyna: zrozumiesz, dlaczego deklaracje nie działają, a konkretne działania — tak
- Lekcja 3 — Wyrzut z głowy: 30 minut ćwiczenia, po którym zobaczysz cały ciężar, który Cię przeciąża
- Lekcja 4 — System dnia: prosty układ, który zmienia „dzisiaj" w „jutro" — bez heroizmu
CTA: brak

### 6. Co dokładnie dostajesz
H2: 4 lekcje. 2 arkusze. 30 minut na pierwszy efekt.
Body: Wiesz precyzyjnie, co odbierasz, zanim klikniesz.
Bullety:
- 4 lekcje wideo, każda 10–15 minut — bez przegadania
- 2 arkusze do pracy — wypełniasz w trakcie, nie „kiedyś później"
- dostęp od razu po zapisie, zostaje u Ciebie na zawsze
- pierwsze ćwiczenie zajmuje 12 minut, nie pół dnia
CTA: Odbieram mini-kurs

### 7. Kim jestem — Wiktor Mariczew
H2: Pracuję z ludźmi wysokiej odpowiedzialności — nie z ciekawskimi.
Body: [DO UZUPEŁNIENIA: 2–3 zdania — fakt liczbowy w pierwszym zdaniu: lata pracy z tą grupą, format współpracy, profil klientów.] — zaimplementuj jako edytowalny placeholder w CMS/markdown, nie jako finalny tekst.
Bullety:
- [DO UZUPEŁNIENIA: fakt liczbowy 1]
- [DO UZUPEŁNIENIA: fakt liczbowy 2]
- zero manifestacji, zero pozytywnego myślenia
CTA: brak

### 8. Dowody — konkretne zmiany
H2: Nie obiecuję. Pokazuję, co się zmieniło u innych.
Bullety (3 karty, placeholder do realnych case'ów — nie wypełniaj fikcyjnymi danymi):
- [DO UZUPEŁNIENIA: cytat klienta 1] — [imię, rola]
- [DO UZUPEŁNIENIA: cytat klienta 2] — [imię, rola]
- [DO UZUPEŁNIENIA: cytat klienta 3] — [imię, rola]
CTA: brak

Zaimplementuj tę sekcję jako warunkowo renderowaną (np. flag w configu `hasTestimonials: boolean`) — jeśli `false`, sekcja nie jest renderowana na stronie, zamiast pokazywać placeholdery produkcyjnie.

### 9. Pytania, które na pewno masz
H2: Pytania, które na pewno masz.
FAQ (accordion, jedno pytanie rozwinięte naraz):
- Czy to nie jest kolejne naciąganie na hajs? → Nie obiecuję transformacji za [CENA] zł. Dostajesz 4 lekcje i 2 arkusze z jednym celem — żebyś po pierwszym ćwiczeniu zobaczył dokładnie, co zjada Twój czas. Resztę oceniasz sam, dziś wieczorem.
- A jeśli zapłacę i nic się nie zmieni? → Pierwsze ćwiczenie robisz w 30 minut. Jeśli nie pokaże Ci niczego nowego o Twoim dniu — napisz, oddamy pieniądze.
- Czy to zadziała u mnie, czy mam zbyt specyficzną sytuację? → Kurs nie jest o Twojej branży. Jest o mechanizmie, który działa tak samo niezależnie od tego, czy prowadzisz agencję, sklep czy gabinet.
- Czy znajdę na to czas? → 4 lekcje po 10–15 minut. Pierwszy efekt — tego samego wieczoru.
- Czy nie zacznę i nie dokończę? → Materiał jest krótki celowo. Nie buduje napięcia na „odcinek 12" — każda lekcja działa samodzielnie.
- Czy po kursie nie wrócę do starego schematu? → Lekcja 4 to system dnia, nie jednorazowe ćwiczenie. Dla części osób kolejnym krokiem jest rozmowa ze mną — ale o tym później.
CTA: Odbieram mini-kurs

### 10. Cena
H2: Jedno przepalone popołudnie kosztuje więcej niż ten kurs.
Body: [CENA] zł za 4 lekcje, 2 arkusze i dostęp na zawsze. — implementuj cenę jako zmienną konfiguracyjną, nie hardkodowany tekst.
Bullety:
- 4 lekcje wideo + 2 arkusze do pracy
- dostęp od razu, bez czekania
- zostaje u Ciebie na zawsze, wracasz, kiedy chcesz
CTA: Kupuję mini-kurs za [CENA] zł
Risk reversal (mała linia pod CTA): Jeśli pierwsze ćwiczenie nie pokaże Ci niczego nowego — napisz, oddamy pieniądze.

### 11. Finalne CTA
H2: Zacznij od 30 minut.
Body: Dostęp dostajesz od razu po zakupie. Zaczynasz od lekcji 1 — pierwsze ćwiczenie kończysz tego samego wieczoru. Mini-kurs to pierwszy krok; dla części osób kolejnym jest rozmowa ze mną, ale o tym później.
Bullety:
- klikasz „Kupuję mini-kurs"
- dostęp na mail w ciągu kilku minut
- zaczynasz lekcję 1 tego samego wieczoru
CTA: Kupuję mini-kurs

---

## 5. Motion brief

Zasada nadrzędna: każda animacja wzmacnia konkretny argument copy albo prowadzi do CTA. Jeśli nie robi jednego z tych dwóch — nie wchodzi do kodu.

**House style (domyślny, 80% elementów):** fade + rise 8–16px, 400–600ms, easing `cubic-bezier(0.16, 1, 0.3, 1)`, trigger `whileInView` z `viewport={{ once: true, margin: "-100px" }}`.

**Globalne zasady:**
- Animuje się tylko nagłówki, kluczowe bullety, CTA, cenę — nie każdy element.
- Jeden dominujący pomysł ruchu na sekcję.
- Parallax tylko w hero (tło wolniejsze o max 15%), nigdzie więcej.
- Scroll-scrubbing tylko w sekcji 5 (linia łącząca 4 lekcje).
- `prefers-reduced-motion` → wszystko redukuje się do czystego fade opacity, bez transformacji/pętli/parallaxu.
- Animuj wyłącznie `transform`/`opacity` (wyjątek: `height: auto` w akordeonie FAQ).
- Max 3–4 animowane elementy w viewporcie naraz.
- Wykluczone: typewriter, scramble text, neon glow, tilt 3D na kartach, glassmorphism, particle/confetti, animacja litera-po-literze.

**Animacje per sekcja:**

1. **Hero** — staggered reveal (eyebrow→H1→body→bullety→CTA), stagger 100–120ms, każdy element 500ms; + subtelny parallax tła (`useScroll`+`useTransform`, y 0→-40px) + wolny ambient zoom zdjęcia (CSS keyframes, scale 1→1.03, 8s loop). Priorytet wysoki.
2. **Rozpoznanie siebie** — sekwencyjne wejście słów cyklu („Zapał. Odcięcie. Regeneracja. Powtórka.") jako `AnimatePresence mode="wait"`, każde słowo 700ms + 200ms pauza, zostaje ostatnie słowo widoczne; bullety stagger 250ms, ease-in-out (nie ease-out — ruch ma być cykliczny). Priorytet wysoki.
3. **Dla kogo** — dwie kolumny, fade z przeciwnych stron (`fadeLeft`/`fadeRight`), house style, stagger między kolumnami 150ms. Priorytet niski.
4. **Diagnoza** — house style + jednorazowe podkreślenie rysujące się pod „Problem nie leży w dyscyplinie" (`scaleX` 0→1, `transform-origin: left`, 600ms, start 200ms po nagłówku). Priorytet średni.
5. **Mechanizm** — 4 karty fade+rise stagger 150ms + cienka linia łącząca, scroll-linked (`useScroll({ target: sectionRef, offset: ["start center","end center"] })` → `scaleX` linii, linear). Na mobile: linia wyłączona, karty w układzie wertykalnym ze zwykłym stagger. Priorytet wysoki.
6. **Co dostajesz** — lista stagger 80ms; CTA jednorazowy scale-in 0.97→1 (nie loop). Priorytet średni.
7. **Autor** — wyłącznie fade (bez `y`, bez ruchu) — najbardziej nieruchoma sekcja strony. Priorytet niski.
8. **Dowody** — karty fade+rise stagger 120ms + hover lift na desktopie (`whileHover={{ y: -4 }}`, 150ms), wyłączone na touch. Priorytet niski-średni.
9. **FAQ** — wejście sekcji house style; akordeon: chevron rotate 0→180°, odpowiedź `height: 0→auto` + fade, 250–300ms, ease-in-out, tylko jedno pytanie rozwinięte naraz. Priorytet średni.
10. **Cena** — sekcja wyodrębniona wizualnie (`clipPath` `inset(0 100% 0 0)`→`inset(0 0% 0 0)`, 500ms), cena scale-in 0.95→1, CTA + risk reversal z delayem 200ms. Priorytet wysoki.
11. **Finalne CTA** — house style na tekście; CTA ma ciągły subtelny puls (`scale: [1, 1.015, 1]`, `duration: 3.5`, `repeat: Infinity`, ease-in-out), zatrzymuje się po pierwszym hover/tap i pod `prefers-reduced-motion`. Priorytet wysoki.

**Mikrointerakcje CTA (wszystkie przyciski):** hover scale 1→1.02 + przyciemnienie czerwieni ~10%, 150ms ease-out; active scale 0.98, 50ms; widoczny focus-visible outline; opcjonalna strzałka przesuwająca się 2–4px w prawo na hover. Bez ripple, bez glow.

**Mobile:** wyłączyć parallax i scroll-scrubbing; skrócić stagger o 30–40%; sticky mini-CTA bar na dole ekranu po przewinięciu hero; hover-zależne efekty zastąpione stanem active/focus; puls finalnego CTA z amplitudą zmniejszoną o połowę. Testować w in-app browserze Facebooka/Instagrama (iOS + Android) — to główny kanał ruchu z Meta Ads, nie tylko Chrome desktop.

**Implementacja:** warianty animacji scentralizowane w `lib/motion.ts` (`fadeUp`, `fadeIn`, `fadeLeft`, `fadeRight`, `staggerContainer`, `scaleIn`, `lineDraw`) — importowane, nie redefiniowane per komponent. Hook `useReducedMotion()` na poziomie layoutu, redukujący wszystkie warianty do czystego fade.

---

## 6. Design direction

- **Estetyka:** premium, redakcyjna/dokumentalna — nie generyczny SaaS template, nie webinarowy blichtr, nie coachingowy lifestyle.
- **Tła:** alternacja ciemne/jasne między sekcjami (ciemny niemal-czarny / jasny kremowy), zgodnie ze strukturą z punktu 3. Brak gradientów, brak neonów, brak „glow".
- **Akcent kolorystyczny:** jeden — czerwień zgodna z istniejącą paletą marki, używana wyłącznie na CTA (belka/przycisk, biały tekst, wersaliki na belkach reklamowych — konsekwentnie z istniejącymi szablonami reklam). Nigdy jako tło całej sekcji.
- **Typografia:** pogrubiony, zdecydowany nagłówek (2–3 linie w stylu istniejących reklam), czytelny sans-serif w body. Brak fontów dekoracyjnych/script.
- **Zdjęcia:** spokojne, pracujące, autentyczne portrety i sytuacje — bez cygar, drinków, biżuterii, lifestyle/flex. Zdjęcie osoby w zaokrąglonej ramce lub pełnoekranowe w hero, zgodnie ze stylem istniejących reklam statycznych.
- **Layout:** dużo białej/czarnej przestrzeni, brak gęstych gridów kartowych poza tym, gdzie explicit wskazano (sekcja 5, 8). Stopki/mikro-teksty mniejszą czcionką, wyciszonym kolorem.
- **Czego unikać wizualnie:** ikon „startup", emoji, ilustracji 3D, gradientowych blobów, zdjęć grup ludzi z uniesionymi rękami, liczników/timerów urgency, gwiazdkowych ocen.

---

## 7. Kolejność pracy — przeczytaj przed napisaniem kodu

Nie pisz kodu od razu. Najpierw przygotuj plan implementacji i przedstaw go do akceptacji. Plan ma zawierać:

1. Strukturę plików/komponentów (per sekcja + `lib/motion.ts` + ewentualny config dla ceny/placeholderów).
2. Strukturę danych dla copy (gdzie i jak przechowywane — np. jako obiekty TS, nie hardkodowane stringi w JSX, żeby łatwo podstawić finalną cenę/bio/case'y).
3. Listę zależności do zainstalowania.
4. Sposób obsługi `prefers-reduced-motion` i flagi `hasTestimonials`.
5. Plan testów na mobile / in-app browserze.

Po przedstawieniu planu zaczekaj na potwierdzenie. Dopiero po akceptacji planu zacznij implementację, sekcja po sekcji, zaczynając od hero.

---

## 8. Kryteria akceptacji

- Hero w pełni widoczny i interaktywny (CTA klikalny) w ≤1.5s na 4G (mobile, throttled).
- Lighthouse Performance ≥85 mobile po wdrożeniu motion designu.
- Zero CLS wywołanego animacjami.
- `prefers-reduced-motion` respektowane w 100% — zero wyjątków.
- Żadna animacja nie blokuje scrolla ani odczytu treści (`once: true` wszędzie poza pętlami z punktu 5).
- Każda sekcja ma maksymalnie jeden efekt wykraczający poza house style (lista z punktu 5 jest zamknięta).
- Strona przetestowana w in-app browserze Facebooka i Instagrama (iOS + Android), nie tylko Chrome desktop.
- CTA: tap target ≥44px, widoczny focus state.
- Wszystkie placeholdery (`[CENA]`, bio autora, case'y) zaimplementowane jako łatwo edytowalne zmienne/config, nie wklejone na trwałe w treść komponentów.
- Sekcja 8 (dowody) nie renderuje się, jeśli `hasTestimonials = false` — strona nie może pójść live z widocznymi nawiasami placeholderów.
