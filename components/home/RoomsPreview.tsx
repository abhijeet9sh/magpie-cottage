"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cardStaggerContainer, cardItem } from "@/lib/animations";

const rooms = [
  {
    name: "Master Bedroom",
    bed: "1 Double bed, 1 Floor mattress",
    view: "River & Forest view",
    image: "/images/gallery/bedroom-1/img_1.jpg",
  },
  {
    name: "Bedroom 2",
    bed: "1 Double bed",
    view: "Forest view",
    image: "/images/gallery/bedroom-2/img_1.jpg",
  },
  {
    name: "Bedroom 3",
    bed: "1 Double bed",
    view: "River view",
    image: "/images/gallery/bedroom-3/img_1.jpg",
  }
];

export function RoomsPreview() {
  return (
    <section className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection className="mb-16 md:mb-24" animation="clipReveal">
          <span className="text-xs uppercase tracking-widest text-text-light font-body mb-4 block">Where You&apos;ll Sleep</span>
          <h2 className="font-display text-4xl md:text-5xl font-light italic text-text-dark leading-tight">
            Three bedrooms. <br/> Each one a retreat.
          </h2>
        </AnimatedSection>

        <motion.div 
          className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-none"
          variants={cardStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {rooms.map((room) => (
            <motion.div
              key={room.name}
              variants={cardItem}
              className="min-w-[85vw] md:min-w-0 snap-center group flex flex-col"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-stone-200 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-500 cursor-pointer img-hover-zoom">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="font-display text-2xl font-medium text-text-dark mb-2">{room.name}</h3>
              <div className="flex flex-col gap-1 text-text-mid font-body mb-6">
                <span>{room.bed}</span>
                <span>{room.view}</span>
              </div>
              <Link 
                href="/the-cottage" 
                className="mt-auto inline-flex items-center gap-2 text-forest font-medium hover:text-sage-border transition-colors self-start group/link"
              >
                Explore this room <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
