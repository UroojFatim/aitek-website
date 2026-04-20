"use client";

import { motion } from "framer-motion";

const companies = [
  "TechVenture Inc",
  "GlobalHealth Systems",
  "AutoDrive Motors",
  "EduSmart Academy",
  "PropertyMax Real Estate",
  "ShopFlow Commerce",
  "ProServe Consulting",
  "DataPulse Analytics",
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg font-medium text-gray-500 mb-10"
        >
          Trusted by forward-thinking businesses
        </motion.h3>

        <div className="marquee-container relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...companies, ...companies].map((company, i) => (
              <div
                key={i}
                className="flex items-center mx-12 text-xl font-heading font-semibold text-gray-300 hover:text-gray-400 transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}