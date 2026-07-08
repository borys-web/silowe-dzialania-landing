import Link from "next/link";
import { siteConfig } from "@/content/site.config";

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="min-h-dvh bg-ink text-cream">
      <header className="border-b border-white/10 px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold text-cream/70 transition-colors hover:text-cream"
          >
            ← Strona główna
          </Link>
          <p className="text-sm text-cream/50">{siteConfig.name}</p>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-cream sm:text-4xl">
          Polityka prywatności
        </h1>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-cream/80">
          <p className="rounded-xl border border-red/30 bg-red/10 px-4 py-3 font-semibold text-red">
            TODO: wkleić treść dokumentu polityki prywatności.
          </p>
          <p>
            Ta strona jest placeholderem przygotowanym pod finalną treść polityki
            prywatności mini-kursu {siteConfig.name}.
          </p>
        </div>
      </main>
    </div>
  );
}
