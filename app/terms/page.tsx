import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Terms of Service | Magpie Cottage",
  description: "Terms and conditions for staying at Magpie Cottage.",
};

export default function TermsOfService() {
  return (
    <main className="bg-background relative">
      <Navbar />
      <PageHero 
        title="Terms of Service" 
        imageSrc="/images/gallery/exterior/img_10.jpg"
      />

      <div className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
        <AnimatedSection className="prose prose-stone max-w-none font-body text-text-mid">
          <p className="text-xl text-text-dark font-medium mb-8">By using our website and booking a stay at Magpie Cottage, you agree to the following terms and conditions.</p>
          
          <h2 className="font-display text-3xl text-text-dark mt-12 mb-6">1. Booking & Payments</h2>
          <p>Bookings are confirmed only upon receipt of full payment. Rates are subject to change without notice, but will not affect confirmed bookings.</p>

          <h2 className="font-display text-3xl text-text-dark mt-12 mb-6">2. Cancellation Policy</h2>
          <p>Full refund for cancellations made within 48 hours of booking, if the check-in date is at least 14 days away. 50% refund for cancellations made at least 7 days before check-in. No refunds for cancellations made within 7 days of check-in.</p>

          <h2 className="font-display text-3xl text-text-dark mt-12 mb-6">3. Guest Conduct</h2>
          <p>Guests are expected to respect the property and surrounding wildlife. Loud music is not permitted after 10:00 PM. Smoking is prohibited inside the cottage.</p>

          <h2 className="font-display text-3xl text-text-dark mt-12 mb-6">4. Liability</h2>
          <p>Magpie Cottage is not liable for any loss, damage, or injury sustained by guests during their stay, including those caused by wildlife or natural terrain.</p>

          <h2 className="font-display text-3xl text-text-dark mt-12 mb-6">5. Governing Law</h2>
          <p>These terms are governed by the laws of Uttarakhand, India.</p>
        </AnimatedSection>
      </div>

      <Footer />
    </main>
  );
}
