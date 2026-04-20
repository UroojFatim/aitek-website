"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const titleWords = "Powering Businesses Through Smarter Technology".split(" ");

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-light-bg">
      {/* Animated Blob Backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob blob-delay-1 absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/5" />
        <div className="blob blob-delay-2 absolute top-1/3 -right-32 w-[400px] h-[400px] bg-secondary/10" />
        <div className="blob blob-delay-3 absolute -bottom-32 left-1/4 w-[450px] h-[450px] bg-primary/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full"
            >
              Technology Partner for Growing Businesses
            </motion.div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              We build brands, systems, and digital experiences that help companies grow — faster, smarter, and future-ready.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#services"
                className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors shadow-soft"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 border-2 border-navy text-navy font-medium rounded-full hover:bg-navy hover:text-white transition-colors"
              >
                Talk to an Expert
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Image with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900"
                alt="Technology solutions for modern businesses"
                width={900}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-card"
            >
              <div className="text-2xl font-bold text-primary">99%</div>
              <div className="text-xs text-gray-500">Uptime</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -right-4 bg-white rounded-xl px-4 py-3 shadow-card"
            >
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-xs text-gray-500">Clients</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-4 left-1/4 bg-white rounded-xl px-4 py-3 shadow-card"
            >
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-xs text-gray-500">Years</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}