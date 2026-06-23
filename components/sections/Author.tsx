import Image from "next/image";
import { copy } from "@/content/copy";
import { siteConfig } from "@/content/site.config";

/**
 * Sekcja 6 — Kim jestem (Wiktor Mariczew). Ciemna.
 * Cel: zbudować zaufanie przed FAQ i ceną; rozbroić obiekcję „scam / ekspert od wszystkiego".
 * prefers-reduced-motion → czysty fade.
 */
export function Author() {
  const { author } = siteConfig;

  return (
    <section
      aria-label="Kim jestem — Wiktor Mariczew"
      className="section-shell surface-ink w-full px-5 py-20 text-cream sm:px-8 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="heading-display max-w-3xl">
          {copy.author.h2}
        </h2>

        <div className="mt-12 grid items-start gap-10 md:grid-cols-12 md:gap-14">
          <div className="order-2 md:order-1 md:col-span-7">
            <div className="flex flex-col gap-4">
              {author.bio.map((paragraph) => (
                <p
                  key={paragraph}
                  className="body-copy text-base sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="mt-10 flex flex-col gap-6">
              {author.facts.map((fact) =>
                "highlight" in fact && fact.highlight ? (
                  <li
                    key={fact.label}
                    className="flex items-baseline gap-3 sm:gap-4"
                  >
                    <span className="relative shrink-0 font-display text-5xl font-extrabold leading-none tracking-tight text-cream sm:text-6xl">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -inset-x-3 -inset-y-2 rounded-full bg-red/25 blur-2xl"
                      />
                      <span className="relative tabular-nums">{fact.highlight}</span>
                    </span>
                    <span className="text-base leading-snug text-cream/90 sm:text-lg">
                      {fact.label}
                    </span>
                  </li>
                ) : (
                  <li
                    key={fact.label}
                    className="flex items-start gap-3 border-t border-white/10 pt-6"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cream/35"
                    />
                    <span className="text-base leading-snug text-cream/85 sm:text-lg">
                      {fact.label}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="order-1 md:order-2 md:col-span-5">
            <figure className="panel panel-glow relative mx-auto max-w-sm overflow-hidden md:mx-0">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/wiktor.jpg"
                  alt="Wiktor Mariczew — autor mini-kursu"
                  fill
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <span className="font-display text-lg font-bold tracking-tight text-white">
                  {author.name}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
