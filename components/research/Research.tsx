"use client";

import { ExternalLink, GraduationCap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { fadeIn, sectionViewport, staggerContainer } from "@/lib/animations";
import { education, research } from "@/lib/data";

export function Research() {
  return (
    <section id="research" className="scroll-mt-24 bg-surface/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
            Research & credentials
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Evidence beyond the resume list
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="grid gap-6 lg:grid-cols-[1.4fr_1fr]"
        >
          <motion.div variants={fadeIn}>
            <GlowingEffect>
              <div className="p-6 sm:p-8">
                <p className="font-mono text-xs text-accent">{research.venue}</p>
                <h3 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                  {research.title}
                </h3>
                <p className="mt-3 text-sm text-muted">
                  {research.role} · Published {research.year}
                </p>
                <Button asChild className="mt-6" variant="outline">
                  <a href={research.url} target="_blank" rel="noopener noreferrer">
                    View publication
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </GlowingEffect>
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-col gap-4">
            {education.map((item) => (
              <div
                key={item.title}
                className="rounded-md border border-muted/25 bg-background/50 p-5"
              >
                <div className="mb-2 flex items-center gap-2 text-accent">
                  {item.title.includes("CCNA") ? (
                    <ShieldCheck className="h-4 w-4" />
                  ) : (
                    <GraduationCap className="h-4 w-4" />
                  )}
                  <span className="font-mono text-xs uppercase tracking-wide">
                    {item.detail}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                <p className="mt-1 text-sm text-muted">{item.org}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
