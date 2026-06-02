"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function SplashScreen() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only show on the homepage and only once per session
    if (pathname === "/") {
      const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
      if (!hasSeenSplash) {
        setShow(true);
        sessionStorage.setItem("hasSeenSplash", "true");
        
        // Auto hide after 2.2 seconds
        const timer = setTimeout(() => {
          setShow(false);
        }, 2200);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#181d15]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <p className="font-display italic text-2xl md:text-3xl text-cream/80 mb-6 font-light tracking-wide">Welcome to</p>
            <Image
              src="/logo.png"
              alt="Magpie Cottage"
              width={140}
              height={140}
              className="object-contain w-32 h-32 md:w-40 md:h-40"
              style={{ filter: "invert(1) brightness(1.5)" }}
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
