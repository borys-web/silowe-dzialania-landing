import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Regulamin — Silne Działania",
  description:
    "Regulamin sprzedaży mini-kursu Silne Działania: zasady zamówień, płatności, dostawy treści cyfrowych, prawo odstąpienia, gwarancja satysfakcji i reklamacje.",
  alternates: { canonical: "/regulamin" },
};

const CONTACT_EMAIL = "silowedzialania@gmail.com";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 font-display text-xl font-bold tracking-tight text-cream">
      {children}
    </h2>
  );
}

function EmailLink() {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className="font-semibold text-cream underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-cream"
    >
      {CONTACT_EMAIL}
    </a>
  );
}

export default function RegulaminPage() {
  return (
    <div className="min-h-dvh bg-ink text-cream">
      <header className="border-b border-white/10 px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold text-cream/70 transition-colors hover:text-cream"
          >
            ← Strona główna
          </Link>
          <p className="text-sm text-cream/50">{siteConfig.name}</p>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-cream sm:text-4xl">
          Regulamin mini-kursu „Silne Działania"
        </h1>
        <p className="mt-3 text-sm text-cream/60">
          Ostatnia aktualizacja: 13 lipca 2026 r.
        </p>

        <div className="mt-8 max-w-[70ch] space-y-4 text-base leading-relaxed text-cream/80 [&_li]:mt-2 [&_ul]:list-disc [&_ul]:pl-6">
          <SectionHeading>§1. Postanowienia ogólne i definicje</SectionHeading>
          <p>
            Regulamin określa zasady sprzedaży i korzystania z mini-kursu w formie
            treści cyfrowych, dostępnego pod adresem{" "}
            <a
              href="https://silowe-dzialania-landing.vercel.app"
              className="font-semibold text-cream underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-cream"
            >
              https://silowe-dzialania-landing.vercel.app
            </a>
            .
          </p>
          <ul>
            <li>
              Sprzedawca — BUSINESS TRACKING spółka z ograniczoną odpowiedzialnością z
              siedzibą we Wrocławiu, ul. Stanisławowska 47, 54-611 Wrocław, KRS
              0001165859, NIP 8943257633, REGON 541368014, kapitał zakładowy 5 000 zł,
              sąd rejestrowy: Sąd Rejonowy dla Wrocławia-Fabrycznej we Wrocławiu, VI
              Wydział Gospodarczy Krajowego Rejestru Sądowego.
            </li>
            <li>Klient / Konsument — osoba dokonująca zakupu.</li>
            <li>
              Produkt — mini-kurs „Silne Działania": 4 lekcje wideo oraz 2 arkusze
              robocze w formacie PDF, dostarczane jako treść cyfrowa.
            </li>
          </ul>

          <SectionHeading>§2. Dane kontaktowe Sprzedawcy</SectionHeading>
          <p>
            E-mail: <EmailLink />. Kontakt w sprawach zamówień i reklamacji odbywa się
            drogą elektroniczną.
          </p>

          <SectionHeading>§3. Wymagania techniczne</SectionHeading>
          <p>
            Do korzystania z Produktu potrzebne są: urządzenie z dostępem do internetu,
            aktualna przeglądarka, aktywny adres e-mail oraz oprogramowanie odczytujące
            pliki wideo i PDF.
          </p>

          <SectionHeading>§4. Przedmiot i zakres</SectionHeading>
          <p>
            Produkt ma charakter treści cyfrowych dostarczanych elektronicznie. Dostęp
            do Produktu jest bezterminowy (dostęp „na zawsze") i nie wymaga
            subskrypcji, z zastrzeżeniem sytuacji niezależnych od Sprzedawcy (np.
            zakończenie działania platformy dostawy).
          </p>

          <SectionHeading>§5. Zamówienie i zawarcie umowy</SectionHeading>
          <p>
            Zamówienie składa się przez formularz zakupu. Umowa zostaje zawarta z
            chwilą skutecznego dokonania płatności. Przed zakupem Klient akceptuje
            niniejszy Regulamin.
          </p>

          <SectionHeading>§6. Ceny i płatności</SectionHeading>
          <p>
            Ceny podane są w złotych i zawierają podatki. Cena promocyjna obowiązuje w
            okresie i na warunkach wskazanych na stronie. Płatności obsługuje Stripe.
          </p>

          <SectionHeading>§7. Dostawa i realizacja</SectionHeading>
          <p>
            Dostęp do Produktu dostarczany jest drogą elektroniczną, niezwłocznie po
            zaksięgowaniu płatności, na adres e-mail podany w zamówieniu (dostęp do
            platformy Naffy).
          </p>

          <SectionHeading>
            §8. Prawo odstąpienia od umowy i wyjątek dla treści cyfrowych
          </SectionHeading>
          <p>
            Konsumentowi co do zasady przysługuje prawo odstąpienia od umowy zawartej
            na odległość w terminie 14 dni. Zgodnie z art. 38 pkt 13 ustawy o prawach
            konsumenta prawo to NIE przysługuje w odniesieniu do treści cyfrowych
            dostarczanych nie na nośniku materialnym, jeżeli spełnianie świadczenia
            rozpoczęło się za wyraźną i uprzednią zgodą Konsumenta oraz po
            poinformowaniu go o utracie prawa odstąpienia. Składając zamówienie i
            wyrażając zgodę na natychmiastowy dostęp, Konsument przyjmuje do wiadomości
            utratę prawa odstąpienia w powyższym zakresie.
          </p>
          <p>
            Wzór oświadczenia o odstąpieniu jest dostępny na żądanie pod adresem{" "}
            <EmailLink />.
          </p>

          <SectionHeading>§9. Dobrowolna gwarancja satysfakcji (30 dni)</SectionHeading>
          <p>
            Niezależnie od uprawnień ustawowych z §8, Sprzedawca udziela dobrowolnej
            gwarancji satysfakcji: w ciągu 30 dni od zakupu Klient może zażądać zwrotu
            pełnej ceny, pisząc na <EmailLink />. Zwrot następuje bez zbędnych
            formalności. Gwarancja ta jest dodatkowym, umownym zobowiązaniem Sprzedawcy
            i nie ogranicza praw ustawowych Konsumenta.
          </p>

          <SectionHeading>
            §10. Reklamacje i zgodność treści cyfrowej z umową
          </SectionHeading>
          <p>
            Sprzedawca ma obowiązek dostarczyć treść cyfrową zgodną z umową. Reklamacje
            można składać na <EmailLink />, opisując problem. Sprzedawca rozpatrzy
            reklamację w terminie 14 dni. Stosuje się przepisy ustawy o prawach
            konsumenta dotyczące treści i usług cyfrowych.
          </p>

          <SectionHeading>§11. Dane osobowe</SectionHeading>
          <p>
            Zasady przetwarzania danych opisane są w{" "}
            <Link
              href="/polityka-prywatnosci"
              className="font-semibold text-cream underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-cream"
            >
              Polityce prywatności
            </Link>{" "}
            dostępnej pod adresem
            https://silowe-dzialania-landing.vercel.app/polityka-prywatnosci.
          </p>

          <SectionHeading>§12. Własność intelektualna</SectionHeading>
          <p>
            Materiały kursu są chronione prawem autorskim. Klient korzysta z nich na
            własny użytek. Dalsze udostępnianie, kopiowanie lub odsprzedaż bez zgody
            Sprzedawcy są zabronione.
          </p>

          <SectionHeading>§13. Pozasądowe rozwiązywanie sporów</SectionHeading>
          <p>
            Konsument może skorzystać z pozasądowych sposobów rozpatrywania reklamacji
            i dochodzenia roszczeń, w tym z platformy ODR Komisji Europejskiej:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              className="font-semibold text-cream underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-cream"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            .
          </p>

          <SectionHeading>§14. Postanowienia końcowe</SectionHeading>
          <p>
            W sprawach nieuregulowanych stosuje się prawo polskie. Sprzedawca może
            zmienić Regulamin z ważnych przyczyn; do zamówień złożonych przed zmianą
            stosuje się Regulamin w brzmieniu z chwili zakupu.
          </p>
        </div>
      </main>
    </div>
  );
}
