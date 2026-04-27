import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CallButton } from "@/components/ui/CallButton";

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
  title: "Magpie Cottage | A Jungle Retreat in Lansdowne",
  description: "Your jungle retreat, six hours from Delhi. A private three-bedroom villa nestled on the edge of a tiger reserve in Lansdowne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <LenisProvider>
          {children}
          <WhatsAppButton />
          <CallButton />
        </LenisProvider>
      </body>
    </html>
  );
}
