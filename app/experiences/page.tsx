import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Experiences | Magpie Cottage",
  description: "Discover the activities, dining, and serene experiences available at Magpie Cottage in Lansdowne.",
};

const activities = [
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
    image: "/images/gallery/exterior/img_10.jpg"
  },
  {
    id: "lansdowne",
    title: "Lansdowne Town",
    desc: "A short drive takes you to the historic cantonment town of Lansdowne. Visit the Garhwal Rifles War Memorial, St. Mary's Church, and local cafes.",
    tips: ["30 min drive", "Historical sites", "Local cafes"],
    image: "/images/gallery/exterior/img_9.jpg"
  }
];

const diningImages = [
  "/images/gallery/dining-area/img_1.jpg",
  "/images/gallery/dining-area/img_2.jpg",
  "/images/gallery/dining-area/img_3.jpg",
  "/images/gallery/dining-area/img_4.jpg",
  "/images/gallery/dining-area/img_5.jpg",
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

        {/* === ACTIVITIES SECTION === */}
        <div id="activities" className="scroll-mt-24">
          <AnimatedSection className="text-center mb-16" animation="clipReveal">
            <span className="text-xs uppercase tracking-widest text-text-light font-body mb-4 block">Things To Do</span>
            <h2 className="font-display text-4xl md:text-5xl font-light italic text-text-dark">Activities</h2>
          </AnimatedSection>

          <div className="space-y-32">
            {activities.map((exp, i) => (
              <AnimatedSection key={exp.id} id={exp.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <Image src={exp.image} alt={exp.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className={i % 2 !== 0 ? 'md:order-1' : ''}>
                  <h2 className="font-display text-4xl md:text-5xl font-light italic mb-6 text-text-dark">{exp.title}</h2>
                  <p className="font-body text-text-mid leading-relaxed mb-8">{exp.desc}</p>
                  
                  <div className="mb-8">
                    <span className="text-xs uppercase tracking-widest text-text-light font-body mb-3 block">Tips</span>
                    <div className="flex flex-wrap gap-2">
                      {exp.tips.map(tip => (
                        <span key={tip} className="px-4 py-2 md:px-3 md:py-1 bg-sage-light text-sage-dark rounded-full text-xs font-body border border-sage-border/30">
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
        </div>

        {/* === DINING SECTION === */}
        <div id="dining" className="scroll-mt-24">
          <AnimatedSection className="text-center mb-16" animation="clipReveal">
            <span className="text-xs uppercase tracking-widest text-text-light font-body mb-4 block">Culinary Experience</span>
            <h2 className="font-display text-4xl md:text-5xl font-light italic text-text-dark">Dining</h2>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/images/real/dining.jpg" 
                alt="Al fresco dining at Magpie Cottage" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, 50vw" 
              />
            </div>
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-light italic mb-6 text-text-dark">
                Farm to table, forest to soul.
              </h3>
              <div className="font-body text-text-mid space-y-4 leading-relaxed">
                <p>
                  Meals at Magpie Cottage are prepared by local cooks using fresh, locally sourced ingredients. From hearty Garhwali breakfasts to evening barbecues under the stars, every dish tells a story of the land.
                </p>
                <p>
                  Dine al fresco on the open terrace with panoramic views of the valley, or gather around the outdoor dining table nestled among the trees. We accommodate dietary preferences — just let us know in advance.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Home-cooked meals", "Local ingredients", "Al fresco dining", "BBQ & bonfires", "Dietary flexibility"].map(tag => (
                  <span key={tag} className="px-4 py-2 md:px-3 md:py-1 bg-sage-light text-sage-dark rounded-full text-xs font-body border border-sage-border/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Dining Photo Gallery */}
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {diningImages.map((img, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image 
                  src={img} 
                  alt={`Dining at Magpie Cottage ${i + 1}`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  sizes="(max-width: 768px) 50vw, 20vw" 
                />
              </div>
            ))}
          </AnimatedSection>
        </div>

      </div>

      <Footer />
    </main>
  );
}
