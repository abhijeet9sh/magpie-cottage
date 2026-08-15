"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Eye, X, Camera, Video, Sparkles } from "lucide-react";

interface SightingItem {
  id: string;
  type: "image" | "video";
  title: string;
  subtitle: string;
  src: string;
  tag: string;
}

const sightingItems: SightingItem[] = [
  {
    id: "sighting-1",
    type: "image",
    title: "Spotting Wild Elephants at Night",
    subtitle: "Caretaker observing a wild elephant from the cottage rooftop terrace using a spotlight",
    src: "/images/sightings/roof-spotlight-elephant.jpg",
    tag: "Night Encounter · Wild Elephant",
  },
  {
    id: "sighting-2",
    type: "image",
    title: "Elephant at Forest Perimeter",
    subtitle: "Close-up view of a wild tusker feeding along the property forest boundary",
    src: "/images/sightings/elephant-night-spotlight.jpg",
    tag: "Wild Elephant · Forest Reserve",
  },
  {
    id: "sighting-3",
    type: "image",
    title: "Himalayan Kalij Pheasant",
    subtitle: "A stunning male Kalij Pheasant foraging inside the bamboo fence of the cottage lawns",
    src: "/images/sightings/kalij-pheasant-fence.jpg",
    tag: "Birdlife · Cottage Lawn",
  },
  {
    id: "sighting-4",
    type: "video",
    title: "Nocturnal Elephant Encounter",
    subtitle: "Unedited video recording of a wild elephant feeding right beside the cottage property boundary",
    src: "/videos/sightings/sighting-video-1.mp4",
    tag: "Video · Elephant Sighting",
  },
  {
    id: "sighting-5",
    type: "video",
    title: "Rooftop Wildlife Watch",
    subtitle: "Observing nocturnal animal movements directly from our open rooftop terrace",
    src: "/videos/sightings/sighting-video-2.mp4",
    tag: "Video · Rooftop Watch",
  },
  {
    id: "sighting-6",
    type: "video",
    title: "Night Forest Soundscape & Movement",
    subtitle: "Authentic footage capturing forest calls and wildlife activity surrounding the cottage",
    src: "/videos/sightings/sighting-video-3.mp4",
    tag: "Video · Night Wilderness",
  },
  {
    id: "sighting-7",
    type: "video",
    title: "Morning Garden Visitor",
    subtitle: "Wild Himalayan fauna visiting the cottage grounds during quiet morning hours",
    src: "/videos/sightings/sighting-video-4.mp4",
    tag: "Video · Garden Wildlife",
  },
];

export function SightingsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "image" | "video">("all");
  const [selectedItem, setSelectedItem] = useState<SightingItem | null>(null);

  const filteredItems = sightingItems.filter((item) =>
    activeFilter === "all" ? true : item.type === activeFilter
  );

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-stone-900 text-stone-100 w-full relative overflow-hidden">
      {/* Subtle background gradient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-forest/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <AnimatedSection className="text-left mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/30 border border-sage/30 text-sage text-[11px] uppercase tracking-widest font-body mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Recorded On Property</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-light italic leading-tight text-stone-100 mb-4">
            Sightings Inside Magpie Cottage
          </h2>
          <p className="font-body text-stone-400 max-w-2xl text-base md:text-lg leading-relaxed">
            Nestled directly on the edge of the Kalagarh Tiger Reserve, wild elephants, rare Himalayan Kalij pheasants, and nocturnal fauna are regularly sighted right from our cottage lawns, bamboo fences, and rooftop terraces.
          </p>

          {/* Filter Buttons */}
          <div className="flex items-center gap-3 mt-8">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-body tracking-wider transition-all duration-300 ${
                activeFilter === "all"
                  ? "bg-sage text-stone-900 font-semibold shadow-lg shadow-sage/20"
                  : "bg-stone-800/80 text-stone-300 hover:bg-stone-800 border border-stone-700/50"
              }`}
            >
              All Sightings ({sightingItems.length})
            </button>
            <button
              onClick={() => setActiveFilter("image")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-body tracking-wider transition-all duration-300 ${
                activeFilter === "image"
                  ? "bg-sage text-stone-900 font-semibold shadow-lg shadow-sage/20"
                  : "bg-stone-800/80 text-stone-300 hover:bg-stone-800 border border-stone-700/50"
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              Photos (3)
            </button>
            <button
              onClick={() => setActiveFilter("video")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-body tracking-wider transition-all duration-300 ${
                activeFilter === "video"
                  ? "bg-sage text-stone-900 font-semibold shadow-lg shadow-sage/20"
                  : "bg-stone-800/80 text-stone-300 hover:bg-stone-800 border border-stone-700/50"
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              Videos (4)
            </button>
          </div>
        </AnimatedSection>

        {/* Media Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-2xl overflow-hidden bg-stone-800/60 border border-stone-700/40 hover:border-sage/50 transition-all duration-500 cursor-pointer shadow-xl"
              >
                {/* Media Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <video
                      src={`${item.src}#t=0.5`}
                      preload="metadata"
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onMouseEnter={(e) => {
                        const v = e.target as HTMLVideoElement;
                        v.play().catch(() => {});
                      }}
                      onMouseLeave={(e) => {
                        const v = e.target as HTMLVideoElement;
                        v.pause();
                        v.currentTime = 0.5;
                      }}
                    />
                  )}

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10 pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-body font-medium bg-stone-900/80 backdrop-blur-md text-stone-200 border border-stone-700/60">
                      {item.tag}
                    </span>
                  </div>

                  {/* Action Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 opacity-90 group-hover:scale-110 transition-transform duration-300 pointer-events-none">
                    {item.type === "video" ? (
                      <div className="w-14 h-14 rounded-full bg-forest/90 backdrop-blur-md border border-sage/40 flex items-center justify-center text-stone-100 shadow-2xl group-hover:bg-sage group-hover:text-stone-900 transition-colors duration-300">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-stone-900/70 backdrop-blur-md border border-stone-600/60 flex items-center justify-center text-stone-200 group-hover:bg-sage group-hover:text-stone-900 transition-colors duration-300">
                        <Eye className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5">
                  <h3 className="font-display text-xl font-medium text-stone-100 mb-1 group-hover:text-sage transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-stone-400 line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Modal Player */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] bg-stone-900 rounded-2xl overflow-hidden border border-stone-700 shadow-2xl flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-stone-800/80 hover:bg-stone-700 text-stone-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Lightbox Media */}
              <div className="relative w-full bg-black flex-1 min-h-[350px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
                {selectedItem.type === "image" ? (
                  <div className="relative w-full h-[60vh] md:h-[70vh]">
                    <Image
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <video
                    src={selectedItem.src}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[70vh] w-full object-contain rounded-t-2xl"
                  />
                )}
              </div>

              {/* Lightbox Caption */}
              <div className="p-6 bg-stone-900 border-t border-stone-800">
                <span className="text-xs uppercase tracking-wider text-sage font-body block mb-1">
                  {selectedItem.tag}
                </span>
                <h3 className="font-display text-2xl font-light text-stone-100 mb-2">
                  {selectedItem.title}
                </h3>
                <p className="font-body text-sm text-stone-400 leading-relaxed max-w-3xl">
                  {selectedItem.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
