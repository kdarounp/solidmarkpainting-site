import { Button, Container } from "./ui.jsx";

export default function Hero({ heroImage, hero, serviceArea, phoneHref, contactHref, cta }) {
  return (
    <section className="pt-10 sm:pt-14">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-[1.05fr,1fr] lg:gap-12">
          <div className="space-y-6">
            {hero.kicker ? (
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)] ring-1 ring-black/10">
                <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                {hero.kicker}
              </div>
            ) : null}

            <div className="space-y-4">
              <h1 className="font-serif text-[clamp(30px,4vw,48px)] font-semibold leading-tight tracking-tight text-[color:var(--text)]">
                {hero.title}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-black/70 sm:text-lg">
                {hero.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button as="a" href={phoneHref}>
                {cta.call}
              </Button>
              <Button as="a" href={contactHref} variant="secondary">
                {cta.quote}
              </Button>
            </div>

            {serviceArea ? <div className="text-sm text-black/60">{serviceArea}</div> : null}
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] bg-[color:var(--surface)] ring-1 ring-black/10 shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)]/12 via-white/75 to-[color:var(--bg)]/90" />
              <div className="absolute -left-14 -top-10 h-48 w-48 rounded-full bg-[color:var(--accent)]/10 blur-3xl" />
              <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-black/5 blur-3xl" />
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="relative h-[320px] w-full object-cover opacity-90 mix-blend-multiply sm:h-[380px] md:h-[440px]"
                loading="lazy"
              />
              {(hero.cardTitle || hero.cardDescription) && (
                <div className="absolute inset-x-4 bottom-4">
                  <div className="rounded-2xl bg-white/90 px-4 py-3 text-sm ring-1 ring-black/10 backdrop-blur">
                    {hero.cardTitle ? (
                      <div className="font-semibold text-[color:var(--text)]">{hero.cardTitle}</div>
                    ) : null}
                    {hero.cardDescription ? (
                      <div className="text-xs text-black/60">{hero.cardDescription}</div>
                    ) : null}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
