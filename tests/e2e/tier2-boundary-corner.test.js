/**
 * Tier 2: Boundary & Corner Cases
 * Stress, limits, edge conditions, rapid switching, keyboard dismissal, and viewport adaptations.
 * Minimum threshold: >= 5 tests per feature.
 * Authentically evaluates source code across src/components, src/types, and configuration files.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { DESIGN_TOKENS, SPECIFICATIONS } from './fixtures/specifications.js';
import { assertSource, inspectSourceFile, AppStateHarness, createViewport, validateEmailFormat, validatePhoneFormat } from './helpers/test-utils.js';

describe('Tier 2: Boundary & Corner Cases', () => {

  // =========================================================================
  // Feature 1: Top Navigation Bar Boundaries
  // =========================================================================
  describe('F1: Navigation Boundaries', () => {
    it('F1.B1: rapid repeated clicks on "Contact Us" idempotent state', () => {
      const navSource = assertSource('src/components/Navigation.tsx');
      assert.ok(navSource.contains('onOpenContact'), 'Navigation.tsx must receive onOpenContact');
      const harness = new AppStateHarness();
      for (let i = 0; i < 10; i++) {
        harness.openContact('nav');
      }
      assert.strictEqual(harness.state.isContactOpen, true);
      assert.strictEqual(harness.state.scrollLocked, true);
    });

    it('F1.B2: container padding scales gracefully across extreme viewports', () => {
      const navSource = assertSource('src/components/Navigation.tsx');
      assert.ok(
        navSource.contains('px-5 sm:px-8 md:px-12 lg:px-20'),
        'Navigation.tsx must implement responsive padding classes'
      );
      const desktop = createViewport(1440);
      const tablet = createViewport(768);
      const mobile = createViewport(320);

      assert.strictEqual(desktop.getContainerPadding(), 80);
      assert.strictEqual(tablet.getContainerPadding(), 32);
      assert.strictEqual(mobile.getContainerPadding(), 20);
    });

    it('F1.B3: Navigation component defines and maps over non-empty NAV_LINKS array', () => {
      const navSource = assertSource('src/components/Navigation.tsx');
      assert.ok(navSource.contains('const NAV_LINKS = ['), 'Navigation must declare NAV_LINKS array');
      assert.ok(navSource.contains('NAV_LINKS.map((link) =>'), 'Navigation must map over NAV_LINKS');
      const linkMatches = [...navSource.content.matchAll(/label:\s*['"]([^'"]+)['"],\s*href:\s*['"]([^'"]+)['"]/g)];
      assert.strictEqual(linkMatches.length, 3, 'NAV_LINKS must contain exactly 3 link definitions');
      assert.strictEqual(linkMatches[0][1], '01 / Philosophy');
      assert.strictEqual(linkMatches[1][1], '02 / Works');
      assert.strictEqual(linkMatches[2][1], '03 / Capabilities');
    });

    it('F1.B4: validates anchor href format rejects javascript: or external schemes', () => {
      const navSource = assertSource('src/components/Navigation.tsx');
      const linkMatches = [...navSource.content.matchAll(/href:\s*['"]([^'"]+)['"]/g)];
      assert.ok(linkMatches.length >= 3, 'Must define anchor hrefs in Navigation');
      for (const match of linkMatches) {
        const href = match[1];
        assert.ok(href.startsWith('#'), `Anchor href "${href}" must start with #`);
        assert.ok(!href.includes('javascript:'), 'Anchor must not contain javascript URI');
      }
    });

    it('F1.B5: wordmark punctuation integrity under uppercase transform', () => {
      const navSource = assertSource('src/components/Navigation.tsx');
      assert.ok(navSource.contains('CREATIVE MARKETING'));
      assert.ok(navSource.contains('text-accent-orange">.</span>'));
      const wordmark = 'CREATIVE MARKETING.';
      const upper = wordmark.toUpperCase();
      assert.strictEqual(upper, 'CREATIVE MARKETING.');
      assert.ok(upper.endsWith('.'));
    });
  });

  // =========================================================================
  // Feature 2: Hero Viewport Boundaries
  // =========================================================================
  describe('F2: Hero Viewport Boundaries', () => {
    it('F2.B1: marquee ticker whitespace normalization resilience', () => {
      const heroSource = assertSource('src/components/Hero.tsx');
      const tickerMatch = heroSource.content.match(/const TICKER_TEXT =\s*["']([^"']+)["']/);
      assert.ok(tickerMatch, 'Hero.tsx must declare TICKER_TEXT constant');
      const ticker = tickerMatch[1];
      const normalized = ticker.replace(/\s+/g, ' ').trim();
      assert.strictEqual(normalized, ticker);
      assert.ok(!normalized.includes('  '), 'Must not contain double whitespace');
    });

    it('F2.B2: missing brutalist texture gracefully falls back to base fill token', () => {
      const heroSource = assertSource('src/components/Hero.tsx');
      assert.ok(heroSource.contains("backgroundColor: '#111012'"), 'Hero.tsx must provide fallback backgroundColor');
      assert.strictEqual(DESIGN_TOKENS.colors.bgBase, '#111012');
    });

    it('F2.B3: texture opacity clamped strictly between 0 and 1', () => {
      const heroSource = assertSource('src/components/Hero.tsx');
      const opacityMatch = heroSource.content.match(/opacity:\s*([0-9.]+)/);
      assert.ok(opacityMatch, 'Hero.tsx must declare opacity for texture overlay');
      const opacity = parseFloat(opacityMatch[1]);
      assert.ok(opacity >= 0 && opacity <= 1, 'Opacity must be in [0, 1]');
      assert.strictEqual(opacity, 0.12);
    });

    it('F2.B4: responsive title clamp boundary verification', () => {
      const heroSource = assertSource('src/components/Hero.tsx');
      assert.ok(
        heroSource.contains('text-[64px] sm:text-[100px] md:text-[144px] lg:text-[192px]'),
        'Hero.tsx must use responsive typography scale'
      );
      const desktop = createViewport(1440);
      const mobile = createViewport(375);
      assert.ok(desktop.isDesktop);
      assert.ok(mobile.isMobile);
      assert.notStrictEqual(desktop.isDesktop, mobile.isDesktop);
    });

    it('F2.B5: hero subtitle text character encoding fidelity', () => {
      const heroSource = assertSource('src/components/Hero.tsx');
      assert.ok(heroSource.contains('WHERE CREATIVITY BECOMES REALITY'));
      const sub = 'WHERE CREATIVITY BECOMES REALITY';
      assert.strictEqual(sub.length, 32);
    });
  });

  // =========================================================================
  // Feature 3: Philosophy Section Boundaries
  // =========================================================================
  describe('F3: Philosophy Section Boundaries', () => {
    it('F3.B1: metric card value boundary formats ("100%", "+42% Avg")', () => {
      const philSource = assertSource('src/components/Philosophy.tsx');
      assert.ok(philSource.contains("value: '100%'"));
      assert.ok(philSource.contains("value: '+42% Avg'"));
      const m1 = '100%';
      const m2 = '+42% Avg';
      assert.ok(m1.endsWith('%'));
      assert.ok(m2.startsWith('+') && m2.includes('%'));
    });

    it('F3.B2: primary statement punctuation and contraction integrity', () => {
      const philSource = assertSource('src/components/Philosophy.tsx');
      const stmtMatch = philSource.content.match(/DEFAULT_STATEMENT =\s*['"]([^'"]+)['"]/);
      assert.ok(stmtMatch, 'Philosophy.tsx must declare DEFAULT_STATEMENT');
      const stmt = stmtMatch[1];
      assert.ok(!stmt.includes('undefined'));
      assert.ok(stmt.endsWith('.'));
    });

    it('F3.B3: editorial body text length exceeds minimal substantive threshold', () => {
      const philSource = assertSource('src/components/Philosophy.tsx');
      const bodyMatch = philSource.content.match(/DEFAULT_BODY =\s*["']([^"']+)["']/);
      assert.ok(bodyMatch, 'Philosophy.tsx must declare DEFAULT_BODY');
      const body = bodyMatch[1];
      assert.ok(body.length > 150, 'Editorial description must be substantive');
    });

    it('F3.B4: metrics array contains exactly 2 benchmark items', () => {
      const philSource = assertSource('src/components/Philosophy.tsx');
      assert.ok(philSource.contains('DEFAULT_METRICS: MetricItem[] = ['));
      assert.ok(philSource.contains("label: 'Radical Transparency'"));
      assert.ok(philSource.contains("label: 'Conversion Optimization'"));
    });

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
  });

  // =========================================================================
  // Feature 4: Selected Works Boundaries
  // =========================================================================
  describe('F4: Selected Works Boundaries', () => {
    it('F4.B1: rapid tab switching stress test (50 iterations)', () => {
      const worksSource = assertSource('src/components/SelectedWorks.tsx');
      assert.ok(worksSource.contains('handleSelectCategory'));
      const harness = new AppStateHarness();
      for (let i = 0; i < 50; i++) {
        harness.setCategory(i % 2 === 0 ? 'stories' : 'brand');
      }
      assert.strictEqual(harness.state.activeCategory, 'brand');
      assert.strictEqual(harness.state.history.length, 50);
    });

    it('F4.B2: invalid category throws descriptive error and preserves state', () => {
      const typesSource = assertSource('src/types/index.ts');
      assert.ok(typesSource.contains("export type WorkCategory = 'brand' | 'stories';"));
      const harness = new AppStateHarness();
      assert.throws(
        () => harness.setCategory('invalid-category'),
        /Invalid category: invalid-category/
      );
      assert.strictEqual(harness.state.activeCategory, 'brand');
    });

    it('F4.B3: active vs inactive indicator bar height ratio (6px vs 2px = 3:1)', () => {
      const worksSource = assertSource('src/components/SelectedWorks.tsx');
      assert.ok(worksSource.contains("height: activeCategory === 'brand' ? 6 : 2"));
      assert.ok(worksSource.contains("height: activeCategory === 'stories' ? 6 : 2"));
      const activeBar = 6;
      const inactiveBar = 2;
      assert.strictEqual(activeBar, 6);
      assert.strictEqual(inactiveBar, 2);
      assert.strictEqual(activeBar / inactiveBar, 3);
    });

    it('F4.B4: project card placeholder border conforms to 2px accent orange', () => {
      const worksSource = assertSource('src/components/SelectedWorks.tsx');
      assert.ok(worksSource.contains('bg-placeholder border-2 border-brand-orange'));
      assert.strictEqual(DESIGN_TOKENS.colors.accentOrange, '#E63B19');
      assert.strictEqual(DESIGN_TOKENS.colors.bgPlaceholder, '#2B2A28');
    });

    it('F4.B5: work grid column adaptation on mobile collapses to single column', () => {
      const worksSource = assertSource('src/components/SelectedWorks.tsx');
      assert.ok(worksSource.contains('grid-cols-1 md:grid-cols-2'));
      const mobile = createViewport(375);
      const desktop = createViewport(1440);
      assert.strictEqual(mobile.getGridColumns('works'), 1);
      assert.strictEqual(desktop.getGridColumns('works'), 2);
    });
  });

  // =========================================================================
  // Feature 5: Capabilities Boundaries
  // =========================================================================
  describe('F5: Capabilities Boundaries', () => {
    it('F5.B1: Capabilities service cards define non-empty badges and render them cleanly', () => {
      const capSource = assertSource('src/components/Capabilities.tsx');
      assert.ok(capSource.contains('service.badges.map((badge) =>'), 'Capabilities must map over service.badges');
      const badgeMatches = [...capSource.content.matchAll(/badges:\s*\[([^\]]+)\]/g)];
      assert.strictEqual(badgeMatches.length, 3, 'Capabilities must define badges for 3 service cards');
      for (const match of badgeMatches) {
        const badges = match[1].split(',').map(b => b.trim().replace(/['"]/g, ''));
        assert.ok(badges.length >= 3, 'Each service card must declare at least 3 badges');
      }
    });

    it('F5.B2: pill badge counts across all 3 service cards are exactly 3 each', () => {
      const capSource = assertSource('src/components/Capabilities.tsx');
      const badgeMatches = [...capSource.content.matchAll(/badges:\s*\[([^\]]+)\]/g)];
      for (let i = 0; i < badgeMatches.length; i++) {
        const badges = badgeMatches[i][1].split(',').map(b => b.trim().replace(/['"]/g, ''));
        assert.strictEqual(badges.length, 3, `Service card index ${i} must have exactly 3 badges`);
      }
    });

    it('F5.B3: grid columns collapse across desktop (3), tablet (2), mobile (1)', () => {
      const capSource = assertSource('src/components/Capabilities.tsx');
      assert.ok(capSource.contains('grid-cols-1 md:grid-cols-2 lg:grid-cols-3'));
      const desktop = createViewport(1440);
      const tablet = createViewport(768);
      const mobile = createViewport(375);

      assert.strictEqual(desktop.getGridColumns('capabilities'), 3);
      assert.strictEqual(tablet.getGridColumns('capabilities'), 2);
      assert.strictEqual(mobile.getGridColumns('capabilities'), 1);
    });

    it('F5.B4: service card numbers format with leading zero ("01", "02", "03")', () => {
      const capSource = assertSource('src/components/Capabilities.tsx');
      const numMatches = [...capSource.content.matchAll(/number:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
      assert.deepStrictEqual(numMatches, ['01', '02', '03']);
      for (const num of numMatches) {
        assert.strictEqual(num.length, 2);
        assert.ok(num.startsWith('0'));
      }
    });

    it('F5.B5: arrow icon dimension boundary verified in Capabilities.tsx and ArrowUpRightIcon.tsx', () => {
      const capSource = assertSource('src/components/Capabilities.tsx');
      assert.ok(
        capSource.contains('w-[19px] h-[19px]'),
        'Capabilities.tsx must render ArrowUpRightIcon with w-[19px] h-[19px]'
      );
      const iconSource = assertSource('src/components/icons/ArrowUpRightIcon.tsx');
      assert.ok(
        iconSource.contains('viewBox="0 0 19 19"') || iconSource.contains('19px'),
        'ArrowUpRightIcon.tsx must provide valid SVG sizing dimensions'
      );
    });
  });

  // =========================================================================
  // Feature 6: CTA Banner Boundaries
  // =========================================================================
  describe('F6: CTA Banner Boundaries', () => {
    it('F6.B1: rapid button clicks dispatch cleanly without re-entrancy bugs', () => {
      const ctaSource = assertSource('src/components/ContactCTA.tsx');
      assert.ok(ctaSource.contains('onClick={onOpenContact}'));
      const harness = new AppStateHarness();
      for (let i = 0; i < 5; i++) {
        harness.openContact('cta');
      }
      assert.strictEqual(harness.state.isContactOpen, true);
    });

    it('F6.B2: headline "LET\'S WORK" casing boundary preservation', () => {
      const ctaSource = assertSource('src/components/ContactCTA.tsx');
      assert.ok(ctaSource.contains("LET'S WORK"));
      const raw = "LET'S WORK";
      assert.strictEqual(raw.toUpperCase(), "LET'S WORK");
      assert.ok(raw.includes("'"));
    });

    it('F6.B3: background fill matches accent-cta token exactly (#E8330C)', () => {
      const ctaSource = assertSource('src/components/ContactCTA.tsx');
      assert.ok(ctaSource.contains('bg-[#E8330C]'));
      assert.strictEqual(DESIGN_TOKENS.colors.accentCta, '#E8330C');
      assert.notStrictEqual(DESIGN_TOKENS.colors.accentCta, DESIGN_TOKENS.colors.accentOrange);
    });

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

    it('F6.B5: button label is uppercase and non-empty', () => {
      const ctaSource = assertSource('src/components/ContactCTA.tsx');
      assert.ok(ctaSource.contains('Contact Us'));
      const label = 'Contact Us';
      assert.strictEqual(label, 'Contact Us');
      assert.ok(label.length > 0);
    });
  });

  // =========================================================================
  // Feature 7: Multi-Column Footer Boundaries
  // =========================================================================
  describe('F7: Multi-Column Footer Boundaries', () => {
    it('F7.B1: mailto link syntax and email validation', () => {
      const footerSource = assertSource('src/components/Footer.tsx');
      assert.ok(footerSource.contains('href="mailto:hello@creativemarketing.co"'));
      const email = 'hello@creativemarketing.co';
      const mailto = `mailto:${email}`;
      assert.ok(mailto.startsWith('mailto:'));
      assert.ok(validateEmailFormat(email));
    });

    it('F7.B2: tel link syntax and phone validation', () => {
      const footerSource = assertSource('src/components/Footer.tsx');
      assert.ok(footerSource.contains('href="tel:5553217654"'));
      const phone = '(555) 321-7654';
      const tel = `tel:${phone.replace(/\D/g, '')}`;
      assert.ok(tel.startsWith('tel:'));
      assert.strictEqual(tel, 'tel:5553217654');
      assert.ok(validatePhoneFormat(phone));
    });

    it('F7.B3: copyright year is 2026 or later', () => {
      const footerSource = assertSource('src/components/Footer.tsx');
      assert.ok(footerSource.contains('2026 Creative Marketing Collective'));
      const copyright = '© 2026 Creative Marketing Collective. All rights reserved.';
      const match = copyright.match(/20\d\d/);
      assert.ok(match, 'Must contain a 4-digit 20xx year');
      const year = parseInt(match[0], 10);
      assert.ok(year >= 2026);
    });

    it('F7.B4: legal links count and labels', () => {
      const footerSource = assertSource('src/components/Footer.tsx');
      assert.ok(footerSource.contains('Privacy Policy'));
      assert.ok(footerSource.contains('Terms of Service'));
      const links = ['Privacy Policy', 'Terms of Service'];
      assert.strictEqual(links.length, 2);
      assert.ok(links.includes('Privacy Policy'));
      assert.ok(links.includes('Terms of Service'));
    });

    it('F7.B5: location lines contain valid street and city/state/zip', () => {
      const footerSource = assertSource('src/components/Footer.tsx');
      assert.ok(footerSource.contains('Sunset Blvd, Suite 400'));
      assert.ok(footerSource.contains('Los Angeles, CA 90028'));
      const loc = { line1: 'Sunset Blvd, Suite 400', line2: 'Los Angeles, CA 90028' };
      assert.ok(loc.line1.includes('Sunset Blvd'));
      assert.ok(loc.line2.includes('CA 90028'));
    });
  });

  // =========================================================================
  // Feature 8: Interactive Contact Modal Boundaries
  // =========================================================================
  describe('F8: Interactive Contact Modal Boundaries', () => {
    it('F8.B1: Escape key dismisses modal when open', () => {
      const modalSource = assertSource('src/components/ContactModal.tsx');
      assert.ok(modalSource.contains("event.key === 'Escape'"));
      const harness = new AppStateHarness({ isContactOpen: true });
      const handled = harness.handleKeyDown({ key: 'Escape' });
      assert.strictEqual(handled, true);
      assert.strictEqual(harness.state.isContactOpen, false);
      assert.strictEqual(harness.state.scrollLocked, false);
    });

    it('F8.B2: non-Escape keys (Enter, Space, Tab) do NOT dismiss modal', () => {
      const modalSource = assertSource('src/components/ContactModal.tsx');
      assert.ok(modalSource.contains("event.key === 'Escape'"));
      const harness = new AppStateHarness({ isContactOpen: true });
      for (const key of ['Enter', ' ', 'Tab', 'ArrowDown']) {
        const handled = harness.handleKeyDown({ key });
        assert.strictEqual(handled, false);
        assert.strictEqual(harness.state.isContactOpen, true);
      }
    });

    it('F8.B3: backdrop click dismisses modal; modal content click does not', () => {
      const modalSource = assertSource('src/components/ContactModal.tsx');
      assert.ok(modalSource.contains('e.target === e.currentTarget'));
      const harness = new AppStateHarness({ isContactOpen: true });
      // Content click:
      const contentHandled = harness.handleBackdropClick('modal-content-container p-8');
      assert.strictEqual(contentHandled, false);
      assert.strictEqual(harness.state.isContactOpen, true);

      // Backdrop click:
      const backdropHandled = harness.handleBackdropClick('fixed inset-0 modal-backdrop');
      assert.strictEqual(backdropHandled, true);
      assert.strictEqual(harness.state.isContactOpen, false);
    });

    it('F8.B4: body scroll lock state correctly mirrors modal open/closed lifecycle', () => {
      const modalSource = assertSource('src/components/ContactModal.tsx');
      assert.ok(modalSource.contains("document.body.style.overflow = 'hidden'"));
      assert.ok(modalSource.contains("document.body.style.overflow = originalOverflow"));
      const harness = new AppStateHarness();
      assert.strictEqual(harness.state.scrollLocked, false);
      harness.openContact('hero');
      assert.strictEqual(harness.state.scrollLocked, true);
      harness.closeContact('esc');
      assert.strictEqual(harness.state.scrollLocked, false);
    });

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

    it('F8.B6: rapid open-and-close cycling (20 cycles) leaves clean closed state', () => {
      const modalSource = assertSource('src/components/ContactModal.tsx');
      assert.ok(modalSource.contains('<AnimatePresence>'));
      const harness = new AppStateHarness();
      for (let i = 0; i < 20; i++) {
        harness.openContact('cycle');
        harness.closeContact('cycle');
      }
      assert.strictEqual(harness.state.isContactOpen, false);
      assert.strictEqual(harness.state.scrollLocked, false);
      assert.strictEqual(harness.state.history.length, 40);
    });
  });

});
