import { setupDOM, cleanupDOM, clickThemeToggle, getCurrentTheme, getThemeLabelText } from './test-utils.js';

// Import the script to test
import '../script.js';

describe('Theme Switching', () => {
  beforeEach(() => {
    setupDOM();
    // Clear localStorage before each test
    localStorage.clear();
    localStorage.getItem.mockClear();
    localStorage.setItem.mockClear();
  });

  afterEach(() => {
    cleanupDOM();
  });

  describe('Initial Theme State', () => {
    test('should default to dark theme when no localStorage value exists', () => {
      // Arrange: Mock localStorage to return null (no saved theme)
      localStorage.getItem.mockReturnValue(null);

      // Act: Trigger DOMContentLoaded event to initialize theme
      document.dispatchEvent(new Event('DOMContentLoaded'));

      // Assert: Should default to dark theme
      expect(getCurrentTheme()).toBe('dark');
      expect(getThemeLabelText()).toBe('Dark');
    });

    test('should use saved dark theme from localStorage', () => {
      // Arrange: Mock localStorage to return 'dark'
      localStorage.getItem.mockReturnValue('dark');

      // Act: Trigger DOMContentLoaded event
      document.dispatchEvent(new Event('DOMContentLoaded'));

      // Assert: Should use dark theme
      expect(getCurrentTheme()).toBe('dark');
      expect(getThemeLabelText()).toBe('Dark');
    });

    test('should use saved light theme from localStorage', () => {
      // Arrange: Mock localStorage to return 'light'
      localStorage.getItem.mockReturnValue('light');

      // Act: Trigger DOMContentLoaded event
      document.dispatchEvent(new Event('DOMContentLoaded'));

      // Assert: Should use light theme
      expect(getCurrentTheme()).toBe('light');
      expect(getThemeLabelText()).toBe('Light');
    });
  });

  describe('Theme Toggle Functionality', () => {
    test('should toggle from dark to light theme', () => {
      // Arrange: Start with dark theme
      localStorage.getItem.mockReturnValue('dark');
      document.dispatchEvent(new Event('DOMContentLoaded'));
      expect(getCurrentTheme()).toBe('dark');

      // Act: Click theme toggle
      clickThemeToggle();

      // Assert: Should switch to light theme
      expect(getCurrentTheme()).toBe('light');
      expect(getThemeLabelText()).toBe('Light');
      expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'light');
    });

    test('should toggle from light to dark theme', () => {
      // Arrange: Start with light theme
      localStorage.getItem.mockReturnValue('light');
      document.dispatchEvent(new Event('DOMContentLoaded'));
      expect(getCurrentTheme()).toBe('light');

      // Act: Click theme toggle
      clickThemeToggle();

      // Assert: Should switch to dark theme
      expect(getCurrentTheme()).toBe('dark');
      expect(getThemeLabelText()).toBe('Dark');
      expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
    });

    test('should save theme preference to localStorage on toggle', () => {
      // Arrange: Start with dark theme
      localStorage.getItem.mockReturnValue('dark');
      document.dispatchEvent(new Event('DOMContentLoaded'));

      // Act: Toggle theme multiple times
      clickThemeToggle(); // dark -> light
      clickThemeToggle(); // light -> dark
      clickThemeToggle(); // dark -> light

      // Assert: localStorage should be called for each toggle
      expect(localStorage.setItem).toHaveBeenCalledTimes(3);
      expect(localStorage.setItem).toHaveBeenNthCalledWith(1, 'theme', 'light');
      expect(localStorage.setItem).toHaveBeenNthCalledWith(2, 'theme', 'dark');
      expect(localStorage.setItem).toHaveBeenNthCalledWith(3, 'theme', 'light');
    });
  });

  describe('Theme Toggle Animation', () => {
    test('should apply scale animation on toggle click', () => {
      // Arrange: Set up theme toggle
      localStorage.getItem.mockReturnValue('dark');
      document.dispatchEvent(new Event('DOMContentLoaded'));
      const themeToggle = document.querySelector('.toggle-switch');

      // Act: Click theme toggle
      clickThemeToggle();

      // Assert: Should have scale animation applied
      expect(themeToggle.style.transform).toBe('scale(0.9)');

      // Wait for animation to complete
      setTimeout(() => {
        expect(themeToggle.style.transform).toBe('scale(1)');
      }, 110);
    });
  });

  describe('Theme Elements Presence', () => {
    test('should have required theme elements in DOM', () => {
      // Arrange & Act: Set up DOM
      document.dispatchEvent(new Event('DOMContentLoaded'));

      // Assert: Required elements should exist
      expect(document.querySelector('.theme-toggle')).toBeInTheDocument();
      expect(document.querySelector('.toggle-switch')).toBeInTheDocument();
      expect(document.querySelector('.toggle-label')).toBeInTheDocument();
      expect(document.querySelector('.toggle-handle')).toBeInTheDocument();
    });
  });
});
