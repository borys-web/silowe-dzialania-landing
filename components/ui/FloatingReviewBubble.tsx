import type { CSSProperties } from "react";
import Image from "next/image";

export type FloatingReviewItem = {
  src: string;
  width: number;
  height: number;
  alt: string;
  rotate: number;
};

type FloatingReviewBubbleProps = {
  item: FloatingReviewItem;
};

/** Wycięty screenshot opinii — 30% oryginalnego rozmiaru, lekki kąt. */
export function FloatingReviewBubble({ item }: FloatingReviewBubbleProps) {
  return (
    <figure className="flex w-full items-end justify-center">
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        unoptimized
        sizes="(max-width: 640px) 28vw, 14vw"
        className="review-screenshot h-auto w-[30%] max-w-none select-none"
        style={
          {
            "--review-rotate": `${item.rotate}deg`,
          } as CSSProperties
        }
      />
    </figure>
  );
}
