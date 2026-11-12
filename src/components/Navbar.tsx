"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { SITE_CONFIG } from "@/data/site";
import { useDialogFocus } from "@/lib/useDialogFocus";
import { EDITORIAL_EASE } from "./MotionPrimitives";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const mobileOpen = openForPath === pathname;

  const drawerRef = useRef<HTMLDivElement>(null);
  const drawerCloseRef = useRef<HTMLButtonElement>(null);
  const skipRestoreRef = useRef(false);

  useDialogFocus({
    isOpen: mobileOpen,
    containerRef: drawerRef,
    initialFocusRef: drawerCloseRef,
    shouldRestoreFocus: () => !skipRestoreRef.current,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) {
        skipRestoreRef.current = true;
        setOpenForPath(null);
      }
    };
    mq.addEventListener("change", handleResize);
    return () => mq.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        skipRestoreRef.current = false;
        setOpenForPath(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const overHero = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        data-surface={overHero ? "dark" : "light"}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          overHero
            ? "bg-gradient-to-b from-[#242421]/78 via-[#242421]/35 to-transparent text-[#FAF9F6]"
            : "bg-[#F5F2EC]/95 backdrop-blur-md text-[#242421] border-b border-[#242421]/10"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1380px] items-center justify-between px-6 sm:px-10 lg:px-14">
          <Link
            href="/"
            aria-label="VCUBE Home"
            className="focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <BrandLogo tone={overHero ? "light" : "dark"} compact />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 lg:flex xl:gap-8"
          >
            {SITE_CONFIG.navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative inline-flex min-h-11 items-center py-1 text-[13px] font-medium tracking-[0.14em] uppercase transition-colors duration-300 ${
                    overHero
                      ? active
                        ? "text-[#FAF9F6]"
                        : "text-[#FAF9F6]/85 hover:text-[#FAF9F6]"
                      : active
                      ? "text-[#242421]"
                      : "text-ink-muted hover:text-[#242421]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active-underline"
                      transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
                      className={`absolute inset-x-0 bottom-1.5 h-px ${
                        overHero ? "bg-bronze-soft" : "bg-bronze-ink"
                      }`}
                    />
                  )}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className={`group ml-2 inline-flex min-h-11 items-center gap-2 px-5 py-2.5 text-[12px] font-medium tracking-[0.16em] uppercase transition-all duration-300 ${
                overHero
                  ? "border border-[#FAF9F6]/65 text-[#FAF9F6] hover:border-[#FAF9F6] hover:bg-[#FAF9F6] hover:text-[#242421]"
                  : "border border-[#242421] bg-[#242421] text-[#FAF9F6] hover:bg-bronze-ink hover:border-bronze-ink"
              }`}
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/contact"
              className={`hidden min-h-11 items-center gap-1.5 px-4 py-2 text-xs font-medium tracking-[0.14em] uppercase transition-colors md:inline-flex ${
                overHero
                  ? "border border-[#FAF9F6]/65 text-[#FAF9F6] hover:bg-[#FAF9F6] hover:text-[#242421]"
                  : "border border-[#242421] bg-[#242421] text-[#FAF9F6] hover:bg-bronze-ink hover:border-bronze-ink"
              }`}
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>

            <button
              type="button"
              onClick={() => {
                skipRestoreRef.current = false;
                setOpenForPath(mobileOpen ? null : pathname);
              }}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className={`inline-flex h-11 w-11 items-center justify-center border transition-colors ${
                overHero
                  ? "border-[#FAF9F6]/35 text-[#FAF9F6] hover:bg-[#FAF9F6]/10"
                  : "border-[#242421]/20 text-[#242421] hover:bg-[#242421]/5"
              }`}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            data-surface="dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
            className="vcube-no-print fixed inset-0 z-[60] flex flex-col justify-between overflow-y-auto bg-[#242421] px-6 pb-10 text-[#FAF9F6] lg:hidden"
          >
            <div className="mx-auto flex h-20 w-full max-w-[1380px] shrink-0 items-center justify-between border-b border-[#FAF9F6]/12">
              <Link
                href="/"
                onClick={() => {
                  skipRestoreRef.current = true;
                  setOpenForPath(null);
                }}
                aria-label="VCUBE Home"
                className="focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                <BrandLogo tone="light" compact />
              </Link>
              <button
                ref={drawerCloseRef}
                type="button"
                onClick={() => {
                  skipRestoreRef.current = false;
                  setOpenForPath(null);
                }}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center border border-[#FAF9F6]/25 text-[#FAF9F6] transition-colors hover:border-bronze-soft hover:text-bronze-soft"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="mt-6 flex flex-col">
              {SITE_CONFIG.navigation.map((item, idx) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.05 + idx * 0.05,
                      ease: EDITORIAL_EASE,
                    }}
                    className="border-b border-[#FAF9F6]/12"
                  >
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => {
                        skipRestoreRef.current = true;
                        setOpenForPath(null);
                      }}
                      className="flex min-h-12 items-baseline justify-between py-4"
                    >
                      <span
                        className={`font-editorial text-4xl font-normal tracking-tight ${
                          active ? "text-bronze-soft" : "text-[#FAF9F6]"
                        }`}
                      >
                        {item.label}
                      </span>
                      <span className="text-xs tracking-[0.2em] text-[#AAA49B]">
                        0{idx + 1}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.32, ease: EDITORIAL_EASE }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => {
                    skipRestoreRef.current = true;
                    setOpenForPath(null);
                  }}
                  className="inline-flex min-h-11 w-full items-center justify-between border border-bronze-soft bg-bronze-soft px-6 py-4 text-xs font-medium tracking-[0.18em] uppercase text-[#242421] transition-colors hover:bg-[#FAF9F6] hover:border-[#FAF9F6]"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </motion.div>
            </nav>

            <div className="mt-10 border-t border-[#FAF9F6]/12 pt-6 text-xs text-[#AAA49B]">
              <p className="tracking-[0.18em] uppercase text-bronze-soft">
                Madurai Studio
              </p>
              <p className="mt-2 leading-relaxed">
                {SITE_CONFIG.contact.fullAddress}
              </p>
              <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[#FAF9F6]">
                <a href={SITE_CONFIG.contact.phones[0].href} className="inline-flex min-h-11 items-center underline underline-offset-4 transition-colors hover:text-bronze-soft">
                  {SITE_CONFIG.contact.phones[0].display}
                </a>
                <a href={SITE_CONFIG.contact.email.href} className="inline-flex min-h-11 items-center underline underline-offset-4 transition-colors hover:text-bronze-soft">
                  {SITE_CONFIG.contact.email.display}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
