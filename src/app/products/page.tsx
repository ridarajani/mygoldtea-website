"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const teaProducts = [
  {
    name: "MyGold Pure African Gold",
    size: "500g",
    category: "Premium",
    description:
      "Our flagship blend   the finest export quality tea for the true connoisseur. Rich, aromatic, and full-bodied.",
    image: `${basePath}/images/pure-african-gold-removebg-preview.png`,
    badge: "Flagship",
    tab: "Tea Collection",
  },
  {
    name: "MyGold Export Quality",
    size: "7g · 10g · 20g · 125g",
    category: "Export",
    description:
      "A supreme export quality blend with rich aroma and an unforgettable taste   available from single-serve to family size.",
    image: `${basePath}/images/export-quality-range-removebg-preview.png`,
    badge: "Best Seller",
    tab: "Tea Collection",
  },
  {
    name: "MyGold Economy Tea",
    size: "50g & 125g",
    category: "Value",
    description:
      "Great quality tea at an affordable price   bringing the taste of gold to every Malawian home.",
    image: `${basePath}/images/economy-range-removebg-preview.png`,
    badge: null,
    tab: "Tea Collection",
  },
  {
    name: "MyGold Tea Jar",
    size: "200g",
    category: "Gift",
    description:
      "Beautifully presented in a reusable glass jar   makes an excellent gift or kitchen centerpiece.",
    image: `${basePath}/images/tea-jar-removebg-preview.png`,
    badge: "Gift Pick",
    tab: "Tea Collection",
  },
  {
    name: "MyGold Tea Bags",
    size: "100 PCS",
    category: "Tea Bags",
    description:
      "Malawi's favourite tea in a generous 100-count box   premium convenience for tea lovers.",
    image: `${basePath}/images/tea-bags-100-removebg-preview.png`,
    badge: "Popular",
    tab: "Tea Collection",
  },
  {
    name: "MyGold Tagless Tea Bags",
    size: "25 PCS",
    category: "Tea Bags",
    description:
      "Premium tea in a convenient tagless bag format   25 bags of pure gold for everyday enjoyment.",
    image: `${basePath}/images/tea-bags-25-removebg-preview.png`,
    badge: null,
    tab: "Tea Collection",
  },
  {
    name: "MyGold Tea Bags",
    size: "50 PCS",
    category: "Tea Bags",
    description:
      "A handy 50-bag box perfect for home or office   convenience without compromising on quality.",
    image: `${basePath}/images/tea-bags-50-removebg-preview.png`,
    badge: null,
    tab: "Tea Collection",
  },
];

const cookieProducts = [
  {
    name: "MyGold Short Bread Cookies",
    size: "100g",
    category: "Cookies & Snacks",
    description:
      "Classic buttery shortbread cookies   perfectly crumbly and delicious with your afternoon tea.",
    image: `${basePath}/images/shortbread-cookies-removebg-preview.png`,
    badge: null,
    tab: "Cookies & Snacks",
  },
  {
    name: "MyGold Chocolate Chip Cookies",
    size: "100g",
    category: "Cookies & Snacks",
    description:
      "Rich chocolate chip cookies baked to perfection   an irresistible treat for chocolate lovers.",
    image: `${basePath}/images/chocolate-chip-cookies-removebg-preview.png`,
    badge: null,
    tab: "Cookies & Snacks",
  },
  {
    name: "MyGold Coconut Cookies",
    size: "100g",
    category: "Cookies & Snacks",
    description:
      "Tropical coconut-infused cookies with a delightful crunch   a taste of paradise in every bite.",
    image: `${basePath}/images/coconut-cookies-removebg-preview.png`,
    badge: null,
    tab: "Cookies & Snacks",
  },
  {
    name: "MyGold Peanut Cookies",
    size: "100g",
    category: "Cookies & Snacks",
    description:
      "Savoury peanut cookies packed with flavour   the perfect companion to your cup of MyGold Tea.",
    image: `${basePath}/images/peanut-cookies-removebg-preview.png`,
    badge: null,
    tab: "Cookies & Snacks",
  },
  {
    name: "Zeera Cumin Biscuit",
    size: "100g",
    category: "Cookies & Snacks",
    description:
      "A unique cumin-flavoured biscuit with a savoury twist   crispy, aromatic, and perfect with tea.",
    image: `${basePath}/images/zeera-removebg-preview.png`,
    badge: "New",
    tab: "Cookies & Snacks",
  },
  {
    name: "MyGold Cookies",
    size: "500g",
    category: "Cookies & Snacks",
    description:
      "A generous bag of crispy, crunchy cookies   great for sharing with family and friends.",
    image: `${basePath}/images/cookies-bag-removebg-preview.png`,
    badge: null,
    tab: "Cookies & Snacks",
  },
  {
    name: "MyGold Cookies Jar",
    size: "60 PCS & 145 PCS",
    category: "Cookies & Snacks",
    description:
      "Crispy and crunchy cookies in a premium reusable jar   always fresh and ready to enjoy.",
    image: `${basePath}/images/cookies-jar-removebg-preview.png`,
    badge: null,
    tab: "Cookies & Snacks",
  },
];

const otherProducts = [
  {
    name: "MyGold Margarine",
    size: "25g & 100g",
    category: "Rice & Essentials",
    description:
      "Smooth, creamy margarine that spreads perfectly   ideal for bread, toast, and baking.",
    image: `${basePath}/images/margarine-removebg-preview.png`,
    badge: null,
    tab: "Rice & Essentials",
  },
  {
    name: "MyGold Kilombero Rice",
    size: "5kg",
    category: "Rice & Essentials",
    description:
      "Premium Kilombero rice in a family-size pack   perfectly fluffy for every meal.",
    image: `${basePath}/images/rice-5kg-removebg-preview.png`,
    badge: null,
    tab: "Rice & Essentials",
  },
  {
    name: "MyGold Kilombero Rice",
    size: "500g & 2kg",
    category: "Rice & Essentials",
    description:
      "Premium quality Kilombero rice   perfectly portioned for everyday cooking.",
    image: `${basePath}/images/rice-range-removebg-preview.png`,
    badge: null,
    tab: "Rice & Essentials",
  },
];

const allProducts = [...cookieProducts, ...otherProducts, ...teaProducts];

const tabs = [
  {
    label: "All Products",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    count: allProducts.length,
  },
  {
    label: "Cookies & Snacks",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.75 1.75 0 013 15.546M12 3v1m0 11v1m-4.93-9.07l.707.707M5 12H4m13.07-4.363l-.707.707M20 12h-1m-5.657 5.657l-.707-.707" />
      </svg>
    ),
    count: cookieProducts.length,
  },
  {
    label: "Rice & Essentials",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    count: otherProducts.length,
  },
  {
    label: "Tea Collection",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
    count: teaProducts.length,
  },
];

const tabSubtitles: Record<string, string> = {
  "All Products": "Quality food products crafted with pride in Malawi",
  "Cookies & Snacks": "Delicious cookies and snacks for the whole family",
  "Rice & Essentials": "Premium margarine and Kilombero rice for every household",
  "Tea Collection": "Premium teas from the finest gardens in Malawi",
};

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("All Products");

  const filteredProducts =
    activeTab === "All Products"
      ? allProducts
      : allProducts.filter((p) => p.tab === activeTab);

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-green-dark to-green pt-32 pb-20 overflow-hidden">
        <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-green-light/10 blur-3xl" />
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gold-light/10 blur-3xl" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gold-light hover:text-white transition-colors mb-6"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Our <span className="text-gold-light italic">Products</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            Discover our range of premium cookies, quality margarine, wholesome
            rice, delicious snacks, and fine tea   all crafted in Malawi.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white/80 backdrop-blur-xl border-b border-cream-dark/50 sticky top-0.5 z-20 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-2 py-4 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`group flex-shrink-0 flex items-center gap-2.5 rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === tab.label
                    ? "bg-gradient-to-r from-green-dark to-green text-white shadow-lg shadow-green/25 scale-[1.02]"
                    : "bg-cream/60 text-brown hover:bg-cream hover:text-brown-dark hover:shadow-md"
                }`}
              >
                <span className={`transition-colors duration-300 ${
                  activeTab === tab.label ? "text-gold-light" : "text-gold-dark/60 group-hover:text-gold-dark"
                }`}>
                  {tab.icon}
                </span>
                {tab.label}
                <span className={`inline-flex items-center justify-center min-w-[22px] h-[22px] rounded-full text-[11px] font-bold transition-all duration-300 ${
                  activeTab === tab.label
                    ? "bg-white/20 text-white"
                    : "bg-gold/10 text-gold-dark group-hover:bg-gold/20"
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-brown-dark">
                {activeTab}
              </h2>
              <p className="mt-1 text-brown-light">
                {tabSubtitles[activeTab]}
              </p>
            </div>
            <p className="hidden sm:block text-sm text-brown-light">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ScrollReveal key={`${product.name}-${product.size}-${index}`} delay={index % 3 * 100}>
              <div
                className="group rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-cream-dark hover:border-gold/20 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-cream to-beige">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out p-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {product.badge && (
                    <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-green shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute top-4 right-4 rounded-full bg-green-dark/70 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                    {product.size}
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-green">
                    {product.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-brown-dark group-hover:text-gold-dark transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-brown leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="h-0.5 bg-gradient-to-r from-gold via-gold-light to-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-green-dark to-green p-10 sm:p-14 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold-light/10 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-green-light/10 blur-[60px]" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Interested in Our Products?
              </h2>
              <p className="mt-3 text-white/70 max-w-xl mx-auto">
                Get in touch to learn about availability, wholesale orders, or to
                find a stockist near you.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 text-white font-semibold hover:bg-gold-dark transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
