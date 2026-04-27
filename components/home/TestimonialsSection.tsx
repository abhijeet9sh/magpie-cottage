"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const StarIcon = ({ className = "" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={`w-4 h-4 md:w-5 md:h-5 ${className}`}
  >
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

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
              <div className="flex justify-center items-center gap-1 mb-4 text-[#FABB05]">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="font-body text-text-mid uppercase tracking-widest text-sm flex justify-center items-center gap-2">
                <span className="w-6 h-px bg-text-mid/30 block"></span>
                {quotes[currentIndex].author}
                <span className="w-6 h-px bg-text-mid/30 block"></span>
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
