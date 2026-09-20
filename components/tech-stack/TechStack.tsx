"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { techLabel, techSlug } from "@/components/ui/tech-icon";
import { fadeIn, sectionViewport } from "@/lib/animations";
import { expertiseGroups, type TechId } from "@/lib/data";
import { cn } from "@/lib/utils";

function skillSrc(id: TechId) {
  if (id === "framer" || id === "quasar" || id === "mssql" || id === "plsql") {
    const map: Record<string, string> = {
      framer: "framer",
      quasar: "quasar",
      mssql: "microsoftsqlserver",
      plsql: "oracle",
    };
    return `https://cdn.simpleicons.org/${map[id]}/e2b714`;
  }
  return `https://skillicons.dev/icons?i=${techSlug(id)}&theme=dark`;
}

function SkillTile({
  id,
  large = false,
}: {
  id: TechId;
  large?: boolean;
}) {
  const label = techLabel(id);
  const size = large ? 48 : 36;

  return (
    <div
      className={cn(
        "group flex flex-col items-center justify-center gap-2 rounded-md border border-muted/25 bg-surface/80 transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-accent/10",
        large ? "min-h-[120px] p-5" : "min-h-[96px] p-3",
      )}
    >
      <Image
        src={skillSrc(id)}
        alt={label}
        width={size}
        height={size}
        className="rounded-sm transition-transform duration-300 group-hover:scale-110"
        unoptimized
      />
      <span className="text-center text-xs font-medium text-muted group-hover:text-foreground">
        {label}
      </span>
    </div>
  );
}

function MarqueeRow({
  ids,
  reverse = false,
}: {
  ids: TechId[];
  reverse?: boolean;
}) {
  const loop = [...ids, ...ids];
  return (
    <div className="relative overflow-hidden py-2">
      <div
        className={cn(
          "flex w-max gap-3",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        {loop.map((id, i) => (
          <div
            key={`${id}-${i}`}
            className="flex items-center gap-2 rounded-sm border border-muted/20 bg-surface px-3 py-2"
          >
            <Image
              src={skillSrc(id)}
              alt={techLabel(id)}
              width={28}
              height={28}
              unoptimized
            />
            <span className="text-xs text-foreground whitespace-nowrap">
              {techLabel(id)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const allIds = expertiseGroups.flatMap((g) => g.items.map((i) => i.id));
  const half = Math.ceil(allIds.length / 2);

  return (
    <section id="expertise" className="scroll-mt-24 overflow-hidden border-y border-muted/20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
            Expertise
          </p>
          <h2 className="mt-2 bg-gradient-to-b from-foreground via-foreground to-muted bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            Built with tools I actually ship in
          </h2>
          <p className="mt-3 text-sm text-muted sm:text-base">
            Frontend systems, backend services, languages, and data — not a wishlist.
          </p>
        </div>
      </div>

      {mounted ? (
        <div className="mb-12 space-y-2 border-y border-muted/15 bg-surface/30 py-3">
          <MarqueeRow ids={allIds.slice(0, half)} />
          <MarqueeRow ids={allIds.slice(half)} reverse />
        </div>
      ) : null}

      <div className="mx-auto max-w-6xl space-y-10 px-4 md:px-6">
        {expertiseGroups.map((group, gi) => (
          <motion.div
            key={group.id}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-xs text-accent">0{gi + 1}</span>
              <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
                {group.label}
              </h3>
              <span className="h-px flex-1 bg-muted/25" />
            </div>
            <div
              className={cn(
                "grid gap-3",
                group.items.length >= 6
                  ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                  : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
              )}
            >
              {group.items.map((item, i) => (
                <SkillTile
                  key={item.id}
                  id={item.id}
                  large={gi === 0 && i < 2}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
