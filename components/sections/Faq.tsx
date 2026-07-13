"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useId, useState } from "react";
import { CtaButton } from "@/components/ui/CtaButton";
import { cn } from "@/lib/cn";
import { copy } from "@/content/copy";
import {
  ctaAriaLabel,
  PURCHASE_URL,
  withPrice,
} from "@/config/offer";
import { EASE_HOUSE, VIEWPORT_ONCE } from "@/lib/motion";

/**
 * Sekcja 9 — FAQ / obiekcje (ciemna).
 * Accordion: domyślnie otwarte pierwsze dwa pytania (najmocniejsze obiekcje).
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
        isOpen && "border-l-red bg-white/[0.02]",
      )}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex w-full items-center justify-between gap-5 py-8 text-left transition-colors hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
        >
          <span className="text-base font-semibold leading-snug text-cream sm:text-lg">
            {question}
          </span>
          <motion.span
            aria-hidden
            animate={reduce ? undefined : { rotate: isOpen ? 180 : 0 }}
            transition={
              reduce ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 30 }
            }
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-cream"
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
                : { type: "spring", stiffness: 380, damping: 34, mass: 0.85 }
            }
            className="overflow-hidden"
          >
            <p className="faq-answer pb-9 pr-12 text-base leading-[1.75]">
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
  const [openIndices, setOpenIndices] = useState<Set<number>>(
    () => new Set([0, 1]),
  );

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
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: EASE_HOUSE } },
      };

  return (
    <section
      aria-label="Pytania, które na pewno masz"
      className="section-shell surface-ink-flat w-full px-5 py-20 text-cream sm:px-8 sm:py-32"
    >
      <div className="mx-auto w-full max-w-3xl">
        <motion.h2
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="heading-display"
        >
          {faq.h2}
        </motion.h2>

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="glass-panel mt-10 overflow-hidden rounded-2xl px-6 sm:px-9"
        >
          {faq.items.map((item, i) => (
            <motion.div key={item.question} variants={row}>
              <AccordionItem
                question={item.question}
                answer={withPrice(item.answer)}
                isOpen={openIndices.has(i)}
                onToggle={() =>
                  setOpenIndices((prev) => {
                    const next = new Set(prev);
                    if (next.has(i)) next.delete(i);
                    else next.add(i);
                    return next;
                  })
                }
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
          <CtaButton href={PURCHASE_URL} ariaLabel={ctaAriaLabel()}>
            {withPrice(faq.cta)}
          </CtaButton>
        </motion.div>
      </div>
    </section>
  );
}
