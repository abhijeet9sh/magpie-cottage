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

        <div className="bg-white rounded-3xl p-10 md:p-16 border border-stone-100 shadow-2xl shadow-stone-200/40 relative overflow-hidden max-w-2xl mx-auto mb-16">
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* WhatsApp Logo Icon */}
            <div className="w-16 h-16 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mb-8">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
                  <a href="https://wa.me/919811934909" className="font-body text-xl text-text-dark tracking-wide hover:text-[#25D366] transition-colors">+91 98119 34909</a>
                </div>
                <div className="hidden md:block w-px h-16 bg-stone-100"></div>
                <div className="flex flex-col items-center">
                  <span className="font-display italic text-text-light mb-2 text-lg">Owner</span>
                  <a href="https://wa.me/919811934909" className="font-body text-xl text-text-dark tracking-wide hover:text-[#25D366] transition-colors">+91 98119 34909</a>
                </div>
              </div>
            </div>
            
            <a 
              href="https://wa.me/919811934909"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white hover:bg-[#20b858] rounded-full font-medium transition-all duration-300 shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Message us on WhatsApp
            </a>
          </div>
          
          {/* Subtle background blurs */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-forest/5 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Alternative Booking Options */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200 shadow-sm max-w-2xl mx-auto">
          <h2 className="font-display text-2xl italic text-text-dark mb-2 text-center">Also book via</h2>
          <p className="font-body text-text-light text-sm mb-6 text-center">Prefer a familiar platform? Reserve through any of these channels.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://www.airbnb.co.uk/rooms/1646990107600437661?unique_share_id=4204505f-a341-4c9a-873f-0a1113059bd2&viralityEntryPoint=1&s=76"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-6 py-5 rounded-2xl border border-stone-200 hover:border-[#FF5A5F]/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FF5A5F]/5 flex items-center justify-center shrink-0 group-hover:bg-[#FF5A5F]/10 transition-colors">
                <svg className="w-5 h-5 text-[#FF5A5F]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.995 17.586c-.387.808-.86 1.378-1.395 1.77-.62.455-1.31.644-2.005.644-.537 0-1.08-.12-1.565-.36a9.31 9.31 0 01-1.03-.585 9.31 9.31 0 01-1.03.585c-.486.24-1.028.36-1.565.36-.695 0-1.385-.189-2.005-.644-.536-.392-1.008-.962-1.395-1.77-.403-.84-.604-1.773-.604-2.76 0-1.23.375-2.498 1.116-3.768a18.525 18.525 0 012.05-2.76A24.304 24.304 0 0112 5.118a24.304 24.304 0 013.434 3.18 18.525 18.525 0 012.05 2.76c.741 1.27 1.116 2.538 1.116 3.768 0 .987-.2 1.92-.605 2.76z" />
                </svg>
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-text-dark">Airbnb</p>
                <p className="font-body text-xs text-text-light">View listing &rarr;</p>
              </div>
            </a>
            <a
              href="https://www.goibibo.com/hotels/magpie-cottage-a-jungle-retreat-hotel-in-lansdowne-202603231540164664?mHotelId=202603231540164664&checkin=2026-04-15&checkout=2026-04-16&roomString=1-2-0&cc=IN&locusId=RGNCR&locusType=region"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-6 py-5 rounded-2xl border border-stone-200 hover:border-[#2276E3]/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2276E3]/5 flex items-center justify-center shrink-0 group-hover:bg-[#2276E3]/10 transition-colors">
                <svg className="w-5 h-5 text-[#2276E3]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.5 3h-19A1.5 1.5 0 001 4.5v15A1.5 1.5 0 002.5 21h19a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0021.5 3zM12 17.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm0-9a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                </svg>
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-text-dark">Goibibo</p>
                <p className="font-body text-xs text-text-light">View listing &rarr;</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
