import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { CopyrightYear } from "./CopyrightYear";
import { SITE_CONFIG } from "@/data/site";

export function Footer() {
  return (
    <footer data-surface="dark" className="bg-[#242421] text-[#FAF9F6]">
      <div className="mx-auto max-w-[1380px] px-6 pt-20 pb-24 sm:px-10 sm:pb-20 lg:px-14 lg:pt-24 lg:pb-20">
        <div className="grid gap-14 border-b border-[#FAF9F6]/12 pb-16 lg:grid-cols-12 lg:gap-10">
          {/* Brand column */}
          <div className="min-w-0 lg:col-span-4">
            <Link href="/" className="inline-block">
              <BrandLogo tone="light" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#AAA49B]">
              {SITE_CONFIG.brand.establishedNote} Combining architecture,
              interiors, construction execution, and Vastu harmony across
              residential and commercial spaces.
            </p>
            <Link
              href="/contact"
              className="group mt-6 inline-flex min-h-11 items-center text-xs font-medium tracking-[0.2em] uppercase text-[#FAF9F6] transition-colors hover:text-bronze-soft"
            >
              <span className="inline-flex items-center gap-2 border-b border-bronze-soft pb-1.5">
                <span>Schedule an Initial Meeting</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="sm:col-span-1 lg:col-span-2 lg:col-start-6">
            <p className="editorial-eyebrow text-bronze-soft">Navigation</p>
            <ul className="mt-3 space-y-0 text-sm">
              {SITE_CONFIG.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-[#FAF9F6]/85 transition-colors hover:text-bronze-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Address & Direct Contact */}
          <div className="min-w-0 lg:col-span-3">
            <p className="editorial-eyebrow text-bronze-soft">Madurai Studio</p>
            <ul className="mt-5 space-y-2 text-sm text-[#FAF9F6]/85">
              <li className="flex items-start gap-3 pb-1">
                <MapPin
                  className="mt-1 h-4 w-4 shrink-0 text-bronze-soft"
                  aria-hidden="true"
                />
                <address className="not-italic leading-relaxed">
                  {SITE_CONFIG.contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
              {SITE_CONFIG.contact.phones.map((phone) => (
                <li key={phone.display} className="flex items-center gap-3">
                  <Phone
                    className="h-4 w-4 shrink-0 text-bronze-soft"
                    aria-hidden="true"
                  />
                  <a
                    href={phone.href}
                    className="inline-flex min-h-11 items-center transition-colors hover:text-bronze-soft"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail
                  className="h-4 w-4 shrink-0 text-bronze-soft"
                  aria-hidden="true"
                />
                <a
                  href={SITE_CONFIG.contact.email.href}
                  className="inline-flex min-h-11 items-center break-all transition-colors hover:text-bronze-soft"
                >
                  {SITE_CONFIG.contact.email.display}
                </a>
              </li>
            </ul>
          </div>

          {/* Disciplines & Socials */}
          <div className="lg:col-span-2">
            <p className="editorial-eyebrow text-bronze-soft">Connect</p>
            <ul className="mt-3 space-y-0 text-sm">
              {SITE_CONFIG.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-11 items-center gap-1.5 text-[#FAF9F6]/85 transition-colors hover:text-bronze-soft"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="editorial-eyebrow mt-6 text-bronze-soft">Disciplines</p>
            <p className="mt-3 text-xs leading-relaxed text-[#AAA49B]">
              Interior Design · Architecture &amp; Construction · Vastu Shastra
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-[#AAA49B] sm:flex-row sm:items-center">
          <p>
            &copy; <CopyrightYear /> {SITE_CONFIG.brand.fullName}. All
            rights reserved.
          </p>
          <p className="tracking-[0.14em] uppercase">
            Madurai, Tamil Nadu · India
          </p>
        </div>
      </div>
    </footer>
  );
}
