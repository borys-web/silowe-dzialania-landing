import { FloatingReviewBubble } from "@/components/ui/FloatingReviewBubble";
import { Section } from "@/components/ui/Section";
import { copy } from "@/content/copy";

/**
 * Sekcja opinii — wycięte screenshoty w spójnej siatce 2×2.
 */
export function TextReviews() {
  const { textReviews } = copy;

  return (
    <Section
      ariaLabel="Opinie uczestników"
      containerClassName="max-w-6xl"
    >
      <div className="max-w-3xl">
        <h2 className="heading-display text-cream">{textReviews.h2}</h2>
        <p className="body-copy mt-4 text-base text-cream/70">{textReviews.intro}</p>
      </div>

      <div
        className="mt-12 grid grid-cols-1 items-end gap-10 sm:mt-14 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:gap-x-10"
        role="list"
        aria-label="Opinie uczestników kursu"
      >
        {textReviews.items.map((item) => (
          <div key={item.src} role="listitem" className="min-w-0">
            <FloatingReviewBubble item={item} />
          </div>
        ))}
      </div>
    </Section>
  );
}
