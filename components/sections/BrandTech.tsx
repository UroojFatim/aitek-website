"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Paintbrush, Wrench, Rocket } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const steps = [
  {
    number: "01",
    icon: Paintbrush,
    title: "Define Your Identity",
    description: "We learn your vision, values, and goals. Your brand starts with clarity.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Design the Systems",
    description: "From logo to tech stack, every system is designed with intention.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Grow",
    description: "We deploy everything, then stay with you as your business evolves.",
  },
];

export default function BrandTech() {
  return (
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Part - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <AnimatedSection>
            <span className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-6">
              Brand + Technology
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6 leading-tight">
              Create Your Brand & Design Your Technology Systems
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Your brand is more than a logo — it&apos;s the story your business tells. From identity design to full technology buildouts, we handle every detail so you can focus on growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors shadow-soft"
            >
              Start Building Your Brand →
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700"
                alt="Brand and technology design process"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Part - 3 Step Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/20 transition-colors"
            >
              <div className="absolute -top-3 left-8 w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-heading font-bold text-sm">
                {step.number}
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy">{step.title}</h3>
                </div>
                <p className="text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}