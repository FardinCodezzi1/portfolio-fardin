"use client";

import { LayoutTemplate, Server, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { fadeIn, sectionViewport, staggerContainer } from "@/lib/animations";
import { competencies } from "@/lib/data";

const icons = {
  server: Server,
  layout: LayoutTemplate,
  sparkles: Sparkles,
} as const;

export function Competencies() {
  return (
    <section id="competencies" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
            Core competencies
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Three pillars
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            System engineering, UI architecture, and AI — scannable, not a tag wall.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="grid gap-4 md:grid-cols-3"
        >
          {competencies.map((item) => {
            const Icon = icons[item.icon];
            return (
              <motion.div key={item.id} variants={fadeIn}>
                <GlowingEffect className="h-full">
                  <div className="flex h-full flex-col gap-4 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-accent/30 bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </GlowingEffect>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
