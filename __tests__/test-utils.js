import { render } from '@testing-library/dom';

// Helper function to set up DOM for testing
export function setupDOM() {
  document.body.innerHTML = `
    <nav class="navbar">
      <div class="nav-container">
        <div class="theme-toggle">
          <span class="toggle-label">Theme</span>
          <div class="toggle-switch">
            <div class="toggle-handle"></div>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <section id="hero" class="hero">
        <h1 class="hero-title">Mark Nyon</h1>
      </section>
      <section id="about" class="about">
        <h2 class="section-title">About Me</h2>
      </section>
      <section id="expertise" class="expertise">
        <div class="expertise-grid">
          <div class="expertise-card" data-aos="fade-up">
            <h3>Web Development</h3>
          </div>
        </div>
      </section>
    </main>
  `;
}

// Helper function to clear DOM after tests
export function cleanupDOM() {
  document.body.innerHTML = '';
}

// Helper function to simulate theme toggle click
export function clickThemeToggle() {
  const themeToggle = document.querySelector('.toggle-switch');
  if (themeToggle) {
    themeToggle.click();
  }
}

// Helper function to get current theme
export function getCurrentTheme() {
  return document.body.getAttribute('data-theme');
}

// Helper function to get theme label text
export function getThemeLabelText() {
  const themeLabel = document.querySelector('.toggle-label');
  return themeLabel ? themeLabel.textContent : '';
}
