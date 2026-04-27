import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryClient } from "@/components/gallery/GalleryClient";

export const metadata = {
  title: "Gallery | Magpie Cottage",
  description: "Browse photos of our jungle retreat, bedrooms, and surrounding wildlife.",
};

export default function Gallery() {
  return (
    <main className="bg-background relative">
      <Navbar />
      <PageHero 
        title="Gallery" 
        imageSrc="/images/gallery/exterior/img_1.jpg"
      />
      <GalleryClient />
      <Footer />
    </main>
  );
}
