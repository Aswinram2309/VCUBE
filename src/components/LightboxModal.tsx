"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { DemoMediaAsset } from "@/data/media";
import { useDialogFocus } from "@/lib/useDialogFocus";
import { EDITORIAL_EASE } from "./MotionPrimitives";

interface LightboxModalProps {
  items: DemoMediaAsset[];
  activeIndex: number | null;
  onClose: () => void;
  onChangeIndex: (nextIndex: number) => void;
}

export function LightboxModal({
  items,
  activeIndex,
  onClose,
  onChangeIndex,
}: LightboxModalProps) {
  const safeIndex =
    activeIndex !== null && activeIndex >= 0 && activeIndex < items.length
      ? activeIndex
      : null;
  const isOpen = safeIndex !== null;
  const activeItem = isOpen ? items[safeIndex] : null;
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useDialogFocus({
    isOpen,
    containerRef: dialogRef,
    initialFocusRef: closeButtonRef,
  });

  useEffect(() => {
    if (!isOpen || safeIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && items.length > 1) {
        onChangeIndex((safeIndex + 1) % items.length);
      }
      if (e.key === "ArrowLeft" && items.length > 1) {
        onChangeIndex((safeIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, safeIndex, items.length, onClose, onChangeIndex]);

  const activeSrcKey = activeItem ? String(activeItem.src.src) : "";
  const imageFailed = Boolean(activeItem && failedSrc === activeSrcKey);

  return (
    <AnimatePresence>
      {isOpen && activeItem && safeIndex !== null && (
        <motion.div
          ref={dialogRef}
          data-surface="dark"
          role="dialog"
          aria-modal="true"
          aria-label={`Image lightbox: ${activeItem.caption}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EDITORIAL_EASE }}
          onClick={onClose}
          className="vcube-no-print fixed inset-0 z-[60] flex flex-col justify-between bg-[#242421]/95 p-4 sm:p-8"
        >
          <div
            className="flex items-center justify-between text-[#FAF9F6]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4" aria-live="polite">
              <span className="tabular-nums text-xs tracking-[0.22em] uppercase text-bronze-soft">
                {String(safeIndex + 1).padStart(2, "0")} /{" "}
                {String(items.length).padStart(2, "0")}
              </span>
              <span className="hidden text-xs tracking-[0.16em] uppercase text-[#AAA49B] sm:inline">
                {activeItem.origin}
              </span>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close image view"
              className="inline-flex h-11 w-11 items-center justify-center border border-[#FAF9F6]/25 text-[#FAF9F6] transition-colors hover:border-bronze-soft hover:text-bronze-soft"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div
            className="relative mx-auto my-4 flex w-full max-w-5xl flex-1 items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex h-full max-h-[75vh] w-full items-center justify-center">
              {imageFailed ? (
                <div className="max-w-md border border-[#FAF9F6]/15 bg-[#242421] p-8 text-center">
                  <p className="font-editorial text-2xl text-[#FAF9F6]">
                    Frame Preview Unavailable
                  </p>
                  <p className="mt-2 text-sm text-[#AAA49B]">
                    {activeItem.caption} could not be decoded in this browser
                    view.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFailedSrc(null)}
                    className="mt-5 inline-flex min-h-11 items-center border border-[#FAF9F6]/30 px-5 py-2.5 text-xs font-medium tracking-[0.16em] uppercase text-[#FAF9F6] transition-colors hover:border-bronze-soft hover:text-bronze-soft"
                  >
                    Retry Preview
                  </button>
                </div>
              ) : (
                <Image
                  key={activeItem.id}
                  src={activeItem.src}
                  alt={activeItem.alt}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                  sizes="(max-width: 1024px) 92vw, 1024px"
                  priority
                  onError={() => setFailedSrc(activeSrcKey)}
                />
              )}
            </div>

            {items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    onChangeIndex((safeIndex - 1 + items.length) % items.length)
                  }
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-[#FAF9F6]/25 bg-[#242421]/88 text-[#FAF9F6] transition-colors hover:border-bronze-soft hover:text-bronze-soft sm:left-4 sm:h-12 sm:w-12"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => onChangeIndex((safeIndex + 1) % items.length)}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-[#FAF9F6]/25 bg-[#242421]/88 text-[#FAF9F6] transition-colors hover:border-bronze-soft hover:text-bronze-soft sm:right-4 sm:h-12 sm:w-12"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          <div
            className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-2 border-t border-[#FAF9F6]/12 pt-4 sm:flex-row sm:items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="min-w-0 font-editorial text-xl text-[#FAF9F6]">
              {activeItem.caption}
            </p>
            <p className="shrink-0 text-xs tracking-[0.18em] uppercase text-[#AAA49B]">
              {activeItem.space} &middot; {activeItem.origin}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

