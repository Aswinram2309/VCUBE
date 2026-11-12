"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { DEMO_MEDIA } from "@/data/media";
import { SITE_CONFIG } from "@/data/site";
import { EDITORIAL_EASE } from "./MotionPrimitives";

export function HomeHero() {
  return (
    <section
      data-surface="dark"
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-[#242421] text-[#FAF9F6]"
    >
      {/* Cinematic Background Interior Visual */}
      <motion.div
        initial={{ scale: 1.07, opacity: 0.88 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: EDITORIAL_EASE }}
        className="absolute inset-0"
      >
        <Image
          src={DEMO_MEDIA.image4.src}
          alt={DEMO_MEDIA.image4.alt}
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Atmospheric Editorial Scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#242421]/92 via-[#242421]/55 to-[#242421]/50"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#242421]/82 via-[#242421]/35 to-transparent"
      />

      {/* Editorial Foreground */}
      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-6 pb-20 pt-28 sm:px-10 sm:pb-20 sm:pt-36 lg:px-14 lg:pb-24">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: EDITORIAL_EASE }}
              className="editorial-eyebrow text-bronze-soft"
            >
              {SITE_CONFIG.brand.locationDescriptor}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: EDITORIAL_EASE }}
              className="font-editorial mt-5 text-[2.95rem] font-normal leading-[0.98] tracking-[-0.02em] text-[#FAF9F6] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              Spaces That Tell
              <br />
              <span className="italic text-[#F5F2EC]">Your Story.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35, ease: EDITORIAL_EASE }}
              className="mt-6 max-w-xl text-base font-light leading-relaxed text-[#FAF9F6]/88 sm:text-lg"
            >
              Thoughtfully designed spaces where architecture, functionality and
              timeless aesthetics come together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.48, ease: EDITORIAL_EASE }}
              className="mt-9 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <Link
                href="/projects"
                className="group inline-flex min-h-11 items-center gap-3 bg-[#FAF9F6] px-7 py-4 text-xs font-medium tracking-[0.18em] uppercase text-[#242421] transition-colors duration-300 hover:bg-bronze-soft hover:text-[#242421]"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center gap-2.5 border border-[#FAF9F6]/50 px-7 py-4 text-xs font-medium tracking-[0.18em] uppercase text-[#FAF9F6] transition-colors duration-300 hover:border-[#FAF9F6] hover:bg-[#FAF9F6]/12"
              >
                <span>Contact Us</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.55, ease: EDITORIAL_EASE }}
              className="mt-6 border-t border-[#FAF9F6]/15 pt-2 lg:hidden"
            >
              <Link
                href="/projects/indigo-oak-master-suite"
                className="inline-flex min-h-11 flex-wrap items-center gap-2.5 py-2 text-xs tracking-[0.16em] uppercase text-[#AAA49B] transition-colors hover:text-[#FAF9F6]"
              >
                <span>Featured Concept</span>
                <span aria-hidden="true">&middot;</span>
                <span className="font-editorial normal-case tracking-normal text-base text-[#FAF9F6]">
                  Indigo &amp; Warm Oak Master Suite
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: EDITORIAL_EASE }}
            className="hidden flex-col items-end justify-end text-right lg:col-span-4 lg:flex"
          >
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#AAA49B]">
              Featured Visualization
            </p>
            <Link
              href="/projects/indigo-oak-master-suite"
              className="mt-1 inline-flex min-h-11 items-center font-editorial text-xl text-[#FAF9F6] transition-colors hover:text-bronze-soft"
            >
              Indigo &amp; Warm Oak Master Suite
            </Link>
            <a
              href="#introduction"
              className="group mt-6 inline-flex min-h-11 items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#AAA49B] transition-colors hover:text-[#FAF9F6]"
            >
              <span>Scroll to Explore</span>
              <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

