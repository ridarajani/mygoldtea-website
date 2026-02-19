"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const processSteps = [
  {
    step: "01",
    title: "Sourcing",
    description:
      "We carefully select the finest local ingredients   from premium wheat flour for our cookies to aromatic Kilombero rice from Malawi's fertile plains.",
    image: `${basePath}/images/rice-overview.png`,
  },
  {
    step: "02",
    title: "Crafting",
    description:
      "Our skilled team uses time-tested recipes and modern techniques to create cookies, tea, margarine, and snacks with consistently great taste.",
    image: `${basePath}/images/cookies-overview.png`,
  },
  {
    step: "03",
    title: "Quality Control",
    description:
      "Every batch is rigorously tested to meet our high standards   ensuring consistent quality, freshness, and flavor in every product.",
    image: `${basePath}/images/margarine.png`,
  },
  {
    step: "04",
    title: "Packaging",
    description:
      "Sealed fresh in premium packaging to lock in flavor and freshness, ensuring every product reaches you in perfect condition.",
    image: `${basePath}/images/cookies-bag.png`,
  },
];

export default function CraftQuality() {
  return (
    <section
      id="quality"
      className="relative bg-green-dark py-24 text-white overflow-hidden"
    >
      {/* Background image with warm green overlay */}
      <Image
        src={`${basePath}/images/hero.jpg`}
        alt=""
        fill
        className="object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-green-dark via-green-dark/95 to-green-dark" />

      {/* Decorative warm blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-light/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-light">
              Our Process
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
              Craft &amp; <span className="text-gold-light italic">Quality</span>
            </h2>
            <p className="mt-4 text-lg text-white/60">
              From sourcing to shelf   every step is guided by our commitment to
              delivering the finest food products to your table.
            </p>
          </div>
        </ScrollReveal>

        {/* Process Steps with Images */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((item, index) => (
            <ScrollReveal key={item.step} delay={index * 120}>
              <div className="relative group">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-green-dark/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-3xl font-bold text-gold-light/40 font-serif">
                      {item.step}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gold-light font-serif">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-white/55 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Quality Promise with product image */}
        <ScrollReveal variant="scale" delay={200}>
          <div className="mt-20 rounded-3xl border border-gold/20 bg-white/5 backdrop-blur-sm overflow-hidden">
            <div className="grid lg:grid-cols-5 items-center">
              <div className="lg:col-span-2 relative h-48 lg:h-full">
                <Image
                  src={`${basePath}/images/products-overview.png`}
                  alt="MyGold Product Range"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-dark/80 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-dark/80 to-transparent lg:hidden" />
              </div>
              <div className="lg:col-span-3 p-8 sm:p-12">
                <h3 className="text-2xl font-bold text-gold-light font-serif">
                  Our Quality Promise
                </h3>
                <p className="mt-4 max-w-2xl text-white/60 leading-relaxed">
                  MyGold is an indigenous brand of Malawi   bringing you premium cookies,
                  fine tea, quality margarine, wholesome rice, and delicious snacks. We
                  are committed to delivering exceptional food products for Malawian
                  families and food lovers worldwide.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
