import Image from "next/image";

const milestones = [
  {
    year: "2003",
    title: "Founded",
    desc: "MyGold Tea brand established in Malawi",
  },
  {
    year: "2005",
    title: "Expanded",
    desc: "Extended to multiple tea garden partnerships",
  },
  {
    year: "2019",
    title: "Export Quality",
    desc: "Achieved export quality certification",
  },
  {
    year: "2020",
    title: "Market Leader",
    desc: "Became Malawi's #1 selling tea brand",
  },
];

const values = [
  {
    title: "Quality First",
    description:
      "Every leaf is selected and every blend is crafted to meet our uncompromising standards of excellence.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    accent: "from-gold to-gold-dark",
  },
  {
    title: "African Heritage",
    description:
      "Proudly rooted in Malawi's rich tea-growing tradition and committed to uplifting local communities.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    accent: "from-teal to-teal-dark",
  },
  {
    title: "Sustainability",
    description:
      "Responsible farming practices that protect the land and ensure future generations can enjoy great tea.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    accent: "from-gold-dark to-teal",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-cream py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Brand Values Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal">
            What We Stand For
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-black-soft">
            Our <span className="text-gold">Values</span>
          </h2>
        </div>

        {/* Values Cards */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          {values.map((val) => (
            <div
              key={val.title}
              className="group relative rounded-3xl bg-white p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Gradient accent bar at top */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${val.accent}`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${val.accent} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
              >
                {val.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-black-soft">
                {val.title}
              </h3>
              <p className="mt-3 text-gray leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-24 relative">
          {/* Background card */}
          <div className="rounded-3xl bg-black-rich overflow-hidden relative">
            {/* Subtle background image */}
            <Image
              src="/images/hero.jpg"
              alt=""
              fill
              className="object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black-rich via-black-rich/95 to-black-rich" />

            <div className="relative z-10 px-8 py-14 sm:px-12">
              <h3 className="text-center text-2xl font-bold text-white mb-14">
                Our <span className="text-gold">Journey</span>
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {milestones.map((m, i) => (
                  <div key={m.year} className="relative text-center group">
                    {/* Connector line */}
                    {i < milestones.length - 1 && (
                      <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px bg-gradient-to-r from-gold/40 to-gold/10" />
                    )}

                    {/* Year circle */}
                    <div className="relative z-10 inline-flex w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark text-black-rich font-bold text-sm items-center justify-center shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform duration-500">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="mt-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold">
                      {m.year}
                    </div>
                    <h4 className="mt-2 font-semibold text-white">
                      {m.title}
                    </h4>
                    <p className="mt-2 text-sm text-white/50">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
