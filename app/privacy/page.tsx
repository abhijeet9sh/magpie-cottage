import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Privacy Policy | Magpie Cottage",
  description: "How we handle your data at Magpie Cottage.",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-background relative">
      <Navbar />
      <PageHero 
        title="Privacy Policy" 
        imageSrc="/images/gallery/exterior/img_9.jpg"
      />

      <div className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
        <AnimatedSection className="prose prose-stone max-w-none font-body text-text-mid">
          <p className="text-xl text-text-dark font-medium mb-8">Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.</p>
          
          <h2 className="font-display text-3xl text-text-dark mt-12 mb-6">1. Information Collection</h2>
          <p>We collect information you provide directly to us when you book a stay, sign up for our newsletter, or contact us with enquiries. This may include your name, email address, phone number, and booking preferences.</p>

          <h2 className="font-display text-3xl text-text-dark mt-12 mb-6">2. Use of Information</h2>
          <p>We use the information we collect to process your bookings, communicate with you about your stay, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.</p>

          <h2 className="font-display text-3xl text-text-dark mt-12 mb-6">3. Data Security</h2>
          <p>We take reasonable measures to protect your personal information from loss, theft, misuse, and unauthorized access. All online payments are processed through secure third-party providers.</p>

          <h2 className="font-display text-3xl text-text-dark mt-12 mb-6">4. Cookies</h2>
          <p>Our website uses cookies to enhance your browsing experience and analyze site traffic. You can choose to disable cookies through your browser settings.</p>

          <h2 className="font-display text-3xl text-text-dark mt-12 mb-6">5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at hello@magpiecottage.com.</p>
        </AnimatedSection>
      </div>

      <Footer />
    </main>
  );
}
