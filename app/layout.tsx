import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lebanese Dental Clinic | Advanced Dental Implants & Cosmetic Dentistry in Muscat',
  description:
    'Transform your smile with precision and elegance. Dental implants, Hollywood smile, veneers, and cosmetic dentistry in Muscat. Book your appointment today.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-charcoal font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
