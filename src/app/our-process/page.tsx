import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Our Process    MyGold",
  description:
    "Discover how MyGold tea and cookies are made    from sourcing the finest tea leaves in Thyolo and Mulanje to crafting cookies with local ingredients in our Lilongwe facility.",
};

const teaSteps = [
  {
    step: "01",
    title: "Tea Leaf Sourcing",
    location: "Hills of Thyolo & Mulanje",
    description:
      "Our journey begins in the lush highlands of Thyolo and Mulanje    one of Africa's premier tea-growing regions. At elevations above 600m, the cool climate and volcanic soil produce the finest tea leaves on the continent.",
    image: `${basePath}/images/pure-african-gold-removebg-preview.png`,
    color: "bg-green",
  },
  {
    step: "02",
    title: "Processing & Withering",
    location: "Lilongwe Facility",
    description:
      "Freshly picked leaves are transported to our Lilongwe facility. Here, careful withering reduces moisture while preserving natural flavors and essential oils within each leaf.",
    image: `${basePath}/images/export-quality-range-removebg-preview.png`,
    color: "bg-gold-dark",
  },
  {
    step: "03",
    title: "Blending & Tasting",
    location: "Expert Tea Masters",
    description:
      "Our tea masters blend batches to create the signature MyGold taste. Each blend is evaluated for color, aroma, body, and flavor    science meets art for consistently excellent tea.",
    image: `${basePath}/images/tea-jar-removebg-preview.png`,
    color: "bg-green-dark",
  },
  {
    step: "04",
    title: "Packaging",
    location: "Sealed for Freshness",
    description:
      "Tea is packaged using food-grade materials that lock in freshness. From loose-leaf packs and tea bags to premium jars    every package is date-stamped and batch-coded.",
    image: `${basePath}/images/tea-bags-100-removebg-preview.png`,
    color: "bg-gold",
  },
  {
    step: "05",
    title: "Distribution",
    location: "Nationwide Delivery",
    description:
      "From Lilongwe, our tea reaches supermarkets, shops, and traders across Malawi. Our logistics network ensures fresh products in every corner of the country.",
    image: `${basePath}/images/economy-range-removebg-preview.png`,
    color: "bg-green",
  },
];

const cookieSteps = [
  {
    step: "01",
    title: "Ingredient Sourcing",
    location: "Local Markets of Malawi",
    description:
      "We source premium wheat flour, fresh eggs, sugar, peanuts, and coconut from local markets. We also import high-quality margarine for that perfect buttery crumble in every cookie.",
    image: `${basePath}/images/cookies-overview-removebg-preview.png`,
    color: "bg-gold-dark",
  },
  {
    step: "02",
    title: "Mixing & Dough Prep",
    location: "Lilongwe Facility",
    description:
      "Our skilled bakers follow time-tested recipes to create perfect dough for each variety    shortbread, chocolate chip, coconut, and peanut. Imported margarine is blended with local ingredients.",
    image: `${basePath}/images/shortbread-cookies-removebg-preview.png`,
    color: "bg-green",
  },
  {
    step: "03",
    title: "Baking & Quality Control",
    location: "Precision Baking",
    description:
      "Each batch is baked at precisely controlled temperatures for that golden color and perfect crunch. Our QC team inspects every batch    only the best make it through.",
    image: `${basePath}/images/chocolate-chip-cookies-removebg-preview.png`,
    color: "bg-gold",
  },
  {
    step: "04",
    title: "Packaging & Sealing",
    location: "Fresh & Secure",
    description:
      "Cookies are packaged in moisture-proof materials to maintain crunch and freshness. Available in 100g packs, 500g bags, and premium 60-piece and 145-piece jars.",
    image: `${basePath}/images/cookies-jar-removebg-preview.png`,
    color: "bg-green-dark",
  },
  {
    step: "05",
    title: "Distribution",
    location: "Nationwide Delivery",
    description:
      "MyGold cookies reach supermarkets, grocery stores, and traders throughout Malawi    from Lilongwe and Blantyre to local shops in smaller towns.",
    image: `${basePath}/images/cookies-bag-removebg-preview.png`,
    color: "bg-gold-dark",
  },
];

export default function OurProcessPage() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-green-dark to-green pt-32 pb-20 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-green-light/10 blur-3xl" />
        <div className="absolute bottom-0 left-20 w-56 h-56 rounded-full bg-gold-light/10 blur-3xl" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gold-light hover:text-white transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Our <span className="text-gold-light italic">Process</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            From the tea hills of Thyolo and Mulanje to local ingredient markets
               discover how MyGold products are crafted with care in our
            Lilongwe facility and delivered to families across Malawi.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-cream py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: "200+", label: "Staff Members", icon: "👥" },
              { value: "Lilongwe", label: "Production Facility", icon: "🏭" },
              { value: "18+", label: "Years of Excellence", icon: "🏆" },
              { value: "Nationwide", label: "Distribution Network", icon: "🚛" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white border border-cream-dark p-5 text-center hover:shadow-lg hover:border-gold/20 transition-all duration-300"
              >
                <span className="text-2xl">{stat.icon}</span>
                <div className="mt-2 text-xl sm:text-2xl font-bold text-gold-dark">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-brown">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TEA PROCESS ═══════════════ */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-green/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gold/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-14">
            <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-gradient-to-br from-green to-green-dark flex items-center justify-center shadow-lg shadow-green/20">
              <span className="text-4xl">🍵</span>
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-green">
                Tea Manufacturing
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-bold text-brown-dark">
                From Thyolo Hills to Your Cup
              </h2>
            </div>
          </div>

          {/* Visual flow    alternating image/text rows */}
          <div className="space-y-6">
            {teaSteps.map((item, i) => (
              <div key={item.step} className="group">
                <div
                  className={`rounded-3xl overflow-hidden border border-cream-dark hover:border-gold/20 hover:shadow-xl transition-all duration-500 ${
                    i % 2 === 0 ? "bg-cream" : "bg-white"
                  }`}
                >
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Image side */}
                    <div
                      className={`lg:col-span-2 relative h-56 lg:h-auto min-h-[220px] overflow-hidden bg-gradient-to-br from-cream to-beige ${
                        i % 2 !== 0 ? "lg:order-2" : ""
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <div className={`w-10 h-10 rounded-xl ${item.color} text-white flex items-center justify-center text-sm font-bold shadow-md`}>
                          {item.step}
                        </div>
                      </div>
                    </div>

                    {/* Content side */}
                    <div
                      className={`lg:col-span-3 p-8 sm:p-10 flex flex-col justify-center ${
                        i % 2 !== 0 ? "lg:order-1" : ""
                      }`}
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-brown-dark mb-3">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-4 h-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm font-medium text-green-dark">
                          {item.location}
                        </span>
                      </div>
                      <p className="text-brown leading-relaxed text-[15px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Flow connector arrow */}
                {i < teaSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="flex flex-col items-center">
                      <div className="w-px h-4 bg-gradient-to-b from-green/40 to-green/20" />
                      <svg className="w-5 h-5 text-green/40" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tea product showcase strip */}
          <div className="mt-14 rounded-2xl bg-gradient-to-r from-green-dark to-green p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex -space-x-4">
                {[
                  `${basePath}/images/pure-african-gold-removebg-preview.png`,
                  `${basePath}/images/export-quality-range-removebg-preview.png`,
                  `${basePath}/images/tea-bags-100-removebg-preview.png`,
                  `${basePath}/images/tea-jar-removebg-preview.png`,
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0"
                  >
                    <Image src={src} alt="Tea product" width={64} height={64} className="w-full h-full object-contain p-1" />
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <p className="text-white font-semibold">
                  7 Premium Tea Products
                </p>
                <p className="text-white/60 text-sm">
                  From loose leaf to tea bags    all crafted through this process
                </p>
              </div>
              <Link
                href="/products"
                className="sm:ml-auto rounded-full bg-gold px-6 py-2.5 text-sm text-white font-semibold hover:bg-gold-dark transition-colors"
              >
                View Tea Range
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ COOKIE PROCESS ═══════════════ */}
      <section className="relative bg-cream py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-green/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-14">
            <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg shadow-gold/20">
              <span className="text-4xl">🍪</span>
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
                Cookie Manufacturing
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-bold text-brown-dark">
                From Local Markets to Your Table
              </h2>
            </div>
          </div>

          {/* Visual flow    alternating image/text rows */}
          <div className="space-y-6">
            {cookieSteps.map((item, i) => (
              <div key={item.step} className="group">
                <div
                  className={`rounded-3xl overflow-hidden border border-cream-dark hover:border-gold/20 hover:shadow-xl transition-all duration-500 ${
                    i % 2 === 0 ? "bg-white" : "bg-cream"
                  }`}
                >
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Image side */}
                    <div
                      className={`lg:col-span-2 relative h-56 lg:h-auto min-h-[220px] overflow-hidden bg-gradient-to-br from-beige to-cream ${
                        i % 2 !== 0 ? "lg:order-2" : ""
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <div className={`w-10 h-10 rounded-xl ${item.color} text-white flex items-center justify-center text-sm font-bold shadow-md`}>
                          {item.step}
                        </div>
                      </div>
                    </div>

                    {/* Content side */}
                    <div
                      className={`lg:col-span-3 p-8 sm:p-10 flex flex-col justify-center ${
                        i % 2 !== 0 ? "lg:order-1" : ""
                      }`}
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-brown-dark mb-3">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-4 h-4 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm font-medium text-gold-dark">
                          {item.location}
                        </span>
                      </div>
                      <p className="text-brown leading-relaxed text-[15px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Flow connector arrow */}
                {i < cookieSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="flex flex-col items-center">
                      <div className="w-px h-4 bg-gradient-to-b from-gold/40 to-gold/20" />
                      <svg className="w-5 h-5 text-gold/40" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Cookie product showcase strip */}
          <div className="mt-14 rounded-2xl bg-gradient-to-r from-gold-dark to-gold p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex -space-x-4">
                {[
                  `${basePath}/images/shortbread-cookies-removebg-preview.png`,
                  `${basePath}/images/chocolate-chip-cookies-removebg-preview.png`,
                  `${basePath}/images/coconut-cookies-removebg-preview.png`
                
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0"
                  >
                    <Image src={src} alt="Cookie product" width={64} height={64} className="w-full h-full object-contain p-1" />
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <p className="text-white font-semibold">
                  6 Delicious Cookie Varieties
                </p>
                <p className="text-white/60 text-sm">
                  Shortbread, chocolate chip, coconut, peanut & more
                </p>
              </div>
              <Link
                href="/products"
                className="sm:ml-auto rounded-full bg-green-dark px-6 py-2.5 text-sm text-white font-semibold hover:bg-green transition-colors"
              >
                View Cookies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TEAM SECTION ═══════════════ */}
      <section className="relative bg-green-dark py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-dark via-green-dark to-green/80" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/10 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-green-light/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-gold-light">
                Our Team
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white leading-tight">
                Over 200 Dedicated{" "}
                <span className="text-gold-light italic">Staff Members</span>
              </h2>
              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                Behind every MyGold product is a team of over 200 passionate
                professionals    from tea pickers in the southern highlands to
                skilled bakers and quality inspectors at our Lilongwe facility.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Experienced tea pickers from Thyolo & Mulanje",
                  "Skilled bakers and food technologists",
                  "Quality control inspectors on every line",
                  "Dedicated logistics and distribution team",
                  "Committed to uplifting local communities",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold-light/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "200+", label: "Employees", icon: "👥" },
                { value: "18+", label: "Years Operating", icon: "📅" },
                { value: "5", label: "Product Lines", icon: "📦" },
                { value: "1000s", label: "Families Daily", icon: "👨‍👩‍👧‍👦" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/[0.07] backdrop-blur-sm border border-white/10 p-6 text-center hover:bg-white/10 transition-colors"
                >
                  <span className="text-2xl">{stat.icon}</span>
                  <div className="mt-2 text-2xl font-bold text-gold-light">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-green-dark to-green p-10 sm:p-14 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold-light/10 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-green-light/10 blur-[60px]" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Experience the Quality of MyGold
              </h2>
              <p className="mt-3 text-white/70 max-w-xl mx-auto">
                Now that you know how our products are made, taste the
                difference for yourself.
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
