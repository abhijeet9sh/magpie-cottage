import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Users, PawPrint, Waves, TreePine, Wifi, Coffee, Flame, Bath, Monitor, Clock, LogOut, UserCheck, Camera, Cigarette, AlertTriangle, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "The Cottage | Magpie Cottage",
  description: "Explore the three bedrooms, amenities, and spaces that make Magpie Cottage your perfect jungle retreat.",
};

const rooms = [
  {
    name: "The Master Bedroom",
    desc: "A spacious retreat featuring panoramic windows that overlook the river and forest. Wake up to the sound of flowing water without leaving your bed.",
    features: ["1 Double bed", "1 Floor mattress", "En-suite bathroom", "River view"],
    image: "/images/gallery/bedroom-1/img_1.jpg"
  },
  {
    name: "Bedroom 2",
    desc: "Nestled towards the back of the property, this room offers deep silence and a feeling of being immersed in the jungle canopy.",
    features: ["1 Double bed", "En-suite bathroom", "Forest view", "Reading nook"],
    image: "/images/gallery/bedroom-2/img_1.jpg"
  },
  {
    name: "Bedroom 3",
    desc: "A cosy room perfect for extra guests, featuring direct access to the front lawn and stunning views of the valley.",
    features: ["1 Double bed", "En-suite bathroom", "Lawn access", "River view"],
    image: "/images/gallery/bedroom-3/img_1.jpg"
  }
];

export default function TheCottage() {
  return (
    <main className="bg-background relative">
      <Navbar />
      <PageHero 
        title="The Cottage" 
        imageSrc="/images/real/facade.jpg"
      />

      {/* Overview Stat Strip */}
      <section className="bg-forest text-cream py-10 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 text-xs md:text-sm font-body tracking-[0.2em] uppercase">
          <div className="flex items-center gap-3 group hover:text-sage transition-colors duration-300"><BedDouble size={20} strokeWidth={1} className="text-sage group-hover:scale-110 transition-transform duration-300" /> 3 Bedrooms</div>
          <div className="flex items-center gap-3 group hover:text-sage transition-colors duration-300"><Users size={20} strokeWidth={1} className="text-sage group-hover:scale-110 transition-transform duration-300" /> Sleeps 4–8</div>
          <div className="flex items-center gap-3 group hover:text-sage transition-colors duration-300"><PawPrint size={20} strokeWidth={1} className="text-sage group-hover:scale-110 transition-transform duration-300" /> Pets Welcome</div>
          <div className="flex items-center gap-3 group hover:text-sage transition-colors duration-300"><Waves size={20} strokeWidth={1} className="text-sage group-hover:scale-110 transition-transform duration-300" /> River View</div>
          <div className="flex items-center gap-3 group hover:text-sage transition-colors duration-300"><TreePine size={20} strokeWidth={1} className="text-sage group-hover:scale-110 transition-transform duration-300" /> Tiger Reserve Adjacent</div>
        </div>
      </section>

      <div className="pt-12 pb-24 md:pt-16 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
        {/* Bedrooms */}
        <div id="rooms" className="scroll-mt-24 space-y-32">
          {rooms.map((room, i) => (
            <AnimatedSection key={i} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={`relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg group ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                <Image src={room.image} alt={room.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className={i % 2 !== 0 ? 'md:order-1' : ''}>
                <h2 className="font-display text-4xl md:text-5xl font-light italic mb-6 text-text-dark">{room.name}</h2>
                <p className="font-body text-text-mid leading-relaxed mb-8">{room.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {room.features.map(f => (
                    <span key={f} className="px-5 py-2.5 bg-stone-50 rounded-full text-xs uppercase tracking-widest font-body text-text-mid border border-stone-200 hover:border-sage hover:text-sage transition-colors cursor-default">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Amenities */}
        <AnimatedSection id="amenities" className="scroll-mt-24 bg-cream rounded-[3rem] p-12 md:p-24 shadow-xl border border-stone-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sage/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="text-center mb-16 relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-light italic text-text-dark mb-4">Amenities</h2>
            <p className="font-body text-text-mid max-w-lg mx-auto">Everything you need for a comfortable stay in the wilderness.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 relative z-10">
            <div className="flex flex-col items-center text-center gap-4 group"><Wifi className="text-forest transition-transform duration-500 group-hover:-translate-y-2 group-hover:text-sage" size={40} strokeWidth={1} /><span className="font-body text-sm tracking-wider uppercase text-text-dark">High-Speed WiFi</span></div>
            <div className="flex flex-col items-center text-center gap-4 group"><Coffee className="text-forest transition-transform duration-500 group-hover:-translate-y-2 group-hover:text-sage" size={40} strokeWidth={1} /><span className="font-body text-sm tracking-wider uppercase text-text-dark">Equipped Kitchen</span></div>
            <div className="flex flex-col items-center text-center gap-4 group"><Flame className="text-forest transition-transform duration-500 group-hover:-translate-y-2 group-hover:text-sage" size={40} strokeWidth={1} /><span className="font-body text-sm tracking-wider uppercase text-text-dark">Firepit & Patio</span></div>
            <div className="flex flex-col items-center text-center gap-4 group"><Monitor className="text-forest transition-transform duration-500 group-hover:-translate-y-2 group-hover:text-sage" size={40} strokeWidth={1} /><span className="font-body text-sm tracking-wider uppercase text-text-dark">Dedicated Workspace</span></div>
            <div className="flex flex-col items-center text-center gap-4 group"><PawPrint className="text-forest transition-transform duration-500 group-hover:-translate-y-2 group-hover:text-sage" size={40} strokeWidth={1} /><span className="font-body text-sm tracking-wider uppercase text-text-dark">Pet Friendly</span></div>
            <div className="flex flex-col items-center text-center gap-4 group"><Bath className="text-forest transition-transform duration-500 group-hover:-translate-y-2 group-hover:text-sage" size={40} strokeWidth={1} /><span className="font-body text-sm tracking-wider uppercase text-text-dark">Bathtub</span></div>
          </div>
        </AnimatedSection>

        {/* Pricing, House Rules, Cancellation, Safety */}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Pricing */}
          <div className="bg-forest text-cream rounded-3xl p-10 flex flex-col justify-center">
            <h3 className="font-display text-3xl mb-6">Rates</h3>
            <div className="space-y-4 font-body mb-8">
              <div className="flex justify-between border-b border-cream/10 pb-4">
                <span>Standard Nightly Rate</span>
                <span className="font-medium text-sage">₹12,000</span>
              </div>
              <div className="flex justify-between border-b border-cream/10 pb-4">
                <span>Weekend Rate (Fri-Sat)</span>
                <span className="font-medium text-sage">₹15,000</span>
              </div>
            </div>
            <p className="text-sm text-cream/60 mb-8 italic">Rates cover the entire 3-bedroom villa for up to 6 guests. Enquire for extended stays or packages.</p>
            <Link href="/book" className="w-full text-center px-6 py-4 bg-sage text-forest rounded-xl font-medium hover:bg-sage-dark hover:text-white transition-colors">
              Check Availability
            </Link>
          </div>

          {/* House Rules */}
          <div className="bg-white border border-stone-200 rounded-3xl p-10 flex flex-col justify-center">
            <h3 className="font-display text-3xl mb-6 text-text-dark">House Rules</h3>
            <div className="space-y-5 font-body text-text-mid">
              {/* Checking in and out */}
              <div>
                <span className="text-xs uppercase tracking-widest text-text-light block mb-3">Checking in and out</span>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Clock size={18} className="text-sage shrink-0" />
                    <span>Check-in: 12:00 – 17:00</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <LogOut size={18} className="text-sage shrink-0" />
                    <span>Checkout before 10:00</span>
                  </li>
                </ul>
              </div>
              {/* During your stay */}
              <div className="border-t border-stone-100 pt-5">
                <span className="text-xs uppercase tracking-widest text-text-light block mb-3">During your stay</span>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <UserCheck size={18} className="text-sage shrink-0" />
                    <span>8 guests maximum</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <PawPrint size={18} className="text-sage shrink-0" />
                    <span>Pets allowed</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Camera size={18} className="text-sage shrink-0" />
                    <span>Commercial photography allowed</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Cigarette size={18} className="text-sage shrink-0" />
                    <span>Smoking is allowed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Cancellation Policy + Safety & Property */}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Cancellation Policy */}
          <div className="bg-stone-50 border border-stone-200 rounded-3xl p-10 flex flex-col justify-center">
            <h3 className="font-display text-3xl mb-4 text-text-dark">Cancellation Policy</h3>
            <p className="font-body text-text-mid leading-relaxed mb-6">
              Add your trip dates to get the cancellation details for this stay.
            </p>
            <Link 
              href="/book" 
              className="inline-flex items-center gap-2 text-forest font-medium border-b border-forest pb-1 hover:text-sage hover:border-sage transition-colors w-fit"
            >
              Select dates &rarr;
            </Link>
          </div>

          {/* Safety & Property */}
          <div className="bg-white border border-stone-200 rounded-3xl p-10 flex flex-col justify-center">
            <h3 className="font-display text-3xl mb-4 text-text-dark">Safety & Property</h3>
            <p className="font-body text-text-mid text-sm mb-6">
              Avoid surprises by looking over these important details about your host&apos;s property.
            </p>
            <div className="space-y-5 font-body text-text-mid">
              <span className="text-xs uppercase tracking-widest text-text-light block mb-1">Safety devices</span>
              
              <div className="flex items-start gap-3 bg-amber-50 border border-amber-200/50 rounded-xl p-4">
                <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-text-dark text-sm">Carbon monoxide alarm not reported</p>
                  <p className="text-xs text-text-light mt-1">The Host hasn&apos;t reported a carbon monoxide alarm on the property. We suggest bringing a portable detector for your trip.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-amber-50 border border-amber-200/50 rounded-xl p-4">
                <ShieldAlert size={20} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-text-dark text-sm">Smoke alarm not reported</p>
                  <p className="text-xs text-text-light mt-1">The Host hasn&apos;t reported a smoke alarm on the property. We suggest bringing a portable detector for your trip.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </main>
  );
}
