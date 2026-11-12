"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import type { DemoMediaAsset } from "@/data/media";
import { LightboxModal } from "./LightboxModal";

export function ProjectGallery({ images }: { images: DemoMediaAsset[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return null;
  }

  // Group images into balanced rows so landscape and portrait frames never
  // create awkward half-empty tracks or upscale narrow portrait files.
  const rows: { item: DemoMediaAsset; index: number }[][] = [];
  for (let i = 0; i < images.length; i += 2) {
    const pair = [{ item: images[i], index: i }];
    if (i + 1 < images.length) {
      pair.push({ item: images[i + 1], index: i + 1 });
    }
    rows.push(pair);
  }

  const allPortrait = images.every((img) => img.format === "portrait");
  const containerWidthClass =
    images.length === 1
      ? images[0].format === "portrait"
        ? "mx-auto max-w-md"
        : "mx-auto max-w-4xl"
      : allPortrait
      ? "mx-auto max-w-5xl"
      : "";

  return (
    <>
      <div className={`space-y-8 ${containerWidthClass}`}>
        {rows.map((row, rowIdx) => {
          if (row.length === 1) {
            const { item, index } = row[0];
            const aspectClass =
              item.format === "portrait" ? "aspect-[4/5]" : "aspect-[16/10]";
            const singleWrapClass =
              images.length > 1
                ? item.format === "portrait"
                  ? "mx-auto w-full max-w-md"
                  : "mx-auto w-full max-w-4xl"
                : "w-full";

            return (
              <div key={item.id} className={singleWrapClass}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Inspect ${item.caption} (${item.origin}) in fullscreen`}
                  className="group relative block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  <div
                    className={`relative w-full overflow-hidden bg-[#242421]/6 ${aspectClass}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      placeholder="blur"
                      sizes="(max-width: 1024px) 100vw, 896px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <span className="vcube-no-print absolute bottom-4 right-4 inline-flex items-center gap-2 border border-[#FAF9F6]/25 bg-[#242421]/90 px-3 py-1.5 text-[11px] tracking-[0.18em] uppercase text-[#FAF9F6] opacity-95 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                      <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Inspect Frame</span>
                    </span>
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-4 border-b border-[#242421]/10 pb-3">
                    <p className="min-w-0 break-words text-sm text-[#242421]/85">
                      {item.caption}
                    </p>
                    <span className="shrink-0 text-[11px] tracking-[0.18em] uppercase text-bronze-ink">
                      {item.origin}
                    </span>
                  </div>
                </button>
              </div>
            );
          }

          const [first, second] = row;
          const mixedOrientation = first.item.format !== second.item.format;

          return (
            <div
              key={`row-${rowIdx}`}
              className="grid grid-cols-1 items-start gap-8 md:grid-cols-12"
            >
              {row.map(({ item, index }) => {
                const colClass = mixedOrientation
                  ? item.format === "portrait"
                    ? "md:col-span-5"
                    : "md:col-span-7"
                  : "md:col-span-6";
                const aspectClass =
                  item.format === "portrait" ? "aspect-[4/5]" : "aspect-[16/10]";

                return (
                  <div key={item.id} className={colClass}>
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(index)}
                      aria-label={`Inspect ${item.caption} (${item.origin}) in fullscreen`}
                      className="group relative block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                      <div
                        className={`relative w-full overflow-hidden bg-[#242421]/6 ${aspectClass}`}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          placeholder="blur"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                        <span className="vcube-no-print absolute bottom-4 right-4 inline-flex items-center gap-2 border border-[#FAF9F6]/25 bg-[#242421]/90 px-3 py-1.5 text-[11px] tracking-[0.18em] uppercase text-[#FAF9F6] opacity-95 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                          <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Inspect Frame</span>
                        </span>
                      </div>
                      <div className="mt-3 flex items-baseline justify-between gap-4 border-b border-[#242421]/10 pb-3">
                        <p className="min-w-0 break-words text-sm text-[#242421]/85">
                          {item.caption}
                        </p>
                        <span className="shrink-0 text-[11px] tracking-[0.18em] uppercase text-bronze-ink">
                          {item.origin}
                        </span>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <LightboxModal
        items={images}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />
    </>
  );
}

