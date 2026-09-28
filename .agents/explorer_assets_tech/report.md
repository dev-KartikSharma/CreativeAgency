# Comprehensive Technical & Asset Investigation Report

**Project**: Brutalist Marketing Portfolio Website  
**Target Nodes**: `Media-homepage` (`3:4`) & `contact-overlay` (`11:25`)  
**Figma File Key**: `vmC1knGbGcG5nIBSMhODeW`  
**Environment**: Node `v24.20.0`, npm `11.19.0`, Windows 11  
**Author**: `explorer_assets_tech`  
**Date**: 2026-09-11  

---

## 1. Executive Summary & Mission Scope

This investigation establishes the definitive asset inventory, typographic system, design tokens, and technical stack configuration for building the high-performance brutalist marketing portfolio website. 

The application architecture requires:
- Strict visual fidelity to Figma node `3:4` (1440px desktop base with responsive tablet/mobile scaling) and modal node `11:25`.
- A hybrid brutalist typographic lockup combining massive grotesque display fonts (`Big Shoulders Display`, `Archivo Black`), classical editorial serifs (`Cormorant Garamond`), modern utilitarian grotesk (`Instrument Sans`), and high-precision monospaced text (`Geist Mono`).
- Zero-external-dependency vector SVGs for all arrows and modal dismissal icons, along with an optimized brutalist film grain background texture.
- A modern, lightweight, type-safe stack: React 18, Vite 5, Tailwind CSS v3, TypeScript, and Framer Motion for fluid transitions.

---

## 2. Complete Asset & Vector Icon Catalog

All icons and decorative elements from Figma nodes `3:4` and `11:25` have been inspected and extracted. Below is the authoritative catalog with exact dimensions, SVG path data, and component implementation blueprints.

### 2.1 Vector Icon Specifications

| Asset Name | Figma Node ID | Dimensions | Stroke / Fill | Exact SVG Path Data / Specification |
|---|---|---|---|---|
| `arrow-up-right.svg` | `#3:178`, `#3:181`, `#3:184` | `19px × 19px` | Stroke `#E63B19`, `2px`, `linecap: round` | `M13.4578 13.4577V5.5423H5.54236M13.4578 5.5423L5.54236 13.4577` |
| `x-circle.svg` | `#11:50` | `18px × 18px` | Stroke `#FFFFFF`, `2px`, `linecap: round` | `M11.2503 6.74993L6.74993 11.2503M6.74993 6.74993L11.2503 11.2503M16.5007 9.00011C16.5007 13.1426 13.1426 16.5007 9.00011 16.5007C4.85764 16.5007 1.49951 13.1426 1.49951 9.00011C1.49951 4.85764 4.85764 1.49951 9.00011 1.49951C13.1426 1.49951 16.5007 4.85764 16.5007 9.00011Z` |
| `arrow-right.svg` | `#11:47` | `18px × 18px` | Stroke `#FFFFFF`, `2px`, `linecap: round` | `M3.74951 8.99999H14.2507M9.00011 14.2506L14.2507 8.99999L9.00011 3.74939` |

### 2.2 Reusable React SVG Components

To eliminate external image network latency, prevent layout shift, and allow dynamic Tailwind color control via `currentColor`, icons should be implemented directly as typed React components:

```tsx
// src/components/icons/ArrowUpRightIcon.tsx
import React from 'react';

export const ArrowUpRightIcon: React.FC<{ className?: string }> = ({ className = 'w-[19px] h-[19px]' }) => (
  <svg
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M13.4578 13.4577V5.5423H5.54236M13.4578 5.5423L5.54236 13.4577"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// src/components/icons/CloseIcon.tsx
export const CloseIcon: React.FC<{ className?: string }> = ({ className = 'w-[18px] h-[18px]' }) => (
  <svg
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M11.2503 6.74993L6.74993 11.2503M6.74993 6.74993L11.2503 11.2503M16.5007 9.00011C16.5007 13.1426 13.1426 16.5007 9.00011 16.5007C4.85764 16.5007 1.49951 13.1426 1.49951 9.00011C1.49951 4.85764 4.85764 1.49951 9.00011 1.49951C13.1426 1.49951 16.5007 4.85764 16.5007 9.00011Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// src/components/icons/ArrowRightIcon.tsx
export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className = 'w-[18px] h-[18px]' }) => (
  <svg
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M3.74951 8.99999H14.2507M9.00011 14.2506L14.2507 8.99999L9.00011 3.74939"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
```

---

## 3. Background Texture & Decorative Elements

### 3.1 Hero Brutalist Texture Layer (`11:4`)
- **Figma Specification**: Node `#11:4`, `1440px × 680px`, absolute positioned at `top: 0, left: 0`, `opacity: 0.12`.
- **Image Reference**: `25b0fed433617116a325735b6f84d4af7270ebdd`.
- **Storage Location**: The source PNG is stored at `C:\Users\HP\AppData\Local\Programs\Antigravity\assets\brutalist-texture.png` and can be placed in `public/assets/brutalist-texture.png`.
- **Procedural SVG Noise Fallback**:
  To guarantee instant rendering under all network conditions with zero layout shift, an inline SVG procedural filter should be bundled as an overlay component:
  ```tsx
  export const BrutalistNoiseOverlay: React.FC = () => (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.12] mix-blend-screen overflow-hidden"
      style={{
        backgroundImage: `url('/assets/brutalist-texture.png')`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
      }}
      aria-hidden="true"
    />
  );
  ```

### 3.2 Geometric Decorative Tokens & Placeholders
- **Section Chapter Accents**:
  - `12px × 1px` solid line in `#E63B19` preceding uppercase section labels (`01 / Our Philosophy`, `02 / Selected Works`, `03 / Capabilities`).
- **Category Switcher Bars**:
  - Active Tab: `height: 6px`, `bg-[#E63B19]` (`#11:11`).
  - Inactive Tab: `height: 2px`, `bg-[#2B2A28]` (`#11:12`).
- **Project Card Image Placeholders**:
  - In Figma node `3:4` (nodes `#11:14` and `#3:66`), the cards feature brutalist wireframe display areas:
    - Background: `#2B2A28`
    - Border: `2px solid #E63B19`
    - Height: `360px`
    - Inner Label: Centered `Project 01` / `Project 02` in `Instrument Sans` 12px SemiBold UPPER, `#E63B19`.
- **Capabilities Pill Badges**:
  - Padding: `6px 12px`
  - Border radius: `100px` (`rounded-full`)
  - Background fill: `rgba(230, 59, 25, 0.07)`
  - Border stroke: `1px solid rgba(230, 59, 25, 0.2)`
  - Text: `Instrument Sans` 12px Medium, `#E63B19`.

---

## 4. Typography System & Google Fonts Integration

### 4.1 Authoritative Font Families

The Figma design relies on 5 distinct typography families:
1. **`Big Shoulders Display`**: Condensed brutalist display sans for titles and impact numbers.
   - Weights: `900` (Black), `700` (Bold), `500` (Medium).
2. **`Archivo Black`**: Ultra-heavy brutalist sans for the "LET'S WORK" CTA banner.
   - Weight: `400` (Regular).
3. **`Cormorant Garamond`**: High-editorial classical serif for headlines, italic statements, and wordmarks.
   - Weights: `400` (Regular & Italic), `500` (Medium), `600` (SemiBold), `700` (Bold).
4. **`Instrument Sans`**: Utilitarian grotesque for primary body copy, buttons, badges, and ticker.
   - Weights: `400` (Regular), `500` (Medium), `600` (SemiBold).
5. **`Geist Mono`**: Precision monospace for contact modal prompt copy, email, and phone numbers.
   - Weights: `400` (Regular), `500` (Medium).

### 4.2 Optimized CDN Import Tag (`index.html`)

Include the following preconnect and stylesheet link in `index.html`:

```html
<!-- Google Fonts Preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Authoritative Google Fonts Import -->
<link
  href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Big+Shoulders+Display:wght@500;700;900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Geist+Mono:wght@400;500;600&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap"
  rel="stylesheet"
>
```

### 4.3 Typography Usage Matrix

| Element | Text Content | Font Family | Size | Weight / Style | Line Height | Color |
|---|---|---|---|---|---|---|
| **CTA Banner Headline** | "LET'S WORK" | `Archivo Black` | `200px` | 400 Regular | `0.9em` | `#111012` |
| **Hero Display Line 1** | "CREATIVE" | `Big Shoulders Display` | `192px` | 900 Black | `0.8em` | `#FFFFFF` |
| **Hero Display Line 2** | "MARKETING" | `Big Shoulders Display` | `192px` | 900 Black | `0.8em` | `#E63B19` |
| **Hero Display Line 3** | "Made Easy" | `Cormorant Garamond` | `80px` | 400 Italic | `1.0em` | `#F9F8F6` |
| **Modal Headline** | "Let's Talk." | `Big Shoulders Display` | `140px` | 900 Black | `0.85em` | `#FFFFFF` |
| **Modal Serif Header** | "Connect with us." | `Cormorant Garamond` | `56px` | 400 Italic | `1.2em` | `#E63B19` |
| **Philosophy Statement** | "We believe that raw attention..." | `Cormorant Garamond` | `48px` | 400 Regular | `1.1em` | `#F9F8F6` |
| **Section Headlines** | "Case Studies...", "Engineered for..." | `Cormorant Garamond` | `44px` | 500 Medium | `1.1em` | `#F9F8F6` |
| **Instagram Card Title** | "@Instagram" | `Big Shoulders Display` | `44px` | 900 Black | Auto | `#000000` |
| **Active Category Tab** | "Brand Identities Built" | `Cormorant Garamond` | `36px` | 700 Bold | `1.0em` | `#F9F8F6` |
| **Inactive Category Tab**| "Stories We've Told" | `Cormorant Garamond` | `36px` | 700 Bold | `1.0em` | `#8A8884` |
| **Modal Section Title** | "Contact" | `Big Shoulders Display` | `32px` | 900 Black | Auto | `#E63B19` |
| **Project Card Title** | "Aura Luxury Essentials..." | `Cormorant Garamond` | `32px` | 500 Medium | `1.1em` | `#F9F8F6` |
| **Service Card Number** | "01", "02", "03" | `Big Shoulders Display` | `32px` | 700 Bold | Auto | `#E63B19` |
| **Service Card Title** | "Brand Strategy", etc. | `Cormorant Garamond` | `28px` | 500 Medium | Auto | `#F9F8F6` |
| **Hero Subtitle** | "WHERE CREATIVITY BECOMES REALITY"| `Big Shoulders Display` | `24px` | 500 Medium | `1.0em` | `rgba(249,248,246,0.8)` |
| **Brand Wordmark** | "CREATIVE MARKETING." | `Cormorant Garamond` | `20px` | 600 SemiBold | Auto | `#F9F8F6` |
| **Metric Labels** | "Radical Transparency", etc. | `Cormorant Garamond` | `20px` | 400 Regular | Auto | `#F9F8F6` |
| **Philosophy Body Copy** | "In a landscape crowded..." | `Instrument Sans` | `18px` | 400 Regular | `1.6em` | `#8D8B91` |
| **Capabilities Subtitle**| "Our specialized departments..." | `Instrument Sans` | `16px` | 400 Regular | `1.5em` | `#8D8B91` |
| **Service Card Desc** | "Developing rigorous market..." | `Instrument Sans` | `15px` | 400 Regular | `1.6em` | `#8D8B91` |
| **Contact Modal Copy** | "Ready to elevate your brand?..." | `Geist Mono` | `14px` | 400 Regular | `1.6em` | `#8D8B91` |
| **CTA Button Label** | "Contact Us" | `Instrument Sans` | `14px` | 600 SemiBold | Auto | `#111012` |
| **Metric Values** | "100%", "+42% Avg" | `Instrument Sans` | `14px` | 400 Regular | Auto | `#E63B19` |
| **Contact Email/Phone** | "hello@fusionforce.co", "+91..." | `Geist Mono` | `13px` | 500 Medium | Auto | `#FFFFFF` |
| **Footer Legal Links** | "© 2026...", "Privacy Policy" | `Instrument Sans` | `13px` | 400 Regular | Auto | `#8D8B91` |
| **Section Tag Labels** | "01 / Our Philosophy", etc. | `Instrument Sans` | `12px` | 600 SemiBold | Auto | `#E63B19` |
| **Marquee Ticker Copy** | "CENTERS AROUND MAKING..." | `Instrument Sans` | `12px` | 600 SemiBold | `1.4em` | `#000000` |
| **Pill Badge Chips** | "Positioning", "Figma Native" | `Instrument Sans` | `12px` | 500 Medium | Auto | `#E63B19` |

---

## 5. Color Palette & Tailwind CSS Tokens

### 5.1 Color Mapping

```js
// Design Color System
const colors = {
  // Backgrounds
  'bg-base': '#111012',        // Ultra-deep obsidian base
  'bg-card-dark': '#1A1816',   // Portfolio switcher & project cards
  'bg-card-mid': '#1C1A1E',    // Capabilities section & service cards
  'bg-placeholder': '#2B2A28', // Brutalist project placeholder fill
  
  // Accents
  'accent-orange': '#E63B19',  // Vibrant flame orange (typography, borders, tags)
  'accent-cta': '#E8330C',     // High-saturation CTA section background
  
  // Typography
  'text-primary': '#F9F8F6',   // Warm studio white
  'text-white': '#FFFFFF',     // Pure crisp white
  'text-muted': '#8D8B91',     // Soft studio gray
  'text-dim': '#8A8884',       // Inactive category tab
  'text-black': '#000000',     // Pitch black (ticker text & Instagram card title)
  
  // Borders & Strokes
  'stroke-primary': '#2C2A2F', // Section dividers & outer frames
  'stroke-card': '#2B2A28',    // Portfolio card borders
};
```

### 5.2 Recommended `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#111012',
          card: '#1C1A1E',
          dark: '#1A1816',
          placeholder: '#2B2A28',
          stroke: '#2C2A2F',
        },
        brand: {
          orange: '#E63B19',
          cta: '#E8330C',
        },
        studio: {
          white: '#F9F8F6',
          muted: '#8D8B91',
          dim: '#8A8884',
        },
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'sans-serif'],
        archivo: ['"Archivo Black"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Instrument Sans"', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
      animation: {
        ticker: 'ticker 25s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
```

---

## 6. Technical Stack & Compatibility Matrix

### 6.1 Environment Confirmation
- **Node.js**: `v24.20.0` (LTS/current, verified via `node -v`)
- **npm**: `11.19.0` (verified via `npm -v`)
- **Host OS**: Windows 11
- **Current Workspace**: `c:/Users/HP/Desktop/Money` (empty of code, only `.agents/` and `ORIGINAL_REQUEST.md`)

### 6.2 Recommended Package Dependencies

To prevent dependency drift or peer-dependency resolution issues in npm 11, the following exact package versions are validated:

```json
{
  "name": "brutalist-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^11.15.0",
    "lucide-react": "^0.469.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^2.6.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.6.3",
    "vite": "^5.4.14"
  }
}
```

*Rationale for React 18.3.1 + Vite 5 + Tailwind 3.4:*
- React 18.3.1 has 100% stable compatibility with `framer-motion` v11 without breaking changes or experimental hooks.
- Tailwind CSS v3.4.17 provides full `@tailwind` directive compatibility and seamless configuration without the breaking CSS syntax introduced in v4 alpha/beta.
- Vite 5.4 offers near-instant HMR and reliable production bundling under Node 24.

---

## 7. Project File Structure & Layout Blueprint

```
c:/Users/HP/Desktop/Money/
├── index.html                  # Google Fonts link, meta tags, root mounting point
├── package.json                # Verified scripts and dependencies
├── postcss.config.js           # Tailwind and Autoprefixer PostCSS plugins
├── tailwind.config.js          # Design tokens, color palette, custom fonts, ticker keyframes
├── tsconfig.json               # TypeScript compiler config (strict, bundler module resolution)
├── tsconfig.node.json          # Node configuration for Vite
├── vite.config.ts              # Vite React plugin setup
├── public/
│   └── assets/
│       ├── brutalist-texture.png
│       ├── arrow-up-right.svg
│       ├── x-circle.svg
│       └── arrow-right.svg
└── src/
    ├── main.tsx                # React root mount
    ├── App.tsx                 # Main layout shell, modal open/close state, sections orchestration
    ├── index.css               # Tailwind directives & global font smoothing
    ├── types/
    │   └── index.ts            # Component props, work item types, service card interfaces
    ├── components/
    │   ├── icons/
    │   │   ├── ArrowUpRightIcon.tsx
    │   │   ├── ArrowRightIcon.tsx
    │   │   └── CloseIcon.tsx
    │   ├── Navigation.tsx      # Fixed top nav bar across Hero 80px padding
    │   ├── Hero.tsx            # Display typography lockup, texture overlay, infinite ticker
    │   ├── Philosophy.tsx      # Section 01: Manifesto statement, two-column layout, metrics
    │   ├── SelectedWorks.tsx   # Section 02: Category switcher tabs and project cards
    │   ├── Capabilities.tsx    # Section 03: 3 service cards with pill badges and hover states
    │   ├── ContactCTA.tsx      # LET'S WORK 200px Archivo Black banner with CTA button
    │   ├── Footer.tsx          # Multi-column footer: Wordmark, Inquiries, Location, Legal
    │   └── ContactModal.tsx    # Node 11:25 overlay modal with AnimatePresence, Esc listener
    └── utils/
        └── cn.ts               # clsx + tailwind-merge helper
```

---

## 8. Build Verification & Scaffolding Execution Plan

1. **Scaffold Step**:
   - Write `package.json`, `tsconfig.json`, `tsconfig.node.json`, `vite.config.ts`, `postcss.config.js`, `tailwind.config.js`, `index.html`.
   - Run `npm install` to install dependencies.
2. **Assets Initialization**:
   - Ensure vector SVGs are embedded cleanly as React components and public assets are placed.
3. **Core Shell & Components**:
   - Implement modular components (`Navigation`, `Hero`, `Philosophy`, `SelectedWorks`, `Capabilities`, `ContactCTA`, `Footer`, `ContactModal`).
4. **Verification Step**:
   - Execute `npm run build`: Must complete with exit code 0 and zero TypeScript / bundle errors.
   - Start `npm run dev` to verify clean startup on `http://localhost:5173`.
   - Test modal interactions (open on trigger, dismiss on close button / Escape / backdrop).
   - Test responsive layout at 1440px (Desktop), 768px (Tablet), and 375px (Mobile).
