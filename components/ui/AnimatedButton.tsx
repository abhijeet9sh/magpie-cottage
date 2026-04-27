"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
}

export function AnimatedButton({ 
  href, 
  children, 
  variant = "primary", 
  className = "",
  external = false 
}: AnimatedButtonProps) {
  const baseStyles = "group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-body font-medium text-sm uppercase tracking-[0.15em] transition-all duration-500 overflow-hidden";
  
  const variants = {
    primary: "bg-forest text-cream hover:bg-forest-mid",
    secondary: "bg-sage text-forest hover:bg-sage-dark hover:text-cream",
    outline: "bg-transparent border border-cream/30 text-cream hover:bg-cream hover:text-forest",
  };

  const content = (
    <>
      <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
        {children}
      </span>
      <motion.span
        className="relative z-10"
        initial={{ x: -10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
      >
        <ArrowRight 
          size={16} 
          className="transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" 
        />
      </motion.span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </Link>
  );
}
