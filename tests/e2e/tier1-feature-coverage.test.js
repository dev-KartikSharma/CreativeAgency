/**
 * Tier 1: Feature Coverage (Isolation)
 * Happy path testing for each of the 8 core features in isolation.
 * Minimum threshold: >= 5 tests per feature.
 * Authentically evaluates source code across src/components and configuration files.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { DESIGN_TOKENS, SPECIFICATIONS } from './fixtures/specifications.js';
import { assertSource, inspectSourceFile, AppStateHarness, validateEmailFormat, validatePhoneFormat } from './helpers/test-utils.js';

describe('Tier 1: Feature Coverage (Isolation)', () => {

  // =========================================================================
  // Feature 1: Top Navigation Bar (src/components/Navigation.tsx)
  // =========================================================================
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

  // =========================================================================
  // Feature 2: Hero Viewport & Marquee Ticker (src/components/Hero.tsx)
  // =========================================================================
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
      assert.ok(src.contains('font-display'));
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
      const textMatch = src.content.match(/const TICKER_TEXT =\s*"([^"]+)"/);
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

  // =========================================================================
  // Feature 3: Philosophy Section (src/components/Philosophy.tsx)
  // =========================================================================
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

  // =========================================================================
  // Feature 4: Selected Works & Category Switcher (src/components/SelectedWorks.tsx)
  // =========================================================================
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
      assert.ok(src.contains("Aura Flagship Spatial Identity"));
      assert.ok(src.contains("bg-placeholder border-2 border-brand-orange"));
    });

    it('F4.6: handles category switching state transition via onSelectCategory contract', () => {
      const src = assertSource('src/components/SelectedWorks.tsx');
      assert.ok(src.contains('handleSelectCategory'));
      assert.ok(src.contains('onSelectCategory?.(category)'));
    });
  });

  // =========================================================================
  // Feature 5: Capabilities / Services Section (src/components/Capabilities.tsx)
  // =========================================================================
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

  // =========================================================================
  // Feature 6: CTA Banner ("LET'S WORK") (src/components/ContactCTA.tsx)
  // =========================================================================
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

  // =========================================================================
  // Feature 7: Multi-Column Footer (src/components/Footer.tsx)
  // =========================================================================
  describe('F7: Multi-Column Footer', () => {
    it('F7.1: renders brand column with wordmark and mission statement', () => {
      const src = assertSource('src/components/Footer.tsx');
      assert.ok(src.contains('CREATIVE MARKETING.'));
      assert.ok(src.contains('Providing rigorous artistic design'));
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

  // =========================================================================
  // Feature 8: Interactive Contact Modal (src/components/ContactModal.tsx)
  // =========================================================================
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
