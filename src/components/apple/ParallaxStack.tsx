"use client";

interface ParallaxStackProps {
  children: React.ReactNode;
  className?: string;
}

/** Container for layered parallax children */
export default function ParallaxStack({ children, className = "" }: ParallaxStackProps) {
  return (
    <div className={`relative isolate ${className}`.trim()}>{children}</div>
  );
}
