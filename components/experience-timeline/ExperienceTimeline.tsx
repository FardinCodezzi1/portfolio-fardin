"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeIn, sectionViewport } from "@/lib/animations";
import { experience } from "@/lib/data";

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.3"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const beamOpacity = useTransform(scrollYProgress, [0, 0.1], [0.3, 1]);

  return (
    <section id="experience" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
            Experience
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Architectural timeline
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Two nodes, architectural highlights — not a resume dump.
          </p>
        </div>

        <div ref={containerRef} className="relative ml-2 space-y-12 border-l border-muted/25 pl-8 md:ml-4">
          <motion.div
            aria-hidden
            className="absolute top-0 left-[-1px] w-0.5 origin-top bg-accent"
            style={{ scaleY, opacity: beamOpacity, height: "100%" }}
          />

          {experience.map((job) => (
            <motion.article
              key={job.id}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              className="relative"
            >
              <span className="absolute top-1.5 -left-[2.4rem] h-3 w-3 rounded-sm border-2 border-accent bg-background" />
              <div className="sticky top-24 mb-2 md:mb-0">
                <p className="font-mono text-xs text-accent">{job.period}</p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {job.role}
                </h3>
                <p className="text-sm text-muted">
                  {job.company} · {job.location}
                </p>
              </div>
              <ul className="mt-4 space-y-3">
                {job.highlights.map((line) => (
                  <li
                    key={line}
                    className="text-sm leading-relaxed text-foreground/90"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
