import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fun Tea Facts — MyGold Tea",
  description:
    "Discover 16 fascinating tea facts — from ancient origins to modern-day surprises. Learn why tea is the world's most loved beverage.",
};

const facts = [
  {
    emoji: "🌍",
    fact: "Tea is the second most consumed beverage in the world, after water.",
    category: "Global",
    size: "featured",
  },
  {
    emoji: "🌱",
    fact: "All types of tea come from the same plant, Camellia sinensis.",
    category: "Science",
    size: "normal",
  },
  {
    emoji: "🍵",
    fact: "There are four main types of tea: black, green, oolong, and white.",
    category: "Varieties",
    size: "normal",
  },
  {
    emoji: "🏛️",
    fact: "Tea was discovered in China over 5,000 years ago.",
    category: "History",
    size: "wide",
  },
  {
    emoji: "💊",
    fact: "In ancient China, tea was used for medicinal purposes.",
    category: "Health",
    size: "normal",
  },
  {
    emoji: "💰",
    fact: "The world's most expensive tea is Da Hong Pao, a rare Chinese tea that can sell for up to $1.2 million per kilogram.",
    category: "Record",
    size: "wide",
  },
  {
    emoji: "🛡️",
    fact: "Tea contains antioxidants, which are beneficial for health.",
    category: "Health",
    size: "normal",
  },
  {
    emoji: "❤️",
    fact: "Tea can help to reduce the risk of heart disease, stroke, and certain types of cancer.",
    category: "Health",
    size: "normal",
  },
  {
    emoji: "🇨🇳",
    fact: "The largest tea-producing country in the world is China.",
    category: "Global",
    size: "normal",
  },
  {
    emoji: "🥛",
    fact: "The practice of adding milk to tea was popularized in 18th century England.",
    category: "History",
    size: "wide",
  },
  {
    emoji: "🇺🇸",
    fact: "The first tea bags were invented in the United States in 1908 by Thomas Sullivan.",
    category: "History",
    size: "normal",
  },
  {
    emoji: "🇹🇷",
    fact: "The world's largest tea-drinking nation is Turkey.",
    category: "Global",
    size: "normal",
  },
  {
    emoji: "⚓",
    fact: "The Boston Tea Party was a political protest against British taxes on tea in 1773 that played a role in the American Revolution.",
    category: "History",
    size: "wide",
  },
  {
    emoji: "🇯🇵",
    fact: "In Japan, there is a traditional tea ceremony called Chanoyu.",
    category: "Culture",
    size: "normal",
  },
  {
    emoji: "🏪",
    fact: "The world's oldest tea company, Twinings, was founded in London in 1706.",
    category: "History",
    size: "normal",
  },
  {
    emoji: "🇮🇳",
    fact: "In India, masala chai is a popular tea beverage made with spices like cinnamon, ginger, and cardamom.",
    category: "Culture",
    size: "normal",
  },
];

const categoryStyles: Record<string, { bg: string; text: string; accent: string }> = {
  Global: { bg: "bg-green/10", text: "text-green", accent: "from-green to-green-light" },
  Science: { bg: "bg-green-light/15", text: "text-green-dark", accent: "from-green-dark to-green" },
  Varieties: { bg: "bg-gold/10", text: "text-gold-dark", accent: "from-gold to-gold-light" },
  History: { bg: "bg-gold-light/20", text: "text-brown-dark", accent: "from-gold-dark to-gold" },
  Health: { bg: "bg-green/10", text: "text-green-dark", accent: "from-green to-green-dark" },
  Record: { bg: "bg-gold/15", text: "text-gold-dark", accent: "from-gold to-gold-dark" },
  Culture: { bg: "bg-beige", text: "text-brown-dark", accent: "from-gold-dark to-green" },
};

export default function FunFactsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Banner — matches Products page style */}
      <section className="relative bg-gradient-to-br from-green-dark to-green pt-32 pb-20 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-green-light/10 blur-3xl" />
        <div className="absolute bottom-0 left-20 w-56 h-56 rounded-full bg-gold-light/10 blur-3xl" />
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
            Fun Tea <span className="text-gold-light italic">Facts</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            Tea is more than just a drink — it&apos;s a 5,000-year-old story
            of culture, health, and discovery. Here are 16 fascinating facts
            every tea lover should know.
          </p>
        </div>
      </section>

      {/* Featured Fact */}
      <section className="bg-green-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-dark via-green-dark to-green-dark/95" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/8 blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-green-light/8 blur-[150px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="group rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-sm p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8 hover:border-gold-light/20 transition-all duration-500">
            <div className="flex-shrink-0 w-24 h-24 rounded-3xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-5xl shadow-xl shadow-gold/20 group-hover:scale-110 transition-transform duration-500">
              {facts[0].emoji}
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-light">Featured Fact</span>
                <span className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-gold-light/40 to-transparent" />
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-relaxed">
                {facts[0].fact}
              </p>
            </div>
            <span className="hidden lg:block text-[120px] font-bold text-white/[0.03] leading-none select-none">01</span>
          </div>
        </div>
      </section>

      {/* Facts Grid */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-green">
              16 Facts Every Tea Lover Should Know
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brown-dark">
              Discover the World of <span className="text-gold-dark italic">Tea</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-5">
            {facts.slice(1).map((item, index) => {
              const style = categoryStyles[item.category] || { bg: "bg-cream", text: "text-brown", accent: "from-gold to-green" };
              const num = String(index + 2).padStart(2, "0");
              const isWide = item.size === "wide";

              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl bg-white border border-cream-dark overflow-hidden hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-0.5 transition-all duration-500 ${
                    isWide ? "sm:col-span-2" : ""
                  }`}
                >
                  {/* Top accent line */}
                  <div className={`h-1 bg-gradient-to-r ${style.accent}`} />

                  <div className={`p-6 ${isWide ? "sm:flex sm:items-start sm:gap-6" : ""}`}>
                    {/* Emoji + Number */}
                    <div className={`flex items-center gap-4 mb-4 ${isWide ? "sm:mb-0 sm:flex-col sm:items-center sm:gap-2" : ""}`}>
                      <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${style.bg} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500`}>
                        {item.emoji}
                      </div>
                      <span className="text-[40px] font-bold text-cream-dark/80 leading-none select-none font-serif">
                        {num}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <span className={`inline-block text-[11px] font-bold uppercase tracking-wider ${style.text} mb-2`}>
                        {item.category}
                      </span>
                      <p className="text-brown leading-relaxed">
                        {item.fact}
                      </p>
                    </div>
                  </div>

                  {/* Bottom hover accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${style.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              );
            })}
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Years of Tea History", value: "5,000+" },
              { label: "Types of Tea Worldwide", value: "1,500+" },
              { label: "Daily Cups Consumed", value: "3.7B" },
              { label: "Countries Growing Tea", value: "50+" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-gradient-to-br from-green-dark to-green p-5 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gold-light">{stat.value}</div>
                <div className="mt-1 text-xs sm:text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 relative rounded-3xl bg-gradient-to-r from-green-dark to-green p-10 sm:p-14 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold-light/10 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-green-light/10 blur-[60px]" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Ready to Taste the Best Tea in Africa?
              </h2>
              <p className="mt-3 text-white/70 max-w-xl mx-auto">
                Now that you know all about tea, experience the supreme blend of
                MyGold Tea — straight from the finest gardens of Malawi.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/products"
                  className="rounded-full bg-gold px-8 py-3.5 text-white font-semibold hover:bg-gold-dark transition-colors shadow-lg hover:shadow-xl"
                >
                  View Our Products
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border-2 border-white/25 px-8 py-3.5 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
