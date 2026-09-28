/**
 * Test Utilities & State Simulation Harnesses
 * Provides DOM simulation, state machines, event dispatchers, and verification helpers.
 */

import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

export class AppStateHarness {
  constructor(initialState = {}) {
    this.state = {
      isContactOpen: false,
      activeCategory: 'brand',
      scrollLocked: false,
      activeSection: '#hero',
      focusElement: null,
      history: [],
      ...initialState
    };
    this.subscribers = new Set();
  }

  subscribe(fn) {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }

  _notify() {
    for (const sub of this.subscribers) {
      sub({ ...this.state });
    }
  }

  openContact(triggerSource = 'nav') {
    this.state.isContactOpen = true;
    this.state.scrollLocked = true;
    this.state.focusElement = 'contact-modal';
    this.state.history.push({ action: 'openContact', triggerSource, timestamp: Date.now() });
    this._notify();
  }

  closeContact(dismissReason = 'close-button') {
    this.state.isContactOpen = false;
    this.state.scrollLocked = false;
    this.state.focusElement = 'previous-focus';
    this.state.history.push({ action: 'closeContact', dismissReason, timestamp: Date.now() });
    this._notify();
  }

  setCategory(category) {
    if (category !== 'brand' && category !== 'stories') {
      throw new Error(`Invalid category: ${category}. Must be 'brand' or 'stories'.`);
    }
    this.state.activeCategory = category;
    this.state.history.push({ action: 'setCategory', category, timestamp: Date.now() });
    this._notify();
  }

  handleKeyDown(event) {
    if (this.state.isContactOpen && event.key === 'Escape') {
      this.closeContact('escape-key');
      return true;
    }
    return false;
  }

  handleBackdropClick(targetClassName = '') {
    // If click is directly on backdrop overlay
    if (targetClassName.includes('modal-backdrop') || targetClassName.includes('fixed inset-0')) {
      this.closeContact('backdrop-click');
      return true;
    }
    // If click is inside modal-content, do not dismiss
    return false;
  }

  scrollToSection(sectionId) {
    this.state.activeSection = sectionId;
    this.state.history.push({ action: 'scrollToSection', sectionId, timestamp: Date.now() });
    this._notify();
  }
}

export function createViewport(width, height = 900) {
  const isDesktop = width >= 1440;
  const isTablet = width >= 768 && width < 1440;
  const isMobile = width < 768;

  return {
    width,
    height,
    isDesktop,
    isTablet,
    isMobile,
    getGridColumns(section) {
      if (section === 'capabilities') {
        return isMobile ? 1 : isTablet ? 2 : 3;
      }
      if (section === 'works') {
        return isMobile ? 1 : 2;
      }
      return 1;
    },
    getContainerPadding() {
      if (isDesktop) return 80;
      if (isTablet) return 32;
      return 20;
    }
  };
}

export function validateEmailFormat(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhoneFormat(phone) {
  // Supports international formats like +91 95998 29714 or US format (555) 321-7654
  const phoneRegex = /^(\+\d{1,3}[\s-]?)?(\(?\d{3,5}\)?[\s.-]?)?\d{3,5}[\s.-]?\d{4,5}$/;
  return phoneRegex.test(phone.trim());
}

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
