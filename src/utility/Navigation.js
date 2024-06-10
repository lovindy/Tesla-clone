// animations.js

export const menuVariants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { opacity: 1, scale: 1 },
  transition: { duration: 0.3 },
};

export const navigationVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.3 } },
  pressed: { scale: 0.95 },
};

export const dropdownVariants = {
  initial: { opacity: 0, y: -40, display: "none" },
  animate: { opacity: 1, y: 0, display: "block" },
  exit: { opacity: 0, y: -40, display: "none" },
  transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
};

export const dropdownItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: index * 0.2,
    },
  }),
};

export const complexDisplayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
};

export const overlayBackgroundVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
};

// Additional Variants

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const slideInLeftVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const slideInRightVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const zoomInVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

export const rotateVariants = {
  hidden: { rotate: -180, opacity: 0 },
  visible: { rotate: 0, opacity: 1, transition: { duration: 0.5 } },
};

export const bounceVariants = {
  animate: { y: [0, -30, 0], transition: { yoyo: Infinity, duration: 0.6 } },
};

export const staggerContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const scaleUpVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { duration: 0.5 } },
};

export const flipVariants = {
  hidden: { rotateY: 180, opacity: 0 },
  visible: { rotateY: 0, opacity: 1, transition: { duration: 0.6 } },
};

export const wiggleVariants = {
  animate: { rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 } },
};
