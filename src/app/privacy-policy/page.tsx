import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy   MyGold",
  description:
    "Read MyGold's privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
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
            Privacy <span className="text-gold-light italic">Policy</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            Your privacy matters to us. This policy explains how MyGold
            collects, uses, and protects your personal information.
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
                1. Introduction
              </h2>
              <p className="text-brown leading-relaxed">
                MyGold (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                is committed to protecting the privacy of visitors to our
                website. This Privacy Policy describes how we collect, use,
                and safeguard information when you visit our website at
                mygoldtea.com. By using our website, you consent to the
                practices described in this policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brown-dark mb-4">
                2. Information We Collect
              </h2>
              <p className="text-brown leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="space-y-3">
                {[
                  {
                    title: "Personal Information",
                    desc: "When you contact us through our website, we may collect your name, email address, phone number, and any message content you provide.",
                  },
                  {
                    title: "Usage Data",
                    desc: "We automatically collect certain information about your device and how you interact with our website, including your IP address, browser type, pages visited, and time spent on the site.",
                  },
                  {
                    title: "Cookies",
                    desc: "Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-brown-dark">
                        {item.title}:
                      </span>{" "}
                      <span className="text-brown">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brown-dark mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-brown leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="space-y-2">
                {[
                  "To respond to your inquiries and provide customer support",
                  "To improve our website and user experience",
                  "To analyze website traffic and usage patterns",
                  "To send you information about our products, if you have opted in",
                  "To comply with legal obligations",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-brown">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-green flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brown-dark mb-4">
                4. Information Sharing
              </h2>
              <p className="text-brown leading-relaxed">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                following circumstances: with service providers who assist us
                in operating our website, when required by law or to protect
                our legal rights, or with your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brown-dark mb-4">
                5. Data Security
              </h2>
              <p className="text-brown leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet is 100% secure, and
                we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brown-dark mb-4">
                6. Your Rights
              </h2>
              <p className="text-brown leading-relaxed">
                You have the right to access, correct, or delete your personal
                information that we hold. You may also opt out of receiving
                marketing communications from us at any time. To exercise
                these rights, please contact us using the information below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brown-dark mb-4">
                7. Children&apos;s Privacy
              </h2>
              <p className="text-brown leading-relaxed">
                Our website is not intended for children under the age of 13.
                We do not knowingly collect personal information from children.
                If you believe we have collected information from a child,
                please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brown-dark mb-4">
                8. Changes to This Policy
              </h2>
              <p className="text-brown leading-relaxed">
                We may update this Privacy Policy from time to time. Any
                changes will be posted on this page with an updated &quot;Last
                updated&quot; date. We encourage you to review this policy
                periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brown-dark mb-4">
                9. Contact Us
              </h2>
              <p className="text-brown leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us:
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
