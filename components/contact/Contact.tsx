"use client";

import { Code2, Link2, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, sectionViewport } from "@/lib/animations";
import { profile } from "@/lib/data";

const socials = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    detail: profile.email,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    detail: "linkedin.com/in/fardin-abu-ubaid",
    icon: Link2,
    external: true,
  },
  {
    label: "GitHub",
    href: profile.github,
    detail: "github.com/FardinCodezzi1",
    icon: Code2,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="overflow-hidden rounded-md border border-muted/25 bg-surface">
          <div className="grid lg:grid-cols-2">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              className="flex flex-col justify-center p-6 sm:p-8 lg:p-10"
            >
              <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
                Contact
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Get in touch
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                Open for global remote roles in system architecture, full-stack
                product work, and AI-integrated platforms. Reach me directly —
                no form, no waiting.
              </p>

              <ul className="mt-8 space-y-3">
                {socials.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        {...("external" in item && item.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="group flex items-center gap-3 rounded-md border border-muted/30 bg-background/50 px-4 py-3 transition-colors hover:border-accent/50 hover:bg-accent/5"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-accent/30 bg-accent/10 text-accent">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs font-medium text-muted">
                            {item.label}
                          </span>
                          <span className="block truncate text-sm text-foreground group-hover:text-accent">
                            {item.detail}
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              className="relative min-h-[280px] border-t border-muted/20 bg-background/40 lg:min-h-full lg:border-t-0 lg:border-l"
            >
              {/* Aspect matches world.svg viewBox 2000×857 */}
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
                <div className="relative w-full" style={{ aspectRatio: "2000 / 857" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={profile.worldMap}
                    alt="World map with Dhaka, Bangladesh marked"
                    className="absolute inset-0 h-full w-full object-fill opacity-90 [filter:grayscale(1)_brightness(0.5)_contrast(1.15)_sepia(0.15)]"
                  />
                  {/*
                    Dhaka ≈ 90.4°E, 23.8°N on equirectangular 2000×857:
                    x = (90.4+180)/360 * 100 ≈ 75.1%
                    y = (90-23.8)/180 * 100 ≈ 36.8%
                  */}
                  <div
                    className="absolute z-10 -translate-x-1/2 -translate-y-full"
                    style={{ left: "75.1%", top: "36.8%" }}
                  >
                    <div className="mb-1 rounded-sm border border-muted/40 bg-surface px-2 py-1 text-[10px] whitespace-nowrap text-foreground shadow-md sm:text-xs">
                      Dhaka · I&apos;m here
                    </div>
                    <div className="mx-auto h-6 w-px bg-gradient-to-b from-accent to-transparent" />
                    <span className="relative mx-auto flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-45" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-accent shadow-[0_0_14px_var(--main-color)]" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
