import Image from "next/image";

const processSteps = [
  {
    step: "01",
    title: "Sourcing",
    description:
      "Hand-selected tea leaves from the finest tea gardens of Malawi, grown at 600+ meters altitude in nutrient-rich volcanic soil.",
    image: "/images/economy-range.png",
  },
  {
    step: "02",
    title: "Blending",
    description:
      "Our highly qualified staff craft the supreme blend using time-honored techniques perfected over two decades of expertise.",
    image: "/images/export-quality-range.png",
  },
  {
    step: "03",
    title: "Quality Control",
    description:
      "Every batch is tested to meet our exacting export quality standards, ensuring consistent aroma, color, and taste.",
    image: "/images/tea-bags-100.png",
  },
  {
    step: "04",
    title: "Packaging",
    description:
      "Sealed fresh in premium packaging to preserve the full-bodied flavor and exquisite aroma until it reaches your cup.",
    image: "/images/tea-bags-25.png",
  },
];

export default function CraftQuality() {
  return (
    <section
      id="quality"
      className="relative bg-black-rich py-24 text-white overflow-hidden"
    >
      {/* Background image with overlay */}
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        className="object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black-rich via-black-rich/95 to-black-rich" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/8 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-light">
            Our Process
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Craft & <span className="text-gold">Quality</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            From garden to cup — every step is guided by our commitment to
            delivering the finest tea experience.
          </p>
        </div>

        {/* Process Steps with Images */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((item, index) => (
            <div key={item.step} className="relative group">
              {/* Connector line (desktop) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full h-px bg-gold/20 -translate-x-1/2 z-0" />
              )}

              <div className="relative z-10">
                {/* Step Image */}
                <div className="rounded-2xl overflow-hidden mb-5 h-40 relative border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-3xl font-bold text-gold/40">
                    {item.step}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gold">
                  {item.title}
                </h3>
                <p className="mt-3 text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Promise with product image */}
        <div className="mt-20 rounded-3xl border border-gold/20 bg-white/5 backdrop-blur-sm overflow-hidden">
          <div className="grid lg:grid-cols-5 items-center">
            <div className="lg:col-span-2 relative h-48 lg:h-full">
              <Image
                src="/images/products-overview.png"
                alt="MyGold Tea Product Range"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black-rich/80 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-black-rich/80 to-transparent lg:hidden" />
            </div>
            <div className="lg:col-span-3 p-8 sm:p-12">
              <h3 className="text-2xl font-bold text-gold">
                Our Quality Promise
              </h3>
              <p className="mt-4 max-w-2xl text-white/60 leading-relaxed">
                MyGold Tea is an indigenous product of Malawi — the supreme blend of
                tea of which the smell and taste give a feeling of refreshingness to
                anyone who drinks it. We are committed to making this unique export
                quality blend for Malawian people and tea lovers worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
