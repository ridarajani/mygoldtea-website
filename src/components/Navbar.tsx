"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#brand" },
  { label: "Products", href: "/products" },
  { label: "Quality", href: "/#quality" },
  { label: "Tea Facts", href: "/fun-facts" },
  { label: "Contact", href: "/contact" },
];

// Map hash links to their section IDs
const sectionMap: Record<string, string> = {
  "/#brand": "brand",
  "/#quality": "quality",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track which section is currently in view
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = Object.values(sectionMap);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    // Reset to null (Home) when at the top
    function handleTop() {
      if (window.scrollY < 200) setActiveSection(null);
    }
    window.addEventListener("scroll", handleTop, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", handleTop);
    };
  }, [pathname]);

  function isActive(href: string) {
    // On the home page, use section-based tracking
    if (pathname === "/") {
      const sectionId = sectionMap[href];
      if (sectionId) return activeSection === sectionId;
      if (href === "/") return activeSection === null;
      return false;
    }
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  const isHome = pathname === "/";

  return (
    <>
      {/* Top accent bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-gradient-to-r from-gold via-gold-light to-green" />

      <nav
        className={`fixed top-0.5 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-2xl"
            : isHome
              ? "bg-transparent"
              : "bg-white/90 backdrop-blur-2xl"
        }`}
      >

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={`${basePath}/images/logo.png`}
                alt="MyGold Tea"
                width={180}
                height={78}
                className="h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    isActive(link.href)
                      ? scrolled || !isHome
                        ? "text-green-dark bg-green/10"
                        : "text-gold-light bg-white/15 font-semibold"
                      : scrolled || !isHome
                        ? "text-brown hover:text-green-dark hover:bg-cream"
                        : "text-white hover:text-gold-light hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className={`hidden md:inline-flex rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                  scrolled || !isHome
                    ? "bg-green text-white hover:bg-green-dark shadow-sm shadow-green/15"
                    : "bg-gold text-white hover:bg-gold-dark shadow-sm shadow-gold/20"
                }`}
              >
                Get In Touch
              </Link>

              {/* Mobile hamburger */}
              <button
                className={`md:hidden p-2.5 rounded-xl transition-colors ${
                  scrolled || !isHome
                    ? "text-brown-dark hover:bg-cream"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white/95 backdrop-blur-2xl px-4 py-5 space-y-1 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-green-dark bg-green/10"
                    : "text-brown hover:text-green-dark hover:bg-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-green px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-green-dark transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
