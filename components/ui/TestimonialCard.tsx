"use client";

import type { ComponentProps } from "react";
import { motion } from "framer-motion";
import type { Testimonial } from "@/content/copy";
import { cn } from "@/lib/cn";
import { TestimonialVideo } from "@/components/ui/TestimonialVideo";

type TestimonialCardProps = {
  testimonial: Testimonial;
  variants?: ComponentProps<typeof motion.li>["variants"];
};

function phClass(active: boolean, real: string, placeholder: string) {
  return active ? placeholder : real;
}

export function TestimonialCard({ testimonial: t, variants }: TestimonialCardProps) {
  const ph = t.placeholder === true;

  return (
    <motion.li variants={variants} className="flex h-full flex-col">
      <TestimonialVideo
        videoId={t.videoId}
        title={`Testimonial — ${t.name}`}
        placeholder={ph}
      />

      <p
        className={cn(
          "mt-4 font-display text-lg font-bold tracking-tight sm:text-xl",
          phClass(ph, "text-ink", "italic text-ink/45"),
        )}
      >
        {t.name}
      </p>

      <p
        className={cn(
          "mt-1 text-xs underline decoration-ink/20 underline-offset-[3px] sm:text-sm",
          phClass(ph, "text-muted-light", "italic text-ink/40"),
        )}
      >
        {t.companyType}
      </p>

      <p
        className={cn(
          "mt-4 font-display text-base font-bold leading-snug tracking-tight sm:text-[1.05rem]",
          phClass(ph, "text-ink", "italic text-ink/45"),
        )}
      >
        {t.headline}
      </p>

      <p className="mt-4 text-sm leading-relaxed">
        <span className="font-bold text-red">Przed:</span>{" "}
        <span className={phClass(ph, "text-muted-light", "italic text-ink/40")}>
          {t.before}
        </span>
      </p>

      <p className="mt-2 text-sm leading-relaxed">
        <span className="font-bold text-ink">Po:</span>{" "}
        <span className={phClass(ph, "text-muted-light", "italic text-ink/40")}>
          {t.after}
        </span>
      </p>
    </motion.li>
  );
}
