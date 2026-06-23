"use client";

import type { ComponentProps } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Testimonial } from "@/content/copy";
import { cn } from "@/lib/cn";

type DirectTestimonialCardProps = {
  name: string;
  title: string;
  quote: string;
  videoId: string;
  videoUrl: string;
};

type CopyTestimonialCardProps = {
  testimonial: Testimonial;
  variants?: ComponentProps<typeof motion.article>["variants"];
};

type TestimonialCardProps =
  | DirectTestimonialCardProps
  | CopyTestimonialCardProps;

function PlayIcon() {
  return (
    <svg
      aria-hidden
      className="ml-1 h-6 w-6 text-white"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
    </svg>
  );
}

export function TestimonialCard(props: TestimonialCardProps) {
  const fromCopy = "testimonial" in props;
  const variants = fromCopy ? props.variants : undefined;
  const placeholder = fromCopy ? props.testimonial.placeholder === true : false;
  const videoId = fromCopy ? props.testimonial.videoId : props.videoId;
  const videoUrl = fromCopy
    ? videoId
      ? `https://www.youtube.com/watch?v=${videoId}`
      : undefined
    : props.videoUrl;
  const name = fromCopy ? props.testimonial.name : props.name;
  const title = fromCopy ? props.testimonial.companyType : props.title;
  const quote = fromCopy ? props.testimonial.headline : props.quote;

  return (
    <motion.article
      variants={variants}
      initial={fromCopy ? undefined : { opacity: 0, y: 20 }}
      whileInView={fromCopy ? undefined : { opacity: 1, y: 0 }}
      viewport={fromCopy ? undefined : { once: true, margin: "-80px" }}
      transition={fromCopy ? undefined : { duration: 0.5 }}
      whileHover={{ scale: 1.015 }}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-soft/60 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-md transition-colors hover:border-white/20"
    >
      {videoUrl && videoId && !placeholder ? (
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-video w-full overflow-hidden bg-ink-elevated"
        >
          <Image
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt={`${name} - testimonial video`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover saturate-[0.9] transition-transform duration-300 group-hover:scale-105"
          />
          {/* Ciemny overlay 30% — żeby żółte miniatury YT nie „krzyczały" */}
          <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red shadow-[0_0_24px_rgba(209,26,42,0.42)] transition-transform group-hover:scale-110">
              <PlayIcon />
            </span>
          </span>
        </a>
      ) : (
        <div className="relative aspect-video w-full overflow-hidden bg-ink-elevated">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-cream/45">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink">
              <PlayIcon />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.16em]">
              Wideo
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3
          className={cn(
            "font-display text-lg font-bold tracking-tighter sm:text-xl",
            placeholder ? "italic text-cream/45" : "text-cream",
          )}
        >
          {name}
        </h3>

        <p
          className={cn(
            "mt-1 text-sm text-cream-soft",
            placeholder && "italic text-cream/40",
          )}
        >
          {title}
        </p>

        <blockquote
          className={cn(
            "mt-4 border-l-2 border-red pl-4 text-base font-medium italic leading-relaxed text-cream",
            placeholder && "text-cream/45",
          )}
        >
          &ldquo;{quote}&rdquo;
        </blockquote>

        {videoUrl && !placeholder && (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-fit items-center text-sm font-semibold text-red underline-offset-4 transition-colors hover:text-red-hover hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
          >
            Obejrzyj 2-minutowy fragment →
          </a>
        )}
      </div>
    </motion.article>
  );
}
