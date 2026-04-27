"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BookingWidget } from "@/components/booking/BookingWidget";
import { ArrowDown } from "lucide-react";
import { splitTextContainer, splitTextWord } from "@/lib/animations";

const heroSlides = [
  "/images/slides/slide-1.jpg",
  "/images/slides/slide-2.jpg",
  "/images/slides/slide-3.jpg",
  "/images/slides/slide-4.jpg",
  "/images/slides/slide-5.jpg",
  "/images/slides/slide-6.jpg",
];

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const titleWords = ["Magpie", "Cottage"];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-forest">
      {/* Fading Stack Slideshow with Ken Burns */}
      <motion.div className="absolute inset-0 z-0 w-full h-[120%]" style={{ y }}>
        <div className="absolute inset-0">
          {heroSlides.map((slide, i) => (
            <motion.div
              key={slide}
              initial={{ opacity: 0 }}
              animate={{ opacity: i === currentSlide ? 1 : 0 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.15 }}
                animate={{ scale: i === currentSlide ? 1 : 1.15 }}
                transition={{ duration: 8, ease: "easeOut" }}
              >
                <Image
                  src={slide}
                  alt={`Magpie Cottage view ${i + 1}`}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="100vw"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === currentSlide ? "bg-cream w-8" : "bg-cream/40 w-2"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-48 pb-32 flex flex-col items-center text-center"
        style={{ opacity }}
      >
        {/* Location tag */}
        <motion.span 
          className="uppercase tracking-[0.3em] text-sage text-xs font-body mb-8 block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Lansdowne, Uttarakhand
        </motion.span>
        
        {/* Split-text hero title */}
        <motion.div
          variants={splitTextContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center"
          style={{ perspective: 600 }}
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={word}
              variants={splitTextWord}
              className="inline-block mr-[0.3em]"
              style={{ transformOrigin: "bottom" }}
              custom={i}
            >
              <h1 
                className={`font-display text-7xl md:text-8xl lg:text-[10rem] text-cream font-light tracking-tight leading-[0.9] ${
                  i === 1 ? "italic font-extralight" : ""
                }`}
                style={{ display: "contents" }}
              >
                {word}
              </h1>
            </motion.span>
          ))}
        </motion.div>

        {/* Subtitle + Booking widget */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-full mt-8 md:mt-12 flex flex-col items-center"
        >
          <h2 className="font-display text-2xl md:text-3xl text-cream font-light tracking-wide mb-8">
            Your <span className="italic text-sage">jungle retreat</span>, six hours from Delhi.
          </h2>
          <BookingWidget />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-cream/70 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest font-body">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
