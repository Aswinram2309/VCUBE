import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { EditorialReveal, PageMount } from "@/components/MotionPrimitives";

export const metadata: Metadata = {
  title: "Projects & Visual Archive",
  description:
    "Explore residential interior visualizations and executed woodworking and kitchen works by VCUBE Construction and Interiors in Madurai.",
};

export default function ProjectsPage() {
  return (
    <PageMount className="bg-[#F5F2EC] pt-28 text-[#242421] sm:pt-36">
      <div className="mx-auto max-w-[1380px] px-6 pb-24 sm:px-10 sm:pb-32 lg:px-14">
        <EditorialReveal className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="editorial-eyebrow text-bronze-ink">
              Portfolio · Selected Works
            </p>
            <h1 className="font-editorial mt-4 text-5xl font-normal leading-[1.02] tracking-[-0.02em] text-[#242421] sm:text-6xl lg:text-7xl">
              Curated Interior{" "}
              <span className="italic">Studies &amp; Works</span>
            </h1>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-[#242421]/80 sm:text-base">
              A selection of residential bedrooms, culinary spaces, timber foyer
              partitions, and living media walls. Concept studies are explicitly
              labeled alongside executed interior photography from VCUBE.
            </p>
          </div>
        </EditorialReveal>

        <ProjectsShowcase />

        {/* Portfolio Bottom CTA */}
        <section className="mt-24 border-t border-[#242421]/14 pt-16">
          <div
            data-surface="dark"
            className="flex flex-col items-start justify-between gap-8 bg-[#242421] p-10 text-[#FAF9F6] sm:p-14 lg:flex-row lg:items-center"
          >
            <div className="max-w-xl">
              <p className="editorial-eyebrow text-bronze-soft">
                Commission Your Space
              </p>
              <h2 className="font-editorial mt-3 text-3xl font-normal sm:text-4xl">
                Planning a Home or Interior Renovation?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#AAA49B]">
                Share your floor plan or ideas with our Madurai studio to begin
                with an initial consultation and 3D spatial planning.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-3 border border-bronze-soft bg-bronze-soft px-7 py-4 text-xs font-medium tracking-[0.18em] uppercase text-[#242421] transition-colors hover:bg-[#FAF9F6] hover:border-[#FAF9F6]"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </PageMount>
  );
}

