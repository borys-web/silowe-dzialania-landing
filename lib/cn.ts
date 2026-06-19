/** Minimalny helper do łączenia klas (bez zależności). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
