import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutCottage } from "@/components/home/AboutCottage";
import { StoryTeaser } from "@/components/home/StoryTeaser";
import { ExperiencesPreview } from "@/components/home/ExperiencesPreview";
import { RoomsPreview } from "@/components/home/RoomsPreview";
import { PhotoSlideshow } from "@/components/home/PhotoSlideshow";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { MapSection } from "@/components/home/MapSection";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { BookingBand } from "@/components/home/BookingBand";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <main className="bg-background relative">
      <Navbar />
      
      <HeroSection />
      <AboutCottage />
      <StoryTeaser />
      <ExperiencesPreview />
      <RoomsPreview />
      <PhotoSlideshow />
      <TestimonialsSection />
      <MapSection />
      <InstagramFeed />
      <BookingBand />
      <CtaBanner />
      
      <Footer />
    </main>
  );
}
