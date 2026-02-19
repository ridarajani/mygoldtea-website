"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
  delay?: number;
  stagger?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  stagger = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // If stagger mode, reveal all child .reveal elements
          if (stagger) {
            el.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((child) => {
              child.classList.add("visible");
            });
          }
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  const variantClass = {
    up: "reveal",
    left: "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale",
  }[variant];

  return (
    <div
      ref={ref}
      className={`${variantClass} ${stagger ? "stagger-children" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
