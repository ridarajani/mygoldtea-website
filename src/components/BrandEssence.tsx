import Image from "next/image";

export default function BrandEssence() {
  return (
    <section id="brand" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
              Our Story
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-brown-dark leading-tight">
              An Indigenous Product
              <br />
              <span className="text-gold-dark italic">of Malawi</span>
            </h2>
            <p className="mt-6 text-lg text-brown leading-relaxed">
              MyGold Tea is Malawi&apos;s most loved tea brand that prides
              itself on superior quality tea from the finest tea gardens in
              Africa. The tea leaves used in the blending of MyGold Tea are
              carefully collected from the finest tea gardens of Malawi.
            </p>
            <p className="mt-4 text-lg text-brown leading-relaxed">
              MyGold Tea is the supreme blend of tea of which the smell and taste
              give a feeling of refreshingness to anyone who drinks it.
            </p>
            <p className="mt-4 text-brown-light">
              It is the endeavor of our highly qualified staff who work very hard
              for making this unique export quality blend for Malawian people and
              other tea lovers around the world.
            </p>
          </div>

          {/* Right — Image Collage */}
          <div className="relative">
            {/* Main image */}
            <div className="rounded-3xl overflow-hidden shadow-xl shadow-brown/10">
              <Image
                src="/images/pure-african-gold.png"
                alt="MyGold Pure African Gold 500g"
                width={560}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating card - bottom left */}
            <div className="absolute -bottom-8 -left-4 sm:-left-8 rounded-2xl overflow-hidden shadow-xl shadow-brown/10 border-4 border-cream w-44 sm:w-52 h-36 sm:h-40">
              <Image
                src="/images/tea-jar.png"
                alt="MyGold Tea Jar"
                fill
                className="object-cover"
              />
            </div>

            {/* Info card - top right */}
            <div className="absolute -top-4 -right-4 sm:-right-6 rounded-2xl bg-white p-5 shadow-xl shadow-brown/10 border border-cream-dark">
              <div className="space-y-4">
                {[
                  { title: "Finest Tea Gardens", icon: "🌿" },
                  { title: "Supreme Blend", icon: "✨" },
                  { title: "Most Loved Brand", icon: "🏆" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-medium text-brown-dark">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border-2 border-gold/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
