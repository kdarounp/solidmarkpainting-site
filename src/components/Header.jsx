import { Button, Container } from "./ui.jsx";

export default function Header({
  brandName,
  legalName,
  logo,
  navLinks,
  ctaLabel,
  phoneHref,
  mobileQuoteLabel,
  contactHref = "#contact",
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[color:var(--bg)]/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          {logo?.src ? (
            <img
              src={logo.src}
              alt={logo.alt || `${brandName} logo`}
              className="h-9 w-9 rounded-xl object-contain ring-1 ring-black/10 bg-white"
              loading="lazy"
            />
          ) : (
            <div
              aria-hidden="true"
              className="h-9 w-9 rounded-xl bg-[color:var(--surface)] ring-1 ring-black/10"
              title="Logo placeholder"
            />
          )}
          <div className="leading-tight">
            <div className="font-serif text-base font-semibold tracking-tight text-[color:var(--text)]">
              {brandName}
            </div>
            <div className="text-[11px] text-black/55">{legalName}</div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-black/70 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="hover:text-black" href={link.href}>
              {link.label}
            </a>
          ))}
          <Button as="a" href={phoneHref}>
            {ctaLabel}
          </Button>
        </nav>

        <a
          className="md:hidden rounded-2xl px-4 py-2 text-sm font-medium text-[color:var(--text)] ring-1 ring-black/10 hover:bg-black/5"
          href={contactHref}
        >
          {mobileQuoteLabel}
        </a>
      </Container>
    </header>
  );
}
