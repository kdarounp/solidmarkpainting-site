import { useEffect, useRef, useState } from "react";

import { useEscape, useFocusTrap, useLockBodyScroll } from "./hooks";
import { Button, cx } from "./ui.jsx";

export default function Lightbox({
  open,
  project,
  onClose,
  phoneHref,
  ctaLabel,
  toggleLabels,
  closeLabel,
  note,
}) {
  const [mode, setMode] = useState("after");
  const hasBefore = Boolean(project?.beforeSrc);
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  const projectId = project ? project.id : undefined;

  useLockBodyScroll(open);
  useEscape(() => onClose?.(), open);
  useFocusTrap(open, dialogRef, closeBtnRef);

useEffect(() => {
  if (!open) return;
  const id = requestAnimationFrame(() => setMode("after"));
  return () => cancelAnimationFrame(id);
}, [open, projectId]);


  if (!open || !project) return null;

  const src = mode === "before" ? project.beforeSrc : project.afterSrc;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} — ${project.location}`}
        className="relative w-full max-w-6xl overflow-hidden rounded-[32px] bg-[color:var(--surface)] shadow-2xl ring-1 ring-black/10 sm:w-[92vw]"
      >
        <div className="flex items-start justify-between gap-3 border-b border-black/10 p-4 sm:p-5">
          <div>
            <div className="text-sm font-semibold text-[color:var(--text)]">{project.title}</div>
            <div className="text-xs text-black/60">{project.location}</div>
          </div>
          <div className="flex items-center gap-2">
            {hasBefore && (
              <div className="inline-flex rounded-full bg-black/5 p-1 ring-1 ring-black/10">
                <button
                  className={cx(
                    "rounded-full px-3 py-1.5 text-xs font-medium transition",
                    mode === "before" ? "bg-white shadow-sm" : "hover:bg-white/60"
                  )}
                  onClick={() => setMode("before")}
                >
                  {toggleLabels.before}
                </button>
                <button
                  className={cx(
                    "rounded-full px-3 py-1.5 text-xs font-medium transition",
                    mode === "after" ? "bg-white shadow-sm" : "hover:bg-white/60"
                  )}
                  onClick={() => setMode("after")}
                >
                  {toggleLabels.after}
                </button>
              </div>
            )}
            <button
              ref={closeBtnRef}
              onClick={onClose}
              className="rounded-full p-2 text-black/60 ring-1 ring-black/10 transition hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
              aria-label={closeLabel}
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="relative flex items-center justify-center overflow-hidden rounded-3xl bg-black/5 ring-1 ring-black/10">
            <img
              src={src}
              alt={`${project.title} (${mode})`}
              className="max-h-[72vh] w-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-black/60">{note}</div>
            <Button as="a" href={phoneHref}>
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
