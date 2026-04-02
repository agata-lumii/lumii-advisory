# Lumii Advisory — Website

A premium digital strategy consulting website for Lumii Advisory, built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## Overview

Lumii Advisory is a Sydney-based digital strategy consultancy founded by Agata Adamczak. This website showcases Lumii's services across Digital Strategy, Customer Experience, Ecommerce, MarTech Advisory, and AI Enablement.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom design system
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Fonts:** Cormorant Garamond (display) + DM Sans (body) via Google Fonts
- **Deployment:** Netlify

## Prerequisites

- Node.js 20 or higher
- npm 9 or higher

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Swap Images

All images live in the `public/images/` directory. To update an image:

1. Drop the new file into `public/images/`
2. Use the same filename as the existing image, OR update the `src` prop in the relevant component

Expected image filenames:
- `agata-hero.jpg` — Hero section portrait (right panel)
- `agata-about-main.jpg` — Philosophy section primary photo
- `agata-about-accent.jpg` — Philosophy section accent photo
- `agata-about-full.jpg` — About section full portrait

Images should be high-resolution JPEGs. Portrait orientation works best for the hero and about images.

## How to Edit Copy

All text content lives directly in the component files:

| Section | File |
|---|---|
| Hero headline & sub-copy | `components/Hero.tsx` |
| Philosophy / intro text | `components/PhilosophySection.tsx` |
| Core principles | `components/PillarsSection.tsx` |
| Services descriptions | `components/ServicesSection.tsx` |
| Who We Help verticals | `components/VerticalsSection.tsx` |
| Process steps | `components/ProcessSection.tsx` |
| Testimonials | `components/TestimonialsSection.tsx` |
| About / bio | `components/AboutSection.tsx` |
| CTA banner | `components/CTABanner.tsx` |
| Footer links & text | `components/Footer.tsx` |
| Navigation links | `components/Navbar.tsx` |

## Pages

| Route | File |
|---|---|
| `/` | `app/page.tsx` |
| `/services` | `app/services/page.tsx` |
| `/who-we-help` | `app/who-we-help/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/brand` | `app/brand/page.tsx` |

## Deploying to Netlify

### Option 1: Connect GitHub Repo (Recommended)

1. Push this project to a GitHub repository
2. Log in to [Netlify](https://app.netlify.com)
3. Click **Add new site** → **Import an existing project**
4. Connect your GitHub account and select the repository
5. Netlify will auto-detect the build settings from `netlify.toml`
6. Click **Deploy site**

### Option 2: Drag & Drop

1. Run the build locally:
```bash
npm run build
```
2. Go to [app.netlify.com](https://app.netlify.com) → **Sites**
3. Drag the `.next` folder onto the deploy area

Note: For drag & drop, the `@netlify/plugin-nextjs` plugin handles SSR correctly. Make sure Node 20 is available.

## How to Connect a Custom Domain

1. In Netlify, go to your site → **Domain management**
2. Click **Add a domain**
3. Enter your domain (e.g. `lumii.com.au`)
4. Follow the DNS configuration instructions:
   - Add a CNAME record pointing to your Netlify subdomain, OR
   - Update your nameservers to Netlify's nameservers
5. Netlify automatically provisions an SSL certificate via Let's Encrypt

## Design System

See `/brand` page at `http://localhost:3000/brand` for the full design system reference including colour palette, typography specimens, and button styles.

### Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `near-black` | `#1E1C1A` | Primary backgrounds, text |
| `charcoal` | `#3A3834` | Secondary text |
| `gold` | `#C9A96E` | Accent, CTAs |
| `gold-light` | `#E8D5B0` | Soft gold tints |
| `slate-warm` | `#7A776F` | Body text |
| `ash` | `#B8B4AC` | Labels, captions |
| `parchment` | `#DDD9D2` | Borders, dividers |
| `stone` | `#EAE7E1` | Section backgrounds |
| `ivory` | `#F9F7F4` | Card backgrounds |
| `warm-white` | `#FDFCFA` | Page backgrounds |

## License

Private — all rights reserved. © 2026 Lumii Advisory.
