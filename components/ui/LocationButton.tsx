"use client";

import { motion } from "framer-motion";

export function LocationButton() {
  return (
    <motion.a
      href="https://www.google.com/maps/place/Magpie+Cottage/@29.7555205,78.7255583,17z/data=!4m16!1m7!3m6!1s0x3909814324743179:0x5d17e715e66e8917!2sMagpie+Cottage!8m2!3d29.7555159!4d78.7281332"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-forest text-cream rounded-full shadow-lg shadow-forest/30 hover:shadow-xl hover:shadow-forest/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.5 }}
      aria-label="View location on Google Maps"
    >
      {/* Inline SVG to avoid lucide rendering issues */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    </motion.a>
  );
}
