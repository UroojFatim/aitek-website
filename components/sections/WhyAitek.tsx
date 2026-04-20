"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "../AnimatedSection";

export default function WhyAitek() {
  return (
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Row 1: Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Our Approach
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy mb-6 leading-tight">
              We Align Technology with Business Goals
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Technology should serve your business — not the other way around. We take time to understand your goals before writing a single line of code or designing a single screen.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
                alt="Team collaborating on technology solutions"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Row 2: Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700"
                alt="Partnership and collaboration"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="order-1 lg:order-2">
            <span className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-6">
              Partnership
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy mb-6 leading-tight">
              We&apos;re Partners, Not Just Vendors
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              You&apos;ll have a dedicated team that knows your business. Expect honest advice, proactive communication, and real accountability at every step.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}