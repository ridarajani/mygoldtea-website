"use client";

import { useEffect, useRef, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const floatingProducts = [
  // 12 o'clock — top center-right
  {
    image: `${basePath}/images/pure-african-gold-removebg-preview.png`,
    alt: "Pure African Gold Tea",
    size: 400,
    mobileSize: 160,
    top: "1%",
    left: "45%",
    mobileTop: "1%",
    mobileLeft: "38%",
    speed: -0.15,
    delay: 0,
  },
  // 1 o'clock — top right
  {
    image: `${basePath}/images/shortbread-cookies-removebg-preview.png`,
    alt: "Shortbread Cookies",
    size: 300,
    mobileSize: 120,
    top: "6%",
    left: "72%",
    mobileTop: "10%",
    mobileLeft: "72%",
    speed: 0.16,
    delay: 0,
  },
  // 3 o'clock — right
  {
    image: `${basePath}/images/tea-jar-removebg-preview.png`,
    alt: "Tea Jar",
    size: 500,
    mobileSize: 180,
    top: "35%",
    left: "72%",
    mobileTop: "36%",
    mobileLeft: "68%",
    speed: -0.13,
    delay: 200,
  },
  // 6 o'clock — bottom center-right
  {
    image: `${basePath}/images/export-quality-range-removebg-preview.png`,
    alt: "Export Quality Tea",
   size: 350,
    mobileSize: 120,
    top: "76%",
    left: "40%",
    mobileTop: "62%",
    mobileLeft: "68%",
    speed: -0.14,
    delay: 0,
  },
  // 7 o'clock — bottom left
  {
    image: `${basePath}/images/margarine-removebg-preview.png`,
    alt: "MyGold Margarine",
    size: 300,
    mobileSize: 120,
    top: "68%",
    left: "5%",
    mobileTop: "80%",
    mobileLeft: "5%",
    speed: 0.12,
    delay: 0,
  },
  // 9 o'clock — left
  {
    image: `${basePath}/images/rice-5kg-removebg-preview.png`,
    alt: "Kilombero Rice",
    size: 320,
    mobileSize: 130,
    top: "33%",
    left: "20%",
    mobileTop: "36%",
    mobileLeft: "0%",
    speed: -0.17,
    delay: 0,
  },
  // 10 o'clock — top left
  {
    image: `${basePath}/images/chocolate-chip-cookies-removebg-preview.png`,
    alt: "Chocolate Chip Cookies",
    size: 400,
    mobileSize: 150,
    top: "18%",
    left: "1%",
    mobileTop: "14%",
    mobileLeft: "0%",
    speed: 0.20,
    delay: 0,
  },
  // 11 o'clock — top left-center
  {
    image: `${basePath}/images/peanut-cookies-removebg-preview.png`,
    alt: "Peanut Cookies",
    size: 250,
    mobileSize: 100,
    top: "0%",
    left: "22%",
    mobileTop: "2%",
    mobileLeft: "5%",
    speed: 0.14,
    delay: 0,
  },
  // 8 o'clock — bottom center-left
  {
    image: `${basePath}/images/economy-range-removebg-preview.png`,
    alt: "Economy Tea Range",
    size: 170,
    mobileSize: 80,
    top: "75%",
    left: "70%",
    mobileTop: "65%",
    mobileLeft: "2%",
    speed: -0.1,
    delay: 0,
  },
];

export default function EverythingYouNeed() {
  const sectionRef = useRef<HTMLElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafId = useRef(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(section);

    const handleScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const offset = sectionCenter - viewportCenter;

        productRefs.current.forEach((el, i) => {
          if (el) {
            el.style.transform = `translate3d(0, ${offset * floatingProducts[i].speed}px, 0)`;
          }
        });
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mt-20 mb-20 bg-cream min-h-screen flex items-center overflow-hidden md:overflow-visible"
    >
      {/* Floating product images */}
      {floatingProducts.map((product, i) => (
        <div
          key={product.alt}
          ref={(el) => { productRefs.current[i] = el; }}
          className="absolute pointer-events-none will-change-transform"
          style={{
            top: isMobile ? product.mobileTop : product.top,
            left: isMobile ? product.mobileLeft : product.left,
            opacity: isVisible ? 1 : 0,
            transition: `opacity 0.7s ease-out ${product.delay}ms`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt=""
            width={isMobile ? product.mobileSize : product.size}
            height={isMobile ? product.mobileSize : product.size}
            style={{
              width: isMobile
                ? `${product.mobileSize}px`
                : `clamp(${Math.round(product.size * 0.2)}px, ${(product.size / 14.4).toFixed(1)}vw, ${product.size}px)`,
              height: "auto",
            }}
            aria-hidden="true"
          />
        </div>
      ))}

      {/* Center text */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-brown-dark leading-[1.1] transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          Everything
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark">
            You Need
          </span>
        </h2>
      </div>
    </section>
  );
}
