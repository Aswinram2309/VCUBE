"use client";

import React from "react";
import { MotionConfig, motion, type HTMLMotionProps } from "framer-motion";

export const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

export function AppMotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

interface EditorialRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  distance?: number;
}

export function EditorialReveal({
  children,
  delay = 0,
  distance = 16,
  className = "",
  ...rest
}: EditorialRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.6, delay, ease: EDITORIAL_EASE }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface ImageClipRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function ImageClipReveal({
  children,
  delay = 0,
  className = "",
}: ImageClipRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, clipPath: "inset(4% 0% 4% 0%)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.9, delay, ease: EDITORIAL_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HairlineDraw({
  delay = 0,
  dark = false,
  className = "",
}: {
  delay?: number;
  dark?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.85, delay, ease: EDITORIAL_EASE }}
      className={`h-px w-full origin-left ${
        dark ? "bg-[#FAF9F6]/15" : "bg-[#242421]/14"
      } ${className}`}
    />
  );
}

export function PageMount({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.32, ease: EDITORIAL_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

