"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X, Clock, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function TrialPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [canDismiss, setCanDismiss] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  // Set expiry date to 10 days from today (July 16, 2026)
  const expiryDate = new Date("2026-07-16T23:59:59").getTime();

  useEffect(() => {
    setIsClient(true);
    
    if (pathname === "/") {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [pathname]);

  // Countdown timer in a separate effect so it doesn't re-bind constantly
  useEffect(() => {
    if (!isClient) return;

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = expiryDate - now;

      if (distance < 0) {
        setTimeLeft("Trial Expired");
        setCanDismiss(false); // Can't dismiss if expired
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [isClient]);

  const handleDismiss = () => {
    if (!canDismiss) return;
    setIsVisible(false);
  };

  if (!isClient) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.5 }}
            className="w-full max-w-3xl bg-zinc-950 border-4 border-red-500 p-8 md:p-12 rounded-3xl shadow-[0_0_150px_rgba(239,68,68,0.5)] text-zinc-100 flex flex-col items-center text-center relative"
          >
            {canDismiss && (
              <button
                onClick={handleDismiss}
                className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors bg-white/5 hover:bg-red-500 rounded-full p-2"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            )}
            
            <div className="flex items-center justify-center gap-3 text-red-500 mb-6">
              <AlertCircle size={40} className="animate-pulse" />
              <h2 className="font-dm-sans font-black text-3xl md:text-4xl tracking-widest uppercase">
                Website Preview
              </h2>
            </div>
            
            <div className="space-y-8 font-dm-sans w-full">
              <p className="text-xl md:text-2xl text-zinc-200 leading-relaxed">
                This is a trial preview of the Magpie Cottage website.<br />
                Your trial will expire on <strong className="text-red-400 font-bold">July 16, 2026</strong>.
              </p>
              
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed italic text-center">
                The 7 day access is provided for Evaluation Only.
              </p>
              
              <div className="flex items-center justify-center gap-4 bg-red-950/40 py-6 px-8 rounded-2xl border-2 border-red-900/50 shadow-inner my-8">
                <Clock size={32} className="text-red-500 animate-pulse" />
                <span className="font-mono font-bold text-4xl md:text-5xl tracking-widest text-white">
                  {timeLeft || "Loading..."}
                </span>
              </div>
              
              <div className="bg-red-950/60 border border-red-500/50 rounded-lg p-6">
                <p className="text-lg md:text-xl text-red-100 leading-relaxed text-center">
                  Please <strong className="text-white bg-red-600 px-3 py-1 rounded">contact the developer</strong> immediately to activate the full permanent version of this website.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
