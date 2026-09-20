"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type SparklesCoreProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export function SparklesCore({
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1.2,
  particleColor = "#e2b714",
  particleDensity = 120,
}: SparklesCoreProps) {
  const particles = useMemo(() => {
    const count = Math.min(Math.max(Math.floor(particleDensity / 8), 40), 160);
    return Array.from({ length: count }, (_, i) => {
      const t = i / count;
      const spread = Math.pow(t, 0.65);
      return {
        id: i,
        left: 50 + (Math.sin(i * 12.9898) * 0.5 + (i % 17) / 17 - 0.5) * 95 * spread,
        top: 8 + spread * 88,
        size: minSize + ((i * 7) % 10) / 10 * (maxSize - minSize),
        delay: (i % 20) * 0.08,
        duration: 1.8 + (i % 5) * 0.35,
      };
    });
  }, [maxSize, minSize, particleDensity]);

  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", className)}
      style={{ background }}
    >
      <div className="pointer-events-none absolute inset-x-[15%] top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_18px_var(--main-color)]" />
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-[1px]"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            backgroundColor: particleColor,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0.2, 1, 0], scale: [0, 1, 0.8, 1, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
