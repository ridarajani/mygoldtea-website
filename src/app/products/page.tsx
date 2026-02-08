import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Products — MyGold Tea",
  description:
    "Explore our full range of premium Malawian tea products — from export quality blends to convenient tea bags, cookies, rice and more.",
};

const teaProducts = [
  {
    name: "MyGold Pure African Gold",
    size: "500g",
    category: "Premium",
    description:
      "Our flagship blend — the finest export quality tea for the true connoisseur. Rich, aromatic, and full-bodied.",
    image: "/images/pure-african-gold.png",
    badge: "Flagship",
  },
  {
    name: "MyGold Export Quality",
    size: "7g · 10g · 20g · 125g",
    category: "Export",
    description:
      "A supreme export quality blend with rich aroma and an unforgettable taste — available from single-serve to family size.",
    image: "/images/export-quality-range.png",
    badge: "Best Seller",
  },
  {
    name: "MyGold Economy Tea",
    size: "50g & 125g",
    category: "Value",
    description:
      "Great quality tea at an affordable price — bringing the taste of gold to every Malawian home.",
    image: "/images/economy-range.png",
    badge: null,
  },
  {
    name: "MyGold Tea Jar",
    size: "200g",
    category: "Gift",
    description:
      "Beautifully presented in a reusable glass jar — makes an excellent gift or kitchen centerpiece.",
    image: "/images/tea-jar.png",
    badge: "Gift Pick",
  },
  {
    name: "MyGold Tea Bags",
    size: "100 PCS",
    category: "Tea Bags",
    description:
      "Malawi's favourite tea in a generous 100-count box — premium convenience for tea lovers.",
    image: "/images/tea-bags-100.png",
    badge: "Popular",
  },
  {
    name: "MyGold Tagless Tea Bags",
    size: "25 PCS",
    category: "Tea Bags",
    description:
      "Premium tea in a convenient tagless bag format — 25 bags of pure gold for everyday enjoyment.",
    image: "/images/tea-bags-25.png",
    badge: null,
  },
  {
    name: "MyGold Tea Bags",
    size: "50 PCS",
    category: "Tea Bags",
    description:
      "A handy 50-bag box perfect for home or office — convenience without compromising on quality.",
    image: "/images/tea-bags-50.png",
    badge: null,
  },
];

const cookieProducts = [
  {
    name: "MyGold Short Bread Cookies",
    size: "150g",
    description:
      "Classic buttery shortbread cookies — perfectly crumbly and delicious with your afternoon tea.",
    image: "/images/shortbread-cookies.png",
  },
  {
    name: "MyGold Chocolate Chip Cookies",
    size: "150g",
    description:
      "Rich chocolate chip cookies baked to perfection — an irresistible treat for chocolate lovers.",
    image: "/images/chocolate-chip-cookies.png",
  },
  {
    name: "MyGold Coconut Cookies",
    size: "150g",
    description:
      "Tropical coconut-infused cookies with a delightful crunch — a taste of paradise in every bite.",
    image: "/images/coconut-cookies.png",
  },
  {
    name: "MyGold Peanut Cookies",
    size: "150g",
    description:
      "Savoury peanut cookies packed with flavour — the perfect companion to your cup of MyGold Tea.",
    image: "/images/peanut-cookies.png",
  },
  {
    name: "MyGold Cookies",
    size: "500g",
    description:
      "A generous bag of crispy, crunchy cookies — great for sharing with family and friends.",
    image: "/images/cookies-bag.png",
  },
  {
    name: "MyGold Cookies Jar",
    size: "60 PCS & 145 PCS",
    description:
      "Crispy and crunchy cookies in a premium reusable jar — always fresh and ready to enjoy.",
    image: "/images/cookies-jar.png",
  },
];

const otherProducts = [
  {
    name: "MyGold Margarine",
    size: "25g & 100g",
    description:
      "Smooth, creamy margarine that spreads perfectly — ideal for bread, toast, and baking.",
    image: "/images/margarine.png",
  },
  {
    name: "MyGold Kilombero Rice",
    size: "5kg",
    description:
      "Premium Kilombero rice in a family-size pack — perfectly fluffy for every meal.",
    image: "/images/rice-5kg.png",
  },
  {
    name: "MyGold Kilombero Rice",
    size: "500g & 2kg",
    description:
      "Premium quality Kilombero rice — perfectly portioned for everyday cooking.",
    image: "/images/rice-range.png",
  },
];

const categories = [
  "All",
  "Premium",
  "Export",
  "Tea Bags",
  "Gift",
  "Value",
  "Cookies",
  "Rice & More",
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-black-rich to-charcoal pt-32 pb-20 overflow-hidden">
        <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-teal-light/10 blur-3xl" />
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gold-light/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-teal-light hover:text-white transition-colors mb-6"
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
            Our <span className="text-gold-light">Products</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            Discover a range of exceptional tea varieties, delicious cookies,
            and everyday essentials that suit your lifestyle.
          </p>
        </div>
      </section>

      {/* Category Pills */}
      <section className="bg-cream border-b border-cream-dark sticky top-0 z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 py-5 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`flex-shrink-0 rounded-full px-5 py-2 text-sm font-medium border cursor-default transition-colors ${
                  cat === "All"
                    ? "bg-gold text-white border-gold"
                    : "bg-white text-gray border-cream-dark hover:border-gold/40"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products Overview Banner */}
      <section className="bg-cream pt-12 pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/products-overview.png"
              alt="MyGold Tea — Complete Product Range"
              width={1200}
              height={500}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
              <span className="inline-block rounded-full bg-gold/90 px-4 py-1.5 text-xs font-semibold text-white uppercase tracking-wider mb-3">
                Complete Range
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Pure African Gold
              </h2>
              <p className="mt-1 text-white/80 text-sm sm:text-base max-w-md">
                Malawi&apos;s most loved tea brand — quality in every cup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tea Products */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-black-soft">
                Tea Collection
              </h2>
              <p className="mt-1 text-gray">
                {teaProducts.length} products
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teaProducts.map((product, index) => (
              <div
                key={`${product.name}-${product.size}-${index}`}
                className="group rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-cream to-cream-dark">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {product.badge && (
                    <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-teal shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute top-4 right-4 rounded-full bg-black-rich/70 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                    {product.size}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-black-soft">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookies & Snacks */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header with Banner */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg mb-12">
            <Image
              src="/images/cookies-overview.png"
              alt="MyGold Cookies — Complete Range"
              width={1200}
              height={400}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
              <h2 className="text-3xl font-bold text-white">
                Cookies & Snacks
              </h2>
              <p className="mt-1 text-white/80">
                The perfect companions to your cup of tea
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cookieProducts.map((product) => (
              <div
                key={`${product.name}-${product.size}`}
                className="group rounded-3xl bg-cream overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-cream to-cream-dark">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-4 right-4 rounded-full bg-black-rich/70 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                    {product.size}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
                    Cookies
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-black-soft">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rice & Other Products */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header with Banner */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg mb-12">
            <Image
              src="/images/rice-overview.png"
              alt="MyGold Kilombero Rice — Complete Range"
              width={1200}
              height={400}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
              <h2 className="text-3xl font-bold text-white">
                Rice & Everyday Essentials
              </h2>
              <p className="mt-1 text-white/80">
                Premium quality products for every household
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProducts.map((product) => (
              <div
                key={`${product.name}-${product.size}`}
                className="group rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-cream to-cream-dark">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-4 right-4 rounded-full bg-black-rich/70 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                    {product.size}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                    Essential
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-black-soft">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-black-rich to-charcoal p-10 sm:p-14 text-center">
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
      </section>

      <Footer />
    </>
  );
}
