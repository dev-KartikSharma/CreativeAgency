# Implementation Plan: Modern Portfolio Website (React + Vite + Tailwind + Framer Motion)

## Objectives
Faithfully recreate the Figma portfolio design for both the main landing page (node 3:4) and interactive contact modal (node 11:25) in React + Vite + Tailwind CSS + Framer Motion with zero defects, exact typography/colors/spacing, full responsiveness, zero layout shift, and passing all tests.

## Phase 0: Survey & Specification Extraction
- Spawn 3 parallel survey explorers / spec miners to inspect Figma design file `vmC1knGbGcG5nIBSMhODeW`:
  - Explorer 1 (Spec Miner): Main landing page (node 3:4) - Visual hierarchy, layout structure, typography, colors, copy, sections.
  - Explorer 2 (Spec Miner): Interactive Contact Overlay (node 11:25) - Modal layout, typography, interactive states, contact details, social card.
  - Explorer 3 (Explorer): Assets, SVG icons, images, background textures, Figma image exports, and font families.
- Merge survey findings into `PROJECT.md` Feature Inventory & Architecture.

## Phase 1: Dual Track Decomposition
- Implementation Track:
  - M1: Project Scaffold, Fonts, Design Tokens, Tailwind Config, Layout Shell
  - M2: Hero Viewport & Navigation Bar
  - M3: Philosophy Section (01) & Metrics
  - M4: Selected Works Section (02) with Category Switcher
  - M5: Capabilities / Services Section (03)
  - M6: CTA Banner (LET'S WORK) & Footer
  - M7: Interactive Contact Modal (node 11:25) & State Management
  - M8: Final Integration, Performance, Transitions & Animations
- E2E Testing Track:
  - Opaque-box E2E test suite (Playwright / headless browser & Vitest runner) covering Tiers 1-4.
  - Publish `TEST_READY.md`.

## Phase 2: Implementation & Iteration Loops
- Execute milestones with standard loop: Explorer -> Worker -> Reviewers (2) + Challengers (2) + Forensic Auditor -> Gate.
- Final Milestone: Pass 100% of E2E Test Suite + Adversarial Coverage Hardening (Tier 5).

## Phase 3: Final Verification & Sentinel Handoff
- Build verification (`npm run build` exit code 0).
- Dev server verification & visual regression check in browser.
- Final handoff report to Sentinel.
