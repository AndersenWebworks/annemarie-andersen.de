/**
 * Mini-Funnel Engine v1
 * Inline contact funnel for annemarie-andersen.de
 * Based on jan-erik-andersen.de funnel engine v3.
 * Vanilla JS, JSON-driven, no backend.
 */
(function () {
  'use strict';

  var SLIDE_OUT_MS = 300;
  var SLIDE_IN_MS  = 400;
  var PRESS_MS     = 120;

  var funnel   = document.getElementById('kontakt-funnel');
  var app      = document.getElementById('funnel-app');
  if (!funnel || !app) return;

  var tree     = null;
  var history  = [];
  var currentNodeId = 'start';
  var lastResultTitle = '';
  var isAnimating = false;

  /* ── SVG Icon Library (Feather-style, 20x20, stroke 1.5) ── */

  var ICONS = {
    shield: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    'file-text': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
    eye: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    'book-open': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>',
    layers: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    zap: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    mail: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    phone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>',
    'refresh-cw': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>',
    'chevron-right': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
    'arrow-left': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
    users: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
    globe: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
    'help-circle': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'
  };

  /* ── Icon Mapping by Option Label ────────────────────────── */
  var OPTION_ICON_MAP = [
    { match: 'Leichte Sprache',     icon: 'shield' },
    { match: 'Barrierefreiheit',    icon: 'shield' },
    { match: 'Verwaltung',          icon: 'file-text' },
    { match: 'KI-Texte',            icon: 'zap' },
    { match: 'Lektorat',            icon: 'book-open' },
    { match: 'bersetzung',          icon: 'globe' },
    { match: 'nicht sicher',        icon: 'help-circle' },
    { match: 'BFSG',                icon: 'shield' },
    { match: 'BITV',                icon: 'shield' },
    { match: 'BGG',                 icon: 'shield' },
    { match: 'Behoerde',            icon: 'users' },
    { match: 'Kommune',             icon: 'users' },
    { match: 'Agentur',             icon: 'layers' },
    { match: 'Unternehmen',         icon: 'layers' },
    { match: 'Eigenes Projekt',     icon: 'book-open' },
    { match: 'Einzeln',             icon: 'file-text' },
    { match: 'Laufende',            icon: 'layers' },
    { match: 'Deutsch',             icon: 'file-text' },
    { match: 'Englisch',            icon: 'globe' }
  ];

  function getOptionIcon(label) {
    for (var i = 0; i < OPTION_ICON_MAP.length; i++) {
      if (label.indexOf(OPTION_ICON_MAP[i].match) !== -1) {
        return ICONS[OPTION_ICON_MAP[i].icon] || '';
      }
    }
    return '';
  }

  /* ── Depth Calculation for Progress ────────────────────── */

  var nodeDepths = {};

  function computeDepths() {
    function minToResult(nodeId, seen) {
      if (seen[nodeId]) return 99;
      seen[nodeId] = true;
      var node = tree[nodeId];
      if (!node) return 99;
      if (node.type === 'result') return 0;
      var min = 99;
      if (node.options) {
        for (var i = 0; i < node.options.length; i++) {
          var next = node.options[i].next;
          if (next) {
            var copy = {};
            for (var k in seen) copy[k] = true;
            var d = minToResult(next, copy);
            if (d < min) min = d;
          }
        }
      }
      return min + 1;
    }
    for (var id in tree) {
      nodeDepths[id] = minToResult(id, {});
    }
  }

  function buildStepLabel(nodeType) {
    if (nodeType === 'result') return '';
    var step = history.length + 1;
    if (step <= 1) return '';
    var total = history.length + (nodeDepths[currentNodeId] || 1);
    return '<span class="mf-step-label mf-stagger" style="--i:0">Schritt ' + step + ' von ' + total + '</span>';
  }

  /* ── Init ─────────────────────────────────────────── */

  function init() {
    fetch('funnel.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        tree = data.nodes;
        computeDepths();
        show('start');
      })
      .catch(function () {
        app.innerHTML = '<p style="color:var(--text-muted);font-size:15px;">Der Assistent konnte nicht geladen werden. Bitte schreiben Sie mir direkt eine E-Mail.</p>';
      });
  }

  /* ── Show (initial, no slide) ─────────────────────── */

  function show(nodeId) {
    currentNodeId = nodeId;
    app.setAttribute('data-node', nodeId);
    app.innerHTML = buildHTML(nodeId);
    bindEvents();
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        revealStaggered();
        focusHeading();
      });
    });
  }

  /* ── Navigate (with directional slide) ────────────── */

  function navigate(nodeId, direction) {
    if (isAnimating) return;
    isAnimating = true;

    var outClass = direction === 'forward' ? 'mf-slide-out-left' : 'mf-slide-out-right';
    var inClass  = direction === 'forward' ? 'mf-slide-in-right' : 'mf-slide-in-left';

    app.classList.add(outClass);

    setTimeout(function () {
      app.classList.remove(outClass);

      currentNodeId = nodeId;
      app.setAttribute('data-node', nodeId);
      app.innerHTML = buildHTML(nodeId);
      bindEvents();

      app.classList.add(inClass);

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          revealStaggered();
          focusHeading();
        });
      });

      setTimeout(function () {
        app.classList.remove(inClass);
        isAnimating = false;
      }, SLIDE_IN_MS);
    }, SLIDE_OUT_MS);
  }

  /* ── HTML Builders ────────────────────────────────── */

  function buildHTML(nodeId) {
    if (nodeId === '_contact') return buildContact();
    var node = tree[nodeId];
    if (!node) return '';
    if (node.type === 'question') return buildQuestion(node);
    if (node.type === 'result') {
      lastResultTitle = node.title || '';
      return buildResult(node, nodeId);
    }
    return '';
  }

  function buildQuestion(node) {
    var h = buildStepLabel('question');
    h += backBtn();

    h += '<h3 class="mf-question mf-stagger" tabindex="-1">' + esc(node.text) + '</h3>';
    if (node.subtitle) {
      h += '<p class="mf-subtitle mf-stagger" style="--i:1">' + esc(node.subtitle) + '</p>';
    }
    h += '<div class="mf-accent-line mf-stagger" style="--i:1.5"></div>';

    h += '<div class="mf-options">';
    for (var i = 0; i < node.options.length; i++) {
      var opt = node.options[i];
      var num = String(i + 1).length < 2 ? '0' + (i + 1) : String(i + 1);
      var si = 'style="--i:' + (i + 2) + '"';
      var data = 'data-next="' + esc(opt.next) + '"';
      var icon = getOptionIcon(opt.label);
      h += '<button class="mf-option mf-stagger" ' + si + ' ' + data + '>';
      h += '<span class="mf-option-num">' + num + '</span>';
      if (icon) h += '<span class="mf-option-icon">' + icon + '</span>';
      h += '<span class="mf-option-label">' + esc(opt.label) + '</span>';
      h += '<span class="mf-option-arrow" aria-hidden="true">' + ICONS['chevron-right'] + '</span>';
      h += '</button>';
    }
    h += '</div>';
    return h;
  }

  function buildResult(node, nodeId) {
    var h = backBtn();

    h += '<h3 class="mf-result-title mf-stagger" tabindex="-1">' + esc(node.title) + '</h3>';
    h += '<div class="mf-result-text mf-stagger" style="--i:1">' + formatText(node.text) + '</div>';

    h += '<div class="mf-cta-group mf-stagger" style="--i:2">';
    h += '<button class="mf-cta" data-action="contact">' + esc(node.cta.label);
    h += ' <span class="mf-cta-arrow">' + ICONS['chevron-right'] + '</span></button>';
    h += '</div>';

    h += '<div class="mf-result-actions mf-stagger" style="--i:3">';
    h += '<button class="mf-restart" data-action="restart">';
    h += '<span class="mf-action-icon">' + ICONS['refresh-cw'] + '</span> Nochmal von vorn</button>';
    h += '</div>';
    return h;
  }

  /* ── Email Builder from Funnel Path ─────────────────── */

  var RESULT_EMAILS = {
    'result-bfsg': {
      subject: 'Anfrage: Leichte Sprache / BFSG',
      body: 'wir m\u00fcssen unsere Kommunikation BFSG-konform gestalten und suchen Unterst\u00fctzung bei der Umsetzung in Leichte Sprache.'
    },
    'result-bitv': {
      subject: 'Anfrage: Leichte Sprache f\u00fcr Beh\u00f6rde (BITV)',
      body: 'wir sind eine Beh\u00f6rde / arbeiten f\u00fcr eine Beh\u00f6rde und brauchen Unterst\u00fctzung bei der \u00dcbersetzung in Leichte Sprache (BITV 2.0 / BGG).'
    },
    'result-leichte-sprache': {
      subject: 'Anfrage: Leichte Sprache',
      body: 'wir m\u00f6chten einen Text in Leichte Sprache \u00fcbersetzen lassen.'
    },
    'result-verwaltung-behoerde': {
      subject: 'Anfrage: Verst\u00e4ndliche Verwaltungstexte',
      body: 'wir sind eine Beh\u00f6rde / Kommune und m\u00f6chten unsere Texte verst\u00e4ndlicher machen.'
    },
    'result-verwaltung-agentur': {
      subject: 'Anfrage: Sprachdienstleistung (Beh\u00f6rdenauftrag)',
      body: 'wir sind eine Agentur mit einem Beh\u00f6rdenauftrag und suchen eine zuverl\u00e4ssige Sprachdienstleisterin f\u00fcr Leichte Sprache und Lektorat.'
    },
    'result-verwaltung-unternehmen': {
      subject: 'Anfrage: Verst\u00e4ndliche Unternehmenstexte',
      body: 'wir m\u00f6chten unsere Unternehmenskommunikation verst\u00e4ndlicher gestalten (Kundenanschreiben, AGBs o.\u00c4.).'
    },
    'result-ki-einzel': {
      subject: 'Anfrage: KI-Text pr\u00fcfen',
      body: 'wir haben einen KI-generierten Text, der professionell \u00fcberarbeitet werden soll.'
    },
    'result-ki-laufend': {
      subject: 'Anfrage: Laufende KI-Qualit\u00e4tssicherung',
      body: 'wir produzieren regelm\u00e4\u00dfig KI-Texte und suchen jemanden f\u00fcr die laufende Qualit\u00e4tssicherung.'
    },
    'result-lektorat-de': {
      subject: 'Anfrage: Deutsches Lektorat',
      body: 'wir haben einen deutschsprachigen Text, der lektoriert werden soll.'
    },
    'result-lektorat-en': {
      subject: 'Anfrage: Englisches Lektorat',
      body: 'wir haben einen englischsprachigen Text, der lektoriert werden soll.'
    },
    'result-lektorat-beide': {
      subject: 'Anfrage: Lektorat Deutsch und Englisch',
      body: 'wir haben Texte in Deutsch und Englisch, die lektoriert werden sollen.'
    },
    'result-unsicher': {
      subject: 'Anfrage \u00fcber Ihre Website',
      body: 'ich habe mir Ihre Website angeschaut und w\u00fcrde gern mit Ihnen sprechen.'
    }
  };

  function getLastResultId() {
    var path = history.concat([currentNodeId]);
    for (var i = path.length - 1; i >= 0; i--) {
      if (path[i].indexOf('result-') === 0) return path[i];
    }
    return '';
  }

  function buildEmailFromPath() {
    var resultId = getLastResultId();
    var fb = { subject: 'Anfrage', body: 'ich habe mir Ihre Website angeschaut und wuerde gern mit Ihnen sprechen.' };
    var data = RESULT_EMAILS[resultId] || fb;

    var subject = data.subject;
    var body = 'Hallo Frau Andersen,\n\n' + data.body;
    body += '\n\nHier sind ein paar Infos zum Projekt:\n[Bitte erg\u00e4nzen: Umfang, Zeitrahmen, ggf. Ausgangstext]\n\nViele Gr\u00fc\u00dfe\n[Ihr Name]';

    var previewHtml = 'Hallo Frau Andersen,\n\n' + esc(data.body);
    previewHtml += '\n\nHier sind ein paar Infos zum Projekt:\n<span class="mf-contact-placeholder">[Bitte erg\u00e4nzen: Umfang, Zeitrahmen, ggf. Ausgangstext]</span>\n\nViele Gr\u00fc\u00dfe\n<span class="mf-contact-placeholder">[Ihr Name]</span>';

    return { subject: subject, body: body, previewHtml: previewHtml };
  }

  function buildContact() {
    var email = buildEmailFromPath();
    var mailtoHref = 'mailto:mail@annemarie-andersen.de?subject=' +
      encodeURIComponent(email.subject) + '&body=' + encodeURIComponent(email.body);

    var h = backBtn();

    /* Personal intro with portrait */
    h += '<div class="mf-contact-intro mf-stagger">';
    h += '<img src="../portrait.jpg" alt="Annemarie Andersen" class="mf-contact-portrait" width="56" height="56" loading="lazy">';
    h += '<div class="mf-contact-intro-text">';
    h += '<h3 class="mf-result-title" tabindex="-1">Freut mich.</h3>';
    h += '<p class="mf-contact-intro-sub">Ich habe schon mal etwas vorbereitet \u2013 Sie m\u00fcssen nur noch absenden.</p>';
    h += '</div>';
    h += '</div>';

    /* Email preview */
    h += '<div class="mf-contact-preview mf-stagger" style="--i:1">';
    h += '<div class="mf-contact-preview-header">';
    h += '<span class="mf-contact-preview-to">An: mail@annemarie-andersen.de</span>';
    h += '<span class="mf-contact-preview-subject">' + esc(email.subject) + '</span>';
    h += '</div>';
    h += '<div class="mf-contact-preview-body">' + email.previewHtml + '</div>';
    h += '</div>';

    /* Primary CTA: send email */
    h += '<a href="' + esc(mailtoHref) + '" class="mf-contact-send mf-stagger" style="--i:2">';
    h += '<span class="mf-contact-send-icon">' + ICONS.mail + '</span>';
    h += '<span class="mf-contact-send-text">';
    h += '<strong>Mail-Entwurf \u00f6ffnen</strong>';
    h += '<span>Antwort innerhalb von 24 Stunden</span>';
    h += '</span>';
    h += '<span class="mf-cta-arrow">' + ICONS['chevron-right'] + '</span>';
    h += '</a>';

    /* Trust badge */
    h += '<p class="mf-trust-badge mf-stagger" style="--i:2.5">Antwort innerhalb von 24\u00a0Stunden \u00b7 20+ Jahre Erfahrung \u00b7 100\u00a0% remote</p>';

    /* Alternative contact */
    h += '<div class="mf-contact-alt mf-stagger" style="--i:3">';
    h += '<span class="mf-contact-alt-label">Oder direkt:</span>';
    h += '<a href="tel:+491751183251" class="mf-result-link">';
    h += '<span class="mf-action-icon">' + ICONS.phone + '</span> +49 175 118 32 51</a>';
    h += '<a href="mailto:mail@annemarie-andersen.de" class="mf-result-link">';
    h += '<span class="mf-action-icon">' + ICONS.mail + '</span> mail@annemarie-andersen.de</a>';
    h += '</div>';

    h += '<div class="mf-result-actions mf-stagger" style="--i:4">';
    h += '<button class="mf-restart" data-action="restart">';
    h += '<span class="mf-action-icon">' + ICONS['refresh-cw'] + '</span> Nochmal von vorn</button>';
    h += '</div>';

    return h;
  }

  function backBtn() {
    if (history.length === 0) return '';
    return '<button class="mf-back mf-stagger" aria-label="Zur\u00fcck">' +
           '<span class="mf-back-arrow" aria-hidden="true">' + ICONS['arrow-left'] + '</span> Zur\u00fcck</button>';
  }

  /* ── Stagger Reveal ───────────────────────────────── */

  function revealStaggered() {
    var items = app.querySelectorAll('.mf-stagger');
    for (var i = 0; i < items.length; i++) {
      items[i].classList.add('mf-reveal');
    }
  }

  /* ── Event Binding ────────────────────────────────── */

  function bindEvents() {
    var options = app.querySelectorAll('.mf-option');
    for (var i = 0; i < options.length; i++) {
      options[i].addEventListener('click', handleOptionClick);
    }

    var back = app.querySelector('.mf-back');
    if (back) back.addEventListener('click', goBack);

    var btns = app.querySelectorAll('[data-action="restart"]');
    for (var j = 0; j < btns.length; j++) {
      btns[j].addEventListener('click', function () {
        history = [];
        navigate('start', 'back');
      });
    }

    var contacts = app.querySelectorAll('[data-action="contact"]');
    for (var m = 0; m < contacts.length; m++) {
      contacts[m].addEventListener('click', function () {
        history.push(currentNodeId);
        navigate('_contact', 'forward');
      });
    }
  }

  /* ── Option Click with Feedback ───────────────────── */

  function handleOptionClick(e) {
    if (isAnimating) return;
    var btn = e.currentTarget;
    var next = btn.getAttribute('data-next');

    btn.classList.add('mf-option-pressed');

    setTimeout(function () {
      if (next) {
        history.push(currentNodeId);
        navigate(next, 'forward');
      }
    }, PRESS_MS);
  }

  function goBack() {
    if (history.length === 0 || isAnimating) return;
    var prev = history.pop();
    navigate(prev, 'back');
  }

  /* ── Keyboard ─────────────────────────────────────── */

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && history.length > 0) {
      // Only handle if funnel is visible in viewport
      var rect = funnel.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        goBack();
      }
    }
  });

  /* ── Mobile Swipe Navigation ─────────────────── */

  (function () {
    var touchStartX = 0;
    var touchStartY = 0;
    var SWIPE_THRESHOLD = 80;

    funnel.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    funnel.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      var dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy) * 1.5) {
        if (dx > 0 && history.length > 0) {
          goBack();
        }
      }
    }, { passive: true });
  })();

  /* ── Focus ────────────────────────────────────────── */

  function focusHeading() {
    var el = app.querySelector('[tabindex="-1"]');
    if (el) el.focus({ preventScroll: true });
  }

  /* ── Util ─────────────────────────────────────────── */

  function esc(str) {
    var d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function formatText(str) {
    var html = esc(str);
    if (html.indexOf('\n\n') > -1) {
      var segs = html.split('\n\n');
      html = segs[0];
      for (var s = 1; s < segs.length; s++) {
        if (segs[s].trim()) html += '<p class="mf-text-after">' + segs[s].trim() + '</p>';
      }
    }
    return html;
  }

  /* ── Start ────────────────────────────────────────── */

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
