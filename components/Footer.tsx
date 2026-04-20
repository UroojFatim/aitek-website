"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { services, industries } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Info */}
          <div className="space-y-6">
            <Image
              src="/lockup-horizontal-dark.png"
              alt="AITEK Solutions"
              width={160}
              height={36}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Smarter technology for a better business.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <span className="text-gray-400 text-sm hover:text-white transition-colors cursor-default">
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Industries</h4>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 text-sm hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/brand-design" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Brand & Design
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <span className="text-gray-400 text-sm hover:text-white transition-colors cursor-default">
                  Privacy Policy
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © 2025 AITEK Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}