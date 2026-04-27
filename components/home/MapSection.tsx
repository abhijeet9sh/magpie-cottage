"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { slideInLeft } from "@/lib/animations";

export function MapSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left: Google Maps Embed */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.68595460833!2d78.61460592750389!3d29.837748430761614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39097e32a6886e41%3A0xda81ad792fc64fa3!2sLansdowne%2C%20Uttarakhand%20246155!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Magpie Cottage Location"
          />
        </motion.div>

        {/* Right: Text */}
        <AnimatedSection>
          <span className="text-xs uppercase tracking-widest text-text-light font-body mb-4 block">Getting Here</span>
          <h2 className="font-display text-4xl md:text-5xl font-light italic text-text-dark mb-6 leading-tight">
            Six hours from Delhi. <br/> A world away.
          </h2>
          <p className="font-body text-text-mid leading-relaxed text-lg mb-8 max-w-md">
            Located in Lansdowne, Pauri Garhwal, Uttarakhand — accessible by road from Delhi, Dehradun, and Haridwar. The final stretch is a scenic forest drive.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="px-4 py-2 rounded-full border border-forest/10 text-sm font-body text-forest bg-stone-50">Delhi — 6 hrs</span>
            <span className="px-4 py-2 rounded-full border border-forest/10 text-sm font-body text-forest bg-stone-50">Dehradun — 3 hrs</span>
            <span className="px-4 py-2 rounded-full border border-forest/10 text-sm font-body text-forest bg-stone-50">Haridwar — 2.5 hrs</span>
          </div>

          <a 
            href="https://maps.google.com/?q=Lansdowne,Uttarakhand" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 bg-forest text-cream rounded-xl font-medium hover:bg-forest-mid transition-colors"
          >
            Get Directions
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
