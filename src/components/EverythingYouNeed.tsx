"use client";

import { useEffect, useRef, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const floatingProducts = [
  // Top center (12 o'clock)
  {
    image: `${basePath}/images/pure-african-gold-removebg-preview.png`,
    alt: "Pure African Gold Tea",
    size: 400,
    top: "1%",
    left: "45%",
    speed: -0.15,
    delay: 0,
  },
  // Top right (1-2 o'clock)
  {
    image: `${basePath}/images/shortbread-cookies-removebg-preview.png`,
    alt: "Shortbread Cookies",
    size: 300,
    top: "6%",
    left: "72%",
    speed: 0.16,
    delay: 0,
  },
  // Right (3 o'clock)
  {
    image: `${basePath}/images/tea-jar-removebg-preview.png`,
    alt: "Tea Jar",
    size: 500,
    top: "35%",
    left: "72%",
    speed: -0.13,
    delay: 200,
  },
  // Bottom right (4-5 o'clock)
  {
    image: `${basePath}/images/cookies-jar-removebg-preview.png`,
    alt: "Cookies Jar",
    size: 300,
    top: "76%",
    left: "38%",
    speed: -0.14,
    delay: 0,
  },
  // Bottom center (6 o'clock)
  {
    image: `${basePath}/images/export-quality-range-removebg-preview.png`,
    alt: "Export Quality Tea",
    size: 400,
    top: "68%",
    left: "72%",
    speed: 0.11,
    delay: 0,
  },

  // Bottom left (7-8 o'clock)
  {
    image: `${basePath}/images/margarine-removebg-preview.png`,
    alt: "MyGold Margarine",
    size: 300,
    top: "68%",
    left: "5%",
    speed: 0.12,
    delay: 0,
  },
  // Left (9 o'clock)
  {
    image: `${basePath}/images/rice-5kg-removebg-preview.png`,
    alt: "Kilombero Rice",
    size: 320,
    top: "33%",
    left: "20%",
    speed: -0.17,
    delay: 0,
  },
  // Top left (10-11 o'clock)
  {
    image: `${basePath}/images/chocolate-chip-cookies-removebg-preview.png`,
    alt: "Chocolate Chip Cookies",
    size: 400,
    top: "18%",
    left: "1%",
    speed: 0.20,
    delay: 0,
  },
  // Between top-left and top (11 o'clock)
  {
    image: `${basePath}/images/peanut-cookies-removebg-preview.png`,
    alt: "Peanut Cookies",
    size: 250,
    top: "0%",
    left: "22%",
    speed: 0.14,
    delay: 0,
  },
  // Between bottom-right and bottom (5 o'clock)
  {
    image: `${basePath}/images/economy-range-removebg-preview.png`,
    alt: "Economy Tea Range",
    size: 170,
    top: "75%",
    left: "58%",
    speed: -0.1,
    delay: 0,
  },
];

export default function EverythingYouNeed() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      setOffset(sectionCenter - viewportCenter);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-cream min-h-screen flex items-center overflow-visible"
    >
      {/* Floating product images */}
      {floatingProducts.map((product) => (
        <div
          key={product.alt}
          className="absolute transition-all duration-700 ease-out pointer-events-none"
          style={{
            top: product.top,
            left: product.left,
            transform: `translateY(${offset * product.speed}px)`,
            opacity: isVisible ? 1 : 0,
            transitionDelay: `${product.delay}ms`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt=""
            width={product.size}
            height={product.size}
            style={{
              width: `clamp(${Math.round(product.size * 0.2)}px, ${(product.size / 14.4).toFixed(1)}vw, ${product.size}px)`,
              height: "auto",
            }}
            aria-hidden="true"
          />
        </div>
      ))}

      {/* Center text */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-5xl sm:text-6xl lg:text-8xl font-bold text-brown-dark leading-[1.1] transition-all duration-700"
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
