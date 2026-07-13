"use client";

import { openCookieSettings } from "@/lib/consent";

/** Link w stopce otwierający ponownie ustawienia zgód cookie. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      Ustawienia cookies
    </button>
  );
}
