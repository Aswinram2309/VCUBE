"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Mail,
  MessageCircle,
  Pencil,
  RotateCcw,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

const SERVICE_OPTIONS = [
  "Interior Design",
  "Architecture & Construction",
  "Vastu Consultation",
  "Turnkey Residential Project",
  "Commercial Interior / Workspace",
];

const LIMITS = {
  name: 100,
  email: 120,
  phone: 24,
  projectRef: 120,
  descriptionMin: 15,
  descriptionMax: 2000,
} as const;

interface FormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  projectRef: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  description?: string;
}

function sanitizeParam(value: string | null, maxLength: number): string {
  if (!value) return "";
  return value.replace(/[\r\n\t]+/g, " ").trim().slice(0, maxLength);
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialServiceParam = searchParams.get("service");
  const initialProjectParam = sanitizeParam(
    searchParams.get("project"),
    LIMITS.projectRef
  );

  const defaultService =
    initialServiceParam && SERVICE_OPTIONS.includes(initialServiceParam)
      ? initialServiceParam
      : SERVICE_OPTIONS[0];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceOverride, setServiceOverride] = useState<string | null>(null);
  const [projectRefOverride, setProjectRefOverride] = useState<string | null>(
    null
  );
  const [description, setDescription] = useState("");

  const service = serviceOverride ?? defaultService;
  const projectRef = projectRefOverride ?? initialProjectParam;

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const summaryHeadingRef = useRef<HTMLHeadingElement>(null);

  const submitTimerRef = useRef<number | null>(null);
  const copyTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (submitTimerRef.current !== null) {
        window.clearTimeout(submitTimerRef.current);
      }
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const validate = (data: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    const trimmedName = data.name.trim();
    const trimmedEmail = data.email.trim();
    const trimmedPhone = data.phone.trim();
    const trimmedDescription = data.description.trim();

    if (trimmedName.length < 2) {
      nextErrors.name = "Please enter your name (at least 2 characters).";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email address (e.g., name@domain.com).";
    }

    const hasInvalidPhoneChars = /[^\d+\s().-]/.test(trimmedPhone);
    const digitsOnly = trimmedPhone.replace(/\D/g, "");
    if (hasInvalidPhoneChars || digitsOnly.length < 8 || digitsOnly.length > 15) {
      nextErrors.phone =
        "Enter 8–15 digits using numbers, spaces, hyphens, or a leading +.";
    }

    if (!data.service) {
      nextErrors.service = "Please select a service discipline.";
    }

    if (trimmedDescription.length < LIMITS.descriptionMin) {
      nextErrors.description = `Please share at least ${LIMITS.descriptionMin} characters about your space or timeline.`;
    }

    return nextErrors;
  };

  const focusFirstError = (validationErrors: FormErrors) => {
    if (validationErrors.name) {
      nameRef.current?.focus();
    } else if (validationErrors.email) {
      emailRef.current?.focus();
    } else if (validationErrors.phone) {
      phoneRef.current?.focus();
    } else if (validationErrors.description) {
      descriptionRef.current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    const currentValues: FormValues = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service,
      projectRef: projectRef.trim(),
      description: description.trim(),
    };

    const validationErrors = validate(currentValues);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      focusFirstError(validationErrors);
      return;
    }

    setSubmitting(true);
    submitTimerRef.current = window.setTimeout(() => {
      setSubmitting(false);
      setSubmittedData(currentValues);
      window.requestAnimationFrame(() => {
        summaryHeadingRef.current?.focus();
      });
    }, 280);
  };

  const handleEdit = () => {
    setSubmittedData(null);
    setErrors({});
    setCopied(false);
    setCopyError(false);
    window.requestAnimationFrame(() => {
      nameRef.current?.focus();
    });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setErrors({});
    setCopied(false);
    setCopyError(false);
    setName("");
    setEmail("");
    setPhone("");
    setServiceOverride(null);
    setProjectRefOverride("");
    setDescription("");
    window.requestAnimationFrame(() => {
      nameRef.current?.focus();
    });
  };

  if (submittedData) {
    const refLine = submittedData.projectRef
      ? `Reference Study: ${submittedData.projectRef}\n`
      : "";
    const briefText = `Name: ${submittedData.name}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}\nService: ${submittedData.service}\n${refLine}\nProject Description:\n${submittedData.description}`;

    const clippedDescriptionForUrl =
      submittedData.description.length > 1100
        ? `${submittedData.description.slice(0, 1100)}…`
        : submittedData.description;

    const refSentence = submittedData.projectRef
      ? ` (regarding ${submittedData.projectRef})`
      : "";

    const whatsappMessage = encodeURIComponent(
      `Hello VCUBE, I am ${submittedData.name} (${submittedData.phone} / ${submittedData.email}). I would like to enquire about ${submittedData.service}${refSentence}.\n\nProject Details: ${clippedDescriptionForUrl}`
    );
    const mailtoSubject = encodeURIComponent(
      `VCUBE Project Enquiry — ${submittedData.service} (${submittedData.name})`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${submittedData.name}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}\nService: ${submittedData.service}\n${refLine}\nProject Description:\n${clippedDescriptionForUrl}`
    );

    const handleCopyBrief = async () => {
      setCopyError(false);
      try {
        await navigator.clipboard.writeText(briefText);
        setCopied(true);
        if (copyTimerRef.current !== null) {
          window.clearTimeout(copyTimerRef.current);
        }
        copyTimerRef.current = window.setTimeout(() => {
          setCopied(false);
        }, 2500);
      } catch {
        setCopied(false);
        setCopyError(true);
      }
    };

    return (
      <div
        aria-live="polite"
        className="min-w-0 border border-[#242421]/18 bg-[#FAF9F6] p-8 sm:p-10"
      >
        <div className="flex items-start gap-4 border-b border-[#242421]/12 pb-6">
          <CheckCircle2
            className="mt-1 h-6 w-6 shrink-0 text-bronze-ink"
            aria-hidden="true"
          />
          <div className="min-w-0">
            <p className="editorial-eyebrow text-bronze-ink">
              Prepared Enquiry Brief
            </p>
            <h2
              ref={summaryHeadingRef}
              tabIndex={-1}
              className="font-editorial mt-2 text-3xl text-[#242421] outline-none"
            >
              Ready to Share with Our Studio
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#242421]/80">
              Preview mode formats your brief locally—nothing has been emailed
              automatically. Select WhatsApp, Email, or Copy Brief below to send
              these details directly to VCUBE Madurai.
            </p>
          </div>
        </div>

        <dl className="mt-6 grid gap-4 border-b border-[#242421]/12 pb-6 text-sm sm:grid-cols-2">
          <div className="min-w-0">
            <dt className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-muted">
              Name
            </dt>
            <dd className="mt-1 break-words font-medium text-[#242421]">
              {submittedData.name}
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-muted">
              Service Interested In
            </dt>
            <dd className="mt-1 break-words font-medium text-[#242421]">
              {submittedData.service}
            </dd>
          </div>
          {submittedData.projectRef && (
            <div className="min-w-0 sm:col-span-2">
              <dt className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-muted">
                Reference Project
              </dt>
              <dd className="mt-1 break-words font-medium text-[#242421]">
                {submittedData.projectRef}
              </dd>
            </div>
          )}
          <div className="min-w-0">
            <dt className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-muted">
              Email
            </dt>
            <dd className="mt-1 break-all text-[#242421]">
              {submittedData.email}
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-muted">
              Phone
            </dt>
            <dd className="mt-1 break-words text-[#242421]">
              {submittedData.phone}
            </dd>
          </div>
          <div className="min-w-0 sm:col-span-2">
            <dt className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-muted">
              Project Description
            </dt>
            <dd className="mt-1 whitespace-pre-line break-words leading-relaxed text-[#242421]/85">
              {submittedData.description}
            </dd>
          </div>
        </dl>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={`${SITE_CONFIG.contact.whatsapp.href}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 bg-[#242421] px-5 py-3 text-xs font-medium tracking-[0.16em] uppercase text-[#FAF9F6] transition-colors hover:bg-bronze-ink"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>Send via WhatsApp</span>
          </a>

          <a
            href={`mailto:${SITE_CONFIG.contact.email.display}?subject=${mailtoSubject}&body=${mailtoBody}`}
            className="inline-flex min-h-11 items-center gap-2 border border-[#242421] px-5 py-3 text-xs font-medium tracking-[0.16em] uppercase text-[#242421] transition-colors hover:bg-[#242421] hover:text-[#FAF9F6]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>Open in Email</span>
          </a>

          <button
            type="button"
            onClick={handleCopyBrief}
            className="inline-flex min-h-11 items-center gap-2 border border-[#242421]/30 px-4 py-3 text-xs font-medium tracking-[0.16em] uppercase text-[#242421] transition-colors hover:border-[#242421]"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-bronze-ink" aria-hidden="true" />
                <span>Brief Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" aria-hidden="true" />
                <span>Copy Brief</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleEdit}
            className="inline-flex min-h-11 items-center gap-2 px-4 py-3 text-xs font-medium tracking-[0.16em] uppercase text-[#242421] transition-colors hover:text-bronze-ink"
          >
            <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Edit Brief</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex min-h-11 items-center gap-2 px-4 py-3 text-xs font-medium tracking-[0.16em] uppercase text-ink-muted transition-colors hover:text-status-error"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Clear Form</span>
          </button>
        </div>

        {copyError && (
          <p role="status" className="mt-4 text-xs text-status-error">
            Clipboard access unavailable—select your brief above or use WhatsApp or Email.
          </p>
        )}
      </div>
    );
  }

  const errorCount = Object.keys(errors).length;
  const trimmedDescLength = description.trim().length;

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={submitting}
      noValidate
      className="min-w-0 border border-[#242421]/14 bg-[#FAF9F6] p-8 sm:p-10"
    >
      <p className="editorial-eyebrow text-bronze-ink">Project Brief</p>
      <h2 className="font-editorial mt-2 text-3xl font-normal text-[#242421]">
        Begin a Conversation
      </h2>
      <p className="mt-2 text-sm text-[#242421]/80">
        Share your requirements and our Madurai architectural and interior team
        will prepare for an initial meeting.
      </p>

      <noscript>
        <div className="mt-6 border border-bronze-ink bg-[#F5F2EC] p-4 text-sm text-[#242421]">
          <p className="font-medium">JavaScript is currently disabled.</p>
          <p className="mt-1">
            Contact VCUBE directly at{" "}
            <a href={SITE_CONFIG.contact.phones[0].href} className="underline">
              {SITE_CONFIG.contact.phones[0].display}
            </a>{" "}
            or{" "}
            <a href={SITE_CONFIG.contact.email.href} className="underline">
              {SITE_CONFIG.contact.email.display}
            </a>
            .
          </p>
        </div>
      </noscript>

      {errorCount > 0 && (
        <div
          role="status"
          aria-live="polite"
          className="mt-6 border-l-2 border-status-error bg-[#F5F2EC] px-4 py-3 text-xs text-status-error"
        >
          Please review the {errorCount} highlighted{" "}
          {errorCount === 1 ? "field" : "fields"} below before preparing your
          brief.
        </div>
      )}

      <div className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-[11px] font-medium tracking-[0.18em] uppercase text-[#242421]"
          >
            Full Name *
          </label>
          <input
            ref={nameRef}
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={LIMITS.name}
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            placeholder="Your full name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`mt-2 min-h-11 w-full border-b ${
              errors.name ? "border-status-error" : "border-[#242421]/30"
            } bg-transparent py-2.5 text-base text-[#242421] placeholder:text-ink-muted focus:border-bronze-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-ink sm:text-sm`}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-xs text-status-error">
              {errors.name}
            </p>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="min-w-0">
            <label
              htmlFor="contact-email"
              className="block text-[11px] font-medium tracking-[0.18em] uppercase text-[#242421]"
            >
              Email Address *
            </label>
            <input
              ref={emailRef}
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={LIMITS.email}
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              placeholder="name@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              className={`mt-2 min-h-11 w-full border-b ${
                errors.email ? "border-status-error" : "border-[#242421]/30"
              } bg-transparent py-2.5 text-base text-[#242421] placeholder:text-ink-muted focus:border-bronze-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-ink sm:text-sm`}
            />
            {errors.email && (
              <p
                id="contact-email-error"
                className="mt-1.5 text-xs text-status-error"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div className="min-w-0">
            <label
              htmlFor="contact-phone"
              className="block text-[11px] font-medium tracking-[0.18em] uppercase text-[#242421]"
            >
              Phone Number *
            </label>
            <input
              ref={phoneRef}
              id="contact-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              maxLength={LIMITS.phone}
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors({ ...errors, phone: undefined });
              }}
              placeholder="+91 98XXX XXXXX"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={
                errors.phone
                  ? "contact-phone-hint contact-phone-error"
                  : "contact-phone-hint"
              }
              className={`mt-2 min-h-11 w-full border-b ${
                errors.phone ? "border-status-error" : "border-[#242421]/30"
              } bg-transparent py-2.5 text-base text-[#242421] placeholder:text-ink-muted focus:border-bronze-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-ink sm:text-sm`}
            />
            <p id="contact-phone-hint" className="mt-1.5 text-xs text-ink-muted">
              8–15 digits; include country code if outside India.
            </p>
            {errors.phone && (
              <p
                id="contact-phone-error"
                className="mt-1 text-xs text-status-error"
              >
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="min-w-0">
            <label
              htmlFor="contact-service"
              className="block text-[11px] font-medium tracking-[0.18em] uppercase text-[#242421]"
            >
              Service Interested In *
            </label>
            <select
              id="contact-service"
              name="service"
              value={service}
              onChange={(e) => setServiceOverride(e.target.value)}
              className="mt-2 min-h-11 w-full border-b border-[#242421]/30 bg-[#FAF9F6] py-2.5 text-base text-[#242421] focus:border-bronze-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-ink sm:text-sm"
            >
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="min-w-0">
            <label
              htmlFor="contact-project-ref"
              className="block text-[11px] font-medium tracking-[0.18em] uppercase text-[#242421]"
            >
              Reference Project (Optional)
            </label>
            <input
              id="contact-project-ref"
              name="projectRef"
              type="text"
              maxLength={LIMITS.projectRef}
              value={projectRef}
              onChange={(e) => setProjectRefOverride(e.target.value)}
              placeholder="e.g., Indigo & Warm Oak Master Suite"
              className="mt-2 min-h-11 w-full border-b border-[#242421]/30 bg-transparent py-2.5 text-base text-[#242421] placeholder:text-ink-muted focus:border-bronze-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-ink sm:text-sm"
            />
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between gap-4">
            <label
              htmlFor="contact-description"
              className="block text-[11px] font-medium tracking-[0.18em] uppercase text-[#242421]"
            >
              Project Description *
            </label>
            <span
              id="contact-description-count"
              className="tabular-nums text-xs text-ink-muted"
            >
              {trimmedDescLength} / {LIMITS.descriptionMax}
            </span>
          </div>
          <textarea
            ref={descriptionRef}
            id="contact-description"
            name="description"
            rows={4}
            maxLength={LIMITS.descriptionMax}
            required
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              if (errors.description)
                setErrors({ ...errors, description: undefined });
            }}
            placeholder="Tell us about your property type, location, scope (construction, interiors, or Vastu), and preferred timeline..."
            aria-invalid={Boolean(errors.description)}
            aria-describedby={
              errors.description
                ? "contact-description-hint contact-description-error"
                : "contact-description-hint"
            }
            className={`mt-2 w-full resize-y border-b ${
              errors.description ? "border-status-error" : "border-[#242421]/30"
            } bg-transparent py-2.5 text-base leading-relaxed text-[#242421] placeholder:text-ink-muted focus:border-bronze-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-ink sm:text-sm`}
          />
          <p id="contact-description-hint" className="mt-1.5 text-xs text-ink-muted">
            Minimum {LIMITS.descriptionMin} characters. Include room scope, site
            city, and approximate schedule if known.
          </p>
          {errors.description && (
            <p
              id="contact-description-error"
              className="mt-1 text-xs text-status-error"
            >
              {errors.description}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-[#242421]/10 pt-6 sm:flex-row sm:items-center">
        <p className="text-xs text-ink-muted">
          Formats a structured studio brief with direct WhatsApp, Email &amp;
          clipboard copy.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex min-h-11 shrink-0 items-center gap-2.5 bg-[#242421] px-7 py-3.5 text-xs font-medium tracking-[0.18em] uppercase text-[#FAF9F6] transition-colors duration-300 hover:bg-bronze-ink disabled:cursor-wait disabled:opacity-60"
        >
          <span>{submitting ? "Preparing Brief..." : "Prepare Enquiry"}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
