import { ReviewCollage } from "@/components/ui/ReviewCollage";
import { Section } from "@/components/ui/Section";
import { copy } from "@/content/copy";

/**
 * Sekcja opinii — zwarty, czytelny układ wyciętych screenshotów.
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

      <ReviewCollage items={textReviews.items} />
    </Section>
  );
}
