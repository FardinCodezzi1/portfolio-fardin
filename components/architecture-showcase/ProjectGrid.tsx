"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectDetail } from "@/components/architecture-showcase/ProjectDetail";
import { Badge } from "@/components/ui/badge";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ImagesBadge } from "@/components/ui/images-badge";
import { TechIcon } from "@/components/ui/tech-icon";
import { fadeIn, sectionViewport, staggerContainer } from "@/lib/animations";
import {
  projectTypeTabs,
  projects,
  type Project,
  type ProjectType,
} from "@/lib/data";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-full w-full text-left"
    >
      <GlowingEffect className="h-full">
        <div className="flex h-full flex-col gap-4 overflow-visible p-5">
          <div className="flex items-start justify-between gap-3">
            <ImagesBadge
              text={project.title}
              images={project.previewImages}
              hovered={hovered}
              className="max-w-[85%]"
              folderSize={{ width: 40, height: 28 }}
              hoverImageSize={{ width: 64, height: 44 }}
              hoverTranslateY={-48}
            />
            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-accent" />
          </div>
          <p className="text-xs text-muted">{project.subtitle}</p>
          <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
          <p className="font-mono text-[10px] tracking-wide text-accent uppercase">
            {project.role}
          </p>
          <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-2">
            {project.techTags.map((t) => (
              <TechIcon key={t} id={t} />
            ))}
            {project.featured ? (
              <Badge className="border-accent/40 text-accent">featured</Badge>
            ) : null}
          </div>
        </div>
      </GlowingEffect>
    </button>
  );
}

export function ProjectGrid() {
  const [filter, setFilter] = useState<ProjectType | "all">("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = useMemo(() => {
    const list =
      filter === "all" ? projects : projects.filter((p) => p.type === filter);
    return [...list].sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return a.order - b.order;
    });
  }, [filter]);

  const grouped = useMemo(() => {
    if (filter !== "all") {
      return [{ type: filter, items: visible }];
    }
    return (["websites", "applications"] as ProjectType[]).map((type) => ({
      type,
      items: visible.filter((p) => p.type === type),
    }));
  }, [filter, visible]);

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
            Websites and applications shipped in production — hover a card to
            preview, click for architecture and stacks.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {projectTypeTabs.map((item) => (
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

        <div className="space-y-12">
          {grouped.map((group) =>
            group.items.length ? (
              <div key={group.type}>
                {filter === "all" ? (
                  <h3 className="mb-4 font-mono text-xs tracking-[0.16em] text-muted uppercase">
                    {group.type}
                  </h3>
                ) : null}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={sectionViewport}
                  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {group.items.map((project) => (
                    <motion.div key={project.id} variants={fadeIn} className="overflow-visible">
                      <ProjectCard
                        project={project}
                        onOpen={() => setSelected(project)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ) : null,
          )}
        </div>
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
