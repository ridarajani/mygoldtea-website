import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Full-screen background image */}
      <Image
        src="/images/lifestyle.jpg"
        alt="MyGold Tea"
        fill
        className="object-cover"
        priority
      />

      {/* Green overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-dark via-green-dark/60 to-green-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-dark/70 via-green-dark/40 to-green-dark/30" />

      {/* Content — bottom-aligned */}
      <div className="relative z-10 w-full mt-auto pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Small label */}
            <p className="text-gold-light text-sm sm:text-base font-medium tracking-widest uppercase mb-4">
              Malawi&apos;s #1 Tea Brand
            </p>

            {/* Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.05] tracking-tight">
              Your Perfect
              <br />
              Cup of <span className="italic text-gold-light">Gold</span>
            </h1>

            {/* Short description */}
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
              Premium organic tea from the finest tea gardens of Africa.
              Rich aroma, superior taste, since 2003.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded-full bg-gold px-8 py-4 text-base font-semibold text-white hover:bg-gold-dark transition-all shadow-lg shadow-gold/20 hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Our Teas
              </a>
              <a
                href="#brand"
                className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
    </section>
  );
}
