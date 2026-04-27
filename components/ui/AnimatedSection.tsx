"use client";

import { motion, Variants } from "framer-motion";
import { fadeUp, clipReveal, slideInLeft, slideInRight, scaleIn, slideUp } from "@/lib/animations";
import { ReactNode } from "react";

type AnimationType = "fadeUp" | "clipReveal" | "slideInLeft" | "slideInRight" | "scaleIn" | "slideUp";

const animationMap: Record<AnimationType, Variants> = {
  fadeUp,
  clipReveal,
  slideInLeft,
  slideInRight,
  scaleIn,
  slideUp,
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  animation?: AnimationType;
  delay?: number;
}

export function AnimatedSection({ 
  children, 
  className = "", 
  id, 
  animation = "fadeUp",
  delay = 0 
}: AnimatedSectionProps) {
  const variants = animationMap[animation];

  return (
    <motion.div
      id={id}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
