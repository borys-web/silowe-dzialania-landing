import { PlanningPattern } from "@/components/ui/PlanningPattern";
import { copy } from "@/content/copy";

/**
 * Sekcja 2 — Rozpoznanie siebie (ciemna, priorytet wysoki).
 * Cel: identyfikacja z problemem, budowanie napięcia po Hero.
 */
export function Recognition() {
  const { recognition } = copy;

  return (
    <section
      aria-label="Rozpoznanie siebie"
      className="section-shell surface-ink relative isolate w-full overflow-hidden px-5 py-20 text-cream sm:px-8 sm:py-32"
    >
      <PlanningPattern variant="loop" className="-z-[1]" />

      <div className="relative z-[1] mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-12 md:gap-16">
        {/* Lewa kolumna: nagłówek + animowany cykl */}
        <div className="md:col-span-5">
          <h2 className="heading-display text-cream">
            {recognition.h2}
          </h2>

          <ul className="mt-10 space-y-2">
            {recognition.cycle.map((w, i) => (
              <li
                key={w}
                className="flex items-center gap-3 font-display text-2xl font-bold text-cream/80 sm:text-3xl"
              >
                <span
                  aria-hidden
                  className={i === recognition.cycle.length - 1 ? "h-[3px] w-12 rounded-full bg-gradient-to-r from-red to-electric" : "h-px w-8 rounded-full bg-white/15"}
                />
                {w}
              </li>
            ))}
          </ul>
        </div>

        {/* Prawa kolumna: body + karty problemu */}
        <div className="md:col-span-7">
          <p className="max-w-xl text-xl font-semibold leading-relaxed text-cream/80 sm:text-2xl">
            {recognition.body}
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {recognition.bullets.map((b, i) => (
              <li key={b}>
                <div
                  className={`glass-panel rounded-xl px-5 py-4 text-base leading-snug text-cream/90 sm:text-lg ${
                    i % 2 === 0 ? "chaos-card-a" : "chaos-card-b"
                  }`}
                >
                  {b}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
