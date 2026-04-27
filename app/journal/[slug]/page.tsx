import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { journalArticles } from "@/lib/data/journal";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return journalArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const article = journalArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const related = journalArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <main className="bg-background relative">
      <Navbar />
      
      {/* Article Hero */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={article.image} alt={article.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-forest/60" />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-24 text-center text-cream">
          <span className="px-3 py-1 bg-sage text-forest rounded-full text-xs font-medium uppercase tracking-widest mb-6 inline-block">{article.category}</span>
          <h1 className="font-display text-5xl md:text-7xl font-light italic mb-6 leading-tight">{article.title}</h1>
          <div className="font-body text-sm text-cream/70 flex justify-center gap-4">
            <span>{article.date}</span>
            <span>&bull;</span>
            <span>{article.readingTime}</span>
          </div>
        </div>
      </section>

      {/* Prose Content */}
      <article className="py-24 md:py-32 px-6 max-w-2xl mx-auto font-body text-lg md:text-xl text-text-mid leading-loose prose prose-stone prose-headings:font-display prose-headings:font-light prose-headings:text-text-dark prose-a:text-forest prose-p:mb-8">
        <p className="text-2xl md:text-3xl text-text-dark mb-12 font-display italic leading-relaxed text-center">{article.excerpt}</p>
        <p className="first-letter:text-5xl first-letter:font-display first-letter:text-forest first-letter:mr-3 first-letter:float-left first-letter:mt-2">{article.content}</p>
        <p className="mt-12 pt-8 border-t border-stone-200 italic opacity-70 text-base">This is a placeholder for the full article content. In a production environment, this would be fetched from a CMS like Sanity or Contentful, or rendered from a local Markdown file.</p>
      </article>

      {/* Related */}
      <section className="py-24 bg-stone-50 px-6 md:px-12 border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl mb-12 text-center text-text-dark italic">More from the Journal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((rel) => (
              <AnimatedSection key={rel.slug} className="group">
                <Link href={`/journal/${rel.slug}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                    <Image src={rel.image} alt={rel.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="font-display text-2xl font-medium text-text-dark mb-2 group-hover:text-forest transition-colors">{rel.title}</h3>
                  <div className="font-body text-xs text-text-light">{rel.date}</div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
