import { useState } from "react";
import { Button, Container } from "./ui.jsx";

const FORM_ENDPOINT = "https://formspree.io/f/meejnvgk"; // <-- replace

export default function Contact({ contact, phone, email, cta }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        // Formspree returns JSON; but we don't need to parse for v1.
        throw new Error("Submit failed");
      }

      setSent(true);
      form.reset();
    } catch (err) {
      setError("Something went wrong. Please call instead.");
    } finally {
      setSending(false);
    }
  }

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
              <div className="mt-1 font-serif text-2xl font-semibold text-[color:var(--text)]">
                {phone.display}
              </div>
            </a>

            <div className="mt-5 text-sm text-black/70">
              <div>
                <span className="font-semibold">{contact.emailLabel}</span>{" "}
                <a
                  className="underline decoration-black/20 hover:decoration-black"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              </div>
              <div className="mt-2 text-xs text-black/55">{contact.servingNote}</div>
            </div>
          </div>

          <div className="rounded-[32px] bg-[color:var(--surface)] p-7 ring-1 ring-black/10 sm:p-9">
            <div className="text-sm font-semibold text-[color:var(--text)]">
              {contact.requestTitle}
            </div>
            <p className="mt-2 text-sm text-black/70">{contact.requestDescription}</p>

            {sent ? (
              <div className="mt-6 rounded-2xl bg-black/5 p-4 text-sm text-black/75 ring-1 ring-black/10">
                {contact.thankYou}
              </div>
            ) : (
              <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
                {/* Honeypot anti-spam (optional but good) */}
                <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

                <div>
                  <label className="text-xs font-medium text-black/60">
                    {contact.formLabels.name}
                  </label>
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    className="mt-1 w-full rounded-2xl bg-white/70 px-4 py-3 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                    placeholder={contact.placeholders.name}
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-black/60">
                    {contact.formLabels.phone}
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    className="mt-1 w-full rounded-2xl bg-white/70 px-4 py-3 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                    placeholder={contact.placeholders.phone}
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-black/60">
                    {contact.formLabels.email}
                  </label>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-1 w-full rounded-2xl bg-white/70 px-4 py-3 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                    placeholder={contact.placeholders.email}
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-black/60">
                    {contact.formLabels.message}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-1 w-full resize-none rounded-2xl bg-white/70 px-4 py-3 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                    placeholder={contact.placeholders.message}
                  />
                </div>

                {error ? (
                  <div className="rounded-2xl bg-black/5 p-3 text-sm text-black/75 ring-1 ring-black/10">
                    {error}{" "}
                    <a className="underline" href={phone.tel}>
                      {phone.display}
                    </a>
                  </div>
                ) : null}

                <div className="flex flex-wrap gap-3">
                  <Button type="submit" disabled={sending}>
                    {sending ? "Sending…" : cta.send}
                  </Button>
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

