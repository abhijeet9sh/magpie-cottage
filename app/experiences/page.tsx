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
    desc: (
      <div className="space-y-4">
        <p>Venture into the adjacent Kalagarh Tiger Reserve. Keep an eye out for elephants, leopards, and elusive tigers. Safaris can be arranged upon request.</p>
        <p>Magpie Cottage is located in the Simalsaira Village, approximately 7 km. from the Vatanvasa Gate, an entry point of Halduparao (Corbett Tiger Reserve).</p>
        <h3 className="font-display text-2xl mt-6 mb-2 text-text-dark">The Halduparao Forest Rest House (Corbett Tiger Reserve)</h3>
        <p>Built in 1890, the historic Halduparao Forest Rest House is located 50 km from Kotdwara and is accessed via the Vatanvasa Gate, followed by a scenic 10 km drive through the forest. Perched on the right bank of the Palain (Sonanadi/Golden) River at an elevation of 385 metres, it offers sweeping views of the river and surrounding wilderness. While the original rest house is over a century old, modern accommodation has been added for visitors. A watchtower within the premises overlooks the river, providing excellent opportunities to observe wildlife—including deer, elephants, and other animals—as they gather to drink, graze, and move along the riverbank.</p>
      </div>
    ),
    tips: ["Best from Nov to May", "Book 2 days in advance", "Bring binoculars"],
    image: "/images/gallery/exterior/img_7.jpg",
    extraImage: "/images/real/halduparao.jpg" // Placeholder for the halduparao photo
  },
  {
    id: "riverside",
    title: "Riverside Life",
    desc: "Spend your afternoons by the Palain river. Swim in the natural pools, set up a picnic on the banks, or simply read a book to the sound of flowing water.",
    tips: ["Safe for swimming", "Picnic baskets available", "Perfect at golden hour"],
    image: "/images/real/river.jpg" // Placeholder for relevant river pics
  },
  {
    id: "birdwatching",
    title: "Birdwatching",
    desc: (
      <div className="space-y-4">
        <p>Magpie Cottage is a birder's paradise, home to over 250 species ranging from Himalayan endemics to migratory waterfowl. Upon request an experienced expert can accompany guests on a Birdwatching trail.</p>
        <p>The diverse elevation gradients make it perfect for spotting vibrant songbirds, raptors, and pheasants in their natural habitats.</p>
        <p>Top species to look out for by habitat and season are as below.</p>
        
        <h4 className="font-bold text-sm text-forest pt-2">Common & Year-Round Residents</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Pheasants & Partridges:</strong> Kalij Pheasant, Cheer Pheasant, and Chukar Partridge.</li>
          <li><strong>Flycatchers & Robins:</strong> Blue Whistling-Thrush, Verditer Flycatcher, and Gray-headed Canary-Flycatcher.</li>
          <li><strong>Others:</strong> Gray Treepie, Large-billed Crow, and the White-throated Laughingthrush.</li>
        </ul>

        <h4 className="font-bold text-sm text-forest pt-2">Summer Visitors (Mar - Aug)</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Vibrant Birds:</strong> Blue-capped Rock-Thrush, Rosy Minivet, and Indian Paradise-Flycatcher.</li>
          <li><strong>Raptors & Birds of Prey:</strong></li>
          <li><strong>Eagles & Kites:</strong> Black Eagle, Steppe Eagle, and Crested Serpent-Eagle.</li>
          <li><strong>Vultures:</strong> Himalayan Griffon.</li>
        </ul>

        <h4 className="font-bold text-sm text-forest pt-2">Migratory Waterfowl (Wintering, Near River)</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Ducks & Mergansers:</strong> Brahminy Shelduck, Mallard, and Goosander.</li>
        </ul>
      </div>
    ),
    tips: ["Early morning is best", "Local guide available", "Over 250 species"],
    image: "/images/real/birds.jpg" // Placeholder for bird pics
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
    image: "/images/real/bonfire.jpg" // Placeholder for stargazing/bonfire relevant
  },
  {
    id: "lansdowne",
    title: "Lansdowne Town",
    desc: "This secluded wilderness haven is approximately 48 km. away from Lansdowne and 38 km. from Kotdwar. Lansdowne is a peaceful, untouched hillstation in Uttarakhand. Engulfed in dense forests and touring pine trees, this quaint hillstation is cosy, picturesque and quiet, all at the same time.",
    tips: ["48 km away", "Historical sites", "Local cafes"],
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
          <AnimatedSection className="text-left mb-16" animation="clipReveal">
            <span className="text-xs tracking-widest text-text-light font-body mb-4 block">Things To Do</span>
            <h2 className="font-display text-4xl md:text-5xl font-light italic text-text-dark">Activities</h2>
            <div className="font-body text-text-mid mt-8 space-y-2">
              <p>While you&apos;re enjoying your peaceful stay at Magpie Cottage, here are a few nearby places and activities we recommend to make your stay even more memorable.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Visit Halduparao (Corbett Tiger Reserve) for wildlife spotting</li>
                <li>Enjoy a day in the town of Lansdowne</li>
                <li>Embark on nature trails and spot various birds</li>
                <li>Catch fish in the Palain river, swim, paddle or picnic in/ near the river</li>
                <li>Stargaze and roast some food over a bonfire</li>
              </ul>
            </div>
          </AnimatedSection>

          <div className="space-y-32">
            {activities.map((exp, i) => (
              <AnimatedSection key={exp.id} id={exp.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${i % 2 !== 0 ? 'md:order-2' : ''} flex flex-col gap-4`}>
                  <div className="relative w-full h-full">
                    <Image src={exp.image} alt={exp.title} fill className="object-cover rounded-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  {exp.extraImage && (
                    <div className="relative w-full h-64 mt-4">
                      <Image src={exp.extraImage} alt={exp.title + " extra"} fill className="object-cover rounded-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                  )}
                </div>
                <div className={i % 2 !== 0 ? 'md:order-1' : ''}>
                  <h2 className="font-display text-4xl md:text-5xl font-light italic mb-6 text-text-dark">{exp.title}</h2>
                  <div className="font-body text-text-mid leading-relaxed mb-8">{exp.desc}</div>
                  
                  <div className="mb-8">
                    <span className="text-xs tracking-widest text-text-light font-body mb-3 block">Tips</span>
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
          <AnimatedSection className="text-left mb-16" animation="clipReveal">
            <span className="text-xs tracking-widest text-text-light font-body mb-4 block">Culinary Experience</span>
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
