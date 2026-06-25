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
    text: "“One of the most beautiful places to stay if you are looking for a really peaceful getaway from the hustle of city life. The property is very well maintained and caretakers are amazing. Very hospitable and warm. Do try their local delicacies. They make it well. Over all one the of the most amazing summer getaways we’ve had so far in India. Will surely go back again. Cheers to Malini for maintaining such a beautiful place in its natural form and thank you Siddharth for the seamless coordination.. …Loved your place Malini! Very tastefully done up and well maintained….”",
    author: "AASHIMA KHANNA",
    source: "Guest"
  },
  {
    text: "“It is a wonderful house, very comfortable. Neat and clean. The Caretaker and the Cook, both took very good care of the guests”",
    author: "DIVYA JINDAL",
    source: "Guest"
  },
  {
    text: "“I have never had a better Airbnb experience than this. The property vibe is homely, and yet dreamy. It’s ventilated, well maintained, hygienic , spacious. The surrounding area is ample for playing simple outdoor games. The lush greens, fauna and river stream passing just steps away from the property are all a delight to eyes and ears. Coming to the best part, the caretaker Prabha ji, cooked every meal with love and dedication. Due to her hospitality, our stay is going to be memorable for long. The Magpie cottage team promptly handled our all requests. Have already spread my word around among relatives and colleagues. Recommended”",
    author: "SHILPA DALMIA",
    source: "Airbnb"
  },
  {
    text: "“Stayed at Magpie Cottage near Lansdowne. Peaceful, green, and perfect for a quick escape from the city. Loved the homely food and the warm, welcoming hospitality that made the stay truly memorable.”",
    author: "SHUBHAM SHARMA",
    source: "Guest"
  },
  {
    text: "“We had a fabulous experience in terms of views, hospitality, food and experience at the villa. It was out of the world. The property is set in the midst of lush greens. The property has its own charm. The location and service of the property is amazing. The beauty of the property is that there is river flowing right beside it and the views are breath taking. The food here is amazing. Its a must visit”",
    author: "NEHA SINGH",
    source: "Guest"
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
    <section className="py-6 md:py-8 px-6 md:px-12 bg-cream flex flex-col items-center justify-center overflow-hidden">
      <AnimatedSection className="max-w-4xl w-full">
        <div className="flex flex-col items-center justify-center min-h-[100px] transition-all duration-500">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full flex flex-col items-start justify-center text-left"
            >
              <h3 className="font-display text-sm sm:text-base md:text-lg font-light italic text-forest leading-relaxed mb-4 px-4">
                {quotes[currentIndex].text}
              </h3>
              <div className="flex justify-start items-center gap-1 mb-3 text-[#FABB05]">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-3 h-3 md:w-4 md:h-4" />
                ))}
              </div>
              <p className="font-body text-text-mid uppercase tracking-widest text-xs flex justify-start items-center gap-2">
                <span className="w-4 h-px bg-text-mid/30 block"></span>
                {quotes[currentIndex].author}
                <span className="w-4 h-px bg-text-mid/30 block"></span>
              </p>
              <p className="font-body text-[10px] text-text-light mt-1.5 tracking-wider pb-4">
                via {quotes[currentIndex].source}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-3 justify-center mt-2">
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
