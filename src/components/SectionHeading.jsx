export default function SectionHeading({ kicker, title, desc }) {
  return (
    <div className="mb-8 sm:mb-10">
      {kicker && (
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-black/55">
          {kicker}
        </div>
      )}
      <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-[color:var(--text)] sm:text-3xl">
        {title}
      </h2>
      {desc && <p className="mt-3 max-w-2xl text-sm text-black/70">{desc}</p>}
    </div>
  );
}
