document.documentElement.classList.add('js');

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

function setMobileNav(open) {
  if (!toggle || !links) return;
  links.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Navigation schließen' : 'Navigation öffnen');
}

toggle?.addEventListener('click', () => setMobileNav(!links.classList.contains('open')));

function closeDropdown(dropdown) {
  dropdown.classList.remove('open');
  dropdown.querySelector('.dropdown-trigger')?.setAttribute('aria-expanded', 'false');
}

function closeAllDropdowns() {
  document.querySelectorAll('.has-dropdown.open').forEach(closeDropdown);
}

// Dropdown click
document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const dropdown = trigger.closest('.has-dropdown');
    const open = !dropdown.classList.contains('open');
    closeAllDropdowns();
    dropdown.classList.toggle('open', open);
    trigger.setAttribute('aria-expanded', String(open));
  });

  trigger.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
      e.preventDefault();
      trigger.click();
    }
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.has-dropdown')) {
    closeAllDropdowns();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllDropdowns();
    if (links?.classList.contains('open')) {
      setMobileNav(false);
      toggle?.focus();
    }
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
  const nextProjectSlot = document.getElementById('nextProjectSlot');
  if (nextProjectSlot) {
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const slotLabel = nextMonth.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });
    nextProjectSlot.textContent = `Nächster freier Projektslot: ${slotLabel}.`;
  }

  document.querySelector('.back-to-top')?.addEventListener('click', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
});

// Fade-in on scroll
const fadeItems = document.querySelectorAll('.fade-in');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  fadeItems.forEach(el => observer.observe(el));
} else {
  fadeItems.forEach(el => el.classList.add('visible'));
}
