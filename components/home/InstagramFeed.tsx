"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { Copy, Play } from "lucide-react";

// Custom Instagram SVG since the project version of lucide-react is missing it
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const igPosts = [
  { src: "/images/gallery/exterior/img_2.jpg", type: "carousel" },
  { src: "/images/gallery/living-room/img_3.jpg", type: "video" },
  { src: "/images/gallery/bedroom-1/img_2.jpg", type: "photo" },
  { src: "/images/gallery/dining-area/img_1.jpg", type: "video" },
  { src: "/images/gallery/exterior/img_5.jpg", type: "carousel" },
  { src: "/images/gallery/additional-photos/img_2.jpg", type: "photo" },
];

export function InstagramFeed() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <AnimatedSection animation="fadeUp" className="lg:w-5/12 lg:pr-8">
            <div className="flex items-center gap-2 text-sage uppercase tracking-widest text-xs font-body mb-6 font-semibold">
              <InstagramIcon size={16} />
              <span>Join Our Community</span>
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl text-forest mb-6 tracking-tight leading-tight">
              Stories from <br />
              <span className="italic text-sage">The Jungle</span>
            </h2>
            
            <p className="font-body text-forest/70 mb-8 leading-relaxed text-[15px]">
              Discover the magic of Magpie Cottage through our curated moments. Follow us for daily inspiration, wildlife sightings, and behind-the-scenes glimpses into life at the retreat.
            </p>
            
            <a 
              href="https://www.instagram.com/magpiecottage_?igsh=MTZpMWIyYzJzNGxxMg=="
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-transparent border border-sage hover:bg-sage text-forest hover:text-white px-8 py-3.5 rounded-full font-body text-sm font-medium transition-all duration-300"
            >
              <InstagramIcon size={18} />
              <span>@magpiecottage_</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </AnimatedSection>

          {/* Right Column: Staggered Gallery */}
          <AnimatedSection animation="slideInRight" className="lg:w-7/12 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              
              {/* Column 1 */}
              <div className="flex flex-col gap-3 md:gap-4 pt-8 md:pt-12">
                {igPosts.slice(0, 2).map((post, i) => (
                  <PostCard key={i} post={post} />
                ))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-3 md:gap-4 pb-8 md:pb-12">
                {igPosts.slice(2, 4).map((post, i) => (
                  <PostCard key={i + 2} post={post} />
                ))}
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-3 md:gap-4 pt-4 md:pt-6 hidden sm:flex">
                {igPosts.slice(4, 6).map((post, i) => (
                  <PostCard key={i + 4} post={post} />
                ))}
              </div>

            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}

function PostCard({ post }: { post: { src: string, type: string } }) {
  return (
    <a
      href="https://www.instagram.com/magpiecottage_?igsh=MTZpMWIyYzJzNGxxMg=="
      target="_blank"
      rel="noopener noreferrer"
      className="relative aspect-[4/5] rounded-2xl overflow-hidden group block bg-stone-200 shadow-sm"
    >
      <Image
        src={post.src}
        alt="Instagram post"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      
      {/* Icon Overlays (Carousel/Video) */}
      <div className="absolute top-3 right-3 z-10 text-white drop-shadow-md">
        {post.type === "carousel" && <Copy size={16} className="opacity-90" />}
        {post.type === "video" && <Play size={16} className="opacity-90 fill-white" />}
      </div>
      
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <InstagramIcon size={28} className="text-white drop-shadow-lg" />
      </div>
    </a>
  );
}
