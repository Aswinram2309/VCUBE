"use client";

import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import {
  PORTFOLIO_PROJECTS,
  type PortfolioProject,
  type ProjectCategory,
  type ProjectStatus,
} from "@/data/projects";
import { ALL_MEDIA_LIST, type DemoMediaAsset } from "@/data/media";
import { ProjectCard } from "./ProjectCard";
import { LightboxModal } from "./LightboxModal";

type PortfolioViewMode = "series" | "archive";

const CATEGORIES: ("All" | ProjectCategory)[] = [
  "All",
  "Bedroom",
  "Kitchen",
  "Living & Foyer",
];

const STATUS_FILTERS: ("All" | ProjectStatus)[] = [
  "All",
  "Concept Project",
  "Executed Work",
];

function toTabId(category: string): string {
  return `portfolio-tab-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

export function ProjectsShowcase() {
  const [viewMode, setViewMode] = useState<PortfolioViewMode>("series");
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | ProjectCategory
  >("All");
  const [selectedStatus, setSelectedStatus] = useState<"All" | ProjectStatus>(
    "All"
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const hasActiveFilter =
    selectedCategory !== "All" || selectedStatus !== "All";

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedStatus("All");
    setLightboxIndex(null);
  };

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((project) => {
      const matchesCat =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesStatus =
        selectedStatus === "All" || project.classification === selectedStatus;
      return matchesCat && matchesStatus;
    });
  }, [selectedCategory, selectedStatus]);

  const filteredArchiveMedia: DemoMediaAsset[] = useMemo(() => {
    return ALL_MEDIA_LIST.filter((item) => {
      const matchesCat =
        selectedCategory === "All" || item.space === selectedCategory;
      const matchesStatus =
        selectedStatus === "All" ||
        (selectedStatus === "Concept Project" && item.origin === "3D Concept") ||
        (selectedStatus === "Executed Work" && item.origin === "Completed Work");
      return matchesCat && matchesStatus;
    });
  }, [selectedCategory, selectedStatus]);

  const projectRows = useMemo(() => {
    const rows: { project: PortfolioProject; index: number }[][] = [];
    for (let i = 0; i < filteredProjects.length; i += 2) {
      const pair = [{ project: filteredProjects[i], index: i }];
      if (i + 1 < filteredProjects.length) {
        pair.push({ project: filteredProjects[i + 1], index: i + 1 });
      }
      rows.push(pair);
    }
    return rows;
  }, [filteredProjects]);

  const handleTabKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    idx: number
  ) => {
    let nextIdx: number | null = null;
    if (e.key === "ArrowRight") {
      nextIdx = (idx + 1) % CATEGORIES.length;
    } else if (e.key === "ArrowLeft") {
      nextIdx = (idx - 1 + CATEGORIES.length) % CATEGORIES.length;
    } else if (e.key === "Home") {
      nextIdx = 0;
    } else if (e.key === "End") {
      nextIdx = CATEGORIES.length - 1;
    }

    if (nextIdx !== null) {
      e.preventDefault();
      setSelectedCategory(CATEGORIES[nextIdx]);
      setLightboxIndex(null);
      tabRefs.current[nextIdx]?.focus();
    }
  };

  const activeCount =
    viewMode === "series"
      ? filteredProjects.length
      : filteredArchiveMedia.length;

  return (
    <>
      {/* Editorial Control Strip */}
      <div className="mb-5 flex flex-col justify-between gap-4 border-y border-[#242421]/14 py-3.5 lg:flex-row lg:items-center">
        <div
          role="tablist"
          aria-label="Filter projects by space"
          className="flex flex-wrap items-center gap-5 sm:gap-7"
        >
          {CATEGORIES.map((category, idx) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                id={toTabId(category)}
                type="button"
                role="tab"
                tabIndex={active ? 0 : -1}
                aria-selected={active}
                aria-controls="portfolio-results"
                onClick={() => {
                  setSelectedCategory(category);
                  setLightboxIndex(null);
                }}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
                className={`relative min-h-11 py-2 text-xs font-medium tracking-[0.2em] uppercase transition-colors ${
                  active
                    ? "text-[#242421]"
                    : "text-ink-muted hover:text-[#242421]"
                }`}
              >
                {category}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-px bg-bronze-ink"
                  />
                )}
              </button>
            );
          })}
        </div>

        <div
          role="group"
          aria-label="Portfolio presentation view"
          className="inline-flex w-fit shrink-0 items-center border border-[#242421]/20 bg-[#FAF9F6] p-1"
        >
          <button
            type="button"
            aria-pressed={viewMode === "series"}
            onClick={() => {
              setViewMode("series");
              setLightboxIndex(null);
            }}
            className={`min-h-11 px-4 py-2 text-[11px] font-medium tracking-[0.16em] uppercase transition-colors ${
              viewMode === "series"
                ? "bg-[#242421] text-[#FAF9F6]"
                : "text-[#242421]/78 hover:text-[#242421]"
            }`}
          >
            Curated Series
          </button>
          <button
            type="button"
            aria-pressed={viewMode === "archive"}
            onClick={() => {
              setViewMode("archive");
              setLightboxIndex(null);
            }}
            className={`min-h-11 px-4 py-2 text-[11px] font-medium tracking-[0.16em] uppercase transition-colors ${
              viewMode === "archive"
                ? "bg-[#242421] text-[#FAF9F6]"
                : "text-[#242421]/78 hover:text-[#242421]"
            }`}
          >
            All Archive Frames
          </button>
        </div>
      </div>

      {/* Presentation Status Filter & Summary */}
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-center gap-4 text-xs text-ink-muted">
          <p
            aria-live="polite"
            className="tabular-nums tracking-[0.12em] uppercase"
          >
            Showing {activeCount}{" "}
            {viewMode === "series"
              ? activeCount === 1
                ? "curated study"
                : "curated studies"
              : activeCount === 1
              ? "archive frame"
              : "archive frames"}
          </p>
          {hasActiveFilter && (
            <button
              type="button"
              onClick={resetFilters}
              className="min-h-11 px-1 text-xs font-medium tracking-[0.16em] uppercase text-bronze-ink underline underline-offset-4 transition-colors hover:text-[#242421]"
            >
              Clear Filters
            </button>
          )}
        </div>

        <div
          role="group"
          aria-label="Filter by project status"
          className="flex flex-wrap items-center gap-2"
        >
          {STATUS_FILTERS.map((status) => {
            const active = selectedStatus === status;
            return (
              <button
                key={status}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setSelectedStatus(status);
                  setLightboxIndex(null);
                }}
                className={`min-h-11 border px-3.5 py-2 text-[11px] font-medium tracking-[0.16em] uppercase transition-colors ${
                  active
                    ? "border-[#242421] bg-[#242421] text-[#FAF9F6]"
                    : "border-[#242421]/22 bg-transparent text-[#242421]/82 hover:border-[#242421]/50 hover:text-[#242421]"
                }`}
              >
                {status === "All" ? "All Presentations" : status}
              </button>
            );
          })}
        </div>
      </div>

      <div
        id="portfolio-results"
        role="tabpanel"
        aria-labelledby={toTabId(selectedCategory)}
      >
        <h2 className="sr-only">
          {viewMode === "series"
            ? "Curated Case Studies"
            : "Study Drawings and Completed Photographs"}
        </h2>

        {activeCount === 0 ? (
          <div className="border border-[#242421]/14 bg-[#FAF9F6] p-12 text-center">
            <p className="font-editorial text-2xl text-[#242421]">
              No curated studies or frames match this filter combination.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 inline-flex min-h-11 items-center border border-[#242421] px-6 py-2.5 text-xs tracking-[0.18em] uppercase text-[#242421] transition-colors hover:bg-[#242421] hover:text-[#FAF9F6]"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === "series" ? (
          <div className="space-y-16 lg:space-y-20">
            {projectRows.map((row, rowIdx) => {
              if (row.length === 1) {
                const { project, index } = row[0];
                const isPortrait = project.coverFormat === "portrait";
                return (
                  <div
                    key={project.slug}
                    className={
                      isPortrait ? "mx-auto max-w-md" : "mx-auto max-w-4xl"
                    }
                  >
                    <ProjectCard
                      project={project}
                      aspectClass={isPortrait ? "aspect-[3/4]" : "aspect-[16/10]"}
                      priority={index < 2}
                    />
                  </div>
                );
              }

              const [first, second] = row;
              const mixedOrientation =
                first.project.coverFormat !== second.project.coverFormat;
              const bothPortrait =
                first.project.coverFormat === "portrait" &&
                second.project.coverFormat === "portrait";

              return (
                <div
                  key={`series-row-${rowIdx}`}
                  className={`grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-8 lg:gap-12 ${
                    bothPortrait ? "mx-auto max-w-5xl" : ""
                  }`}
                >
                  {row.map(({ project, index }, pairPos) => {
                    const isPortrait = project.coverFormat === "portrait";
                    const baseSpan = mixedOrientation
                      ? isPortrait
                        ? "md:col-span-5"
                        : "md:col-span-7"
                      : "md:col-span-6";
                    const stagger = pairPos === 1 ? "md:mt-14" : "";

                    return (
                      <div
                        key={project.slug}
                        className={`min-w-0 ${baseSpan} ${stagger}`}
                      >
                        <ProjectCard
                          project={project}
                          aspectClass={
                            isPortrait ? "aspect-[3/4]" : "aspect-[16/10]"
                          }
                          priority={index < 2}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArchiveMedia.map((media, idx) => (
              <button
                key={media.id}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                aria-label={`Enlarge ${media.caption} (${media.origin})`}
                className="group relative flex min-w-0 flex-col text-left focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                <div
                  className={`relative w-full overflow-hidden bg-[#242421]/6 ${
                    media.format === "portrait"
                      ? "aspect-[4/5]"
                      : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    placeholder="blur"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="vcube-no-print absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center bg-[#242421]/90 text-[#FAF9F6] opacity-90 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                    <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-3">
                  <p className="min-w-0 break-words text-sm font-medium text-[#242421]">
                    {media.caption}
                  </p>
                  <span className="shrink-0 text-[11px] tracking-[0.18em] uppercase text-bronze-ink">
                    {media.origin}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <LightboxModal
        items={filteredArchiveMedia}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />
    </>
  );
}
