const facts = [
  {
    emoji: "🌍",
    fact: "Tea is the second most consumed beverage in the world, after water.",
    highlight: true,
  },
  {
    emoji: "🌱",
    fact: "All types of tea come from the same plant — Camellia sinensis.",
    highlight: false,
  },
  {
    emoji: "🏛️",
    fact: "Tea was discovered in China over 5,000 years ago.",
    highlight: false,
  },
  {
    emoji: "💰",
    fact: "The world's most expensive tea, Da Hong Pao, sells for up to $1.2M per kg.",
    highlight: true,
  },
  {
    emoji: "❤️",
    fact: "Tea can help reduce the risk of heart disease, stroke, and certain cancers.",
    highlight: false,
  },
  {
    emoji: "🇹🇷",
    fact: "The world's largest tea-drinking nation is Turkey, not England!",
    highlight: false,
  },
];

export default function FunFacts() {
  return (
    <section id="funfacts" className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal">
            Did You Know?
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-black-soft">
            Fun Tea <span className="text-gold">Facts</span>
          </h2>
          <p className="mt-4 text-lg text-gray">
            Tea has been shown to have various health benefits. Here are some
            fascinating facts about the world&apos;s favorite hot drink.
          </p>
        </div>

        {/* Facts Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((item, index) => (
            <div
              key={item.fact}
              className={`group relative rounded-3xl p-7 transition-all duration-500 overflow-hidden ${
                item.highlight
                  ? "bg-black-rich text-white hover:shadow-2xl hover:shadow-gold/10"
                  : "bg-cream border border-cream-dark hover:border-teal/30 hover:shadow-xl"
              }`}
            >
              {/* Subtle gradient accent for highlighted cards */}
              {item.highlight && (
                <>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal/10 rounded-full blur-2xl" />
                </>
              )}

              <div className="relative z-10">
                {/* Number + Emoji row */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`text-4xl ${
                      item.highlight
                        ? "grayscale-0"
                        : "grayscale-0"
                    }`}
                  >
                    {item.emoji}
                  </span>
                  <span
                    className={`text-sm font-bold ${
                      item.highlight ? "text-gold/30" : "text-cream-dark"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p
                  className={`leading-relaxed text-[15px] ${
                    item.highlight ? "text-white/80" : "text-gray"
                  }`}
                >
                  {item.fact}
                </p>
              </div>

              {/* Bottom accent line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                  item.highlight
                    ? "from-gold via-gold-light to-gold-dark"
                    : "from-teal via-teal-light to-teal-dark"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Link to full page */}
        <div className="mt-14 text-center">
          <p className="text-gray-light mb-5">
            There are over 1,500 types of tea in the world — and so much more to
            discover.
          </p>
          <a
            href="/fun-facts"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-teal-dark px-8 py-3.5 text-white font-semibold shadow-lg shadow-teal/20 hover:shadow-xl hover:shadow-teal/25 transition-all"
          >
            Explore All 16 Tea Facts
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
