import { useMemo, useState } from "react";

import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Lightbox from "./components/Lightbox";
import MobileCallBar from "./components/MobileCallBar";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import WorkGallery from "./components/WorkGallery";
import { Container } from "./components/ui.jsx";
import { site } from "./content/site";
import { heroImage } from "./content/images";
import { projects } from "./content/projects";
import { services } from "./content/services";
import { reviews } from "./content/reviews";

const socialIcons = {
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.64l.36-4H14V7a1 1 0 0 1 1-1h3z"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm0 2a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 12 10.5zm4.75-3.5a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75z"
      />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M17.5 6.5c-.74-.6-1.24-1.38-1.43-2.29a3.33 3.33 0 0 1-.07-.72h-3.02v12.08a1.9 1.9 0 1 1-1.7-1.88v-3.1A5 5 0 1 0 15 15.71V8a6.43 6.43 0 0 0 3.5 1.06V6.93a4 4 0 0 1-1-.43z"
      />
    </svg>
  ),
};

/**
 * Preview-only React version of the Solidmark Painting v1 landing page.
 * This mirrors the Next.js/Tailwind design system + layout.
 *
 * NOTE: In the real Next.js project, fonts are loaded via next/font and images use next/image.
 */
export default function SolidmarkLandingPreview() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const onOpen = (p) => {
    setActive(p);
    setOpen(true);
  };

  // Inject design system variables + font stacks for preview.
  const style = useMemo(
    () => ({
      "--bg": "#F6F1E8", // warm beige
      "--surface": "#FBF8F2", // soft off-white
      "--text": "#232323", // charcoal
      "--muted": "#5B5B5B",
      "--accent": "#B86A4A", // terracotta
      "--border": "rgba(0,0,0,0.10)",
    }),
    []
  );

  return (
    <div
      style={style}
      className="min-h-screen bg-[color:var(--bg)] pb-24 text-[color:var(--text)]"
    >
      {/* Font vibes for preview only (Next.js project uses next/font) */}
      <style>{`
        :root { color-scheme: light; }
        .font-serif { font-family: ui-serif, Georgia, 'Times New Roman', Times, serif; }
        body, .font-sans { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji','Segoe UI Emoji'; }
        html { scroll-behavior: smooth; }
      `}</style>

      <Header
        brandName={site.brandName}
        legalName={site.legalName}
        logo={site.logo}
        navLinks={site.navLinks}
        ctaLabel={site.cta.call}
        phoneHref={site.phone.tel}
        mobileQuoteLabel={site.cta.getAQuote}
        contactHref="#contact"
      />
      <main>
        <Hero
          heroImage={heroImage}
          hero={site.hero}
          serviceArea={site.serviceArea}
          phoneHref={site.phone.tel}
          contactHref="#contact"
          cta={site.cta}
        />
        <WorkGallery
          section={site.work}
          projects={projects}
          onOpen={onOpen}
          badgeLabels={site.badges}
        />
        <Services section={site.services} services={services} />
        <Reviews
          section={site.reviews}
          reviews={reviews}
          callLabel={site.cta.call}
          phoneHref={site.phone.tel}
        />
        <Contact contact={site.contact} phone={site.phone} email={site.email} cta={site.cta} />
      </main>

      <footer className="border-t border-black/10 py-10">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-black/60">
            <div>
              © {new Date().getFullYear()} {site.legalName}
            </div>
            <div className="flex items-center gap-4">
              <a className="hover:text-black" href={site.phone.tel}>
                {site.phone.display}
              </a>
              <a className="hover:text-black" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              {[
                { id: "facebook", href: site.social?.facebook, label: "Facebook" },
                { id: "instagram", href: site.social?.instagram, label: "Instagram" },
                { id: "tiktok", href: site.social?.tiktok, label: "TikTok" },
              ]
                .filter((item) => item.href)
                .map((item) => (
                  <a
                    key={item.id}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--surface)] text-[color:var(--text)] ring-1 ring-black/10 hover:bg-black/5"
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {socialIcons[item.id]}
                  </a>
                ))}
            </div>
          </div>
        </Container>
      </footer>

      <MobileCallBar
        callHref={site.phone.tel}
        callLabel={site.cta.call}
        quoteHref="#contact"
        quoteLabel={site.cta.mobileQuote}
      />
      <Lightbox
        open={open}
        project={active}
        onClose={() => setOpen(false)}
        phoneHref={site.phone.tel}
        ctaLabel={site.cta.call}
        toggleLabels={{ before: site.cta.toggleBefore, after: site.cta.toggleAfter }}
        closeLabel={site.cta.close}
        note={site.lightbox.note}
      />
    </div>
  );
}
