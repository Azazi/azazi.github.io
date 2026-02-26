(function () {
  'use strict';

  // ============================================================
  // Elements
  // ============================================================
  const header   = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu   = document.querySelector('.nav-menu');
  const navLinks  = document.querySelectorAll('.nav-link');
  const heroSection = document.getElementById('hero');
  const sections  = document.querySelectorAll('main section[id]');

  if (!header || !heroSection) return;

  // ============================================================
  // Sticky nav: transparent over hero, opaque once scrolled past
  // ============================================================
  function updateHeaderState() {
    const scrollY = window.scrollY;
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

    header.classList.toggle('is-scrolled', scrollY > 20);

    // Keep wordmark/links visible over the dark hero vs white content
    if (scrollY < heroBottom - 80) {
      header.dataset.zone = 'hero';
    } else {
      header.dataset.zone = 'content';
    }
  }

  window.addEventListener('scroll', updateHeaderState, { passive: true });
  updateHeaderState();

  // ============================================================
  // Active nav link: highlights the current section anchor
  // ============================================================
  function updateActiveLink() {
    const scrollMid = window.scrollY + window.innerHeight * 0.45;
    let activeId = null;

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollMid) {
        activeId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      const isActive = href === '#' + activeId;
      link.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  // ============================================================
  // Mobile nav toggle
  // ============================================================
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    navMenu.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        navToggle.focus();
      }
    });
  }

  // ============================================================
  // Section reveal via IntersectionObserver
  // ============================================================
  if ('IntersectionObserver' in window) {
    const revealTargets = document.querySelectorAll('.reveal-section, .reveal-item');

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: make everything visible for browsers without IntersectionObserver
    document.querySelectorAll('.reveal-section, .reveal-item').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

})();
