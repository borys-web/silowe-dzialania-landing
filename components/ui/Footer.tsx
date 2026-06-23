import { siteConfig } from "@/content/site.config";

/**
 * Minimalny footer — spokojne zamknięcie strony.
 * Bez nawigacji marketingowej; nazwa autora + rok + drobne linki prawne (placeholdery).
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-black/10 bg-ink px-5 py-10 text-cream sm:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 text-sm text-muted-dark sm:flex-row">
        <p>
          &copy; {year} {siteConfig.author.name}
        </p>
        <nav aria-label="Stopka" className="flex items-center gap-6">
          <a
            href="#"
            className="transition-colors hover:text-cream focus-visible:text-cream focus-visible:outline-none"
          >
            Polityka prywatności
          </a>
          <a
            href="#"
            className="transition-colors hover:text-cream focus-visible:text-cream focus-visible:outline-none"
          >
            Regulamin
          </a>
        </nav>
      </div>
    </footer>
  );
}
