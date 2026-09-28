# Original User Request

## Initial Request — 2026-09-11T10:08:47Z

Build a modern, high-performance, responsive production-ready portfolio website in React + Vite with Tailwind CSS and Framer Motion, faithfully implementing the Figma design specifications for both the main landing page (node `3:4`) and the interactive contact overlay (node `11:25`).

Working directory: c:/Users/HP/Desktop/Money
Integrity mode: demo

Figma references:
- File key: `vmC1knGbGcG5nIBSMhODeW`
- Main landing page: `https://www.figma.com/design/vmC1knGbGcG5nIBSMhODeW/Portfolio?node-id=3-4`
- Contact overlay: `https://www.figma.com/design/vmC1knGbGcG5nIBSMhODeW/Portfolio?node-id=11-25`

## Requirements

### R1. High-Fidelity Design Implementation
- Recreate the visual hierarchy, layout geometry, typography, and styling defined in the Figma file.
- Typography: Use the specified fonts (Big Shoulders Display for bold titles, Cormorant Garamond for elegant serif accents, and Instrument Sans / Geist Mono for body and details) with proper fallbacks.
- Color system: Implement the dark palette (`#111012` base, `#1C1A1E` / `#2B2A28` card fills, `#E63B19` / `#E8330C` accent orange, `#FFFFFF` / `#F9F8F6` primary text, `#8D8B91` muted text).
- Responsive layouts: Ensure full visual polish across desktop (1440px+), tablet (768px - 1024px), and mobile viewports (<768px).

### R2. Core Sections & Component Structure
- **Hero Viewport**: Massive brutalist display typography ("CREATIVE MARKETING Made Easy"), subtitle ("WHERE CREATIVITY BECOMES REALITY"), brutalist background texture, and high-impact ticker banner.
- **Philosophy Section**: Two-column layout with section indicator (`01 / Our Philosophy`), bold statement, detailed description, and metric cards (`100% Radical Transparency`, `+42% Avg Conversion Optimization`).
- **Selected Works**: Section indicator (`02 / Selected Works`), category switcher tabs (`Brand Identities Built` vs `Stories We've Told`), and responsive project cards with tags (`Identity / Packaging`) and case study titles.
- **Capabilities / Services**: Section indicator (`03 / Capabilities`), headline, and three structured service cards (`01 Brand Strategy`, `02 Interface Design`, `03 Growth Marketing`) complete with tags, descriptions, and arrow indicators.
- **CTA Section**: High-contrast orange banner (`LET'S WORK`) with primary `Contact Us` action trigger.
- **Footer**: Brand statement, inquiry contacts, physical location, copyright, and legal links.

### R3. Interactive Contact Modal
- Full-screen or overlay contact modal triggered by clicking any `Contact Us` button across the site.
- Includes header with `Contact` title and functional close button (plus Escape key listener).
- Displays left column with large `Let's Talk.` headline, prompt copy, and direct email/phone contact information.
- Displays right column with serif accent `Connect with us.` and an interactive `@Instagram` card with outbound link and hover state.

### R4. Performance, Quality & Build Verification
- Fast load time with zero layout shift.
- Clean code architecture with reusable, modular components.
- Complete production build verification (`npm run build`) with zero linting or TypeScript compilation errors.

## Acceptance Criteria

### Automated & Build Verification
- [ ] Running `npm run build` succeeds with exit code 0 and no TypeScript errors or bundling failures.
- [ ] Dev server runs cleanly via `npm run dev` and serves the app without runtime console errors.

### Visual & Functional Verification
- [ ] All 6 page sections (Hero, Philosophy, Selected Works, Capabilities, CTA Banner, Footer) render with exact Figma typography, colors, and layout structure.
- [ ] Clicking the `Contact Us` button in the hero/navigation or the `LET'S WORK` CTA opens the Contact Overlay.
- [ ] The Contact Overlay displays the contact information (`hello@fusionforce.co`, `+91 95998 29714`) and Instagram card, and can be dismissed via the close button or the Escape key.
- [ ] The Selected Works category switcher tabs allow switching between categories smoothly.
- [ ] Layout scales responsively across desktop (1440px), tablet (768px), and mobile (375px) without horizontal overflow or clipped text.
