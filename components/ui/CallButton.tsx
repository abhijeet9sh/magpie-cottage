"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function CallButton() {
  return (
    <motion.a
      href="tel:+918882760940"
      className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-30 w-11 h-11 md:w-14 md:h-14 bg-forest text-cream rounded-full shadow-lg shadow-forest/30 hover:shadow-xl hover:shadow-forest/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.3 }}
      aria-label="Call us"
    >
      <Phone className="w-5 h-5 md:w-6 md:h-6" />
    </motion.a>
  );
}
