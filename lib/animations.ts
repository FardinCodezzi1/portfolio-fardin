import type { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const introOverlay: Variants = {
  initial: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: {
    opacity: 0,
    scale: 1.02,
    filter: "blur(8px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const sectionViewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -40px 0px",
} as const;
