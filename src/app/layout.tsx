import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter, Cormorant_Garamond, Syne } from "next/font/google";
import "./globals.css";
import { ScrollObserver, CustomCursor, SmoothScroll, BackgroundEffects, ScrollProgress, MobileNav, FloatingAction, PageWrapper, ScrollRadial } from "@/components";

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
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          <BackgroundEffects />
          <ScrollObserver />
          <MobileNav />
          <FloatingAction />
          <ScrollRadial />
          <PageWrapper>
            {children}
          </PageWrapper>
        </SmoothScroll>
      </body>
    </html>
  );
}
