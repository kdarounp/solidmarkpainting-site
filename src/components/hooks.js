import { useEffect } from "react";

export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

export function useEscape(handler, active = true) {
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => {
      if (e.key === "Escape") handler?.(e);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handler, active]);
}

export function useFocusTrap(active, containerRef, initialFocusRef) {
  useEffect(() => {
    if (!active) return;
    const container = containerRef.current;
    if (!container) return;

    const focusableSelector =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    const focusables = () => Array.from(container.querySelectorAll(focusableSelector));

    const prevActive = document.activeElement;

    const focusFirst = () => {
      const list = focusables();
      const target = initialFocusRef?.current || list[0];
      target?.focus?.();
    };

    requestAnimationFrame(focusFirst);

    const onKeyDown = (e) => {
      if (e.key !== "Tab") return;
      const list = focusables();
      if (!list.length) return;
      const first = list[0];
      const last = list[list.length - 1];
      const current = document.activeElement;

      if (e.shiftKey) {
        if (current === first || !container.contains(current)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (current === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      if (prevActive && prevActive.focus) prevActive.focus();
    };
  }, [active, containerRef, initialFocusRef]);
}
