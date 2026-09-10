import type { Metadata, Viewport } from "next";
import { Montserrat, Playfair_Display, Bodoni_Moda, Cormorant_Garamond } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { ScrollObserver, CustomCursor, SmoothScroll, BackgroundEffects, ScrollProgress, FloatingAction, PageWrapper, ResponsiveFix } from "@/components";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lebanese Dental Clinic | Advanced Cosmetic Dentistry in Muscat",
  description:
    "Lebanese Dental Clinic – advanced cosmetic dentistry and dental implants in Muscat. Transforming smiles with precision, artistry, and care.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} ${bodoni.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[var(--bg-dark)] text-white antialiased font-sans"
        suppressHydrationWarning
      >
        <MotionConfig reducedMotion="user" transition={{ ease: [0.77, 0, 0.175, 1], duration: 0.85 }}>
          <ResponsiveFix />
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
