import type { CSSProperties } from "react";
import Image from "next/image";

export type FloatingReviewItem = {
  src: string;
  width: number;
  height: number;
  alt: string;
  rotate: number;
  layout: "a" | "b" | "c" | "d";
};

export const reviewLayoutClass: Record<FloatingReviewItem["layout"], string> = {
  a: "reviews-float__item--a",
  b: "reviews-float__item--b",
  c: "reviews-float__item--c",
  d: "reviews-float__item--d",
};

type FloatingReviewBubbleProps = {
  item: FloatingReviewItem;
};

/** Wycięty screenshot opinii (bańka + awatar) — bez tła, w organicznym układzie. */
export function FloatingReviewBubble({ item }: FloatingReviewBubbleProps) {
  return (
    <figure
      className="reviews-float__bubble reviews-float__bubble--image"
      style={{ "--review-rotate": `${item.rotate}deg` } as CSSProperties}
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        unoptimized
        sizes="(max-width: 768px) 88vw, 28vw"
        className="h-auto w-full"
      />
    </figure>
  );
}
