"use client";

import { cn } from "@/lib/utils";

export function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--main-color)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--main-color)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--main-color)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1={`${10 + i * 12}%`}
            y1="0%"
            x2={`${-5 + i * 14}%`}
            y2="100%"
            stroke="url(#beam)"
            strokeWidth="1.25"
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--main-color)_12%,transparent),transparent_55%)]" />
    </div>
  );
}
