// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle?.addEventListener('click', () => links.classList.toggle('open'));

// Dropdown click
document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    trigger.closest('.has-dropdown').classList.toggle('open');
  });
});
document.addEventListener('click', (e) => {
  if (!e.target.closest('.has-dropdown')) {
    document.querySelectorAll('.has-dropdown.open').forEach(el => el.classList.remove('open'));
  }
});

// Header scroll shadow
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
  const btn = document.querySelector('.back-to-top');
  if (btn) btn.classList.toggle('visible', window.scrollY > 300);
});

// Back to top (Button sitzt nach dem Script-Tag, daher per DOMContentLoaded)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
