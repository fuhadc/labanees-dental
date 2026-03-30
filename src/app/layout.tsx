import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ScrollObserver } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Elegant serif for section headings — reference-inspired premium aesthetic */
const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lebanese Dental Clinic | Advanced Cosmetic Dentistry & Dental Implants in Muscat",
  description:
    "Lebanese Dental Clinic – advanced cosmetic dentistry and dental implants in Muscat. Transforming smiles with precision, artistry, and care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} min-h-screen bg-[var(--bg-dark)] text-white antialiased`}
      >
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
