"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export function WhatsAppFloat() {
  return (
    <a
      data-surface="dark"
      href={SITE_CONFIG.contact.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with VCUBE on WhatsApp"
      className="vcube-no-print group fixed bottom-4 right-4 z-30 inline-flex min-h-11 items-center gap-2 border border-[#FAF9F6]/25 bg-[#242421] px-4 py-2.5 text-xs font-medium tracking-[0.16em] uppercase text-[#FAF9F6] shadow-sm transition-all duration-300 hover:border-bronze-ink hover:bg-bronze-ink sm:bottom-5 sm:right-5 sm:gap-2.5 sm:py-3"
    >
      <MessageCircle className="h-4 w-4 shrink-0 text-bronze-soft transition-colors group-hover:text-[#FAF9F6]" aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}

