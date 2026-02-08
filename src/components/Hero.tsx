import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-black-rich"
    >
      {/* Background Image */}
      <Image
        src="/images/lifestyle.jpg"
        alt="MyGold Tea"
        fill
        className="object-cover opacity-40"
        priority
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black-rich via-black-rich/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black-rich via-transparent to-black-rich/50" />

      {/* Decorative blurs */}
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="absolute bottom-20 left-10 w-[300px] h-[300px] rounded-full bg-teal/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text Content */}
          <div>
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/images/logo.png"
                alt="MyGold Tea"
                width={180}
                height={78}
                className="h-16 w-auto drop-shadow-2xl"
                priority
              />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm px-5 py-2 mb-8">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              <span className="text-sm font-medium text-gold-light tracking-wide">
                Premium African Tea Since 2003
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Your Perfect
              <br />
              Cup of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark">
                Gold
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-lg text-lg sm:text-xl text-white/60 leading-relaxed">
              Experience the exquisite aroma and taste of superior quality
              organic tea from the finest tea gardens in Africa.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#products"
                className="rounded-full bg-gradient-to-r from-gold to-gold-dark px-8 py-4 text-base font-semibold text-white shadow-lg shadow-gold/25 hover:shadow-xl hover:shadow-gold/30 transition-all"
              >
                Explore Our Teas
              </a>
              <a
                href="#brand"
                className="rounded-full border-2 border-white/20 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Our Story
              </a>
            </div>
          </div>

          {/* Right — Product Showcase */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Main product image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                <Image
                  src="/images/products-overview.png"
                  alt="MyGold Tea Complete Product Range"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating product card - top right */}
              <div className="absolute -top-6 -right-6 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 w-36 h-36">
                <Image
                  src="/images/pure-african-gold.png"
                  alt="MyGold Pure African Gold 500g"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating product card - bottom left */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 w-40 h-32">
                <Image
                  src="/images/export-quality-range.png"
                  alt="MyGold Export Quality Range"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-8 right-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3">
                <div className="text-2xl font-bold text-gold">#1</div>
                <div className="text-xs text-white/70">Malawi Tea Brand</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: "20+", label: "Years of Excellence" },
              { value: "15+", label: "Tea Products" },
              { value: "600m+", label: "Altitude Grown" },
              { value: "#1", label: "Malawi Tea Brand" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
