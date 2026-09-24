"use client";

import { LayoutTemplate, Server, Sparkles, ArrowUpRight, Terminal, Cpu } from "lucide-react";
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

export function Competencies() {
  return (
    <section id="competencies" className="scroll-mt-24 relative">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.4, y: 40 }}
          whileInView={{ opacity: 1, y: 190 }}
          transition={{ delay: 0.2, duration: 1.7, ease: "easeInOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* Developer Tag */}
          <div className="inline-flex items-center gap-2 rounded-2xl rounded-br-none rounded-tl-none border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent mb-4">
            <Cpu className="h-3.5 w-3.5" />
            <span>ARCHITECTURAL PILLARS</span>
          </div>

          <h2 className="bg-linear-to-br from-foreground to-muted bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl md:text-5xl">
            Three Pillars
          </h2>
          <p className="mt-3 max-w-lg font-mono text-xs sm:text-sm text-muted">
             How I think about systems, interfaces, and AI in production.
          </p>
        </motion.div>
      </LampContainer>

      <div className="mx-auto -mt-8 max-w-6xl px-4 pb-20 md:-mt-12 md:px-6 md:pb-28">
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-5">
          {competencies.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons] || Server;
            const featured = index === 0;

            return (
              <motion.article
                key={item.id}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                className={cn(
                  "group relative overflow-hidden rounded-xl border border-border/60 bg-surface/80 p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_25px_rgba(226,183,20,0.1)]",
                  featured
                    ? "md:col-span-2 md:row-span-2 flex flex-col justify-between min-h-80 bg-linear-to-br from-accent/10 via-surface/90 to-surface border-accent/30"
                    : "flex flex-col justify-between"
                )}
              >
                {/* Radial Hover Glow Background */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-40"
                />

                {/* Card Header Section */}
                <div className="relative z-10 flex items-start justify-between gap-3">
                  <div
                    className={cn(
                      "flex items-center justify-center rounded-lg border border-accent/40 bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-105 shadow-[0_0_12px_rgba(226,183,20,0.15)]",
                      featured ? "h-12 w-12" : "h-10 w-10"
                    )}
                  >
                    <Icon className={featured ? "h-6 w-6" : "h-5 w-5"} />
                  </div>

                  <span className="font-mono text-xs font-semibold text-muted/70 tracking-widest">
                    0{index + 1} {"//"}
                  </span>
                </div>

                {/* Center Content Section */}
                <div className="relative z-10 my-4">
                  <h3
                    className={cn(
                      "font-semibold text-foreground tracking-tight transition-colors group-hover:text-accent",
                      featured ? "text-2xl" : "text-lg"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 leading-relaxed text-muted",
                      featured ? "text-sm sm:text-base max-w-lg" : "text-xs sm:text-sm"
                    )}
                  >
                    {item.description}
                  </p>

                  {/* Micro Code Snippet Box (Only on Featured Card) */}
                  {featured && (
                    <div className="mt-5 rounded-md border border-border/40 bg-background/50 p-3 font-mono text-xs text-muted/80 backdrop-blur-xs">
                      <div className="flex items-center gap-1.5 border-b border-border/30 pb-2 mb-2 text-[10px] text-accent">
                        <Terminal className="h-3 w-3" />
                        <span>system_design.config.ts</span>
                      </div>
                      <p className="truncate text-foreground/80">
                        <span className="text-accent/60 mr-2">01</span>
                        const architecture = new ScalableSystem();
                      </p>
                      <p className="truncate text-foreground/80">
                        <span className="text-accent/60 mr-2">02</span>
                        await architecture.deployProduction();
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer Meta Details */}
                <div className="relative z-10 pt-2 border-t border-border/20 flex items-center justify-between font-mono text-xs">
                  {featured ? (
                    <span className="inline-flex items-center gap-1.5 text-accent font-medium">
                      Core Differentiator
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  ) : (
                    <span className="text-muted/60 group-hover:text-accent transition-colors">
                      MODULE_0{index + 1}
                    </span>
                  )}
                  <span className="text-[10px] text-muted/40 uppercase tracking-wider">
                    [ACTIVE]
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}