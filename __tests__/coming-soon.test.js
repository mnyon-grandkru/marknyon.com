import { jest, describe, test, expect, beforeEach, afterEach } from '@jest/globals';
import { setupDOM, cleanupDOM } from './test-utils.js';

import '../script.js';

describe('Coming Soon Page', () => {
  beforeEach(() => {
    setupDOM();
    document.dispatchEvent(new Event('DOMContentLoaded'));
  });

  afterEach(() => {
    cleanupDOM();
  });

  describe('Page Structure', () => {
    test('should display Mark Nyon name', () => {
      expect(document.querySelector('.name').textContent).toBe('Mark Nyon');
    });

    test('should display tagline', () => {
      expect(document.querySelector('.tagline').textContent).toBe('Engineer and entrepreneur.');
    });

    test('should display coming soon status', () => {
      expect(document.querySelector('.status').textContent).toBe('Coming soon');
    });

    test('should display MN monogram', () => {
      const mark = document.querySelector('.mark');
      expect(mark).toBeInTheDocument();
      expect(mark.textContent).toContain('M');
      expect(mark.textContent).toContain('N');
    });
  });

  describe('External Links', () => {
    test('should link to Grand Kru', () => {
      const link = document.querySelector('a[href="https://www.grandkru.com"]');
      expect(link).toBeInTheDocument();
      expect(link.textContent).toBe('Grand Kru');
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toContain('noopener');
    });

    test('should link to LinkedIn', () => {
      const link = document.querySelector('a[href="https://linkedin.com/in/marknyon"]');
      expect(link).toBeInTheDocument();
      expect(link.textContent).toBe('LinkedIn');
    });

    test('should link to email', () => {
      const link = document.querySelector('a[href="mailto:msnyon@hey.com"]');
      expect(link).toBeInTheDocument();
      expect(link.textContent).toBe('Email');
    });

    test('should link to music site', () => {
      const link = document.querySelector('a[href="https://mnyon.com"]');
      expect(link).toBeInTheDocument();
      expect(link.textContent).toBe('Music');
    });
  });

  describe('Footer', () => {
    test('should set current year in footer', () => {
      const year = String(new Date().getFullYear());
      expect(document.getElementById('year').textContent).toBe(year);
    });
  });
});
