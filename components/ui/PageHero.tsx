"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
}

export function PageHero({ title, subtitle, imageSrc }: PageHeroProps) {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-forest/40" />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-center pt-20">
        <motion.h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl text-cream font-light"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="font-display text-xl md:text-2xl text-cream/80 font-light italic tracking-wide mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
