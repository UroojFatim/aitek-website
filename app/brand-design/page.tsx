import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, Palette, Monitor, Rocket, HeartHandshake,
  FileImage, BookOpen, Globe, Database, Megaphone, Settings,
  ArrowRight, CheckCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Brand & Design | AITEK Solutions",
  description: "Create your brand and design your technology systems with AITEK Solutions.",
};

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business, market, and goals to build a strategic foundation.",
  },
  {
    number: "02",
    title: "Identity Design",
    description: "Logo, colors, typography, and visual systems that tell your story.",
  },
  {
    number: "03",
    title: "Technology System Design",
    description: "We architect the digital infrastructure that powers your brand.",
  },
  {
    number: "04",
    title: "Build & Launch",
    description: "From development to deployment, we bring everything to life.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description: "Continuous optimization, updates, and strategic guidance.",
  },
];

const deliverables = [
  { icon: FileImage, title: "Logo Files", desc: "All formats for every use case" },
  { icon: BookOpen, title: "Brand Guidelines", desc: "Complete style and usage manual" },
  { icon: Globe, title: "Website", desc: "Custom-built, responsive web presence" },
  { icon: Database, title: "CRM Setup", desc: "Customer relationship management" },
  { icon: Megaphone, title: "Marketing Assets", desc: "Social, print, and digital materials" },
  { icon: Settings, title: "IT Systems", desc: "Infrastructure and cloud solutions" },
];

export default function BrandDesignPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-light-bg overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
                  Create Your Brand & Design Your Technology Systems
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  From visual identity to digital infrastructure, we build cohesive brand experiences that drive growth and establish market presence.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors shadow-soft"
                >
                  Start Your Brand Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800"
                    alt="Brand design and technology"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
                  Why Brand & Technology Matter
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Your brand and technology are inseparable in today&apos;s market. A strong brand without solid tech infrastructure fails to deliver. Great tech without brand identity fails to connect.
                </p>
                <ul className="space-y-4">
                  {[
                    "First impressions are 94% design-related",
                    "Consistent branding increases revenue by 33%",
                    "Integrated systems reduce operational costs by 40%",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700"
                    alt="Brand strategy meeting"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 bg-light-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
                Our Process
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                A proven methodology that takes you from concept to launch
              </p>
            </AnimatedSection>

            <div className="space-y-8">
              {processSteps.map((step, i) => (
                <div
                  key={step.number}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="lg:w-1/2">
                    <div className="bg-white rounded-2xl p-8 shadow-card border-l-4 border-primary">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-heading font-bold">
                          {step.number}
                        </div>
                        <h3 className="font-heading text-xl font-bold text-navy">{step.title}</h3>
                      </div>
                      <p className="text-gray-500">{step.description}</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                      {i === 0 && <Search className="h-10 w-10 text-primary" />}
                      {i === 1 && <Palette className="h-10 w-10 text-primary" />}
                      {i === 2 && <Monitor className="h-10 w-10 text-primary" />}
                      {i === 3 && <Rocket className="h-10 w-10 text-primary" />}
                      {i === 4 && <HeartHandshake className="h-10 w-10 text-primary" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
                What You Get
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                A complete brand and technology package
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverables.map((item, i) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 shadow-card hover:shadow-soft transition-all text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-navy mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
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
                Start Your Brand Journey Today
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors"
              >
                Get Started
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