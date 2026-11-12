import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <section className="flex min-h-[75vh] items-center bg-[#F5F2EC] px-6 pb-24 pt-36 text-[#242421] sm:px-10 lg:px-14">
      <div className="mx-auto w-full max-w-[1380px]">
        <div className="max-w-2xl border-t border-[#242421]/14 pt-10">
          <p className="editorial-eyebrow text-bronze-ink">
            Archive Entry Unavailable
          </p>
          <h1 className="font-editorial mt-4 text-5xl font-normal leading-[1.04] tracking-[-0.02em] text-[#242421] sm:text-6xl">
            That Project Study{" "}
            <span className="italic">Was Not Found.</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#242421]/80">
            The requested residential study or completed photography series does
            not match an entry in the current studio archive.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex min-h-11 items-center gap-2.5 bg-[#242421] px-7 py-3.5 text-xs font-medium tracking-[0.18em] uppercase text-[#FAF9F6] transition-colors hover:bg-bronze-ink"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>All Projects</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center gap-2.5 border border-[#242421]/30 px-7 py-3.5 text-xs font-medium tracking-[0.18em] uppercase text-[#242421] transition-colors hover:border-[#242421]"
            >
              <span>Start an Enquiry</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

