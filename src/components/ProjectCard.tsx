import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { DemoMediaAsset } from "@/data/media";
import type { PortfolioProject } from "@/data/projects";

interface ProjectCardProps {
  project: PortfolioProject;
  coverImage?: DemoMediaAsset;
  aspectClass?: string;
  priority?: boolean;
  className?: string;
}

export function ProjectCard({
  project,
  coverImage,
  aspectClass = "aspect-[16/10]",
  priority = false,
  className = "",
}: ProjectCardProps) {
  const displayImage = coverImage ?? project.heroImage;

  return (
    <article className={`group relative ${className}`}>
      <Link
        href={`/projects/${project.slug}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <div
          className={`relative w-full overflow-hidden bg-[#242421]/6 ${aspectClass}`}
        >
          <Image
            src={displayImage.src}
            alt={displayImage.alt}
            fill
            priority={priority}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 45vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#242421]/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute left-4 top-4 border border-[#FAF9F6]/25 bg-[#242421]/88 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase text-[#FAF9F6] backdrop-blur-xs">
            {project.classification}
          </span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4 border-b border-[#242421]/14 pb-5">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-bronze-ink">
              <span>{project.index}</span>
              <span aria-hidden="true" className="h-px w-5 bg-bronze-ink/50" />
              <span className="sr-only"> · </span>
              <span>{project.category}</span>
            </div>
            <h3 className="font-editorial mt-2 break-words text-2xl font-normal leading-tight text-[#242421] transition-colors duration-300 group-hover:text-bronze-ink sm:text-[1.75rem]">
              {project.title}
            </h3>
            <p className="mt-1.5 max-w-md break-words text-sm leading-relaxed text-[#242421]/80">
              {project.subtitle}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center border border-[#242421]/22 text-[#242421] transition-all duration-300 group-hover:border-bronze-ink group-hover:bg-bronze-ink group-hover:text-[#FAF9F6]"
          >
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}

