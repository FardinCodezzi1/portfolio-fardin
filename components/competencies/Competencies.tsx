"use client";

import { LayoutTemplate, Server, Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { fadeIn, sectionViewport } from "@/lib/animations";
import { competencies } from "@/lib/data";
import { cn } from "@/lib/utils";

const icons = {
  server: Server,
  layout: LayoutTemplate,
  sparkles: Sparkles,
} as const;

const cardStyles = [
  "md:col-span-2 md:row-span-2 bg-gradient-to-br from-accent/15 via-surface to-surface border-accent/35",
  "bg-surface border-muted/30 hover:border-accent/40",
  "bg-surface border-muted/30 hover:border-accent/40 md:bg-gradient-to-t md:from-accent/10 md:to-surface",
] as const;

export function Competencies() {
  return (
    <section id="competencies" className="scroll-mt-24">
      <LampContainer>
        <motion.h2
          initial={{ opacity: 0.4, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
          className="bg-gradient-to-br from-foreground to-muted bg-clip-text text-center text-3xl font-semibold tracking-tight text-transparent sm:text-4xl md:text-5xl"
        >
          Three pillars
        </motion.h2>
        <p className="mt-3 max-w-lg text-center text-sm text-muted">
          How I think about systems, interfaces, and AI in production.
        </p>
      </LampContainer>

      <div className="mx-auto -mt-8 max-w-6xl px-4 pb-20 md:-mt-12 md:px-6 md:pb-28">
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-5">
          {competencies.map((item, index) => {
            const Icon = icons[item.icon];
            const featured = index === 0;
            return (
              <motion.article
                key={item.id}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                className={cn(
                  "group relative overflow-hidden rounded-md border p-6 transition-colors",
                  cardStyles[index],
                  featured && "flex flex-col justify-between min-h-[280px]",
                )}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100"
                />
                <div className="relative flex items-start justify-between gap-3">
                  <div
                    className={cn(
                      "flex items-center justify-center rounded-sm border border-accent/30 bg-accent/10 text-accent",
                      featured ? "h-12 w-12" : "h-10 w-10",
                    )}
                  >
                    <Icon className={featured ? "h-6 w-6" : "h-5 w-5"} />
                  </div>
                  <span className="font-mono text-xs text-muted">0{index + 1}</span>
                </div>
                <div className="relative mt-5">
                  <h3
                    className={cn(
                      "font-semibold text-foreground",
                      featured ? "text-2xl" : "text-lg",
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 leading-relaxed text-muted",
                      featured ? "text-sm sm:text-base max-w-md" : "text-sm",
                    )}
                  >
                    {item.description}
                  </p>
                </div>
                {featured ? (
                  <p className="relative mt-8 inline-flex items-center gap-1 font-mono text-xs text-accent">
                    Core differentiator
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </p>
                ) : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
