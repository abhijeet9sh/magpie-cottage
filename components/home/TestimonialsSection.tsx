"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const quotes = [
  {
    text: "Absolutely blissful place ensconced in a veritable green fortress with a gurgling gushing stream for company.",
    author: "Rajesh Madan"
  },
  {
    text: "A gem of a cottage, tastefully appointed, clean, spacious and comfortable. Surrounded by forests on either side, beside the Plane river.",
    author: "Kaustuv Chatterjee"
  },
  {
    text: "Amazing location and villa. The villa gives a very cosy vibe. The staff is polite and the food is amazing.",
    author: "Shilpa"
  },
  {
    text: "It is a wonderful house, very comfortable. Neat and clean. Caretaker and the cook both are taking good care of the guest.",
    author: "Divya Jindal"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-cream flex flex-col items-center justify-center text-center overflow-hidden">
      <AnimatedSection className="max-w-4xl w-full">
        <div className="font-display text-7xl md:text-8xl text-sage leading-none mb-6 opacity-40">
          &ldquo;
        </div>
        
        <div className="relative min-h-[180px] md:min-h-[140px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute w-full"
            >
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic text-forest leading-tight mb-8">
                {quotes[currentIndex].text}
              </h3>
              <p className="font-body text-text-mid uppercase tracking-widest text-sm">
                — {quotes[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-3 justify-center mt-12">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-forest w-6" : "bg-forest/20"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
