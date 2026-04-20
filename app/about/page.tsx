import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Lightbulb, Handshake, Target, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About Us | AITEK Solutions",
  description: "Learn about AITEK Solutions — our mission, vision, and values.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We do what's right, even when no one is watching. Transparency and honesty guide every decision.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new ideas and technologies to deliver cutting-edge solutions that keep you ahead.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "Your success is our success. We build lasting relationships based on trust and mutual growth.",
  },
  {
    icon: Target,
    title: "Results",
    description: "We measure our success by the tangible outcomes we deliver for your business.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-light-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6">
                Who We Are
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                AITEK Solutions is a technology company built on the belief that every business deserves access to world-class IT, software, and branding services. We combine technical expertise with creative thinking to deliver solutions that matter.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-10">
                <h3 className="font-heading text-2xl font-bold text-navy mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with technology and design that drives growth, efficiency, and competitive advantage. We make enterprise-grade solutions accessible to companies of all sizes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-10">
                <h3 className="font-heading text-2xl font-bold text-navy mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted technology partner for growing businesses worldwide — known for innovation, reliability, and genuine commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-light-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
                Our Values
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl p-8 shadow-card hover:shadow-soft transition-all text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy mb-3">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                Let&apos;s Build Something Great Together
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}