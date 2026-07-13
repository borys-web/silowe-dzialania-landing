import { Section } from "@/components/ui/Section";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export function Testimonials() {
  const testimonials = [
    {
      name: "Kuba",
      title: "Firma poligraficzna",
      quote: "Przestałem być pracownikiem we własnej firmie.",
      videoId: "RbPGwhnj1rA",
      thumbnailAlt: "Kuba, firma poligraficzna — opinia wideo o pracy z Wiktorem",
    },
    {
      name: "Szymon",
      title: "Firma finansowa",
      quote: "Domyka więcej i odzyskałem czas dla rodziny.",
      videoId: "MHEj8HTgH_I",
      thumbnailAlt: "Szymon, firma finansowa — opinia wideo o pracy z Wiktorem",
    },
  ];

  return (
    <Section
      ariaLabel="Testimoniale video"
      className="bg-ink-elevated/50"
      containerClassName="max-w-6xl"
    >
      <div className="mb-8 max-w-3xl md:mb-10">
        <h2 className="font-display text-3xl font-extrabold tracking-[-0.05em] text-cream md:text-5xl">
          Z kim pracuje Wiktor — i co się u nich zmieniło.
        </h2>
        <p className="body-copy mt-4 text-base text-cream/70 sm:text-lg">
          Efekty pracy z Wiktorem. Ten mini-kurs to jej pierwszy krok.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            name={testimonial.name}
            title={testimonial.title}
            quote={testimonial.quote}
            videoId={testimonial.videoId}
            thumbnailAlt={testimonial.thumbnailAlt}
          />
        ))}
      </div>
    </Section>
  );
}
