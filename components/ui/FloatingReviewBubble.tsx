import type { CSSProperties } from "react";
import Image from "next/image";

export type FloatingReviewItem = {
  name: string;
  avatar: string;
  avatarPosition?: string;
  rotate: number;
  layout: "a" | "b" | "c" | "d";
  paragraphs: readonly string[];
};

export const reviewLayoutClass: Record<FloatingReviewItem["layout"], string> = {
  a: "reviews-float__item--a",
  b: "reviews-float__item--b",
  c: "reviews-float__item--c",
  d: "reviews-float__item--d",
};

function HighlightedText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-semibold text-cream">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

type FloatingReviewBubbleProps = {
  item: FloatingReviewItem;
};

/** Miękka chmurka opinii — glassmorphism wtopiona w ciemne tło. */
export function FloatingReviewBubble({ item }: FloatingReviewBubbleProps) {
  return (
    <article
      className="reviews-float__bubble"
      style={{ "--review-rotate": `${item.rotate}deg` } as CSSProperties}
    >
      <div className="reviews-float__bubble-body space-y-3 text-[0.94rem] font-normal leading-[1.6] text-cream/90 sm:text-[0.98rem]">
        {item.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>
            <HighlightedText text={paragraph} />
          </p>
        ))}
      </div>

      <footer className="mt-5 flex items-center gap-2.5">
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/[0.04]">
          <Image
            src={item.avatar}
            alt=""
            fill
            unoptimized
            sizes="36px"
            className="object-cover scale-[2.6] origin-bottom-left"
            style={{ objectPosition: item.avatarPosition ?? "12% 92%" }}
          />
        </div>
        <span className="text-xs font-medium tracking-wide text-cream/42">
          {item.name}
        </span>
      </footer>
    </article>
  );
}
