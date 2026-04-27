import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Booking Confirmed | Magpie Cottage",
};

export default function BookingConfirmed() {
  return (
    <main className="bg-background relative min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex flex-col items-center justify-center pt-32 pb-24 px-6 max-w-2xl mx-auto text-center">
        <CheckCircle className="text-sage mb-8" size={80} strokeWidth={1.5} />
        <h1 className="font-display text-5xl md:text-6xl font-light italic text-forest mb-6">
          Booking Confirmed
        </h1>
        <p className="font-body text-lg text-text-mid mb-12">
          Thank you for choosing Magpie Cottage. We&apos;ve received your payment and your reservation is now confirmed. A detailed confirmation email has been sent to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="px-8 py-4 bg-stone-100 text-text-dark rounded-full font-medium hover:bg-stone-200 transition-colors">
            Return Home
          </Link>
          <Link href="/experiences" className="px-8 py-4 bg-forest text-cream rounded-full font-medium hover:bg-forest-mid transition-colors">
            Explore Experiences
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
