/**
 * MasterpiecesUnveiled - Core Scripts
 * Vanilla JS only. No dependencies.
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- Dark Mode Toggle ---
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('mu-theme');

  function applyTheme(theme) {
    document.body.classList.remove('dark-mode', 'light-mode');
    if (theme === 'dark') document.body.classList.add('dark-mode');
    if (theme === 'light') document.body.classList.add('light-mode');
    if (themeToggle) themeToggle.textContent = (theme === 'dark') ? '☀️' : '🌙';
  }

  // Apply saved or system preference on load
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme(prefersDark.matches ? 'dark' : 'light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark-mode');
      const newTheme = isDark ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('mu-theme', newTheme);
    });
  }

  // --- Mobile Menu Toggle ---
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', mobileMenu.classList.contains('open'));
    });
  }

  // --- Sticky Header: hide on scroll down, show on scroll up ---
  let lastScrollY = 0;
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 120) {
      header.classList.add('hidden');
      if (mobileMenu) mobileMenu.classList.remove('open');
    } else {
      header.classList.remove('hidden');
    }
    lastScrollY = currentScrollY;
  }, { passive: true });

  // --- Article-only features ---
  const articleContent = document.querySelector('.article-content');

  if (articleContent) {

    // Read time estimate
    const wordCount = articleContent.innerText.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(wordCount / 220));
    document.querySelectorAll('.dynamic-read-time').forEach(el => {
      el.textContent = `${minutes} min read`;
    });

    // Auto-generate Table of Contents from H2s
    const tocContainer = document.getElementById('toc-container');
    if (tocContainer) {
      const headings = articleContent.querySelectorAll('h2');
      if (headings.length > 0) {
        const ul = document.createElement('ul');
        ul.className = 'toc-list';

        headings.forEach((heading, i) => {
          if (!heading.id) heading.id = `section-${i + 1}`;
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = `#${heading.id}`;
          a.textContent = heading.textContent;

          a.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.getElementById(heading.id);
            if (target) {
              const offset = 90;
              const top = target.getBoundingClientRect().top + window.scrollY - offset;
              window.scrollTo({ top, behavior: 'smooth' });
            }
          });

          li.appendChild(a);
          ul.appendChild(li);
        });

        tocContainer.appendChild(ul);
      } else {
        const widget = tocContainer.closest('.widget');
        if (widget) widget.style.display = 'none';
      }
    }
  }

});
