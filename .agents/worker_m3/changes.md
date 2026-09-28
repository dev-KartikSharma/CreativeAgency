# Changes Log — Milestone 3 (M3: Narrative Sections - Philosophy & Selected Works)

## Overview
Implemented `src/components/Philosophy.tsx` and `src/components/SelectedWorks.tsx` with full visual and behavioral fidelity to the Figma specifications (`Node 3:24-3:39` and `Node 3:40-3:70`), design tokens, brutalist aesthetics, interactive category tabs, and responsive layout scaling.

---

## Files Created

### 1. `src/components/Philosophy.tsx`
- **Container**:
  - Semantic `<section id="philosophy">` with `#111012` (`bg-base`) fill and `#2C2A2F` (`border-stroke-primary`) bottom border.
  - Responsive padding: `pt-16 md:pt-24 lg:pt-[120px] pb-16 md:pb-20 lg:pb-[100px] px-5 md:px-8 lg:px-20` (exact 120px 80px 100px on desktop, scaling to 32px on tablet and 20px on mobile).
  - Max container width: 1440px centered.
  - Spacing gap: 48px (`gap-12`).
- **Tag Row**:
  - 12x1px orange indicator line (`width: 12px, height: 1px, background: #E63B19`).
  - Chapter label: `01 / Our Philosophy` in Instrument Sans 12px SemiBold UPPER `#E63B19` (`tracking-widest`).
- **Core Statement**:
  - Cormorant Garamond 48px Regular `#F9F8F6`, max-width 843px, line-height 1.1em:
    `"We believe that raw attention is the only remaining currency. In a market flooded with noise, subtlety is surrender."`
- **Two-Column Layout**:
  - Responsive layout: desktop two-column row (`gap: 80px`, `lg:grid-cols-[733px_1fr]`), collapsing cleanly to single-column stack on tablet and mobile.
  - Left column: Instrument Sans 18px Regular `#8D8B91`, max-width 733px, line-height 1.6em.
  - Right column: Vertical metrics stack with 40px gap:
    - Metric 1: Bottom border 1px `#2C2A2F`, padding-bottom 20px. Label: "Radical Transparency" (Cormorant Garamond 20px `#F9F8F6`), Value: "100%" (Instrument Sans 14px `#E63B19`).
    - Metric 2: Bottom border 1px `#2C2A2F`, padding-bottom 20px. Label: "Conversion Optimization" (Cormorant Garamond 20px `#F9F8F6`), Value: "+42% Avg" (Instrument Sans 14px `#E63B19`).
- **Motion & Interactions**:
  - Framer Motion scroll entrance animation (`initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}`).

---

### 2. `src/components/SelectedWorks.tsx`
- **Container**:
  - Semantic `<section id="works">` with `#111012` (`bg-base`) fill and `#2C2A2F` bottom border.
  - Responsive padding: `pt-16 md:pt-20 lg:pt-[100px] pb-20 md:pb-24 lg:pb-[120px] px-5 md:px-8 lg:px-20` (exact 100px 80px 120px on desktop, scaling to 32px on tablet and 20px on mobile).
  - Max container width: 1440px centered.
  - Spacing gap: 64px (`gap-12 lg:gap-16`).
- **Tag Row & Headline**:
  - Tag row: 12x1px line in `#E63B19` + `02 / Selected Works` in Instrument Sans 12px SemiBold UPPER `#E63B19`.
  - Headline: `Case Studies in Velocity and Grace` in Cormorant Garamond 44px Medium `#F9F8F6`.
- **Two-Column Zones**:
  - Responsive layout: row with 32px gap on desktop, stacking on tablet/mobile.
- **Left Column: Category Switcher**:
  - Fixed 320px width on desktop, padding 24px (`p-6`), background `#1A1816` (`bg-card-dark`), border 1px `#2B2A28` (`border-stroke-card`).
  - Section label: `View` in Instrument Sans 12px SemiBold UPPER `#8A8884` (`text-studio-dim`).
  - Tab 1: `Brand Identities Built` (Cormorant Garamond 36px Bold) with dynamic indicator bar (6px `#E63B19` when active, 2px `#2B2A28` when inactive).
  - Tab 2: `Stories We've Told` (Cormorant Garamond 36px Bold) with dynamic indicator bar (6px `#E63B19` when active, 2px `#2B2A28` when inactive).
  - Active tab text is `#F9F8F6`, inactive tab text is `#8A8884` with hover transition to `#F9F8F6`.
  - Framer Motion animation interpolates height (6px ↔ 2px) and background color (`#E63B19` ↔ `#2B2A28`).
  - Accessible ARIA semantics: `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`.
  - Both controlled (`activeCategory`, `onSelectCategory`) and uncontrolled state modes supported.
- **Right Column: Work Grid**:
  - Fixed 888px width on desktop (flex-1 on fluid viewports), 32px gap, 2 columns on desktop/tablet, 1 column on mobile.
  - Animated filter transitions powered by Framer Motion `AnimatePresence` and `motion.div`.
- **Project Cards**:
  - Fixed width 428px in 2-column grid, background `#1A1816`, border 1px `#2B2A28`.
  - Brutalist placeholder: height 360px (responsive `h-[280px] sm:h-[360px]`), background `#2B2A28`, border 2px solid `#E63B19`, centered label `Project 01` / `Project 02` in Instrument Sans 12px SemiBold UPPER `#E63B19`.
  - Content frame: padding 0 16px 16px (`px-4 pb-4`), gap 8px.
  - Tag: `Identity / Packaging` in Instrument Sans 12px SemiBold UPPER `#E63B19`.
  - Title: `Aura Luxury Essentials Campaign` in Cormorant Garamond 32px Medium `#F9F8F6`.
  - Dynamic filtering: Category switch smoothly swaps between Brand Identities projects and Stories projects.
