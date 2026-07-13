/**
 * Całe copy landinga 1:1 ze specyfikacji (Final copy).
 * Trzymane jako typowane obiekty — komponenty importują stąd, nie hardkodują tekstu.
 * Znacznik [CENA] jest podstawiany funkcją withPrice() z config/offer.ts.
 */

export type FaqItem = { question: string; answer: string };
export type LessonCard = { tag: string; title: string; result: string };
export type Testimonial = {
  name: string;
  companyType: string;
  /** Jedna linia — konkretny czyn dokonany, nie ogólnik. */
  headline: string;
  before: string;
  after: string;
  /** YouTube video ID (np. z watch?v=ID). */
  videoId?: string;
  /** true = slot do uzupełnienia (wideo-placeholder + stonowany tekst). */
  placeholder?: boolean;
};

export const copy = {
  hero: {
    h1: "Sprawa na 10 minut. Zjadła Ci cały dzień.",
    body: "Wiesz, co masz robić. Robisz co innego. Nie dlatego, że jesteś leniwy — dlatego, że Twoja głowa pracuje w tle nad tym, czego nie domknąłeś. 4 lekcje. 2 arkusze. Pierwsze ćwiczenie kończysz, zanim wystygnie kawa.",
    bullets: [
      "Masz firmę i prawie wszystko leci przez Ciebie",
      "Na zewnątrz dowozisz. W środku jedziesz na oparach.",
      "Lista zadań nie maleje. Tylko się przesuwa na jutro.",
    ],
    cta: "Odbieram dostęp za [CENA] zł",
    // Pasek zaufania (social proof) — liczby z site.config.ts (author.facts).
    trust: "200+ przedsiębiorców · 16 spółek · business tracking",
  },

  recognition: {
    h2: "Ten sam dzień. W kółko.",
    cycle: ["Zapał.", "Odcięcie.", "Regeneracja.", "Powtórka."],
    body: "Zapał. Odcięcie. Regeneracja. Powtórka. Dużo pracy, mało kontroli — a cena (psychiczna, rodzinna) rośnie szybciej niż efekt.",
    bullets: [
      "„Zaraz to zrobię.” Tylko że „zaraz” trwa do wieczora.",
      "„Jutro zaczynam.” Tylko że jutro wygląda jak wczoraj.",
      "„Tym razem się zmobilizuję.” Mobilizujesz się. Na dwa dni.",
    ],
  },

  forWhom: {
    h2: "Dla kogo to jest. I dla kogo zdecydowanie nie.",
    body: "Jeśli się rozpoznajesz wyżej — sprawdź, czy to faktycznie dla Ciebie. Ten mini-kurs nie jest dla każdego przedsiębiorcy. Jest dla człowieka pod presją, nie z ciekawości.",
    forYou: {
      title: "Dla Ciebie, jeśli:",
      bullets: [
        "prowadzisz firmę i większość decyzji jest na Twojej głowie",
        "dowozisz na zewnątrz, a w środku jedziesz na rezerwie",
        "jesteś gotów zobaczyć, co realnie zjada Twój czas — nawet jeśli to niewygodne",
      ],
    },
    notForYou: {
      title: "Nie dla Ciebie, jeśli:",
      bullets: [
        "szukasz dawki motywacji na wieczór",
        "liczysz na „nowy poziom” bez zmiany niczego w działaniu",
        "temat oceniasz jako „ciekawy”, a nie „pali się”",
      ],
    },
  },

  diagnosis: {
    h2: "Problem nie leży w dyscyplinie.",
    body: "Dziesięciominutowa sprawa rozciąga się na cały dzień nie dlatego, że jesteś słaby. Dlatego, że głowa w tle pracuje nad czymś innym — sprawą, której nie domknąłeś.",
    bullets: [
      "Nie rozpraszają Cię media społecznościowe. Rozpraszają Cię rzeczy, których nigdy nie zacząłeś.",
      "Planujesz dobre rzeczy. W złej kolejności.",
      "Podświadomość nie słyszy deklaracji. Słyszy tylko to, co robisz.",
    ],
  },

  /**
   * Scalona sekcja „System" — łączy dawne „Mechanizm" (proces / 4 lekcje)
   * z „Co dostajesz" (bundle). Jeden blok: CO ROBISZ + CO DOSTAJESZ w jednym widoku.
   */
  system: {
    h2: "4 lekcje. 2 arkusze. Jeden prosty system na dzień.",
    body: "Nie dostajesz teorii do obejrzenia kiedyś. Dostajesz pierwszy krok, który robisz dziś — w trakcie kursu.",
    lessons: [
      {
        tag: "Lekcja 1",
        title: "Diagnoza",
        result: "Zobaczysz dokładnie, gdzie ucieka Twój czas i energia.",
      },
      {
        tag: "Lekcja 2",
        title: "Przyczyna",
        result: "Zrozumiesz, dlaczego deklaracje nie działają.",
      },
      {
        tag: "Lekcja 3",
        title: "Wyrzut z głowy",
        result: "Zamkniesz pętle, które mielą się w tle.",
      },
      {
        tag: "Lekcja 4",
        title: "System dnia",
        result: "Ułożysz dzień tak, żeby działał nawet bez motywacji.",
      },
    ] satisfies LessonCard[],
    badges: [
      "4 lekcje po 10–15 minut",
      "2 arkusze robocze",
      "dostęp od razu, bez subskrypcji",
    ],
    cta: "Odbieram dostęp za [CENA] zł",
  },

  textReviews: {
    h2: "Co ludzie zobaczyli po kursie.",
    intro:
      "Nie obiecujemy magicznej przemiany. Tak piszą ludzie, którzy zaczęli pracować z zasobami.",
    disclaimer: "Pisownia oryginalna. Publikujemy za zgodą autorów.",
    cta: "Odbieram dostęp za [CENA] zł",
  },

  author: {
    h2: "Pracuję z ludźmi wysokiej odpowiedzialności. Nie z ciekawskimi.",
    // body + facts w site.config.ts → author.bio, author.facts
  },

  proof: {
    h2: "Nie obiecuję. Pokazuję, co się zmieniło u innych.",
    intro: "Trzy krótkie, konkretne zmiany — nie recenzje, nie gwiazdki.",
    // Nagłówek wzmacniający wiarygodność nad kafelkami testimoniali.
    credibility: "Prawdziwi właściciele firm. Konkretny czyn dokonany, nie opinia.",
    // Case study w formacie wideo-testimonial (struktura jak wiktormariczew.pl).
    testimonials: [
      {
        name: "Kuba",
        companyType: "firma poligraficzna",
        headline: "Przestał być pracownikiem we własnej firmie.",
        before: "telefon, obsługa i bieżączka przechodziły przez niego.",
        after: "uwolnił się od bieżączki i zaczął budować kolejny biznes.",
        videoId: "RbPGwhnj1rA",
      },
      {
        name: "Martyna",
        companyType: "agencja marketingowa",
        headline: "Zatrudniła zespół i pracuje z dowolnego miejsca.",
        before:
          "bez niej wszystko zwalniało, a firma nie dawała jej ani swobody, ani skali.",
        after: "zatrudniła zespół i pozyskuje więcej współpracy.",
        videoId: "D_hNrx5TI3s",
      },
      {
        name: "Szymon",
        companyType: "firma finansowa",
        headline: "Domyka więcej i odzyskał czas dla rodziny.",
        before: "projektów przybywało szybciej, niż znikały z listy.",
        after:
          "domyka więcej projektów, niż otwiera, i ma więcej przestrzeni poza pracą.",
        videoId: "MHEj8HTgH_I",
      },
    ] satisfies Testimonial[],
  },

  faq: {
    h2: "Pytania, które wszyscy zadają.",
    items: [
      {
        question: "Czy to nie jest kolejne naciąganie na hajs?",
        answer:
          "Nie obiecuję Ci transformacji za [CENA]. Dostajesz 4 lekcje i 2 arkusze z jednym celem: po pierwszym ćwiczeniu masz zobaczyć dokładnie, co zjada Twój czas. Jeśli nie zobaczysz nic nowego — piszesz, oddaję pieniądze. Resztę oceniasz sam, dziś wieczorem.",
      },
      {
        question: "A jeśli zapłacę i nic się nie zmieni?",
        answer:
          "Pierwsze ćwiczenie robisz w 30 minut i od razu widzisz efekt — albo nie. Jeśli nie pokaże Ci niczego nowego, dostajesz zwrot. Ryzykujesz jedną kawę, nie weekend.",
      },
      {
        question: "Czy to zadziała u mnie? Mam specyficzną sytuację.",
        answer:
          "Kurs nie jest o Twojej branży. Jest o tym, jak Twoja głowa pracuje w tle nad sprawami, których nie domknąłeś. To działa tak samo w poligrafii, marketingu i finansach. Specyfiką jest człowiek pod presją — nie rodzaj firmy.",
      },
      {
        question: "Czy nie zacznę i nie dokończę — jak z innymi kursami?",
        answer:
          "Materiał jest krótki celowo. Nie ma 8 godzin wideo do 'przerobienia kiedyś'. Jest jeden konkretny rezultat na lekcję i pierwszy efekt w 30 minut. Nie ma czego nie dokończyć.",
      },
      {
        question: "Czy po kursie nie wrócę do starego schematu?",
        answer:
          "Lekcja 4 to system dnia — nie zryw motywacyjny. Nie opierasz się na 'chceniu', tylko na prostym układzie, który działa, gdy motywacji nie ma. Dlatego nie wraca się do punktu zero.",
      },
    ] satisfies FaqItem[],
    cta: "Odbieram dostęp za [CENA] zł",
  },

  pricing: {
    h2: "Jedno przepalone popołudnie kosztuje więcej niż ten kurs.",
    body: "za kurs, arkusze i dostęp na zawsze",
    bullets: [
      "4 lekcje wideo + 2 arkusze robocze",
      "Dostęp od razu, zostaje na zawsze",
    ],
    cta: "Kupuję mini-kurs za [CENA] zł",
    // Tytuł panelu gwarancji (risk reversal).
    guaranteeTitle: "Zero ryzyka po Twojej stronie",
    riskReversal:
      "Jeśli pierwsze ćwiczenie nie pokaże Ci nic nowego — piszesz, oddajemy pieniądze. Bez pytań. Bez formularzy.",
    // Scalone z dawnej sekcji „Zacznij od 30 minut" — co dzieje się po kliknięciu.
    stepsTitle: "Zaczynasz dziś wieczorem.",
    steps: [
      { label: "Kupujesz", detail: "Klikasz „Kupuję mini-kurs”." },
      { label: "Mail w 2 minuty", detail: "Dostęp ląduje na Twojej skrzynce." },
      { label: "Zaczynasz lekcję 1", detail: "Pierwsze ćwiczenie jeszcze dziś." },
    ],
  },
} as const;
