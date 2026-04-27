import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { StoryTeaser } from "@/components/home/StoryTeaser";
import { ExperiencesPreview } from "@/components/home/ExperiencesPreview";
import { RoomsPreview } from "@/components/home/RoomsPreview";
import { PhotoSlideshow } from "@/components/home/PhotoSlideshow";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { MapSection } from "@/components/home/MapSection";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { CtaBanner } from "@/components/home/CtaBanner";
import { MarqueeTicker } from "@/components/ui/MarqueeTicker";
import { CustomCursor } from "@/components/ui/CustomCursor";

const marqueeItems = [
  "Jungle Retreat",
  "River Views",
  "Bonfire Nights",
  "Birdsong Mornings",
  "Tiger Reserve",
  "Three Bedrooms",
  "Private Villa",
  "Lansdowne",
];

export default function Home() {
  return (
    <main className="bg-background relative">
      <CustomCursor />
      <Navbar />
      
      <HeroSection />
      <MarqueeTicker items={marqueeItems} />
      <StoryTeaser />
      <ExperiencesPreview />
      <RoomsPreview />
      <PhotoSlideshow />
      <TestimonialsSection />
      <MapSection />
      <InstagramFeed />
      <CtaBanner />
      
      <Footer />
    </main>
  );
}
