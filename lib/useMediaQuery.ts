"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Zwraca true, gdy media query pasuje. Używa useSyncExternalStore — bez setState
 * w efekcie i bez hydration mismatch (snapshot serwerowy = false).
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    [query],
  );

  const getSnapshot = () => window.matchMedia(query).matches;
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Desktop = min-width 768px (parallax/scroll-scrubbing tylko tutaj). */
export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 768px)");
}
