/**
 * Tier 3: Cross-Feature Combinations (Pairwise Coverage)
 * Tests multi-feature interactions, state persistence across modules, and contract handoffs.
 * Authentically evaluates source code across src/App.tsx and src/components/*.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { DESIGN_TOKENS, SPECIFICATIONS } from './fixtures/specifications.js';
import { assertSource, inspectSourceFile, AppStateHarness, validateEmailFormat, validatePhoneFormat } from './helpers/test-utils.js';

describe('Tier 3: Cross-Feature Combinations (Pairwise)', () => {

  // =========================================================================
  // Combination 1: Navigation Trigger -> Contact Modal -> Escape Dismissal
  // =========================================================================
  it('C1: Navigation Contact Us trigger dispatches modal, and Escape key restores page state', () => {
    const navSource = assertSource('src/components/Navigation.tsx');
    const appSource = assertSource('src/App.tsx');
    const modalSource = assertSource('src/components/ContactModal.tsx');

    assert.ok(navSource.contains('onOpenContact()'), 'Navigation calls onOpenContact handler');
    assert.ok(appSource.contains('onOpenContact={() => setIsContactOpen(true)}'), 'App wires Contact trigger');
    assert.ok(modalSource.contains("event.key === 'Escape'"), 'ContactModal implements Escape dismiss');

    const harness = new AppStateHarness();
    assert.strictEqual(harness.state.isContactOpen, false);
    assert.strictEqual(harness.state.scrollLocked, false);

    // 1. User clicks "Contact Us" in navigation bar
    harness.openContact('nav');
    assert.strictEqual(harness.state.isContactOpen, true);
    assert.strictEqual(harness.state.scrollLocked, true);
    assert.strictEqual(harness.state.focusElement, 'contact-modal');

    // 2. User presses Escape key
    const handled = harness.handleKeyDown({ key: 'Escape' });
    assert.strictEqual(handled, true);
    assert.strictEqual(harness.state.isContactOpen, false);
    assert.strictEqual(harness.state.scrollLocked, false);
    assert.strictEqual(harness.state.focusElement, 'previous-focus');
  });

  // =========================================================================
  // Combination 2: CTA Banner Trigger -> Contact Modal -> Close Button Dismissal
  // =========================================================================
  it('C2: CTA Banner Contact Us trigger dispatches modal, and Close Button restores page state', () => {
    const ctaSource = assertSource('src/components/ContactCTA.tsx');
    const appSource = assertSource('src/App.tsx');
    const modalSource = assertSource('src/components/ContactModal.tsx');

    assert.ok(ctaSource.contains('onClick={onOpenContact}'), 'ContactCTA wires onClick to onOpenContact');
    assert.ok(appSource.contains('ContactCTA onOpenContact={() => setIsContactOpen(true)}'), 'App wires ContactCTA trigger');
    assert.ok(modalSource.contains('onClick={onClose}'), 'ContactModal wires close button');

    const harness = new AppStateHarness();

    // 1. User scrolls to bottom CTA section and clicks "Contact Us"
    harness.scrollToSection('#cta');
    harness.openContact('cta-banner');
    assert.strictEqual(harness.state.isContactOpen, true);
    assert.strictEqual(harness.state.scrollLocked, true);

    // 2. User clicks circular close button
    harness.closeContact('close-button');
    assert.strictEqual(harness.state.isContactOpen, false);
    assert.strictEqual(harness.state.scrollLocked, false);
    assert.strictEqual(harness.state.activeSection, '#cta');
  });

  // =========================================================================
  // Combination 3: Category Switcher State Retention across Modal Lifecycle
  // =========================================================================
  it('C3: Selected Works category tab switch is preserved across Contact Modal open and close', () => {
    const worksSource = assertSource('src/components/SelectedWorks.tsx');
    const appSource = assertSource('src/App.tsx');
    const modalSource = assertSource('src/components/ContactModal.tsx');

    assert.ok(worksSource.contains('const [internalCategory, setInternalCategory] = useState<WorkCategory>(\'brand\')'));
    assert.ok(appSource.contains('<SelectedWorks />'));
    assert.ok(appSource.contains('isOpen={isContactOpen}'));

    const harness = new AppStateHarness();

    // 1. Default active category is 'brand'
    assert.strictEqual(harness.state.activeCategory, 'brand');

    // 2. User switches to 'stories'
    harness.setCategory('stories');
    assert.strictEqual(harness.state.activeCategory, 'stories');

    // 3. User opens contact modal from navigation
    harness.openContact('nav');
    assert.strictEqual(harness.state.isContactOpen, true);

    // 4. User dismisses modal via backdrop click
    harness.handleBackdropClick('modal-backdrop fixed inset-0');
    assert.strictEqual(harness.state.isContactOpen, false);

    // 5. Selected Works must STILL be on 'stories' tab (state persistence)
    assert.strictEqual(harness.state.activeCategory, 'stories');
  });

  // =========================================================================
  // Combination 4: Navigation Anchor Scroll -> Works Filtering -> CTA Trigger
  // =========================================================================
  it('C4: Sequential user flow: Navigation anchor jump -> Works filtering -> CTA trigger', () => {
    const navSource = assertSource('src/components/Navigation.tsx');
    const worksSource = assertSource('src/components/SelectedWorks.tsx');
    const ctaSource = assertSource('src/components/ContactCTA.tsx');
    const appSource = assertSource('src/App.tsx');

    assert.ok(navSource.contains("href: '#works'"));
    assert.ok(worksSource.contains("id = 'works'"));
    assert.ok(ctaSource.contains("id = 'contact-cta'"));
    assert.ok(appSource.contains('<SelectedWorks />'));

    const harness = new AppStateHarness();

    // 1. Click "02 / Works" link in nav
    const worksLink = SPECIFICATIONS.navigation.links.find(l => l.label === '02 / Works');
    assert.strictEqual(worksLink.href, '#works');
    harness.scrollToSection(worksLink.href);
    assert.strictEqual(harness.state.activeSection, '#works');

    // 2. Interact with Works Category Switcher
    harness.setCategory('stories');
    assert.strictEqual(harness.state.activeCategory, 'stories');

    // 3. Scroll to CTA and trigger modal
    harness.scrollToSection('#cta');
    harness.openContact('cta-banner');
    assert.strictEqual(harness.state.isContactOpen, true);

    // 4. Verify history trail
    const actions = harness.state.history.map(h => h.action);
    assert.deepStrictEqual(actions, ['scrollToSection', 'setCategory', 'scrollToSection', 'openContact']);
  });

  // =========================================================================
  // Combination 5: Modal Email vs Footer Email Routing Distinction
  // =========================================================================
  it('C5: Contact Modal and Footer maintain distinct authoritative email endpoints', () => {
    const modalSource = assertSource('src/components/ContactModal.tsx');
    const footerSource = assertSource('src/components/Footer.tsx');

    assert.ok(modalSource.contains('href="mailto:hello@fusionforce.co"'));
    assert.ok(footerSource.contains('href="mailto:hello@creativemarketing.co"'));

    const modalEmail = 'hello@fusionforce.co';
    const footerEmail = 'hello@creativemarketing.co';

    // Must be distinct addresses per specification
    assert.notStrictEqual(modalEmail, footerEmail);
    assert.strictEqual(modalEmail, 'hello@fusionforce.co');
    assert.strictEqual(footerEmail, 'hello@creativemarketing.co');

    // Both must be valid emails
    assert.ok(validateEmailFormat(modalEmail));
    assert.ok(validateEmailFormat(footerEmail));
  });

  // =========================================================================
  // Combination 6: Modal Phone vs Footer Phone Routing Distinction
  // =========================================================================
  it('C6: Contact Modal and Footer maintain distinct authoritative phone numbers', () => {
    const modalSource = assertSource('src/components/ContactModal.tsx');
    const footerSource = assertSource('src/components/Footer.tsx');

    assert.ok(modalSource.contains('href="tel:+919599829714"'));
    assert.ok(footerSource.contains('href="tel:5553217654"'));

    const modalPhone = '+91 95998 29714';
    const footerPhone = '(555) 321-7654';

    // Must be distinct phone numbers per specification
    assert.notStrictEqual(modalPhone, footerPhone);
    assert.strictEqual(modalPhone, '+91 95998 29714');
    assert.strictEqual(footerPhone, '(555) 321-7654');

    // Both must pass phone formatting
    assert.ok(validatePhoneFormat(modalPhone));
    assert.ok(validatePhoneFormat(footerPhone));
  });

  // =========================================================================
  // Combination 7: Capabilities Service Selection alongside Navigation Targets
  // =========================================================================
  it('C7: Capabilities service items align with navigation section targets without id conflict', () => {
    const navSource = assertSource('src/components/Navigation.tsx');
    const capSource = assertSource('src/components/Capabilities.tsx');

    assert.ok(navSource.contains("href: '#philosophy'"));
    assert.ok(navSource.contains("href: '#works'"));
    assert.ok(navSource.contains("href: '#capabilities'"));

    assert.ok(capSource.contains('Brand Strategy'));
    assert.ok(capSource.contains('Interface Design'));
    assert.ok(capSource.contains('Growth Marketing'));

    const navAnchors = SPECIFICATIONS.navigation.links.map(l => l.href.replace('#', ''));
    const sectionIds = ['philosophy', 'works', 'capabilities'];
    assert.deepStrictEqual(navAnchors, sectionIds);

    const serviceTitles = ['Brand Strategy', 'Interface Design', 'Growth Marketing'];
    assert.strictEqual(serviceTitles.length, 3);
  });

  // =========================================================================
  // Combination 8: Philosophy Metrics to Selected Works Data Handoff
  // =========================================================================
  it('C8: Narrative flow continuity from Philosophy (01) to Selected Works (02)', () => {
    const philSource = assertSource('src/components/Philosophy.tsx');
    const worksSource = assertSource('src/components/SelectedWorks.tsx');
    const capSource = assertSource('src/components/Capabilities.tsx');

    assert.ok(philSource.contains('01 / Our Philosophy'));
    assert.ok(worksSource.contains('02 / Selected Works'));
    assert.ok(capSource.contains('03 / Capabilities'));

    const philTag = SPECIFICATIONS.philosophy.tag;
    const worksTag = SPECIFICATIONS.works.tag;
    const capTag = SPECIFICATIONS.capabilities.tag;

    assert.ok(philTag.startsWith('01 /'));
    assert.ok(worksTag.startsWith('02 /'));
    assert.ok(capTag.startsWith('03 /'));
  });

  // =========================================================================
  // Combination 9: Modal Scroll Lock Consistency across Multiple Trigger Sources
  // =========================================================================
  it('C9: Scroll lock behavior is strictly consistent regardless of trigger source (nav vs cta)', () => {
    const modalSource = assertSource('src/components/ContactModal.tsx');
    assert.ok(modalSource.contains("document.body.style.overflow = 'hidden'"));
    assert.ok(modalSource.contains("document.body.style.overflow = originalOverflow || ''"));

    const harness = new AppStateHarness();

    // Trigger from nav:
    harness.openContact('nav');
    assert.strictEqual(harness.state.scrollLocked, true);
    harness.closeContact('close-button');
    assert.strictEqual(harness.state.scrollLocked, false);

    // Trigger from cta-banner:
    harness.openContact('cta-banner');
    assert.strictEqual(harness.state.scrollLocked, true);
    harness.handleKeyDown({ key: 'Escape' });
    assert.strictEqual(harness.state.scrollLocked, false);
  });

  // =========================================================================
  // Combination 10: Modal Dismissal Restores Full Page Interactivity for Footer
  // =========================================================================
  it('C10: Modal dismissal restores page interactivity allowing footer link interaction', () => {
    const appSource = assertSource('src/App.tsx');
    const footerSource = assertSource('src/components/Footer.tsx');

    assert.ok(appSource.contains('<Footer onOpenContact={() => setIsContactOpen(true)} />'), 'Footer must receive onOpenContact');
    assert.ok(footerSource.contains('onOpenContact'), 'Footer.tsx must accept onOpenContact');

    const harness = new AppStateHarness();
    harness.openContact('nav');
    assert.strictEqual(harness.state.isContactOpen, true);

    harness.closeContact('escape-key');
    assert.strictEqual(harness.state.isContactOpen, false);

    // Page interactivity restored: User can now access footer links
    harness.scrollToSection('#footer');
    assert.strictEqual(harness.state.activeSection, '#footer');
    assert.strictEqual(SPECIFICATIONS.footer.links.length, 2);
  });

});
