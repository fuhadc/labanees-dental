import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Syne } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { ScrollObserver, CustomCursor, SmoothScroll, BackgroundEffects, ScrollProgress, FloatingAction, PageWrapper } from "@/components";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Labanees Dental | Advanced Cosmetic Dentistry & Dental Implants in Muscat",
  description:
    "Labanees Dental – advanced cosmetic dentistry and dental implants in Muscat. Transforming smiles with precision, artistry, and care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${syne.variable}`}>
      <body className="min-h-screen bg-[var(--bg-dark)] text-white antialiased font-sans">
        <MotionConfig reducedMotion="user" transition={{ ease: [0.77, 0, 0.175, 1], duration: 0.85 }}>
          <SmoothScroll>
            <ScrollProgress />
            <CustomCursor />
            <BackgroundEffects />
            <ScrollObserver />
            <FloatingAction />
            <PageWrapper>
              {children}
            </PageWrapper>
          </SmoothScroll>
        </MotionConfig>
      </body>
    </html>
  );
}
