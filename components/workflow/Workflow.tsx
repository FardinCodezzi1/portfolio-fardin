"use client";

import { Bot, Braces, Sparkles, Workflow as WorkflowIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Terminal } from "@/components/ui/terminal";
import { fadeIn, sectionViewport } from "@/lib/animations";
import { workflowCommands, workflowOutputs } from "@/lib/data";

const points = [
  {
    icon: Bot,
    title: "AI as a design partner",
    body: "Cursor & Copilot accelerate architecture sketches without skipping clean boundaries.",
  },
  {
    icon: Braces,
    title: "Systems before syntax",
    body: "Tokens, component trees, and API contracts land first — then implementation speed.",
  },
  {
    icon: Sparkles,
    title: "Production-minded prompts",
    body: "Prompts encode stack constraints so generated paths stay modular and reviewable.",
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
            Workflow
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            AI-assisted system design
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Cursor, Copilot, and disciplined architecture — how production systems
            get prototyped and shipped.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            className="flex flex-col gap-4"
          >
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="flex gap-4 rounded-md border border-muted/25 bg-surface p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-accent/30 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
                  </div>
                </div>
              );
            })}
            <div className="mt-auto flex items-center gap-2 rounded-md border border-dashed border-accent/30 bg-accent/5 px-4 py-3 font-mono text-xs text-accent">
              <WorkflowIcon className="h-4 w-4" />
              Prototype → review → ship — with architecture intact
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            className="min-h-[320px]"
          >
            <Terminal
              username="fardin@codezzi"
              commands={[...workflowCommands]}
              outputs={workflowOutputs}
              typingSpeed={40}
              delayBetweenCommands={900}
              enableSound={false}
              className="h-full min-h-[320px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
