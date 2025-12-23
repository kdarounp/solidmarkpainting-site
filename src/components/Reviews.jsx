import SectionHeading from "./SectionHeading";
import { Button, Container, Stars } from "./ui.jsx";

export default function Reviews({ section, reviews, callLabel, phoneHref }) {
  return (
    <section id="reviews" className="py-16 sm:py-24">
      <Container>
        <SectionHeading kicker={section.kicker} title={section.title} desc={section.description} />

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="rounded-[28px] bg-[color:var(--surface)] p-6 ring-1 ring-black/10"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-[color:var(--text)]">{r.name}</div>
                  <div className="text-xs text-black/60">{r.area}</div>
                </div>
                <Stars value={r.rating} />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-black/75">“{r.text}”</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button as="a" href={phoneHref}>
            {callLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
