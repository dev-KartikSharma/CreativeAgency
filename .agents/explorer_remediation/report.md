# Forensic Technical Remediation Blueprint

**Target Workspace**: `c:/Users/HP/Desktop/Money`  
**Author**: Explorer Remediation (`explorer_remediation`)  
**Parent Conversation ID**: `f7bca129-039f-4f4b-b4a5-502e294ada7c`  
**Date**: 2026-09-11  
**Target Consumer**: Remediation Worker  
**Objective**: Comprehensive, actionable technical remediation blueprint resolving all 5 forensic audit violations and establishing 100% genuine E2E test evaluation against authentic `src/` code.

---

## 1. Executive Summary & Audit Context

In Iteration 1, Forensic Auditor `auditor_1` issued an **INTEGRITY VIOLATION** (Binary Veto) and Adversarial Challenger `challenger_2` issued a **REJECT** verdict. While the production UI code in `src/` (`App.tsx`, `Navigation.tsx`, `Hero.tsx`, `Philosophy.tsx`, `SelectedWorks.tsx`, `Capabilities.tsx`, `ContactCTA.tsx`, `Footer.tsx`, `ContactModal.tsx`) was confirmed to be cleanly implemented and faithful to Figma nodes `3:4` and `11:25`, the E2E verification suite (`tests/e2e/`) was found to be **self-certifying**:
1. **Zero Evaluation of `src/` Code**: Grep search for `src` across `tests/` yielded 0 matches. The 104 tests across Tiers 1–4 tested only a static JSON mirror fixture (`fixtures/specifications.js`) and an in-memory mock class (`AppStateHarness`), meaning if `src/` were deleted, 100% of tests would still pass.
2. **Abandoned Inspection Helper**: The `inspectSourceFile` helper in `tests/e2e/helpers/test-utils.js` (lines 124–141) was defined but never called in any test.
3. **Six Trivial Tautologies**: Found 6 blatant tautologies in `tier2-boundary-corner.test.js` (`19 === 19`, `2 === 2`, `12 / 1 === 12`, `emptyLinks.length === 0`, `mockCard.badges.length === 0`, and an in-test `linkProps` object self-assertion).
4. **Unwired Footer Prop**: `<Footer />` in `src/App.tsx` did not pass `onOpenContact={() => setIsContactOpen(true)}`, leaving its contact trigger inactive.
5. **String & Title Desynchronization**: Philosophy statement text diverged between `Philosophy.tsx` and `specifications.js`, and `SelectedWorks.tsx` duplicated title `"Aura Luxury Essentials Campaign"` across both project 01 and 02.

This blueprint provides the exact, concrete code modifications and architectural instructions for the Remediation Worker to resolve every issue with zero ambiguity.

---

## 2. Remediation Matrix for the 5 Audit Violations

| # | Audit Violation | Target File(s) | Remediation Solution | Invalidation Proof |
|---|---|---|---|---|
| **1** | Self-certifying tests with 0 `src/` evaluations | `tests/e2e/tier1-feature-coverage.test.js`, `tier2-boundary-corner.test.js`, `tier3-cross-feature.test.js`, `tier4-application-scenarios.test.js` | Re-architect all 104 tests to import and call `inspectSourceFile` against `src/App.tsx`, `src/components/*.tsx`, `src/index.css`, and `tailwind.config.js`. | Deleting any component in `src/` causes tests to immediately throw `AssertionError: <file> must exist`. |
| **2** | Unused `inspectSourceFile` utility | `tests/e2e/helpers/test-utils.js`, test files | Export and invoke `inspectSourceFile` across all 4 test tiers. Enhance with regex extraction helper. | Call site count increases from 0 to over 100. |
| **3** | Six trivial tautologies in Tier 2 | `tests/e2e/tier2-boundary-corner.test.js` | Replace all 6 tautologies with authentic regex / token assertions against `Navigation.tsx`, `Philosophy.tsx`, `Capabilities.tsx`, `ContactCTA.tsx`, and `ContactModal.tsx`. | Modifying the stroke width, icon dimensions, or security attributes in `src/` will fail the tests. |
| **4** | Unwired `onOpenContact` prop in `<Footer />` | `src/App.tsx` line 27 | Change `<Footer />` to `<Footer onOpenContact={() => setIsContactOpen(true)} />`. | Footer renders the contact trigger button and dispatches modal opening. |
| **5a**| Philosophy statement divergence | `src/components/Philosophy.tsx`, `tests/e2e/fixtures/specifications.js` | Synchronize statement strings character-for-character across component, fixture, and tests. | Zero discrepancy between rendered copy and verified specification. |
| **5b**| Duplicate project titles in SelectedWorks | `src/components/SelectedWorks.tsx`, `specifications.js`, `tier4-application-scenarios.test.js` | Differentiate Project 02 title to `'Aura Flagship Spatial Identity'`. Update tests to verify both unique titles. | Both projects display distinct titles matching their distinct descriptions. |

---

## 3. Production Source Code Edits

The Remediation Worker must apply the following exact modifications to the source code:

### 3.1 `src/App.tsx` — Wire `onOpenContact` to `Footer`
In `src/App.tsx` (line 27):
```diff
--- a/src/App.tsx
+++ b/src/App.tsx
@@ -24,7 +24,7 @@ export const App: React.FC = () => {
         <Capabilities />
         <ContactCTA onOpenContact={() => setIsContactOpen(true)} />
       </main>
-      <Footer />
+      <Footer onOpenContact={() => setIsContactOpen(true)} />
       <ContactModal
         isOpen={isContactOpen}
         onClose={() => setIsContactOpen(false)}
```

### 3.2 `src/components/Philosophy.tsx` — Statement Synchronization & Section Anchor Margin
In `src/components/Philosophy.tsx` (lines 12–13, 37–43):
```diff
--- a/src/components/Philosophy.tsx
+++ b/src/components/Philosophy.tsx
@@ -10,7 +10,7 @@ export interface PhilosophyProps extends SectionProps {
 }
 
 const DEFAULT_STATEMENT =
-  'We believe that raw attention is the only remaining currency. In a market flooded with noise, subtlety is surrender.';
+  'We believe that raw attention is the only true currency of the digital age.';
 
 const DEFAULT_BODY =
   "In a landscape crowded with superficial metrics, we focus exclusively on architecture that generates authentic results. Clean layouts, clear hierarchies, and fearless visual choices are not just artistic decisions—they are functional requirements to capture the modern consumer's divided attention.";
@@ -37,7 +37,7 @@ export const Philosophy: React.FC<PhilosophyProps> = ({
   return (
     <section
       id={id}
-      className={cn(
+      className={cn('scroll-mt-20',
         'relative w-full bg-base border-b border-stroke-primary',
         className
       )}
```
*(Note: If the team prefers preserving `"We believe that raw attention is the only remaining currency. In a market flooded with noise, subtlety is surrender."`, then update `specifications.js` line 55 to match this string instead. Both must be identical.)*

### 3.3 `src/components/SelectedWorks.tsx` — Project Title Differentiation, `aria-hidden`, and `scroll-mt-20`
In `src/components/SelectedWorks.tsx` (lines 27–33, 76–81, 136–150, 170–184):
```diff
--- a/src/components/SelectedWorks.tsx
+++ b/src/components/SelectedWorks.tsx
@@ -28,7 +28,7 @@ export const DEFAULT_WORKS: WorkItemExtended[] = [
     category: 'brand',
     placeholder: 'Project 02',
     tag: 'Identity / Packaging',
-    title: 'Aura Luxury Essentials Campaign',
+    title: 'Aura Flagship Spatial Identity',
     description: 'Spatial visual system and flagship retail environmental identity.',
   },
   {
@@ -75,7 +75,7 @@ export const SelectedWorks: React.FC<SelectedWorksProps> = ({
   return (
     <section
       id={id}
-      className={cn(
+      className={cn('scroll-mt-20',
         'relative w-full bg-base border-b border-stroke-primary',
         className
       )}
@@ -136,6 +136,7 @@ export const SelectedWorks: React.FC<SelectedWorksProps> = ({
                 <motion.div
                   layout
+                  aria-hidden="true"
                   animate={{
                     height: activeCategory === 'brand' ? 6 : 2,
                     backgroundColor: activeCategory === 'brand' ? '#E63B19' : '#2B2A28',
@@ -170,6 +171,7 @@ export const SelectedWorks: React.FC<SelectedWorksProps> = ({
                 <motion.div
                   layout
+                  aria-hidden="true"
                   animate={{
                     height: activeCategory === 'stories' ? 6 : 2,
                     backgroundColor: activeCategory === 'stories' ? '#E63B19' : '#2B2A28',
```

### 3.4 `src/components/Capabilities.tsx` — Add `scroll-mt-20`
In `src/components/Capabilities.tsx` (lines 46–51):
```diff
--- a/src/components/Capabilities.tsx
+++ b/src/components/Capabilities.tsx
@@ -46,7 +46,7 @@ export const Capabilities: React.FC<CapabilitiesProps> = ({
   return (
     <section
       id={id}
-      className={cn(
+      className={cn('scroll-mt-20',
         'w-full bg-[#1C1A1E] border-y border-[#2C2A2F] py-20 md:py-28 lg:py-[120px] px-6 sm:px-10 md:px-14 lg:px-20',
         className
       )}
```

### 3.5 `tests/e2e/fixtures/specifications.js` — Update Project 02 Title
In `tests/e2e/fixtures/specifications.js` (lines 70–73):
```diff
--- a/tests/e2e/fixtures/specifications.js
+++ b/tests/e2e/fixtures/specifications.js
@@ -70,3 +70,3 @@ export const SPECIFICATIONS = {
     projectCards: [
       { id: 'project-01', placeholder: 'Project 01', tag: 'Identity / Packaging', title: 'Aura Luxury Essentials Campaign' },
-      { id: 'project-02', placeholder: 'Project 02', tag: 'Identity / Packaging', title: 'Aura Luxury Essentials Campaign' }
+      { id: 'project-02', placeholder: 'Project 02', tag: 'Identity / Packaging', title: 'Aura Flagship Spatial Identity' }
     ]
```

---

## 4. Test Infrastructure Enhancements (`tests/e2e/helpers/test-utils.js`)

Enhance `tests/e2e/helpers/test-utils.js` so that `inspectSourceFile` provides rich inspection methods:

```javascript
export function inspectSourceFile(relativePath) {
  const fullPath = path.resolve(process.cwd(), relativePath);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const content = fs.readFileSync(fullPath, 'utf8');
  return {
    exists: true,
    path: fullPath,
    content,
    contains(str) {
      return content.includes(str);
    },
    matches(regex) {
      return regex.test(content);
    },
    extract(regex) {
      const match = content.match(regex);
      return match ? (match[1] !== undefined ? match[1] : match[0]) : null;
    }
  };
}

export function assertSource(relativePath) {
  const file = inspectSourceFile(relativePath);
  assert.ok(file && file.exists, `Authentication failure: ${relativePath} must exist on disk`);
  return file;
}
```

---

## 5. Replacement of the 6 Trivial Tautologies in Tier 2

The Remediation Worker must replace lines in `tests/e2e/tier2-boundary-corner.test.js`:

### Tautology 1: `F1.B3` (Empty links array tautology)
- **Original Code (lines 37–42)**:
  ```javascript
  it('F1.B3: handles missing/empty links array gracefully', () => {
    const emptyLinks = [];
    assert.strictEqual(emptyLinks.length, 0);
    const renderedLabels = emptyLinks.map(l => l.label);
    assert.deepStrictEqual(renderedLabels, []);
  });
  ```
- **Remediated Authentic Code**:
  ```javascript
  it('F1.B3: Navigation component defines and maps over non-empty NAV_LINKS array', () => {
    const navSource = assertSource('src/components/Navigation.tsx');
    assert.ok(navSource.contains('const NAV_LINKS = ['), 'Navigation must declare NAV_LINKS array');
    assert.ok(navSource.contains('NAV_LINKS.map((link) =>'), 'Navigation must map over NAV_LINKS');
    // Verify that NAV_LINKS array contains all 3 valid navigation objects
    const linkMatches = [...navSource.content.matchAll(/label:\s*['"]([^'"]+)['"],\s*href:\s*['"]([^'"]+)['"]/g)];
    assert.strictEqual(linkMatches.length, 3, 'NAV_LINKS must contain exactly 3 link definitions');
    assert.strictEqual(linkMatches[0][1], '01 / Philosophy');
    assert.strictEqual(linkMatches[1][1], '02 / Works');
    assert.strictEqual(linkMatches[2][1], '03 / Capabilities');
  });
  ```

### Tautology 2: `F3.B5` (`12 / 1 === 12` math tautology)
- **Original Code (lines 124–128)**:
  ```javascript
  it('F3.B5: tag orange line dimensions (12px x 1px) aspect ratio check', () => {
    const width = 12;
    const height = 1;
    assert.strictEqual(width / height, 12);
  });
  ```
- **Remediated Authentic Code**:
  ```javascript
  it('F3.B5: Philosophy tag orange line dimensions (12px x 1px) parsed from source', () => {
    const philSource = assertSource('src/components/Philosophy.tsx');
    assert.ok(philSource.contains("w-[12px] h-[1px]"), 'Philosophy.tsx must specify 12px width and 1px height');
    assert.ok(philSource.contains("width: 12, height: 1"), 'Philosophy.tsx must define inline style width 12 and height 1');
    const widthMatch = philSource.content.match(/width:\s*(\d+)/);
    const heightMatch = philSource.content.match(/height:\s*(\d+)/);
    assert.ok(widthMatch && heightMatch, 'Must find width and height declarations');
    const width = parseInt(widthMatch[1], 10);
    const height = parseInt(heightMatch[1], 10);
    assert.strictEqual(width, 12, 'Parsed width must be exactly 12');
    assert.strictEqual(height, 1, 'Parsed height must be exactly 1');
    assert.strictEqual(width / height, 12, 'Parsed aspect ratio must be 12');
  });
  ```

### Tautology 3: `F5.B1` (`mockCard.badges.length === 0` dummy object tautology)
- **Original Code (lines 179–184)**:
  ```javascript
  it('F5.B1: empty badge array resilience', () => {
    const mockCard = { badges: [] };
    assert.strictEqual(mockCard.badges.length, 0);
    const rendered = mockCard.badges.map(b => b.toUpperCase());
    assert.deepStrictEqual(rendered, []);
  });
  ```
- **Remediated Authentic Code**:
  ```javascript
  it('F5.B1: Capabilities service cards define non-empty badges and render them cleanly', () => {
    const capSource = assertSource('src/components/Capabilities.tsx');
    assert.ok(capSource.contains('service.badges.map((badge) =>'), 'Capabilities must map over service.badges');
    // Verify each service card in source has at least 3 valid badges
    const badgeMatches = [...capSource.content.matchAll(/badges:\s*\[([^\]]+)\]/g)];
    assert.strictEqual(badgeMatches.length, 3, 'Capabilities must define badges for 3 service cards');
    for (const match of badgeMatches) {
      const badges = match[1].split(',').map(b => b.trim().replace(/['"]/g, ''));
      assert.ok(badges.length >= 3, 'Each service card must declare at least 3 badges');
    }
  });
  ```

### Tautology 4: `F5.B5` (`19 === 19` identity tautology)
- **Original Code (lines 212–217)**:
  ```javascript
  it('F5.B5: arrow icon dimension boundary remains fixed 19x19px without layout shift', () => {
    const iconWidth = 19;
    const iconHeight = 19;
    assert.strictEqual(iconWidth, 19);
    assert.strictEqual(iconHeight, 19);
  });
  ```
- **Remediated Authentic Code**:
  ```javascript
  it('F5.B5: arrow icon dimension boundary verified in Capabilities.tsx and ArrowUpRightIcon.tsx', () => {
    const capSource = assertSource('src/components/Capabilities.tsx');
    assert.ok(
      capSource.contains('w-[19px] h-[19px]'),
      'Capabilities.tsx must render ArrowUpRightIcon with w-[19px] h-[19px]'
    );
    const iconSource = assertSource('src/components/icons/ArrowUpRightIcon.tsx');
    assert.ok(
      iconSource.contains('width = 19') || iconSource.contains('width = size') || iconSource.contains('viewBox='),
      'ArrowUpRightIcon.tsx must provide valid SVG sizing dimensions'
    );
  });
  ```

### Tautology 5: `F6.B4` (`2 === 2` identity tautology)
- **Original Code (lines 243–246)**:
  ```javascript
  it('F6.B4: button border stroke boundary is exactly 2px solid', () => {
    const strokeWidth = 2;
    assert.strictEqual(strokeWidth, 2);
  });
  ```
- **Remediated Authentic Code**:
  ```javascript
  it('F6.B4: ContactCTA button border stroke boundary is verified as border-2 in source', () => {
    const ctaSource = assertSource('src/components/ContactCTA.tsx');
    assert.ok(
      ctaSource.contains('border-2 border-[#111012]'),
      'ContactCTA.tsx button must specify border-2 border-[#111012]'
    );
    const match = ctaSource.content.match(/border-(\d+)/);
    assert.ok(match, 'Button class must contain border numeric stroke width');
    assert.strictEqual(parseInt(match[1], 10), 2, 'Border stroke width must be exactly 2px');
  });
  ```

### Tautology 6: `F8.B5` (Local dummy `linkProps` object self-assertion)
- **Original Code (lines 339–348)**:
  ```javascript
  it('F8.B5: Instagram card external link security attributes', () => {
    const linkProps = {
      href: SPECIFICATIONS.contactModal.instagramUrl,
      target: '_blank',
      rel: 'noopener noreferrer'
    };
    assert.strictEqual(linkProps.target, '_blank');
    assert.ok(linkProps.rel.includes('noopener'));
    assert.ok(linkProps.rel.includes('noreferrer'));
  });
  ```
- **Remediated Authentic Code**:
  ```javascript
  it('F8.B5: Instagram card external link security attributes directly verified in ContactModal.tsx', () => {
    const modalSource = assertSource('src/components/ContactModal.tsx');
    assert.ok(
      modalSource.contains('href="https://instagram.com/"'),
      'ContactModal.tsx must link to https://instagram.com/'
    );
    assert.ok(
      modalSource.contains('target="_blank"'),
      'ContactModal.tsx Instagram link must specify target="_blank"'
    );
    assert.ok(
      modalSource.contains('rel="noopener noreferrer"'),
      'ContactModal.tsx Instagram link must strictly enforce rel="noopener noreferrer"'
    );
  });
  ```

---

## 6. Complete Blueprint for Re-Architecting Tiers 1–4 (104 Tests)

Every single test in `tests/e2e/` must directly inspect the source code. Below is the blueprint showing how every feature and tier must be structured.

### 6.1 Tier 1: Feature Coverage (48 Tests in `tier1-feature-coverage.test.js`)

Replace the fixture-only checks with genuine `assertSource` calls:

```javascript
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { DESIGN_TOKENS, SPECIFICATIONS } from './fixtures/specifications.js';
import { assertSource, inspectSourceFile, AppStateHarness, validateEmailFormat, validatePhoneFormat } from './helpers/test-utils.js';

describe('Tier 1: Feature Coverage (Isolation)', () => {

  // F1: Top Navigation Bar (src/components/Navigation.tsx)
  describe('F1: Top Navigation Bar', () => {
    it('F1.1: renders authoritative brand wordmark "CREATIVE MARKETING."', () => {
      const src = assertSource('src/components/Navigation.tsx');
      assert.ok(src.contains('CREATIVE MARKETING'), 'Navigation.tsx must contain brand wordmark text');
      assert.ok(src.contains('text-accent-orange">.'), 'Navigation.tsx must contain orange period dot');
    });

    it('F1.2: contains all 3 required section navigation links', () => {
      const src = assertSource('src/components/Navigation.tsx');
      assert.ok(src.contains('01 / Philosophy'));
      assert.ok(src.contains('02 / Works'));
      assert.ok(src.contains('03 / Capabilities'));
    });

    it('F1.3: section links map to valid in-page anchor targets', () => {
      const src = assertSource('src/components/Navigation.tsx');
      assert.ok(src.contains("href: '#philosophy'"));
      assert.ok(src.contains("href: '#works'"));
      assert.ok(src.contains("href: '#capabilities'"));
    });

    it('F1.4: renders primary "Contact Us" action button', () => {
      const src = assertSource('src/components/Navigation.tsx');
      assert.ok(src.contains('<span>Contact Us</span>') || src.contains('Contact Us'));
      assert.ok(src.contains('onClick={handleContactClick}'));
    });

    it('F1.5: "Contact Us" button dispatches onOpenContact event handler', () => {
      const src = assertSource('src/components/Navigation.tsx');
      assert.ok(src.contains('onOpenContact()'), 'Navigation must call onOpenContact()');
      const harness = new AppStateHarness();
      harness.openContact('nav');
      assert.strictEqual(harness.state.isContactOpen, true);
    });

    it('F1.6: adheres to dark palette and typography tokens in source and config', () => {
      const src = assertSource('src/components/Navigation.tsx');
      const tailwind = assertSource('tailwind.config.js');
      assert.ok(src.contains('bg-base/90') || src.contains('bg-base'));
      assert.ok(tailwind.contains("'bg-base': '#111012'"));
      assert.ok(tailwind.contains("'accent-orange': '#E63B19'"));
    });
  });

  // F2: Hero Viewport & Marquee Ticker (src/components/Hero.tsx)
  describe('F2: Hero Viewport & Marquee Ticker', () => {
    it('F2.1: renders authoritative subtitle "WHERE CREATIVITY BECOMES REALITY"', () => {
      const src = assertSource('src/components/Hero.tsx');
      assert.ok(src.contains('WHERE CREATIVITY BECOMES REALITY'));
    });

    it('F2.2: renders 3-line brutalist typography lockup ("CREATIVE", "MARKETING", "Made Easy")', () => {
      const src = assertSource('src/components/Hero.tsx');
      assert.ok(src.contains('CREATIVE'));
      assert.ok(src.contains('MARKETING'));
      assert.ok(src.contains('Made Easy'));
    });

    it('F2.3: display typography uses specified font families and weights', () => {
      const src = assertSource('src/components/Hero.tsx');
      assert.ok(src.contains('font-display font-black'));
      assert.ok(src.contains('font-serif italic font-normal'));
    });

    it('F2.4: incorporates brutalist texture overlay with 12% opacity specification', () => {
      const src = assertSource('src/components/Hero.tsx');
      assert.ok(src.contains("opacity: 0.12"));
      assert.ok(src.contains("/assets/brutalist-texture.svg"));
      const textureFile = assertSource('public/assets/brutalist-texture.svg');
      assert.ok(textureFile.contains('<feTurbulence'));
    });

    it('F2.5: renders continuous orange ticker marquee banner with verbatim copy', () => {
      const src = assertSource('src/components/Hero.tsx');
      assert.ok(src.contains('CENTERS AROUND MAKING CREATIVE MARKETING SOLUTIONS'));
      assert.ok(src.contains('SIMPLICITY IS KEY'));
      const textMatch = src.content.match(/const TICKER_TEXT =\s*["']([^"']+)["']/);
      assert.ok(textMatch);
      assert.strictEqual(textMatch[1].length, 323);
    });

    it('F2.6: ticker styling adheres to high-contrast black on electric orange tokens', () => {
      const src = assertSource('src/components/Hero.tsx');
      assert.ok(src.contains("backgroundColor: '#E63B19'"));
      assert.ok(src.contains("text-black"));
      assert.ok(src.contains("animate-ticker"));
    });
  });

  // F3: Philosophy Section (src/components/Philosophy.tsx)
  describe('F3: Philosophy Section', () => {
    it('F3.1: renders chapter tag "01 / Our Philosophy" with accent orange line', () => {
      const src = assertSource('src/components/Philosophy.tsx');
      assert.ok(src.contains('01 / Our Philosophy'));
      assert.ok(src.contains('width: 12, height: 1'));
    });

    it('F3.2: renders authoritative primary statement', () => {
      const src = assertSource('src/components/Philosophy.tsx');
      assert.ok(src.contains('We believe that raw attention is the only'));
    });

    it('F3.3: renders editorial body copy paragraph', () => {
      const src = assertSource('src/components/Philosophy.tsx');
      assert.ok(src.contains('In a landscape crowded with superficial metrics'));
      assert.ok(src.contains("divided attention."));
    });

    it('F3.4: renders Metric 1 ("Radical Transparency") with exact value "100%"', () => {
      const src = assertSource('src/components/Philosophy.tsx');
      assert.ok(src.contains("label: 'Radical Transparency'"));
      assert.ok(src.contains("value: '100%'"));
    });

    it('F3.5: renders Metric 2 ("Conversion Optimization") with exact value "+42% Avg"', () => {
      const src = assertSource('src/components/Philosophy.tsx');
      assert.ok(src.contains("label: 'Conversion Optimization'"));
      assert.ok(src.contains("value: '+42% Avg'"));
    });

    it('F3.6: metrics divider uses stroke-primary token (#2C2A2F)', () => {
      const src = assertSource('src/components/Philosophy.tsx');
      assert.ok(src.contains('border-stroke-primary'));
    });
  });

  // F4: Selected Works & Category Switcher (src/components/SelectedWorks.tsx)
  describe('F4: Selected Works & Category Switcher', () => {
    it('F4.1: renders chapter tag "02 / Selected Works" and headline', () => {
      const src = assertSource('src/components/SelectedWorks.tsx');
      assert.ok(src.contains('02 / Selected Works'));
      assert.ok(src.contains('Case Studies in Velocity and Grace'));
    });

    it('F4.2: category switcher renders both authoritative category tabs', () => {
      const src = assertSource('src/components/SelectedWorks.tsx');
      assert.ok(src.contains('Brand Identities Built'));
      assert.ok(src.contains("Stories We've Told"));
      assert.ok(src.contains('role="tablist"'));
    });

    it('F4.3: category switcher defaults to "Brand Identities Built" with active indicator (6px #E63B19)', () => {
      const src = assertSource('src/components/SelectedWorks.tsx');
      assert.ok(src.contains("activeCategory === 'brand' ? 6 : 2"));
      assert.ok(src.contains("activeCategory === 'brand' ? '#E63B19' : '#2B2A28'"));
    });

    it('F4.4: category switcher displays inactive indicator (2px #2B2A28) for inactive tab', () => {
      const src = assertSource('src/components/SelectedWorks.tsx');
      assert.ok(src.contains("h-[2px] bg-stroke-card"));
    });

    it('F4.5: renders project cards with wireframe placeholders, tags, and titles', () => {
      const src = assertSource('src/components/SelectedWorks.tsx');
      assert.ok(src.contains("Identity / Packaging"));
      assert.ok(src.contains("Aura Luxury Essentials Campaign"));
      assert.ok(src.contains("bg-placeholder border-2 border-brand-orange"));
    });

    it('F4.6: handles category switching state transition via onSelectCategory contract', () => {
      const src = assertSource('src/components/SelectedWorks.tsx');
      assert.ok(src.contains('handleSelectCategory'));
      assert.ok(src.contains('onSelectCategory?.(category)'));
    });
  });

  // F5: Capabilities / Services Section (src/components/Capabilities.tsx)
  describe('F5: Capabilities / Services Section', () => {
    it('F5.1: renders chapter tag "03 / Capabilities", headline, and description', () => {
      const src = assertSource('src/components/Capabilities.tsx');
      assert.ok(src.contains('03 / Capabilities'));
      assert.ok(src.contains('Engineered for High-Fidelity Performance'));
    });

    it('F5.2: renders exactly 3 structured service cards', () => {
      const src = assertSource('src/components/Capabilities.tsx');
      assert.ok(src.contains("number: '01'"));
      assert.ok(src.contains("number: '02'"));
      assert.ok(src.contains("number: '03'"));
    });

    it('F5.3: Service Card 01 renders correct description and pill badges', () => {
      const src = assertSource('src/components/Capabilities.tsx');
      assert.ok(src.contains('Brand Strategy'));
      assert.ok(src.contains('Positioning'));
      assert.ok(src.contains('Market Analysis'));
      assert.ok(src.contains('Brand Voice'));
    });

    it('F5.4: Service Card 02 renders correct description and pill badges', () => {
      const src = assertSource('src/components/Capabilities.tsx');
      assert.ok(src.contains('Interface Design'));
      assert.ok(src.contains('Figma Native'));
      assert.ok(src.contains('Design Systems'));
      assert.ok(src.contains('Prototyping'));
    });

    it('F5.5: Service Card 03 renders correct description and pill badges', () => {
      const src = assertSource('src/components/Capabilities.tsx');
      assert.ok(src.contains('Growth Marketing'));
      assert.ok(src.contains('SEO Strategy'));
      assert.ok(src.contains('Analytics'));
      assert.ok(src.contains('Copywriting'));
    });

    it('F5.6: service card geometry tokens conform to 16px radius and card-mid fill', () => {
      const src = assertSource('src/components/Capabilities.tsx');
      assert.ok(src.contains('bg-[#1C1A1E]'));
      assert.ok(src.contains('rounded-[16px]'));
    });
  });

  // F6: CTA Banner ("LET'S WORK") (src/components/ContactCTA.tsx)
  describe('F6: CTA Banner ("LET\'S WORK")', () => {
    it('F6.1: renders massive headline "LET\'S WORK"', () => {
      const src = assertSource('src/components/ContactCTA.tsx');
      assert.ok(src.contains("LET'S WORK"));
    });

    it('F6.2: headline uses Archivo Black display font token', () => {
      const src = assertSource('src/components/ContactCTA.tsx');
      assert.ok(src.contains('font-archivo'));
      const tailwind = assertSource('tailwind.config.js');
      assert.ok(tailwind.contains('Archivo Black'));
    });

    it('F6.3: background fill matches accent-cta token (#E8330C)', () => {
      const src = assertSource('src/components/ContactCTA.tsx');
      assert.ok(src.contains('bg-[#E8330C]'));
    });

    it('F6.4: renders high-contrast "Contact Us" trigger button', () => {
      const src = assertSource('src/components/ContactCTA.tsx');
      assert.ok(src.contains('Contact Us'));
      assert.ok(src.contains('border-2 border-[#111012]'));
    });

    it('F6.5: button click dispatches onOpenContact event handler', () => {
      const src = assertSource('src/components/ContactCTA.tsx');
      assert.ok(src.contains('onClick={onOpenContact}'));
    });
  });

  // F7: Multi-Column Footer (src/components/Footer.tsx)
  describe('F7: Multi-Column Footer', () => {
    it('F7.1: renders brand column with wordmark and mission statement', () => {
      const src = assertSource('src/components/Footer.tsx');
      assert.ok(src.contains('CREATIVE MARKETING.'));
      assert.ok(src.contains('Providing rigorous artistic design &amp; engineering strategy'));
    });

    it('F7.2: renders Inquiries column with valid email and phone contacts', () => {
      const src = assertSource('src/components/Footer.tsx');
      assert.ok(src.contains('href="mailto:hello@creativemarketing.co"'));
      assert.ok(src.contains('href="tel:5553217654"'));
    });

    it('F7.3: renders Location column with Los Angeles address', () => {
      const src = assertSource('src/components/Footer.tsx');
      assert.ok(src.contains('Sunset Blvd, Suite 400'));
      assert.ok(src.contains('Los Angeles, CA 90028'));
    });

    it('F7.4: renders copyright statement with 2026 year', () => {
      const src = assertSource('src/components/Footer.tsx');
      assert.ok(src.contains('© 2026 Creative Marketing Collective. All rights reserved.'));
    });

    it('F7.5: renders legal links: Privacy Policy and Terms of Service', () => {
      const src = assertSource('src/components/Footer.tsx');
      assert.ok(src.contains('Privacy Policy'));
      assert.ok(src.contains('Terms of Service'));
    });

    it('F7.6: footer border matches stroke-primary token (#2C2A2F) and wires onOpenContact', () => {
      const src = assertSource('src/components/Footer.tsx');
      assert.ok(src.contains('border-t border-[#2C2A2F]'));
      assert.ok(src.contains('onOpenContact'));
    });
  });

  // F8: Interactive Contact Modal (src/components/ContactModal.tsx)
  describe('F8: Interactive Contact Modal', () => {
    it('F8.1: modal container uses obsidian dark base fill (#111012) and fixed inset', () => {
      const src = assertSource('src/components/ContactModal.tsx');
      assert.ok(src.contains('fixed inset-0'));
      assert.ok(src.contains('bg-[#111012]'));
    });

    it('F8.2: header renders "Contact" title and close button', () => {
      const src = assertSource('src/components/ContactModal.tsx');
      assert.ok(src.contains('Contact'));
      assert.ok(src.contains('onClick={onClose}'));
      assert.ok(src.contains('CloseIcon'));
    });

    it('F8.3: left column displays massive headline "Let\'s Talk."', () => {
      const src = assertSource('src/components/ContactModal.tsx');
      assert.ok(src.contains("Let's"));
      assert.ok(src.contains("Talk."));
    });

    it('F8.4: left column renders prompt subtext and authoritative contact info', () => {
      const src = assertSource('src/components/ContactModal.tsx');
      assert.ok(src.contains('Slide into our DMs and our team will get back to you within 24 hours.'));
      assert.ok(src.contains('href="mailto:hello@fusionforce.co"'));
      assert.ok(src.contains('href="tel:+919599829714"'));
    });

    it('F8.5: right column renders italic serif "Connect with us." and white @Instagram card', () => {
      const src = assertSource('src/components/ContactModal.tsx');
      assert.ok(src.contains('Connect with us.'));
      assert.ok(src.contains('@Instagram'));
    });

    it('F8.6: Instagram card links to authoritative destination with security attributes', () => {
      const src = assertSource('src/components/ContactModal.tsx');
      assert.ok(src.contains('href="https://instagram.com/"'));
      assert.ok(src.contains('target="_blank"'));
      assert.ok(src.contains('rel="noopener noreferrer"'));
    });

    it('F8.7: close button click dispatches onClose event handler', () => {
      const src = assertSource('src/components/ContactModal.tsx');
      assert.ok(src.contains('onClick={onClose}'));
      assert.ok(src.contains("event.key === 'Escape'"));
    });
  });

});
```

---

### 6.2 Tier 2: Boundary & Corner Cases (41 Tests in `tier2-boundary-corner.test.js`)

In addition to replacing the 6 tautologies (detailed in Section 5 above), every boundary test must check genuine source files:
- `F1.B1`: `assertSource('src/components/Navigation.tsx')` + `AppStateHarness` idempotency.
- `F1.B2`: `assertSource('src/components/Navigation.tsx')` verifies container padding `px-5 sm:px-8 md:px-12 lg:px-20`.
- `F1.B3`: Replaced tautology (verifies `NAV_LINKS` in `Navigation.tsx`).
- `F1.B4`: `assertSource('src/components/Navigation.tsx')` verifies `href` anchors start with `#` and contain no `javascript:`.
- `F1.B5`: `assertSource('src/components/Navigation.tsx')` verifies uppercase wordmark with period.
- `F2.B1`: `assertSource('src/components/Hero.tsx')` extracts `TICKER_TEXT` and verifies normalization.
- `F2.B2`: `assertSource('src/components/Hero.tsx')` verifies background fallback `backgroundColor: '#111012'`.
- `F2.B3`: `assertSource('src/components/Hero.tsx')` verifies `opacity: 0.12`.
- `F2.B4`: `assertSource('src/components/Hero.tsx')` verifies responsive typography scaling classes.
- `F2.B5`: `assertSource('src/components/Hero.tsx')` verifies subtitle string length and encoding.
- `F3.B1`: `assertSource('src/components/Philosophy.tsx')` verifies metric values (`100%`, `+42% Avg`).
- `F3.B2`: `assertSource('src/components/Philosophy.tsx')` verifies `DEFAULT_STATEMENT` ends with period.
- `F3.B3`: `assertSource('src/components/Philosophy.tsx')` verifies `DEFAULT_BODY` length > 150 chars.
- `F3.B4`: `assertSource('src/components/Philosophy.tsx')` verifies exactly 2 metrics defined.
- `F3.B5`: Replaced tautology (verifies `width: 12` and `height: 1` in `Philosophy.tsx`).
- `F4.B1`: `assertSource('src/components/SelectedWorks.tsx')` verifies `handleSelectCategory` state logic.
- `F4.B2`: `assertSource('src/types/index.ts')` verifies `type WorkCategory = 'brand' | 'stories'`.
- `F4.B3`: `assertSource('src/components/SelectedWorks.tsx')` verifies 6px vs 2px height animation.
- `F4.B4`: `assertSource('src/components/SelectedWorks.tsx')` verifies placeholder `border-2 border-brand-orange`.
- `F4.B5`: `assertSource('src/components/SelectedWorks.tsx')` verifies grid responsive classes (`grid-cols-1 md:grid-cols-2`).
- `F5.B1`: Replaced tautology (verifies `SERVICE_CARDS` badges in `Capabilities.tsx`).
- `F5.B2`: `assertSource('src/components/Capabilities.tsx')` verifies each service has 3 badges.
- `F5.B3`: `assertSource('src/components/Capabilities.tsx')` verifies responsive grid columns (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- `F5.B4`: `assertSource('src/components/Capabilities.tsx')` verifies numbers `'01'`, `'02'`, `'03'`.
- `F5.B5`: Replaced tautology (verifies `w-[19px] h-[19px]` in `Capabilities.tsx` and `ArrowUpRightIcon.tsx`).
- `F6.B1`: `assertSource('src/components/ContactCTA.tsx')` verifies `onClick={onOpenContact}`.
- `F6.B2`: `assertSource('src/components/ContactCTA.tsx')` verifies headline `LET'S WORK`.
- `F6.B3`: `assertSource('src/components/ContactCTA.tsx')` verifies `bg-[#E8330C]`.
- `F6.B4`: Replaced tautology (verifies `border-2` in `ContactCTA.tsx`).
- `F6.B5`: `assertSource('src/components/ContactCTA.tsx')` verifies button label `Contact Us`.
- `F7.B1`: `assertSource('src/components/Footer.tsx')` verifies `href="mailto:hello@creativemarketing.co"`.
- `F7.B2`: `assertSource('src/components/Footer.tsx')` verifies `href="tel:5553217654"`.
- `F7.B3`: `assertSource('src/components/Footer.tsx')` verifies copyright year 2026.
- `F7.B4`: `assertSource('src/components/Footer.tsx')` verifies legal links `Privacy Policy` and `Terms of Service`.
- `F7.B5`: `assertSource('src/components/Footer.tsx')` verifies address lines `Sunset Blvd, Suite 400` and `Los Angeles, CA 90028`.
- `F8.B1`: `assertSource('src/components/ContactModal.tsx')` verifies `event.key === 'Escape'`.
- `F8.B2`: `assertSource('src/components/ContactModal.tsx')` verifies non-Escape keys do not trigger close.
- `F8.B3`: `assertSource('src/components/ContactModal.tsx')` verifies `e.target === e.currentTarget` on backdrop.
- `F8.B4`: `assertSource('src/components/ContactModal.tsx')` verifies body scroll lock cleanup.
- `F8.B5`: Replaced tautology (verifies `target="_blank"` and `rel="noopener noreferrer"` in `ContactModal.tsx`).
- `F8.B6`: `assertSource('src/components/ContactModal.tsx')` verifies `AnimatePresence` and rapid mount/unmount safety.

---

### 6.3 Tier 3: Cross-Feature Combinations (10 Tests in `tier3-cross-feature.test.js`)

Each of the 10 pairwise combination tests must inspect the interconnected source components:
- **C1**: Inspects `src/components/Navigation.tsx`, `src/App.tsx`, and `src/components/ContactModal.tsx` to verify the Navigation trigger to Escape dismissal flow.
- **C2**: Inspects `src/components/ContactCTA.tsx`, `src/App.tsx`, and `src/components/ContactModal.tsx` to verify CTA trigger to Close Button dismissal flow.
- **C3**: Inspects `src/components/SelectedWorks.tsx`, `src/App.tsx`, and `src/components/ContactModal.tsx` to verify category tab state preservation across modal open/close.
- **C4**: Inspects `src/components/Navigation.tsx`, `src/components/SelectedWorks.tsx`, `src/components/ContactCTA.tsx`, and `src/App.tsx` for full anchor navigation to filtering flow.
- **C5**: Inspects `src/components/ContactModal.tsx` (`hello@fusionforce.co`) and `src/components/Footer.tsx` (`hello@creativemarketing.co`), asserting distinct email routing in production files.
- **C6**: Inspects `src/components/ContactModal.tsx` (`+91 95998 29714`) and `src/components/Footer.tsx` (`(555) 321-7654`), asserting distinct phone routing in production files.
- **C7**: Inspects `src/components/Navigation.tsx` (anchor IDs `philosophy`, `works`, `capabilities`) and `src/components/Capabilities.tsx` (card titles).
- **C8**: Inspects `src/components/Philosophy.tsx` (`01 /`), `src/components/SelectedWorks.tsx` (`02 /`), and `src/components/Capabilities.tsx` (`03 /`) for narrative chapter continuity.
- **C9**: Inspects `src/components/ContactModal.tsx` body scroll lock implementation (`overflow = 'hidden'`).
- **C10**: Inspects `src/components/Footer.tsx` and `src/App.tsx` verifying `<Footer onOpenContact=... />` is wired.

---

### 6.4 Tier 4: Real-World Application Scenarios (5 Tests in `tier4-application-scenarios.test.js`)

Each of the 5 user journeys must verify the genuine components at each journey step:
- **Journey 1**: Full Prospect Exploration Journey: Verifies `Hero.tsx` -> `Philosophy.tsx` -> `SelectedWorks.tsx` -> `Capabilities.tsx` -> `ContactCTA.tsx` -> `ContactModal.tsx`.
- **Journey 2**: Work Filtering & Portfolio Assessment Journey: Verifies `SelectedWorks.tsx` category tabs, `DEFAULT_WORKS` filtering, Project 01 and Project 02 differentiated titles (`Aura Luxury Essentials Campaign` vs `Aura Flagship Spatial Identity`), and `ContactModal.tsx`.
- **Journey 3**: Fast Lead / Mobile Navigation Journey: Verifies `Navigation.tsx` mobile drawer (`isMobileMenuOpen`, `md:hidden`), `ContactModal.tsx`, and `Footer.tsx`.
- **Journey 4**: Accessibility & Keyboard Navigation Journey: Verifies `Navigation.tsx` (`aria-label`), `SelectedWorks.tsx` (`role="tablist"`), and `ContactModal.tsx` (`role="dialog"`, `handleKeyDownTrap`).
- **Journey 5**: Stress & State Resilience Journey: Verifies `App.tsx` root container (`min-h-screen bg-base overflow-x-hidden`), `SelectedWorks.tsx` `AnimatePresence`, and `tailwind.config.js`.

---

## 7. Invalidation Proof & Certification Guarantees

To satisfy the Forensic Auditor and prevent future regression:
1. **Repository Search for `src`**:
   Running a pattern search for `src` across `tests/` will now return **over 120 matches** instead of 0.
2. **Component Deletion Invalidation Test**:
   If any component file in `src/components/` is deleted, `assertSource` will throw:
   `AssertionError: Authentication failure: src/components/<Component>.tsx must exist on disk`
   and all corresponding test cases will immediately fail.
3. **Component Corruption Invalidation Test**:
   - Deleting the wordmark from `Navigation.tsx` -> F1.1, F1.B5, Journey 1 fail.
   - Changing the button border from `border-2` in `ContactCTA.tsx` -> F6.B4 fails.
   - Removing `rel="noopener noreferrer"` from `ContactModal.tsx` -> F8.6, F8.B5 fail.
   - Changing the orange line dimensions in `Philosophy.tsx` -> F3.B5 fails.
   - Deleting service badges from `Capabilities.tsx` -> F5.B1, F5.3-F5.5 fail.
   - Unwiring `onOpenContact` from `<Footer />` in `App.tsx` -> F7.6, C10 fail.

---

## 8. Execution Checklist for Remediation Worker

1. [ ] Update `src/App.tsx`: Add `onOpenContact={() => setIsContactOpen(true)}` to `<Footer />`.
2. [ ] Update `src/components/Philosophy.tsx`: Synchronize statement copy and add `scroll-mt-20`.
3. [ ] Update `src/components/SelectedWorks.tsx`: Differentiate Project 02 title to `'Aura Flagship Spatial Identity'`, add `aria-hidden="true"` to indicator bars, and add `scroll-mt-20`.
4. [ ] Update `src/components/Capabilities.tsx`: Add `scroll-mt-20`.
5. [ ] Update `tests/e2e/fixtures/specifications.js`: Align statement text and Project 02 title.
6. [ ] Update `tests/e2e/helpers/test-utils.js`: Export `assertSource` and enhance `inspectSourceFile`.
7. [ ] Update `tests/e2e/tier1-feature-coverage.test.js`: Integrate `assertSource` across all 48 tests.
8. [ ] Update `tests/e2e/tier2-boundary-corner.test.js`: Replace all 6 tautologies and integrate `assertSource` across all 41 tests.
9. [ ] Update `tests/e2e/tier3-cross-feature.test.js`: Integrate `assertSource` across all 10 pairwise tests.
10. [ ] Update `tests/e2e/tier4-application-scenarios.test.js`: Integrate `assertSource` across all 5 journeys.
11. [ ] Run `npm test` (`node --test tests/e2e/*.test.js`) to verify 100% of all tests pass.
12. [ ] Run `npm run build` (`tsc -b && vite build`) to confirm clean build with zero TypeScript or bundling errors.
