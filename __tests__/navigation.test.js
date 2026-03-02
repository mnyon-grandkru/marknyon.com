import { setupDOM, cleanupDOM } from './test-utils.js';

// Import the script to test
import '../script.js';

describe('Navigation Functionality', () => {
  beforeEach(() => {
    setupDOM();
    // Add navigation links to the DOM
    document.querySelector('.nav-container').innerHTML += `
      <div class="nav-links">
        <a href="#about" class="nav-link">About</a>
        <a href="#expertise" class="nav-link">Expertise</a>
        <a href="#experience" class="nav-link">Experience</a>
        <a href="#contact" class="nav-link">Contact</a>
      </div>
    `;
  });

  afterEach(() => {
    cleanupDOM();
  });

  describe('Smooth Scrolling', () => {
    test('should prevent default behavior on navigation link click', () => {
      // Arrange: Get a navigation link
      const aboutLink = document.querySelector('a[href="#about"]');
      const mockPreventDefault = jest.fn();

      // Act: Simulate click event
      const clickEvent = new Event('click');
      clickEvent.preventDefault = mockPreventDefault;
      aboutLink.dispatchEvent(clickEvent);

      // Assert: preventDefault should be called
      expect(mockPreventDefault).toHaveBeenCalled();
    });

    test('should scroll to target section when navigation link is clicked', () => {
      // Arrange: Mock scrollIntoView
      const mockScrollIntoView = jest.fn();
      const aboutSection = document.querySelector('#about');
      aboutSection.scrollIntoView = mockScrollIntoView;

      const aboutLink = document.querySelector('a[href="#about"]');

      // Act: Click the link
      aboutLink.click();

      // Assert: scrollIntoView should be called with smooth behavior
      expect(mockScrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  describe('Navigation Links', () => {
    test('should have all required navigation links', () => {
      // Arrange & Act: DOM is already set up

      // Assert: All navigation links should exist
      expect(document.querySelector('a[href="#about"]')).toBeInTheDocument();
      expect(document.querySelector('a[href="#expertise"]')).toBeInTheDocument();
      expect(document.querySelector('a[href="#experience"]')).toBeInTheDocument();
      expect(document.querySelector('a[href="#contact"]')).toBeInTheDocument();
    });

    test('should have correct href attributes', () => {
      // Arrange & Act: DOM is already set up

      // Assert: Links should have correct href values
      expect(document.querySelector('a[href="#about"]').getAttribute('href')).toBe('#about');
      expect(document.querySelector('a[href="#expertise"]').getAttribute('href')).toBe('#expertise');
      expect(document.querySelector('a[href="#experience"]').getAttribute('href')).toBe('#experience');
      expect(document.querySelector('a[href="#contact"]').getAttribute('href')).toBe('#contact');
    });
  });
});
