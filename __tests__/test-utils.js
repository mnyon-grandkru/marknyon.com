export function setupDOM() {
  document.body.innerHTML = `
    <main class="page">
      <header class="mark" aria-label="Mark Nyon monogram">
        <span class="mark-letter">M</span><span class="mark-letter">N</span>
        <span class="mark-ring"></span>
      </header>
      <div class="intro">
        <p class="status">Coming soon</p>
        <h1 class="name">Mark Nyon</h1>
        <p class="tagline">Engineer and entrepreneur.</p>
      </div>
      <nav class="links" aria-label="Elsewhere">
        <a class="link" href="https://www.grandkru.com" target="_blank" rel="noopener noreferrer">Grand Kru</a>
        <a class="link" href="https://linkedin.com/in/marknyon" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a class="link" href="mailto:msnyon@hey.com">Email</a>
        <a class="link" href="https://mnyon.com" target="_blank" rel="noopener noreferrer">Music</a>
      </nav>
      <footer class="footer">
        <p>&copy; <span id="year"></span> Mark Nyon</p>
      </footer>
    </main>
  `;
}

export function cleanupDOM() {
  document.body.innerHTML = '';
}
