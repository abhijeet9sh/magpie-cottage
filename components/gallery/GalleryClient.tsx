"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

const galleryCategories = [
  {
    "id": "living-room",
    "title": "Living Room",
    "amenities": "Spacious seating · Natural light · Forest views",
    "images": [
      {
        "src": "/images/gallery/living-room/img_1.jpg",
        "alt": "Living room 1"
      },
      {
        "src": "/images/gallery/living-room/img_2.jpg",
        "alt": "Living room 2"
      },
      {
        "src": "/images/gallery/living-room/img_3.jpg",
        "alt": "Living room 3"
      },
      {
        "src": "/images/gallery/living-room/img_4.jpg",
        "alt": "Living room 4"
      },
      {
        "src": "/images/gallery/living-room/img_5.jpg",
        "alt": "Living room 5"
      },
      {
        "src": "/images/gallery/living-room/img_6.jpg",
        "alt": "Living room 6"
      },
      {
        "src": "/images/gallery/living-room/img_7.jpg",
        "alt": "Living room 7"
      },
      {
        "src": "/images/gallery/living-room/img_8.jpg",
        "alt": "Living room 8"
      }
    ]
  },
  {
    "id": "dining-area",
    "title": "Dining Area",
    "amenities": "Al fresco dining · Forest backdrop",
    "images": [
      {
        "src": "/images/gallery/dining-area/img_1.jpg",
        "alt": "Dining area 1"
      },
      {
        "src": "/images/gallery/dining-area/img_2.jpg",
        "alt": "Dining area 2"
      },
      {
        "src": "/images/gallery/dining-area/img_3.jpg",
        "alt": "Dining area 3"
      },
      {
        "src": "/images/gallery/dining-area/img_4.jpg",
        "alt": "Dining area 4"
      },
      {
        "src": "/images/gallery/dining-area/img_5.jpg",
        "alt": "Dining area 5"
      }
    ]
  },
  {
    "id": "bedroom-1",
    "title": "Bedroom 1",
    "amenities": "En suite · Premium bedding · Natural light",
    "images": [
      {
        "src": "/images/gallery/bedroom-1/img_1.jpg",
        "alt": "Bedroom 1 1"
      },
      {
        "src": "/images/gallery/bedroom-1/img_2.jpg",
        "alt": "Bedroom 1 2"
      },
      {
        "src": "/images/gallery/bedroom-1/img_3.jpg",
        "alt": "Bedroom 1 3"
      },
      {
        "src": "/images/gallery/bedroom-1/img_4.jpg",
        "alt": "Bedroom 1 4"
      },
      {
        "src": "/images/gallery/bedroom-1/img_5.jpg",
        "alt": "Bedroom 1 5"
      },
      {
        "src": "/images/gallery/bedroom-1/img_6.jpg",
        "alt": "Bedroom 1 6"
      },
      {
        "src": "/images/gallery/bedroom-1/img_7.jpg",
        "alt": "Bedroom 1 7"
      },
      {
        "src": "/images/gallery/bedroom-1/img_8.jpg",
        "alt": "Bedroom 1 8"
      },
      {
        "src": "/images/gallery/bedroom-1/img_9.jpg",
        "alt": "Bedroom 1 9"
      },
      {
        "src": "/images/gallery/bedroom-1/img_10.jpg",
        "alt": "Bedroom 1 10"
      }
    ]
  },
  {
    "id": "bedroom-2",
    "title": "Bedroom 2",
    "amenities": "En suite · Premium bedding · Natural light",
    "images": [
      {
        "src": "/images/gallery/bedroom-2/img_1.jpg",
        "alt": "Bedroom 2 1"
      },
      {
        "src": "/images/gallery/bedroom-2/img_2.jpg",
        "alt": "Bedroom 2 2"
      },
      {
        "src": "/images/gallery/bedroom-2/img_3.jpg",
        "alt": "Bedroom 2 3"
      },
      {
        "src": "/images/gallery/bedroom-2/img_4.jpg",
        "alt": "Bedroom 2 4"
      },
      {
        "src": "/images/gallery/bedroom-2/img_5.jpg",
        "alt": "Bedroom 2 5"
      },
      {
        "src": "/images/gallery/bedroom-2/img_6.jpg",
        "alt": "Bedroom 2 6"
      },
      {
        "src": "/images/gallery/bedroom-2/img_7.jpg",
        "alt": "Bedroom 2 7"
      }
    ]
  },
  {
    "id": "bedroom-3",
    "title": "Bedroom 3",
    "amenities": "En suite · Premium bedding · Natural light",
    "images": [
      {
        "src": "/images/gallery/bedroom-3/img_1.jpg",
        "alt": "Bedroom 3 1"
      },
      {
        "src": "/images/gallery/bedroom-3/img_2.jpg",
        "alt": "Bedroom 3 2"
      },
      {
        "src": "/images/gallery/bedroom-3/img_3.jpg",
        "alt": "Bedroom 3 3"
      },
      {
        "src": "/images/gallery/bedroom-3/img_4.jpg",
        "alt": "Bedroom 3 4"
      },
      {
        "src": "/images/gallery/bedroom-3/img_5.jpg",
        "alt": "Bedroom 3 5"
      },
      {
        "src": "/images/gallery/bedroom-3/img_6.jpg",
        "alt": "Bedroom 3 6"
      },
      {
        "src": "/images/gallery/bedroom-3/img_7.jpg",
        "alt": "Bedroom 3 7"
      }
    ]
  },
  {
    "id": "full-bathroom-1",
    "title": "Full Bathroom 1",
    "amenities": "",
    "images": [
      {
        "src": "/images/gallery/full-bathroom-1/img_1.jpg",
        "alt": "Full bathroom 1 1"
      },
      {
        "src": "/images/gallery/full-bathroom-1/img_2.jpg",
        "alt": "Full bathroom 1 2"
      }
    ]
  },
  {
    "id": "full-bathroom-2",
    "title": "Full Bathroom 2",
    "amenities": "",
    "images": [
      {
        "src": "/images/gallery/full-bathroom-2/img_1.jpg",
        "alt": "Full bathroom 2 1"
      },
      {
        "src": "/images/gallery/full-bathroom-2/img_2.jpg",
        "alt": "Full bathroom 2 2"
      }
    ]
  },
  {
    "id": "full-bathroom-3",
    "title": "Full Bathroom 3",
    "amenities": "",
    "images": [
      {
        "src": "/images/gallery/full-bathroom-3/img_1.jpg",
        "alt": "Full bathroom 3 1"
      },
      {
        "src": "/images/gallery/full-bathroom-3/img_2.jpg",
        "alt": "Full bathroom 3 2"
      }
    ]
  },
  {
    "id": "exterior",
    "title": "Exterior",
    "amenities": "",
    "images": [
      {
        "src": "/images/gallery/exterior/img_1.jpg",
        "alt": "Exterior 1"
      },
      {
        "src": "/images/gallery/exterior/img_2.jpg",
        "alt": "Exterior 2"
      },
      {
        "src": "/images/gallery/exterior/img_3.jpg",
        "alt": "Exterior 3"
      },
      {
        "src": "/images/gallery/exterior/img_4.jpg",
        "alt": "Exterior 4"
      },
      {
        "src": "/images/gallery/exterior/img_5.jpg",
        "alt": "Exterior 5"
      },
      {
        "src": "/images/gallery/exterior/img_6.jpg",
        "alt": "Exterior 6"
      },
      {
        "src": "/images/gallery/exterior/img_7.jpg",
        "alt": "Exterior 7"
      },
      {
        "src": "/images/gallery/exterior/img_8.jpg",
        "alt": "Exterior 8"
      },
      {
        "src": "/images/gallery/exterior/img_9.jpg",
        "alt": "Exterior 9"
      },
      {
        "src": "/images/gallery/exterior/img_10.jpg",
        "alt": "Exterior 10"
      }
    ]
  },
  {
    "id": "additional-photos",
    "title": "Additional Photos",
    "amenities": "",
    "images": [
      {
        "src": "/images/gallery/additional-photos/img_1.jpg",
        "alt": "Additional photos 1"
      },
      {
        "src": "/images/gallery/additional-photos/img_2.jpg",
        "alt": "Additional photos 2"
      },
      {
        "src": "/images/gallery/additional-photos/img_3.jpg",
        "alt": "Additional photos 3"
      },
      {
        "src": "/images/gallery/additional-photos/img_4.jpg",
        "alt": "Additional photos 4"
      }
    ]
  }
];

// Create a flat array of all images for the lightbox
const allImages = galleryCategories.flatMap((category) => 
  category.images.map(img => ({
    id: img.src,
    src: img.src,
    category: category.title,
    alt: img.alt
  }))
);

export function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState(galleryCategories[0].id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Set up intersection observer for scroll spy (optional for a top nav if we add one later, 
  // but for now we focus on the Airbnb scrolling headers)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    galleryCategories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const openLightbox = (src: string) => {
    const index = allImages.findIndex(img => img.src === src);
    if (index !== -1) setLightboxIndex(index);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Photo Tour Container */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20">
        
        {galleryCategories.map((cat) => (
          <div key={cat.id} id={cat.id} className="flex flex-col md:flex-row gap-8 md:gap-16 mb-24 md:mb-32">
            
            {/* Left Column: Sticky Title & Amenities */}
            <div className="md:w-[30%]">
              <div className="md:sticky md:top-32 space-y-4">
                <h2 className="text-3xl md:text-4xl font-display text-forest leading-tight">
                  {cat.title}
                </h2>
                <p className="text-text-mid font-body text-base leading-relaxed max-w-xs">
                  {cat.amenities || "Experience the serene comfort and natural beauty of Magpie Cottage."}
                </p>
                
                {/* Visual divider for mobile */}
                <div className="h-px w-12 bg-sage-border/30 md:hidden" />
              </div>
            </div>

            {/* Right Column: Image Grid (Airbnb Pattern: 1 Large, 2 Small) */}
            <div className="md:w-[70%]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {cat.images.map((img, index) => {
                  // Airbnb pattern logic:
                  // 1. First image is always full width (span 2)
                  // 2. Next two are half width (span 1)
                  // 3. Repeat
                  const isFullWidth = index % 3 === 0;
                  
                  return (
                    <div 
                      key={`${cat.id}-${index}`}
                      className={`relative aspect-[4/3] md:aspect-[16/10] overflow-hidden cursor-pointer group bg-stone-100 rounded-xl md:rounded-2xl transition-all duration-500 shadow-sm hover:shadow-xl ${
                        isFullWidth ? 'md:col-span-2' : 'md:col-span-1'
                      }`}
                      onClick={() => openLightbox(img.src)}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                        priority={cat.id === 'living-room' && index === 0}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Immersive Lightbox */}
      <ImageLightbox
        images={allImages}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
