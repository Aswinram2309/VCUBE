import React, { Suspense } from "react";
import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { EditorialReveal, PageMount } from "@/components/MotionPrimitives";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact VCUBE Construction and Interiors in Vandiyur, Madurai for interior design, residential or commercial construction, and Vastu consultation.",
};

export default function ContactPage() {
  return (
    <PageMount className="bg-[#F5F2EC] pt-28 text-[#242421] sm:pt-36">
      <div className="mx-auto max-w-[1380px] px-6 pb-24 sm:px-10 sm:pb-32 lg:px-14">
        <EditorialReveal className="mb-14 border-b border-[#242421]/14 pb-12">
          <p className="editorial-eyebrow text-bronze-ink">
            Contact · Madurai Studio
          </p>
          <h1 className="font-editorial mt-4 text-5xl font-normal leading-[1.02] tracking-[-0.02em] text-[#242421] sm:text-6xl lg:text-7xl">
            Let&rsquo;s Discuss{" "}
            <span className="italic">Your Upcoming Space.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#242421]/80">
            Reach out to schedule an initial client meeting at our Madurai studio
            or share your project brief below.
          </p>
        </EditorialReveal>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Primary Column: Enquiry Form (DOM, focus & mobile first) */}
          <EditorialReveal className="min-w-0 lg:col-span-7">
            <Suspense
              fallback={
                <div className="border border-[#242421]/14 bg-[#FAF9F6] p-10 text-sm text-ink-muted">
                  Loading enquiry form...
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </EditorialReveal>

          {/* Secondary Column: Verified Contact Info, WhatsApp & Map */}
          <EditorialReveal delay={0.1} className="min-w-0 space-y-10 lg:col-span-5">
            <div className="space-y-7 border-b border-[#242421]/14 pb-9">
              <div>
                <p className="editorial-eyebrow text-bronze-ink">Studio Address</p>
                <div className="mt-3 flex items-start gap-3">
                  <MapPin
                    className="mt-1 h-4 w-4 shrink-0 text-bronze-ink"
                    aria-hidden="true"
                  />
                  <address className="not-italic text-base leading-relaxed text-[#242421]">
                    {SITE_CONFIG.contact.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </div>

              <div>
                <p className="editorial-eyebrow text-bronze-ink">Telephone</p>
                <div className="mt-3 space-y-2.5">
                  {SITE_CONFIG.contact.phones.map((phone) => (
                    <a
                      key={phone.display}
                      href={phone.href}
                      className="flex items-center gap-3 text-base text-[#242421] transition-colors hover:text-bronze-ink"
                    >
                      <Phone
                        className="h-4 w-4 shrink-0 text-bronze-ink"
                        aria-hidden="true"
                      />
                      <span>{phone.display}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="editorial-eyebrow text-bronze-ink">Email</p>
                <a
                  href={SITE_CONFIG.contact.email.href}
                  className="mt-3 flex items-center gap-3 text-base text-[#242421] transition-colors hover:text-bronze-ink"
                >
                  <Mail
                    className="h-4 w-4 shrink-0 text-bronze-ink"
                    aria-hidden="true"
                  />
                  <span>{SITE_CONFIG.contact.email.display}</span>
                </a>
              </div>
            </div>

            {/* Official WhatsApp CTA */}
            <div
              data-surface="dark"
              className="border border-[#242421]/14 bg-[#242421] p-7 text-[#FAF9F6]"
            >
              <p className="editorial-eyebrow text-bronze-soft">
                Direct WhatsApp Consultation
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#AAA49B]">
                Prefer to message directly or share floor plans? Start a chat
                with VCUBE on WhatsApp.
              </p>
              <a
                href={SITE_CONFIG.contact.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2.5 bg-bronze-soft px-5 py-3 text-xs font-medium tracking-[0.18em] uppercase text-[#242421] transition-colors hover:bg-[#FAF9F6]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>

            {/* Verified Location Map */}
            <div>
              <p className="editorial-eyebrow mb-3 text-bronze-ink">
                Studio Location · Vandiyur, Madurai
              </p>
              <div className="overflow-hidden border border-[#242421]/14 bg-[#FAF9F6]">
                <iframe
                  title="V Cube Construction and Interiors Madurai Location Map"
                  src={SITE_CONFIG.contact.mapEmbedUrl}
                  width="600"
                  height="320"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[280px] w-full border-0 grayscale contrast-[1.05]"
                />
              </div>
            </div>
          </EditorialReveal>
        </div>
      </div>
    </PageMount>
  );
}

