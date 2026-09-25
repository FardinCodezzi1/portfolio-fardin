"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, Download, Mail, ShieldCheck, Wifi } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { CometCard } from "@/components/ui/comet-card";
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
        
        {/* Left Column Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.p
            variants={fadeInUp}
            className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase"
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
            <span className="text-muted-foreground">I build</span>
            <FlipWords
              words={[...heroPhrases]}
              className="px-0 font-semibold text-accent dark:text-accent"
              duration={2800}
            />
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="max-w-xl text-base leading-relaxed text-muted-foreground"
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

        {/* Right Column: 3D Interactive ID Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center pt-6"
        >
          <CometCard rotateDepth={15} translateDepth={15}>
            <div className="relative flex flex-col items-center">
              {/* Integrated Lanyard Strap & Metal Clip (tilts with the card) */}
              <div className="relative z-20 -mb-2 flex flex-col items-center">
                {/* Fabric Ribbon Segment */}
                <div className="h-10 w-4 bg-muted-foreground/30 border-x border-foreground/10 rounded-t-xs shadow-inner" />
                {/* Silver Metal Clip Holder */}
                <div className="h-2.5 w-8 rounded-xs border border-foreground/20 bg-foreground/20 shadow-md backdrop-blur-xs" />
                {/* ID Badge Slot Punch Hole */}
                <div className="h-3 w-5 rounded-b-md border border-foreground/30 bg-background" />
              </div>

              {/* Main ID Card Body */}
              <div
                className="relative flex w-77.5 flex-col rounded-2xl rounded-br-none rounded-tl-none border border-border bg-card p-4 shadow-2xl transition-colors duration-300 sm:w-85"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* ID Card Header */}
                <div className="flex items-center justify-between border-b border-border/80 pb-2.5 font-mono text-[11px] text-muted-foreground">
                  <div className="flex items-center gap-1.5 font-semibold tracking-wider text-primary">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>SYSTEM ARCHITECT</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Wifi className="h-3.5 w-3.5 opacity-60" />
                    <span className="opacity-70">ID #fardin</span>
                  </div>
                </div>

                {/* Profile Photo Frame */}
                <div className="relative mt-3 aspect-3/4 w-full overflow-hidden rounded-xl border border-border bg-background/50">
                  <Image
                    src={profile.photo}
                    alt={profile.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 340px"
                    className="object-cover object-top"
                  />

                  {/* Security Metallic Hologram Seal */}
                  <div className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 bg-linear-to-tr from-primary/30 via-primary/10 to-transparent shadow-inner backdrop-blur-xs">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary/80 blur-[1px]" />
                  </div>
                </div>

                {/* ID Card Footer / Details */}
                <div className="mt-3.5 flex items-center justify-between font-mono">
                  <div className="flex flex-col">
                    <h3 className="text-sm font-semibold tracking-wide text-card-foreground">
                      {profile.name}
                    </h3>
                    <p className="text-[10px] font-medium tracking-wider text-primary uppercase">
                      Full-Stack Engineer
                    </p>
                  </div>

                  {/* Simulated Barcode */}
                  <div className="flex items-end gap-0.5 opacity-60">
                    <div className="h-5 w-0.5 bg-foreground" />
                    <div className="h-5 w-px bg-foreground" />
                    <div className="h-5 w-0.75 bg-foreground" />
                    <div className="h-5 w-px bg-foreground" />
                    <div className="h-5 w-0.5 bg-foreground" />
                    <div className="h-5 w-px bg-foreground" />
                    <div className="h-5 w-0.75 bg-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </CometCard>
        </motion.div>

      </div>
    </section>
  );
}