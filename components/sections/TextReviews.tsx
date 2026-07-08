import { FloatingReviewBubble, reviewLayoutClass } from "@/components/ui/FloatingReviewBubble";
import { Section } from "@/components/ui/Section";
import { copy } from "@/content/copy";
import { cn } from "@/lib/cn";

/**
 * Sekcja opinii — Floating Testimonials: organiczne chmurki wtopione w ciemne tło.
 */
export function TextReviews() {
  const { textReviews } = copy;

  return (
    <Section
      ariaLabel="Opinie uczestników"
      className="surface-ink-flat !overflow-visible"
      containerClassName="max-w-6xl"
    >
      <div className="max-w-3xl">
        <h2 className="heading-display text-cream">{textReviews.h2}</h2>
        <p className="body-copy mt-4 text-base text-cream/70">{textReviews.intro}</p>
      </div>

      <div className="reviews-float mt-12 sm:mt-14">
        <div className="reviews-float__grid" role="list" aria-label="Opinie uczestników kursu">
          {textReviews.items.map((item) => (
            <div
              key={item.src}
              role="listitem"
              className={cn(reviewLayoutClass[item.layout])}
            >
              <FloatingReviewBubble item={item} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
