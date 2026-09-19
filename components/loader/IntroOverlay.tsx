"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    }, 1800);

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
          <div className="relative px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
            >
              Hi, I&apos;m{" "}
              <span className="text-accent">{profile.firstName}.</span>
            </motion.p>
            <motion.div
              aria-hidden
              className="mx-auto mt-4 h-px w-16 bg-accent/70"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.4 }}
            />
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute h-1 w-1 rounded-sm bg-accent/50"
                  style={{
                    left: `${8 + ((i * 7) % 84)}%`,
                    top: `${20 + ((i * 11) % 60)}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                  transition={{
                    duration: 1.4,
                    delay: 0.15 + i * 0.05,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
