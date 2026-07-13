import OpinieChat from "@/components/OpinieChat";
import { CtaButton } from "@/components/ui/CtaButton";
import { Section } from "@/components/ui/Section";
import { ctaAriaLabel, PURCHASE_URL, withPrice } from "@/config/offer";
import { copy } from "@/content/copy";

/**
 * Sekcja opinii — dymki czatu (wierna rekonstrukcja wiadomości uczestników).
 */
export function TextReviews() {
  const { textReviews } = copy;

  return (
    <Section
      ariaLabel="Opinie uczestników"
      containerClassName="max-w-5xl"
    >
      <header className="max-w-2xl">
        <h2 className="heading-display text-cream">{textReviews.h2}</h2>
        <p className="body-copy mt-4 text-base text-cream/70 sm:mt-5 sm:text-lg">
          {textReviews.intro}
        </p>
        <p className="mt-3 text-xs text-cream/60">{textReviews.disclaimer}</p>
      </header>

      <div className="mt-10 sm:mt-14">
        <OpinieChat />
      </div>

      <div className="mt-12 sm:mt-16">
        <CtaButton href={PURCHASE_URL} ariaLabel={ctaAriaLabel()}>
          {withPrice(textReviews.cta)}
        </CtaButton>
      </div>
    </Section>
  );
}
