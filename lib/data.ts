import { Service, Industry, Testimonial, Stat } from "@/types";

export const services: Service[] = [
  {
    id: 1,
    icon: "Palette",
    title: "Branding & Business Growth",
    description: "Brand identity, positioning, and growth strategy that help your business stand out and scale.",
  },
  {
    id: 2,
    icon: "Building2",
    title: "Practice / Business Setup & Physical Infrastructure",
    description: "Practice buildouts and premium facility experience design for clinics, spas, and modern businesses.",
  },
  {
    id: 3,
    icon: "Code2",
    title: "IT Systems & Application Development",
    description: "Custom web, mobile, enterprise, and workflow systems built around how your business actually works.",
  },
  {
    id: 4,
    icon: "Cloud",
    title: "Cloud & Infrastructure Solutions",
    description: "Cloud migration, infrastructure modernization, and network solutions built for resilience and scale.",
  },
  {
    id: 5,
    icon: "BrainCircuit",
    title: "Data, AI & Analytics",
    description: "Analytics, automation, and predictive systems that turn data into sharper decisions.",
  },
  {
    id: 6,
    icon: "ShieldCheck",
    title: "Cybersecurity & Compliance",
    description: "Security strategy, governance, and compliance systems designed to protect critical operations and data.",
  },
  {
    id: 7,
    icon: "Workflow",
    title: "Digital Workplace & Operations",
    description: "Collaboration tools, enterprise systems, and process optimization for smarter day-to-day operations.",
  },
  {
    id: 8,
    icon: "TrendingUp",
    title: "Consulting & Strategy",
    description: "Digital transformation, workflow mapping, and growth strategy for teams ready to scale with clarity.",
  },
  {
    id: 9,
    icon: "MessageSquareMore",
    title: "Patient / Customer Experience Systems",
    description: "Journey optimization, appointment systems, and communication workflows that improve every interaction.",
  },
  {
    id: 10,
    icon: "Factory",
    title: "Industry-Specific Solutions",
    description: "Purpose-built solutions for sectors like manufacturing, smart factory operations, and supply chains.",
  },
];

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline: "Secure, compliant, and patient-ready tech",
    icon: "Stethoscope",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200",
    challenges: [
      { icon: "Shield", title: "Data Security", description: "Protecting sensitive patient data from breaches and ensuring HIPAA compliance." },
      { icon: "Monitor", title: "System Downtime", description: "Critical systems must stay online — any interruption affects patient care." },
      { icon: "Link", title: "Integration", description: "Connecting disparate systems and ensuring seamless data flow across platforms." },
    ],
    services: [1, 2, 3, 6, 8, 9],
  },
  {
    slug: "automotive",
    name: "Automotive",
    tagline: "Digital tools for dealerships and service networks",
    icon: "Car",
    image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=1200",
    challenges: [
      { icon: "Globe", title: "Online Presence", description: "Standing out in a crowded digital marketplace and attracting qualified leads." },
      { icon: "Database", title: "Inventory Management", description: "Tracking vehicles, parts, and service schedules across multiple locations." },
      { icon: "Users", title: "Customer Experience", description: "Delivering seamless digital experiences that convert browsers into buyers." },
    ],
    services: [1, 3, 5, 7, 8, 10],
  },
  {
    slug: "education",
    name: "Education",
    tagline: "Tech that empowers students and staff alike",
    icon: "GraduationCap",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200",
    challenges: [
      { icon: "Wifi", title: "Connectivity", description: "Reliable network infrastructure to support thousands of connected devices." },
      { icon: "Lock", title: "Student Safety", description: "Protecting student data and creating secure digital learning environments." },
      { icon: "Layers", title: "Digital Learning", description: "Implementing and managing LMS platforms and collaboration tools." },
    ],
    services: [3, 4, 7, 8, 5],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "Brand and digital presence that closes deals",
    icon: "Home",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200",
    challenges: [
      { icon: "Eye", title: "Visibility", description: "Getting listings in front of the right buyers at the right time." },
      { icon: "Smartphone", title: "Mobile Experience", description: "Buyers expect instant access to listings and virtual tours on any device." },
      { icon: "BarChart", title: "Lead Generation", description: "Converting website visitors into qualified leads and closed deals." },
    ],
    services: [1, 3, 7, 8, 9],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    tagline: "Seamless systems for buying, selling, and growing",
    icon: "ShoppingCart",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200",
    challenges: [
      { icon: "Zap", title: "Performance", description: "Fast, reliable e-commerce platforms that handle peak traffic without crashing." },
      { icon: "CreditCard", title: "Payment Security", description: "Secure payment processing and PCI compliance for customer trust." },
      { icon: "TrendingUp", title: "Growth", description: "Scaling operations and marketing to reach new customers and markets." },
    ],
    services: [3, 4, 5, 7, 8, 10],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    tagline: "Reliable IT and branding for service-driven firms",
    icon: "Briefcase",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200",
    challenges: [
      { icon: "Clock", title: "Efficiency", description: "Streamlining operations so professionals can focus on client service." },
      { icon: "FileCheck", title: "Compliance", description: "Meeting industry regulations and maintaining audit-ready documentation." },
      { icon: "Award", title: "Credibility", description: "Building a brand that communicates expertise and earns client trust." },
    ],
    services: [1, 3, 6, 7, 8],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "AITEK completely transformed how we manage our IT. We went from constant downtime to zero issues in 6 months.",
    name: "Ahmed R.",
    role: "Operations Director",
  },
  {
    quote: "Their team built our software from scratch and delivered on time, every milestone. Exceptional work.",
    name: "Sarah M.",
    role: "Founder & CEO",
  },
  {
    quote: "The brand identity they created for us is stunning. Clients reach out specifically because of our new look.",
    name: "James K.",
    role: "Business Owner",
  },
];

export const stats: Stat[] = [
  { value: "150+", label: "Projects Delivered", numericValue: 150 },
  { value: "50+", label: "Happy Clients", numericValue: 50 },
  { value: "10+", label: "Years of Experience", numericValue: 10 },
  { value: "99%", label: "Client Retention Rate", numericValue: 99 },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries", hasDropdown: true },
  { name: "Brand & Design", href: "/brand-design" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];