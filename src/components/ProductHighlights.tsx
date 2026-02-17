import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const featuredProducts = [
  {
    name: "MyGold Shortbread Cookies",
    size: "150g – 500g",
    category: "Cookies",
    description:
      "Crispy, buttery shortbread cookies baked to perfection — a family favorite for every occasion.",
    image: `${basePath}/images/shortbread-cookies-removebg-preview.png`,
    badge: "Best Seller",
  },
  {
    name: "MyGold Chocolate Chip Cookies",
    size: "150g – 500g",
    category: "Cookies",
    description:
      "Rich chocolate chips in every bite — the perfect treat for chocolate lovers.",
    image: `${basePath}/images/chocolate-chip-cookies-removebg-preview.png`,
    badge: "Popular",
  },
  {
    name: "MyGold Margarine",
    size: "250g – 1kg",
    category: "Margarine",
    description:
      "Smooth, creamy margarine ideal for cooking, baking, and spreading — quality you can taste.",
    image: `${basePath}/images/margarine-removebg-preview.png`,
    badge: "Essential",
  },
  {
    name: "MyGold Kilombero Rice",
    size: "5kg",
    category: "Rice",
    description:
      "Premium Kilombero rice grown in Malawi's fertile plains — fluffy, aromatic, and wholesome.",
    image: `${basePath}/images/rice-5kg-removebg-preview.png`,
    badge: "Premium",
  },
  {
    name: "MyGold Coconut Cookies",
    size: "150g – 500g",
    category: "Cookies",
    description:
      "Delightful coconut-flavored cookies with a tropical twist — crunchy and irresistible.",
    image: `${basePath}/images/coconut-cookies-removebg-preview.png`,
    badge: null,
  },
  {
    name: "MyGold Peanut Cookies",
    size: "150g – 500g",
    category: "Snacks",
    description:
      "Roasted peanut cookies packed with protein and flavor — a nutritious snack for the whole family.",
    image: `${basePath}/images/peanut-cookies-removebg-preview.png`,
    badge: null,
  },
];

export default function ProductHighlights() {
  return (
    <section id="products" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-green">
            Our Collection
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-brown-dark">
            Discover Our <span className="text-gold-dark italic">Product Range</span>
          </h2>
          <p className="mt-4 text-lg text-brown">
            Explore our range of premium cookies, quality margarine, wholesome
            rice, and delicious snacks crafted for every taste.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.name}
              className="group rounded-3xl bg-cream overflow-hidden border border-cream-dark hover:border-gold/30 hover:shadow-xl transition-all duration-500"
            >
              {/* Product Image */}
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-cream to-beige">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-green shadow-sm">
                    {product.badge}
                  </span>
                )}
                <span className="absolute top-4 right-4 rounded-full bg-green-dark/70 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                  {product.size}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-green">
                  {product.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-brown-dark">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-brown leading-relaxed">
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
            className="inline-flex items-center gap-2 rounded-full bg-green px-8 py-3.5 text-white font-semibold hover:bg-green-dark transition-colors shadow-lg shadow-green/15 hover:shadow-xl"
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
