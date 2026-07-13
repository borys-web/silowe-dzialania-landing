import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Polityka prywatności — Silne Działania",
  description:
    "Polityka prywatności mini-kursu Silne Działania: kto jest administratorem danych, jakie dane przetwarzamy, w jakich celach oraz jakie prawa Ci przysługują.",
  alternates: { canonical: "/polityka-prywatnosci" },
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

export default function PolitykaPrywatnosciPage() {
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
          Polityka prywatności
        </h1>
        <p className="mt-3 text-sm text-cream/60">
          Ostatnia aktualizacja: 13 lipca 2026 r.
        </p>

        <div className="mt-8 max-w-[70ch] space-y-4 text-base leading-relaxed text-cream/80 [&_li]:mt-2 [&_ul]:list-disc [&_ul]:pl-6">
          <SectionHeading>1. Administrator danych</SectionHeading>
          <p>
            Administratorem Twoich danych osobowych jest BUSINESS TRACKING spółka z
            ograniczoną odpowiedzialnością z siedzibą we Wrocławiu, ul. Stanisławowska
            47, 54-611 Wrocław, wpisana do rejestru przedsiębiorców KRS pod numerem
            0001165859, NIP 8943257633, REGON 541368014 (dalej „Administrator" lub
            „my"). Kontakt w sprawach danych osobowych: <EmailLink />.
          </p>

          <SectionHeading>2. Jakie dane przetwarzamy</SectionHeading>
          <ul>
            <li>
              Dane podane przy zakupie: imię i nazwisko, adres e-mail, a w zakresie
              niezbędnym do rozliczenia — dane do faktury. Dane karty/płatności
              przetwarza wyłącznie operator płatności (Stripe); my ich nie
              przechowujemy.
            </li>
            <li>
              Dane techniczne: adres IP, typ urządzenia i przeglądarki, identyfikatory
              plików cookies i podobnych technologii.
            </li>
            <li>
              Dane z korespondencji: treść wiadomości kierowanych do nas (np.
              reklamacje, pytania).
            </li>
          </ul>

          <SectionHeading>3. Cele i podstawy prawne przetwarzania</SectionHeading>
          <ul>
            <li>
              Realizacja umowy (dostęp do mini-kursu, obsługa zakupu) — art. 6 ust. 1
              lit. b RODO.
            </li>
            <li>
              Wypełnienie obowiązków prawnych (m.in. rozliczenia podatkowe,
              reklamacje) — art. 6 ust. 1 lit. c RODO.
            </li>
            <li>
              Marketing, analityka i mierzenie skuteczności reklam — na podstawie
              Twojej zgody (art. 6 ust. 1 lit. a RODO) lub naszego uzasadnionego
              interesu (art. 6 ust. 1 lit. f RODO).
            </li>
            <li>
              Dochodzenie lub obrona przed roszczeniami — art. 6 ust. 1 lit. f RODO.
            </li>
          </ul>

          <SectionHeading>4. Odbiorcy danych / podmioty przetwarzające</SectionHeading>
          <p>Dane mogą być powierzane zaufanym dostawcom działającym na nasze zlecenie:</p>
          <ul>
            <li>Hosting i infrastruktura: Vercel Inc.</li>
            <li>Obsługa płatności: Stripe (Stripe Payments Europe, Ltd.).</li>
            <li>Dostarczanie kursu i wysyłka e-maili: Naffy (naffy.io).</li>
            <li>
              Narzędzia analityczne i marketingowe: piksel Meta (Meta Platforms
              Ireland Ltd.).
            </li>
          </ul>

          <SectionHeading>5. Przekazywanie danych poza EOG</SectionHeading>
          <p>
            Niektórzy dostawcy (m.in. Vercel, Stripe, Meta) mogą przetwarzać dane poza
            Europejskim Obszarem Gospodarczym, w tym w USA. Odbywa się to na podstawie
            odpowiednich zabezpieczeń — standardowych klauzul umownych lub ram ochrony
            danych (Data Privacy Framework).
          </p>

          <SectionHeading>6. Okres przechowywania</SectionHeading>
          <p>
            Dane przetwarzamy przez czas realizacji umowy, a następnie przez okres
            wymagany przepisami (np. podatkowymi) oraz do upływu terminów przedawnienia
            roszczeń. Dane przetwarzane na podstawie zgody — do czasu jej wycofania.
          </p>

          <SectionHeading>7. Twoje prawa</SectionHeading>
          <p>
            Masz prawo do: dostępu do danych, ich sprostowania, usunięcia, ograniczenia
            przetwarzania, przenoszenia, wniesienia sprzeciwu, a także cofnięcia zgody w
            dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania sprzed
            cofnięcia). Przysługuje Ci również skarga do Prezesa Urzędu Ochrony Danych
            Osobowych (PUODO).
          </p>

          <SectionHeading>8. Pliki cookies</SectionHeading>
          <p>Serwis korzysta z plików cookies i podobnych technologii:</p>
          <ul>
            <li>niezbędne — konieczne do działania strony i realizacji zakupu,</li>
            <li>analityczne — do mierzenia ruchu i ulepszania serwisu,</li>
            <li>marketingowe — do mierzenia skuteczności reklam i remarketingu.</li>
          </ul>
          <p>
            Cookies inne niż niezbędne instalujemy po wyrażeniu przez Ciebie zgody w
            banerze. Ustawienia możesz zmienić w każdej chwili w przeglądarce lub w
            panelu zgód.
          </p>

          <SectionHeading>9. Narzędzia marketingowe (piksel Meta)</SectionHeading>
          <p>
            Jeśli wyrazisz zgodę, korzystamy z piksela Meta, aby mierzyć skuteczność
            reklam i docierać z ofertą do osób potencjalnie zainteresowanych. Możesz
            zarządzać tymi zgodami w panelu cookies oraz w ustawieniach swojego konta
            reklamowego u dostawcy.
          </p>

          <SectionHeading>10. Dobrowolność podania danych</SectionHeading>
          <p>
            Podanie danych jest dobrowolne, ale niezbędne do zawarcia i realizacji
            umowy (bez adresu e-mail nie dostarczymy dostępu do kursu).
          </p>

          <SectionHeading>11. Zmiany polityki</SectionHeading>
          <p>
            Możemy aktualizować niniejszą politykę. Aktualna wersja jest zawsze
            dostępna pod tym adresem, z datą ostatniej aktualizacji.
          </p>

          <SectionHeading>12. Kontakt</SectionHeading>
          <p>
            W sprawach dotyczących danych osobowych napisz na: <EmailLink />.
          </p>
        </div>
      </main>
    </div>
  );
}
