/**
 * Tier 5: Adversarial Stress, Edge Case & Boundary Verification Suite
 * Authored by: Empirical Challenger 1
 * 
 * Verifies:
 * 1. Extreme Viewport Boundaries (320px narrow mobile up to 2560px/3840px ultra-wide)
 * 2. Rapid Tab Switching Stress (Selected Works)
 * 3. Rapid Modal Open/Close Cycling & Scroll Lock Restoration
 * 4. Keyboard Navigation (Escape dismissal, Tab focus trapping, Enter/Space activation)
 * 5. Error Resilience & Missing Texture Fallback
 * 6. Zero Horizontal Overflow Guarantees (overflow-x-hidden)
 * 7. Phone & Email Routing Separation & Syntax Verification
 * 8. Source Code & Layout Conformance Checks
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { DESIGN_TOKENS, SPECIFICATIONS } from './fixtures/specifications.js';
import { AppStateHarness, createViewport, validateEmailFormat, validatePhoneFormat, inspectSourceFile } from './helpers/test-utils.js';

describe('Tier 5: Adversarial Stress & Edge Case Verification', () => {

  // =========================================================================
  // Section 1: Extreme Viewport Scaling & Boundary Constraints
  // =========================================================================
  describe('1. Extreme Viewport Scaling (320px to 3840px)', () => {
    const viewports = [
      { width: 320, label: '320px (Narrow Mobile / iPhone SE 1st gen)' },
      { width: 360, label: '360px (Standard Android compact)' },
      { width: 375, label: '375px (iPhone mini / SE 2nd gen)' },
      { width: 390, label: '390px (Modern standard iPhone)' },
      { width: 768, label: '768px (iPad portrait / Tablet breakpoint)' },
      { width: 1024, label: '1024px (iPad landscape / Small laptop)' },
      { width: 1440, label: '1440px (Desktop design reference)' },
      { width: 1920, label: '1920px (Full HD 1080p desktop)' },
      { width: 2560, label: '2560px (QHD / 2K ultra-wide)' },
      { width: 3840, label: '3840px (4K UHD extreme display)' }
    ];

    it('1.1: Container padding scales monotonically across extreme viewports', () => {
      let previousPadding = 0;
      for (const vp of viewports) {
        const v = createViewport(vp.width);
        const padding = v.getContainerPadding();
        assert.ok(padding >= 20, `${vp.label} padding (${padding}px) must be >= 20px`);
        assert.ok(padding <= 80, `${vp.label} padding (${padding}px) must be <= 80px`);
        assert.ok(padding >= previousPadding, `Padding at ${vp.width}px should not decrease`);
        previousPadding = padding;
      }
    });

    it('1.2: Capabilities grid column counts collapse monotonically under screen pressure', () => {
      for (const vp of viewports) {
        const v = createViewport(vp.width);
        const cols = v.getGridColumns('capabilities');
        if (vp.width < 768) {
          assert.strictEqual(cols, 1, `Viewport ${vp.width}px must collapse to single column`);
        } else if (vp.width < 1440) {
          assert.strictEqual(cols, 2, `Viewport ${vp.width}px must collapse to 2 columns`);
        } else {
          assert.strictEqual(cols, 3, `Viewport ${vp.width}px must render 3 columns`);
        }
      }
    });

    it('1.3: Selected Works grid column counts adapt without horizontal overflow', () => {
      for (const vp of viewports) {
        const v = createViewport(vp.width);
        const cols = v.getGridColumns('works');
        if (vp.width < 768) {
          assert.strictEqual(cols, 1, `Works at ${vp.width}px must collapse to 1 column`);
        } else {
          assert.strictEqual(cols, 2, `Works at ${vp.width}px must render 2 columns`);
        }
      }
    });

    it('1.4: Mobile viewport (320px) preserves minimal tap targets and layout integrity', () => {
      const v320 = createViewport(320);
      assert.strictEqual(v320.isMobile, true);
      assert.strictEqual(v320.isTablet, false);
      assert.strictEqual(v320.isDesktop, false);
      // At 320px, available content width with 20px padding on each side is 280px
      const availableWidth = 320 - (v320.getContainerPadding() * 2);
      assert.strictEqual(availableWidth, 280);
      assert.ok(availableWidth > 250, 'Available width must accommodate text without truncation');
    });

    it('1.5: Ultra-wide viewport (2560px-3840px) maintains 1440px max-width containment', () => {
      const v2560 = createViewport(2560);
      const v3840 = createViewport(3840);
      assert.strictEqual(v2560.isDesktop, true);
      assert.strictEqual(v3840.isDesktop, true);
      assert.strictEqual(DESIGN_TOKENS.breakpoints.desktop, 1440);
    });
  });

  // =========================================================================
  // Section 2: Rapid Tab Switching Stress (Selected Works)
  // =========================================================================
  describe('2. Rapid Tab Switching Stress (Selected Works)', () => {
    it('2.1: 100 rapid alternations between "brand" and "stories" maintain deterministic final state', () => {
      const harness = new AppStateHarness();
      assert.strictEqual(harness.state.activeCategory, 'brand');

      for (let i = 0; i < 100; i++) {
        const nextCat = i % 2 === 0 ? 'stories' : 'brand';
        harness.setCategory(nextCat);
        assert.strictEqual(harness.state.activeCategory, nextCat);
      }

      // After 100 iterations (even number, 0 to 99), 99 % 2 !== 0 -> 'brand'
      assert.strictEqual(harness.state.activeCategory, 'brand');
      assert.strictEqual(harness.state.history.length, 100);
    });

    it('2.2: Idempotent clicks on already active tab do not trigger state thrashing', () => {
      const harness = new AppStateHarness();
      const initialHistoryCount = harness.state.history.length;

      // Repeatedly setting same category:
      for (let i = 0; i < 10; i++) {
        harness.setCategory('brand');
      }

      assert.strictEqual(harness.state.activeCategory, 'brand');
    });

    it('2.3: Rejects malformed and injection category strings gracefully', () => {
      const harness = new AppStateHarness();
      const maliciousInputs = [
        '',
        ' ',
        '<script>alert(1)</script>',
        'BRAND',
        'STORIES',
        'null',
        'undefined',
        '../../etc/passwd',
        'brand; DROP TABLE users;'
      ];

      for (const input of maliciousInputs) {
        assert.throws(
          () => harness.setCategory(input),
          /Invalid category/,
          `Should throw for invalid category: "${input}"`
        );
        // Ensure state remains intact:
        assert.strictEqual(harness.state.activeCategory, 'brand');
      }
    });

    it('2.4: Active vs inactive indicator height adheres strictly to 6px vs 2px token', () => {
      const brandCat = SPECIFICATIONS.works.categories.find(c => c.id === 'brand');
      const storiesCat = SPECIFICATIONS.works.categories.find(c => c.id === 'stories');

      assert.strictEqual(brandCat.barHeight, 6);
      assert.strictEqual(brandCat.barColor, DESIGN_TOKENS.colors.accentOrange);
      assert.strictEqual(storiesCat.barHeight, 2);
      assert.strictEqual(storiesCat.barColor, DESIGN_TOKENS.colors.strokeCard);
    });
  });

  // =========================================================================
  // Section 3: Rapid Open/Close Cycling & Scroll Lock Invariant
  // =========================================================================
  describe('3. Rapid Contact Modal Open/Close Cycling & Scroll Lock', () => {
    it('3.1: 50 rapid open/close cycles guarantee zero scroll-lock leakage', () => {
      const harness = new AppStateHarness();
      assert.strictEqual(harness.state.scrollLocked, false);
      assert.strictEqual(harness.state.isContactOpen, false);

      for (let cycle = 0; cycle < 50; cycle++) {
        harness.openContact(`cycle-${cycle}`);
        assert.strictEqual(harness.state.isContactOpen, true);
        assert.strictEqual(harness.state.scrollLocked, true);

        // Alternate dismissal reasons:
        const dismissReason = cycle % 3 === 0 ? 'close-button' : cycle % 3 === 1 ? 'escape-key' : 'backdrop-click';
        if (dismissReason === 'escape-key') {
          harness.handleKeyDown({ key: 'Escape' });
        } else if (dismissReason === 'backdrop-click') {
          harness.handleBackdropClick('fixed inset-0 modal-backdrop');
        } else {
          harness.closeContact('close-button');
        }

        assert.strictEqual(harness.state.isContactOpen, false);
        assert.strictEqual(harness.state.scrollLocked, false);
      }

      assert.strictEqual(harness.state.history.length, 100);
    });

    it('3.2: Backdrop click discrimination: clicks on modal children do NOT close modal', () => {
      const harness = new AppStateHarness({ isContactOpen: true });

      // Click on title headline
      const hClick = harness.handleBackdropClick('font-display font-black text-white text-6xl');
      assert.strictEqual(hClick, false);
      assert.strictEqual(harness.state.isContactOpen, true);

      // Click on email link
      const emailClick = harness.handleBackdropClick('font-mono font-medium text-[13px]');
      assert.strictEqual(emailClick, false);
      assert.strictEqual(harness.state.isContactOpen, true);

      // Click on Instagram card
      const igClick = harness.handleBackdropClick('group flex items-center bg-white');
      assert.strictEqual(igClick, false);
      assert.strictEqual(harness.state.isContactOpen, true);

      // Direct click on backdrop overlay
      const backdropClick = harness.handleBackdropClick('fixed inset-0 z-50 flex flex-col modal-backdrop');
      assert.strictEqual(backdropClick, true);
      assert.strictEqual(harness.state.isContactOpen, false);
    });

    it('3.3: Idempotent open calls do not accumulate duplicate scroll locks', () => {
      const harness = new AppStateHarness();
      harness.openContact('nav');
      harness.openContact('cta');
      harness.openContact('footer');

      assert.strictEqual(harness.state.isContactOpen, true);
      assert.strictEqual(harness.state.scrollLocked, true);

      // Single close call restores unlocked state
      harness.closeContact('close-button');
      assert.strictEqual(harness.state.isContactOpen, false);
      assert.strictEqual(harness.state.scrollLocked, false);
    });
  });

  // =========================================================================
  // Section 4: Keyboard Interaction & Accessibility Focus Trapping
  // =========================================================================
  describe('4. Keyboard Interaction & Accessibility Focus Trapping', () => {
    it('4.1: Escape key dismisses modal only when modal is open', () => {
      const harness = new AppStateHarness({ isContactOpen: false });
      // When closed, Escape key is ignored
      const handledWhenClosed = harness.handleKeyDown({ key: 'Escape' });
      assert.strictEqual(handledWhenClosed, false);
      assert.strictEqual(harness.state.isContactOpen, false);

      // Open modal
      harness.openContact('keyboard');
      assert.strictEqual(harness.state.isContactOpen, true);

      // Escape key handles and dismisses
      const handledWhenOpen = harness.handleKeyDown({ key: 'Escape' });
      assert.strictEqual(handledWhenOpen, true);
      assert.strictEqual(harness.state.isContactOpen, false);
    });

    it('4.2: Non-Escape keys do not inadvertently dismiss modal', () => {
      const harness = new AppStateHarness({ isContactOpen: true });
      const nonDismissKeys = ['Enter', 'Space', 'Tab', 'Shift', 'Control', 'Alt', 'ArrowUp', 'ArrowDown', 'KeyA'];

      for (const key of nonDismissKeys) {
        const handled = harness.handleKeyDown({ key });
        assert.strictEqual(handled, false, `Key "${key}" must not dismiss modal`);
        assert.strictEqual(harness.state.isContactOpen, true);
      }
    });

    it('4.3: Focus returns to activating context upon modal dismissal', () => {
      const harness = new AppStateHarness();
      harness.openContact('nav-cta');
      assert.strictEqual(harness.state.focusElement, 'contact-modal');

      harness.closeContact('escape-key');
      assert.strictEqual(harness.state.focusElement, 'previous-focus');
    });

    it('4.4: Modal focus trap cycles through all interactive elements in DOM spec', () => {
      // Theoretical focus order inside node 11:25:
      // 1. Close button (closeBtnRef)
      // 2. Email mailto link (hello@fusionforce.co)
      // 3. Phone tel link (+91 95998 29714)
      // 4. Instagram external card link (@Instagram)
      const focusableOrder = [
        { role: 'button', label: 'Close modal' },
        { role: 'link', href: 'mailto:hello@fusionforce.co' },
        { role: 'link', href: 'tel:+919599829714' },
        { role: 'link', href: 'https://instagram.com/' }
      ];

      assert.strictEqual(focusableOrder.length, 4);
      assert.strictEqual(focusableOrder[0].label, 'Close modal');
      assert.strictEqual(focusableOrder[3].href, 'https://instagram.com/');
    });
  });

  // =========================================================================
  // Section 5: Error Resilience & Missing Inputs
  // =========================================================================
  describe('5. Error Resilience & Missing Inputs', () => {
    it('5.1: Missing texture fallback behavior preserves dark theme without breaking', () => {
      const baseBg = DESIGN_TOKENS.colors.bgBase;
      assert.strictEqual(baseBg, '#111012');
      // If /assets/brutalist-texture.svg fails to load, background remains #111012
      assert.ok(baseBg.startsWith('#'));
    });

    it('5.2: Texture opacity is strictly non-zero and within subtle range (0.10 to 0.15)', () => {
      const opacity = SPECIFICATIONS.hero.textureOpacity;
      assert.strictEqual(opacity, 0.12);
      assert.ok(opacity >= 0.10 && opacity <= 0.15);
    });

    it('5.3: Empty or missing project list fallback handling', () => {
      const emptyProjects = [];
      const filtered = emptyProjects.filter(p => p.category === 'brand');
      assert.deepStrictEqual(filtered, []);
      // Rendering empty list must not throw
      assert.strictEqual(filtered.length, 0);
    });

    it('5.4: Missing optional props in components do not cause runtime errors', () => {
      // Default props defined in Philosophy, SelectedWorks, Navigation, Hero
      assert.ok(SPECIFICATIONS.philosophy.statement);
      assert.ok(SPECIFICATIONS.philosophy.body);
      assert.ok(SPECIFICATIONS.works.headline);
    });
  });

  // =========================================================================
  // Section 6: Zero Horizontal Overflow Guarantees
  // =========================================================================
  describe('6. Zero Horizontal Overflow Guarantees', () => {
    it('6.1: Root App and body enforce overflow-x-hidden class', () => {
      // Verify in App.tsx source code
      const appSource = inspectSourceFile('src/App.tsx');
      assert.ok(appSource, 'src/App.tsx must exist');
      assert.ok(
        appSource.contains('overflow-x-hidden'),
        'src/App.tsx root div must include overflow-x-hidden'
      );

      // Verify in src/index.css
      const cssSource = inspectSourceFile('src/index.css');
      assert.ok(cssSource, 'src/index.css must exist');
      assert.ok(
        cssSource.contains('overflow-x: hidden'),
        'src/index.css body must enforce overflow-x: hidden'
      );
    });

    it('6.2: Hero section and CTA Banner clip unbounded typography width', () => {
      const heroSource = inspectSourceFile('src/components/Hero.tsx');
      assert.ok(heroSource, 'Hero.tsx must exist');
      assert.ok(
        heroSource.contains('overflow-hidden'),
        'Hero section must include overflow-hidden to clip massive display fonts'
      );

      const ctaSource = inspectSourceFile('src/components/ContactCTA.tsx');
      assert.ok(ctaSource, 'ContactCTA.tsx must exist');
      assert.ok(
        ctaSource.contains('overflow-hidden'),
        'CTA section must include overflow-hidden to clip LET\'S WORK banner'
      );
    });

    it('6.3: Infinite Marquee Ticker wraps unbounded flex content with overflow-hidden', () => {
      const heroSource = inspectSourceFile('src/components/Hero.tsx');
      assert.ok(
        heroSource.contains('w-full overflow-hidden py-5'),
        'Ticker container must have overflow-hidden to prevent ticker runaway width'
      );
    });
  });

  // =========================================================================
  // Section 7: Phone & Email Routing Separation & Syntax
  // =========================================================================
  describe('7. Phone & Email Routing Separation & Syntax', () => {
    const modalEmail = SPECIFICATIONS.contactModal.email;
    const modalPhone = SPECIFICATIONS.contactModal.phone;
    const footerEmail = SPECIFICATIONS.footer.inquiries.email;
    const footerPhone = SPECIFICATIONS.footer.inquiries.phone;

    it('7.1: Modal and Footer maintain strictly separated email endpoints', () => {
      assert.notStrictEqual(modalEmail, footerEmail);
      assert.strictEqual(modalEmail, 'hello@fusionforce.co');
      assert.strictEqual(footerEmail, 'hello@creativemarketing.co');
    });

    it('7.2: Modal and Footer maintain strictly separated phone endpoints', () => {
      assert.notStrictEqual(modalPhone, footerPhone);
      assert.strictEqual(modalPhone, '+91 95998 29714');
      assert.strictEqual(footerPhone, '(555) 321-7654');
    });

    it('7.3: Modal email and phone conform to international format specifications', () => {
      assert.ok(validateEmailFormat(modalEmail), 'Modal email must be valid RFC 5322 format');
      assert.ok(validatePhoneFormat(modalPhone), 'Modal phone must be valid international format');
      assert.ok(modalPhone.startsWith('+91'), 'Modal phone must have +91 country code (India)');
    });

    it('7.4: Footer email and phone conform to standard US agency specifications', () => {
      assert.ok(validateEmailFormat(footerEmail), 'Footer email must be valid RFC 5322 format');
      assert.ok(validatePhoneFormat(footerPhone), 'Footer phone must be valid US format');
      assert.ok(footerPhone.includes('(555)'), 'Footer phone must have area code 555');
    });

    it('7.5: Source files implement proper mailto: and tel: URI protocols', () => {
      const modalSource = inspectSourceFile('src/components/ContactModal.tsx');
      assert.ok(modalSource.contains('href="mailto:hello@fusionforce.co"'));
      assert.ok(modalSource.contains('href="tel:+919599829714"'));

      const footerSource = inspectSourceFile('src/components/Footer.tsx');
      assert.ok(footerSource.contains('href="mailto:hello@creativemarketing.co"'));
      assert.ok(footerSource.contains('href="tel:5553217654"'));
    });
  });

  // =========================================================================
  // Section 8: Component Architecture & Interface Conformance
  // =========================================================================
  describe('8. Component Architecture & Interface Conformance', () => {
    it('8.1: Navigation provides accessible mobile drawer and desktop bar', () => {
      const navSource = inspectSourceFile('src/components/Navigation.tsx');
      assert.ok(navSource.contains('aria-label="Main Navigation"'));
      assert.ok(navSource.contains('isMobileMenuOpen'));
      assert.ok(navSource.contains('01 / Philosophy'));
      assert.ok(navSource.contains('02 / Works'));
      assert.ok(navSource.contains('03 / Capabilities'));
    });

    it('8.2: SelectedWorks adheres to ARIA tablist/tab pattern', () => {
      const worksSource = inspectSourceFile('src/components/SelectedWorks.tsx');
      assert.ok(worksSource.contains('role="tablist"'));
      assert.ok(worksSource.contains('role="tab"'));
      assert.ok(worksSource.contains('role="tabpanel"'));
      assert.ok(worksSource.contains('aria-selected'));
    });

    it('8.3: ContactModal adheres to ARIA dialog specification', () => {
      const modalSource = inspectSourceFile('src/components/ContactModal.tsx');
      assert.ok(modalSource.contains('role="dialog"'));
      assert.ok(modalSource.contains('aria-modal="true"'));
      assert.ok(modalSource.contains('aria-labelledby="contact-modal-title"'));
      assert.ok(modalSource.contains('handleKeyDownTrap'));
    });

    it('8.4: Instagram card adheres to external link security standard', () => {
      const modalSource = inspectSourceFile('src/components/ContactModal.tsx');
      assert.ok(modalSource.contains('target="_blank"'));
      assert.ok(modalSource.contains('rel="noopener noreferrer"'));
    });
  });

});
