import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fun Food Facts — MyGold",
  description:
    "Discover 16 fascinating food facts — from cookies and rice to margarine and snacks. Learn fun things about the foods we enjoy every day.",
};

const facts = [
  {
    emoji: "🍪",
    fact: "The chocolate chip cookie was invented by accident in 1938 by Ruth Wakefield — and became the world's most popular cookie.",
    category: "Cookies",
    size: "featured",
  },
  {
    emoji: "🌾",
    fact: "Rice feeds more than half of the world's population and is grown on every continent except Antarctica.",
    category: "Rice",
    size: "normal",
  },
  {
    emoji: "🧈",
    fact: "Margarine was invented in France in 1869 by Hippolyte Mège-Mouriès as an affordable butter alternative.",
    category: "Margarine",
    size: "normal",
  },
  {
    emoji: "🥜",
    fact: "Peanuts are not actually nuts — they are legumes that grow underground, related to beans and lentils.",
    category: "Snacks",
    size: "wide",
  },
  {
    emoji: "🇲🇼",
    fact: "Malawi's Kilombero rice is named after the Kilombero Valley and is prized for its aromatic fragrance.",
    category: "Rice",
    size: "normal",
  },
  {
    emoji: "🏆",
    fact: "The world's largest cookie ever baked weighed over 40,000 pounds and was made in Flat Rock, North Carolina in 2003.",
    category: "Record",
    size: "wide",
  },
  {
    emoji: "💪",
    fact: "Peanuts contain more protein per serving than any tree nut, making them one of the most nutritious snacks.",
    category: "Health",
    size: "normal",
  },
  {
    emoji: "🌍",
    fact: "Over 500 million metric tons of rice are consumed worldwide each year — making it the most eaten grain.",
    category: "Global",
    size: "normal",
  },
  {
    emoji: "🥥",
    fact: "Coconut cookies originated in tropical regions and have become a beloved treat across Africa and beyond.",
    category: "Cookies",
    size: "normal",
  },
  {
    emoji: "🧑‍🍳",
    fact: "Margarine is used in more baking recipes than butter worldwide due to its consistent texture and lower cost.",
    category: "Margarine",
    size: "wide",
  },
  {
    emoji: "🍚",
    fact: "In many African countries, rice is a symbol of prosperity and is served at celebrations and special occasions.",
    category: "Culture",
    size: "normal",
  },
  {
    emoji: "🌱",
    fact: "Shortbread cookies date back to 12th century Scotland and were originally made with leftover bread dough.",
    category: "History",
    size: "normal",
  },
  {
    emoji: "🏭",
    fact: "Modern margarine is made from vegetable oils and is fortified with vitamins A and D for added nutrition.",
    category: "Health",
    size: "wide",
  },
  {
    emoji: "🎉",
    fact: "December 4th is National Cookie Day — celebrated with cookie giveaways and baking events worldwide.",
    category: "Culture",
    size: "normal",
  },
  {
    emoji: "🌿",
    fact: "MyGold has been crafting quality food products in Malawi since 2003, serving families across the country.",
    category: "Global",
    size: "normal",
  },
  {
    emoji: "❤️",
    fact: "Sharing food brings people together — and MyGold products are found on family tables across Malawi every day.",
    category: "Culture",
    size: "normal",
  },
];

const categoryStyles: Record<string, { bg: string; text: string; accent: string }> = {
  Cookies: { bg: "bg-gold/10", text: "text-gold-dark", accent: "from-gold to-gold-light" },
  Rice: { bg: "bg-green/10", text: "text-green", accent: "from-green to-green-light" },
  Margarine: { bg: "bg-gold-light/20", text: "text-brown-dark", accent: "from-gold-dark to-gold" },
  Snacks: { bg: "bg-green-light/15", text: "text-green-dark", accent: "from-green-dark to-green" },
  Global: { bg: "bg-green/10", text: "text-green", accent: "from-green to-green-light" },
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
            Fun Food <span className="text-gold-light italic">Facts</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            From cookies and rice to margarine and snacks — food is more
            than just nutrition. Here are 16 fascinating facts about the
            foods we enjoy every day.
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
              16 Facts Every Food Lover Should Know
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brown-dark">
              Discover the World of <span className="text-gold-dark italic">Food</span>
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
              { label: "Years of Cookie History", value: "800+" },
              { label: "Rice Varieties Worldwide", value: "40,000+" },
              { label: "Tons of Rice Consumed Yearly", value: "500M+" },
              { label: "Countries Growing Rice", value: "100+" },
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
                Ready to Try the Best of Malawi?
              </h2>
              <p className="mt-3 text-white/70 max-w-xl mx-auto">
                Now that you know all about these amazing foods, experience the
                quality of MyGold — cookies, margarine, rice, and snacks crafted
                with pride in Malawi.
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
