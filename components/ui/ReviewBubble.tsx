import Image from "next/image";
import { cn } from "@/lib/cn";

type ReviewBubbleProps = {
  avatar: string;
  paragraphs: readonly string[];
  className?: string;
};

/**
 * Bańka opinii w stylu wiadomości — dopasowana do ciemnego UI strony.
 */
export function ReviewBubble({ avatar, paragraphs, className }: ReviewBubbleProps) {
  return (
    <article
      className={cn(
        "flex flex-col gap-3",
        className,
      )}
    >
      <div className="glass-panel relative rounded-2xl rounded-bl-md px-5 py-5 sm:px-6 sm:py-6">
        <div className="space-y-3 text-[0.95rem] leading-[1.72] text-cream/88 sm:text-base">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 pl-1">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/12 bg-ink-soft">
          <Image
            src={avatar}
            alt=""
            fill
            unoptimized
            sizes="40px"
            className="object-cover object-left-bottom scale-[2.8] origin-bottom-left"
          />
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-cream/45">
          Uczestnik kursu
        </span>
      </div>
    </article>
  );
}
