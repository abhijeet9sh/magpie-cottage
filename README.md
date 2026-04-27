# 🏡 Magpie Cottage — A Jungle Retreat in Lansdowne

A premium hospitality website for **Magpie Cottage**, a private three-bedroom villa nestled on the edge of a tiger reserve in Lansdowne, Uttarakhand. Built with Next.js 16, Tailwind CSS 4, and Framer Motion.

> **Live preview:** Run `npm run dev` and visit `http://localhost:3000`

---

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Pages & Routes](#-pages--routes)
- [Design System](#-design-system)
- [Components](#-components)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Key Design Decisions](#-key-design-decisions)
- [Known Considerations](#-known-considerations)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 18 (tested on v24.15.0)
- **npm** (comes with Node.js)

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables (see section below)
#    Copy .env.example to .env.local and fill in your keys

# 3. Run development server
npm run dev

# 4. Open in browser
#    → http://localhost:3000
```

### Build for Production

```bash
npm run build   # Creates optimized production build
npm start       # Serves the production build
```

---

## 🛠 Tech Stack

| Layer         | Technology                                      |
| ------------- | ----------------------------------------------- |
| Framework     | **Next.js 16.2.4** (App Router, Turbopack)      |
| UI Library    | **React 19.2.4**                                |
| Styling       | **Tailwind CSS 4.2.4** + PostCSS                |
| Typography    | **Cormorant Garamond** (display) + **DM Sans** (body) via Google Fonts |
| Animations    | **Framer Motion 12.38** + custom clip-reveal/split-text |
| Smooth Scroll | **Lenis 1.3.23**                                |
| Icons         | **Lucide React 1.8** + inline SVGs              |
| Forms         | **React Hook Form 7** + **Zod 4** validation    |
| Date Picker   | **React Day Picker 9**                          |
| Payments      | **Razorpay 2.9.6**                              |
| Email         | **Resend 6.12.2**                               |
| Language      | **TypeScript 5**                                |

---

## 📁 Project Structure

```
magpie-cottage/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, providers, floating buttons)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Design tokens, theme, utility classes
│   ├── favicon.ico
│   ├── api/                      # Server-side API routes
│   │   ├── contact/route.ts      # Contact form → Resend email
│   │   ├── create-order/route.ts # Razorpay order creation
│   │   └── verify-payment/route.ts # Razorpay payment verification
│   ├── book/                     # Booking page + confirmation
│   ├── contact/                  # Contact form + map
│   ├── experiences/              # Activities & dining
│   ├── gallery/                  # Photo tour (Airbnb-style layout)
│   ├── journal/                  # Blog articles
│   │   └── [slug]/               # Dynamic article pages
│   ├── our-story/                # About the hosts
│   ├── the-cottage/              # Rooms & amenities
│   ├── privacy/                  # Privacy policy
│   └── terms/                    # Terms & conditions
│
├── components/
│   ├── booking/                  # BookingPage.tsx (date picker, Razorpay integration)
│   ├── contact/                  # ContactForm.tsx (react-hook-form + zod)
│   ├── gallery/                  # GalleryClient.tsx (scroll spy, lightbox)
│   ├── home/                     # Homepage sections
│   │   ├── HeroSection.tsx       # Full-screen hero with parallax
│   │   ├── StoryTeaser.tsx       # "Where the jungle meets the river"
│   │   ├── RoomsPreview.tsx      # Room cards preview
│   │   ├── ExperiencesPreview.tsx # 3-column experience cards
│   │   ├── PhotoSlideshow.tsx    # Auto-scrolling photo strip
│   │   ├── TestimonialsSection.tsx # Rotating guest quotes
│   │   ├── InstagramFeed.tsx     # Instagram-style grid
│   │   ├── MapSection.tsx        # Location map + directions
│   │   └── CtaBanner.tsx         # "Ready to unplug?" CTA with feature icons
│   ├── layout/
│   │   ├── Navbar.tsx            # Center-logo split nav, floating pill on scroll
│   │   ├── Footer.tsx            # Multi-column footer with social links
│   │   └── PageTransition.tsx    # Route transition animations
│   ├── providers/
│   │   └── LenisProvider.tsx     # Smooth scrolling wrapper
│   └── ui/                       # Reusable UI primitives
│       ├── AnimatedButton.tsx    # Hover-animated CTA buttons
│       ├── AnimatedSection.tsx   # Scroll-triggered section reveals
│       ├── AnimatedText.tsx      # Text entrance animations
│       ├── CustomCursor.tsx      # Custom cursor effect
│       ├── ImageLightbox.tsx     # Fullscreen image viewer
│       ├── ImageReveal.tsx       # Clip-path image reveal
│       ├── LocationButton.tsx    # Fixed map pin button (bottom-left)
│       ├── MarqueeTicker.tsx     # Scrolling text marquee
│       ├── PageHero.tsx          # Reusable subpage hero banner
│       ├── ParallaxImage.tsx     # Scroll-linked parallax
│       └── WhatsAppButton.tsx    # Fixed WhatsApp chat button (bottom-right)
│
├── lib/
│   ├── animations.ts             # Shared Framer Motion variants
│   ├── razorpay.ts               # Razorpay client config
│   └── data/
│       └── journal.ts            # Blog article data (static)
│
├── public/
│   ├── logo.svg                  # Magpie Cottage logo
│   └── images/
│       ├── gallery/              # Property photos by room category
│       │   ├── living-room/      # img_1.jpg → img_8.jpg
│       │   ├── dining-area/      # img_1.jpg → img_5.jpg
│       │   ├── bedroom-1/        # img_1.jpg → img_10.jpg
│       │   ├── bedroom-2/        # img_1.jpg → img_7.jpg
│       │   ├── bedroom-3/        # img_1.jpg → img_7.jpg
│       │   ├── full-bathroom-1/  # img_1.jpg → img_2.jpg
│       │   ├── full-bathroom-2/  # img_1.jpg → img_2.jpg
│       │   ├── full-bathroom-3/  # img_1.jpg → img_2.jpg
│       │   ├── exterior/         # img_1.jpg → img_10.jpg
│       │   └── additional-photos/# img_1.jpg → img_4.jpg
│       └── real/                 # Hero & feature images
│           ├── outdoor.jpg
│           └── dining.jpg
│
├── next.config.ts                # Next.js config (local images only)
├── tsconfig.json                 # TypeScript config
├── postcss.config.mjs            # PostCSS + Tailwind
├── eslint.config.mjs             # ESLint config
├── package.json                  # Dependencies & scripts
└── .env.local                    # Environment variables (DO NOT COMMIT)
```

---

## 🗺 Pages & Routes

| Route                    | Page                | Status |
| ------------------------ | ------------------- | ------ |
| `/`                      | Homepage            | ✅ Static |
| `/our-story`             | About the hosts     | ✅ Static |
| `/the-cottage`           | Rooms & amenities   | ✅ Static |
| `/experiences`           | Activities & dining | ✅ Static |
| `/gallery`               | Photo tour          | ✅ Static |
| `/journal`               | Blog listing        | ✅ Static |
| `/journal/[slug]`        | Blog article        | ✅ SSG   |
| `/contact`               | Contact form + map  | ✅ Static |
| `/book`                  | Booking + payment   | ✅ Static |
| `/book/confirmed`        | Booking confirmation| ✅ Static |
| `/privacy`               | Privacy policy      | ✅ Static |
| `/terms`                 | Terms & conditions  | ✅ Static |
| `/api/contact`           | Contact form handler| ✅ Dynamic |
| `/api/create-order`      | Razorpay order API  | ✅ Dynamic |
| `/api/verify-payment`    | Payment verification| ✅ Dynamic |

**Total: 20 pages** (all compile successfully)

---

## 🎨 Design System

### Color Palette

| Token           | Hex       | Usage                        |
| --------------- | --------- | ---------------------------- |
| `forest`        | `#394735` | Primary dark green           |
| `forest-mid`    | `#4F6149` | Secondary green              |
| `forest-light`  | `#6E8268` | Light green accents          |
| `sage`          | `#8A987D` | Muted green (buttons, icons) |
| `sage-light`    | `#F0F2ED` | Light sage backgrounds       |
| `sage-border`   | `#A3AF99` | Border color                 |
| `cream`         | `#F8F7F4` | Primary background           |
| `text-dark`     | `#252525` | Headings                     |
| `text-mid`      | `#525252` | Body text                    |
| `text-light`    | `#8A8A8A` | Captions, labels             |

### Typography

| Role    | Font               | Variable           |
| ------- | ------------------ | ------------------- |
| Display | Cormorant Garamond | `--font-cormorant`  |
| Body    | DM Sans            | `--font-dm-sans`    |

Use in CSS: `font-display` / `font-body`

### Animation Library (`lib/animations.ts`)

| Variant               | Description                               |
| --------------------- | ----------------------------------------- |
| `fadeUp`              | Fade in + slide up                        |
| `fadeIn`              | Simple opacity fade                       |
| `staggerContainer`    | Parent container for staggered children   |
| `cardStaggerContainer`| Stagger variant for card grids            |
| `cardItem`            | Individual card entrance                  |
| `splitTextContainer`  | Parent for word-by-word text reveal       |
| `splitTextWord`       | Individual word 3D rotation entrance      |
| `clipReveal`          | CSS clip-path wipe-in                     |

---

## 🧩 Components

### Layout Components

- **`Navbar`** — Center-logo split navigation. Transforms from transparent full-width to floating pill on scroll. Includes dropdown menus and mobile overlay.
- **`Footer`** — 4-column footer with navigation, contact info, social links (Instagram/Facebook), and legal links.
- **`PageTransition`** — Framer Motion route transition wrapper.

### Homepage Sections (render order)

1. `HeroSection` — Full-viewport video/image hero with parallax
2. `MarqueeTicker` — Scrolling amenity highlights
3. `StoryTeaser` — Two-column intro with image reveal
4. `ExperiencesPreview` — 3-column experience cards with labels
5. `RoomsPreview` — Room preview cards
6. `PhotoSlideshow` — Auto-scrolling photo strip
7. `TestimonialsSection` — Rotating guest testimonials
8. `InstagramFeed` — Instagram-style photo grid
9. `MapSection` — Google Maps embed with directions
10. `CtaBanner` — Final CTA with feature icons row

### Reusable UI Primitives

- **`AnimatedSection`** — Wrap any element for scroll-triggered entrance
- **`AnimatedButton`** — Primary/secondary/outline CTA buttons
- **`PageHero`** — Full-width subpage hero with title overlay
- **`ImageLightbox`** — Fullscreen photo viewer with keyboard navigation
- **`ImageReveal`** — Clip-path image entrance animation

### Floating Action Buttons (always visible)

- **`WhatsAppButton`** — Bottom-right, links to `wa.me/919811934909`
- **`LocationButton`** — Bottom-left, opens Google Maps

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root with these keys:

```env
# Razorpay (Payment Gateway)
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_secret

# Resend (Email Service)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Public keys (exposed to browser)
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
```

### Where to get these:

| Service  | Dashboard URL                    | Purpose            |
| -------- | -------------------------------- | ------------------|
| Razorpay | https://dashboard.razorpay.com   | Payment processing |
| Resend   | https://resend.com/api-keys      | Contact form emails|

> ⚠️ **Never commit `.env.local` to version control.** It's already in `.gitignore`.

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard:
# → Settings → Environment Variables → Add all from .env.local
```

### Other Platforms

The project is a standard Next.js app. It deploys on any platform supporting Next.js:

- **Netlify** — Use `@netlify/plugin-nextjs`
- **Railway** — Auto-detects Next.js
- **AWS Amplify** — Supports Next.js SSR
- **Self-hosted** — `npm run build && npm start` (needs Node.js server)

### Static Export (if no API routes needed)

If you don't need Razorpay/contact form APIs, you can add `output: 'export'` to `next.config.ts` for a fully static site.

---

## 💡 Key Design Decisions

### Aesthetic Benchmark

The design follows the boutique luxury aesthetic of [thegaj.in](https://thegaj.in):
- Center-logo split navigation
- Floating pill navbar on scroll
- Clean rectangular cards with below-image labels
- Structured CTA banners with feature icon rows
- Generous but intentional whitespace

### All Images Are Local

All property images are stored in `public/images/` — no external CDN or remote image loading. This ensures:
- Zero dependency on external services
- No CORS or remote pattern configuration needed
- Fastest possible image loading

### Typography Strategy

- **Cormorant Garamond** (serif/italic) — Headlines, hero text, section titles → *luxury, editorial feel*
- **DM Sans** (sans-serif) — Body text, labels, navigation → *clean, modern readability*

### Animation Philosophy

- Scroll-triggered entrances (not page-load) to keep perceived performance fast
- Smooth Lenis scrolling for a polished feel
- Subtle micro-interactions (image zoom on hover, button scale) — never jarring

---

## 🤖 AI Agent & Skills Tooling

This project was built with **Google Antigravity** (AI coding agent) using a library of 1,400+ specialized skills. The skills system is what powers the agent to follow best practices for Next.js, design systems, animations, and more.

### Configuration Files

| File | Purpose |
|------|---------|
| `AGENTS.md` | Agent instructions — loaded automatically by Antigravity. Contains Next.js version warnings and skills catalog reference. |
| `CLAUDE.md` | Points to `AGENTS.md` (cross-agent compatibility). |

### Skills Locations

| Location | Type | Description |
|----------|------|-------------|
| `./skills/` (project root) | **Local** | Full 1,414-skill catalog installed in-project. Excluded from TS compilation via `tsconfig.json`. |
| `C:\Users\abhij\.gemini\antigravity\skills` | **Global** | System-wide skill catalog (same content, shared across all projects). |
| `./skills/.antigravity-install-manifest.json` | Manifest | Tracks which skills are installed and their versions. |

### Key Skills Used in This Project

The following skills were actively leveraged during development:

| Skill | What It Did |
|-------|-------------|
| `@frontend-design` | Guided the premium boutique luxury aesthetic, color palette, and typography choices |
| `@nextjs-best-practices` | Ensured proper App Router patterns, Server Components, and data fetching |
| `@react-patterns` | Modern React hooks, composition, and TypeScript patterns |
| `@tailwind-patterns` | Tailwind CSS v4 configuration, design token architecture |
| `@design-spells` | Micro-interactions, hover effects, and animation magic |
| `@animejs-animation` | Complex scroll-triggered and clip-reveal animation patterns |
| `@web-design-guidelines` | Compliance with modern web interface standards |
| `@powershell-windows` | Windows-specific command patterns during development |
| `@debugger` | Systematic debugging of rendering issues and build errors |

### How to Use Skills

In any Antigravity or Claude Code conversation, invoke a skill by name:

```
@frontend-design — audit this page for visual quality
@nextjs-best-practices — review this component
@debugger — help fix this rendering issue
```

### Transferring Skills to Another Machine

The `./skills/` directory is **large** (~1,400 folders). When transferring:

- **Option A (Recommended):** Exclude `skills/` from the copy. On the new machine, the global skills at `~/.gemini/antigravity/skills` will be used instead.
- **Option B:** Include `skills/` if you want the project to be fully self-contained. Note: this adds significant folder count but minimal disk space (mostly small markdown files).

> ⚠️ The `skills/` directory is already excluded from TypeScript compilation in `tsconfig.json` (`"exclude": ["node_modules", "skills"]`). It is **not** deployed to production — it's purely for AI agent development assistance.

---

## ⚠️ Known Considerations

1. **`skills/` directory** — This is excluded from TypeScript compilation in `tsconfig.json`. It's for development tooling only and should not be deployed.

2. **Dark mode** — CSS variables are defined for dark mode in `globals.css`, but the site currently targets light mode. Dark mode may need component-level adjustments.

3. **Razorpay test mode** — The current `.env.local` likely uses test keys. Switch to live keys before accepting real payments.

4. **Contact form** — Requires a verified domain in Resend to send emails from your own address.

5. **Gallery data** — Image data is hardcoded in `GalleryClient.tsx`. To add/remove photos, update the `galleryCategories` array and place images in the corresponding `public/images/gallery/` subdirectory.

6. **Journal articles** — Blog content is in `lib/data/journal.ts` as static data. Add new articles to the `journalArticles` array.

---

## 📝 Scripts

```bash
npm run dev    # Start development server (Turbopack)
npm run build  # Create production build
npm start      # Serve production build
npm run lint   # Run ESLint
```

---

## 📞 Business Contact

- **Email:** bookmagpiecottage@gmail.com
- **WhatsApp:** +91 98119 34909
- **Location:** Lansdowne, Pauri Garhwal, Uttarakhand, India

---

*Built with ❤️ for Magpie Cottage*
