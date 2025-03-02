// This script handles smooth page transitions
document.addEventListener("DOMContentLoaded", () => {
  // Add click event listeners to all internal links
  const internalLinks = document.querySelectorAll(
    'a[href^="/"], a[href^="./"], a[href^="../"], a[href^="auth/"]',
  );

  internalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Only handle internal navigation
      const href = this.getAttribute("href");
      if (href.startsWith("http") || href.startsWith("#")) {
        return; // Let the browser handle external links and anchors
      }

      e.preventDefault();

      // Add transition class to fade out
      document.body.classList.add("page-transition");

      // Navigate after animation completes
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });
});
