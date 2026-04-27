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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <AnimatedSection animation="fadeUp" className="max-w-md lg:pr-8">
            <div className="flex items-center gap-2 text-sage uppercase tracking-widest text-xs font-body mb-6 font-semibold">
              <InstagramIcon size={16} />
              <span>Follow our journey</span>
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl text-forest mb-6 tracking-tight leading-tight">
              Moments from <br />
              <span className="italic text-sage">Magpie Cottage</span>
            </h2>
            
            <p className="font-body text-forest/70 mb-8 leading-relaxed text-[15px]">
              Discover the magic of Magpie Cottage through our latest stories and experiences. Follow us on Instagram for daily inspiration and behind-the-scenes moments.
            </p>
            
            <a 
              href="https://www.instagram.com/magpiecottage_?igsh=MTZpMWIyYzJzNGxxMg=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#8C9B73] hover:bg-[#7a8761] text-white px-6 py-3 rounded-full font-body text-sm font-medium transition-colors shadow-sm"
            >
              <InstagramIcon size={18} />
              Follow @magpiecottage_
            </a>
            
            <p className="font-body text-forest/50 text-xs mt-6">
              Join our community and stay updated
            </p>
          </AnimatedSection>

          {/* Right Column: Instagram Card */}
          <AnimatedSection animation="slideInRight" className="w-full">
            <div className="bg-white rounded-[2rem] p-5 md:p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-sage/10">
              
              {/* Card Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  {/* Story Ring */}
                  <div className="p-[3px] rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]">
                    <div className="p-[2px] bg-white rounded-full">
                      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-forest flex items-center justify-center">
                        <Image src="/logo.svg" alt="Profile" fill className="p-3 object-contain invert brightness-0" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-forest text-sm">magpiecottage_</h3>
                    <p className="font-body text-forest/70 text-xs mt-0.5">Magpie Cottage | Jungle Retreat</p>
                    <div className="flex items-center gap-2 text-[11px] text-forest/50 mt-1">
                      <span>1,200 followers</span>
                      <span>•</span>
                      <span>85 posts</span>
                    </div>
                  </div>
                </div>
                {/* Custom Gradient Instagram Icon */}
                <div className="hidden sm:block">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#ig-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2">
                        <stop offset="0%" stopColor="#f09433" />
                        <stop offset="25%" stopColor="#e6683c" />
                        <stop offset="50%" stopColor="#dc2743" />
                        <stop offset="75%" stopColor="#cc2366" />
                        <stop offset="100%" stopColor="#bc1888" />
                      </linearGradient>
                    </defs>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-3 gap-1 rounded-xl overflow-hidden">
                {igPosts.map((post, i) => (
                  <a
                    key={i}
                    href="https://www.instagram.com/magpiecottage_?igsh=MTZpMWIyYzJzNGxxMg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-square overflow-hidden group block bg-stone-200"
                  >
                    <Image
                      src={post.src}
                      alt={`Instagram post ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 33vw, 20vw"
                    />
                    
                    {/* Icon Overlays (Carousel/Video) */}
                    <div className="absolute top-2 right-2 z-10 text-white drop-shadow-md">
                      {post.type === "carousel" && <Copy size={14} className="opacity-90" />}
                      {post.type === "video" && <Play size={14} className="opacity-90 fill-white" />}
                    </div>
                    
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
