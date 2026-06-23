import { cn } from "@/lib/cn";

type PlanningPatternVariant = "hero" | "loop" | "system";

type PlanningPatternProps = {
  variant: PlanningPatternVariant;
  className?: string;
};

const variantOpacity: Record<PlanningPatternVariant, string> = {
  hero: "opacity-[0.03] sm:opacity-[0.05]",
  loop: "opacity-[0.025] sm:opacity-[0.06]",
  system: "opacity-[0.03] sm:opacity-[0.07]",
};

/**
 * Subtelna warstwa tekstury planistycznej — siatka, time blocks, tick marks.
 * Monochromatyczna, outline/blueprint. Czerwień tylko jako mikroakcent.
 */
export function PlanningPattern({ variant, className }: PlanningPatternProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        variantOpacity[variant],
        className,
      )}
    >
      {/* Bazowa siatka operacyjna */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            variant === "hero"
              ? "linear-gradient(rgba(244,240,232,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(244,240,232,0.35) 1px, transparent 1px)"
              : variant === "loop"
                ? "linear-gradient(rgba(47,124,255,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(47,124,255,0.28) 1px, transparent 1px)"
                : "linear-gradient(rgba(244,240,232,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(244,240,232,0.3) 1px, transparent 1px)",
          backgroundSize:
            variant === "hero"
              ? "clamp(32px, 5vw, 48px) clamp(32px, 5vw, 48px)"
              : variant === "loop"
                ? "clamp(28px, 4vw, 36px) clamp(28px, 4vw, 36px)"
                : "clamp(24px, 3.5vw, 32px) clamp(24px, 3.5vw, 32px)",
        }}
      />

      {variant === "hero" && <HeroPattern />}
      {variant === "loop" && <LoopPattern />}
      {variant === "system" && <SystemPattern />}
    </div>
  );
}

function HeroPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="80" y="120" width="14" height="14" rx="2" stroke="rgba(244,240,232,0.45)" strokeWidth="0.75" />
      <path d="M84 127l3 3 6-6" stroke="rgba(225,29,46,0.55)" strokeWidth="0.85" strokeLinecap="round" strokeLinejoin="round" />

      <g className="hidden sm:contents">
        <rect x="320" y="280" width="12" height="12" rx="1.5" stroke="rgba(244,240,232,0.35)" strokeWidth="0.65" />
        <rect x="140" y="420" width="72" height="28" rx="3" stroke="rgba(244,240,232,0.3)" strokeWidth="0.65" />
        <line x1="100" y1="560" x2="420" y2="560" stroke="rgba(244,240,232,0.25)" strokeWidth="0.5" />
        <line x1="200" y1="560" x2="200" y2="556" stroke="rgba(244,240,232,0.3)" strokeWidth="0.5" />
        <line x1="300" y1="560" x2="300" y2="554" stroke="rgba(244,240,232,0.35)" strokeWidth="0.65" />
      </g>

      <g className="hidden md:contents">
        <rect x="560" y="180" width="14" height="14" rx="2" stroke="rgba(47,124,255,0.35)" strokeWidth="0.65" />
        <text x="720" y="520" fill="rgba(244,240,232,0.22)" fontSize="11" fontFamily="ui-monospace, monospace">
          01
        </text>
      </g>

      <g className="hidden lg:contents">
        <rect x="680" y="340" width="88" height="32" rx="3" stroke="rgba(47,124,255,0.28)" strokeWidth="0.65" />
        <text x="820" y="620" fill="rgba(47,124,255,0.2)" fontSize="10" fontFamily="ui-monospace, monospace">
          02
        </text>
      </g>

      <line x1="100" y1="560" x2="100" y2="554" stroke="rgba(244,240,232,0.35)" strokeWidth="0.65" />
    </svg>
  );
}

function LoopPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="60" y1="140" x2="60" y2="128" stroke="rgba(244,240,232,0.35)" strokeWidth="0.65" />
      <line x1="120" y1="140" x2="120" y2="132" stroke="rgba(244,240,232,0.28)" strokeWidth="0.5" />
      <path d="M57 134l2.5 2.5 5-5" stroke="rgba(225,29,46,0.5)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="520" cy="196" r="1.5" fill="rgba(225,29,46,0.45)" />
      <text x="520" y="200" fill="rgba(244,240,232,0.18)" fontSize="10" fontFamily="ui-monospace, monospace">
        01
      </text>

      <g className="hidden sm:contents">
        <circle cx="180" cy="320" r="72" stroke="rgba(47,124,255,0.32)" strokeWidth="0.75" strokeDasharray="6 8" />
        <line x1="180" y1="140" x2="180" y2="128" stroke="rgba(244,240,232,0.35)" strokeWidth="0.65" />
        <line x1="240" y1="140" x2="240" y2="132" stroke="rgba(244,240,232,0.28)" strokeWidth="0.5" />
        <line x1="700" y1="580" x2="700" y2="572" stroke="rgba(47,124,255,0.3)" strokeWidth="0.5" />
        <text x="580" y="200" fill="rgba(244,240,232,0.15)" fontSize="10" fontFamily="ui-monospace, monospace">
          02
        </text>
      </g>

      <g className="hidden md:contents">
        <line x1="300" y1="140" x2="300" y2="128" stroke="rgba(244,240,232,0.35)" strokeWidth="0.65" />
        <line x1="760" y1="580" x2="760" y2="576" stroke="rgba(47,124,255,0.25)" strokeWidth="0.45" />
        <line x1="820" y1="580" x2="820" y2="572" stroke="rgba(47,124,255,0.3)" strokeWidth="0.5" />
        <path
          d="M420 520 C520 460, 620 580, 720 520"
          stroke="rgba(244,240,232,0.2)"
          strokeWidth="0.65"
          strokeDasharray="3 6"
        />
        <text x="640" y="200" fill="rgba(244,240,232,0.18)" fontSize="10" fontFamily="ui-monospace, monospace">
          03
        </text>
      </g>

      <g className="hidden lg:contents">
        <circle cx="980" cy="480" r="56" stroke="rgba(244,240,232,0.22)" strokeWidth="0.65" strokeDasharray="4 7" />
        <text x="700" y="200" fill="rgba(47,124,255,0.16)" fontSize="10" fontFamily="ui-monospace, monospace">
          04
        </text>
      </g>
    </svg>
  );
}

function SystemPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="hidden sm:contents">
        <rect x="80" y="160" width="120" height="36" rx="3" stroke="rgba(47,124,255,0.28)" strokeWidth="0.65" />
        <rect x="80" y="210" width="96" height="28" rx="3" stroke="rgba(244,240,232,0.22)" strokeWidth="0.6" />
        <rect x="220" y="168" width="12" height="12" rx="2" stroke="rgba(244,240,232,0.35)" strokeWidth="0.65" />
        <path d="M223 174l2.5 2.5 5-5" stroke="rgba(225,29,46,0.55)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
        <text x="248" y="176" fill="rgba(244,240,232,0.2)" fontSize="9" fontFamily="ui-monospace, monospace">
          01
        </text>
      </g>

      <g className="hidden md:contents">
        <rect x="80" y="252" width="108" height="32" rx="3" stroke="rgba(244,240,232,0.2)" strokeWidth="0.6" />
        <rect x="220" y="216" width="12" height="12" rx="2" stroke="rgba(244,240,232,0.3)" strokeWidth="0.6" />
        <rect x="220" y="260" width="12" height="12" rx="2" stroke="rgba(47,124,255,0.28)" strokeWidth="0.6" />
        <rect x="860" y="80" width="140" height="110" rx="4" stroke="rgba(244,240,232,0.25)" strokeWidth="0.65" />
        <line x1="860" y1="108" x2="1000" y2="108" stroke="rgba(244,240,232,0.2)" strokeWidth="0.5" />
        <text x="248" y="224" fill="rgba(244,240,232,0.18)" fontSize="9" fontFamily="ui-monospace, monospace">
          02
        </text>
        <text x="248" y="268" fill="rgba(47,124,255,0.18)" fontSize="9" fontFamily="ui-monospace, monospace">
          03
        </text>
      </g>

      <g className="hidden lg:contents">
        <line x1="908" y1="108" x2="908" y2="190" stroke="rgba(244,240,232,0.15)" strokeWidth="0.45" />
        <line x1="956" y1="108" x2="956" y2="190" stroke="rgba(244,240,232,0.15)" strokeWidth="0.45" />
        <line x1="640" y1="640" x2="1080" y2="640" stroke="rgba(47,124,255,0.22)" strokeWidth="0.5" />
        <rect x="660" y="618" width="48" height="22" rx="2" stroke="rgba(244,240,232,0.22)" strokeWidth="0.55" />
        <rect x="740" y="618" width="56" height="22" rx="2" stroke="rgba(244,240,232,0.2)" strokeWidth="0.55" />
        <rect x="828" y="618" width="44" height="22" rx="2" stroke="rgba(47,124,255,0.22)" strokeWidth="0.55" />
        <line x1="828" y1="629" x2="848" y2="629" stroke="rgba(225,29,46,0.45)" strokeWidth="1" />
        <text x="1040" y="760" fill="rgba(244,240,232,0.16)" fontSize="10" fontFamily="ui-monospace, monospace">
          04
        </text>
      </g>
    </svg>
  );
}
