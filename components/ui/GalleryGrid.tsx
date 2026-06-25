"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

interface GalleryGridProps {
  title: string;
  images: string[];
}

export function GalleryGrid({ title, images }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const lightboxImages = images.map((src, index) => ({
    id: index,
    src,
    alt: `${title} - photo ${index + 1}`
  }));

  return (
    <>
      <div className={`grid gap-4 w-full ${
        images.length === 1 ? 'grid-cols-1' :
        images.length === 2 ? 'grid-cols-2' :
        'grid-cols-2 sm:grid-cols-2 lg:grid-cols-2'
      }`}>
        {images.map((img, idx) => {
          const imageClass = images.length === 1 
            ? "relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg w-full cursor-pointer group"
            : "relative aspect-square rounded-xl overflow-hidden shadow-sm group cursor-pointer w-full";
          
          return (
            <div 
              key={img} 
              className={imageClass}
              onClick={() => {
                setPhotoIndex(idx);
                setLightboxOpen(true);
              }}
            >
              <Image 
                src={img} 
                alt={`${title} - photo ${idx+1}`} 
                fill 
                className={`transition-transform duration-700 group-hover:scale-110 object-cover`} 
                sizes="(max-width: 768px) 100vw, 50vw" 
              />
            </div>
          )
        })}
      </div>

      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={photoIndex}
        onNavigate={setPhotoIndex}
        images={lightboxImages}
      />
    </>
  );
}

interface SimpleGalleryProps {
  title: string;
  images: string[];
  containerClassName?: string;
  masonry?: boolean;
}

export function SimpleGallery({ title, images, containerClassName = "grid grid-cols-2 md:grid-cols-5 gap-3", masonry = false }: SimpleGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const lightboxImages = images.map((src, index) => ({
    id: index,
    src,
    alt: `${title} - photo ${index + 1}`
  }));

  return (
    <>
      <div className={containerClassName}>
        {images.map((img, i) => (
          <div 
            key={i} 
            className={`relative rounded-xl overflow-hidden group cursor-pointer ${masonry ? 'break-inside-avoid mb-3' : 'aspect-square'}`}
            onClick={() => {
              setPhotoIndex(i);
              setLightboxOpen(true);
            }}
          >
            {masonry ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img 
                src={img} 
                alt={`${title} - photo ${i + 1}`} 
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-110" 
              />
            ) : (
              <Image 
                src={img} 
                alt={`${title} - photo ${i + 1}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                sizes="(max-width: 768px) 50vw, 20vw" 
              />
            )}
          </div>
        ))}
      </div>

      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={photoIndex}
        onNavigate={setPhotoIndex}
        images={lightboxImages}
      />
    </>
  );
}
