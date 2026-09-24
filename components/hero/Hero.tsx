"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, Download, Mail } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { heroPhrases, profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-16"
    >
      <BackgroundBeams className="opacity-80" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-4 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-12 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.p
            variants={fadeInUp}
            className="font-mono text-xs tracking-[0.2em] text-muted uppercase"
          >
            {profile.location} · Open for remote
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            {profile.headline}
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-baseline gap-x-2 font-mono text-base text-foreground sm:text-lg"
          >
            <span className="text-muted">I build</span>
            <FlipWords
              words={[...heroPhrases]}
              className="px-0 font-semibold text-accent dark:text-accent"
              duration={2800}
            />
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="max-w-xl text-base leading-relaxed text-muted"
          >
            {profile.summary}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-1">
            <Button asChild>
              <a href="#architecture">
                Explore Architecture
                <ArrowDownRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={profile.resumePath} download>
                Download Resume
                <Download className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">
                Contact Me
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm md:max-w-none"
        >
          <div className="relative aspect-4/5 overflow-hidden rounded-md border border-muted/25 bg-surface">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 380px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
          </div>
          <p className="mt-3 font-mono text-xs text-muted">{profile.name}</p>
        </motion.div>
      </div>
    </section>
  );
}
