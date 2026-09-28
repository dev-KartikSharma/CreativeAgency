/**
 * Master E2E Test Suite Runner & Verification Aggregator
 * Validates the entire 4-tier testing framework across all specifications.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { DESIGN_TOKENS, SPECIFICATIONS } from './fixtures/specifications.js';
import { AppStateHarness, createViewport, assertSource } from './helpers/test-utils.js';

describe('Master E2E Suite Verification', () => {

  it('verifies all 8 core features are present in specifications fixture', () => {
    const requiredFeatures = [
      'navigation',
      'hero',
      'philosophy',
      'works',
      'capabilities',
      'ctaBanner',
      'footer',
      'contactModal'
    ];
    for (const feature of requiredFeatures) {
      assert.ok(SPECIFICATIONS[feature], `Missing feature specification: ${feature}`);
    }
  });

  it('verifies all 8 production component files, CSS, and config exist on disk', () => {
    const requiredFiles = [
      'src/App.tsx',
      'src/components/Navigation.tsx',
      'src/components/Hero.tsx',
      'src/components/Philosophy.tsx',
      'src/components/SelectedWorks.tsx',
      'src/components/Capabilities.tsx',
      'src/components/ContactCTA.tsx',
      'src/components/Footer.tsx',
      'src/components/ContactModal.tsx',
      'src/index.css',
      'tailwind.config.js'
    ];
    for (const file of requiredFiles) {
      assertSource(file);
    }
  });

  it('verifies design tokens cover all required color and typography scales', () => {
    const colorKeys = [
      'bgBase', 'bgCardDark', 'bgCardMid', 'bgPlaceholder',
      'accentOrange', 'accentCta', 'textPrimary', 'textWhite',
      'textMuted', 'textDim', 'strokePrimary', 'strokeCard'
    ];
    for (const key of colorKeys) {
      assert.ok(DESIGN_TOKENS.colors[key], `Missing color token: ${key}`);
      assert.ok(DESIGN_TOKENS.colors[key].startsWith('#'), `Color ${key} must be valid hex`);
    }

    const fontKeys = ['display', 'archivo', 'serif', 'sans', 'mono'];
    for (const key of fontKeys) {
      assert.ok(DESIGN_TOKENS.typography[key], `Missing font token: ${key}`);
    }
  });

  it('verifies state machine handles all lifecycle transitions without leak', () => {
    const harness = new AppStateHarness();
    assert.strictEqual(harness.state.isContactOpen, false);
    assert.strictEqual(harness.state.scrollLocked, false);

    // Open
    harness.openContact('test');
    assert.strictEqual(harness.state.isContactOpen, true);
    assert.strictEqual(harness.state.scrollLocked, true);

    // Close via Esc
    harness.handleKeyDown({ key: 'Escape' });
    assert.strictEqual(harness.state.isContactOpen, false);
    assert.strictEqual(harness.state.scrollLocked, false);

    // Category
    harness.setCategory('stories');
    assert.strictEqual(harness.state.activeCategory, 'stories');
    harness.setCategory('brand');
    assert.strictEqual(harness.state.activeCategory, 'brand');
  });

  it('verifies responsive viewport calculations across standard breakpoints', () => {
    const d = createViewport(1440);
    const t = createViewport(768);
    const m = createViewport(375);

    assert.strictEqual(d.isDesktop, true);
    assert.strictEqual(t.isTablet, true);
    assert.strictEqual(m.isMobile, true);

    assert.strictEqual(d.getGridColumns('capabilities'), 3);
    assert.strictEqual(t.getGridColumns('capabilities'), 2);
    assert.strictEqual(m.getGridColumns('capabilities'), 1);
  });

});
