import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import BrandTech from "@/components/sections/BrandTech";
import Industries from "@/components/sections/Industries";
import WhyAitek from "@/components/sections/WhyAitek";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "AITEK Solutions | Technology Partner for Growing Businesses",
  description: "We build brands, systems, and digital experiences that help companies grow — faster, smarter, and future-ready.",
  openGraph: {
    title: "AITEK Solutions | Technology Partner for Growing Businesses",
    description: "We build brands, systems, and digital experiences that help companies grow — faster, smarter, and future-ready.",
    url: "https://aitek-solutions.com",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <WhatWeDo />
        <Services />
        <Stats />
        <BrandTech />
        <Industries />
        <WhyAitek />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}