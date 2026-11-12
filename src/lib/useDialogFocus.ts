
"use client";

import { useEffect, useRef, type RefObject } from "react";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(", ");

interface UseDialogFocusOptions {
  isOpen: boolean;
  containerRef: RefObject<HTMLElement | null>;
  initialFocusRef?: RefObject<HTMLElement | null>;
  shouldRestoreFocus?: () => boolean;
}

/**
 * Manages modal dialog focus entry, Tab/Shift+Tab trapping, body scroll lock,
 * and clean focus restoration back to the triggering control on close.
 */
export function useDialogFocus({
  isOpen,
  containerRef,
  initialFocusRef,
  shouldRestoreFocus,
}: UseDialogFocusOptions) {
  const previousActiveRef = useRef<HTMLElement | null>(null);
  const shouldRestoreRef = useRef(shouldRestoreFocus);
  useEffect(() => {
    shouldRestoreRef.current = shouldRestoreFocus;
  }, [shouldRestoreFocus]);

  useEffect(() => {
    if (!isOpen) return;

    previousActiveRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const getFocusableElements = () => {
      const container = containerRef.current;
      if (!container) return [];
      return Array.from(
        container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter(
        (el) =>
          !el.hasAttribute("disabled") &&
          el.getAttribute("aria-hidden") !== "true" &&
          el.offsetParent !== null
      );
    };

    const focusFrame = window.requestAnimationFrame(() => {
      const target =
        initialFocusRef?.current ??
        getFocusableElements()[0] ??
        containerRef.current;
      target?.focus();
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusables = getFocusableElements();
      if (focusables.length === 0) {
        e.preventDefault();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (e.shiftKey) {
        if (active === first || !containerRef.current?.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last || !containerRef.current?.contains(active)) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;

      const prev = previousActiveRef.current;
      const allowRestore = shouldRestoreRef.current
        ? shouldRestoreRef.current()
        : true;
      if (allowRestore && prev && prev.isConnected) {
        window.requestAnimationFrame(() => {
          prev.focus();
        });
      }
    };
  }, [isOpen, containerRef, initialFocusRef]);
}
