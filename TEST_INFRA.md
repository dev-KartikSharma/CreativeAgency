# Test Infrastructure & Specification Architecture (TEST_INFRA)

## 1. Testing Philosophy

The testing framework for the Modern Portfolio Website is designed around an **independent, opaque-box, specification-driven** methodology. Tests treat the application as a black box and evaluate behavior strictly against the authoritative requirements documented in `ORIGINAL_REQUEST.md`, `PROJECT.md`, and extracted Figma specifications (Node `3:4` for the landing page, Node `11:25` for the contact overlay).

### Core Principles:
1. **Opaque-Box Independence**: Test cases derive from user stories, functional requirements, visual tokens, and interface contracts—never from internal implementation quirks or ad-hoc class names.
2. **Deterministic & Authoritative Expected Outputs**: Every test asserts against explicit authoritative values (exact typography tokens, color hex codes, copy strings, URLs, phone numbers, state transitions, and keyboard event behaviors).
3. **Progressive Testability & Zero-Dependency Execution**: Built on Node.js's native test runner (`node:test` + `node:assert/strict`), enabling fast, hermetic, reproducible execution across all environments without external test-runner bloat or compilation delays.
4. **Adversarial Rigor**: Beyond nominal happy paths, the suite aggressively tests edge conditions: rapid state toggling, missing/excess values, viewport boundary constraints, modal focus/scroll locks, and multi-step user workflows.

---

## 2. Feature Inventory Matrix

The suite covers all 8 core functional features defined in `PROJECT.md` across 4 progressive tiers:

| Feature ID | Feature Name | Source / Figma Node | Contract / Key Behaviors | Tier 1 (Coverage) | Tier 2 (Boundaries) | Tier 3 (Cross-Feature) | Tier 4 (Journeys) |
|---|---|---|---|---|---|---|---|
| **F1** | Top Navigation Bar | Figma `3:16`, `3:4` | Wordmark, section anchors (`#philosophy`, `#works`, `#capabilities`), "Contact Us" trigger | ≥5 tests | ≥5 tests | Pairwise | Journey 1, 3 |
| **F2** | Hero Viewport & Marquee | Figma `3:17-3:23`, `11:4` | Display typography (192px/80px), subtitle, brutalist texture, continuous marquee ticker | ≥5 tests | ≥5 tests | Pairwise | Journey 1 |
| **F3** | Philosophy Section | Figma `3:24-3:39` | Tag `01 / Our Philosophy`, core statement, body copy, metric cards (100%, +42% Avg) | ≥5 tests | ≥5 tests | Pairwise | Journey 1 |
| **F4** | Selected Works & Switcher | Figma `3:40-3:70` | Category tabs (`Brand Identities Built` vs `Stories We've Told`), active indicator bars (6px vs 2px), project cards, tags | ≥5 tests | ≥5 tests | Pairwise | Journey 1, 2 |
| **F5** | Capabilities / Services | Figma `3:82-3:121` | Tag `03 / Capabilities`, 3 service cards, pill badges (100px radius), hover micro-interactions | ≥5 tests | ≥5 tests | Pairwise | Journey 1 |
| **F6** | CTA Banner ("LET'S WORK") | Figma `3:136-3:143` | 200px Archivo Black headline, `#E8330C` fill, high-contrast "Contact Us" trigger button | ≥5 tests | ≥5 tests | Pairwise | Journey 1, 2, 4 |
| **F7** | Multi-Column Footer | Figma `3:146-3:164` | Wordmark, mission statement, Inquiries (`hello@creativemarketing.co`), Location, copyright & legal | ≥5 tests | ≥5 tests | Pairwise | Journey 3 |
| **F8** | Interactive Contact Modal | Figma `11:25-11:50` | Fullscreen `#111012` overlay, close button (`x-circle`), "Let's Talk.", `hello@fusionforce.co`, `+91 95998 29714`, `@Instagram` card, Escape key listener, scroll lock | ≥5 tests | ≥5 tests | Pairwise | Journey 1, 2, 3, 4, 5 |

---

## 3. Systematic 4-Tier Test Architecture

```
tests/e2e/
├── fixtures/
│   └── specifications.js      # Authoritative specifications, tokens, copy, contracts
├── helpers/
│   └── test-utils.js          # DOM simulator, event dispatchers, state harnesses
├── tier1-feature-coverage.test.js     # Tier 1: Happy path isolation (≥5 per feature, 40+ tests)
├── tier2-boundary-corner.test.js      # Tier 2: Boundary, limits, stress & corner cases (≥5 per feature, 40+ tests)
├── tier3-cross-feature.test.js        # Tier 3: Pairwise combinations & cross-feature state interactions
├── tier4-application-scenarios.test.js# Tier 4: Real-world user journeys & complete workflows
└── runner.test.js                     # Master test suite runner & verification aggregator
```

### Tier 1: Feature Coverage (Isolation)
Tests each feature in isolation against its exact specification:
- **Navigation**: Wordmark presence, anchor link destinations, CTA trigger contract, semantic `<nav>` layout, sticky header positioning tokens.
- **Hero**: Display typography hierarchy, subtitle copy & opacity token, brutalist texture layer, marquee ticker verbatim text, marquee animation tokens.
- **Philosophy**: Section tag `01 / Our Philosophy`, Cormorant Garamond 48px statement, editorial paragraph copy, Metric 1 ("Radical Transparency", 100%), Metric 2 ("Conversion Optimization", +42% Avg).
- **Selected Works**: Section tag `02 / Selected Works`, headline copy, CategorySwitcher default active state (`Brand Identities Built`), active/inactive bar styling tokens (6px `#E63B19` vs 2px `#2B2A28`), project card structure.
- **Capabilities**: Section tag `03 / Capabilities`, headline & description copy, 3 service cards (01 Brand Strategy, 02 Interface Design, 03 Growth Marketing), pill badge styling tokens, SVG arrow components.
- **CTA Banner**: Headline "LET'S WORK", `#E8330C` background fill token, button styling (2px `#111012` stroke, sharp corners), button click trigger callback.
- **Footer**: Brand wordmark & mission statement, Inquiries column (`hello@creativemarketing.co`, `(555) 321-7654`), Location column ("Sunset Blvd, Suite 400", "Los Angeles, CA 90028"), copyright string, legal links.
- **Contact Modal**: Fullscreen overlay container (`#111012`, fixed inset), header row with "Contact" title and circular close button with SVG, left column ("Let's Talk.", copy, email `hello@fusionforce.co`, phone `+91 95998 29714`), right column ("Connect with us.", `@Instagram` card, right arrow badge, outbound link).

### Tier 2: Boundary, Corner & Stress Cases
Tests limits, edge conditions, and failure resilience:
- **Navigation**: Empty/undefined callbacks, rapid repeated button clicks, extreme viewport shrinkage (<320px), window scroll offset persistence, long anchor targets.
- **Hero**: Missing texture fallback, overflow clipping on ultra-long display titles, ticker behavior when reduced-motion is requested, whitespace resilience in marquee copy.
- **Philosophy**: Metric card border divider rendering with dynamic data, long localized statement strings, extreme contrast checks, layout flex-wrap at tablet breakpoints.
- **Selected Works**: Rapid tab switching (`brand` -> `stories` -> `brand` in milliseconds), unknown/invalid category IDs, single-item or empty project list handling, keyboard tab activation (Enter/Space), layout integrity with missing project tags.
- **Capabilities**: Empty badge array handling, long service card descriptions without text overflow, non-hover touch environment fallbacks, card focus rings for keyboard users, grid collapse from 3 cols to 1 col on mobile.
- **CTA Banner**: Rapid clicks without multi-modal summoning, ultra-wide viewport scaling (>2560px), contrast ratio compliance of `#111012` text on `#E8330C` orange, high-zoom rendering.
- **Footer**: Malformed mailto/tel targets, wrapping on narrow 320px screens, link keyboard focusability, copy protection and copyright year correctness.
- **Contact Modal**: Escape key dismissal isolation, backdrop click dismissal vs modal content click propagation isolation, body scroll lock (`overflow: hidden`) application and cleanup upon dismissal, multiple rapid open/close cycles, focus trapping and return of focus to trigger element.

### Tier 3: Cross-Feature Combinations (Pairwise Coverage)
Tests interactions across separate modules:
- Modal trigger from Navigation vs CTA Banner (both dispatch `onOpenContact` with identical modal state).
- CategorySwitcher state preservation across Modal open/close cycles (switching to `stories`, opening modal, closing via Esc, verifying `stories` remains active).
- Dual Contact Destination verification: Ensuring modal contact (`hello@fusionforce.co`, `+91 95998 29714`) and footer contact (`hello@creativemarketing.co`, `(555) 321-7654`) remain distinct and correctly routed.
- Scroll restoration: Opening modal from deep section (Capabilities/CTA), closing modal, confirming page scroll position is retained.
- Navigation anchor jumping to `#works` followed by immediate category switching.
- Modal backdrop dismiss vs close button dismiss vs Escape key dismiss equivalence across navigation trigger points.

### Tier 4: Real-World Application Scenarios (Complete Journeys)
Tests realistic end-to-end user workflows:
- **Journey 1: Prospect Brand Exploration**: User lands on hero, observes marquee manifesto, reads Philosophy metrics, assesses Selected Works, examines Capabilities, reaches "LET'S WORK" CTA, clicks "Contact Us", reviews modal contact information, and dismisses via Escape.
- **Journey 2: Portfolio Assessment & Category Filtering**: User directly navigates to Selected Works, switches back and forth between "Brand Identities Built" and "Stories We've Told", inspects project tags and titles, advances to Capabilities, triggers Contact Modal, clicks the Instagram card link, and dismisses via Close button.
- **Journey 3: Direct Lead & Footer Inquiries**: User arrives on mobile viewport, immediately activates top navigation "Contact Us", notes phone number, dismisses via backdrop click, scrolls down to Footer to check Los Angeles location and inquiries email, and opens Privacy Policy.
- **Journey 4: Accessibility & Keyboard-Only Navigation**: User navigates the site exclusively via Tab, Shift+Tab, Enter, Space, and Escape. Verifies semantic landmark navigation, skips to content, activates CTA, navigates inside modal, dismisses with Escape, and verifies focus returns to the activating CTA.
- **Journey 5: Stress & State Resilience**: Rapid multi-clicking, rapid modal toggling, dynamic window resizing (1440px -> 768px -> 375px), ensuring zero unhandled exceptions, zero memory leaks, and DOM integrity.

---

## 4. Coverage Thresholds & Quality Gates

To guarantee production readiness, all code must satisfy these thresholds:

| Metric | Target | Enforced By |
|---|---|---|
| **Tier 1 Feature Coverage** | ≥ 5 tests per feature (≥ 40 tests total) | Tier 1 Test Suite |
| **Tier 2 Boundary Cases** | ≥ 5 tests per feature (≥ 40 tests total) | Tier 2 Test Suite |
| **Tier 3 Cross-Feature Tests** | 100% pairwise critical paths covered | Tier 3 Test Suite |
| **Tier 4 Journey Workflows** | 5 complete end-to-end journeys passing | Tier 4 Test Suite |
| **Pass Rate** | 100% pass (0 failures, 0 skipped, 0 errors) | Automated Runner |
| **Execution Time** | < 2000ms for entire 100+ test suite | `node --test` native runner |

---

## 5. Test Runner Execution

To execute the test suite:

```bash
# Run all tests via Node's native test runner:
node --test tests/e2e/*.test.js

# Or run individual tiers:
node --test tests/e2e/tier1-feature-coverage.test.js
node --test tests/e2e/tier2-boundary-corner.test.js
node --test tests/e2e/tier3-cross-feature.test.js
node --test tests/e2e/tier4-application-scenarios.test.js

# Or run the master runner:
node --test tests/e2e/runner.test.js
```
