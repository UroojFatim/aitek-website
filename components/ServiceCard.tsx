"use client";

import { motion } from "framer-motion";
import { 
  Server, Code2, Cloud, ShieldCheck, Palette,
  TrendingUp, Building2, BrainCircuit, Workflow,
  MessageSquareMore, Factory, LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Server,
  Code2,
  Cloud,
  ShieldCheck,
  Palette,
  TrendingUp,
  Building2,
  BrainCircuit,
  Workflow,
  MessageSquareMore,
  Factory,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({ icon, title, description, index = 0 }: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Server;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-300 border-l-4 border-transparent hover:border-primary"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <IconComponent className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
      </div>
      <h3 className="font-heading font-semibold text-lg text-navy mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{description}</p>
    </motion.div>
  );
}