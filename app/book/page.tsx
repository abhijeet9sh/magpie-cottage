import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingPage } from "@/components/booking/BookingPage";

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
            Book your stay.
          </h1>
        </div>

        <BookingPage />
      </div>

      <Footer />
    </main>
  );
}
