import Image from "next/image";

export default function CallToAction() {
  return (
    <section id="cta" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/products-overview.png"
            alt="MyGold Tea Products"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black-rich/85" />
          <div className="absolute inset-0 bg-gradient-to-br from-black-rich/90 via-black-rich/80 to-charcoal/70" />

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-teal/15 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold-light/15 blur-[100px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-24 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-light">
              Ready to Experience Gold?
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight">
              Taste the Finest Tea
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold">
                Africa Has to Offer
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              Join millions of tea lovers who start their day with MyGold Tea.
              From the finest tea gardens of Malawi to your cup — experience the
              supreme blend.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="rounded-full bg-gradient-to-r from-gold to-gold-dark px-8 py-4 text-base font-semibold text-white shadow-lg shadow-gold/25 hover:shadow-xl hover:shadow-gold/30 transition-all"
              >
                Contact Us Today
              </a>
              <a
                href="/products"
                className="rounded-full border-2 border-white/20 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
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
