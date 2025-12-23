export function cx(...c) {
  return c.filter(Boolean).join(" ");
}

export function Button({
  as = "button",
  href,
  variant = "primary",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition shadow-sm ring-1 ring-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2";

  const styles =
    variant === "primary"
      ? "bg-[color:var(--accent)] text-white hover:opacity-90"
      : "bg-transparent text-[color:var(--text)] hover:bg-black/5";

  if (as === "a") {
    return (
      <a href={href} className={cx(base, styles)} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={cx(base, styles)} {...props}>
      {children}
    </button>
  );
}


export function Container({ children, className }) {
  return (
    <div className={cx("mx-auto w-full max-w-[1180px] px-5", className)}>{children}</div>
  );
}

export function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white backdrop-blur">
      {children}
    </span>
  );
}

export function Stars({ value = 5 }) {
  const full = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <div className="flex items-center gap-1" aria-label={`${full} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={cx(
            "text-sm",
            i < full ? "text-[color:var(--accent)]" : "text-black/20"
          )}
        >
          ★
        </span>
      ))}
    </div>
  );
}
