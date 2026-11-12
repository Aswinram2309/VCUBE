"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("VCUBE route error boundary caught:", error);
  }, [error]);

  return (
    <section className="flex min-h-[75vh] items-center bg-[#F5F2EC] px-6 pb-24 pt-36 text-[#242421] sm:px-10 lg:px-14">
      <div className="mx-auto w-full max-w-[1380px]">
        <div className="max-w-2xl border-t border-[#242421]/14 pt-10">
          <p className="editorial-eyebrow text-status-error">
            Temporary Display Interruption
          </p>
          <h1 className="font-editorial mt-4 text-4xl font-normal leading-[1.06] tracking-[-0.02em] text-[#242421] sm:text-5xl">
            We Could Not Render This View.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#242421]/80">
            An unexpected display error interrupted loading this page. Try
            reloading the view, or reach the VCUBE Madurai studio directly by
            phone or email.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={reset}
              className="inline-flex min-h-11 items-center gap-2.5 bg-[#242421] px-7 py-3.5 text-xs font-medium tracking-[0.18em] uppercase text-[#FAF9F6] transition-colors hover:bg-bronze-ink"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              <span>Try Again</span>
            </button>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center gap-2.5 border border-[#242421]/30 px-7 py-3.5 text-xs font-medium tracking-[0.18em] uppercase text-[#242421] transition-colors hover:border-[#242421]"
            >
              <span>Contact Studio</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 border-t border-[#242421]/12 pt-6 text-sm text-ink-muted">
            <p>
              Direct telephone:{" "}
              <a
                href={SITE_CONFIG.contact.phones[0].href}
                className="font-medium text-[#242421] underline hover:text-bronze-ink"
              >
                {SITE_CONFIG.contact.phones[0].display}
              </a>{" "}
              &middot; Email:{" "}
              <a
                href={SITE_CONFIG.contact.email.href}
                className="font-medium text-[#242421] underline hover:text-bronze-ink"
              >
                {SITE_CONFIG.contact.email.display}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

