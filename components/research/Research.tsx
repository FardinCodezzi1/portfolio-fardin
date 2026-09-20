"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Meteors } from "@/components/ui/meteors";
import { fadeIn, sectionViewport } from "@/lib/animations";
import { research } from "@/lib/data";

export function Research() {
  return (
    <section id="research" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
            Research
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Peer-reviewed publication
          </h2>
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
        >
          <GlowingEffect>
            <div className="relative overflow-hidden p-6 sm:p-8">
              <Meteors number={16} />
              <div className="relative z-10">
                <p className="font-mono text-xs text-accent">{research.venue}</p>
                <h3 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                  {research.title}
                </h3>
                <p className="mt-3 text-sm text-muted">
                  {research.role} · Published {research.year}
                </p>
                <div className="mt-6">
                  <Button asChild variant="outline">
                    <a href={research.url} target="_blank" rel="noopener noreferrer">
                      View publication
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </GlowingEffect>
        </motion.div>
      </div>
    </section>
  );
}
