"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

export function StoryTeaser() {
  return (
    <section className="pt-20 pb-12 md:pt-28 md:pb-16 px-6 md:px-12 max-w-7xl mx-auto bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
        {/* Image with reveal animation */}
        <ImageReveal
          src="/images/gallery/exterior/img_6.jpg"
          alt="The wild heart of Kalagarh — sal forests and river valleys at the edge of the tiger reserve"
          className="aspect-[3/4] w-full rounded-3xl shadow-sm"
          overlayColor="bg-background"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        
        <AnimatedSection animation="slideInRight">
          <span className="text-xs uppercase tracking-widest text-text-light font-body mb-4 block">The Setting</span>
          <h2 className="font-display text-4xl md:text-5xl font-light italic text-text-dark mb-6 leading-tight">
            Where The Jungle <br/> Meets The River
          </h2>
          <h3 className="font-display text-xl md:text-2xl font-medium text-text-dark mb-4">
            Grounded in the Wild Heart of Kalagarh
          </h3>
          <p className="font-body text-text-mid leading-relaxed text-lg mb-8 max-w-md">
            At Corbett&apos;s western fringe lies the Kalagarh Tiger Reserve—more secluded and less frequented, yet abundant in sal forests, winding river valleys, and vital wildlife corridors inhabited by elephants, tigers, and a wide array of species. In contrast to Corbett&apos;s busier, resort-filled zones, Kalagarh has preserved its rugged, untouched character—a landscape where the forest remains authentic and untamed.
          </p>
          <AnimatedButton href="/our-story" variant="primary">
            Discover Our Story
          </AnimatedButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
