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
  { src: "/images/wildlife/Picture1.jpg", type: "photo" },
  { src: "/images/wildlife/Picture2.jpg", type: "photo" },
  { src: "/images/wildlife/Picture3.jpg", type: "photo" },
  { src: "/images/wildlife/Picture4.jpg", type: "carousel" },
  { src: "/images/wildlife/Picture5.jpg", type: "video" },
  { src: "/images/wildlife/Picture6.jpg", type: "photo" },
  { src: "/images/gallery/living-room/img_3.jpg", type: "video" },
];

export function InstagramFeed() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <AnimatedSection animation="fadeUp" className="lg:w-5/12 lg:pr-8">
            <div className="flex items-center gap-2 text-sage tracking-widest text-xs font-body mb-4 font-semibold uppercase md:justify-center lg:justify-start">
              <InstagramIcon size={16} />
              <span>Join Our Community</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-light italic text-text-dark mb-6 leading-tight text-left lg:text-left">
              Stories From <br />
              <span className="text-sage">The Jungle</span>
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

          {/* Right Column: Precise 2x4 Grid Layout */}
          <AnimatedSection animation="slideInRight" className="lg:w-7/12 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {igPosts.slice(0, 8).map((post, i) => (
                <PostCard key={i} post={post} />
              ))}
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
