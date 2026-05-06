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



  return (
    <section className="relative z-20 w-full min-h-screen flex items-center justify-center bg-forest">
      {/* Fading Stack Slideshow with Ken Burns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div className="absolute inset-0 w-full h-[120%]" style={{ y }}>
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
      </div>

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

      <div 
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-48 pb-32 flex flex-col items-center text-center"
      >
        <motion.div 
          className="w-full flex flex-col items-center"
          style={{ opacity }}
        >
          {/* Combined hero title — Stillness In the Wild */}
          <motion.div
            variants={splitTextContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center items-baseline gap-x-3 md:gap-x-4"
            style={{ perspective: 600 }}
          >
            {/* Stillness In the Wild - Uniform and Elegant */}
            {["Stillness", "In", "the", "Wild"].map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                variants={splitTextWord}
                className="inline-block"
                style={{ transformOrigin: "bottom" }}
                custom={i}
              >
                <span 
                  className="font-display text-4xl md:text-6xl lg:text-7xl text-cream font-light italic tracking-tight leading-[0.9]"
                  style={{ display: "contents" }}
                >
                  {word}
                </span>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Booking widget - Kept solid (no scroll opacity) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-full flex flex-col items-center relative z-[60]"
        >
          <BookingWidget />
        </motion.div>
      </div>

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
