import { useState } from "react";

import { Button, Container } from "./ui.jsx";

export default function Contact({ contact, phone, email, cta }) {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <div className="rounded-[32px] bg-[color:var(--surface)] p-7 ring-1 ring-black/10 sm:p-9">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-black/55">
              {contact.kicker}
            </div>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[color:var(--text)]">
              {contact.title}
            </h2>
            <p className="mt-3 text-sm text-black/70">{contact.description}</p>

            <a
              href={phone.tel}
              className="mt-6 block rounded-[28px] bg-[color:var(--bg)] p-5 ring-1 ring-black/10 hover:bg-black/5"
            >
              <div className="text-xs text-black/60">{contact.tapToCallLabel}</div>
              <div className="mt-1 font-serif text-2xl font-semibold text-[color:var(--text)]">{phone.display}</div>
            </a>

            <div className="mt-5 text-sm text-black/70">
              <div>
                <span className="font-semibold">{contact.emailLabel}</span>{" "}
                <a className="underline decoration-black/20 hover:decoration-black" href={`mailto:${email}`}>
                  {email}
                </a>
              </div>
              <div className="mt-2 text-xs text-black/55">
                {contact.servingNote}
              </div>
            </div>
          </div>

          <div className="rounded-[32px] bg-[color:var(--surface)] p-7 ring-1 ring-black/10 sm:p-9">
            <div className="text-sm font-semibold text-[color:var(--text)]">{contact.requestTitle}</div>
            <p className="mt-2 text-sm text-black/70">{contact.requestDescription}</p>

            {sent ? (
              <div className="mt-6 rounded-2xl bg-black/5 p-4 text-sm text-black/75 ring-1 ring-black/10">
                {contact.thankYou}
              </div>
            ) : (
              <form
                className="mt-6 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label className="text-xs font-medium text-black/60">{contact.formLabels.name}</label>
                  <input
                    required
                    className="mt-1 w-full rounded-2xl bg-white/70 px-4 py-3 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                    placeholder={contact.placeholders.name}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-black/60">{contact.formLabels.phone}</label>
                  <input
                    required
                    className="mt-1 w-full rounded-2xl bg-white/70 px-4 py-3 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                    placeholder={contact.placeholders.phone}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-black/60">{contact.formLabels.email}</label>
                  <input
                    className="mt-1 w-full rounded-2xl bg-white/70 px-4 py-3 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                    placeholder={contact.placeholders.email}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-black/60">{contact.formLabels.message}</label>
                  <textarea
                    rows={4}
                    className="mt-1 w-full resize-none rounded-2xl bg-white/70 px-4 py-3 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                    placeholder={contact.placeholders.message}
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button>{cta.send}</Button>
                  <Button as="a" href={phone.tel} variant="secondary">
                    {cta.callInstead}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
