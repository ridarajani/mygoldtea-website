import Image from "next/image";
import Link from "next/link";

const teaProducts = [
  {
    name: "MyGold Pure African Gold",
    size: "500g",
    category: "Premium",
    description:
      "Our flagship blend — the finest export quality tea for the true connoisseur.",
    image: "/images/pure-african-gold.png",
    badge: "Flagship",
  },
  {
    name: "MyGold Export Quality",
    size: "7g – 125g",
    category: "Export",
    description:
      "A supreme export quality blend with rich aroma and an unforgettable taste.",
    image: "/images/export-quality-range.png",
    badge: "Best Seller",
  },
  {
    name: "MyGold Tea Bags",
    size: "25 – 100 PCS",
    category: "Tea Bags",
    description:
      "The same premium flavor in a convenient tagless bag — perfect for every day.",
    image: "/images/tea-bags-100.png",
    badge: null,
  },
  {
    name: "MyGold Economy Tea",
    size: "50g & 125g",
    category: "Value",
    description:
      "Great quality tea at an affordable price — bringing gold to every home.",
    image: "/images/economy-range.png",
    badge: null,
  },
  {
    name: "MyGold Tea Jar",
    size: "200g",
    category: "Gift",
    description:
      "Beautifully packaged in a reusable jar — ideal for gifting or home display.",
    image: "/images/tea-jar.png",
    badge: "Gift Pick",
  },
  {
    name: "MyGold Cookies",
    size: "150g – 500g",
    category: "Snacks",
    description:
      "Delicious cookies crafted to pair perfectly with tea — a snack that completes the experience.",
    image: "/images/cookies-overview.png",
    badge: null,
  },
];

export default function ProductHighlights() {
  return (
    <section id="products" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal">
            Our Collection
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-black-soft">
            Discover Our <span className="text-gold-dark">Product Range</span>
          </h2>
          <p className="mt-4 text-lg text-gray">
            Discover a range of exceptional tea varieties and snacks that suit
            your taste preference.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teaProducts.map((product) => (
            <div
              key={product.name}
              className="group rounded-3xl bg-cream overflow-hidden border border-cream-dark hover:border-teal/30 hover:shadow-2xl hover:shadow-teal/5 transition-all duration-500"
            >
              {/* Product Image */}
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-cream to-cream-dark">
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

              {/* Product Info */}
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                  {product.category}
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

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-white font-semibold hover:bg-gold-dark transition-colors shadow-lg hover:shadow-xl"
          >
            View All Products
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
