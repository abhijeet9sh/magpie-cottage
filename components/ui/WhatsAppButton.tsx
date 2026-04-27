"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="https://wa.me/919811934909"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
    >
      <MessageCircle size={24} />
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        animate={{ 
          width: isHovered ? "auto" : 0, 
          opacity: isHovered ? 1 : 0 
        }}
        className="overflow-hidden whitespace-nowrap font-body font-medium"
      >
        Chat with us
      </motion.span>
    </motion.a>
  );
}
