import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  PORTFOLIO_PROJECTS,
  getProjectBySlug,
  getRelatedProjects,
} from "@/data/projects";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ProjectCard } from "@/components/ProjectCard";
import { EditorialReveal, PageMount } from "@/components/MotionPrimitives";

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.slug, 2);
  const supportingImages = project.gallery.filter(
    (img) => img.id !== project.heroImage.id
  );
  const isPortraitCover = project.coverFormat === "portrait";

  return (
    <PageMount className="bg-[#F5F2EC] pt-24 text-[#242421] sm:pt-32">
      <article>
        {/* Top Breadcrumb, Editorial Header & Hero Frame */}
        <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
          <Link
            href="/projects"
            className="group inline-flex min-h-11 items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-ink-muted transition-colors hover:text-bronze-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" aria-hidden="true" />
            <span>Back to Projects</span>
          </Link>

          {isPortraitCover ? (
            <div className="mt-8 grid items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
              <EditorialReveal className="min-w-0 lg:col-span-6">
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-bronze-ink">
                  <span>{project.index}</span>
                  <span aria-hidden="true" className="h-px w-5 bg-bronze-ink/50" />
                  <span className="sr-only"> · </span>
                  <span>{project.category}</span>
                  <span aria-hidden="true" className="h-px w-5 bg-bronze-ink/50" />
                  <span className="sr-only"> · </span>
                  <span>{project.classification}</span>
                </div>
                <h1 className="font-editorial mt-4 break-words text-4xl font-normal leading-[1.03] tracking-[-0.02em] text-[#242421] sm:text-5xl xl:text-6xl">
                  {project.title}
                </h1>
                <p className="mt-3 font-editorial text-2xl italic text-ink-muted">
                  {project.subtitle}
                </p>
                <div className="mt-7">
                  <span className="inline-block border border-[#242421]/18 bg-[#FAF9F6] px-4 py-2 text-[11px] font-medium tracking-[0.18em] uppercase text-[#242421]">
                    {project.classificationNote}
                  </span>
                </div>
              </EditorialReveal>

              <div className="lg:col-span-5 lg:col-start-8">
                <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden bg-[#242421]/8 lg:max-w-none">
                  <Image
                    src={project.heroImage.src}
                    alt={project.heroImage.alt}
                    fill
                    priority
                    placeholder="blur"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ) : (
            <>
              <EditorialReveal className="mt-8 grid gap-8 pb-12 lg:grid-cols-12 lg:items-end">
                <div className="min-w-0 lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-bronze-ink">
                    <span>{project.index}</span>
                    <span aria-hidden="true" className="h-px w-5 bg-bronze-ink/50" />
                    <span className="sr-only"> · </span>
                    <span>{project.category}</span>
                    <span aria-hidden="true" className="h-px w-5 bg-bronze-ink/50" />
                    <span className="sr-only"> · </span>
                    <span>{project.classification}</span>
                  </div>
                  <h1 className="font-editorial mt-4 break-words text-4xl font-normal leading-[1.03] tracking-[-0.02em] text-[#242421] sm:text-6xl">
                    {project.title}
                  </h1>
                  <p className="mt-3 font-editorial text-2xl italic text-ink-muted">
                    {project.subtitle}
                  </p>
                </div>

                <div className="lg:col-span-4 lg:text-right">
                  <span className="inline-block border border-[#242421]/18 bg-[#FAF9F6] px-4 py-2 text-[11px] font-medium tracking-[0.18em] uppercase text-[#242421]">
                    {project.classificationNote}
                  </span>
                </div>
              </EditorialReveal>

              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#242421]/8">
                <Image
                  src={project.heroImage.src}
                  alt={project.heroImage.alt}
                  fill
                  priority
                  placeholder="blur"
                  sizes="(max-width: 1380px) 100vw, 1380px"
                  className="object-cover"
                />
              </div>
            </>
          )}
        </div>

        {/* Project Description & Design Details */}
        <div className="mx-auto max-w-[1380px] px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
            <EditorialReveal className="min-w-0 lg:col-span-7">
              <p className="editorial-eyebrow text-bronze-ink">
                Architectural Narrative
              </p>
              <p className="font-editorial mt-4 max-w-[38ch] text-2xl leading-snug text-[#242421] sm:text-3xl">
                {project.summary}
              </p>
              <div className="mt-7 max-w-[65ch] space-y-5 text-base leading-relaxed text-[#242421]/78">
                {project.editorialDescription.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </EditorialReveal>

            <EditorialReveal
              delay={0.1}
              className="min-w-0 border border-[#242421]/14 bg-[#FAF9F6] p-8 lg:col-span-5"
            >
              <p className="editorial-eyebrow text-bronze-ink">
                Design Specification
              </p>
              <dl className="mt-6 divide-y divide-[#242421]/12">
                {project.designDetails.map((detail) => (
                  <div key={detail.label} className="min-w-0 py-4 first:pt-0 last:pb-0">
                    <dt className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-muted">
                      {detail.label}
                    </dt>
                    <dd className="mt-1.5 break-words text-sm leading-relaxed text-[#242421]">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 border-t border-[#242421]/12 pt-6">
                <Link
                  href={`/contact?service=${encodeURIComponent(
                    "Interior Design"
                  )}&project=${encodeURIComponent(project.title)}`}
                  className="group inline-flex min-h-11 w-full items-center justify-between bg-[#242421] px-6 py-4 text-xs font-medium tracking-[0.18em] uppercase text-[#FAF9F6] transition-colors hover:bg-bronze-ink"
                >
                  <span>Discuss a Similar Space</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
              </div>
            </EditorialReveal>
          </div>
        </div>

        {/* Multi-frame Gallery */}
        {supportingImages.length > 0 && (
          <section className="border-t border-[#242421]/12 bg-[#FAF9F6] py-20 sm:py-24">
            <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
              <EditorialReveal className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="editorial-eyebrow text-bronze-ink">
                    Visual Documentation
                  </p>
                  <h2 className="font-editorial mt-3 text-3xl font-normal text-[#242421] sm:text-4xl">
                    Project Gallery
                  </h2>
                </div>
                <p className="text-xs tracking-[0.16em] uppercase text-ink-muted">
                  Click any frame to enlarge
                </p>
              </EditorialReveal>

              <ProjectGallery images={supportingImages} />
            </div>
          </section>
        )}

        {/* Related Projects */}
        <section className="mx-auto max-w-[1380px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14">
          <div className="mb-12 flex items-end justify-between border-b border-[#242421]/14 pb-6">
            <div>
              <p className="editorial-eyebrow text-bronze-ink">
                Continue Exploring
              </p>
              <h2 className="font-editorial mt-2 text-3xl font-normal text-[#242421] sm:text-4xl">
                Related Works
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex min-h-11 items-center text-xs font-medium tracking-[0.18em] uppercase text-[#242421] underline underline-offset-4 hover:text-bronze-ink"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {relatedProjects.map((rel) => (
              <ProjectCard
                key={rel.slug}
                project={rel}
                aspectClass={
                  rel.coverFormat === "portrait"
                    ? "aspect-[4/5]"
                    : "aspect-[16/10]"
                }
              />
            ))}
          </div>
        </section>
      </article>
    </PageMount>
  );
}

