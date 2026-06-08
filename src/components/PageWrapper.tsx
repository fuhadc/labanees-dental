"use client";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return <div className="relative z-10">{children}</div>;
}
