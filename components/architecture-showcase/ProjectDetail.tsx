"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/lib/data";

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

export function ProjectDetail({ project, open, onOpenChange }: ProjectDetailProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        {project ? (
          <>
            <DialogHeader>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>{project.subtitle}</DialogDescription>
            </DialogHeader>
            <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
            <div className="grid gap-6 sm:grid-cols-1">
              <Breakdown title="Backend logic" items={project.backend} />
              <Breakdown title="UI state model" items={project.uiState} />
              <Breakdown title="Data flow" items={project.dataFlow} />
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
