# Codebase Analysis Report: Lebanese Dental Clinic

This document provides a comprehensive overview of the "Lebanese Dental Clinic" web application project. It is intended to serve as context for ChatGPT or other LLMs to understand the project's structure, technology stack, design system, and current state.

## 1. Project Overview

**Name:** Lebanese Dental Clinic (Next.js Version)
**Description:** A luxury, modern landing page for a premier dental clinic based in Muscat. It highlights advanced dental implants and cosmetic dentistry.
**Architecture:** Next.js 15+ (App Router)

## 2. Technology Stack

- **Framework:** Next.js (React 19) using the App Router (`src/app/`).
- **Styling:** Tailwind CSS v4 (via PostCSS) with custom CSS variables in `globals.css`.
- **Animations:** 
  - **Framer Motion:** Used for entry animations, layout transitions, and micro-interactions (e.g., Hero section, Navbar).
  - **GSAP (GreenSock):** Specifically utilizing `ScrollTrigger` for scroll-linked animations (e.g., staggered fades and scaling in the About section).
- **Icons:** `lucide-react`.
- **Fonts:** Next.js optimized Google Fonts (`Inter` and `Outfit`).

## 3. Directory Structure

The project follows a standard Next.js App Router structure with components abstracted into a separate folder:

```text
/
├── public/                # Static assets (SVGs, etc.)
├── src/
│   ├── app/               # Next.js App Router root
│   │   ├── favicon.ico
│   │   ├── globals.css    # Core styling & Tailwind imports
│   │   ├── layout.tsx     # Root layout setup (Font configuration, HTML/Body tags)
│   │   └── page.tsx       # Main landing page assembling all components
│   └── components/        # Isolated UI components (React Server & Client Components)
│       ├── About.jsx
│       ├── Contact.jsx
│       ├── FeaturedService.jsx
│       ├── Footer.jsx
│       ├── Gallery.jsx
│       ├── Hero.jsx
│       ├── Navbar.jsx
│       ├── Services.jsx
│       ├── Team.jsx
│       └── WhyChooseUs.jsx
├── package.json           # Dependencies and scripts
├── tailwind.config.* / postcss.config.mjs # Styling configurations
└── eslint, tsconfig, etc. # Tooling config files
```

## 4. Component Architecture Breakdown

The main landing page (`src/app/page.tsx`) aggregates multiple distinct sections. Due to the heavy use of interactivity and animation libraries (GSAP, Framer Motion), most components utilize the `"use client"` directive.

1. **Navbar (`Navbar.jsx`):** A fixed, glassmorphism-style navigation bar that changes background opacity on scroll. Features Framer Motion for entrance and mobile menu toggling.
2. **Hero (`Hero.jsx`):** The primary view above the fold. Contains an aesthetic background image with a dark gradient overlay. Uses `framer-motion` for text entrance and a bouncing "Scroll Down" chevron.
3. **About (`About.jsx`):** A two-column layout providing information about the clinic. It utilizes `gsap` and `ScrollTrigger` to animate text (staggered upward fade) and the image (scaling) as they enter the viewport.
4. **Services (`Services.jsx`):** Displays the clinic's offerings.
5. **FeaturedService (`FeaturedService.jsx`):** Highlights a specific premium service (e.g., Implants).
6. **WhyChooseUs (`WhyChooseUs.jsx`):** Outlines the unique selling propositions of the clinic.
7. **Contact (`Contact.jsx`):** Contains the booking form, contact details, and location map.
8. **Gallery / Team / Footer:** Standard landing page sections detailing visual proof, personnel, and site navigation links/copyright.

## 5. Styling & Design System Concepts

The design achieves a **premium, luxury aesthetic** suitable for high-end medical care.

- **Color Palette (Inferred via tailwind classes):**
  - **`background` & `surface`:** Dark mode dominant themes utilizing deep blacks or dark grays to convey luxury.
  - **`primary` & `primaryHover`:** The main accent color (likely a gold, copper, or refined blue) used for buttons, icons, and text highlights.
  - **`textMain` & `textMuted`:** White and off-white/gray text for high contrast on dark backgrounds.
- **Glassmorphism:** Achieved via utility classes like `bg-background/80`, `backdrop-blur-md`, and subtle transparent borders (`border-white/10`).
- **Typography:** 
  - `font-display` (likely `Outfit`) for headings ensuring a modern, geometric look.
  - `font-sans` (likely `Inter`) for highly readable body text.
- **Micro-interactions:** Extensive use of `hover:scale-105`, `group-hover`, and smooth `transition-all` to make the UI feel reactive.

## 6. How Prompting Should Be Handled

When modifying this repository:
- Ensure any added interactive components continue to specify `"use client"`.
- Maintain the strict separation of layout concerns (Tailwind utility classes) and animation concerns (GSAP/Framer Motion).
- Adhere to the established Tailwind custom color variables (e.g., `bg-surface`, `text-primary`) rather than hardcoding arbitrary HEX codes.
- Do not remove existing GSAP or Framer Motion hooks when updating component content, to preserve the premium feel.
