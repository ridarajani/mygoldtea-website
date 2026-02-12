import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function LifestyleExperience() {
  return (
    <section className="bg-beige py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — lifestyle visual collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48 shadow-md shadow-brown/10">
                  <Image
                    src={`${basePath}/images/hero.jpg`}
                    alt="Fresh tea being poured"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64 shadow-md shadow-brown/10">
                  <Image
                    src={`${basePath}/images/lifestyle.jpg`}
                    alt="MyGold Tea product with steaming cup"
                    width={300}
                    height={260}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden h-64 shadow-md shadow-brown/10">
                  <Image
                    src={`${basePath}/images/cookies-overview.png`}
                    alt="MyGold Cookies range"
                    width={300}
                    height={260}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-48 shadow-md shadow-brown/10 relative">
                  <Image
                    src={`${basePath}/images/rice-overview.png`}
                    alt="MyGold Kilombero Rice"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-dark/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-sm font-semibold text-white tracking-wider uppercase">
                      More Than Just Tea
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-green">
              The Experience
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-brown-dark leading-tight">
              More Than a Cup.
              <br />
              <span className="text-gold-dark italic">A Feeling.</span>
            </h2>
            <p className="mt-6 text-lg text-brown leading-relaxed">
              Experience the exquisite aroma and taste of superior quality
              organic tea. Every sip of MyGold Tea delivers a feeling of
              refreshingness — a moment of pure indulgence.
            </p>

            <div className="mt-8 space-y-6">
              {[
                {
                  title: "Exquisite Aroma",
                  desc: "An inviting scent that sets the tone for a perfect tea experience.",
                },
                {
                  title: "Superior Taste",
                  desc: "Full-bodied, smooth, and refreshing — the hallmark of a supreme blend.",
                },
                {
                  title: "Premium Quality",
                  desc: "Export quality tea that competes with the world's finest brands.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-green/15 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-dark">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-brown">{item.desc}</p>
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
