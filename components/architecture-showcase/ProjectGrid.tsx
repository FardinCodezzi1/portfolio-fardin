"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectDetail } from "@/components/architecture-showcase/ProjectDetail";
import { Badge } from "@/components/ui/badge";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { fadeIn, sectionViewport, staggerContainer } from "@/lib/animations";
import {
  projectFilters,
  projects,
  type Project,
  type ProjectFilter,
} from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectGrid() {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.filters.includes(filter));
  }, [filter]);

  return (
    <section id="architecture" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
            System Architecture
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Architecture showcase
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Filterable production systems with backend logic, UI state models, and
            data-flow breakdowns — not just screenshots.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {projectFilters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={cn(
                "rounded-sm border px-3 py-1.5 text-xs font-medium transition-colors",
                filter === item.id
                  ? "border-accent bg-accent/15 text-accent"
                  : "border-muted/30 text-muted hover:border-accent/50 hover:text-accent",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((project) => (
            <motion.div key={project.id} variants={fadeIn}>
              <button
                type="button"
                onClick={() => setSelected(project)}
                className="h-full w-full text-left"
              >
                <GlowingEffect className="h-full">
                  <div className="flex h-full flex-col gap-4 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-semibold text-foreground">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-xs text-muted">{project.subtitle}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-accent" />
                    </div>
                    <p className="text-sm leading-relaxed text-muted">
                      {project.summary}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                      {project.filters.map((f) => (
                        <Badge key={f}>{f}</Badge>
                      ))}
                      {project.featured ? (
                        <Badge className="border-accent/40 text-accent">featured</Badge>
                      ) : null}
                    </div>
                  </div>
                </GlowingEffect>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectDetail
        project={selected}
        open={Boolean(selected)}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      />
    </section>
  );
}
