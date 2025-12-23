export default function MobileCallBar({ callHref, callLabel, quoteHref, quoteLabel }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-[color:var(--bg)]/85 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-[1180px] items-center gap-3 px-2">
        <a
          href={callHref}
          className="flex-1 rounded-2xl bg-[color:var(--accent)] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm ring-1 ring-black/10"
        >
          {callLabel}
        </a>
        <a
          href={quoteHref}
          className="rounded-2xl px-4 py-3 text-sm font-semibold text-[color:var(--text)] ring-1 ring-black/10"
        >
          {quoteLabel}
        </a>
      </div>
    </div>
  );
}
