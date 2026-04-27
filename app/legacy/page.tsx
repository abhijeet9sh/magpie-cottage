import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";

export const metadata = {
  title: "The Legacy | Magpie Cottage",
  description: "Ode to the Old Monk: The legacy of Ashok Kumar and his immense contribution to wildlife conservation in India.",
};

const ASSETS = {
  hero: "/images/legacy/old monk new.jpg", 
  lineage: "/images/legacy/the Lineage.jpg",
  beginnings: "/images/legacy/the Beginning.-Recovered.jpg",
  institutionalising1: "/images/legacy/Illegal.jpg",
  champion: "/images/legacy/Champion.jpg",
};

export default function LegacyPage() {
  return (
    <main className="bg-[#1a2123] text-cream relative selection:bg-sage selection:text-forest">
      <Navbar />
      
      {/* Custom Hero for moody look */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 z-0 opacity-50">
          <Image
            src={ASSETS.hero}
            alt="Ashok Kumar"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2123]/80 via-[#1a2123]/50 to-[#1a2123]" />
        </div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
          <span className="uppercase tracking-[0.3em] text-sage text-xs font-body mb-6 block">Ode To</span>
          <h1 className="font-display text-6xl md:text-8xl text-cream font-light mb-8">
            The Old Monk
          </h1>
          <div className="font-body text-cream/80 space-y-6 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            <p>
              Ashok Kumar was not your archetypal naturalist. He was not schooled in the natural sciences, nor did he fit the narrow definition of the naturalist as a watcher of birds or stalker of animals. He did not wear over-pocketed safari clothes or sport an unkempt beard, the standard ways in which the jungle man makes himself known.
            </p>
            <p className="text-sage italic text-2xl font-display">
              "He was made to be the best undercover operative against wildlife crime that India has ever seen."
            </p>
            <p>
              For those who were close to him, these panels will help relive some legendary moments. For those who did not know him, we hope this inspires you to take on and carry forward the immense legacy he left behind.
            </p>
            <p className="text-sm tracking-wide uppercase mt-8 text-cream/60">
              WTI&apos;s ode to our Old Monk, our Founder and Chairman Emeritus – the legendary Ashok Kumar.
            </p>
          </div>
        </div>
      </section>

      <div className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto space-y-40">
        
        {/* Section: The Lineage */}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] md:aspect-square rounded-[2rem] overflow-hidden">
            <Image src={ASSETS.lineage} alt="The Lineage" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8 text-sage">The Lineage</h2>
            <div className="font-body text-cream/80 space-y-5 leading-relaxed text-lg">
              <p>
                Ashok Kumar&apos;s mother was a freedom fighter who worked closely with Mahatma Gandhi during the struggle for Indian independence. She was jailed twice during the freedom movement in 1930 and 1942. She was a firebrand youth leader who used to deliver speeches about India and how it should be a free country.
              </p>
              <blockquote className="border-l-2 border-sage pl-6 italic text-cream font-display text-2xl my-8">
                &quot;She fought for India&apos;s freedom and I fight for the forests and wild animals that make India... India&quot;
              </blockquote>
              <p>
                The art of legal attack and defence and a love of courtroom drama came from his father, a Sanskrit scholar and a very principled man who liked to fight cases for the right causes; and the love of the jungle from his brother-in-law, who took him into the forests of the Terai as a young man.
              </p>
              <p>
                This is when he became fond of Old Monk rum, which remained a constant in his life epitomising the raw, dark, insatiable burning for the wilds that he nurtured within himself.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Section: The Beginnings */}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8 text-sage">The Beginnings</h2>
            <div className="font-body text-cream/80 space-y-5 leading-relaxed text-lg">
              <p>
                Ashok Kumar&apos;s job with Tata Steel used to take him to Similipal where he was influenced by the legendary Saroj Raj Choudhary, the field director of the Similipal Tiger Reserve.
              </p>
              <p>
                His first brush with conservation was attempting to get Dalma notified as a wildlife sanctuary. He petitioned Indira Gandhi and later Sanjay Gandhi and finally got the legendary ornithologist Dr Sálim Ali to visit the park. Sálim Ali did what was required at the National Board for Wildlife and the little haven for elephants, in what was then part of Bihar, became a Protected Area.
              </p>
              <p>
                While with Tata Steel at the time, he followed this up by giving office space for the Eastern Region Office of the fledgling WWF in the Tata premises in Calcutta.
              </p>
              <p>
                But it was in Dubai, that he really came to occupy his niche. He saw wildlife skins being trafficked openly and so started a correspondence with the CITES Secretariat. He also interacted with Indian enforcement authorities and cracked down on the trade. And then, having had enough of the corporate world, he took early retirement to come back to India and focus on his first love - Wildlife.
              </p>
              <p className="text-2xl font-display italic text-cream mt-6">
                &quot;I fell in love with everything wild.&quot;
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative aspect-[3/4] rounded-[2rem] overflow-hidden">
            <Image src={ASSETS.beginnings} alt="The Beginnings" fill className="object-cover sepia-[.5] hover:sepia-0 transition-all duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </AnimatedSection>

        {/* Section: Institutionalising the War */}
        <AnimatedSection className="text-center">
          <h2 className="font-display text-4xl md:text-6xl font-light mb-10 text-sage max-w-4xl mx-auto">
            Institutionalising the War Against Wildlife Crime and Illegal Trade
          </h2>
          <div className="font-body text-cream/80 space-y-6 leading-relaxed text-lg max-w-3xl mx-auto mb-16 text-left">
            <p>
              He developed institutions to combat wildlife crime. TRAFFIC was his first foray followed by the Wildlife Protection Society of India, then teamed up with Vivek Menon to co-create Wildlife Trust of India.
            </p>
            <p>
              He steered, as Member Secretary, the Supreme Court&apos;s Subramanian Committee on wildlife crime, which led to the setting up of the Wildlife Crime Control Bureau of India.
            </p>
            <p>
              He represented India at CITES delegations for over 25 years, helped found the inter-governmental Global Tiger Forum, and served on the Steering Committee of Project Tiger and the National Co-ordination Committee for Prevention of Wildlife Crimes. In 1998 he co-founded the Wildlife Trust of India, an organisation he would nurture and mould for the next 18 years with Enforcement and Law as one of its conservation action strategies.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl aspect-[3/4] md:aspect-video rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image src={ASSETS.institutionalising1} alt="Wildlife Crime Work" fill className="object-cover" />
            </div>
          </div>
        </AnimatedSection>

        {/* Section: Champion for every living thing */}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
            <Image src={ASSETS.champion} alt="Champion for every living thing" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8 text-sage leading-tight">
              Champion for every living thing
            </h2>
            <div className="font-body text-cream/80 space-y-5 leading-relaxed text-lg">
              <p>
                Recalled Debbie Banks, tigers and wildlife crime campaign leader for the British-based Environmental Investigation Agency, &quot;Ashok was a champion for tigers, elephants, rhinos, Tibetan antelopes and every living thing.&quot;
              </p>
              <p>
                &quot;My abiding memory of him is a critical debate at the 14th Conference of the Parties to Convention on International Trade in Endangered Species in The Hague in 2007.&quot;
              </p>
              <p>
                &quot;On stage were the rabid proponents of tiger farming and legalization of trade in farmed tiger parts. There was a heavy contingency of government and non-government delegates from tiger range states in the room. Loud booming voices from India and Nepal in particular were bellowing back at the speakers, arguing why tiger farming is a conservation threat, not a conservation solution.&quot;
              </p>
              <p>
                &quot;It was Ashok, however, who strode cool as a cucumber to the front of the room and lambasted those on stage. Their arguments fell to pieces in front of everyone.&quot;
              </p>
            </div>
          </div>
        </AnimatedSection>

      </div>

      <Footer />
    </main>
  );
}
