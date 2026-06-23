"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function RedThread() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Opacity: 0.1 (góra) -> 0.6 (dół)
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.6]);

  return (
    <motion.svg
      ref={ref}
      style={{
        position: "fixed",
        left: "24px",
        top: 0,
        height: "100vh",
        width: "2px",
        opacity,
        zIndex: -1,
        pointerEvents: "none",
      }}
      viewBox="0 0 2 10000"
      preserveAspectRatio="none"
    >
      <line
        x1="1"
        y1="0"
        x2="1"
        y2="10000"
        stroke="url(#redThreadGradient)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient id="redThreadGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a0a10" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#7a0f18" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#d11a2a" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
