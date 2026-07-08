"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import { SPRING_HOUSE, VIEWPORT_ONCE } from "@/lib/motion";
import type { FloatingReviewItem } from "@/components/ui/FloatingReviewBubble";

type ReviewCollageProps = {
  items: FloatingReviewItem[];
};

const COLUMNS: [number, number][] = [
  [0, 2],
  [1, 3],
];

const COLUMN_ALIGN = ["sm:items-end", "sm:items-start"] as const;

const TILE_WIDTH = ["w-[92%] sm:w-full", "w-[88%] sm:w-full"] as const;

function reviewEnterVariant(index: number, reduce: boolean): Variants {
  const delay = index * 0.08;

  if (reduce) {
    return {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { duration: 0.35, delay },
      },
    };
  }

  return {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { ...SPRING_HOUSE, delay },
    },
  };
}

/** Opinie — dwie zwarte kolumny, maksymalnie blisko, w pełni czytelne. */
export function ReviewCollage({ items }: ReviewCollageProps) {
  const reduce = useReducedMotion() ?? false;

  return (
    <div
      className="review-collage mx-auto mt-8 w-full max-w-2xl sm:mt-10 sm:max-w-3xl"
      role="list"
      aria-label="Opinie uczestników kursu"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-x-0">
        {COLUMNS.map((indices, columnIndex) => (
          <div
            key={columnIndex}
            className={cn(
              "flex w-full flex-col gap-3 sm:w-1/2 sm:gap-2",
              COLUMN_ALIGN[columnIndex],
            )}
          >
            {indices.map((itemIndex) => {
              const item = items[itemIndex];
              if (!item) return null;

              return (
                <motion.figure
                  key={item.src}
                  role="listitem"
                  className="flex w-full items-end justify-center sm:justify-stretch"
                  variants={reviewEnterVariant(itemIndex, reduce)}
                  initial="hidden"
                  whileInView="show"
                  viewport={VIEWPORT_ONCE}
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          y: -3,
                          transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                        }
                  }
                >
                  <div
                    className={cn(
                      "review-tile",
                      TILE_WIDTH[columnIndex] ?? "w-[90%] sm:w-full",
                    )}
                    style={
                      {
                        "--review-rotate": `${item.rotate}deg`,
                      } as CSSProperties
                    }
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      unoptimized
                      sizes="(max-width: 640px) 88vw, 22rem"
                      className="h-auto w-full select-none"
                      draggable={false}
                    />
                  </div>
                </motion.figure>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
