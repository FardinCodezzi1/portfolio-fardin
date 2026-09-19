"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FlippingHeadlineProps = {
  phrases: readonly string[];
  className?: string;
  intervalMs?: number;
};

export function FlippingHeadline({
  phrases,
  className,
  intervalMs = 2800,
}: FlippingHeadlineProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, phrases.length]);

  return (
    <div
      className={cn(
        "relative h-8 overflow-hidden font-mono text-base text-accent sm:h-9 sm:text-lg",
        className,
      )}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={phrases[index]}
          initial={{ y: 18, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -18, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0"
        >
          {phrases[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
