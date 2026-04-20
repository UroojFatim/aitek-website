export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  image: string;
  challenges: { icon: string; title: string; description: string }[];
  services: number[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Stat {
  value: string;
  label: string;
  numericValue: number;
}