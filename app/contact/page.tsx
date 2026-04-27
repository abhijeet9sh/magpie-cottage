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

      <Footer />
    </main>
  );
}
