import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  Stethoscope, Car, GraduationCap, Home, 
  ShoppingCart, Briefcase, ArrowRight, CheckCircle, 
  Server, Code2, Cloud, ShieldCheck, Palette,
  TrendingUp, Building2, BrainCircuit, Workflow,
  MessageSquareMore, Factory, LucideIcon,
  Shield, Monitor, Link2, Globe, Database, Users,
  Wifi, Lock, Layers, Eye, Smartphone, BarChart,
  Zap, CreditCard, Clock, FileCheck, Award
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import { industries, services } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope, Car, GraduationCap, Home, ShoppingCart, Briefcase,
  Server, Code2, Cloud, ShieldCheck, Palette, TrendingUp,
  Building2, BrainCircuit, Workflow, MessageSquareMore, Factory,
  Shield, Monitor, Link: Link2, Globe, Database, Users,
  Wifi, Lock, Layers, Eye, Smartphone, BarChart,
  Zap, CreditCard, Clock, FileCheck, Award,
};

const industryImpact: Record<string, { value: string; label: string }[]> = {
  healthcare: [
    { value: "24/7", label: "Critical uptime" },
    { value: "HIPAA", label: "Compliance aligned" },
    { value: "Faster", label: "Patient response" },
  ],
  automotive: [
    { value: "Real-time", label: "Inventory visibility" },
    { value: "Higher", label: "Lead conversion" },
    { value: "Unified", label: "Sales-service data" },
  ],
  education: [
    { value: "Secure", label: "Student data handling" },
    { value: "Reliable", label: "Campus connectivity" },
    { value: "Scalable", label: "Digital learning" },
  ],
  "real-estate": [
    { value: "More", label: "Qualified inquiries" },
    { value: "Mobile", label: "First user journeys" },
    { value: "Faster", label: "Lead follow-up" },
  ],
  "retail-ecommerce": [
    { value: "Peak-ready", label: "Store performance" },
    { value: "Secure", label: "Payments & trust" },
    { value: "Data-led", label: "Growth decisions" },
  ],
  "professional-services": [
    { value: "Efficient", label: "Service operations" },
    { value: "Compliant", label: "Process governance" },
    { value: "Premium", label: "Brand credibility" },
  ],
};

const serviceAlignment: Record<string, Partial<Record<number, string>>> = {
  healthcare: {
    1: "Position your clinic with trust-first branding that resonates with modern patients.",
    2: "Design physical spaces and workflows that improve care flow and comfort.",
    3: "Build appointment, records, and operational tools tailored to medical teams.",
    6: "Protect patient data with compliance-aware controls and governance.",
    8: "Create a practical transformation roadmap with clear milestones.",
    9: "Improve patient communication from booking to follow-up.",
  },
  automotive: {
    1: "Differentiate your dealership identity across digital and physical touchpoints.",
    3: "Power booking, inventory, and service workflows in one system.",
    5: "Use sales and service data to improve forecasting and conversion.",
    7: "Connect teams and locations with smooth internal operations.",
    8: "Plan scalable digital growth for sales and aftersales performance.",
    10: "Deploy automotive-specific process automation and reporting.",
  },
  education: {
    3: "Deliver custom student and staff platforms for learning and administration.",
    4: "Modernize campus infrastructure for resilient online and on-site learning.",
    5: "Track performance trends and outcomes for better decisions.",
    7: "Enable faculty collaboration and process efficiency across departments.",
    8: "Align institutional strategy with phased digital transformation goals.",
  },
  "real-estate": {
    1: "Build a recognizable property brand that attracts ideal buyers and sellers.",
    3: "Create listing, inquiry, and CRM workflows that move deals faster.",
    7: "Improve agent coordination with connected operations.",
    8: "Define growth strategy by market segment and digital channel.",
    9: "Elevate buyer and seller journeys with consistent communication.",
  },
  "retail-ecommerce": {
    3: "Build seamless storefront and backend systems that scale under demand.",
    4: "Run reliable cloud infrastructure for high-traffic commerce moments.",
    5: "Turn customer and sales data into merchandising and growth insight.",
    7: "Optimize internal order, fulfillment, and team workflows.",
    8: "Shape channel strategy and expansion plans with measurable targets.",
    10: "Use commerce-specific automation for catalog, logistics, and operations.",
  },
  "professional-services": {
    1: "Build a premium, credibility-led brand that wins high-value clients.",
    3: "Implement business systems that reduce manual admin and repetition.",
    6: "Strengthen data protection and audit readiness for regulated work.",
    7: "Standardize delivery and internal collaboration workflows.",
    8: "Drive growth with strategic planning and operational clarity.",
  },
};

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) return { title: "Not Found" };

  return {
    title: `${industry.name} Technology Solutions | AITEK Solutions`,
    description: industry.tagline,
  };
}

export default function IndustryPage({ params }: Props) {
  const industry = industries.find((i) => i.slug === params.slug);

  if (!industry) {
    notFound();
  }

  const industryServices = services.filter((s) => industry.services.includes(s.id));
  const IconComponent = iconMap[industry.icon] || Briefcase;
  const impactMetrics = industryImpact[industry.slug] || [];
  const alignedServiceReasons = serviceAlignment[industry.slug] || {};

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-light-bg overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src={industry.image}
              alt={industry.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-light-bg/95 to-primary/10" />

          <div className="absolute -top-20 -left-24 h-80 w-80 rounded-full bg-primary/12 blur-3xl blob blob-delay-1" />
          <div className="absolute top-12 -right-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl blob blob-delay-2" />
          <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl blob blob-delay-3" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-primary font-semibold">Industry Solutions</span>
                </div>

                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
                  {industry.name} Technology
                  <span className="block text-primary">Built for Real Growth</span>
                </h1>

                <p className="text-xl text-gray-600 max-w-2xl mb-8">
                  {industry.tagline}. We design and implement systems that solve the real blockers inside {industry.name.toLowerCase()} operations.
                </p>

                <div className="flex flex-wrap gap-3">
                  {industry.challenges.map((challenge) => (
                    <span
                      key={challenge.title}
                      className="px-4 py-2 rounded-full bg-white/85 border border-primary/20 text-sm text-navy shadow-sm"
                    >
                      {challenge.title}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {impactMetrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-primary/20 bg-white/90 backdrop-blur-sm p-5 shadow-card"
                  >
                    <p className="font-heading text-2xl text-navy mb-1">{item.value}</p>
                    <p className="text-sm text-gray-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-20 bg-light-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold text-navy mb-4">
                Challenges We Solve
              </h2>
              <p className="text-gray-500">
                Common pain points in the {industry.name.toLowerCase()} industry
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {industry.challenges.map((challenge, i) => {
                const ChallengeIcon = iconMap[challenge.icon] || CheckCircle;
                return (
                  <AnimatedSection key={challenge.title} delay={i * 0.08}>
                    <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-soft transition-all duration-300 h-full border border-transparent hover:border-primary/20">
                      <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                        <ChallengeIcon className="h-6 w-6 text-red-500" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-navy mb-3">{challenge.title}</h3>
                      <p className="text-gray-500">{challenge.description}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold text-navy mb-4">
                Our Solutions
              </h2>
              <p className="text-gray-500">
                Tailored services for {industry.name.toLowerCase()}
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industryServices.map((service, i) => (
                <ServiceCard
                  key={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={i}
                />
              ))}
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-5">
              {industryServices.map((service, i) => (
                <AnimatedSection key={`${service.id}-fit`} delay={i * 0.06}>
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 h-full">
                    <h3 className="font-heading text-lg font-semibold text-navy mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {alignedServiceReasons[service.id] || `This service is tailored to improve ${industry.name.toLowerCase()} outcomes and support measurable growth.`}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* How We Help - 3 Steps */}
        <section className="py-20 bg-light-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold text-navy mb-4">
                How We Help
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Assessment", desc: "We analyze your current systems and identify gaps." },
                { step: "02", title: "Strategy", desc: "We design a tailored solution roadmap for your needs." },
                { step: "03", title: "Implementation", desc: "We deploy, train, and support your team." },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6 font-heading font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
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
                Ready to Transform Your {industry.name} Business?
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors"
              >
                Book a Free Consultation
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