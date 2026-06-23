import { cn } from "@/lib/cn";
import { CtaButton } from "@/components/ui/CtaButton";
import { PlanningPattern } from "@/components/ui/PlanningPattern";
import { copy } from "@/content/copy";
import { siteConfig } from "@/content/site.config";

/*
  Sekcja „System" — Mechanika / Bundle.
  Jeden focal point: duży mockup paczki (CO DOSTAJESZ).
  Po lewej informacyjny timeline 4 kroków (CO ROBISZ) — bez dużych kart.
  Pod spodem 3 małe badge'e (składniki) i jedno CTA.
*/

/** Ikona play (wypełniona) — odtwarzacz na telefonie / aktywna lekcja. */
function PlayFilledIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn("h-5 w-5", className)}>
      <path d="M7 4.5v15a1 1 0 0 0 1.54.84l11.5-7.5a1 1 0 0 0 0-1.68L8.54 3.66A1 1 0 0 0 7 4.5z" />
    </svg>
  );
}

/** Ikona lekcji wideo (play w prostokącie). */
function VideoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-5 w-5">
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M10 9.5l4.5 2.5L10 14.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Ikona arkusza PDF. */
function PdfIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-5 w-5">
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 13h6M9 16.5h4" />
    </svg>
  );
}

/** Pojedyncza linia lekcji w dashboardzie na ekranie laptopa. */
function DashboardLesson({
  n,
  title,
  state,
}: {
  n: string;
  title: string;
  state: "done" | "active" | "todo";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-lg border px-2.5 py-2",
        state === "active"
          ? "border-red/40 bg-red/[0.12]"
          : "border-white/10 bg-white/[0.03]",
      )}
    >
      <span
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[0.6rem] font-bold",
          state === "done" && "bg-red/20 text-red",
          state === "active" && "bg-red text-white shadow-[0_0_12px_rgba(225,29,46,0.6)]",
          state === "todo" && "bg-white/10 text-cream/50",
        )}
      >
        {state === "done" ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-3 w-3">
            <path d="M5 12.5l4.5 4.5L19 7" />
          </svg>
        ) : state === "active" ? (
          <VideoIcon />
        ) : (
          n
        )}
      </span>
      <span className="min-w-0 flex-1 truncate text-[0.72rem] font-semibold text-cream/85">
        {title}
      </span>
      <span className="shrink-0 text-[0.6rem] font-medium tabular-nums text-cream/40">
        {n}
      </span>
    </div>
  );
}

/**
 * Główny visual sekcji — duży mockup „paczki" produktu.
 * MacBook (dashboard kursu) + iPhone (odtwarzacz Lekcji 1) + 2 arkusze PDF
 * wystające spod laptopa jak fizyczne karty. Glassmorphism, czerwone akcenty.
 */
function ProductMockup() {
  return (
    <div className="relative mx-auto w-full max-w-2xl px-2 pb-16 pt-10 sm:px-6">
      {/* Glow tła */}
      <div
        aria-hidden
        className="glow-orb pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/[0.1]"
      />

      {/* Arkusze PDF — wystają spod laptopa jak fizyczne karty */}
      <div
        aria-hidden
        className="absolute bottom-3 left-0 z-0 w-[42%] max-w-[210px] -rotate-[7deg] sm:left-0"
      >
        <div className="glass-panel rounded-xl p-3.5 shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-electric/15 text-electric">
              <PdfIcon />
            </span>
            <span className="flex flex-col">
              <span className="text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-cream/45">
                Arkusz PDF
              </span>
              <span className="text-[0.78rem] font-semibold text-cream/85">Mapa czasu</span>
            </span>
          </div>
          <div className="mt-3 space-y-1.5">
            <span className="block h-1 w-full rounded-full bg-white/12" />
            <span className="block h-1 w-3/4 rounded-full bg-white/10" />
            <span className="block h-1 w-5/6 rounded-full bg-red/30" />
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 left-14 z-0 w-[40%] max-w-[200px] rotate-[5deg] sm:left-20"
      >
        <div className="glass-panel rounded-xl p-3.5 shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-electric/15 text-electric">
              <PdfIcon />
            </span>
            <span className="flex flex-col">
              <span className="text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-cream/45">
                Arkusz PDF
              </span>
              <span className="text-[0.78rem] font-semibold text-cream/85">Wyrzut z głowy</span>
            </span>
          </div>
          <div className="mt-3 space-y-1.5">
            <span className="block h-1 w-full rounded-full bg-white/12" />
            <span className="block h-1 w-2/3 rounded-full bg-white/10" />
          </div>
        </div>
      </div>

      {/* LAPTOP — MacBook style */}
      <div className="relative z-10">
        <div className="mx-auto w-[90%] rounded-t-2xl border border-white/12 border-b-0 bg-[#0c0c10] p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
          <div className="mx-auto mb-1.5 h-1 w-1 rounded-full bg-white/20" />
          <div className="glass-panel rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red/70" />
                <span className="h-2 w-2 rounded-full bg-cream/30" />
                <span className="h-2 w-2 rounded-full bg-cream/20" />
              </div>
              <span className="inline-flex items-center gap-1 rounded-full border border-red/30 bg-red/[0.12] px-2 py-0.5 text-[0.58rem] font-semibold text-red">
                <span className="h-1 w-1 rounded-full bg-red shadow-[0_0_8px_rgba(225,29,46,0.9)]" />
                Dostęp aktywny
              </span>
            </div>

            <div className="mt-4">
              <span className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-cream/45">
                Dashboard kursu
              </span>
              <p className="font-display text-lg font-extrabold tracking-tight text-cream sm:text-xl">
                Minikurs Planowania
              </p>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between text-[0.62rem] font-medium text-cream/55">
                <span>Postęp</span>
                <span className="tabular-nums text-red">25%</span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <span className="block h-full w-1/4 rounded-full bg-red shadow-[0_0_12px_rgba(225,29,46,0.6)]" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-1.5">
              <DashboardLesson n="01" title="Diagnoza" state="done" />
              <DashboardLesson n="02" title="Przyczyna" state="active" />
              <DashboardLesson n="03" title="Wyrzut z głowy" state="todo" />
              <DashboardLesson n="04" title="System dnia" state="todo" />
            </div>
          </div>
        </div>

        {/* Podstawa laptopa (deck) */}
        <div className="relative mx-auto h-3.5 w-full rounded-b-xl rounded-t-sm border border-white/12 bg-gradient-to-b from-white/[0.14] to-white/[0.04] shadow-[0_22px_40px_rgba(0,0,0,0.5)]">
          <div className="absolute left-1/2 top-0 h-1.5 w-20 -translate-x-1/2 rounded-b-md bg-black/40" />
        </div>
      </div>

      {/* TELEFON — iPhone style, odtwarzacz Lekcji 1 */}
      <div className="absolute -bottom-3 right-0 z-20 w-[32%] min-w-[110px] max-w-[160px] sm:-right-2">
        <div className="rounded-[1.8rem] border border-white/15 bg-[#0a0a0d] p-1.5 shadow-[0_26px_60px_rgba(0,0,0,0.55)]">
          <div className="glass-panel relative overflow-hidden rounded-[1.5rem]">
            <div className="absolute left-1/2 top-1.5 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-black/70" />
            <div className="relative aspect-[9/19] w-full">
              <div className="absolute inset-0 bg-gradient-to-b from-ink-elevated via-ink to-black" />
              <div className="absolute inset-x-0 top-0 h-2/3 bg-[radial-gradient(60%_50%_at_50%_35%,rgba(225,29,46,0.18),transparent_70%)]" />
              <div className="absolute left-1/2 top-[42%] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red text-white shadow-[0_0_22px_rgba(225,29,46,0.6)]">
                <PlayFilledIcon className="ml-0.5" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3">
                <span className="block text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-cream/60">
                  Lekcja 1
                </span>
                <span className="block text-[0.78rem] font-bold leading-tight text-white">
                  Diagnoza
                </span>
                <div className="mt-1.5 h-0.5 w-full overflow-hidden rounded-full bg-white/20">
                  <span className="block h-full w-1/3 rounded-full bg-red" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Pionowy timeline procesu (CO ROBISZ) — informacyjny, nie dekoracyjny.
 * Każdy krok ma ten sam rytm: numer, tytuł, jedno krótkie zdanie,
 * subtelna linia po lewej. Pierwszy krok ma czerwony akcent (start).
 */
function ProcessTimeline({
  steps,
}: {
  steps: typeof copy.system.lessons;
}) {
  return (
    <ol className="relative">
      {steps.map((step, i) => {
        const isFirst = i === 0;
        const isLast = i === steps.length - 1;
        return (
          <li key={step.tag} className="relative flex gap-4 pb-7 last:pb-0 sm:gap-5">
            {/* Linia timeline łącząca numery (poza ostatnim krokiem) */}
            {!isLast && (
              <span
                aria-hidden
                className="absolute left-[19px] top-11 h-[calc(100%-1.75rem)] w-px bg-gradient-to-b from-white/15 to-white/[0.04]"
              />
            )}
            {/* Numer kroku */}
            <span
              className={cn(
                "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-display text-sm font-bold tabular-nums",
                isFirst
                  ? "border-red/45 bg-red/[0.14] text-red"
                  : "border-white/12 bg-white/[0.03] text-cream/65",
              )}
            >
              {i + 1}
            </span>
            <div className="pt-1.5">
              <h3 className="font-display text-lg font-bold tracking-tight text-cream sm:text-xl">
                {step.title}
              </h3>
              <p className="body-copy mt-1 text-base">{step.result}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/**
 * Sekcja 4 — „System" (Mechanika / Bundle).
 * Header + lead, układ 2 kolumny (proces / mockup), 3 badge'e i jedno CTA.
 * Jeden focal point: mockup. Mniej ramek, mniej kart, dark premium.
 */
export function System() {
  const { system } = copy;

  return (
    <section
      id="mechanizm"
      aria-label="System — 4 lekcje, 2 arkusze, mechanika"
      className="section-shell surface-ink relative isolate w-full overflow-hidden scroll-mt-8 px-5 py-20 text-cream sm:px-8 sm:py-32"
    >
      <PlanningPattern variant="system" className="-z-[1]" />

      <div className="relative z-[1] mx-auto w-full max-w-6xl">
        {/* Header + lead */}
        <div className="max-w-3xl">
          <h2 className="heading-display text-cream">{system.h2}</h2>
          <p className="body-copy mt-5 max-w-2xl text-base sm:text-lg">{system.body}</p>
        </div>

        {/* Hairline „wyrównania" — sygnał porządku */}
        <div
          aria-hidden
          className="mt-10 h-px w-full origin-left bg-gradient-to-r from-red/70 via-electric/40 to-transparent"
        />

        {/* Układ 2 kolumny. DOM: mockup → proces, aby mobile pokazał mockup
            przed listą; desktop ustawia proces po lewej (order-1). */}
        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Główny visual: bundle (CO DOSTAJESZ) — dominujący */}
          <div className="lg:order-2 lg:col-span-7">
            <ProductMockup />
          </div>

          {/* Proces (CO ROBISZ) — informacyjny timeline */}
          <div className="lg:order-1 lg:col-span-5 lg:pt-1">
            <ProcessTimeline steps={system.lessons} />
          </div>
        </div>

        {/* Składniki — 3 małe badge'e (1 linia desktop, stacked mobile) */}
        <ul className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          {system.badges.map((badge) => (
            <li
              key={badge}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm font-medium text-cream/80"
            >
              <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-red/70" />
              {badge}
            </li>
          ))}
        </ul>

        {/* CTA — pojedyncze, centralne */}
        <div className="mt-10 flex justify-center">
          <CtaButton
            href={siteConfig.cta.primaryHref}
            ariaLabel="Odbieram dostęp do mini-kursu za 47 zł"
            className="text-lg"
          >
            {system.cta}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
