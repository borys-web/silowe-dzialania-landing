import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-ink px-5 text-center text-cream">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/50">
        Błąd 404
      </p>
      <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
        Ta strona nie istnieje.
      </h1>
      <p className="mt-4 max-w-md text-base text-cream/70">
        Link jest nieaktualny albo wkradła się literówka. Mini-kurs czeka na
        stronie głównej.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-red px-7 py-3 text-base font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-colors duration-200 hover:bg-red-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
      >
        Wracam na stronę główną
      </Link>
    </main>
  );
}
