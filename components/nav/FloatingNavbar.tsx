"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navLinks, profile } from "@/lib/data";
import { ThemeToggle } from "@/components/nav/ThemeToggle";
import { cn } from "@/lib/utils";

export function FloatingNavbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
    if (latest > lastY.current && latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastY.current = latest;
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: 1 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between gap-4 rounded-md border px-3 py-2 backdrop-blur-md transition-colors",
          scrolled
            ? "border-muted/30 bg-background/85"
            : "border-transparent bg-background/40",
        )}
      >
        <a
          href="#top"
          className="shrink-0 font-mono text-sm font-semibold tracking-wide text-accent"
        >
          {profile.firstName.toUpperCase()}
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm px-2.5 py-1.5 text-xs font-medium text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </motion.header>
  );
}
