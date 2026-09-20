"use client";

import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { fadeIn, sectionViewport, staggerContainer } from "@/lib/animations";
import { impactStats } from "@/lib/data";

export function ImpactStrip() {
  return (
    <BackgroundBeamsWithCollision className="relative h-auto! min-h-0! border-y border-muted/20 bg-surface/40 py-0!">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:px-6"
      >
        {impactStats.map((stat) => (
          <motion.div key={stat.label} variants={fadeIn} className="min-w-0">
            <p className="font-mono text-xl font-semibold text-accent sm:text-2xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </BackgroundBeamsWithCollision>
  );
}
