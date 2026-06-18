import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Book Your Stay | Magpie Cottage",
  description: "Reserve your dates at Magpie Cottage.",
};

export default function Book() {
  return (
    <main className="bg-stone-50 relative min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-text-light font-body mb-4 block">Reservations</span>
          <h1 className="font-display text-5xl md:text-6xl font-light italic text-text-dark">
            Plan your stay.
          </h1>
        </div>

        <div className="bg-white rounded-3xl p-10 md:p-16 border border-stone-100 shadow-2xl shadow-stone-200/40 relative overflow-hidden max-w-2xl mx-auto">
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Elegant Icon */}
            <div className="w-16 h-16 bg-sage/10 text-sage-dark rounded-full flex items-center justify-center mb-8">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl text-text-dark mb-4 tracking-tight">Pricing & Availability</h2>
            
            <p className="font-body text-text-light text-lg mb-12 max-w-md leading-relaxed">
              To ensure a personalized experience, we handle all our bookings directly. Please contact us via WhatsApp to inquire about your stay.
            </p>
            
            <div className="flex flex-col w-full gap-6 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 border-y border-stone-100 py-8">
                <div className="flex flex-col items-center">
                  <span className="font-display italic text-text-light mb-2 text-lg">Reservations</span>
                  <a href="https://wa.me/919811934909" className="font-body text-xl text-text-dark tracking-wide hover:text-sage-dark transition-colors">+91 98119 34909</a>
                </div>
                <div className="hidden md:block w-px h-16 bg-stone-100"></div>
                <div className="flex flex-col items-center">
                  <span className="font-display italic text-text-light mb-2 text-lg">Owner</span>
                  <a href="https://wa.me/919811934909" className="font-body text-xl text-text-dark tracking-wide hover:text-sage-dark transition-colors">+91 98119 34909</a>
                </div>
              </div>
            </div>
            
            <a 
              href="https://wa.me/919811934909"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-forest text-cream hover:bg-forest-light rounded-full font-medium transition-all duration-300 shadow-lg shadow-forest/20 hover:shadow-xl hover:-translate-y-0.5"
            >
              Message us directly
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          {/* Subtle background blurs */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-forest/5 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>

      <Footer />
    </main>
  );
}
