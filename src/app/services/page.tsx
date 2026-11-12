import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_DATA, VASTU_PRINCIPLES } from "@/data/services";
import {
  EditorialReveal,
  HairlineDraw,
  ImageClipReveal,
  PageMount,
} from "@/components/MotionPrimitives";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive Interior Design, Architecture & Construction, and Vastu Consultation services by VCUBE Construction and Interiors in Madurai.",
};

export default function ServicesPage() {
  return (
    <PageMount className="bg-[#F5F2EC] pt-28 text-[#242421] sm:pt-36">
      {/* Header */}
      <section className="mx-auto max-w-[1380px] px-6 pb-16 sm:px-10 lg:px-14">
        <EditorialReveal className="grid gap-8 border-b border-[#242421]/14 pb-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="editorial-eyebrow text-bronze-ink">
              Services · VCUBE Practice
            </p>
            <h1 className="font-editorial mt-4 text-5xl font-normal leading-[1.02] tracking-[-0.02em] text-[#242421] sm:text-6xl lg:text-7xl">
              Architecture, Interiors &amp;{" "}
              <span className="italic">Vastu Harmony</span>
            </h1>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-[#242421]/80 sm:text-base">
              Three unified disciplines—from foundation engineering and building
              execution to custom interior joinery and directional energy
              planning for residential and commercial spaces.
            </p>
          </div>
        </EditorialReveal>
      </section>

      {/* Detailed Editorial Service Spreads */}
      <div className="mx-auto max-w-[1380px] space-y-20 px-6 pb-16 sm:px-10 sm:space-y-24 sm:pb-20 lg:px-14">
        {SERVICES_DATA.map((service, idx) => {
          const reversed = idx % 2 === 1;
          return (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-28 border-b border-[#242421]/12 pb-16 sm:pb-20 last:border-b-0 last:pb-0"
            >
              <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
                {/* Text Column */}
                <EditorialReveal
                  className={`min-w-0 lg:col-span-6 ${
                    reversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.22em] uppercase text-bronze-ink">
                    <span>{service.index}</span>
                    <span
                      aria-hidden="true"
                      className="h-px w-6 bg-bronze-ink/60"
                    />
                    <span className="sr-only"> · </span>
                    <span>{service.eyebrow}</span>
                  </div>

                  <h2 className="font-editorial mt-4 text-4xl font-normal leading-[1.06] text-[#242421] sm:text-5xl">
                    {service.title}
                  </h2>

                  <p className="mt-5 font-editorial text-2xl italic leading-snug text-[#242421]/85">
                    {service.lead}
                  </p>

                  <div className="mt-6 space-y-4 text-base leading-relaxed text-[#242421]/80">
                    {service.description.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-[#242421]/12 pt-6">
                    <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-bronze-ink">
                      Scope &amp; Deliverables
                    </p>
                    <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-[#242421]/85"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 shrink-0 bg-bronze-ink"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-9">
                    <Link
                      href={`/contact?service=${encodeURIComponent(
                        service.inquiryValue
                      )}`}
                      className="group inline-flex min-h-11 items-center gap-3 bg-[#242421] px-7 py-4 text-xs font-medium tracking-[0.18em] uppercase text-[#FAF9F6] transition-colors duration-300 hover:bg-bronze-ink"
                    >
                      <span>Enquire About {service.shortTitle}</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </Link>
                  </div>
                </EditorialReveal>

                {/* Imagery Composition */}
                <div
                  className={`grid gap-6 sm:grid-cols-12 lg:col-span-6 ${
                    reversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <ImageClipReveal className="sm:col-span-12">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#242421]/6">
                      <Image
                        src={service.image.src}
                        alt={service.image.alt}
                        fill
                        placeholder="blur"
                        sizes="(max-width: 1024px) 100vw, 48vw"
                        className="object-cover"
                      />
                    </div>
                  </ImageClipReveal>

                  <ImageClipReveal
                    delay={0.12}
                    className="sm:col-span-8 sm:col-start-5"
                  >
                    <div
                      className={`relative w-full overflow-hidden bg-[#242421]/6 ${
                        service.secondaryImage.format === "portrait"
                          ? "aspect-[4/5]"
                          : "aspect-[16/10]"
                      }`}
                    >
                      <Image
                        src={service.secondaryImage.src}
                        alt={service.secondaryImage.alt}
                        fill
                        placeholder="blur"
                        sizes="(max-width: 1024px) 80vw, 32vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-2.5 text-xs tracking-[0.14em] uppercase text-ink-muted">
                      {service.secondaryImage.caption}
                    </p>
                  </ImageClipReveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Vastu Shastra Reference Section (Preserved from VCUBE Original Content) */}
      <section className="border-t border-[#242421]/10 bg-[#FAF9F6] py-20 sm:py-24">
        <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
          <EditorialReveal className="max-w-2xl">
            <p className="editorial-eyebrow text-bronze-ink">
              Vastu Shastra Reference
            </p>
            <h2 className="font-editorial mt-4 text-4xl font-normal leading-[1.08] text-[#242421] sm:text-5xl">
              Foundational Spatial Principles
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#242421]/80 sm:text-base">
              Key directional principles integrated into residential layouts by
              VCUBE to harmonize the five elements and everyday living spaces.
            </p>
          </EditorialReveal>

          <HairlineDraw className="my-12" />

          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {VASTU_PRINCIPLES.map((item, idx) => (
              <EditorialReveal
                key={item.element}
                delay={idx * 0.05}
                className="border-t border-[#242421]/16 pt-6"
              >
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-bronze-ink">
                  {item.zone}
                </p>
                <h3 className="font-editorial mt-2 text-2xl text-[#242421]">
                  {item.element}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#242421]/80">
                  {item.guidance}
                </p>
              </EditorialReveal>
            ))}
          </div>

          <div
            data-surface="dark"
            className="mt-14 flex flex-col items-start justify-between gap-6 border border-[#242421]/14 bg-[#242421] p-8 text-[#FAF9F6] sm:flex-row sm:items-center sm:p-10"
          >
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl">
                Need a Detailed Vastu &amp; Architectural Discussion?
              </h3>
              <p className="mt-1.5 text-sm text-[#AAA49B]">
                Consult directly with the VCUBE Madurai team before finalizing
                your building or interior layout.
              </p>
            </div>
            <Link
              href="/contact?service=Vastu%20Consultation"
              className="group inline-flex min-h-11 shrink-0 items-center gap-2.5 bg-bronze-soft px-6 py-3.5 text-xs font-medium tracking-[0.18em] uppercase text-[#242421] transition-colors hover:bg-[#FAF9F6]"
            >
              <span>Consult Our Team</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </PageMount>
  );
}

