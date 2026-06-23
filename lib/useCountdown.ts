"use client";

import { useCallback, useRef, useSyncExternalStore } from "react";

export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  /** Pozostały czas w ms (0 gdy minęło). */
  total: number;
  /** true gdy promocja minęła. */
  isExpired: boolean;
  /** false podczas SSR i pierwszego renderu klienta — używaj do gatingu UI. */
  mounted: boolean;
};

function diff(targetMs: number, now: number): Omit<Countdown, "mounted"> {
  const total = Math.max(0, targetMs - now);
  const totalSeconds = Math.floor(total / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    total,
    isExpired: total <= 0,
  };
}

// Snapshot serwerowy musi mieć stabilną referencję (wymóg useSyncExternalStore)
// i być identyczny dla SSR oraz pierwszego renderu klienta → mounted:false,
// dzięki czemu komponenty renderują placeholder i nie ma hydration mismatch.
const serverCache = new Map<number, Countdown>();
function getServer(targetMs: number): Countdown {
  let v = serverCache.get(targetMs);
  if (!v) {
    v = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      total: Number.MAX_SAFE_INTEGER,
      isExpired: false,
      mounted: false,
    };
    serverCache.set(targetMs, v);
  }
  return v;
}

function sameTick(a: Countdown, b: Omit<Countdown, "mounted">): boolean {
  return (
    a.days === b.days &&
    a.hours === b.hours &&
    a.minutes === b.minutes &&
    a.seconds === b.seconds &&
    a.isExpired === b.isExpired
  );
}

/**
 * Odlicza czas do `targetIso` (ISO timestamp), tyka co sekundę.
 * Oparte na useSyncExternalStore (hydration-safe, jak useMediaQuery).
 * SSR/pierwszy render → mounted:false; po montażu klienta → realne wartości.
 */
export function useCountdown(targetIso: string): Countdown {
  const targetMs = new Date(targetIso).getTime();
  const cache = useRef<Countdown | null>(null);

  const subscribe = useCallback((onStoreChange: () => void) => {
    const id = window.setInterval(onStoreChange, 1000);
    return () => window.clearInterval(id);
  }, []);

  const getSnapshot = useCallback((): Countdown => {
    const v = diff(targetMs, Date.now());
    const prev = cache.current;
    // Stabilna referencja, gdy wyświetlana wartość się nie zmieniła.
    if (prev && prev.mounted && sameTick(prev, v)) return prev;
    const next: Countdown = { ...v, mounted: true };
    cache.current = next;
    return next;
  }, [targetMs]);

  const getServerSnapshot = useCallback((): Countdown => getServer(targetMs), [targetMs]);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
