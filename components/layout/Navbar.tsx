"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

/* ─── Navigation data ─── */
const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Our Story",
    href: "/our-story",
    dropdown: [
      { name: "About Us", href: "/our-story" },
      { name: "Our Values", href: "/our-story#values" },
      { name: "The Legacy", href: "/our-story#legacy" },
      { name: "Your Host", href: "/our-story#host" },
    ],
  },
  {
    name: "The Cottage",
    href: "/the-cottage",
    dropdown: [
      { name: "Rooms", href: "/the-cottage#rooms" },
      { name: "Amenities", href: "/the-cottage#amenities" },
      { name: "House Rules", href: "/the-cottage#rules" },
    ],
  },
  {
    name: "Experiences",
    href: "/experiences",
    dropdown: [
      { name: "All Activities", href: "/experiences#activities" },
      { name: "Safari", href: "/experiences#safari" },
      { name: "Birdwatching", href: "/experiences#birdwatching" },
      { name: "Dining", href: "/experiences#dining" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Journal", href: "/journal" },
  { name: "Contact", href: "/contact" },
];

/* ── Individual nav item with fly-out dropdown ── */
function NavItem({ link, pathname }: { link: (typeof navLinks)[0]; pathname: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const isActive =
    pathname === link.href ||
    (link.href !== "/" && pathname.startsWith(link.href));

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <li
      ref={ref}
      className="relative w-full"
      onMouseEnter={() => link.dropdown && setOpen(true)}
      onMouseLeave={() => link.dropdown && setOpen(false)}
    >
      <Link
        href={link.href}
        className={`block py-[10px] px-5 text-[12px] font-body leading-none tracking-[0.08em] transition-all duration-200 text-center ${
          isActive ? "text-white" : "text-white/60 hover:text-white"
        }`}
      >
        {link.name}
      </Link>

      {/* Fly-out dropdown — appears to the right of the sidebar */}
      {link.dropdown && (
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute top-0 left-full ml-0 z-50 pointer-events-auto"
            >
              {/* invisible bridge so hover doesn't break when crossing gap */}
              <div className="pl-3">
                <div className="min-w-[180px] bg-black/80 backdrop-blur-md border border-white/10 overflow-hidden">
                  {link.dropdown.map((sub, i) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className={`block px-5 py-3 text-[12px] tracking-[0.1em] text-white/60 hover:text-white hover:bg-white/5 transition-colors font-body ${
                        i !== link.dropdown!.length - 1 ? "border-b border-white/5" : ""
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </li>
  );
}

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Close mobile nav on route change
  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  // Body scroll lock on mobile nav
  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isNavOpen]);

  // Peek behaviour on inner pages
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (!isHomePage) {
        setHideNav(y > lastScrollY && y > 80);
      }
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHomePage]);

  return (
    <>
      {/* ════════════════════════════════════════════════════════
          DESKTOP — narrow fixed left sidebar (Black Iris style)
          Width: 112px, full height, semi-transparent black
      ════════════════════════════════════════════════════════ */}
      <nav
        className={`hidden lg:flex flex-col fixed top-0 left-0 h-full z-50 transition-transform duration-500 ease-in-out backdrop-blur-xl ${
          hideNav ? "-translate-x-full" : "translate-x-0"
        }`}
        style={{ width: "120px", background: "rgba(0,0,0,0.65)" }}
      >
        {/* Nav links + Logo — centered together */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Logo — sits directly above Home */}
          <div className="flex flex-col items-center mb-5">
            <Link href="/" className="flex flex-col items-center group">
              <Image
                src="/logo.png"
                alt="Magpie Cottage"
                width={72}
                height={72}
                className="w-[72px] h-[72px] object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ filter: "invert(1) brightness(1.5)" }}
                unoptimized
              />
            </Link>
          </div>

          {/* Divider */}
          <div className="mx-5 mb-4 h-px bg-white/10" />

          <ul className="flex flex-col items-center w-full py-2">
          {navLinks.map((link) => (
            <NavItem key={link.name} link={link} pathname={pathname} />
          ))}
          </ul>
        </div>

        {/* Bottom CTA */}
        <div className="px-5 py-8">
          <div className="h-px bg-white/10 mb-5" />
          <Link
            href="/book"
            className="block text-center py-2.5 border border-white/20 text-[11px] tracking-[0.18em] uppercase text-white/70 hover:text-white hover:border-white/60 transition-all duration-300 font-body"
          >
            Book Now
          </Link>
        </div>
      </nav>

      {/* ════════════════════════════════════════════════════════
          MOBILE — thin top bar + slide-out drawer
      ════════════════════════════════════════════════════════ */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-16 z-40 flex items-center justify-between px-5 transition-transform duration-500 ${
          hideNav ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ background: "rgba(0,0,0,0.70)" }}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Magpie Cottage"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
            style={{ filter: "invert(1) brightness(1.5)" }}
            unoptimized
          />
        </Link>
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="text-white/70 hover:text-white transition-colors p-1"
          aria-label="Toggle menu"
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isNavOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden fixed inset-0 z-[45] bg-black/70 backdrop-blur-sm"
              onClick={() => setIsNavOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="lg:hidden fixed top-0 left-0 h-full z-[46] flex flex-col py-8 overflow-y-auto"
              style={{ width: "280px", background: "rgba(0,0,0,0.92)" }}
            >
              {/* Mobile header */}
              <div className="flex items-center justify-between px-7 mb-10">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Magpie Cottage"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                    style={{ filter: "invert(1) brightness(1.5)" }}
                    unoptimized
                  />
                </Link>
                <button
                  onClick={() => setIsNavOpen(false)}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Mobile links */}
              <div className="flex flex-col px-7 flex-1 space-y-1">
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <div key={link.name} className="border-b border-white/5 pb-3 pt-2">
                      <Link
                        href={link.href}
                        className={`block text-[13px] tracking-[0.1em] font-body transition-colors ${
                          isActive ? "text-white" : "text-white/60 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <div className="mt-2.5 pl-3 border-l border-white/10 space-y-2">
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block text-[11px] tracking-[0.12em] text-white/40 hover:text-white/80 font-body transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="px-7 mt-8">
                <Link
                  href="/book"
                  className="block text-center py-3 border border-white/20 text-[10px] tracking-[0.2em] uppercase text-white/70 hover:text-white hover:border-white/60 transition-all font-body"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
