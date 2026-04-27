"use client";

interface MarqueeTickerProps {
  items: string[];
  speed?: number; // seconds for one full loop
  separator?: string;
  className?: string;
}

export function MarqueeTicker({ 
  items, 
  speed = 30, 
  separator = "•",
  className = "" 
}: MarqueeTickerProps) {
  const content = items.join(` ${separator} `);
  
  return (
    <div className={`w-full overflow-hidden bg-forest text-cream py-5 ${className}`}>
      <div 
        className="marquee-track flex whitespace-nowrap"
        style={{ 
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {/* Duplicate content 4x to ensure seamless loop */}
        {[0, 1, 2, 3].map((i) => (
          <span 
            key={i} 
            className="font-body text-sm md:text-base tracking-[0.2em] uppercase mx-8 shrink-0"
          >
            {content} {separator}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
