"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cardStaggerContainer, cardItem } from "@/lib/animations";

const experiences = [
  {
    title: "Outdoor Relaxation",
    label: "OUTDOOR",
    image: "/images/real/outdoor.jpg",
    href: "/experiences#outdoor"
  },
  {
    title: "Al Fresco Dining",
    label: "DINING",
    image: "/images/real/dining.jpg",
    href: "/experiences#dining"
  },
  {
    title: "Birdwatching",
    label: "BIRDWATCHING",
    image: "/images/gallery/exterior/img_3.jpg",
    href: "/experiences#birdwatching"
  }
];

export function ExperiencesPreview() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-cream text-text-dark w-full">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12 md:mb-16" animation="clipReveal">
          <h2 className="font-display text-4xl md:text-5xl font-light italic leading-tight text-text-dark">
            Serene experiences
          </h2>
        </AnimatedSection>

        {/* Clean rectangular cards with labels below — matching TheGaj style */}
        <motion.div 
          className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-none"
          variants={cardStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.title}
              variants={cardItem}
              className="snap-center shrink-0 w-[85vw] md:w-auto"
            >
              <Link href={exp.href} className="group block">
                {/* Image container — clean rounded-xl, no overlay text */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-500">
                  <div className="absolute inset-0 img-hover-zoom">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover bg-stone-200"
                      sizes="(max-width: 768px) 85vw, 33vw"
                    />
                  </div>
                </div>
                {/* Label below image — uppercase tracking like TheGaj */}
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-text-mid font-body">
                  {exp.label}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link 
            href="/experiences"
            className="group inline-flex items-center gap-2 text-forest font-medium border-b border-forest pb-1 hover:text-sage hover:border-sage transition-colors"
          >
            View All Experiences <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
