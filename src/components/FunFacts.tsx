import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const facts = [
  {
    emoji: "🍪",
    fact: "The chocolate chip cookie was invented by accident in 1938 — and became the world's most popular cookie.",
    highlight: true,
    image: `${basePath}/images/cookies-overview.png`,
  },
  {
    emoji: "🌾",
    fact: "Rice feeds more than half of the world's population and is a staple in over 100 countries.",
    highlight: false,
    image: `${basePath}/images/rice-overview.png`,
  },
  {
    emoji: "🧈",
    fact: "Margarine was originally invented in France in 1869 as an affordable alternative to butter.",
    highlight: false,
    image: `${basePath}/images/margarine.png`,
  },
  {
    emoji: "🥜",
    fact: "Peanuts are one of the most protein-rich snacks — containing more protein per serving than any tree nut.",
    highlight: true,
    image: `${basePath}/images/peanuts.jpg`,
  },
  {
    emoji: "🇲🇼",
    fact: "Malawi's Kilombero rice is prized for its aromatic fragrance and fluffy texture when cooked.",
    highlight: false,
    image: `${basePath}/images/rice-5kg.png`,
  },
  {
    emoji: "🏆",
    fact: "MyGold has been crafting quality food products for Malawian families for over 20 years.",
    highlight: false,
    image: `${basePath}/images/products-overview.png`,
  },
];

export default function FunFacts() {
  return (
    <section id="funfacts" className="relative bg-green-dark py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-dark via-green-dark to-green/80" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-green-light/10 blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gold-light/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-light">
            Did You Know?
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Fun Food <span className="text-gold-light italic">Facts</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            From cookies to rice, here are some fascinating facts about
            the foods we love and the products we make.
          </p>
        </div>

        {/* Featured fact — large card */}
        <div className="mt-14 rounded-3xl overflow-hidden border border-white/10 group">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <Image
                src={facts[0].image}
                alt={facts[0].fact}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-dark/50 lg:bg-gradient-to-l lg:from-green-dark/30 lg:to-transparent" />
            </div>
            <div className="bg-white/[0.07] backdrop-blur-sm p-8 sm:p-10 flex flex-col justify-center">
              <span className="text-5xl mb-5">{facts[0].emoji}</span>
              <p className="text-xl sm:text-2xl font-semibold text-white leading-relaxed">
                {facts[0].fact}
              </p>
              <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-gold to-gold-light rounded-full" />
            </div>
          </div>
        </div>

        {/* Remaining facts grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {facts.slice(1).map((item, index) => (
            <div
              key={item.fact}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-gold-light/30 transition-all duration-500"
            >
              {/* Image background */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.fact}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-dark via-green-dark/70 to-green-dark/30" />

                {/* Number */}
                <div className="absolute top-3 right-3">
                  <span className="text-xs font-bold text-white/30 font-serif">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                </div>

                {/* Emoji */}
                <div className="absolute top-3 left-3">
                  <span className="text-2xl">{item.emoji}</span>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white/[0.07] backdrop-blur-sm px-4 py-4">
                <p className="text-[13px] leading-relaxed text-white/75">
                  {item.fact}
                </p>
              </div>

              {/* Bottom accent */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                  item.highlight
                    ? "from-gold via-gold-light to-gold-dark"
                    : "from-gold-light/60 via-green-light to-green"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Link to full page */}
        <div className="mt-14 text-center">
          <p className="text-white/40 mb-5">
            There&apos;s always something new to discover about the foods we enjoy
            every day.
          </p>
          <a
            href="/fun-facts"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-white font-semibold shadow-lg shadow-gold/20 hover:bg-gold-dark hover:shadow-xl transition-all"
          >
            Explore All Fun Facts
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
