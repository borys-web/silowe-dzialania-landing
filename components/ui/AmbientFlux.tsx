"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";

export function AmbientFlux() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (!isDesktop) {
    return (
      <div
        ref={ref}
        className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-b from-ink via-ink/95 to-ink"
      />
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        translateX: "-50%",
        y,
        width: "400px",
        height: "400px",
        background:
          "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
        filter: "blur(80px)",
        zIndex: -20,
        pointerEvents: "none",
      }}
    />
  );
}
