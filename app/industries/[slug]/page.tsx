import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  Stethoscope, Car, GraduationCap, Home, 
  ShoppingCart, Briefcase, ArrowRight, CheckCircle, 
  Server, Code2, Cloud, ShieldCheck, Palette, 
  TrendingUp, BarChart2, Headphones, LucideIcon 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import { industries, services } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope, Car, GraduationCap, Home, ShoppingCart, Briefcase,
  Server, Code2, Cloud, ShieldCheck, Palette, TrendingUp, BarChart2, Headphones,
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

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src={industry.image}
              alt={industry.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-medium">Industry Solutions</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                {industry.name} Technology Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                {industry.tagline}
              </p>
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
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-8 shadow-card"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                      <ChallengeIcon className="h-6 w-6 text-red-500" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-navy mb-3">{challenge.title}</h3>
                    <p className="text-gray-500">{challenge.description}</p>
                  </div>
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