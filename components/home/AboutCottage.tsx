"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { BedDouble, Users, PawPrint, TreePine } from "lucide-react";

const highlights = [
  { icon: <BedDouble size={28} strokeWidth={1.2} />, label: "3 Bedrooms", sub: "Private & spacious" },
  { icon: <Users size={28} strokeWidth={1.2} />, label: "Sleeps 6–8", sub: "Entire villa for you" },
  { icon: <PawPrint size={28} strokeWidth={1.2} />, label: "Pet Friendly", sub: "Furry friends welcome" },
  { icon: <TreePine size={28} strokeWidth={1.2} />, label: "Tiger Reserve", sub: "8.6 km to Jim Corbett" },
];

export function AboutCottage() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image */}
        <AnimatedSection animation="slideInLeft">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/images/real/facade.jpg"
              alt="Magpie Cottage — a private jungle retreat"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        </AnimatedSection>

        {/* Text */}
        <AnimatedSection animation="slideInRight">
          <span className="text-xs uppercase tracking-widest text-text-light font-body mb-4 block">
            A Private Retreat
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light italic text-text-dark mb-6 leading-tight">
            Your own jungle cottage.
          </h2>
          <p className="font-body text-text-mid leading-relaxed text-lg mb-10 max-w-md">
            Magpie Cottage is a private three-bedroom villa nestled on the edge
            of the Kalagarh Tiger Reserve in Simalsaira, Uttarakhand. Set among
            sal forests and alongside the Palain river, it&apos;s an intimate
            retreat where the forest begins where the garden ends.
          </p>

          {/* Highlight grid */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-start gap-4 group"
              >
                <div className="text-forest/70 mt-0.5 transition-transform duration-300 group-hover:-translate-y-0.5">
                  {h.icon}
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-text-dark tracking-wide">
                    {h.label}
                  </p>
                  <p className="font-body text-xs text-text-light">{h.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <AnimatedButton href="/our-story" variant="primary">
            Our Story
          </AnimatedButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
