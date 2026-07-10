"use client";

import { motion } from "framer-motion";
import { splitTextContainer, splitTextWord, fadeUp, staggerContainer } from "@/lib/animations";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2Z" />
        <path d="M12 11v4" /><path d="M10 13h4" />
      </svg>
    ),
    title: "Book your stay",
    desc: "Reserve our private villa with stunning wilderness views"
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="M12 8v4" /><circle cx="12" cy="16" r="0.5" fill="currentColor" />
      </svg>
    ),
    title: "Nature experiences",
    desc: "Experience the pristine beauty of the Himalayan foothills"
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12c-2-2.67-4-4-4-6a4 4 0 0 1 8 0c0 2-2 3.33-4 6Z" />
        <path d="M12 12c2 2.67 4 4 4 6a4 4 0 0 1-8 0c0-2 2-3.33 4-6Z" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Bonfire Nights",
    desc: "Relax under the stars with our evening bonfire sessions"
  }
];

export function CtaBanner() {
  const titleWords = ["Ready", "To", "Unplug?"];

  return (
    <section className="relative w-full pt-6 pb-2 md:pt-8 md:pb-4 bg-forest text-cream flex items-center justify-center overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none mix-blend-overlay"></div>
      
      <div className="relative z-10 text-left px-6 md:px-12 max-w-5xl mx-auto w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Split-text title */}
          <motion.div
            variants={splitTextContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-wrap justify-start mb-4"
            style={{ perspective: 600 }}
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                variants={splitTextWord}
                className="inline-block mr-[0.3em]"
                style={{ transformOrigin: "bottom" }}
              >
                <span className="font-display text-4xl md:text-5xl font-light italic">
                  {word}
                </span>
              </motion.span>
            ))}
          </motion.div>
          
          <motion.p 
            variants={fadeUp}
            className="font-body text-cream/70 text-base md:text-lg leading-relaxed max-w-2xl mb-6"
          >
            Escape to Magpie Cottage- where the only notifications are birdsongs and the gentle gurgling of the river
          </motion.p>
          
          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 md:gap-6"
          >
            <AnimatedButton href="/book" variant="secondary">
              Book Your Stay
            </AnimatedButton>
            <AnimatedButton 
              href="https://wa.me/918882760940"
              variant="outline"
              external
            >
              WhatsApp Us
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
