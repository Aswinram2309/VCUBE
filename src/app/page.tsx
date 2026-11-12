import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HomeHero } from "@/components/HomeHero";
import { ProjectCard } from "@/components/ProjectCard";
import {
  EditorialReveal,
  HairlineDraw,
  ImageClipReveal,
} from "@/components/MotionPrimitives";
import { PORTFOLIO_PROJECTS } from "@/data/projects";
import { SERVICES_DATA } from "@/data/services";
import { DEMO_MEDIA } from "@/data/media";
import { SITE_CONFIG } from "@/data/site";

export default function HomePage() {
  const [project1, project2, project3, project4, project5, project6] =
    PORTFOLIO_PROJECTS;

  return (
    <div className="bg-[#F5F2EC] text-[#242421]">
      {/* SECTION 01 — HERO */}
      <HomeHero />

      {/* SECTION 02 — INTRODUCTION */}
      <section
        id="introduction"
        className="mx-auto max-w-[1380px] scroll-mt-24 px-6 py-16 sm:px-10 sm:py-24 lg:px-14"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <EditorialReveal className="lg:col-span-6">
            <p className="editorial-eyebrow text-bronze-ink">
              01 · Studio Introduction
            </p>
            <h2 className="font-editorial mt-4 text-4xl font-normal leading-[1.06] tracking-[-0.015em] text-[#242421] sm:text-5xl lg:text-[3.4rem]">
              Designing Spaces.
              <br />
              <span className="italic">Creating Experiences.</span>
            </h2>
          </EditorialReveal>

          <EditorialReveal
            delay={0.12}
            className="flex flex-col justify-between lg:col-span-5 lg:col-start-8"
          >
            <div className="space-y-5 text-base leading-relaxed text-[#242421]/80 sm:text-[1.05rem]">
              <p>{SITE_CONFIG.about.introStatement}</p>
              <p>{SITE_CONFIG.about.extendedStatement}</p>
            </div>

            <div className="mt-6 border-t border-[#242421]/14 pt-4">
              <Link
                href="/about"
                className="group inline-flex min-h-11 items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase text-[#242421] transition-colors hover:text-bronze-ink"
              >
                <span>About the Studio</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </EditorialReveal>
        </div>
      </section>

      <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
        <HairlineDraw />
      </div>

      {/* SECTION 03 — FEATURED PROJECTS */}
      <section className="mx-auto max-w-[1380px] px-6 pt-14 pb-20 sm:px-10 sm:pt-20 sm:pb-28 lg:px-14">
        <EditorialReveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="editorial-eyebrow text-bronze-ink">
              02 · Featured Portfolio
            </p>
            <h2 className="font-editorial mt-4 text-4xl font-normal leading-[1.06] text-[#242421] sm:text-5xl">
              Selected Interior &amp; Spatial Studies
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex min-h-11 items-center text-xs font-medium tracking-[0.2em] uppercase text-[#242421] transition-colors hover:text-bronze-ink"
          >
            <span className="inline-flex items-center gap-2.5 border-b border-[#242421]/30 pb-1.5 transition-colors group-hover:border-bronze-ink">
              <span>All Projects</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </span>
          </Link>
        </EditorialReveal>

        {/* Asymmetrical Editorial Gallery */}
        <div className="space-y-16 lg:space-y-24">
          {/* Tier 1: Wide Concept Study + Staggered Portrait Executed Work */}
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-8 lg:gap-12">
            <EditorialReveal className="md:col-span-7">
              <ProjectCard
                project={project1}
                coverImage={DEMO_MEDIA.image5}
                aspectClass="aspect-[16/10]"
              />
            </EditorialReveal>
            <EditorialReveal delay={0.12} className="md:col-span-5 md:mt-20">
              <ProjectCard
                project={project2}
                aspectClass="aspect-[3/4]"
              />
            </EditorialReveal>
          </div>

          {/* Tier 2: Portrait Executed Work + Offset Landscape Kitchen Concept */}
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-8 lg:gap-12">
            <EditorialReveal className="md:col-span-5">
              <ProjectCard
                project={project3}
                aspectClass="aspect-[3/4]"
              />
            </EditorialReveal>
            <EditorialReveal delay={0.12} className="md:col-span-7 md:mt-16">
              <ProjectCard
                project={project4}
                aspectClass="aspect-[16/10]"
              />
            </EditorialReveal>
          </div>

          {/* Tier 3: Youth Study & Geometric Living Wall */}
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-8 lg:gap-12">
            <EditorialReveal className="md:col-span-6">
              <ProjectCard
                project={project5}
                aspectClass="aspect-[16/10]"
              />
            </EditorialReveal>
            <EditorialReveal delay={0.12} className="md:col-span-6 md:mt-12">
              <ProjectCard
                project={project6}
                aspectClass="aspect-[16/10]"
              />
            </EditorialReveal>
          </div>
        </div>
      </section>

      {/* SECTION 04 — SERVICES */}
      <section className="border-y border-[#242421]/10 bg-[#FAF9F6] py-20 sm:py-24">
        <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
          <EditorialReveal className="mb-16 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="editorial-eyebrow text-bronze-ink">
                03 · Services &amp; Disciplines
              </p>
              <h2 className="font-editorial mt-4 text-4xl font-normal leading-[1.06] text-[#242421] sm:text-5xl">
                Integrated Architecture, Interiors &amp; Vastu
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 lg:text-right">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-b border-[#242421]/30 pb-1.5 text-xs font-medium tracking-[0.2em] uppercase text-[#242421] transition-colors hover:border-bronze-ink hover:text-bronze-ink"
              >
                <span>View Full Services</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </EditorialReveal>

          <div className="divide-y divide-[#242421]/12 border-y border-[#242421]/12">
            {SERVICES_DATA.map((service, idx) => (
              <EditorialReveal
                key={service.id}
                delay={idx * 0.08}
                className="group grid gap-6 py-10 md:grid-cols-2 md:items-center md:gap-8 lg:grid-cols-12 lg:gap-8 lg:py-14 xl:gap-12"
              >
                <div className="flex items-baseline gap-5 md:col-span-2 lg:col-span-5 lg:gap-7">
                  <span className="shrink-0 font-editorial text-2xl text-bronze-ink">
                    {service.index}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] tracking-[0.2em] uppercase text-ink-muted">
                      {service.eyebrow}
                    </p>
                    <h3 className="font-editorial mt-2 text-3xl font-normal text-[#242421] transition-colors group-hover:text-bronze-ink sm:text-4xl">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="min-w-0 lg:col-span-4">
                  <p className="text-sm leading-relaxed text-[#242421]/78 sm:text-base">
                    {service.lead}
                  </p>
                  <Link
                    href={`/services#${service.id}`}
                    className="group mt-3 inline-flex min-h-11 items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-[#242421] transition-colors hover:text-bronze-ink"
                  >
                    <span>Explore {service.shortTitle}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>

                <div className="min-w-0 lg:col-span-3">
                  <Link
                    href={`/services#${service.id}`}
                    className="relative block aspect-[16/10] w-full overflow-hidden bg-[#242421]/5"
                  >
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      placeholder="blur"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </Link>
                </div>
              </EditorialReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — DESIGN PHILOSOPHY */}
      <section className="mx-auto max-w-[1380px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="relative lg:col-span-6">
            <ImageClipReveal>
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#242421]/6">
                <Image
                  src={DEMO_MEDIA.image6.src}
                  alt={DEMO_MEDIA.image6.alt}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
              </div>
            </ImageClipReveal>
            <EditorialReveal
              delay={0.18}
              className="relative z-10 mt-6 sm:-mt-16 sm:ml-auto sm:w-[55%] lg:w-[52%]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden border-4 border-[#F5F2EC] bg-[#242421]/6">
                <Image
                  src={DEMO_MEDIA.image18.src}
                  alt={DEMO_MEDIA.image18.alt}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 60vw, 26vw"
                  className="object-cover"
                />
              </div>
            </EditorialReveal>
          </div>

          <EditorialReveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="editorial-eyebrow text-bronze-ink">
              04 · Design Philosophy
            </p>
            <h2 className="font-editorial mt-4 text-4xl font-normal leading-[1.06] text-[#242421] sm:text-5xl">
              Beyond Interiors.
              <br />
              <span className="italic">Into Everyday Living.</span>
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-[#242421]/80">
              <p>
                Interior architecture is a blend of art and science—planning,
                researching, coordinating, and shaping spaces that support a
                healthier, calmer, and more pleasing daily rhythm.
              </p>
              <p>
                Whether designing a bespoke residence from its foundation or
                refining the energy of an interior layout through Vastu
                principles, VCUBE balances aesthetics, convenience, material
                durability, and budget clarity.
              </p>
            </div>
            <blockquote className="mt-8 border-l-2 border-bronze-ink pl-5 font-editorial text-2xl italic leading-snug text-[#242421]">
              &ldquo;We execute client&rsquo;s ideas into reality—respecting
              your thoughts, your habits, and your needs.&rdquo;
            </blockquote>
          </EditorialReveal>
        </div>
      </section>

      {/* SECTION 06 — OUR PROCESS */}
      <section className="border-y border-[#242421]/10 bg-[#FAF9F6] py-20 sm:py-24">
        <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
          <EditorialReveal className="mb-16 max-w-2xl">
            <p className="editorial-eyebrow text-bronze-ink">
              05 · How We Work
            </p>
            <h2 className="font-editorial mt-4 text-4xl font-normal leading-[1.06] text-[#242421] sm:text-5xl">
              A Clear Five-Stage Journey
            </h2>
            <p className="mt-4 text-base text-[#242421]/80">
              Structured communication and transparent milestones from our first
              conversation to turnkey handover.
            </p>
          </EditorialReveal>

          <HairlineDraw className="mb-12" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {SITE_CONFIG.process.map((item, idx) => (
              <EditorialReveal
                key={item.step}
                delay={idx * 0.08}
                className="relative flex flex-col border-l border-[#242421]/14 pl-5 lg:border-l-0 lg:border-t lg:border-[#242421]/14 lg:pl-0 lg:pt-6"
              >
                <span className="font-editorial text-3xl text-bronze-ink">
                  {item.step}
                </span>
                <h3 className="font-editorial mt-3 text-2xl font-normal text-[#242421]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#242421]/75">
                  {item.description}
                </p>
              </EditorialReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07 — ABOUT VCUBE */}
      <section className="mx-auto max-w-[1380px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <EditorialReveal className="lg:col-span-6">
            <p className="editorial-eyebrow text-bronze-ink">
              06 · About VCUBE
            </p>
            <h2 className="font-editorial mt-4 text-4xl font-normal leading-[1.06] text-[#242421] sm:text-5xl">
              Built on Honesty, Ethics &amp; Craft
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#242421]/80">
              Based in Vandiyur, Madurai, VCUBE brings together energetic young
              designers and experienced construction professionals committed to
              delivering residential and commercial projects with integrity and
              accountability.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {SITE_CONFIG.about.coreValues.map((value) => (
                <div
                  key={value.index}
                  className="border-t border-[#242421]/14 pt-4"
                >
                  <span className="text-[11px] tracking-[0.2em] text-bronze-ink">
                    {value.index}
                  </span>
                  <h3 className="font-editorial mt-1.5 text-xl text-[#242421]">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#242421]/80">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex min-h-11 items-center gap-3 border border-[#242421] px-7 py-3.5 text-xs font-medium tracking-[0.18em] uppercase text-[#242421] transition-colors duration-300 hover:bg-[#242421] hover:text-[#FAF9F6]"
              >
                <span>Read Our Studio Profile</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </EditorialReveal>

          <ImageClipReveal delay={0.12} className="lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#242421]/6">
              <Image
                src={DEMO_MEDIA.image15.src}
                alt={DEMO_MEDIA.image15.alt}
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-xs tracking-[0.14em] uppercase text-ink-muted">
              Completed Work · Floating Walnut Media Console
            </p>
          </ImageClipReveal>
        </div>
      </section>

      {/* SECTION 08 — FINAL CTA */}
      <section className="border-t border-[#242421]/10 bg-[#FAF9F6] py-16 text-[#242421] sm:py-24">
        <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
          <EditorialReveal className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="editorial-eyebrow text-bronze-ink">
                07 · Start a Conversation
              </p>
              <h2 className="font-editorial mt-5 text-4xl font-normal leading-[1.04] text-[#242421] sm:text-6xl lg:text-[4.25rem]">
                Let&rsquo;s Create Something{" "}
                <span className="italic text-bronze-ink">Timeless.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#242421]/78 sm:text-lg">
                Have a space in mind? Let&rsquo;s bring your vision to life.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex min-h-11 shrink-0 items-center gap-3 border border-[#242421] bg-[#242421] px-8 py-4 text-xs font-medium tracking-[0.2em] uppercase text-[#FAF9F6] transition-colors duration-300 hover:border-bronze-ink hover:bg-bronze-ink"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </EditorialReveal>
        </div>
      </section>
    </div>
  );
}
