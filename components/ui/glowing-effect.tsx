"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlowingEffectProps = {
  children: ReactNode;
  className?: string;
};

/** Subtle cursor-following accent edge — not a thick halo */
export function GlowingEffect({ children, className }: GlowingEffectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setCoords({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={cn("relative overflow-visible rounded-md", className)}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 rounded-md opacity-0 transition-opacity duration-200",
          active && "opacity-100",
        )}
        style={{
          background: `radial-gradient(180px circle at ${coords.x}% ${coords.y}%, color-mix(in srgb, var(--main-color) 55%, transparent), transparent 70%)`,
          padding: "1px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 rounded-md opacity-0 transition-opacity duration-200",
          active && "opacity-40",
        )}
        style={{
          background: `radial-gradient(220px circle at ${coords.x}% ${coords.y}%, color-mix(in srgb, var(--main-color) 18%, transparent), transparent 65%)`,
        }}
      />
      <div className="relative h-full overflow-visible rounded-md border border-muted/25 bg-surface">
        {children}
      </div>
    </div>
  );
}
