"use client";

import { GraduationCap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, sectionViewport, staggerContainer } from "@/lib/animations";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 bg-surface/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
            Education & credentials
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Academic background
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="mx-auto grid max-w-2xl gap-4"
        >
          {education.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeIn}
              className="rounded-md border border-muted/25 bg-background/60 p-5"
            >
              <div className="mb-2 flex items-center gap-2 text-accent">
                {item.kind === "cert" ? (
                  <ShieldCheck className="h-4 w-4" />
                ) : (
                  <GraduationCap className="h-4 w-4" />
                )}
                <span className="font-mono text-xs tracking-wide uppercase">
                  {item.detail}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.org}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
