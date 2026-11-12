import React from "react";

interface BrandLogoProps {
  tone?: "dark" | "light";
  showSubtitle?: boolean;
  compact?: boolean;
  className?: string;
}

/**
 * Faithfully preserves the original VCUBE geometric monogram (interlocking
 * concentric square spiral paired with the four-ribbed V mark from VC_logo_2.16)
 * rendered as crisp resolution-independent SVG for luxury editorial surfaces.
 */
export function BrandLogo({
  tone = "dark",
  showSubtitle = true,
  compact = false,
  className = "",
}: BrandLogoProps) {
  const ink = tone === "light" ? "#FAF9F6" : "#242421";
  const subInk = tone === "light" ? "#CBB597" : "#745F44";

  return (
    <span className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        viewBox="0 0 112 96"
        aria-hidden="true"
        className={compact ? "h-8 w-auto" : "h-10 w-auto"}
        fill="none"
      >
        {/* Concentric interlocking geometric square motif above left arm */}
        <path
          d="M11 8H38V33H33.5V12.5H11V8Z"
          fill={ink}
        />
        <path
          d="M5 13.5H9.5V39.5H34.5V44H5V13.5Z"
          fill={ink}
        />
        <path
          d="M15 16.5H30.5V29.5H26V21H15V16.5Z"
          fill={ink}
        />
        <path
          d="M13 21.5H17.5V31.5H27.5V36H13V21.5Z"
          fill={ink}
        />

        {/* Four parallel left diagonal bars forming the V */}
        <polygon points="4,49 9.5,49 34,91 28.5,91" fill={ink} />
        <polygon points="12.5,49 18,49 42.5,91 37,91" fill={ink} />
        <polygon points="21,49 26.5,49 51,91 45.5,91" fill={ink} />
        <polygon points="29.5,49 35,49 59.5,91 54,91" fill={ink} />

        {/* Four parallel right diagonal bars ascending from the V apex */}
        <polygon points="46,72.5 91,4 96.5,4 48.7,77.2" fill={ink} />
        <polygon points="50.5,79.8 99.5,4 105,4 53.2,84.5" fill={ink} />
        <polygon points="55,87.1 108,4 111.5,9.4 57.7,91.8" fill={ink} />
        <polygon points="39.5,62 77.5,4 83,4 42.2,66.7" fill={ink} />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={`font-editorial font-semibold tracking-[0.22em] uppercase ${
            compact ? "text-lg" : "text-xl sm:text-[1.35rem]"
          }`}
          style={{ color: ink }}
        >
          VCUBE
        </span>
        {showSubtitle && (
          <span
            className="mt-1 text-[11px] font-medium tracking-[0.11em] sm:tracking-[0.15em] uppercase"
            style={{ color: subInk }}
          >
            Construction &amp; Interiors
          </span>
        )}
      </span>
    </span>
  );
}

