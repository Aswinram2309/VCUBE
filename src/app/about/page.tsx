import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { DEMO_MEDIA } from "@/data/media";
import { SITE_CONFIG } from "@/data/site";
import {
  EditorialReveal,
  HairlineDraw,
  ImageClipReveal,
  PageMount,
} from "@/components/MotionPrimitives";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about VCUBE Construction and Interiors in Madurai—our design philosophy, ethical foundation, architectural expertise, and five-step client journey.",
};

export default function AboutPage() {
  return (
    <PageMount className="bg-[#F5F2EC] pt-28 text-[#242421] sm:pt-36">
      {/* Studio Intro Header */}
      <section className="mx-auto max-w-[1380px] px-6 pb-20 sm:px-10 lg:px-14">
        <EditorialReveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="editorial-eyebrow text-bronze-ink">
              About VCUBE · Madurai Studio
            </p>
            <h1 className="font-editorial mt-4 text-5xl font-normal leading-[1.02] tracking-[-0.02em] text-[#242421] sm:text-6xl lg:text-7xl">
              Architecture &amp; Interiors{" "}
              <span className="italic">Grounded in Integrity.</span>
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm leading-relaxed text-[#242421]/80 sm:text-base">
              {SITE_CONFIG.brand.establishedNote}
            </p>
          </div>
        </EditorialReveal>

        <ImageClipReveal delay={0.1} className="mt-14">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#242421]/6">
            <Image
              src={DEMO_MEDIA.image5.src}
              alt={DEMO_MEDIA.image5.alt}
              fill
              priority
              placeholder="blur"
              sizes="(max-width: 1380px) 100vw, 1380px"
              className="object-cover"
            />
          </div>
        </ImageClipReveal>
      </section>

      {/* Company Introduction & Philosophy */}
      <section className="border-y border-[#242421]/10 bg-[#FAF9F6] py-20 sm:py-24">
        <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
            <EditorialReveal className="lg:col-span-5">
              <p className="editorial-eyebrow text-bronze-ink">
                01 · Who We Are
              </p>
              <h2 className="font-editorial mt-4 text-4xl font-normal leading-[1.08] text-[#242421] sm:text-5xl">
                Young Perspective.
                <br />
                <span className="italic">Experienced Execution.</span>
              </h2>
            </EditorialReveal>

            <EditorialReveal delay={0.1} className="space-y-6 text-base leading-relaxed text-[#242421]/82 lg:col-span-6 lg:col-start-7">
              <p>{SITE_CONFIG.about.introStatement}</p>
              <p>
                Every homeowner and business brings distinct daily habits,
                aspirations, and budget boundaries. We respect your values and
                translate them into calm, functional architecture—handling
                everything from conceptual interior visualization and Vastu
                orientation to structural foundations and custom joinery.
              </p>
              <p>
                {SITE_CONFIG.about.extendedStatement}
              </p>
            </EditorialReveal>
          </div>

          <HairlineDraw className="my-16" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SITE_CONFIG.about.coreValues.map((value, idx) => (
              <EditorialReveal
                key={value.index}
                delay={idx * 0.06}
                className="flex flex-col border-t border-[#242421]/14 pt-6"
              >
                <span className="font-editorial text-3xl text-bronze-ink">
                  {value.index}
                </span>
                <h3 className="font-editorial mt-3 text-2xl text-[#242421]">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#242421]/80">
                  {value.description}
                </p>
              </EditorialReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy & Expertise */}
      <section className="mx-auto max-w-[1380px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <EditorialReveal className="lg:col-span-6">
            <p className="editorial-eyebrow text-bronze-ink">
              02 · Studio Expertise
            </p>
            <h2 className="font-editorial mt-4 text-4xl font-normal leading-[1.08] text-[#242421] sm:text-5xl">
              From Structural Foundation to Bespoke Detail
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#242421]/80">
              Because VCUBE unites construction engineering, interior architecture,
              and Vastu consultation under one Madurai practice, ideas are never
              lost between designer and site contractor.
            </p>

            <div className="mt-10 divide-y divide-[#242421]/12 border-y border-[#242421]/12">
              <div className="py-5">
                <h3 className="font-editorial text-2xl text-[#242421]">
                  Residential &amp; Commercial Construction
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#242421]/80">
                  Complete planning, foundation execution, structural quality
                  control, and durable material sourcing tailored to client
                  requirements.
                </p>
              </div>
              <div className="py-5">
                <h3 className="font-editorial text-2xl text-[#242421]">
                  Tailored Interior Architecture
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#242421]/80">
                  Bedrooms, modular kitchens, false ceilings, foyer partitions,
                  wardrobes, pooja spaces, and commercial office interiors.
                </p>
              </div>
              <div className="py-5">
                <h3 className="font-editorial text-2xl text-[#242421]">
                  Harmonious Vastu Shastra
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#242421]/80">
                  Balancing directional energy and the five elements early in
                  design so homes and workplaces foster serenity without
                  unnecessary structural cost.
                </p>
              </div>
            </div>
          </EditorialReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-6">
            <ImageClipReveal>
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#242421]/6">
                <Image
                  src={DEMO_MEDIA.image18.src}
                  alt={DEMO_MEDIA.image18.alt}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 50vw, 24vw"
                  className="object-cover"
                />
              </div>
            </ImageClipReveal>
            <ImageClipReveal delay={0.12} className="sm:mt-12">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#242421]/6">
                <Image
                  src={DEMO_MEDIA.image12.src}
                  alt={DEMO_MEDIA.image12.alt}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 50vw, 24vw"
                  className="object-cover"
                />
              </div>
            </ImageClipReveal>
          </div>
        </div>
      </section>

      {/* Working Approach */}
      <section className="border-t border-[#242421]/10 bg-[#FAF9F6] py-20 text-[#242421] sm:py-24">
        <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
          <EditorialReveal className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="editorial-eyebrow text-bronze-ink">
                03 · Working Approach
              </p>
              <h2 className="font-editorial mt-4 text-4xl font-normal text-[#242421] sm:text-5xl">
                Five Steps from Dialogue to Handover
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-bronze-ink px-7 py-3.5 text-xs font-medium tracking-[0.18em] uppercase text-[#242421] transition-colors hover:bg-bronze-ink hover:text-[#FAF9F6]"
            >
              <span>Book an Initial Meeting</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </EditorialReveal>

          <div className="grid gap-8 border-t border-[#242421]/14 pt-10 md:grid-cols-2 lg:grid-cols-5">
            {SITE_CONFIG.process.map((step) => (
              <div key={step.step} className="flex min-w-0 flex-col gap-3">
                <span className="font-editorial text-3xl text-bronze-ink">
                  {step.step}
                </span>
                <h3 className="font-editorial text-2xl text-[#242421]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#242421]/78">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageMount>
  );
}

