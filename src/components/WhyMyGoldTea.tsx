import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const differentiators = [
  {
    title: "Premium Cookies",
    short: "Crunchy, flavorful cookies in shortbread, chocolate chip & more",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Quality Margarine",
    short: "Smooth, rich margarine for cooking and spreading",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Wholesome Rice",
    short: "Premium Kilombero rice grown in Malawi's fertile plains",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21l6-6m0 0l4 4m-4-4l8-8m0 0l4 4m-4-4V3" />
      </svg>
    ),
  },
  {
    title: "Tasty Snacks",
    short: "Delicious peanuts and snacks perfect for any occasion",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-4 6-7 9-7 12a7 7 0 1014 0c0-3-3-6-7-12z" />
      </svg>
    ),
  },
  {
    title: "Expert Craft",
    short: "20+ years of proven quality across all our products",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function WhyMyGoldTea() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background image with overlay */}
          <Image
            src={`${basePath}/images/hero.jpg`}
            alt="MyGold Products"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-green-dark/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-dark/95 via-green-dark/85 to-green/70" />

          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold-light/10 blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-green-light/10 blur-[60px]" />

          <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-14">
            {/* Header */}
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-light">
                What Makes Us Different
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white leading-snug">
                Why Families Choose{" "}
                <span className="text-gold-light italic">MyGold</span>
              </h2>
            </div>

            {/* Differentiators grid */}
            <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="group text-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-6 hover:bg-white/15 hover:border-gold-light/30 transition-all duration-300"
                >
                  <div className="mx-auto w-10 h-10 rounded-xl bg-gold-light/20 text-gold-light flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {item.short}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
