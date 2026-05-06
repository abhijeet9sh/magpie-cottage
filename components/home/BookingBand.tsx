"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ExternalLink } from "lucide-react";

const platforms = [
  {
    name: "Airbnb",
    href: "https://www.airbnb.co.in/rooms/1026aborea",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.995 17.586c-.387.808-.86 1.378-1.395 1.77-.62.455-1.31.644-2.005.644-.537 0-1.08-.12-1.565-.36a9.31 9.31 0 01-1.03-.585 9.31 9.31 0 01-1.03.585c-.486.24-1.028.36-1.565.36-.695 0-1.385-.189-2.005-.644-.536-.392-1.008-.962-1.395-1.77-.403-.84-.604-1.773-.604-2.76 0-1.23.375-2.498 1.116-3.768a18.525 18.525 0 012.05-2.76A24.304 24.304 0 0112 5.118a24.304 24.304 0 013.434 3.18 18.525 18.525 0 012.05 2.76c.741 1.27 1.116 2.538 1.116 3.768 0 .987-.2 1.92-.605 2.76z" />
      </svg>
    ),
    color: "hover:text-[#FF5A5F] hover:border-[#FF5A5F]/30",
  },
  {
    name: "MakeMyTrip",
    href: "https://www.makemytrip.com",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.5 3h-19A1.5 1.5 0 001 4.5v15A1.5 1.5 0 002.5 21h19a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0021.5 3zM12 17.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm0-9a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
      </svg>
    ),
    color: "hover:text-[#0078D4] hover:border-[#0078D4]/30",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919811934909?text=Hi%20Malini%2C%20I%27d%20like%20to%20book%20Magpie%20Cottage.%20Could%20you%20share%20availability%3F",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: "hover:text-[#25D366] hover:border-[#25D366]/30",
  },
];

export function BookingBand() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-cream border-y border-stone-200/50">
      <AnimatedSection className="max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-widest text-text-light font-body mb-3 block">
          Book Your Stay
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-light italic text-text-dark mb-2">
          From ₹12,000 / night
        </h2>
        <p className="font-body text-text-mid text-sm mb-10 max-w-md mx-auto">
          Reserve directly or through your preferred platform.
          The entire 3-bedroom villa is exclusively yours.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-stone-200 bg-white text-text-mid transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${p.color}`}
            >
              <span className="transition-colors duration-300">{p.icon}</span>
              <span className="font-body text-sm font-medium tracking-wide">{p.name}</span>
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
            </a>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
