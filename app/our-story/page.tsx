import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { Leaf, ShieldCheck, Heart, TreePine } from "lucide-react";

export const metadata = {
  title: "Our Story | Magpie Cottage",
  description: "Learn about the origins of Magpie Cottage, our philosophy, and the people behind the retreat.",
};

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "We tread lightly on this land. Built with local stone and wood, powered with solar lighting, and maintained with minimal ecological footprint — we believe luxury and responsibility can coexist."
  },
  {
    icon: ShieldCheck,
    title: "Privacy",
    desc: "We host one group at a time. When you're here, the entire estate — three bedrooms, the garden, the river frontage — is exclusively yours. No strangers, no shared spaces."
  },
  {
    icon: Heart,
    title: "Community",
    desc: "Every meal is prepared by local cooks using locally sourced ingredients. We work with village artisans and contribute to the surrounding community's livelihood."
  },
  {
    icon: TreePine,
    title: "Nature First",
    desc: "Wildlife corridors through the property remain undisturbed. Our no-loud-music policy after dark respects the animals that share this land with us — leopards, elephants, and over 250 bird species."
  }
];

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
            <Image src="/images/gallery/additional-photos/img_3.jpg" alt="Malini — Host of Magpie Cottage" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-text-light font-body mb-4 block">Hosted by Malini</span>
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

        {/* 5. Our Values */}
        <AnimatedSection id="values" className="scroll-mt-24">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-text-light font-body mb-4 block">What We Stand For</span>
            <h2 className="font-display text-4xl md:text-5xl font-light italic text-text-dark">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div 
                key={value.title} 
                className="bg-cream rounded-2xl p-8 md:p-10 border border-stone-200/50 hover:shadow-lg transition-shadow duration-500 group"
              >
                <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <value.icon className="text-forest" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-light italic text-text-dark mb-4">{value.title}</h3>
                <p className="font-body text-text-mid leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </main>
  );
}
