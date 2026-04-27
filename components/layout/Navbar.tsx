"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

/* ─── Split nav groups: LEFT | LOGO | RIGHT ─── */
const leftLinks = [
  { 
    name: "Our Story", 
    href: "/our-story",
    dropdown: [
      { name: "About Us", href: "/our-story" },
      { name: "Our Values", href: "/our-story#values" },
    ]
  },
  { 
    name: "The Cottage", 
    href: "/the-cottage",
    dropdown: [
      { name: "Bedrooms", href: "/the-cottage#rooms" },
      { name: "Amenities", href: "/the-cottage#amenities" },
    ]
  },
  { 
    name: "Experiences", 
    href: "/experiences",
    dropdown: [
      { name: "Activities", href: "/experiences#activities" },
      { name: "Dining", href: "/experiences#dining" },
    ]
  },
];

const rightLinks = [
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Journal", href: "/journal" },
];

const allLinks = [...leftLinks, ...rightLinks];

type NavLinkItem = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
};

/* ─── Reusable nav link renderer ─── */
function NavLink({ 
  link, 
  isScrolled, 
  pathname, 
  activeDropdown, 
  setActiveDropdown 
}: { 
  link: NavLinkItem; 
  isScrolled: boolean; 
  pathname: string; 
  activeDropdown: string | null; 
  setActiveDropdown: (v: string | null) => void;
}) {
  const hasDropdown = 'dropdown' in link && link.dropdown;
  const isActive = pathname === link.href || pathname.startsWith(link.href + "/");

  return (
    <div className="relative">
      {hasDropdown ? (
        <button
          onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
          className={`flex items-center gap-1 px-3 py-1.5 text-sm font-body tracking-wide transition-all duration-300 ${
            isScrolled
              ? "text-forest/80 hover:text-forest"
              : "text-cream/90 hover:text-cream"
          } ${isActive ? "font-semibold" : "font-normal"}`}
        >
          {link.name}
          <ChevronDown 
            size={12} 
            className={`transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`}
          />
        </button>
      ) : (
        <Link
          href={link.href}
          className={`px-3 py-1.5 text-sm font-body tracking-wide transition-all duration-300 ${
            isScrolled
              ? "text-forest/80 hover:text-forest"
              : "text-cream/90 hover:text-cream"
          } ${isActive ? "font-semibold" : "font-normal"}`}
        >
          {link.name}
        </Link>
      )}

      {/* Dropdown menu */}
      <AnimatePresence>
        {hasDropdown && activeDropdown === link.name && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full left-0 mt-3 min-w-[200px] bg-cream rounded-xl shadow-xl border border-sage/10 overflow-hidden py-2"
          >
            {link.dropdown?.map((sub) => (
              <Link
                key={sub.name}
                href={sub.href}
                className="block px-5 py-3 text-sm text-forest hover:bg-sage/10 transition-colors font-body"
                onClick={() => setActiveDropdown(null)}
              >
                <span className="font-medium">{sub.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main Navbar ─── */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* The inner bar — transforms from transparent full-width to floating pill */}
        <div
          className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
            isScrolled
              ? "mx-4 md:mx-8 lg:mx-12 mt-3 bg-cream/92 backdrop-blur-xl shadow-lg shadow-forest/5 rounded-full border border-sage/10"
              : "mx-0 mt-0 bg-transparent rounded-none border-transparent"
          }`}
          ref={dropdownRef}
        >
          <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "px-6 md:px-8 h-14" : "px-6 md:px-12 h-16"
          }`}>
            
            {/* ── LEFT LINKS ── */}
            <div className="hidden lg:flex items-center gap-1 flex-1">
              {leftLinks.map((link) => (
                <NavLink
                  key={link.name}
                  link={link}
                  isScrolled={isScrolled}
                  pathname={pathname}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                />
              ))}
            </div>

            {/* ── CENTER LOGO ── */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0 lg:mx-8">
              <Image
                src="/logo.svg"
                alt="Magpie Cottage"
                width={36}
                height={36}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <span className={`font-display text-base tracking-wide transition-colors duration-500 hidden sm:inline ${
                isScrolled ? "text-forest" : "text-cream"
              }`}>
                Magpie Cottage
              </span>
            </Link>

            {/* ── RIGHT LINKS + BOOK BUTTON ── */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-end">
              {rightLinks.map((link) => (
                <NavLink
                  key={link.name}
                  link={link}
                  isScrolled={isScrolled}
                  pathname={pathname}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                />
              ))}

              {/* Book button — filled when scrolled, outline at top */}
              <Link
                href="/book"
                className={`ml-3 px-5 py-2 rounded-full text-sm font-body font-medium border transition-all duration-300 ${
                  isScrolled
                    ? "bg-forest border-forest text-cream hover:bg-forest/90"
                    : "border-cream/50 text-cream hover:bg-cream/10"
                }`}
              >
                Book a room
              </Link>
            </div>

            {/* ── MOBILE MENU BUTTON ── */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <X size={22} className={isScrolled ? "text-forest" : "text-cream"} />
              ) : (
                <Menu size={22} className={isScrolled ? "text-forest" : "text-cream"} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── MOBILE MENU OVERLAY ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-forest/95 backdrop-blur-lg lg:hidden flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-6"
            >
              {allLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-3xl text-cream hover:text-sage transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + allLinks.length * 0.08, duration: 0.4 }}
              >
                <Link
                  href="/book"
                  className="mt-4 px-8 py-3 rounded-full bg-sage text-forest font-body font-medium"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Book a room
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
