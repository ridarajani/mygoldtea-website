import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
              Quality Food Products
              <br />
              <span className="text-gold-dark italic">from Malawi</span>
            </h2>
            <p className="mt-6 text-lg text-brown leading-relaxed">
              MyGold is Malawi&apos;s most trusted food brand, offering a wide
              range of quality products — from delicious cookies and premium
              margarine to wholesome Kilombero rice and tasty snacks. Every
              product is crafted with care using the finest local ingredients.
            </p>
            <p className="mt-4 text-lg text-brown leading-relaxed">
              Whether it&apos;s our crunchy shortbread cookies, smooth
              margarine, or aromatic rice, each MyGold product delivers the
              quality and taste that families across Malawi love and trust.
            </p>
            <p className="mt-4 text-brown-light">
              It is the endeavor of our highly qualified staff who work very hard
              to bring you the finest food products for Malawian families and
              food lovers around the world.
            </p>
          </div>

          {/* Right — Image Collage */}
          <div className="relative">
            {/* Main image */}
            <div className="rounded-3xl overflow-hidden shadow-xl shadow-brown/10">
              <Image
                src={`${basePath}/images/cookies-overview.png`}
                alt="MyGold Cookies Range"
                width={560}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating card - bottom left */}
            <div className="absolute -bottom-8 -left-4 sm:-left-8 rounded-2xl overflow-hidden shadow-xl shadow-brown/10 border-4 border-cream w-44 sm:w-52 h-36 sm:h-40">
              <Image
                src={`${basePath}/images/rice-overview.png`}
                alt="MyGold Kilombero Rice"
                fill
                className="object-cover"
              />
            </div>

            {/* Info card - top right */}
            <div className="absolute -top-4 -right-4 sm:-right-6 rounded-2xl bg-white p-5 shadow-xl shadow-brown/10 border border-cream-dark">
              <div className="space-y-4">
                {[
                  { title: "Premium Cookies & Snacks", icon: "🍪" },
                  { title: "Quality Margarine & Rice", icon: "🌾" },
                  { title: "Most Trusted Brand", icon: "🏆" },
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
