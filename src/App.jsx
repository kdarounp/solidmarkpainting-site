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
            <div>© {new Date().getFullYear()} {site.legalName}</div>
            <div className="flex items-center gap-4">
              <a className="hover:text-black" href={site.phone.tel}>
                {site.phone.display}
              </a>
              <a className="hover:text-black" href={`mailto:${site.email}`}>
                {site.email}
              </a>
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
