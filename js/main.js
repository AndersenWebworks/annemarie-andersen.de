document.documentElement.classList.add('js');

// Sprachabhängige UI-Strings (Deutsch = Root, Englisch = /en/)
const LANG = document.documentElement.lang.startsWith('en') ? 'en' : 'de';
const T = {
  de: { navOpen: 'Navigation öffnen', navClose: 'Navigation schließen',
        slot: 'Nächster freier Projektslot', locale: 'de-DE' },
  en: { navOpen: 'Open navigation', navClose: 'Close navigation',
        slot: 'Next available project slot', locale: 'en-GB' },
}[LANG];

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

function setMobileNav(open) {
  if (!toggle || !links) return;
  links.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? T.navClose : T.navOpen);
  if (!open) {
    closeAllDropdowns();
  }
  if (open) {
    links.querySelector('a, button')?.focus();
  }
}

toggle?.addEventListener('click', () => setMobileNav(!links.classList.contains('open')));

function closeDropdown(dropdown, returnFocus = false) {
  dropdown.classList.remove('open');
  const trigger = dropdown.querySelector('.dropdown-trigger');
  trigger?.setAttribute('aria-expanded', 'false');
  if (returnFocus) trigger?.focus();
}

function closeAllDropdowns() {
  document.querySelectorAll('.has-dropdown.open').forEach(d => closeDropdown(d));
}

// Wire up aria-controls and dropdown-menu ids programmatically
document.querySelectorAll('.has-dropdown').forEach((dropdown, i) => {
  const menu = dropdown.querySelector('.dropdown-menu');
  const trigger = dropdown.querySelector('.dropdown-trigger');
  if (menu && trigger) {
    const id = `nav-dropdown-${i}`;
    menu.id = id;
    trigger.setAttribute('aria-controls', id);
  }
});

// Dropdown click
document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const dropdown = trigger.closest('.has-dropdown');
    const open = !dropdown.classList.contains('open');
    closeAllDropdowns();
    dropdown.classList.toggle('open', open);
    trigger.setAttribute('aria-expanded', String(open));
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.has-dropdown')) {
    closeAllDropdowns();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const openDropdown = document.querySelector('.has-dropdown.open');
    if (openDropdown) {
      closeDropdown(openDropdown, true);
    } else if (links?.classList.contains('open')) {
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
    const slotLabel = nextMonth.toLocaleDateString(T.locale, { month: 'long', year: 'numeric' });
    nextProjectSlot.textContent = `${T.slot}: ${slotLabel}.`;
  }

  document.querySelector('.back-to-top')?.addEventListener('click', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
});

// Fade-in on scroll
const fadeItems = document.querySelectorAll('.fade-in');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  fadeItems.forEach(el => observer.observe(el));
} else {
  fadeItems.forEach(el => el.classList.add('visible'));
}
