import SectionHeading from "./SectionHeading";
import { Container } from "./ui.jsx";

export default function Services({ section, services }) {
  return (
    <section id="services" className="py-16 sm:py-24">
      <Container>
        <SectionHeading kicker={section.kicker} title={section.title} desc={section.description} />

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-[28px] bg-[color:var(--surface)] p-6 ring-1 ring-black/10"
            >
              <div className="font-serif text-xl font-semibold text-[color:var(--text)]">{s.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-black/70">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--accent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
