"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { introOverlay } from "@/lib/animations";
import { profile } from "@/lib/data";

const STORAGE_KEY = "portfolio-intro-seen";

export function IntroOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (seen) return;

    setVisible(true);
    const timer = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, 3800);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background"
          variants={introOverlay}
          initial="initial"
          exit="exit"
        >
          <div className="relative flex w-full max-w-lg flex-col items-center px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 font-mono text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
            >
              Hi, I&apos;m{" "}
              <span className="text-accent">{profile.firstName}.</span>
            </motion.p>
            <motion.div
              aria-hidden
              className="relative z-10 mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-accent to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            />
            <div className="relative mt-2 h-40 w-full">
              <SparklesCore
                id="intro-sparkles"
                background="transparent"
                minSize={0.4}
                maxSize={1.2}
                particleDensity={900}
                className="h-full w-full"
                particleColor="#e2b714"
                speed={1}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
