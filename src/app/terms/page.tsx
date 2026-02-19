import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions   MyGold",
  description:
    "Read MyGold's terms and conditions governing the use of our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-green-dark to-green pt-32 pb-16 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-green-light/10 blur-3xl" />
        <div className="absolute bottom-0 left-20 w-56 h-56 rounded-full bg-gold-light/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gold-light hover:text-white transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Terms &amp;{" "}
            <span className="text-gold-light italic">Conditions</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            Please read these terms and conditions carefully before using our
            website and services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-cream-dark p-8 sm:p-12 space-y-10">
            <div>
              <p className="text-sm text-brown-light">
                Last updated: February 2026
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brown-dark mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-brown leading-relaxed">
                By accessing and using the MyGold website (mygoldtea.com), you
                accept and agree to be bound by these Terms and Conditions. If
                you do not agree with any part of these terms, please do not
                use our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brown-dark mb-4">
                2. About MyGold
              </h2>
              <p className="text-brown leading-relaxed">
                MyGold is a registered food brand operating in Malawi since
                2008. We manufacture and distribute premium tea, cookies,
                margarine, rice, and snacks. Our production facility is
                located in Lilongwe, the capital of Malawi, and we employ
                over 200 staff members.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brown-dark mb-4">
                3. Use of Website
              </h2>
              <p className="text-brown leading-relaxed mb-4">
                You agree to use this website only for lawful purposes and in a
                manner that does not infringe upon the rights of others. You
                may not:
              </p>
              <ul className="space-y-2">
                {[
                  "Use the website in any way that violates applicable laws or regulations",
                  "Reproduce, duplicate, or copy any material from this website for commercial purposes without our written permission",
                  "Attempt to gain unauthorized access to any part of the website or its systems",
                  "Use the website to transmit any harmful, threatening, or offensive content",
                  "Interfere with or disrupt the website or its servers",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-brown">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brown-dark mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-brown leading-relaxed">
                All content on this website   including text, images, logos,
                graphics, product photographs, and design elements   is the
                property of MyGold (My Gold Tea) or its content suppliers and
                is protected by intellectual property laws. The MyGold name,
                logo, and product names are trademarks of our company. You
                may not use any of our trademarks without our prior written
                consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brown-dark mb-4">
                5. Product Information
              </h2>
              <p className="text-brown leading-relaxed">
                We make every effort to display our products and their
                descriptions as accurately as possible. However, we do not
                guarantee that product descriptions, images, pricing, or other
                content on the website is accurate, complete, or current.
                Product availability may vary by location. For the most
                up-to-date product information, please contact us directly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brown-dark mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-brown leading-relaxed">
                MyGold shall not be liable for any direct, indirect,
                incidental, special, or consequential damages arising from
                your use of this website or inability to access the website.
                This includes, but is not limited to, damages for loss of
                profits, data, or other intangible losses, even if we have
                been advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brown-dark mb-4">
                7. Third-Party Links
              </h2>
              <p className="text-brown leading-relaxed">
                Our website may contain links to third-party websites or
                services that are not owned or controlled by MyGold. We have
                no control over and assume no responsibility for the content,
                privacy policies, or practices of any third-party websites.
                You access these links at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brown-dark mb-4">
                8. Governing Law
              </h2>
              <p className="text-brown leading-relaxed">
                These Terms and Conditions are governed by and construed in
                accordance with the laws of the Republic of Malawi. Any
                disputes arising from these terms shall be subject to the
                exclusive jurisdiction of the courts of Malawi.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brown-dark mb-4">
                9. Changes to Terms
              </h2>
              <p className="text-brown leading-relaxed">
                We reserve the right to modify or replace these Terms and
                Conditions at any time. Changes will be effective immediately
                upon posting on this page. Your continued use of the website
                after any changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brown-dark mb-4">
                10. Contact Us
              </h2>
              <p className="text-brown leading-relaxed">
                If you have any questions about these Terms and Conditions,
                please contact us:
              </p>
              <div className="mt-4 rounded-2xl bg-cream p-6 space-y-2">
                <p className="text-brown">
                  <span className="font-semibold text-brown-dark">
                    MyGold (My Gold Tea)
                  </span>
                </p>
                <p className="text-brown">Pvt Bag B-321, Lilongwe, Malawi</p>
                <p className="text-brown">
                  Email:{" "}
                  <a
                    href="mailto:contact@mygoldtea.com"
                    className="text-green hover:text-green-dark transition-colors"
                  >
                    contact@mygoldtea.com
                  </a>
                </p>
                <p className="text-brown">
                  Phone:{" "}
                  <a
                    href="tel:+265990288889"
                    className="text-green hover:text-green-dark transition-colors"
                  >
                    +265 990 28 88 89
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
