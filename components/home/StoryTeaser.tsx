"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ImageReveal } from "@/components/ui/ImageReveal";
import Link from "next/link";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

export function StoryTeaser() {
  return (
    <section className="pt-20 pb-12 md:pt-28 md:pb-16 px-6 md:px-12 max-w-7xl mx-auto bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
        {/* Image with reveal animation */}
        <ImageReveal
          src="/images/real/facade.jpg"
          alt="Magpie Cottage facade with lush green surroundings"
          className="aspect-[3/4] w-full rounded-3xl shadow-sm"
          overlayColor="bg-background"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        
        <AnimatedSection animation="slideInRight">
          <span className="text-xs uppercase tracking-widest text-text-light font-body mb-4 block">Our Story</span>
          <h2 className="font-display text-4xl md:text-5xl font-light italic text-text-dark mb-6 leading-tight">
            Where the jungle <br/> meets the river.
          </h2>
          <p className="font-body text-text-mid leading-relaxed text-lg mb-8 max-w-md">
            Magpie Cottage is a private three-bedroom villa nestled on the edge of a tiger reserve in Lansdowne. A river flows right in front. The forest begins where the garden ends.
          </p>
          <AnimatedButton href="/our-story" variant="primary">
            Discover Our Story
          </AnimatedButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
