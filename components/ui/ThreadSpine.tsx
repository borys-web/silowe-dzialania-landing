"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * Motyw przewodni — „nić niedomkniętych spraw".
 * Pionowa nić na lewym marginesie (desktop ≥ lg). W miarę scrolla domyka się:
 * tor jest PRZERYWANY i szary (otwarte sprawy / chaos), a wraz z postępem narasta od góry
 * CZERWONA, ciągła linia (kolor marki = „domknięte / system"). Wędrujący węzeł-głowa
 * (czerwony, świecący) = „pierwszy ruch". Czerwień jest czytelna i na ciemnych, i na jasnych
 * sekcjach, więc nie potrzebujemy mix-blend.
 *
 * Wyłączona na mobile (czystość + wydajność). prefers-reduced-motion → nić w pełni
 * domknięta i statyczna (zero ruchu sterowanego scrollem).
 */

const NODES = [0, 0.25, 0.5, 0.75, 1];

export function ThreadSpine() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  const fillScaleY = reduce ? 1 : smooth;
  const headTop = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-7 top-[18vh] z-30 hidden h-[64vh] w-4 lg:block"
    >
      <div className="relative mx-auto h-full w-px">
        {/* Tor otwarty — przerywana, szara nić (niedomknięte sprawy) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(150,150,150,0.5) 0 3px, transparent 3px 9px)",
          }}
        />

        {/* Nić domknięta — ciągła, CZERWONA, narasta od góry wraz ze scrollem */}
        <motion.div
          className="absolute inset-x-0 top-0 h-full origin-top bg-red"
          style={{ scaleY: fillScaleY }}
        />

        {/* Węzły systemu */}
        {NODES.map((pos) => (
          <span
            key={pos}
            className="absolute left-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-muted-light/70"
            style={{ top: `${pos * 100}%` }}
          />
        ))}

        {/* Głowa — wędrujący, świecący węzeł na styku „domknięte / otwarte" */}
        {!reduce && (
          <motion.span
            className="absolute left-1/2 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red shadow-[0_0_12px_3px_rgba(209,26,42,0.7)]"
            style={{ top: headTop }}
          />
        )}
      </div>
    </div>
  );
}
