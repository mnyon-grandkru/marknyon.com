function privacyRemove() {
    let width = screen.width;
    if (width < 768) {
        document.querySelector('#privacy').remove();
    }
}
function ready(fn) {
    if (document.readyState !== 'loading') {
      privacyRemove();
    } else {
      document.addEventListener('DOMContentLoaded', privacyRemove);
    }
  }
  