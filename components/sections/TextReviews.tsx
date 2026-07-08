import { ReviewBubble } from "@/components/ui/ReviewBubble";
import { Section } from "@/components/ui/Section";
import { copy } from "@/content/copy";

/**
 * Sekcja opinii tekstowych — bańki wiadomości po sekcji „4 lekcje".
 */
export function TextReviews() {
  const { textReviews } = copy;

  return (
    <Section
      ariaLabel="Opinie uczestników"
      className="surface-ink-flat"
      containerClassName="max-w-6xl"
    >
      <div className="max-w-3xl">
        <h2 className="heading-display text-cream">{textReviews.h2}</h2>
        <p className="body-copy mt-4 text-base text-cream/70">{textReviews.intro}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        {textReviews.items.map((item, index) => (
          <ReviewBubble
            key={item.avatar}
            avatar={item.avatar}
            paragraphs={item.paragraphs}
            className={index % 2 === 1 ? "md:mt-8" : undefined}
          />
        ))}
      </div>
    </Section>
  );
}
