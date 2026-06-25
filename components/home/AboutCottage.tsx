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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Image */}
        <AnimatedSection animation="slideInLeft">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/images/real/drone-hero.jpg"
              alt="Magpie Cottage — a private jungle retreat"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        </AnimatedSection>

        {/* Text */}
        <AnimatedSection animation="slideInRight">
          <span className="text-xs tracking-widest text-text-light font-body mb-4 block text-left">
            A Wilderness Hideaway
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-light italic text-text-dark mb-6 leading-tight text-left">
            Your Own Jungle Retreat
          </h2>
          <div className="font-body text-text-mid leading-relaxed text-[15px] md:text-lg mb-10 max-w-md text-left">
            <p className="mb-4">
              Tucked away in pristine wilderness, far from the sights and sounds of urban life, Magpie Cottage is an exclusive three-bedroom jungle retreat set amidst over half an acre of lush greenery and towering Sal trees. Home to more than 500 species of birds, it offers spacious living and dining areas, two open terraces, and the rare luxury of complete privacy in nature.
            </p>
            <p>
              Nestled on the banks of the Palain River in Simalsaira, Uttarakhand, Magpie Cottage lies just 7 km from the Vatanvasa Gate of the Kalagarh Tiger Reserve. A short safari drive takes you deep into the forests, while the historic Halduparao Forest Rest House ( Corbett Tiger Reserve) built in 1890 and located within 10 km, offers opportunities to spot elephants, spotted deer, and, if fortune favours, even tigers along the Palain (Sonanadi/Golden) River.
            </p>
          </div>

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
