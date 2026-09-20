"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TechIcon } from "@/components/ui/tech-icon";
import type { ApplicationStacks, Project, TechId, WebsiteStacks } from "@/lib/data";

type ProjectDetailProps = {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function Breakdown({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-mono text-xs tracking-wide text-accent uppercase">
        {title}
      </h4>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="border-l-2 border-muted/30 pl-3 text-sm leading-relaxed text-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function StackRow({ label, items }: { label: string; items: TechId[] }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[10px] tracking-wide text-muted uppercase">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((id) => (
          <TechIcon key={id} id={id} showLabel size={24} />
        ))}
      </div>
    </div>
  );
}

function isWebsiteStacks(
  stacks: WebsiteStacks | ApplicationStacks,
): stacks is WebsiteStacks {
  return "websiteSpa" in stacks;
}

export function ProjectDetail({ project, open, onOpenChange }: ProjectDetailProps) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={(next) => {
          if (!next) setLightbox(null);
          onOpenChange(next);
        }}
      >
        <DialogContent className="max-w-3xl">
          {project ? (
            <>
              <DialogHeader>
                <DialogTitle>{project.title}</DialogTitle>
                <DialogDescription>
                  {project.subtitle} · {project.type} · {project.role}
                  {project.featured ? " · featured" : ""}
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm leading-relaxed text-muted">{project.summary}</p>

              <div>
                <p className="mb-2 font-mono text-xs tracking-wide text-accent uppercase">
                  Previews
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {project.previewImages.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setLightbox(src)}
                      className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-muted/25 bg-background"
                    >
                      <Image
                        src={src}
                        alt={`${project.title} preview ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="200px"
                        unoptimized
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-opacity group-hover:bg-background/40 group-hover:opacity-100">
                        <Expand className="h-4 w-4 text-accent" />
                      </span>
                    </button>
                  ))}
                </div>
                <p className="mt-1.5 text-[11px] text-muted">
                  Click a preview to view full size
                </p>
              </div>

              <div className="grid gap-4 rounded-md border border-muted/20 bg-background/40 p-4">
                <p className="font-mono text-xs tracking-wide text-accent uppercase">
                  Stack
                </p>
                {isWebsiteStacks(project.stacks) ? (
                  <>
                    <StackRow label="Backend" items={project.stacks.backend} />
                    <StackRow label="Website SPA" items={project.stacks.websiteSpa} />
                    <StackRow label="CMS SPA" items={project.stacks.cmsSpa} />
                  </>
                ) : (
                  <>
                    <StackRow
                      label="Frontend SPA"
                      items={project.stacks.frontendSpa}
                    />
                    <StackRow label="Backend" items={project.stacks.backend} />
                  </>
                )}
              </div>

              <div className="grid gap-6">
                <Breakdown title="Backend logic" items={project.backend} />
                <Breakdown title="UI state model" items={project.uiState} />
                <Breakdown title="Data flow" items={project.dataFlow} />
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>

      {lightbox ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 rounded-sm border border-muted/40 bg-surface p-2 text-foreground hover:text-accent"
            onClick={() => setLightbox(null)}
            aria-label="Close full image"
          >
            <X className="h-4 w-4" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox}
            alt="Full project preview"
            className="max-h-[90vh] max-w-[95vw] rounded-md border border-muted/30 object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
