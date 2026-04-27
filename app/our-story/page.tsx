import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";

export const metadata = {
  title: "Our Story | Magpie Cottage",
  description: "Learn about the origins of Magpie Cottage, our philosophy, and the people behind the retreat.",
};

export default function OurStory() {
  return (
    <main className="bg-background relative">
      <Navbar />
      <PageHero 
        title="Our Story" 
        imageSrc="/images/gallery/exterior/img_4.jpg"
      />

      <div className="pt-12 pb-24 md:pt-16 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
        {/* 1. The Host */}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image src="/images/gallery/additional-photos/img_3.jpg" alt="The Host" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-text-light font-body mb-4 block">The Host</span>
            <h2 className="font-display text-4xl md:text-5xl font-light italic mb-6">A personal touch.</h2>
            <div className="font-body text-text-mid space-y-4 leading-relaxed">
              <p>Hello, I&apos;m Malini. Magpie Cottage began as a deeply personal project—a sanctuary for my family to escape the relentless pace of city life.</p>
              <p>Over the years, we realized that the magic of this place—the symphony of the river, the calls of the wild, and the profound silence of the jungle—was too beautiful not to share.</p>
            </div>
          </div>
        </AnimatedSection>

        {/* 2. The Cottage */}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-xs uppercase tracking-widest text-text-light font-body mb-4 block">The Cottage</span>
            <h2 className="font-display text-4xl md:text-5xl font-light italic mb-6">Built with nature.</h2>
            <div className="font-body text-text-mid space-y-4 leading-relaxed">
              <p>Constructed with local stone and wood, the cottage was designed to blend seamlessly into the surrounding forest canopy. Every window frames a living painting.</p>
              <p>We&apos;ve kept the footprint small and the impact minimal, ensuring that the wildlife that calls this place home remains undisturbed.</p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative aspect-video rounded-2xl overflow-hidden">
            <Image src="/images/real/facade.jpg" alt="The Cottage" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </AnimatedSection>

        {/* 3. The Setting */}
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-text-light font-body mb-4 block">The Setting</span>
          <h2 className="font-display text-4xl md:text-5xl font-light italic mb-8">On the edge of the wild.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="relative aspect-square rounded-2xl overflow-hidden"><Image src="/images/gallery/exterior/img_6.jpg" alt="River" fill className="object-cover" sizes="33vw" /></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden"><Image src="/images/gallery/exterior/img_3.jpg" alt="Bird" fill className="object-cover" sizes="33vw" /></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden hidden md:block"><Image src="/images/gallery/exterior/img_8.jpg" alt="Forest" fill className="object-cover" sizes="33vw" /></div>
          </div>
          <p className="font-body text-text-mid leading-relaxed max-w-2xl mx-auto">
            Situated right on the boundary of a protected tiger reserve, the property offers unparalleled access to raw, unfiltered nature. The river out front is your daily soundtrack.
          </p>
        </AnimatedSection>

        {/* 4. The Philosophy */}
        <AnimatedSection className="bg-forest text-cream rounded-3xl p-12 md:p-24 text-center">
          <span className="text-xs uppercase tracking-widest text-sage font-body mb-6 block">Our Philosophy</span>
          <h2 className="font-display text-3xl md:text-5xl font-light italic leading-tight max-w-3xl mx-auto mb-8">
            &quot;We believe true luxury isn&apos;t about excess; it&apos;s about space, silence, and the freedom to simply be.&quot;
          </h2>
          <p className="font-body text-cream/70 max-w-xl mx-auto">
            We host one group at a time to ensure total privacy. When you&apos;re here, the entire estate is yours.
          </p>
        </AnimatedSection>
      </div>

      <Footer />
    </main>
  );
}
