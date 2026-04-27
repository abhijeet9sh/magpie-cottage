import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { journalArticles } from "@/lib/data/journal";

export const metadata = {
  title: "Journal | Magpie Cottage",
  description: "Stories, guides, and thoughts from the edge of the Kalagarh Tiger Reserve.",
};

export default function Journal() {
  const featured = journalArticles[0];
  const rest = journalArticles.slice(1);

  return (
    <main className="bg-background relative">
      <Navbar />
      <PageHero 
        title="Journal" 
        imageSrc="/images/gallery/exterior/img_2.jpg"
      />

      <div className="pt-12 pb-24 md:pt-16 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Featured Article */}
        <AnimatedSection className="mb-24">
          <Link href={`/journal/${featured.slug}`} className="group block">
            <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-8">
              <Image src={featured.image} alt={featured.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-cream w-full">
                <span className="px-3 py-1 bg-sage text-forest rounded-full text-xs font-medium uppercase tracking-widest mb-4 inline-block">{featured.category}</span>
                <h2 className="font-display text-4xl md:text-6xl font-light italic mb-4 max-w-3xl">{featured.title}</h2>
                <div className="font-body text-sm text-cream/70 flex gap-4">
                  <span>{featured.date}</span>
                  <span>&bull;</span>
                  <span>{featured.readingTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {rest.map((article) => (
            <AnimatedSection key={article.slug} className="group">
              <Link href={`/journal/${article.slug}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-8">
                  <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="max-w-xl">
                  <span className="text-xs font-bold uppercase tracking-widest text-sage-border mb-4 block">{article.category}</span>
                  <h3 className="font-display text-3xl md:text-4xl font-medium text-text-dark mb-4 group-hover:text-forest transition-colors leading-tight">{article.title}</h3>
                  <p className="font-body text-text-mid mb-6 line-clamp-2 leading-relaxed">{article.excerpt}</p>
                  <div className="font-body text-sm text-text-light flex gap-4 uppercase tracking-wider">
                    <span>{article.date}</span>
                    <span>&bull;</span>
                    <span>{article.readingTime}</span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
