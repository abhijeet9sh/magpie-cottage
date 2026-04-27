"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useCallback } from "react";

interface ImageLightboxProps {
  images: { id: string | number; src: string; alt: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ImageLightbox({ images, currentIndex, isOpen, onClose, onNavigate }: ImageLightboxProps) {
  
  const handlePrevious = useCallback(() => {
    onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrevious, handleNext]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-forest/95 backdrop-blur-md flex items-center justify-center"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors z-50"
          >
            <X size={32} />
          </button>

          <button 
            onClick={handlePrevious}
            className="absolute left-4 md:left-12 text-cream/70 hover:text-cream transition-colors z-50 p-4"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="relative w-full h-full max-w-5xl max-h-[80vh] mx-auto px-16 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                {images[currentIndex] && (
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={handleNext}
            className="absolute right-4 md:right-12 text-cream/70 hover:text-cream transition-colors z-50 p-4"
          >
            <ChevronRight size={40} />
          </button>
          
          <div className="absolute bottom-6 left-0 w-full text-center text-cream/50 font-body text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
