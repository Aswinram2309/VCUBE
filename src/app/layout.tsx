import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppMotionProvider } from "@/components/MotionPrimitives";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SITE_CONFIG } from "@/data/site";

const cormorant = localFont({
  src: [
    {
      path: "./fonts/cormorant-garamond-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/cormorant-garamond-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/cormorant-garamond-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/cormorant-garamond-latin-500-italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/cormorant-garamond-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/cormorant-garamond-latin-600-italic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = localFont({
  src: [
    {
      path: "./fonts/manrope-latin-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/manrope-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/manrope-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/manrope-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vcubeci.in"),
  title: {
    default: "VCUBE | Architecture, Interior Design & Vastu Studio — Madurai",
    template: "%s | VCUBE Construction & Interiors",
  },
  description:
    "VCUBE Construction and Interiors is a Madurai-based architectural, interior design, construction, and Vastu consultation studio crafting thoughtful residential and commercial spaces.",
  keywords: [
    "VCUBE",
    "V Cube Construction and Interiors",
    "Interior Design Madurai",
    "Architecture Madurai",
    "Vastu Consultation Madurai",
    "Residential Construction Tamil Nadu",
    "Modular Kitchen Madurai",
  ],
  openGraph: {
    title: "VCUBE Construction & Interiors — Madurai",
    description: SITE_CONFIG.brand.establishedNote,
    siteName: SITE_CONFIG.brand.fullName,
    type: "website",
    images: ["/brand/VC_logo_2.16.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F2EC] text-[#242421]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:border focus:border-[#FAF9F6]/30 focus:bg-[#242421] focus:px-4 focus:py-3 focus:text-xs focus:font-medium focus:tracking-[0.16em] focus:uppercase focus:text-[#FAF9F6]"
        >
          Skip to main content
        </a>
        <AppMotionProvider>
          <Navbar />
          <main id="main-content" tabIndex={-1} className="min-w-0 flex-1 outline-none">
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
        </AppMotionProvider>
      </body>
    </html>
  );
}
