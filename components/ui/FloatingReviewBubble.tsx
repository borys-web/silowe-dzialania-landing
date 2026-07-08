import Image from "next/image";

export type FloatingReviewItem = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type FloatingReviewBubbleProps = {
  item: FloatingReviewItem;
};

/** Wycięty screenshot opinii — pełna rozdzielczość, bez obrotu. */
export function FloatingReviewBubble({ item }: FloatingReviewBubbleProps) {
  return (
    <figure className="flex w-full items-end justify-center">
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        unoptimized
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
        className="h-auto w-full max-w-full"
      />
    </figure>
  );
}
