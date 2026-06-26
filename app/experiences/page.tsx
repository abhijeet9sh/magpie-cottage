import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GalleryGrid, SimpleGallery } from "@/components/ui/GalleryGrid";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    images: [
      "/images/experiences/safari.jpg",
      "/images/experiences/halduparao.jpg"
    ]
  },
  {
    id: "riverside",
    title: "Riverside Life",
    desc: "Spend your afternoons by the Palain river. Swim in the natural pools, set up a picnic on the banks, or simply read a book to the sound of flowing water.",
    tips: ["Safe for swimming", "Picnic baskets available", "Perfect at golden hour"],
    images: [
      "/images/experiences/river.jpg",
      "/images/experiences/riverside/DJI_0552.jpg",
      "/images/experiences/riverside/DJI_0557.jpg"
    ]
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
    images: [
      "/images/experiences/birds.jpg",
      "/images/experiences/birdwatch/Picture2.jpg",
      "/images/experiences/birdwatch/Picture3.jpg",
      "/images/experiences/birdwatch/Picture4.jpg",
      "/images/experiences/birdwatch/Picture5.jpg",
      "/images/experiences/birdwatch/Picture6.jpg",
      "/images/experiences/birdwatch/Picture7.jpg",
      "/images/experiences/birdwatch/Picture8.jpg",
      "/images/experiences/birdwatch/Picture9.jpg",
      "/images/experiences/birdwatch/Picture10.jpg",
      "/images/experiences/birdwatch/Picture11.jpg",
      "/images/experiences/birdwatch/Picture12.jpg",
      "/images/experiences/birdwatch/Picture13.jpg",
      "/images/experiences/birdwatch/Picture14.jpg"
    ]
  },
  {
    id: "nature-walks",
    title: "Nature Walks",
    desc: "Take guided or independent walks through the dense pine and oak forests surrounding the property. Discover hidden waterfalls and panoramic valley views.",
    tips: ["Wear sturdy shoes", "Carry water", "Follow marked trails"],
    images: ["/images/experiences/nature-walk.jpg"]
  },
  {
    id: "stargazing",
    title: "Stargazing & Bonfires",
    desc: (
      <div className="space-y-4">
        <p>End your day under a breathtaking canopy of stars, far away from city lights. As the crisp mountain air rolls in at dusk, we set up a private, crackling bonfire for you and your loved ones.</p>
        <p>Gather around to share stories, roast snacks, or simply listen to the gentle flow of the Palain river in the distance. The profound silence of the surrounding wilderness combined with the warmth of the fire creates an unforgettable, magical evening perfect for acoustic music and quiet reflection.</p>
      </div>
    ),
    tips: ["Clear skies in winter", "Wood provided", "Acoustic music welcome"],
    images: [
      "/images/experiences/bonfire.jpg",
      "/images/experiences/bonfire/IMG_2851.jpg",
      "/images/experiences/bonfire/IMG_2855.jpg",
      "/images/experiences/bonfire/IMG_4605.jpg",
      "/images/experiences/bonfire/IMG_4606.jpg",
      "/images/experiences/bonfire/PHOTO-2026-01-13-18-29-46.jpg"
    ]
  },
  {
    id: "magpie-night",
    title: "Magpie At Night",
    desc: (
      <div className="space-y-4">
        <p>Experience the tranquil beauty of Magpie Cottage as the sun sets and the wilderness transitions into the calm of the night. The property transforms under the moonlight, offering a serene atmosphere perfect for winding down.</p>
        <p>Enjoy the peaceful ambiance of our beautifully lit outdoor spaces, listen to the nocturnal sounds of the forest, and embrace the secluded luxury of living close to nature after dark.</p>
      </div>
    ),
    tips: ["Warm clothing", "Photography", "Quiet reflection"],
    images: [
      "/images/experiences/magpie-night/IMG_5189.jpg",
      "/images/experiences/magpie-night/IMG_5194.jpg",
      "/images/experiences/magpie-night/IMG_5200.jpg",
      "/images/experiences/magpie-night/IMG_5202.jpg",
      "/images/experiences/magpie-night/IMG_5602.jpg",
      "/images/experiences/magpie-night/IMG_5959.jpg"
    ]
  },
  {
    id: "lansdowne",
    title: "Lansdowne Town",
    desc: (
      <div className="space-y-6">
        <p>This secluded wilderness haven is approximately 48 km. away from Lansdowne and 38 km. from Kotdwar. Lansdowne is a peaceful, untouched hillstation in Uttarakhand. Engulfed in dense forests and touring pine trees, this quaint hillstation is cosy, picturesque and quiet, all at the same time.</p>
        
        <div>
          <h4 className="font-display text-2xl font-light italic text-text-dark mb-3">Getting Around:</h4>
          <ul className="space-y-2 text-text-mid">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-forest/50"></span> Distance from Jolly Grant Airport - 142 km.</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-forest/50"></span> Distance from Kotdwar Railway Station - 39 km.</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-forest/50"></span> Distance from Motor Nagar Bus Stand - 39 km.</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-forest/50"></span> Distance from Dhauntiyal Market - 15 km.</li>
          </ul>
        </div>
      </div>
    ),
    tips: ["48 km away", "Historical sites", "Local cafes"],
    images: ["/images/gallery/exterior/img_9.jpg"]
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
            <div className="font-body text-text-mid mt-8 space-y-6">
              <p>While you&apos;re enjoying your peaceful stay at Magpie Cottage, here are a few nearby places and activities we recommend to make your stay even more memorable.</p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                {activities.map(exp => (
                  <a 
                    key={exp.id} 
                    href={`#${exp.id}`}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-sage-light/50 border border-sage-border/50 text-sage-dark text-sm hover:bg-sage-light transition-colors focus-visible:ring-2 focus-visible:ring-forest outline-none font-medium"
                  >
                    {exp.title}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="space-y-20 md:space-y-32">
            {activities.map((exp, i) => {
              if (exp.id === "birdwatching") {
                return (
                  <div key={exp.id} id={exp.id} className="scroll-mt-24 space-y-8">
                    <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
                      <div className={`flex flex-col gap-4 order-2 ${i % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                        <GalleryGrid title={exp.title} images={exp.images.slice(0, 2)} />
                      </div>

                      <div className={`sticky top-32 order-1 ${i % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                        <h2 className="font-display text-4xl md:text-5xl font-light italic mb-6 text-text-dark">{exp.title}</h2>
                        <div className="font-body text-text-mid leading-relaxed mb-8">{exp.desc}</div>
                        
                        <div className="mb-10 bg-sage-light/20 border border-sage-border/30 rounded-2xl p-6">
                          <span className="text-xs tracking-widest text-sage-dark font-body mb-4 block uppercase font-semibold">Good to Know</span>
                          <div className="flex flex-wrap gap-2">
                            {exp.tips.map(tip => (
                              <span key={tip} className="px-4 py-2 bg-white text-text-dark rounded-full text-xs font-body shadow-sm border border-sage-border/10">
                                {tip}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Link 
                          href="/contact" 
                          className="inline-flex items-center gap-2 group text-forest font-medium text-lg hover:text-sage-dark transition-colors focus-visible:ring-2 focus-visible:ring-forest rounded-lg p-1 outline-none"
                        >
                          Enquire about this 
                          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                        </Link>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection>
                      <SimpleGallery 
                        title={exp.title} 
                        images={exp.images.slice(2)} 
                        containerClassName="columns-2 sm:columns-3 md:columns-4 lg:columns-6 gap-3"
                        masonry={true}
                      />
                    </AnimatedSection>
                  </div>
                );
              }

              return (
                <AnimatedSection key={exp.id} id={exp.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
                  
                  <div className={`flex flex-col gap-4 order-2 ${i % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Grid layout for images with Lightbox support */}
                    <GalleryGrid title={exp.title} images={exp.images} />
                  </div>

                  <div className={`sticky top-32 order-1 ${i % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <h2 className="font-display text-4xl md:text-5xl font-light italic mb-6 text-text-dark">{exp.title}</h2>
                    <div className="font-body text-text-mid leading-relaxed mb-8">{exp.desc}</div>
                    
                    <div className="mb-10 bg-sage-light/20 border border-sage-border/30 rounded-2xl p-6">
                      <span className="text-xs tracking-widest text-sage-dark font-body mb-4 block uppercase font-semibold">Good to Know</span>
                      <div className="flex flex-wrap gap-2">
                        {exp.tips.map(tip => (
                          <span key={tip} className="px-4 py-2 bg-white text-text-dark rounded-full text-xs font-body shadow-sm border border-sage-border/10">
                            {tip}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link 
                      href="/contact" 
                      className="inline-flex items-center gap-2 group text-forest font-medium text-lg hover:text-sage-dark transition-colors focus-visible:ring-2 focus-visible:ring-forest rounded-lg p-1 outline-none"
                    >
                      Enquire about this 
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>

      {/* === DINING SECTION === */}
      <div id="dining" className="scroll-mt-24 bg-sage-light/20 py-24 md:py-32">
        <div className="px-6 md:px-12 max-w-7xl mx-auto space-y-16">
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

          {/* Dining Photo Gallery with Lightbox support */}
          <AnimatedSection>
            <SimpleGallery title="Dining at Magpie Cottage" images={diningImages} />
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </main>
  );
}
