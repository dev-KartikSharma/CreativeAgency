/**
 * Tier 4: Real-World Application Scenarios (Complete User Journeys)
 * Multi-step end-to-end user workflows simulating actual prospect behavior.
 * Authentically evaluates source code across src/App.tsx, src/components/*, and tailwind.config.js.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { DESIGN_TOKENS, SPECIFICATIONS } from './fixtures/specifications.js';
import { assertSource, inspectSourceFile, AppStateHarness, createViewport, validateEmailFormat, validatePhoneFormat } from './helpers/test-utils.js';

describe('Tier 4: Real-World Application Scenarios', () => {

  // =========================================================================
  // Journey 1: Prospect Exploration Journey
  // =========================================================================
  it('Journey 1: Full Prospect Exploration Journey (Hero -> Philosophy -> Works -> Capabilities -> CTA -> Modal -> Esc)', () => {
    // Authenticate all journey components on disk
    const heroSrc = assertSource('src/components/Hero.tsx');
    const philSrc = assertSource('src/components/Philosophy.tsx');
    const worksSrc = assertSource('src/components/SelectedWorks.tsx');
    const capSrc = assertSource('src/components/Capabilities.tsx');
    const ctaSrc = assertSource('src/components/ContactCTA.tsx');
    const modalSrc = assertSource('src/components/ContactModal.tsx');

    const harness = new AppStateHarness();
    const journeyLog = [];

    // Step 1: User arrives at hero viewport
    assert.strictEqual(harness.state.activeSection, '#hero');
    assert.ok(heroSrc.contains('WHERE CREATIVITY BECOMES REALITY'));
    assert.ok(heroSrc.contains('SIMPLICITY IS KEY'));
    journeyLog.push('Viewed Hero & Ticker');

    // Step 2: User scrolls down to Philosophy (01)
    harness.scrollToSection('#philosophy');
    assert.ok(philSrc.contains('01 / Our Philosophy'));
    assert.ok(philSrc.contains("value: '100%'"));
    assert.ok(philSrc.contains("value: '+42% Avg'"));
    journeyLog.push('Reviewed Philosophy & Metrics');

    // Step 3: User scrolls down to Selected Works (02)
    harness.scrollToSection('#works');
    assert.strictEqual(harness.state.activeCategory, 'brand');
    assert.ok(worksSrc.contains('02 / Selected Works'));
    assert.ok(worksSrc.contains('Aura Luxury Essentials Campaign'));
    assert.ok(worksSrc.contains('Aura Flagship Spatial Identity'));
    journeyLog.push('Assessed Selected Works');

    // Step 4: User scrolls to Capabilities (03)
    harness.scrollToSection('#capabilities');
    assert.ok(capSrc.contains('03 / Capabilities'));
    assert.ok(capSrc.contains('Brand Strategy'));
    assert.ok(capSrc.contains('Interface Design'));
    assert.ok(capSrc.contains('Growth Marketing'));
    journeyLog.push('Explored Capabilities');

    // Step 5: User scrolls to CTA Banner ("LET'S WORK") and clicks "Contact Us"
    harness.scrollToSection('#cta');
    assert.ok(ctaSrc.contains("LET'S WORK"));
    assert.ok(ctaSrc.contains('onClick={onOpenContact}'));
    harness.openContact('cta-banner');
    assert.strictEqual(harness.state.isContactOpen, true);
    assert.strictEqual(harness.state.scrollLocked, true);
    journeyLog.push('Triggered Contact Modal from CTA');

    // Step 6: User reviews modal details
    assert.ok(modalSrc.contains("Let's"));
    assert.ok(modalSrc.contains("Talk."));
    assert.ok(modalSrc.contains('hello@fusionforce.co'));
    assert.ok(modalSrc.contains('+91 95998 29714'));
    journeyLog.push('Inspected Contact Details');

    // Step 7: User dismisses modal via Escape key
    assert.ok(modalSrc.contains("event.key === 'Escape'"));
    const dismissed = harness.handleKeyDown({ key: 'Escape' });
    assert.strictEqual(dismissed, true);
    assert.strictEqual(harness.state.isContactOpen, false);
    assert.strictEqual(harness.state.scrollLocked, false);
    journeyLog.push('Dismissed Modal via Escape');

    assert.strictEqual(journeyLog.length, 7);
  });

  // =========================================================================
  // Journey 2: Work Filtering & Portfolio Assessment Journey
  // =========================================================================
  it('Journey 2: Work Filtering & Portfolio Assessment (Direct nav -> Filter toggle -> Review cards -> Modal -> Close)', () => {
    const worksSrc = assertSource('src/components/SelectedWorks.tsx');
    const modalSrc = assertSource('src/components/ContactModal.tsx');
    const harness = new AppStateHarness();

    // Step 1: Jump directly to Works via nav
    harness.scrollToSection('#works');
    assert.strictEqual(harness.state.activeCategory, 'brand');

    // Step 2: Toggle to "Stories We've Told"
    assert.ok(worksSrc.contains("Stories We've Told"));
    harness.setCategory('stories');
    assert.strictEqual(harness.state.activeCategory, 'stories');

    // Step 3: Toggle back to "Brand Identities Built"
    assert.ok(worksSrc.contains('Brand Identities Built'));
    harness.setCategory('brand');
    assert.strictEqual(harness.state.activeCategory, 'brand');

    // Step 4: Inspect card titles and tags in SelectedWorks source
    assert.ok(worksSrc.contains('Identity / Packaging'));
    assert.ok(worksSrc.contains('Aura Luxury Essentials Campaign'));
    assert.ok(worksSrc.contains('Aura Flagship Spatial Identity'));
    assert.ok(worksSrc.contains('Kinfolk Modern Narrative Series'));
    assert.ok(worksSrc.contains('Vanguard Visual Essay & Campaign'));

    // Step 5: Open contact modal
    harness.openContact('nav');
    assert.strictEqual(harness.state.isContactOpen, true);

    // Step 6: Verify Instagram outbound card destination
    assert.ok(modalSrc.contains('href="https://instagram.com/"'));
    assert.ok(modalSrc.contains('target="_blank"'));
    assert.ok(modalSrc.contains('rel="noopener noreferrer"'));

    // Step 7: Dismiss via close button
    assert.ok(modalSrc.contains('onClick={onClose}'));
    harness.closeContact('close-button');
    assert.strictEqual(harness.state.isContactOpen, false);
    assert.strictEqual(harness.state.activeCategory, 'brand');
  });

  // =========================================================================
  // Journey 3: Fast Lead / Mobile Navigation Journey
  // =========================================================================
  it('Journey 3: Fast Lead / Mobile Navigation (Mobile viewport -> Nav CTA -> Backdrop dismiss -> Footer details)', () => {
    const navSrc = assertSource('src/components/Navigation.tsx');
    const modalSrc = assertSource('src/components/ContactModal.tsx');
    const footerSrc = assertSource('src/components/Footer.tsx');

    assert.ok(navSrc.contains('isMobileMenuOpen'));
    assert.ok(navSrc.contains('md:hidden'));
    assert.ok(modalSrc.contains('handleBackdropClick'));
    assert.ok(footerSrc.contains('hello@creativemarketing.co'));

    const mobile = createViewport(375);
    assert.ok(mobile.isMobile);
    assert.strictEqual(mobile.getContainerPadding(), 20);

    const harness = new AppStateHarness();

    // Step 1: Immediate contact trigger from nav
    harness.openContact('nav');
    assert.strictEqual(harness.state.isContactOpen, true);
    assert.strictEqual(harness.state.scrollLocked, true);

    // Step 2: Note phone number
    assert.ok(modalSrc.contains('+91 95998 29714'));
    assert.ok(validatePhoneFormat('+91 95998 29714'));

    // Step 3: Dismiss via backdrop touch
    const dismissed = harness.handleBackdropClick('fixed inset-0 modal-backdrop');
    assert.strictEqual(dismissed, true);
    assert.strictEqual(harness.state.isContactOpen, false);
    assert.strictEqual(harness.state.scrollLocked, false);

    // Step 4: Scroll to footer for office inquiries and location
    harness.scrollToSection('#footer');
    assert.ok(footerSrc.contains('href="mailto:hello@creativemarketing.co"'));
    assert.ok(footerSrc.contains('Los Angeles, CA 90028'));
    assert.ok(footerSrc.contains('2026 Creative Marketing Collective'));
  });

  // =========================================================================
  // Journey 4: Accessibility & Keyboard Navigation Journey
  // =========================================================================
  it('Journey 4: Accessibility & Keyboard Navigation (Tab through landmarks -> Enter CTA -> Esc dismiss -> Focus return)', () => {
    const navSrc = assertSource('src/components/Navigation.tsx');
    const worksSrc = assertSource('src/components/SelectedWorks.tsx');
    const modalSrc = assertSource('src/components/ContactModal.tsx');

    assert.ok(navSrc.contains('aria-label="Main Navigation"'));
    assert.ok(worksSrc.contains('role="tablist"'));
    assert.ok(worksSrc.contains('role="tab"'));
    assert.ok(modalSrc.contains('role="dialog"'));
    assert.ok(modalSrc.contains('aria-modal="true"'));
    assert.ok(modalSrc.contains('handleKeyDownTrap'));

    const harness = new AppStateHarness();

    // Step 1: User tabs through navigation links
    const links = SPECIFICATIONS.navigation.links;
    assert.strictEqual(links.length, 3);

    // Step 2: User activates CTA via keyboard
    harness.openContact('keyboard-cta');
    assert.strictEqual(harness.state.isContactOpen, true);
    assert.strictEqual(harness.state.focusElement, 'contact-modal');

    // Step 3: User navigates inside modal, then hits Escape
    const handled = harness.handleKeyDown({ key: 'Escape' });
    assert.strictEqual(handled, true);
    assert.strictEqual(harness.state.isContactOpen, false);
    assert.strictEqual(harness.state.focusElement, 'previous-focus');
    assert.strictEqual(harness.state.scrollLocked, false);
  });

  // =========================================================================
  // Journey 5: Stress & State Resilience Journey
  // =========================================================================
  it('Journey 5: Stress & State Resilience (Rapid multi-actions, resize transitions, state integrity)', () => {
    const appSrc = assertSource('src/App.tsx');
    const worksSrc = assertSource('src/components/SelectedWorks.tsx');
    const tailwindSrc = assertSource('tailwind.config.js');

    assert.ok(appSrc.contains('overflow-x-hidden'));
    assert.ok(appSrc.contains('min-h-screen bg-base'));
    assert.ok(worksSrc.contains('AnimatePresence'));
    assert.ok(tailwindSrc.contains('theme'));

    const harness = new AppStateHarness();

    // 10 rapid category switches
    for (let i = 0; i < 10; i++) {
      harness.setCategory(i % 2 === 0 ? 'stories' : 'brand');
    }
    assert.strictEqual(harness.state.activeCategory, 'brand');

    // 10 rapid modal open/close transitions
    for (let i = 0; i < 10; i++) {
      harness.openContact('stress');
      if (i % 2 === 0) {
        harness.handleKeyDown({ key: 'Escape' });
      } else {
        harness.closeContact('close-button');
      }
    }
    assert.strictEqual(harness.state.isContactOpen, false);
    assert.strictEqual(harness.state.scrollLocked, false);

    // Viewport resize transitions
    const breakpoints = [1440, 1024, 768, 375, 1440];
    for (const w of breakpoints) {
      const vp = createViewport(w);
      assert.ok(vp.getContainerPadding() > 0);
      assert.ok(vp.getGridColumns('capabilities') >= 1);
    }

    assert.strictEqual(harness.state.history.length, 30);
  });

});
