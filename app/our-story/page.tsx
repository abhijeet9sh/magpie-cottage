"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Leaf, ShieldCheck, Heart, Bird } from "lucide-react";

// ── Reusable photo components with consistent zoom and aspect ratio ──

/** Full-width photo with configurable aspect ratio and zoom on hover */
function Photo({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`overflow-hidden rounded-2xl ${aspect} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
      />
    </div>
  );
}

/** Smaller photo (for grids) — tighter rounding, same zoom */
function Thumb({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-xl ${aspect} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
      />
    </div>
  );
}

export default function OurStory() {
  return (
    <main className="bg-[#F5F3EF] relative">
      <Navbar />
      <PageHero
        title="Our Story"
        subtitle="Rooted In The Wild"
        imageSrc="/images/real/drone-hero.jpg"
      />

      <div className="pt-20 pb-24 md:pt-28 md:pb-32 space-y-24 md:space-y-28">

        {/* ════════════════════════════════════════════
            Section 0 — How Magpie Began
            Origin story — centered narrative
        ════════════════════════════════════════════ */}
        <AnimatedSection className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <span className="text-[11px] uppercase tracking-[0.22em] text-stone-400 font-body mb-4 block">How It Began</span>
          <h2 className="font-display text-4xl md:text-[2.8rem] font-light italic leading-tight mb-10 text-stone-800">
            The dream of a jungle retreat.
          </h2>
          <div className="font-body text-stone-500 space-y-5 leading-relaxed text-base md:text-[1.05rem] text-left">
            <p>
              Magpie Cottage holds a history that is deeply intertwined with India's conservation legacy. It was originally built as a private retreat by the late Mr. Ashok Kumar, a renowned conservationist and one of India's foremost wildlife warriors. Nestled on the edge of the Kalagarh Tiger Reserve, the cottage served as his personal sanctuary—a place where the tireless work of protecting tigers and elephants gave way to the quiet observation of the forest.
            </p>
            <p>
              For years, it remained a closely guarded secret, visited only by family and close friends who shared his profound respect for the wild. After his passing, his daughter Malini took over the stewardship of the estate. Rather than keeping it closed, she decided to open its doors to like-minded souls.
            </p>
            <p>
              Today, Magpie Cottage exists to share that very legacy. It is an invitation to step away from the noise of city life and experience the forest exactly as it was meant to be—unhurried, authentic, and completely wild. Every decision here—from the solar lighting to the local stone architecture—is guided by a single principle: <em>tread lightly, live deeply.</em>
            </p>
          </div>
        </AnimatedSection>



        {/* ════════════════════════════════════════════
            Section 1 — Built With Nature
            TEXT LEFT  |  PHOTO RIGHT
        ════════════════════════════════════════════ */}
        <AnimatedSection className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="text-[11px] uppercase tracking-[0.22em] text-stone-400 font-body mb-4 block">The Cottage</span>
            <h2 className="font-display text-4xl md:text-[2.8rem] font-light italic leading-tight mb-8 text-stone-800">
              Built with nature.
            </h2>
            <div className="font-body text-stone-500 space-y-5 leading-relaxed text-base md:text-[1.05rem]">
              <p>Constructed with local stone and wood, the cottage was designed to blend seamlessly into the surrounding forest canopy. Every window frames a living painting.</p>
              <p>We&apos;ve kept the footprint small and the impact minimal, ensuring that the wildlife that calls this place home remains undisturbed.</p>
            </div>
          </div>
          <Photo src="/images/real/facade.jpg" alt="The Cottage" aspect="aspect-[3/4]" priority />
        </AnimatedSection>

        {/* ════════════════════════════════════════════
            Section 2 — The Setting
            Centered heading → 3-col photo strip → text
        ════════════════════════════════════════════ */}
        <AnimatedSection className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <span className="text-[11px] uppercase tracking-[0.22em] text-stone-400 font-body mb-4 block">The Setting</span>
          <h2 className="font-display text-4xl md:text-[2.8rem] font-light italic leading-tight mb-12 text-stone-800">
            Where the jungle meets the river.
          </h2>

          {/* 3-col photo strip — equal height via aspect ratio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <Thumb src="/images/story/jungle_1.jpg" alt="Aerial view — river and jungle" aspect="aspect-[3/4]" />
            <Thumb src="/images/story/jungle_2.jpg" alt="Forest canopy from above" aspect="aspect-[3/4]" className="-mt-0 md:mt-8" />
            <Thumb src="/images/story/jungle_3.jpg" alt="Drone shot — landscape" aspect="aspect-[3/4]" className="hidden md:block" />
          </div>

          <div className="max-w-2xl mx-auto font-body text-stone-500 space-y-4 leading-relaxed text-base md:text-[1.05rem]">
            <p className="font-display text-xl md:text-2xl font-light italic text-stone-700 mb-5">
              Grounded in the wild heart of Kalagarh.
            </p>
            <p>At Corbett&apos;s western fringe lies the Kalagarh Tiger Reserve—more secluded and less frequented, yet abundant in sal forests, winding river valleys, and vital wildlife corridors inhabited by elephants, tigers, and a wide array of species.</p>
            <p>In contrast to Corbett&apos;s busier, resort-filled zones, Kalagarh has preserved its rugged, untouched character—a landscape where the forest remains authentic and untamed.</p>
          </div>
        </AnimatedSection>

        {/* ════════════════════════════════════════════
            Philosophy — contained dark green card
        ════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-[#2D3929] rounded-3xl px-10 py-20 md:px-20 text-center">
            <p className="text-[11px] uppercase tracking-[0.22em] text-stone-400 font-body mb-8 block">Our Philosophy</p>
            <p className="font-display text-2xl md:text-4xl font-light italic text-stone-100 leading-snug max-w-3xl mx-auto">
              &quot;We believe true luxury isn&apos;t about excess; it&apos;s about space, silence, and the freedom to simply be.&quot;
            </p>
            <p className="font-body text-stone-400 text-sm mt-10 leading-relaxed max-w-xl mx-auto">
              We host one group at a time to ensure total privacy. When you&apos;re here, the entire estate is yours.
            </p>
          </div>
        </div>

        {/* ════════════════════════════════════════════
            Section 3 — Our Values 2×2 grid
        ════════════════════════════════════════════ */}
        <AnimatedSection id="values" className="scroll-mt-24 max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.22em] text-stone-400 font-body mb-4 block">What We Stand For</span>
            <h2 className="font-display text-4xl md:text-[2.8rem] font-light italic text-stone-800">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: <Leaf size={26} strokeWidth={1.5} />, title: "Sustainability", body: "We move gently on this land. Constructed using local stone and wood, and maintained with a minimal ecological footprint, we believe that luxury and responsibility can exist in harmony." },
              { icon: <ShieldCheck size={26} strokeWidth={1.5} />, title: "Privacy", body: "We host one group at a time. When you're here, the entire estate—three bedrooms, the garden, the river frontage—is exclusively yours." },
              { icon: <Heart size={26} strokeWidth={1.5} />, title: "Community", body: "Every meal is prepared by local cooks using locally sourced ingredients. We work with village artisans and contribute to the community's livelihood." },
              { icon: <Bird size={26} strokeWidth={1.5} />, title: "Nature First", body: "Wildlife corridors remain undisturbed. Our no-loud-music policy respects the animals that share this land—leopards, elephants, and rare birds." },
            ].map(({ icon, title, body }) => (
              <div key={title} className="bg-stone-100 p-10 md:p-12 rounded-3xl">
                <div className="text-[#2D3929] mb-6">{icon}</div>
                <h3 className="font-display text-2xl italic mb-4 text-stone-800">{title}</h3>
                <p className="font-body text-sm md:text-base text-stone-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* ════════════════════════════════════════════
            Guest Testimonials
        ════════════════════════════════════════════ */}
        <AnimatedSection className="max-w-4xl mx-auto px-6 md:px-12 text-center pt-8">
          <span className="text-[11px] uppercase tracking-[0.22em] text-stone-400 font-body mb-6 block">Guest Experiences</span>
          <div className="bg-stone-50/50 p-10 md:p-16 rounded-3xl border border-stone-200/60 shadow-sm relative">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-7xl text-sage/40 font-display font-bold leading-none">&quot;</span>
            <p className="font-display text-2xl md:text-3xl italic font-light text-stone-800 leading-relaxed mb-8 pt-4">
              &ldquo;It is a wonderful house, very comfortable. Neat and clean. The Caretaker and the Cook, both take very good care of the guests&rdquo;
            </p>
            <p className="font-body text-[11px] uppercase tracking-[0.2em] font-medium text-stone-500">
              — Divya Jindal
            </p>
          </div>
        </AnimatedSection>

        {/* ════════════════════════════════════════════
            Section 4 — The Legacy
        ════════════════════════════════════════════ */}
        <AnimatedSection id="legacy" className="scroll-mt-24 max-w-6xl mx-auto px-6 md:px-12 space-y-20 md:space-y-24">

          {/* ── Heading + hero portrait centrepiece ── */}
          <div className="text-center space-y-10">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-stone-400 font-body mb-4 block">Our Foundation</span>
              <h2 className="font-display text-4xl md:text-[2.8rem] font-light italic text-stone-800">
                The legacy of late Mr Ashok Kumar.
              </h2>
            </div>
            {/* Portrait — fixed aspect, centred, constrained width */}
            <div className="max-w-lg mx-auto">
              <Photo src="/images/story/legacy_ashok.png" alt="Late Mr Ashok Kumar in the forest" aspect="aspect-[4/5]" />
            </div>
          </div>

          {/* ── Champion for every living thing
               2-col:  [portrait pair]  |  text
          ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left: two portrait-oriented thumbnails side by side */}
            <div className="grid grid-cols-2 gap-4">
              <Thumb src="/images/story/champion_1.png" alt="Conservation advocacy" aspect="aspect-[3/4]" />
              <Thumb src="/images/story/champion_2.png" alt="Conservation work" aspect="aspect-[3/4]" className="mt-8" />
            </div>
            {/* Right: text */}
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-light italic mb-6 text-stone-800">
                Champion for every living thing.
              </h3>
              <div className="font-body text-stone-500 space-y-4 leading-relaxed text-sm md:text-base">
                <p>Ashok Kumar, founder of Magpie Cottage, was a visionary conservationist and one of India&apos;s foremost warriors against wildlife crime. Remembered by global conservation leaders as a champion for &quot;tigers, elephants, rhinos, Tibetan antelopes—and every living thing.&quot;</p>
                <p>This was most evident at the 2007 CITES Conference in The Hague, where he powerfully opposed the legalization of trade in farmed tiger parts.</p>
              </div>
            </div>
          </div>

          {/* ── The Beginnings
               2-col:  text  |  [staggered pair]
          ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left: text */}
            <div className="order-2 lg:order-1">
              <h3 className="font-display text-2xl md:text-3xl font-light italic mb-6 text-stone-800">The beginnings.</h3>
              <div className="font-body text-stone-500 space-y-4 leading-relaxed text-sm md:text-base">
                <p>His journey into conservation began during his tenure at Tata Steel, with frequent visits to Simlipal in Odisha, where he was deeply influenced by the legendary conservationist Saroj Raj Choudhary.</p>
                <p>He went on to play a pivotal role in securing protected status for Dalma as a wildlife sanctuary, working with national leaders and the renowned ornithologist Dr. Salim Ali.</p>
              </div>
            </div>
            {/* Right: staggered duo — first image taller and offset down */}
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 items-start">
              <Thumb src="/images/story/beginning_1.png" alt="Early conservation" aspect="aspect-[3/4]" className="mt-10" />
              <Thumb src="/images/story/beginning_2.png" alt="Early days" aspect="aspect-[3/4]" />
            </div>
          </div>

          {/* ── Institutionalizing the War Against Wildlife Crime
               Left: featured wide + two thumbnails below
               Right: text
          ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left: editorial stack — 1 wide on top, 2 thumbs below */}
            <div className="space-y-4">
              <Photo src="/images/story/war_1.png" alt="Wildlife trade monitoring" aspect="aspect-[16/9]" />
              <div className="grid grid-cols-2 gap-4">
                <Thumb src="/images/story/war_2.jpg" alt="Wildlife enforcement" aspect="aspect-[4/3]" />
                <Thumb src="/images/story/war_3.jpg" alt="Wildlife seizure" aspect="aspect-[4/3]" />
              </div>
            </div>
            {/* Right: text */}
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-light italic mb-6 text-stone-800">
                Institutionalizing the war against wildlife crime.
              </h3>
              <div className="font-body text-stone-500 space-y-4 leading-relaxed text-sm md:text-base">
                <p>While based in Dubai, Ashok Kumar witnessed the open trafficking of wildlife skins, leading him to engage with the CITES Secretariat and collaborate with Indian enforcement authorities.</p>
                <p>He founded the Wildlife Protection Society of India and, as Member Secretary of the Supreme Court&apos;s Subramanian Committee, played a key role in creating the Wildlife Crime Control Bureau of India.</p>
              </div>
            </div>
          </div>

          {/* ── The Lineage
               2-col:  text  |  [tall feature + offset thumb]
          ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left: text */}
            <div className="order-2 lg:order-1">
              <h3 className="font-display text-2xl md:text-3xl font-light italic mb-6 text-stone-800">The lineage.</h3>
              <div className="font-body text-stone-500 space-y-4 leading-relaxed text-sm md:text-base">
                <p>Ashok Kumar&apos;s legacy was shaped by a lineage of courage and conviction. His mother, Urmila Shastri, was a freedom fighter who worked closely with Mahatma Gandhi.</p>
                <p>Reflecting on her influence, he once said, &quot;She fought for India&apos;s freedom, and I fight for the forests and wild animals that make India… India.&quot;</p>
                <p className="font-semibold text-stone-700">
                  Magpie Cottage stands today as a tribute to his extraordinary life—an enduring symbol of his passion, courage, and unwavering commitment to protecting the wild.
                </p>
              </div>
            </div>
            {/* Right: tall feature photo with smaller offset thumb alongside */}
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 items-start">
              <Thumb src="/images/story/lineage_2.png" alt="The lineage" aspect="aspect-[3/4]" />
              <Thumb src="/images/story/lineage_1.jpg" alt="The lineage" aspect="aspect-[3/4]" className="mt-10" />
            </div>
          </div>

        </AnimatedSection>

        {/* ════════════════════════════════════════════
            Meet Malini the Founder
            Founder bio with photo
        ════════════════════════════════════════════ */}
        <AnimatedSection id="host" className="scroll-mt-24 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="sticky top-32 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg lg:max-w-md mx-auto w-full">
            <img
              src="/malini.png"
              alt="Malini Kumar — Your Host"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-[0.22em] text-stone-400 font-body mb-4 block">Your Host: &ldquo;Legacy. Wilderness. Connection.&rdquo;</span>
            <h2 className="font-display text-4xl md:text-[2.8rem] font-light italic leading-tight mb-4 text-stone-800">
              Malini Kumar
            </h2>
            <p className="font-display text-xl italic text-stone-600 mb-8">
              &ldquo;In the Stillness of the Wild, We Find Ourselves.&rdquo;
            </p>
            <div className="font-body text-stone-500 space-y-6 leading-relaxed text-base md:text-[1.05rem]">
              <p>
                Carrying forward the legacy of her father, renowned conservationist Ashok Kumar, Malini Kumar leads Magpie Cottage with a deep commitment to protecting the wild and preserving its natural beauty. Introduced to the wilderness as an infant—taken to her first wildlife sanctuary at just three months old—and mentored closely by her father, her upbringing across forests and national parks shaped a lifelong bond with nature.
              </p>
              <p>
                These early experiences grew into a deep-rooted passion for conservation and mindful living. Today, Malini nurtures Magpie Cottage as an immersive jungle retreat—one that invites guests to step away from the noise of urban life and rediscover stillness in the wild. She believes that it is in such unhurried, natural settings that meaningful relationships are strengthened—through shared moments like jungle safaris, riverside walks, bonfires, and the quiet joys of simple outdoor living.
              </p>
              <p>
                As a mother of twin daughters raised in this very environment, she has seen how exposure to the wild fosters resilience, awareness, and a deeper appreciation for life beyond city boundaries.
              </p>
              <p>
                Professionally, Malini is a showrunner, independent director, and founder of MK Studios, with over 30 years of experience in content creation and storytelling. She has collaborated with leading global broadcasters, corporations, government bodies, and international organisations, producing documentaries, branded content, and pro-social films.
              </p>
              <p>
                A notable highlight of her work is her role as Co-Director on a 10-part series on Environment and Sustainability for Warner Bros Discovery, with the University of Cambridge as knowledge partner—further reflecting her enduring commitment to environmental awareness and responsible storytelling.
              </p>
              <p className="font-medium text-stone-700 mt-6 pt-6 border-t border-stone-200">
                Her philosophy is simple: give your very best to everything you do. At Magpie Cottage, this translates into an experience that is authentic, grounding, and deeply connected to the rhythms of the wild.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* ════════════════════════════════════════════
          Come Stay With Us — CTA Band
      ════════════════════════════════════════════ */}
      <section className="bg-[#2D3929] py-20 md:py-28 text-center">
        <AnimatedSection className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-light italic text-stone-100 mb-6">
            Come stay with us.
          </h2>
          <p className="font-body text-stone-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Experience the magic of the jungle for yourself. Whether you&apos;re looking for solitude, adventure, or simply a place to breathe — Magpie Cottage is waiting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-body font-medium text-sm uppercase tracking-[0.15em] bg-sage text-forest hover:bg-sage-dark hover:text-cream transition-all duration-500"
            >
              Get In Touch
            </a>
            <a
              href="https://wa.me/919811934909?text=Hi%20Malini%2C%20I%27d%20like%20to%20book%20Magpie%20Cottage.%20Could%20you%20share%20availability%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-body font-medium text-sm uppercase tracking-[0.15em] bg-transparent border border-stone-500/30 text-stone-200 hover:bg-stone-200 hover:text-forest transition-all duration-500"
            >
              WhatsApp Us
            </a>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
}
