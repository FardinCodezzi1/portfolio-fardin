"use client";

import { motion } from "framer-motion";
import { fadeIn, sectionViewport, staggerContainer } from "@/lib/animations";
import { techStack } from "@/lib/data";

export function TechStack() {
  return (
    <section aria-label="Trusted tools" className="border-y border-muted/20 py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="mb-6 font-mono text-xs tracking-[0.18em] text-muted uppercase">
          Trusted tools
        </p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="flex flex-wrap gap-x-5 gap-y-3"
        >
          {techStack.map((tool) => (
            <motion.span
              key={tool}
              variants={fadeIn}
              className="font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
