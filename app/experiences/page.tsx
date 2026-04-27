import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Experiences | Magpie Cottage",
  description: "Discover the activities and serene experiences available at Magpie Cottage in Lansdowne.",
};

const experiences = [
  {
    id: "safari",
    title: "Jungle Safari",
    desc: "Venture into the adjacent Kalagarh Tiger Reserve. Keep an eye out for elephants, leopards, and elusive tigers. Safaris can be arranged upon request.",
    tips: ["Best from Nov to May", "Book 2 days in advance", "Bring binoculars"],
    image: "/images/gallery/exterior/img_7.jpg"
  },
  {
    id: "riverside",
    title: "Riverside Life",
    desc: "Spend your afternoons by the Palain river. Swim in the natural pools, set up a picnic on the banks, or simply read a book to the sound of flowing water.",
    tips: ["Safe for swimming", "Picnic baskets available", "Perfect at golden hour"],
    image: "/images/gallery/exterior/img_6.jpg"
  },
  {
    id: "birdwatching",
    title: "Birdwatching",
    desc: "Lansdowne is a haven for over 250 species of birds. Spot hornbills, kingfishers, and eagles right from the cottage balcony.",
    tips: ["Early morning is best", "Local guide available", "Over 250 species"],
    image: "/images/gallery/exterior/img_3.jpg"
  },
  {
    id: "nature-walks",
    title: "Nature Walks",
    desc: "Take guided or independent walks through the dense pine and oak forests surrounding the property. Discover hidden waterfalls and panoramic valley views.",
    tips: ["Wear sturdy shoes", "Carry water", "Follow marked trails"],
    image: "/images/gallery/exterior/img_8.jpg"
  },
  {
    id: "stargazing",
    title: "Stargazing & Bonfires",
    desc: "End your day under a canopy of stars. We set up a private bonfire for you to enjoy the crisp mountain air with your loved ones.",
    tips: ["Clear skies in winter", "Wood provided", "Acoustic music welcome"],
    image: "/images/gallery/additional-photos/img_1.jpg"
  },
  {
    id: "lansdowne",
    title: "Lansdowne Town",
    desc: "A short drive takes you to the historic cantonment town of Lansdowne. Visit the Garhwal Rifles War Memorial, St. Mary's Church, and local cafes.",
    tips: ["30 min drive", "Historical sites", "Local cafes"],
    image: "/images/gallery/exterior/img_9.jpg"
  }
];

export default function Experiences() {
  return (
    <main className="bg-background relative">
      <Navbar />
      <PageHero 
        title="Experiences" 
        imageSrc="/images/real/outdoor.jpg"
      />

      <div className="pt-12 pb-24 md:pt-16 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
        {experiences.map((exp, i) => (
          <AnimatedSection key={exp.id} id={exp.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
              <Image src={exp.image} alt={exp.title} fill className="object-cover" />
            </div>
            <div className={i % 2 !== 0 ? 'md:order-1' : ''}>
              <h2 className="font-display text-4xl md:text-5xl font-light italic mb-6 text-text-dark">{exp.title}</h2>
              <p className="font-body text-text-mid leading-relaxed mb-8">{exp.desc}</p>
              
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-text-light font-body mb-3 block">Tips</span>
                <div className="flex flex-wrap gap-2">
                  {exp.tips.map(tip => (
                    <span key={tip} className="px-3 py-1 bg-sage-light text-sage-dark rounded-full text-xs font-body border border-sage-border/30">
                      {tip}
                    </span>
                  ))}
                </div>
              </div>

              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 text-forest font-medium border-b border-forest pb-1 hover:text-sage-border hover:border-sage-border transition-colors"
              >
                Enquire about this &rarr;
              </Link>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <Footer />
    </main>
  );
}
