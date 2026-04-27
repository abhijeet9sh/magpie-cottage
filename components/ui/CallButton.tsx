"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function CallButton() {
  return (
    <motion.a
      href="tel:+919811934909"
      className="fixed bottom-[5.5rem] right-6 z-50 w-14 h-14 bg-forest text-cream rounded-full shadow-lg shadow-forest/30 hover:shadow-xl hover:shadow-forest/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.3 }}
      aria-label="Call us"
    >
      <Phone size={22} />
    </motion.a>
  );
}
