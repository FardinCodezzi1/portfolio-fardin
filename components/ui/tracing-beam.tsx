"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Full-width wrapper; beam sits in the gutter left of the max-w-6xl content column.
 * Child sections keep their own max-w / full-bleed layouts.
 */
export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const update = () => setSvgHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, Math.max(svgHeight, 80)]),
    { stiffness: 500, damping: 90 },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, Math.max(svgHeight - 200, 60)]),
    { stiffness: 500, damping: 90 },
  );

  const h = Math.max(svgHeight, 200);
  const path = `M 1 0V -36 l 18 24 V ${h * 0.8} l -18 24 V ${h}`;

  return (
    <motion.div ref={ref} className={cn("relative w-full", className)}>
      <div
        className="pointer-events-none absolute top-6 z-20 hidden w-5 lg:block"
        style={{
          // Align to left edge of max-w-6xl (72rem) column, then offset outward
          left: "max(0.75rem, calc((100% - 72rem) / 2 - 2.75rem))",
        }}
      >
        <div className="ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border border-muted/40">
          <div
            className="h-2 w-2 rounded-full bg-accent"
            style={{
              boxShadow: "0 0 8px color-mix(in srgb, var(--main-color) 50%, transparent)",
            }}
          />
        </div>
        <svg
          viewBox={`0 0 20 ${h}`}
          width="20"
          height={h}
          className="ml-4 block"
          aria-hidden
        >
          <path
            d={path}
            fill="none"
            stroke="var(--sub-color)"
            strokeOpacity="0.2"
            strokeWidth="1"
          />
          <motion.path
            d={path}
            fill="none"
            stroke="url(#tracing-gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
          />
          <defs>
            <motion.linearGradient
              id="tracing-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="var(--beam-color)" stopOpacity="0" />
              <stop stopColor="var(--beam-color)" />
              <stop offset="0.4" stopColor="var(--beam-color-secondary)" />
              <stop offset="1" stopColor="var(--beam-color-soft)" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
