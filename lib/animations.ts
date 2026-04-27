import { Variants } from "framer-motion";

// === BASIC VARIANTS (existing, refined) ===

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.0, ease: "easeOut" } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] } },
};

// === NEW: TheGaj-style animations ===

// Clip-path reveal (section slides up from bottom)
export const clipReveal: Variants = {
  hidden: { 
    clipPath: "inset(100% 0% 0% 0%)",
    opacity: 0 
  },
  visible: { 
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.77, 0, 0.175, 1] } 
  },
};

// Image reveal (for overlay-wipe effect)
export const imageRevealOverlay: Variants = {
  hidden: { scaleY: 1 },
  visible: { 
    scaleY: 0, 
    transition: { duration: 1.0, ease: [0.77, 0, 0.175, 1], delay: 0.2 } 
  },
};

export const imageRevealContent: Variants = {
  hidden: { scale: 1.2 },
  visible: { 
    scale: 1, 
    transition: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 } 
  },
};

// Card stagger with scale (TheGaj-style card entrance)
export const cardStaggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

export const cardItem: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { 
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } 
  },
};

// Split text (word by word reveal)
export const splitTextContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

export const splitTextWord: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: { 
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } 
  },
};

// Fade up with different delays for footer columns
export const footerStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export const footerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  },
};

// Horizontal slide in for marquee-adjacent elements
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }
  },
};

// Scale up from center (for gallery items)
export const scaleUpStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const scaleUpItem: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  },
};
