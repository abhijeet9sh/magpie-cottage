import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";

export const metadata = {
  title: "The Legacy | Magpie Cottage",
  description: "The legacy of Ashok Kumar and his immense contribution to wildlife conservation in India.",
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
      
      {/* Custom Hero */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 z-0 opacity-50">
          <div className="absolute inset-0 bg-black">
            <Image
              src={ASSETS.hero}
              alt="Ashok Kumar"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2123]/80 via-[#1a2123]/50 to-[#1a2123]" />
        </div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
          <span className="uppercase tracking-[0.3em] text-sage text-xs font-body mb-6 block">The Legacy of Late Mr Ashok Kumar</span>
          <h1 className="font-display text-5xl md:text-7xl text-cream font-light mb-8">
            Champion for Every Living Thing
          </h1>
          <div className="font-body text-cream/80 space-y-6 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            <p>
              Ashok Kumar, founder of Magpie Cottage, was a visionary conservationist and one of India&apos;s foremost warriors against wildlife crime. Remembered by global conservation leaders as a champion for &ldquo;tigers, elephants, rhinos, Tibetan antelopes—and every living thing,&rdquo; he was known for his fearless advocacy and ability to challenge powerful interests.
            </p>
            <p>
              This was most evident at the 2007 Conference of the Parties to the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES) in The Hague, where he powerfully opposed the legalization of trade in farmed tiger parts.
            </p>
          </div>
        </div>
      </section>

      <div className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto space-y-40">
        
        {/* Section: The Beginnings */}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8 text-sage">The Beginnings</h2>
            <div className="font-body text-cream/80 space-y-5 leading-relaxed text-lg">
              <p>
                His journey into conservation began during his tenure at Tata Steel, with frequent visits to Simlipal in Odisha, where he was deeply influenced by the legendary conservationist Saroj Raj Choudhary.
              </p>
              <p>
                He went on to play a pivotal role in securing protected status for Dalma as a wildlife sanctuary, working with national leaders and the renowned ornithologist Dr. Salim Ali.
              </p>
              <p>
                He also supported early conservation efforts by facilitating office space for the eastern regional office of the World Wide Fund for Nature (WWF).
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative w-full rounded-[2rem] overflow-hidden">
            <Image src={ASSETS.beginnings} alt="The Beginnings" width={800} height={1600} className="w-full h-auto sepia-[.5] hover:sepia-0 transition-all duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </AnimatedSection>

        {/* Section: Institutionalising the War */}
        <AnimatedSection className="text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-10 text-sage max-w-4xl mx-auto leading-tight">
            Institutionalizing the War Against Wildlife Crime & Illegal Trade
          </h2>
          <div className="font-body text-cream/80 space-y-6 leading-relaxed text-lg max-w-3xl mx-auto mb-16 text-left">
            <p>
              While based in Dubai, Ashok Kumar witnessed the open trafficking of wildlife skins. This experience led him to engage with the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES) Secretariat and collaborate with Indian enforcement authorities to combat illegal wildlife trade. Ultimately, he chose to leave the corporate world and dedicate himself entirely to conservation, driven by his belief: <span className="italic text-sage">&ldquo;I fell in love with everything wild.&rdquo;</span>
            </p>
            <p>
              A true institution builder, Ashok Kumar&apos;s contributions to conservation were both foundational and far-reaching. His early work included involvement with TRAFFIC (Trade Records Analysis of Flora and Fauna in Commerce), the wildlife trade monitoring network established by the World Wide Fund for Nature (WWF) and the International Union for Conservation of Nature (IUCN). He went on to found the Wildlife Protection Society of India, strengthening India&apos;s fight against illegal wildlife trade.
            </p>
            <p>
              As Member Secretary of the Supreme Court&apos;s Subramanian Committee on wildlife crime, he played a key role in the creation of the Wildlife Crime Control Bureau of India, the country&apos;s primary agency for tackling wildlife offences. Over a span of more than 25 years, he represented India at CITES, contributing significantly to global conservation policy.
            </p>
            <p>
              He was also instrumental in founding the Global Tiger Forum, an intergovernmental alliance for tiger conservation, and served on the Steering Committee of Project Tiger as well as the National Coordination Committee for Prevention of Wildlife Crime.
            </p>
            <p>
              In 1998, he co-founded the Wildlife Trust of India, which he nurtured for nearly two decades, embedding enforcement and legal action as central strategies in conservation. He later served as its Founder and Chairman Emeritus.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image src={ASSETS.institutionalising1} alt="Wildlife Crime Work" width={1200} height={1600} className="w-full h-auto" />
            </div>
          </div>
        </AnimatedSection>

        {/* Section: The Lineage */}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative w-full rounded-[2rem] overflow-hidden">
            <Image src={ASSETS.lineage} alt="The Lineage" width={800} height={1600} className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8 text-sage">The Lineage</h2>
            <div className="font-body text-cream/80 space-y-5 leading-relaxed text-lg">
              <p>
                Ashok Kumar&apos;s legacy was shaped by a lineage of courage and conviction. His mother, Urmila Shastri, was a freedom fighter who worked closely with Mahatma Gandhi and was imprisoned during India&apos;s independence movement.
              </p>
              <blockquote className="border-l-2 border-sage pl-6 italic text-cream font-display text-2xl my-8 leading-snug">
                &ldquo;She fought for India&apos;s freedom, and I fight for the forests and wild animals that make India&hellip; India.&rdquo;
              </blockquote>
              <p>
                Unconventional yet formidable, Ashok Kumar was not a traditional naturalist but a strategic and fearless force—widely regarded as one of India&apos;s most effective fighters against wildlife crime.
              </p>
              <p>
                Magpie Cottage stands today as a tribute to his extraordinary life—an enduring symbol of his passion, courage, and unwavering commitment to protecting the wild.
              </p>
            </div>
          </div>
        </AnimatedSection>

      </div>

      <Footer />
    </main>
  );
}
