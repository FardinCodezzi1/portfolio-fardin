"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlowingEffectProps = {
  children: ReactNode;
  className?: string;
  glowClassName?: string;
};

export function GlowingEffect({
  children,
  className,
  glowClassName,
}: GlowingEffectProps) {
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
      className={cn("relative rounded-md", className)}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -inset-px rounded-md opacity-0 transition-opacity duration-300",
          active && "opacity-100",
          glowClassName,
        )}
        style={{
          background: `radial-gradient(420px circle at ${coords.x}% ${coords.y}%, color-mix(in srgb, var(--main-color) 35%, transparent), transparent 45%)`,
        }}
      />
      <div className="relative h-full rounded-md border border-muted/25 bg-surface">
        {children}
      </div>
    </div>
  );
}
