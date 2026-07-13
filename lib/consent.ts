/**
 * Zgoda cookie (RODO/ePrivacy) - jedno źródło prawdy w localStorage.
 * Kategoria "niezbędne" jest zawsze aktywna; przechowujemy tylko wybór marketingowy.
 */

export type Consent = { v: 1; ts: string; marketing: boolean };

const STORAGE_KEY = "cookie-consent-v1";
const CONSENT_VERSION = 1 as const;
/** Zgoda starsza niż 12 miesięcy wymaga odnowienia. */
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export const OPEN_COOKIE_SETTINGS_EVENT = "cookie-settings:open";

export function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Consent>;
    if (parsed.v !== CONSENT_VERSION) return null;
    if (typeof parsed.marketing !== "boolean" || typeof parsed.ts !== "string") {
      return null;
    }
    const age = Date.now() - new Date(parsed.ts).getTime();
    if (!Number.isFinite(age) || age > MAX_AGE_MS) return null;
    return { v: CONSENT_VERSION, ts: parsed.ts, marketing: parsed.marketing };
  } catch {
    return null;
  }
}

export function saveConsent(marketing: boolean): Consent {
  const consent: Consent = {
    v: CONSENT_VERSION,
    ts: new Date().toISOString(),
    marketing,
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // localStorage niedostępny (np. tryb prywatny) - zgoda obowiązuje w tej sesji
  }
  return consent;
}

export function hasMarketingConsent(): boolean {
  return readConsent()?.marketing === true;
}

/** Otwiera warstwę "Ustawienia" banera (np. z linku w stopce). */
export function openCookieSettings() {
  window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT));
}
