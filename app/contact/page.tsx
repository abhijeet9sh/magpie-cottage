import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/contact/ContactForm";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Contact | Magpie Cottage",
  description: "Get in touch with us to book your stay or ask any questions about our jungle retreat.",
};

export default function Contact() {
  return (
    <main className="bg-background relative">
      <Navbar />
      <PageHero 
        title="Contact Us" 
        imageSrc="/images/gallery/exterior/img_5.jpg"
      />

      <div className="pt-12 pb-24 md:pt-16 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left: Form */}
        <AnimatedSection>
          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest text-text-light font-body mb-4 block">Enquire Now</span>
            <h2 className="font-display text-4xl md:text-5xl font-light italic text-text-dark leading-tight">
              Let&apos;s plan your escape.
            </h2>
          </div>
          <ContactForm />
        </AnimatedSection>

        {/* Right: Info */}
        <AnimatedSection className="flex flex-col h-full">
          <div className="bg-stone-50 rounded-3xl p-10 mb-8 border border-stone-200">
            <h3 className="font-display text-3xl text-text-dark mb-8">Information</h3>
            <ul className="space-y-6 font-body text-text-mid">
              <li className="flex gap-4">
                <MapPin className="text-sage mt-1" size={24} />
                <div>
                  <p className="font-medium text-text-dark">Address</p>
                  <p>Simalsaira,<br/>Uttarakhand 246155</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="text-sage mt-1" size={24} />
                <div>
                  <p className="font-medium text-text-dark">Email</p>
                  <a href="mailto:bookmagpiecottage@gmail.com" className="hover:text-forest transition-colors">bookmagpiecottage@gmail.com</a>
                  <p className="text-xs text-text-light mt-1">We usually reply within a few hours.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="text-sage mt-1" size={24} />
                <div>
                  <p className="font-medium text-text-dark">WhatsApp / Phone</p>
                  <a href="https://wa.me/919811934909" className="flex items-center gap-1 hover:text-forest transition-colors">
                    +91 98119 34909 <ArrowUpRight size={14} />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-stone-200 border border-stone-200 flex-1 min-h-[300px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.6063628771485!2d78.72555827616654!3d29.7555205391629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909814324743179%3A0x5d17e715e66e8917!2sMagpie%20Cottage!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Magpie Cottage Map"
            />
          </div>
        </AnimatedSection>
      </div>

      {/* How to Reach Us */}
      <section className="bg-cream border-t border-stone-200/50 py-16 md:py-24 px-6 md:px-12">
        <AnimatedSection className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-text-light font-body mb-4 block">Getting Here</span>
            <h2 className="font-display text-4xl md:text-5xl font-light italic text-text-dark">How to reach us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* By Air */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-forest/5 flex items-center justify-center mx-auto mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-forest"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
              </div>
              <h3 className="font-display text-xl italic text-text-dark mb-3">By Air</h3>
              <p className="font-body text-text-mid text-sm leading-relaxed mb-2">
                <span className="font-semibold text-text-dark">Jolly Grant Airport, Dehradun</span>
              </p>
              <p className="font-body text-text-light text-sm">~150 km · approx. 4.5 hrs drive</p>
            </div>
            {/* By Rail */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-forest/5 flex items-center justify-center mx-auto mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-forest"><path d="M4 11V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7"/><path d="M4 11h16"/><path d="M4 15v4a1 1 0 0 0 1 1h2l1-2h8l1 2h2a1 1 0 0 0 1-1v-4"/><path d="M4 15h16"/><circle cx="8.5" cy="18.5" r=".5" fill="currentColor"/><circle cx="15.5" cy="18.5" r=".5" fill="currentColor"/></svg>
              </div>
              <h3 className="font-display text-xl italic text-text-dark mb-3">By Rail</h3>
              <p className="font-body text-text-mid text-sm leading-relaxed mb-2">
                <span className="font-semibold text-text-dark">Kotdwar Railway Station</span>
              </p>
              <p className="font-body text-text-light text-sm">~40 km · approx. 1.5 hrs drive</p>
            </div>
            {/* By Road */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-forest/5 flex items-center justify-center mx-auto mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-forest"><path d="M4 19L8 5"/><path d="M16 5l4 14"/><path d="M7 15h10"/><path d="M9 9h6"/></svg>
              </div>
              <h3 className="font-display text-xl italic text-text-dark mb-3">By Road</h3>
              <p className="font-body text-text-mid text-sm leading-relaxed mb-2">
                <span className="font-semibold text-text-dark">From Delhi via NH9</span>
              </p>
              <p className="font-body text-text-light text-sm">~280 km · approx. 6 hrs drive</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://maps.app.goo.gl/magpiecottage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-forest font-medium border-b border-forest pb-1 hover:text-sage hover:border-sage transition-colors"
            >
              Open in Google Maps &rarr;
            </a>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
}
