import SectionHeading from "./SectionHeading";
import { Badge, Container } from "./ui.jsx";

export default function WorkGallery({ section, projects, onOpen, badgeLabels }) {
  return (
    <section id="work" className="py-16 sm:py-24">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <SectionHeading kicker={section.kicker} title={section.title} desc={section.description} />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => onOpen(p)}
              className="group relative overflow-hidden rounded-[26px] text-left ring-1 ring-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
            >
              <img
                src={p.afterSrc}
                alt={`${p.title} after`}
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.02] sm:h-64"
                loading="lazy"
              />
              <div className="absolute left-3 top-3">
                <Badge>{p.tag || (p.beforeSrc ? badgeLabels.beforeAfter : badgeLabels.work)}</Badge>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent p-4">
                <div className="text-sm font-semibold text-white">{p.title}</div>
                <div className="text-xs text-white/80">{p.location}</div>
              </div>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
