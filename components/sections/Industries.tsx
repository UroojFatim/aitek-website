"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Stethoscope, Car, GraduationCap, Home, 
  ShoppingCart, Briefcase, ArrowRight, LucideIcon 
} from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import { industries } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Car,
  GraduationCap,
  Home,
  ShoppingCart,
  Briefcase,
};

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Industry Expertise
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
            Built for Your Industry
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We understand every sector has unique challenges. Our solutions are tailored — not templated.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => {
            const IconComponent = iconMap[industry.icon] || Briefcase;
            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-2">{industry.name}</h3>
                  <p className="text-gray-500 mb-6">{industry.tagline}</p>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                  >
                    View Solutions
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}