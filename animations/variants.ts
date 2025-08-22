import type { Variant } from "framer-motion";

// Bottom → Top
export const bottomToTop: { hidden: Variant; visible: Variant } = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

// Top → Bottom
export const topToBottom: { hidden: Variant; visible: Variant } = {
  hidden: {
    opacity: 0,
    y: -60,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Left → Right
export const leftToRight: { hidden: Variant; visible: Variant } = {
  hidden: {
    opacity: 0,
    x: -60,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Right → Left
export const rightToLeft: { hidden: Variant; visible: Variant } = {
  hidden: {
    opacity: 0,
    x: 60,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fade In
export const fadeIn: { hidden: Variant; visible: Variant } = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

// Scale In
export const scaleIn: { hidden: Variant; visible: Variant } = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
