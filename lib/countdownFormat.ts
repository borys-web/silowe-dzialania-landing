import type { Countdown } from "@/lib/useCountdown";

const MS_24H = 86_400_000;
const pad = (n: number) => String(n).padStart(2, "0");

export type CountdownDisplayMode = "long" | "urgent";

/** Poniżej 24h → tryb urgent (h:m:s), inaczej long (d:h:m). */
export function countdownDisplayMode(
  total: number,
  autoSecondsBelow24h: boolean,
): CountdownDisplayMode {
  if (!autoSecondsBelow24h || total >= MS_24H) return "long";
  return "urgent";
}

export type CountdownSegment = {
  value: string;
  label: string;
};

export function countdownSegments(
  state: Countdown,
  autoSecondsBelow24h: boolean,
): CountdownSegment[] {
  const { days, hours, minutes, seconds, total } = state;
  const show = (n: number) => pad(n);
  const showDay = (n: number) => String(n);

  if (countdownDisplayMode(total, autoSecondsBelow24h) === "urgent") {
    return [
      { value: show(hours), label: "godz" },
      { value: show(minutes), label: "min" },
      { value: show(seconds), label: "sek" },
    ];
  }

  return [
    { value: showDay(days), label: "dni" },
    { value: show(hours), label: "godz" },
    { value: show(minutes), label: "min" },
  ];
}

export function countdownInlineText(
  state: Countdown,
  autoSecondsBelow24h: boolean,
): string {
  const segments = countdownSegments(state, autoSecondsBelow24h);
  return segments.map((s) => s.value).join(" : ");
}

export function countdownAriaLabel(
  state: Countdown,
  autoSecondsBelow24h: boolean,
): string {
  const { days, hours, minutes, seconds, mounted } = state;
  if (!mounted) return "Trwa promocja czasowa";

  if (countdownDisplayMode(state.total, autoSecondsBelow24h) === "urgent") {
    return `Promocja kończy się za ${hours} godzin, ${minutes} minut i ${seconds} sekund`;
  }

  return `Promocja kończy się za ${days} dni, ${hours} godzin i ${minutes} minut`;
}
