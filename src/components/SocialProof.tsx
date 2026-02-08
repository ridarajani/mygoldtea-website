const milestones = [
  {
    year: "2003",
    title: "Founded",
    desc: "MyGold Tea brand established in Malawi",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M9 8h6M12 8V5m-3 0h6m-9 8h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v3a2 2 0 002 2zm0 0v5a2 2 0 002 2h8a2 2 0 002-2v-5" />
      </svg>
    ),
  },
  {
    year: "2005",
    title: "Expanded",
    desc: "Extended to multiple tea garden partnerships",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    year: "2019",
    title: "Export Quality",
    desc: "Achieved export quality certification",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    year: "2020",
    title: "Market Leader",
    desc: "Became Malawi's #1 selling tea brand",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

const values = [
  {
    title: "Quality First",
    description:
      "Every leaf is selected and every blend is crafted to meet our uncompromising standards of excellence.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    accent: "from-gold to-gold-dark",
  },
  {
    title: "African Heritage",
    description:
      "Proudly rooted in Malawi's rich tea-growing tradition and committed to uplifting local communities.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    accent: "from-green to-green-dark",
  },
  {
    title: "Sustainability",
    description:
      "Responsible farming practices that protect the land and ensure future generations can enjoy great tea.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    accent: "from-gold-dark to-green",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-cream py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Brand Values Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-green">
            What We Stand For
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-brown-dark">
            Our <span className="text-gold-dark italic">Values</span>
          </h2>
        </div>

        {/* Values Cards */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          {values.map((val) => (
            <div
              key={val.title}
              className="group relative rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-cream-dark"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${val.accent}`}
              />
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${val.accent} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500`}
              >
                {val.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-brown-dark">
                {val.title}
              </h3>
              <p className="mt-3 text-brown leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>

        {/* Journey Timeline */}
        <div className="mt-24">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-green">
              Since 2003
            </span>
            <h3 className="mt-2 text-3xl sm:text-4xl font-bold text-brown-dark">
              Our <span className="text-gold-dark italic">Journey</span>
            </h3>
          </div>

          {/* Timeline track */}
          <div className="relative">
            {/* Horizontal connecting line (desktop) */}
            <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px bg-gradient-to-r from-gold/30 via-green/20 to-gold/30" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {milestones.map((m, i) => (
                <div key={m.year} className="group relative flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div className="relative z-10 w-[56px] h-[56px] rounded-full bg-gradient-to-br from-gold to-gold-dark text-white flex items-center justify-center shadow-lg shadow-gold/20 group-hover:scale-110 group-hover:shadow-gold/30 transition-all duration-500">
                    {m.icon}
                  </div>

                  {/* Year */}
                  <div className="mt-5 text-3xl font-bold text-gold-dark font-serif">
                    {m.year}
                  </div>

                  {/* Title */}
                  <h4 className="mt-2 text-lg font-bold text-brown-dark">
                    {m.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-2 text-sm text-brown leading-relaxed max-w-[220px]">
                    {m.desc}
                  </p>

                  {/* Step indicator */}
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-beige border border-cream-dark px-3 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-[11px] font-semibold text-brown-light uppercase tracking-wider">
                      Step {String(i + 1).padStart(2, "0")}
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
