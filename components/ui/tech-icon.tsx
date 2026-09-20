"use client";

import { useState } from "react";
import Image from "next/image";
import type { TechId } from "@/lib/data";
import { cn } from "@/lib/utils";

/** Primary skillicons.dev slug (when available) */
const SLUGS: Record<TechId, string> = {
  nextjs: "nextjs",
  nestjs: "nestjs",
  react: "react",
  angular: "angular",
  dotnet: "dotnet",
  tailwind: "tailwind",
  typescript: "ts",
  javascript: "js",
  html: "html",
  css: "css",
  scss: "sass",
  framer: "framer",
  quasar: "vue",
  postgres: "postgres",
  mysql: "mysql",
  mssql: "cs",
  plsql: "postgres",
  csharp: "cs",
  cpp: "cpp",
  node: "nodejs",
};

/** simpleicons.org fallbacks for missing / wrong skillicons */
const SIMPLE: Partial<Record<TechId, string>> = {
  framer: "framer",
  quasar: "quasar",
  mssql: "microsoftsqlserver",
  plsql: "oracle",
  scss: "sass",
};

const LABELS: Record<TechId, string> = {
  nextjs: "Next.js",
  nestjs: "NestJS",
  react: "React",
  angular: "Angular",
  dotnet: ".NET",
  tailwind: "Tailwind",
  typescript: "TypeScript",
  javascript: "JavaScript",
  html: "HTML",
  css: "CSS",
  scss: "SCSS",
  framer: "Framer Motion",
  quasar: "Quasar",
  postgres: "PostgreSQL",
  mysql: "MySQL",
  mssql: "MSSQL",
  plsql: "PL/SQL",
  csharp: "C#",
  cpp: "C++",
  node: "Node.js",
};

export function techLabel(id: TechId) {
  return LABELS[id] ?? id;
}

export function techSlug(id: TechId) {
  return SLUGS[id] ?? id;
}

function iconUrl(id: TechId, preferSimple = false) {
  if (preferSimple && SIMPLE[id]) {
    return `https://cdn.simpleicons.org/${SIMPLE[id]}/e2b714`;
  }
  if (SIMPLE[id] && (id === "framer" || id === "quasar" || id === "mssql" || id === "plsql")) {
    return `https://cdn.simpleicons.org/${SIMPLE[id]}/e2b714`;
  }
  return `https://skillicons.dev/icons?i=${techSlug(id)}&theme=dark`;
}

export function TechIcon({
  id,
  className,
  showLabel = false,
  size = 28,
}: {
  id: TechId;
  className?: string;
  showLabel?: boolean;
  size?: number;
}) {
  const label = techLabel(id);
  const [src, setSrc] = useState(() => iconUrl(id));

  return (
    <span
      title={label}
      className={cn(
        "inline-flex items-center gap-2 rounded-sm",
        showLabel && "border border-muted/25 bg-background/50 px-2 py-1",
        className,
      )}
    >
      <Image
        src={src}
        alt={label}
        width={size}
        height={size}
        className="rounded-[4px]"
        unoptimized
        onError={() => {
          if (SIMPLE[id]) {
            setSrc(`https://cdn.simpleicons.org/${SIMPLE[id]}/e2b714`);
          }
        }}
      />
      {showLabel ? (
        <span className="pr-0.5 text-xs text-foreground">{label}</span>
      ) : null}
    </span>
  );
}
