"use client";

import { motion } from "framer-motion";
import { imageRevealOverlay, imageRevealContent } from "@/lib/animations";
import Image from "next/image";
import { ReactNode } from "react";

interface ImageRevealProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  overlayColor?: string;
  sizes?: string;
  priority?: boolean;
  children?: ReactNode;
}

export function ImageReveal({ 
  src, 
  alt, 
  fill = true, 
  className = "", 
  overlayColor = "bg-cream",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  children
}: ImageRevealProps) {
  return (
    <motion.div 
      className={`relative overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* The image underneath */}
      <motion.div 
        variants={imageRevealContent} 
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      </motion.div>

      {/* The colored overlay that slides away */}
      <motion.div
        variants={imageRevealOverlay}
        className={`absolute inset-0 ${overlayColor} z-10 origin-top`}
      />

      {/* Optional overlay content (like text) */}
      {children && (
        <div className="absolute inset-0 z-20">
          {children}
        </div>
      )}
    </motion.div>
  );
}
