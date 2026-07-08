import { ReviewScreenshot } from "@/components/ui/ReviewScreenshot";
import { Section } from "@/components/ui/Section";
import { copy } from "@/content/copy";

/**
 * Sekcja opinii — oryginalne screenshoty wiadomości w jednym wierszu.
 */
export function TextReviews() {
  const { textReviews } = copy;

  return (
    <Section
      ariaLabel="Opinie uczestników"
      className="surface-ink-flat overflow-hidden"
      containerClassName="max-w-7xl"
    >
      <div className="max-w-3xl">
        <h2 className="heading-display text-cream">{textReviews.h2}</h2>
        <p className="body-copy mt-4 text-base text-cream/70">{textReviews.intro}</p>
      </div>

      <div
        className="mt-10 -mx-5 flex items-end gap-4 overflow-x-auto px-5 pb-1 scroll-smooth snap-x snap-mandatory [scrollbar-width:thin] sm:-mx-8 sm:gap-5 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:px-0"
        role="list"
        aria-label="Screenshoty opinii uczestników"
      >
        {textReviews.items.map((item) => (
          <div key={item.src} role="listitem" className="lg:flex lg:justify-center">
            <ReviewScreenshot
              src={item.src}
              width={item.width}
              height={item.height}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
