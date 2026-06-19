"use client";

import { useState } from "react";
import Image from "next/image";

type TestimonialVideoProps = {
  /** YouTube video ID, np. "RbPGwhnj1rA". */
  videoId?: string;
  title: string;
  placeholder?: boolean;
};

function PlayIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="ml-0.5 size-5 fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 5.14v13.72L19 12 8 5.14z" />
    </svg>
  );
}

/**
 * Embed testimonialu — kwadrat 1:1, rogi 12px.
 * Facade: miniatura + play; iframe YouTube dopiero po kliknięciu (LCP / Meta in-app).
 */
export function TestimonialVideo({
  videoId,
  title,
  placeholder = false,
}: TestimonialVideoProps) {
  const [active, setActive] = useState(false);
  const showEmbed = !placeholder && videoId;

  if (!showEmbed) {
    return (
      <div
        className="relative aspect-square w-full overflow-hidden rounded-[12px] bg-ink/[0.06]"
        aria-label={`${title} — wideo do uzupełnienia`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
          <span className="flex size-12 items-center justify-center rounded-full bg-ink text-cream">
            <PlayIcon />
          </span>
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-light">
            Wideo
          </span>
        </div>
      </div>
    );
  }

  if (!active) {
    return (
      <button
        type="button"
        onClick={() => setActive(true)}
        className="group relative aspect-square w-full overflow-hidden rounded-[12px] bg-ink text-left"
        aria-label={`Odtwórz wideo: ${title}`}
      >
        <Image
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 384px"
          className="object-cover"
        />
        <span className="absolute inset-0 bg-ink/15 transition-colors group-hover:bg-ink/25" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-red text-cream shadow-[0_0_14px_rgba(209,26,42,0.45)] transition-transform group-hover:scale-105">
            <PlayIcon />
          </span>
        </span>
      </button>
    );
  }

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[12px] bg-ink">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
