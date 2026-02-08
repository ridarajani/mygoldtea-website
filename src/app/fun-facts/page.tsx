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
  },
  {
    emoji: "🌱",
    fact: "All types of tea come from the same plant, Camellia sinensis.",
    category: "Science",
  },
  {
    emoji: "🍵",
    fact: "There are four main types of tea: black, green, oolong, and white.",
    category: "Varieties",
  },
  {
    emoji: "🏛️",
    fact: "Tea was discovered in China over 5,000 years ago.",
    category: "History",
  },
  {
    emoji: "💊",
    fact: "In ancient China, tea was used for medicinal purposes.",
    category: "Health",
  },
  {
    emoji: "💰",
    fact: "The world's most expensive tea is Da Hong Pao, a rare Chinese tea that can sell for up to $1.2 million per kilogram.",
    category: "Record",
  },
  {
    emoji: "🛡️",
    fact: "Tea contains antioxidants, which are beneficial for health.",
    category: "Health",
  },
  {
    emoji: "❤️",
    fact: "Tea can help to reduce the risk of heart disease, stroke, and certain types of cancer.",
    category: "Health",
  },
  {
    emoji: "🇨🇳",
    fact: "The largest tea-producing country in the world is China.",
    category: "Global",
  },
  {
    emoji: "🥛",
    fact: "The practice of adding milk to tea was popularized in 18th century England.",
    category: "History",
  },
  {
    emoji: "🇺🇸",
    fact: "The first tea bags were invented in the United States in 1908 by Thomas Sullivan.",
    category: "History",
  },
  {
    emoji: "🇹🇷",
    fact: "The world's largest tea-drinking nation is Turkey.",
    category: "Global",
  },
  {
    emoji: "⚓",
    fact: "The Boston Tea Party was a political protest against British taxes on tea in 1773 that played a role in the American Revolution.",
    category: "History",
  },
  {
    emoji: "🇯🇵",
    fact: "In Japan, there is a traditional tea ceremony called Chanoyu.",
    category: "Culture",
  },
  {
    emoji: "🏪",
    fact: "The world's oldest tea company, Twinings, was founded in London in 1706.",
    category: "History",
  },
  {
    emoji: "🇮🇳",
    fact: "In India, masala chai is a popular tea beverage made with spices like cinnamon, ginger, and cardamom.",
    category: "Culture",
  },
];

const categoryColors: Record<string, string> = {
  Global: "bg-blue-50 text-blue-700 border-blue-200",
  Science: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Varieties: "bg-purple-50 text-purple-700 border-purple-200",
  History: "bg-amber-50 text-amber-700 border-amber-200",
  Health: "bg-rose-50 text-rose-700 border-rose-200",
  Record: "bg-yellow-50 text-yellow-700 border-yellow-200",
  Culture: "bg-indigo-50 text-indigo-700 border-indigo-200",
};

export default function FunFactsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-black-rich to-charcoal pt-32 pb-20">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-teal-light/15 blur-3xl" />
        <div className="absolute bottom-0 left-20 w-56 h-56 rounded-full bg-gold-light/10 blur-3xl" />
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
            Fun Tea <span className="text-gold-light">Facts</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            Tea is more than just a drink — it&apos;s a 5,000-year-old story
            of culture, health, and discovery. Here are 16 fascinating facts
            every tea lover should know.
          </p>
        </div>
      </section>

      {/* Facts Grid */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {facts.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-cream-dark bg-white p-6 hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5 transition-all flex flex-col"
              >
                {/* Number + Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-teal/40">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${categoryColors[item.category] || "bg-gray-50 text-gray-700 border-gray-200"}`}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Emoji */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.emoji}
                </div>

                {/* Fact */}
                <p className="text-gray leading-relaxed flex-1">
                  {item.fact}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-black-rich to-charcoal p-10 text-center">
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
                className="rounded-full bg-teal px-8 py-3 text-white font-semibold hover:bg-teal-dark transition-colors"
              >
                View Our Products
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-teal-light/30 px-8 py-3 text-white font-semibold hover:bg-white/10 transition-colors"
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
