"use client";

import { motion } from "framer-motion";
import { Building2, Rocket, Shield } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const cards = [
  {
    icon: Building2,
    title: "Build",
    description: "We design and develop systems, brands, and software from the ground up.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Rocket,
    title: "Scale",
    description: "We grow with you — from startup to enterprise, our solutions scale.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Shield,
    title: "Protect",
    description: "We keep your business secure, compliant, and running smoothly.",
    color: "bg-indigo-50 text-indigo-600",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
            Technology That Works for Your Business
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-soft transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 rounded-2xl ${card.color} flex items-center justify-center mx-auto mb-6`}>
                <card.icon className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-xl font-bold text-navy mb-3">{card.title}</h3>
              <p className="text-gray-500 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}