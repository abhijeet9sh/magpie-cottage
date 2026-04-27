import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Refund & Cancellation Policy | Magpie Cottage",
  description: "Learn about our refund and cancellation policies for stays at Magpie Cottage.",
};

export default function RefundPolicy() {
  return (
    <main className="bg-background relative">
      <Navbar />
      <PageHero 
        title="Refund & Cancellation" 
        imageSrc="/images/gallery/exterior/img_10.jpg"
      />

      <div className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
        <AnimatedSection className="prose prose-stone max-w-none font-body text-text-mid">
          <p className="text-xl text-text-dark font-medium mb-8">We understand plans can change. Here is our refund and cancellation policy for all bookings made through our website.</p>
          
          <h2 className="font-display text-3xl text-text-dark mt-12 mb-6">1. Cancellation Window</h2>
          <div className="bg-stone-50 rounded-2xl p-6 md:p-8 border border-stone-200 space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">✓</div>
              <div>
                <p className="font-medium text-text-dark mb-1">Full Refund (100%)</p>
                <p>Cancellations made within 48 hours of booking, provided the check-in date is at least 14 days away.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">½</div>
              <div>
                <p className="font-medium text-text-dark mb-1">Partial Refund (50%)</p>
                <p>Cancellations made at least 7 days before the check-in date.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-100 text-red-700 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">✗</div>
              <div>
                <p className="font-medium text-text-dark mb-1">No Refund</p>
                <p>Cancellations made within 7 days of the check-in date, or for no-shows.</p>
              </div>
            </div>
          </div>

          <h2 className="font-display text-3xl text-text-dark mt-12 mb-6">2. Refund Process</h2>
          <p>All approved refunds will be processed within 5–10 business days to the original payment method used during booking. You will receive a confirmation email once the refund has been initiated.</p>

          <h2 className="font-display text-3xl text-text-dark mt-12 mb-6">3. How to Cancel</h2>
          <p>To request a cancellation, please contact us via:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Email: <a href="mailto:bookmagpiecottage@gmail.com" className="text-forest hover:underline">bookmagpiecottage@gmail.com</a></li>
            <li>WhatsApp: <a href="https://wa.me/919811934909" className="text-forest hover:underline">+91 98119 34909</a></li>
          </ul>
          <p className="mt-4">Please include your booking confirmation number, the name on the reservation, and the dates of your stay.</p>

          <h2 className="font-display text-3xl text-text-dark mt-12 mb-6">4. Force Majeure</h2>
          <p>In cases of natural disasters, government-imposed restrictions, or other extraordinary circumstances beyond our control, we will work with you to reschedule your stay or issue a full refund at our discretion.</p>

          <h2 className="font-display text-3xl text-text-dark mt-12 mb-6">5. Modifications</h2>
          <p>Date changes are subject to availability and must be requested at least 7 days before the original check-in date. No additional charges apply for the first modification. Subsequent changes may attract a processing fee.</p>

          <h2 className="font-display text-3xl text-text-dark mt-12 mb-6">6. Contact Us</h2>
          <p>For any questions about our refund policy, please reach out to us at <a href="mailto:bookmagpiecottage@gmail.com" className="text-forest hover:underline">bookmagpiecottage@gmail.com</a> or call <a href="tel:+919811934909" className="text-forest hover:underline">+91 98119 34909</a>.</p>
        </AnimatedSection>
      </div>

      <Footer />
    </main>
  );
}
