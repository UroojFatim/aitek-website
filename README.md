# AITEK Solutions Website

A modern, animated marketing website for AITEK Solutions built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── page.tsx              # Home page
├── layout.tsx            # Root layout
├── globals.css           # Global styles
├── sitemap.ts            # Sitemap
├── robots.ts             # Robots.txt
├── industries/
│   └── [slug]/
│       └── page.tsx      # Industry page template
├── brand-design/
│   └── page.tsx          # Brand & Design page
├── about/
│   └── page.tsx          # About page
└── contact/
    └── page.tsx          # Contact page

components/
├── Navbar.tsx
├── Footer.tsx
├── AnimatedSection.tsx
├── AnimatedCounter.tsx
├── ServiceCard.tsx
└── sections/
    ├── Hero.tsx
    ├── TrustedBy.tsx
    ├── WhatWeDo.tsx
    ├── Services.tsx
    ├── Stats.tsx
    ├── BrandTech.tsx
    ├── Industries.tsx
    ├── WhyAitek.tsx
    ├── Testimonials.tsx
    └── CTABanner.tsx

lib/
├── utils.ts
└── data.ts               # All site data

types/
└── index.ts              # TypeScript types
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ Framer Motion scroll animations
- ✅ Animated counters
- ✅ Marquee scrolling
- ✅ Floating blob backgrounds
- ✅ Industry pages with dynamic routing
- ✅ Contact form
- ✅ SEO optimized (sitemap, robots, metadata)
- ✅ Semantic HTML

## Color Theme

- Primary: `#0A5EF5`
- Secondary: `#00C2CB`
- Navy: `#0D1B2A`
- Light BG: `#F8FAFF`

## Routes

- `/` - Home
- `/industries/[slug]` - Industry pages (6 industries)
- `/brand-design` - Brand & Design
- `/about` - About
- `/contact` - Contact
