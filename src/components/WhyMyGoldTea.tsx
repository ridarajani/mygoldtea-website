const differentiators = [
  { title: "Ideal Climate", short: "Warm & humid conditions for rich, full-bodied flavor" },
  { title: "Well-Drained Soils", short: "High-nutrient soil for exceptional depth of taste" },
  { title: "Ideal Altitude", short: "Cultivated at 600m+ for complex, nuanced flavors" },
  { title: "Adequate Water", short: "Clean water supply for the healthiest leaves" },
  { title: "Expert Farming", short: "20+ years of proven quality practices" },
];

export default function WhyMyGoldTea() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-cream/70 border border-cream-dark px-6 py-10 sm:px-10 sm:py-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-14">
            {/* Left — Title */}
            <div className="lg:w-72 flex-shrink-0">
              <span className="text-xs font-semibold uppercase tracking-widest text-teal">
                What Makes Us Different
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-black-soft leading-snug">
                Why Our Tea Tastes{" "}
                <span className="text-gold">So Good</span>
              </h2>
            </div>

            {/* Right — Compact pills */}
            <div className="flex flex-wrap gap-3">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-center gap-3 rounded-2xl bg-white border border-cream-dark px-5 py-3.5 hover:border-teal/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-gold to-teal flex-shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-black-soft">
                      {item.title}
                    </span>
                    <span className="hidden sm:inline text-sm text-gray">
                      {" "}— {item.short}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
