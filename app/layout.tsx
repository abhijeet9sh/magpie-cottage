import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CallButton } from "@/components/ui/CallButton";
import { SplashScreen } from "@/components/ui/SplashScreen";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Magpie Cottage | The Jungle Retreat in Lansdowne",
  description: "Your jungle retreat, six hours from Delhi. A private three-bedroom villa nestled on the edge of a tiger reserve in Lansdowne.",
  openGraph: {
    title: "Magpie Cottage | The Jungle Retreat in Lansdowne",
    description: "Your jungle retreat, six hours from Delhi. A private three-bedroom villa nestled on the edge of a tiger reserve in Lansdowne.",
    url: "https://magpiecottage.com",
    siteName: "Magpie Cottage",
    images: [
      {
        url: "/logo-new.png",
        width: 1200,
        height: 630,
        alt: "Magpie Cottage - The Jungle Retreat",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magpie Cottage | The Jungle Retreat in Lansdowne",
    description: "Your jungle retreat, six hours from Delhi. A private three-bedroom villa nestled on the edge of a tiger reserve in Lansdowne.",
    images: ["/logo-new.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden w-full relative">
        <SplashScreen />
        <LenisProvider>
          {/* Content extends full-width — sidebar overlays with glassmorphism */}
          <div className="overflow-x-hidden w-full relative">
            {children}
            <WhatsAppButton />
            <CallButton />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
