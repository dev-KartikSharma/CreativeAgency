# Project: Modern High-Performance Portfolio Website (React + Vite + Tailwind + Framer Motion)

## Authoritative Design Reference
- **Figma File Key**: `vmC1knGbGcG5nIBSMhODeW`
- **Main Landing Page**: Node `3:4` (`Media-homepage`)
- **Contact Overlay**: Node `11:25` (`contact-overlay`)
- **User Request**: `c:/Users/HP/Desktop/Money/.agents/ORIGINAL_REQUEST.md`

---

## Architecture

### Tech Stack
- **Framework**: React 18.3.1 + TypeScript
- **Bundler**: Vite 5.4.14
- **Styling**: Tailwind CSS 3.4.17 + PostCSS + Autoprefixer
- **Motion & Transitions**: Framer Motion 11.15.0
- **Icons**: Inline zero-dependency React SVG components (`ArrowUpRightIcon`, `CloseIcon`, `ArrowRightIcon`)
- **Fonts**: Google Fonts via `index.html` CDN (`Big Shoulders Display`, `Archivo Black`, `Cormorant Garamond`, `Instrument Sans`, `Geist Mono`)
- **Testing**: Vitest + JSDOM / Playwright E2E suite

### Design Tokens
- **Colors**:
  - `bg-base`: `#111012` (ultra-deep charcoal black body)
  - `bg-card-dark`: `#1A1816` (portfolio switcher & project cards)
  - `bg-card-mid`: `#1C1A1E` (capabilities section & service cards)
  - `bg-placeholder`: `#2B2A28` (project wireframe display fill)
  - `accent-orange`: `#E63B19` (chapter tags, lines, title highlights, card arrows)
  - `accent-cta`: `#E8330C` (vivid CTA banner background)
  - `text-primary`: `#F9F8F6` (warm studio white)
  - `text-white`: `#FFFFFF` (crisp white)
  - `text-muted`: `#8D8B91` (editorial body gray)
  - `text-dim`: `#8A8884` (inactive category text)
  - `stroke-primary`: `#2C2A2F` (section borders, dividers, underlines)
  - `stroke-card`: `#2B2A28` (portfolio card borders)
- **Typography Families**:
  - `font-display`: `'Big Shoulders Display', sans-serif`
  - `font-archivo`: `'Archivo Black', sans-serif`
  - `font-serif`: `'Cormorant Garamond', serif`
  - `font-sans`: `'Instrument Sans', sans-serif`
  - `font-mono`: `'Geist Mono', monospace`

---

## Feature Inventory

Every feature from user requirements and Figma specifications is inventoried below:

| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Scaffolding & Config | Vite + React 18 + TS + Tailwind 3.4 + PostCSS setup | M1 | Survey / Tech |
| 2 | Design Tokens & Fonts | Google Fonts link, Tailwind colors/fonts/animation config | M1 | Survey / Tech |
| 3 | Core Layout Shell | Responsive container, header/footer layout, global styles | M1 | Survey / Tech |
| 4 | Inline SVG Icons | Typed React components for arrows and close icons | M1 | Survey / Assets |
| 5 | Top Navigation Bar | Wordmark "CREATIVE MARKETING.", section links, "Contact Us" CTA | M2 | Figma 3:16 |
| 6 | Hero Typography Lockup | 192px CREATIVE / MARKETING + 80px "Made Easy" italic serif | M2 | Figma 3:17-3:21 |
| 7 | Hero Brutalist Texture | 1440x680 overlay at 12% opacity with CSS/SVG noise fallback | M2 | Figma 11:4 |
| 8 | Hero Subtitle | "WHERE CREATIVITY BECOMES REALITY" 24px Big Shoulders | M2 | Figma 11:5 |
| 9 | Hero Infinite Ticker | Continuous marquee banner in #E63B19 with agency manifesto | M2 | Figma 3:22-3:23 |
| 10 | Philosophy Tag & Header | 12x1px orange line + "01 / Our Philosophy" tag | M3 | Figma 3:26 |
| 11 | Philosophy Statement | 48px Cormorant Garamond core statement | M3 | Figma 3:30 |
| 12 | Philosophy Body Copy | 18px Instrument Sans editorial description | M3 | Figma 3:32 |
| 13 | Philosophy Metrics | "Radical Transparency" (100%) and "Conversion Optimization" (+42%) | M3 | Figma 3:33-3:39 |
| 14 | Works Tag & Headline | 12x1px line + "02 / Selected Works" + "Case Studies..." headline | M3 | Figma 3:42-3:46 |
| 15 | Category Switcher | 320px panel: "Brand Identities Built" (6px bar) vs "Stories We've Told" (2px bar) | M3 | Figma 3:48-3:54 |
| 16 | Project Showcase Cards | 428px cards, 360px #2B2A28 placeholder with 2px orange border, tags, titles | M3 | Figma 3:57-3:70 |
| 17 | Capabilities Header | 12x1px line + "03 / Capabilities" + 44px headline + description | M4 | Figma 3:83-3:89 |
| 18 | Capabilities Service Cards| 3 x 405px cards: 01 Brand Strategy, 02 Interface Design, 03 Growth Marketing | M4 | Figma 3:91-3:121 |
| 19 | Service Card Badges | Pill chips with 100px radius, rgba(230,59,25,0.07) fill & border | M4 | Figma 3:99, etc. |
| 20 | Service Card Hover Effects| Border highlight, arrow translate(3px, -3px), card subtle elevation | M4 | Figma 3:92 |
| 21 | CTA Banner "LET'S WORK" | 200px Archivo Black headline on solid #E8330C background | M4 | Figma 3:136-3:139 |
| 22 | CTA Button | High-contrast 2px bordered "Contact Us" trigger button | M4 | Figma 3:142-3:143 |
| 23 | Footer Brand Column | Wordmark "CREATIVE MARKETING." + agency mission statement | M4 | Figma 3:148-3:150 |
| 24 | Footer Inquiries Column | Inquiries header (#E63B19), hello@creativemarketing.co, (555) 321-7654 | M4 | Figma 3:152-3:155 |
| 25 | Footer Location Column | Location header (#E63B19), Sunset Blvd, Los Angeles, CA 90028 | M4 | Figma 3:156-3:159 |
| 26 | Footer Legal & Copyright | © 2026 Creative Marketing Collective, Privacy Policy, Terms of Service | M4 | Figma 3:160-3:164 |
| 27 | Contact Modal Container | Fullscreen fixed overlay (#111012, p-16, flex justify-between) | M5 | Figma 11:25 |
| 28 | Contact Modal Header | 32px "Contact" title in Big Shoulders + 48px round close button with SVG | M5 | Figma 11:26-11:28 |
| 29 | Contact Left Column | 140px "Let's Talk." headline, 14px copy, hello@fusionforce.co, +91 95998 29714 | M5 | Figma 11:31-11:39 |
| 30 | Contact Right Column | 56px "Connect with us." italic serif + white @Instagram card with arrow badge | M5 | Figma 11:40-11:47 |
| 31 | Contact Modal Dismissal | Close button click, backdrop click, and Escape key listener | M5 | Figma / R3 |
| 32 | Modal Motion & UX | AnimatePresence fade/slide, body scroll lock, focus trap | M5 | Figma / UX |
| 33 | Responsive Layouts | Desktop (1440px), Tablet (768px), and Mobile (<768px) visual polish | M1-M6 | ORIGINAL_REQUEST R1 |
| 34 | E2E Test Suite (Tiers 1-4) | Opaque-box test runner covering features, boundaries, interactions, workload | E2E Track | ORIGINAL_REQUEST R4 |
| 35 | 100% E2E Pass & Hardening | Implementation passes 100% of E2E tests + Tier 5 adversarial tests | M6 | ORIGINAL_REQUEST R4 |
| 36 | Production Build | `npm run build` succeeds with exit code 0, no TS errors, dev server clean | M6 | ORIGINAL_REQUEST R4 |

---

## Milestones

| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| **M1** | Project Scaffold & Foundations | Vite, React 18, Tailwind config, fonts, SVG icons, base shell, tokens | None | **DONE** |
| **M2** | Hero Viewport & Navigation | Header nav bar, Hero display typography, texture, subtitle, marquee ticker | M1 | **DONE** |
| **M3** | Narrative Sections (01 & 02) | Philosophy section (01) + Selected Works (02) with Category Switcher | M1 | **DONE** |
| **M4** | Capabilities (03), CTA & Footer | Capabilities (03) service cards, "LET'S WORK" CTA banner, multi-column Footer | M1 | **DONE** |
| **M5** | Interactive Contact Modal | Full-screen Contact Modal (node 11:25), header, 2-col content, Esc listener, motion | M1 | **DONE** |
| **M6** | Integration & 100% E2E Pass | Assembly, full responsive QA, 100% E2E test pass, Tier 5 hardening, build verification | M1, M2, M3, M4, M5, E2E | **DONE** |
| **E2E**| E2E Testing Track | Independent opaque-box test runner, Tiers 1-4 test suite, publishes TEST_READY.md | None | **DONE** |

---

## Interface Contracts

### Navigation ↔ App State
- `onOpenContact: () => void`: Triggered by "Contact Us" buttons in Navigation, CTA Banner, or inline links.

### ContactModal ↔ App State
- `isOpen: boolean`: Controls modal visibility.
- `onClose: () => void`: Dismisses modal; triggered by Close button, backdrop, or Escape key.

### CategorySwitcher ↔ SelectedWorks
- `activeCategory: 'brand' | 'stories'`: Currently selected work filter tab.
- `onSelectCategory: (category: 'brand' | 'stories') => void`: Switches active tab state with animated transition.

---

## Code Layout

```
c:/Users/HP/Desktop/Money/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── assets/
│       ├── brutalist-texture.png
│       ├── arrow-up-right.svg
│       ├── x-circle.svg
│       └── arrow-right.svg
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── types/
    │   └── index.ts
    ├── utils/
    │   └── cn.ts
    └── components/
        ├── icons/
        │   ├── ArrowUpRightIcon.tsx
        │   ├── ArrowRightIcon.tsx
        │   └── CloseIcon.tsx
        ├── Navigation.tsx
        ├── Hero.tsx
        ├── Philosophy.tsx
        ├── SelectedWorks.tsx
        ├── Capabilities.tsx
        ├── ContactCTA.tsx
        ├── Footer.tsx
        └── ContactModal.tsx
```
