/**
 * Całe copy landinga 1:1 ze specyfikacji (Final copy).
 * Trzymane jako typowane obiekty — komponenty importują stąd, nie hardkodują tekstu.
 * Znacznik [CENA] jest podstawiany funkcją withPrice() z site.config.ts.
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
    eyebrow: "MINI-KURS DLA PRZECIĄŻONYCH PRZEDSIĘBIORCÓW",
    h1: "Sprawa na 10 minut. Zjadła Ci cały dzień?",
    body: "Nie chodzi o lenistwo. Chodzi o zasób, który masz na cały dzień, a wraca Ci go na pół. 4 lekcje. 2 arkusze. Pierwsze ćwiczenie kończysz, zanim wystygnie kawa.",
    bullets: [
      "Masz firmę i prawie wszystko jest na Twojej głowie",
      "Na zewnątrz dowozisz wynik, w środku jedziesz na rezerwie",
      "„Zaraz to zrobię” trwa u Ciebie cały dzień, nie 10 minut",
    ],
    cta: "Odbieram mini-kurs",
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

  mechanism: {
    h2: "4 krótkie lekcje. Nie motywacja. Mechanika.",
    body: "Każda lekcja ma jeden rezultat. Nie „zrozumiesz siebie” — zobaczysz, zdiagnozujesz, zrobisz.",
    lessons: [
      {
        tag: "Lekcja 1",
        title: "Diagnoza",
        result:
          "zobaczysz dokładnie, gdzie ucieka Twój czas i energia, zamiast zgadywać",
      },
      {
        tag: "Lekcja 2",
        title: "Przyczyna",
        result:
          "zrozumiesz, dlaczego deklaracje nie działają, a konkretne działania — tak",
      },
      {
        tag: "Lekcja 3",
        title: "Wyrzut z głowy",
        result:
          "30 minut ćwiczenia, po którym zobaczysz cały ciężar, który Cię przeciąża",
      },
      {
        tag: "Lekcja 4",
        title: "System dnia",
        result: "prosty układ, który zmienia „dzisiaj” w „jutro” — bez heroizmu",
      },
    ] satisfies LessonCard[],
  },

  whatYouGet: {
    h2: "4 lekcje. 2 arkusze. 30 minut na pierwszy efekt.",
    body: "Wiesz precyzyjnie, co odbierasz, zanim klikniesz.",
    bullets: [
      "4 lekcje wideo, każda 10–15 minut — bez przegadania",
      "2 arkusze do pracy — wypełniasz w trakcie, nie „kiedyś później”",
      "dostęp od razu po zapisie, zostaje u Ciebie na zawsze",
      "pierwsze ćwiczenie zajmuje 12 minut, nie pół dnia",
    ],
    cta: "Odbieram mini-kurs",
  },

  author: {
    h2: "Pracuję z ludźmi wysokiej odpowiedzialności — nie z ciekawskimi.",
    // body + facts w site.config.ts → author.bio, author.facts
  },

  proof: {
    h2: "Nie obiecuję. Pokazuję, co się zmieniło u innych.",
    intro: "Trzy krótkie, konkretne zmiany — nie recenzje, nie gwiazdki.",
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
    h2: "Pytania, które na pewno masz.",
    items: [
      {
        question: "Czy to nie jest kolejne naciąganie na hajs?",
        answer:
          "Nie obiecuję transformacji za [CENA] zł. Dostajesz 4 lekcje i 2 arkusze z jednym celem — żebyś po pierwszym ćwiczeniu zobaczył dokładnie, co zjada Twój czas. Resztę oceniasz sam, dziś wieczorem.",
      },
      {
        question: "A jeśli zapłacę i nic się nie zmieni?",
        answer:
          "Pierwsze ćwiczenie robisz w 30 minut. Jeśli nie pokaże Ci niczego nowego o Twoim dniu — napisz, oddamy pieniądze.",
      },
      {
        question: "Czy to zadziała u mnie, czy mam zbyt specyficzną sytuację?",
        answer:
          "Kurs nie jest o Twojej branży. Jest o mechanizmie, który działa tak samo niezależnie od tego, czy prowadzisz agencję, sklep czy gabinet.",
      },
      {
        question: "Czy znajdę na to czas?",
        answer:
          "4 lekcje po 10–15 minut. Pierwszy efekt — tego samego wieczoru.",
      },
      {
        question: "Czy nie zacznę i nie dokończę?",
        answer:
          "Materiał jest krótki celowo. Nie buduje napięcia na „odcinek 12” — każda lekcja działa samodzielnie.",
      },
      {
        question: "Czy po kursie nie wrócę do starego schematu?",
        answer:
          "Lekcja 4 to system dnia, nie jednorazowe ćwiczenie. Dla części osób kolejnym krokiem jest rozmowa ze mną — ale o tym później.",
      },
    ] satisfies FaqItem[],
    cta: "Odbieram mini-kurs",
  },

  pricing: {
    h2: "Jedno przepalone popołudnie kosztuje więcej niż ten kurs.",
    body: "[CENA] zł za 4 lekcje, 2 arkusze i dostęp na zawsze.",
    bullets: [
      "4 lekcje wideo + 2 arkusze do pracy",
      "dostęp od razu, bez czekania",
      "zostaje u Ciebie na zawsze, wracasz, kiedy chcesz",
    ],
    cta: "Kupuję mini-kurs za [CENA] zł",
    riskReversal:
      "Jeśli pierwsze ćwiczenie nie pokaże Ci niczego nowego — napisz, oddamy pieniądze.",
  },

  finalCta: {
    h2: "Zacznij od 30 minut.",
    body: "Dostęp dostajesz od razu po zakupie. Zaczynasz od lekcji 1. Pierwsze ćwiczenie robisz tego samego wieczoru — nie czekasz na „lepszy moment”. Mini-kurs to pierwszy krok. Dla części osób kolejnym jest rozmowa ze mną — ale o tym później.",
    bullets: [
      "klikasz „Kupuję mini-kurs”",
      "dostęp na mail w ciągu kilku minut",
      "zaczynasz lekcję 1 tego samego wieczoru",
    ],
    cta: "Kupuję mini-kurs",
  },
} as const;
