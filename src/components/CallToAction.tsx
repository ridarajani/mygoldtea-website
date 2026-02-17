import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function CallToAction() {
  return (
    <section id="cta" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <Image
            src={`${basePath}/images/products-overview.png`}
            alt="MyGold Products"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-green-dark/80" />
          <div className="absolute inset-0 bg-gradient-to-br from-green-dark/90 via-green-dark/75 to-green/60" />

          {/* Decorative warm blurs */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold-light/15 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold/10 blur-[100px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-24 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-light">
              Ready to Experience MyGold?
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight">
              Discover Quality Products
              <br />
              <span className="text-gold-light italic">
                Made in Malawi
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
              Join thousands of families who trust MyGold for their daily
              essentials — cookies, margarine, rice, snacks, and more. Quality
              you can taste in every product.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="rounded-full bg-gold px-8 py-4 text-base font-semibold text-white shadow-lg shadow-gold/25 hover:bg-gold-dark hover:shadow-xl transition-all"
              >
                Contact Us Today
              </a>
              <a
                href="/products"
                className="rounded-full border-2 border-white/25 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                View Our Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
