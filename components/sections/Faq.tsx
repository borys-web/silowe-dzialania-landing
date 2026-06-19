"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useId, useState } from "react";
import { CtaButton } from "@/components/ui/CtaButton";
import { cn } from "@/lib/cn";
import { copy } from "@/content/copy";
import { siteConfig, withPrice } from "@/content/site.config";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { EASE_HOUSE, VIEWPORT_ONCE } from "@/lib/motion";

/**
 * Sekcja 9 — FAQ / obiekcje (ciemna).
 * Cel: zdjąć ostatnie racjonalne bariery przed CTA.
 * Accordion: jedno pytanie otwarte naraz; domyślnie otwarte pierwsze (najmocniejsza obiekcja:
 * „naciąganie" — od razu rozbrojona, sygnalizuje transparentność, zwiększa zaangażowanie).
 * Odpowiedź: height 0→auto + fade (~280ms), chevron rotate 0→180°.
 * prefers-reduced-motion → bez animacji wysokości/rotacji, czysty fade.
 */

type AccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  reduce: boolean;
};

function AccordionItem({ question, answer, isOpen, onToggle, reduce }: AccordionItemProps) {
  const id = useId();

  return (
    <div
      className={cn(
        "-ml-4 border-b border-b-white/10 border-l-2 border-l-transparent pl-4 transition-colors duration-200",
        isOpen && "border-l-red bg-white/[0.03]",
      )}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
        >
          <span className="text-base font-semibold leading-snug text-cream sm:text-lg">
            {question}
          </span>
          <motion.span
            aria-hidden
            animate={reduce ? undefined : { rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-cream"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </motion.span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="panel"
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-button`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: 0.28, ease: "easeInOut" }
            }
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 pr-10 text-base leading-relaxed text-cream/75">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const { faq } = copy;
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const header: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_HOUSE } },
      };

  const list: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0.05 : 0.08 } },
  };
  const row: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_HOUSE } },
      };

  return (
    <section
      aria-label="Pytania, które na pewno masz"
      className="surface-ink-flat w-full px-5 py-24 text-cream sm:px-8 sm:py-32"
    >
      <div className="mx-auto w-full max-w-3xl">
        <SectionKicker index="08" label="Pytania" theme="dark" />
        <motion.h2
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
        >
          {faq.h2}
        </motion.h2>

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-10 border-t border-white/10"
        >
          {faq.items.map((item, i) => (
            <motion.div key={item.question} variants={row}>
              <AccordionItem
                question={item.question}
                answer={withPrice(item.answer)}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex((prev) => (prev === i ? null : i))}
                reduce={reduce ?? false}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-12"
        >
          <CtaButton href={siteConfig.cta.primaryHref}>{faq.cta}</CtaButton>
        </motion.div>
      </div>
    </section>
  );
}
