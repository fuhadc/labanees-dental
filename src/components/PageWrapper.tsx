"use client";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return <div className="relative z-10 w-full min-w-0 max-w-full overflow-x-hidden">{children}</div>;
}
