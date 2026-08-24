/* ========================================================================
   Tierperspektive – Renderer und Inhaltsdatei
   ------------------------------------------------------------------------
   Selbstständiges Bundle für die Haustierberatungs-One-Pager:
   - TIERPERSPEKTIVE_DATA hält alle Inhalte, Preise und Mailto-Daten.
   - Liest die in tierkommunikation.html vorbereiteten Platzhalter
     (data-bind, data-bind-text, data-bind-href, data-bind-label,
     data-bind-icon, data-list, data-list-nested) und füllt sie.
   - Robustheit: Wenn das Skript ohne Daten geladen wird, bleibt die
     Seite mit den statischen Fallback-Inhalten aus dem HTML sichtbar.

   Kontakt-E-Mail: mail@annemarie-andersen.de
   (aus kontakt/index.html der bestehenden Site übernommen.)
   ======================================================================== */

window.TIERPERSPEKTIVE_DATA = {
  /* ---------- Seitenweite Meta-Daten ---------- */
  meta: {
    title: "Tierperspektive – Haustierberatung von Annemarie Andersen",
    description: "Haustierberatung aus der Perspektive Ihres Tieres: Haltung, Alltag und Lebensraum prüfen und verbessern. Online-Beratung, klare Pauschalen, ehrliche Grenzen.",
    lastUpdated: "August 2026",
    priceStatus: "Preise sind Empfehlungen. Verbindlich wird der Preis durch das schriftliche Angebot nach dem Erstgespräch und Ihre Bestätigung."
  },

  /* ---------- Kontakt ---------- */
  contact: {
    email: "mail@annemarie-andersen.de",
    phoneLabel: "Telefon auf Anfrage",
    region: "Beratung 100 % remote aus Plau am See, Mecklenburg-Vorpommern. Keine Vor-Ort-Termine."
  },

  /* ---------- Hero / Einstieg ---------- */
  hero: {
    eyebrow: "Haustierberatung",
    title: "Haltung, Alltag und Lebensraum aus der Perspektive Ihres Haustiers.",
    lead: "Ich helfe Ihnen, die Haltung Ihres Haustiers und seinen Alltag aus dessen Perspektive zu betrachten – und gebe Ihnen konkrete, alltagstaugliche Verbesserungen, die wirklich umsetzbar sind.",
    primaryCta: { label: "Kostenloses Erstgespräch anfragen", target: "kontakt" },
    secondaryCta: { label: "Pakete ansehen", target: "pakete" }
  },

  /* ---------- Zielgruppe ---------- */
  about: {
    title: "Für wen ist die Beratung gedacht?",
    paragraphs: [
      "Sie halten ein Haustier – Hund, Katze, Kaninchen, Meerschweinchen, Hamster, Vogel oder ein anderes gängiges Heimtier – und möchten herausfinden, ob Haltung, Wohnung und Alltag wirklich zu Ihrem Tier passen.",
      "Sie suchen keine esoterische Tierkommunikation und keine medizinische Diagnose, sondern eine ehrliche, alltagspraktische Einschätzung mit konkreten Verbesserungen, die Sie ohne Spezialwerkzeug umsetzen können.",
      "Sie haben einen konkreten Anlass – eine Veränderung im Verhalten, einen Umzug, ein neues Tier, eine Umstellung im Tagesablauf – und wollen fundiert entscheiden, ohne gleich zu einem Spezialisten gehen zu müssen."
    ],
    notFor: [
      "Akute Notfälle, Verletzungen oder Krankheitssymptome – hier ist der Tierarzt die richtige Adresse.",
      "Wildtier-Fragen oder Fragen zu freilebenden Tieren im Garten – das ist Teil der Gartenberatung.",
      "Spezialberatung für Wild- oder Zooexoten, Reptilienaufzucht oder gewerbliche Tierhaltung."
    ]
  },

  /* ---------- Pauschalpakete ---------- */
  packages: [
    {
      id: "orientierungsgespraech",
      name: "Orientierungsgespräch",
      price: "95",
      unit: "Pauschalpreis",
      duration: "ca. 45 Minuten",
      short: "45-Minuten-Beratung per Video oder Telefon für einen ersten Überblick.",
      includes: [
        "Vorbereitungsfragebogen vor dem Termin (digital, ca. 10 Minuten).",
        "Beratung per Video oder Telefon, 45 Minuten.",
        "Strukturierter Notizzettel mit 5–8 konkreten Verbesserungspunkten.",
        "Eine kurze Nachfragen-Runde per E-Mail."
      ],
      target: "Empfohlen, wenn Sie eine erste Einordnung möchten."
    },
    {
      id: "lebensraumanalyse",
      name: "Lebensraumanalyse",
      price: "290",
      unit: "Pauschalpreis",
      duration: "ca. 60 Minuten + Bericht",
      short: "Ausführliche Analyse von Wohnraum, Alltag und Haltung mit schriftlichem Bericht.",
      includes: [
        "Vorbereitungsfragebogen und Anleitung für Foto- oder Videoaufnahmen.",
        "Sichtung der eingereichten Aufnahmen vor dem Termin.",
        "Beratungsgespräch per Video, 60 Minuten.",
        "Schriftlicher Bericht (10–15 Seiten PDF) mit Empfehlungen für Haltung, Wohnraum und Alltag.",
        "Eine Nachfragen-Runde per E-Mail."
      ],
      target: "Empfohlen, wenn Sie konkrete Veränderungen vornehmen möchten."
    },
    {
      id: "begleitung",
      name: "Mehrwöchige Begleitung",
      price: "540",
      unit: "Pauschalpreis",
      duration: "6 Wochen",
      short: "Sechs Wochen Begleitung mit zwei Terminen, drei Check-ins und Abschlussgespräch.",
      includes: [
        "Aufnahme-Workshop per Video, 60 Minuten, mit schriftlichem Startbericht.",
        "Zwei Folge-Termine per Video, je 45 Minuten.",
        "Drei schriftliche Check-in-Runden per E-Mail im Abstand von ca. 14 Tagen.",
        "Abschlussgespräch per Video, 30 Minuten, mit Abschlussbericht.",
        "Nachfragen-Runde per E-Mail nach Abschluss."
      ],
      target: "Empfohlen, wenn Sie über mehrere Wochen begleitet werden möchten."
    }
  ],

  /* ---------- Optionale Zusatzleistungen ---------- */
  addons: [
    {
      id: "telefonberatung",
      name: "Zusätzliche Telefonberatung",
      price: "55",
      unit: "Pauschalpreis",
      description: "30 Minuten für Einzelfragen außerhalb der gebuchten Termine."
    },
    {
      id: "fragenkatalog",
      name: "Schriftliche Fragenrunde",
      price: "45",
      unit: "Pauschalpreis",
      description: "Bis zu fünf Einzelfragen werden schriftlich per E-Mail beantwortet."
    },
    {
      id: "mehr-tiere",
      name: "Mehr-Tier-Haushalt",
      price: "60",
      unit: "pro weiteres Tier",
      description: "Erweiterung der Analyse um ein weiteres Haustier im selben Haushalt."
    },
    {
      id: "eingewoehnung",
      name: "Eingewöhnungs-Begleitung",
      price: "180",
      unit: "Pauschalpreis",
      description: "Vier Wochen Begleitung bei Eingewöhnung eines neuen Tieres mit zwei kurzen Check-ins."
    },
    {
      id: "checkliste",
      name: "Vorbereitungs-Checkliste",
      price: "25",
      unit: "Pauschalpreis",
      description: "PDF zum Selbstdrucken (12 Seiten) mit Checklisten für Erstausstattung, Umzug und Alltag."
    }
  ],

  /* ---------- Ablauf ---------- */
  process: [
    {
      step: "1",
      title: "Erstgespräch",
      description: "Kostenlos, 15 Minuten per Telefon oder Video. Wir klären Ihren Anlass, Ihr Tier und Ihre Erwartung."
    },
    {
      step: "2",
      title: "Schriftliches Angebot",
      description: "Sie erhalten per E-Mail ein verbindliches Angebot mit Leistungsumfang, Pauschalpreis und Terminoptionen."
    },
    {
      step: "3",
      title: "Bestätigung",
      description: "Erst nach Ihrer schriftlichen Bestätigung beginnt die Beratung. Ohne Bestätigung entstehen keine Kosten."
    },
    {
      step: "4",
      title: "Vorbereitung",
      description: "Sie erhalten einen Fragebogen und eine Anleitung für Foto- oder Videoaufnahmen Ihres Tieres und Wohnraums."
    },
    {
      step: "5",
      title: "Beratung und Bericht",
      description: "Termin per Video oder Telefon. Schriftlicher Bericht folgt je nach Paket als PDF."
    },
    {
      step: "6",
      title: "Nachfragen und Begleitung",
      description: "Eine Nachfragen-Runde per E-Mail ist im Paket enthalten. Mehrwöchige Pakete sehen weitere Termine vor."
    }
  ],

  /* ---------- Grenzen der Beratung (klar benannt) ---------- */
  boundaries: {
    title: "Was die Beratung leistet – und was nicht.",
    lead: "Ich bin ehrlich mit meinen Grenzen. Damit Sie wissen, wohin Sie sich stattdessen wenden können.",
    can: [
      "Haltung und Wohnraum aus Sicht Ihres Tieres einschätzen.",
      "Alltag und Routine auf Stressoren und Verbesserungspotenzial prüfen.",
      "Konkrete Empfehlungen zu Einrichtung, Beschäftigung und Sicherheit geben.",
      "Fragen zu artgerechter Haltung für gängige Heimtierarten beantworten.",
      "Auf Wunsch mehrere Wochen begleiten und Zwischenschritte einordnen."
    ],
    cannot: [
      "Keine medizinischen oder tierärztlichen Diagnosen, Behandlungen oder Medikamentenempfehlungen.",
      "Keine Verhaltenstherapie, kein Ersatztraining, keine Erziehungsberatung.",
      "Keine Rechtsberatung – etwa zu Mietrecht, Hundesteuer, Versicherung oder Reisen mit Tieren.",
      "Keine Wildtier-Beratung – das ist Teil des Gartenberatungs-Angebots.",
      "Keine Beratung zu Wild- oder Zooexoten, Aufzucht, Zucht oder gewerblicher Tierhaltung.",
      "Kein Notdienst und keine Akut-Versorgung – bei Notfällen wenden Sie sich bitte direkt an einen Tierarzt."
    ]
  },

  /* ---------- Wichtige Hinweise / Gut zu wissen ---------- */
  notes: {
    title: "Gut zu wissen",
    lead: "Vier Punkte, die Sie vor der Anfrage einordnen sollten. Ohne Kleingedrucktes, ohne Marketing-Sprache.",
    items: [
      {
        id: "tierarten",
        heading: "Tierarten im Angebot",
        body: "Beraten werden gängige Heimtierarten: Hund, Katze, Kaninchen, Meerschweinchen, Hamster, Ratte, Ziervögel und die üblichen Terrarientiere. Für Wildtiere, Wild- oder Zooexoten, gewerbliche Haltung und Zucht bin ich nicht die richtige Ansprechpartnerin."
      },
      {
        id: "remote",
        heading: "100 % remote",
        body: "Die Beratung läuft vollständig remote per Video oder Telefon. Vor-Ort-Termine sind nicht Teil des Angebots. Sie brauchen für die Vorbereitung ein Smartphone oder eine Kamera – die Foto- und Videoanleitung erklärt, welche Aufnahmen sinnvoll sind."
      },
      {
        id: "storno",
        heading: "Stornierung und Ausfall",
        body: "Bis 48 Stunden vor dem Termin können Sie kostenfrei absagen oder verschieben. Bei späterer Absage berechne ich 50 Prozent der Pauschale. Bei Absage am Tag des Termins oder Nichterscheinen wird die volle Pauschale fällig, sofern kein triftiger Grund vorliegt."
      },
      {
        id: "daten",
        heading: "Daten und Vertraulichkeit",
        body: "Alle Angaben zu Ihrem Tier, Ihrem Haushalt und den eingereichten Aufnahmen behandle ich vertraulich. Ich gebe keine Daten an Dritte weiter. Fotos, Videos und Fragebogen werden ausschließlich für die Beratung genutzt. Auf Wunsch lösche ich alle Unterlagen nach Abschluss der Beratung."
      }
    ]
  },

  /* ---------- FAQ ---------- */
  faq: {
    title: "Häufige Fragen",
    lead: "Was Interessentinnen und Interessenten vor der Anfrage am häufigsten wissen wollen – knapp und ehrlich beantwortet.",
    items: [
      {
        id: "tierkommunikation",
        question: "Ist das Tierkommunikation?",
        answer: "Nein. Ich behaupte nicht, mit Ihrem Tier zu sprechen oder dessen Gedanken zu lesen. Ich betrachte Haltung, Wohnraum und Alltag aus tierschutzfachlicher und alltagspraktischer Sicht und gebe Empfehlungen, die auf beobachtbaren Bedingungen beruhen. Wer eine klassische Tierkommunikation sucht, ist bei mir raus."
      },
      {
        id: "tierarten",
        question: "Welche Tierarten beraten Sie?",
        answer: "Gängige Heimtierarten: Hund, Katze, Kaninchen, Meerschweinchen, Hamster, Ratte, Ziervögel und die üblichen Terrarientiere. Für Wildtiere, Wild- oder Zooexoten, Zucht oder gewerbliche Haltung ist dieses Angebot nicht gedacht."
      },
      {
        id: "ablauf-remote",
        question: "Wie läuft die Online-Beratung konkret ab?",
        answer: "Nach dem kostenlosen Erstgespräch und Ihrer Bestätigung erhalten Sie einen Fragebogen sowie eine Anleitung für Foto- oder Videoaufnahmen. Diese senden Sie mir vor dem Termin. Der eigentliche Termin läuft per Video oder Telefon. Im Anschluss erhalten Sie je nach Paket einen schriftlichen Bericht als PDF."
      },
      {
        id: "verhalten",
        question: "Was ist, wenn mein Tier Verhaltensauffälligkeiten zeigt?",
        answer: "Dann ist die Grenze meiner Beratung erreicht. Ich kann die Haltungsbedingungen einschätzen, aber keine Verhaltenstherapie anbieten. Bei Verhaltensauffälligkeiten wenden Sie sich bitte an einen verhaltenstherapeutisch arbeitenden Tierarzt, eine anerkannte Tierpsychologin oder eine entsprechende Beratungsstelle."
      },
      {
        id: "tierarzt",
        question: "Ersetzt die Beratung einen Tierarztbesuch?",
        answer: "Nein, ausdrücklich nicht. Wenn Ihr Tier Krankheitszeichen zeigt, sich ungewöhnlich verhält, Schmerzen hat oder verunfallt ist, ist der Gang zum Tierarzt immer der erste und wichtigste Schritt. Ich empfehle keine Medikamente, stelle keine Diagnosen und ersetze keine tierärztliche Untersuchung."
      },
      {
        id: "antwortzeit",
        question: "Wie schnell bekomme ich nach der Anfrage eine Antwort?",
        answer: "Ich melde mich in der Regel innerhalb von zwei Werktagen mit Terminvorschlägen für ein telefonisches Erstgespräch. In Ferien- oder Krankheitszeiten kann es etwas länger dauern – Sie erhalten in jedem Fall eine Eingangsbestätigung mit einer realistischen Zeitabschätzung."
      },
      {
        id: "datenschutz-fotos",
        question: "Was passiert mit meinen Fotos und Videos?",
        answer: "Ihre Aufnahmen werden ausschließlich für die Vorbereitung und Durchführung der Beratung genutzt. Ich gebe sie nicht an Dritte weiter, nutze sie nicht für Werbung oder Referenzen und lösche sie auf Wunsch nach Abschluss der Beratung vollständig."
      },
      {
        id: "unterschied-garten",
        question: "Wie unterscheidet sich das Angebot von der Gartenberatung?",
        answer: "Die Gartenberatung betrachtet Ihren Garten aus der Perspektive von Pflanzen und wilden Tieren wie Insekten und Vögeln – mit Vor-Ort-Terminen in der Region Plau am See. Die Tierperspektive richtet sich ausschließlich an Ihre Heimtiere und läuft 100 % remote. Die beiden Angebote sind bewusst getrennt."
      }
    ]
  },

  /* ---------- Kontaktsektion ---------- */
  contactSection: {
    title: "Kontakt und Buchung",
    lead: "Der erste Schritt ist immer ein kostenloses Erstgespräch. Danach entscheiden Sie in Ruhe, ob Sie ein Angebot möchten.",
    intro: "Schreiben Sie mir kurz, um welches Tier es geht und was Ihr Anlass ist. Ich melde mich innerhalb von zwei Werktagen mit Terminvorschlägen für ein telefonisches Erstgespräch zurück.",
    channels: [
      {
        kind: "email",
        label: "E-Mail",
        value: "mail@annemarie-andersen.de",
        note: "Bevorzugter Kontaktweg. Bitte Tierart und Anlass in der Mail nennen."
      },
      {
        kind: "phone",
        label: "Telefon",
        value: "Telefon auf Anfrage",
        note: "Bitte per E-Mail um Rückruf bitten – ich rufe zeitnah zurück."
      },
      {
        kind: "region",
        label: "Standort",
        value: "Plau am See, 100 % remote",
        note: "Beratung deutschlandweit per Video oder Telefon."
      }
    ]
  },

  /* ---------- Call-to-Action / Nächster Schritt ---------- */
  cta: {
    title: "Nächster Schritt: kostenloses Erstgespräch",
    lead: "Im Erstgespräch schildern Sie kurz Ihr Anliegen. Ich sage Ihnen, welches Paket passt – und Sie entscheiden in Ruhe.",
    primary: {
      label: "Erstgespräch per E-Mail anfragen",
      mailtoSubject: "Erstgespräch Tierperspektive",
      mailtoBody: "Hallo,%0A%0Aich möchte ein kostenloses Erstgespräch zur Tierperspektive-Beratung vereinbaren.%0A%0AKurz zu meinem Anliegen:%0A-%20Tierart%20und%20Alter:%0A-%20Worum%20geht%20es%20mir:%0A-%20Was%20habe%20ich%20schon%20versucht:%0A%0AViele%20Grüße"
    },
    secondary: {
      label: "Pakete noch einmal ansehen",
      target: "pakete"
    },
    notes: [
      "Das Erstgespräch ist unverbindlich und kostenlos.",
      "Preise sind Empfehlungen; verbindlich wird der Preis durch das schriftliche Angebot nach dem Erstgespräch.",
      "Beratung 100 % remote per Video oder Telefon. Keine Vor-Ort-Termine."
    ]
  }
};

/* ========================================================================
   Renderer
   ======================================================================== */

(function () {
  "use strict";

  var data = window.TIERPERSPEKTIVE_DATA;
  if (!data || typeof data !== "object") {
    return;
  }

  /* --- Einfache Datenbindung über data-bind="a.b.c" --- */
  function getPath(obj, path) {
    return String(path).split(".").reduce(function (o, k) {
      return o && o[k] !== undefined ? o[k] : undefined;
    }, obj);
  }

  function bindText() {
    var nodes = document.querySelectorAll(".tierperspektive [data-bind]");
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var value = getPath(data, node.getAttribute("data-bind"));
      if (value !== undefined) {
        node.textContent = String(value);
      }
    }
  }

  function bindNestedText() {
    var nodes = document.querySelectorAll(".tierperspektive [data-bind-text]");
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var value = getPath(data, node.getAttribute("data-bind-text"));
      if (value !== undefined) {
        node.textContent = String(value);
      }
    }
  }

  function bindAnchors() {
    var nodes = document.querySelectorAll(".tierperspektive [data-bind-href]");
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var target = getPath(data, node.getAttribute("data-bind-href"));
      if (typeof target === "string") {
        node.setAttribute("href", "#" + target);
      }
    }
    var labelled = document.querySelectorAll(".tierperspektive [data-bind-label]");
    for (var j = 0; j < labelled.length; j++) {
      var el = labelled[j];
      var label = getPath(data, el.getAttribute("data-bind-label"));
      if (typeof label === "string") {
        el.textContent = label;
      }
    }
  }

  /* --- Icon-Mapping für Kontaktkanäle --- */
  var ICON_MAP = {
    email: "✉",
    phone: "☎",
    region: "◎"
  };

  function bindIcons() {
    var nodes = document.querySelectorAll(".tierperspektive [data-bind-icon]");
    nodes.forEach(function (node) {
      var key = node.getAttribute("data-bind-icon");
      var value = ICON_MAP[key];
      if (value === undefined) { return; }
      node.textContent = value;
      node.setAttribute("data-icon", value);
    });
  }

  /* --- Listen rendern --- */
  function renderList(container, items, templateName, isOrdered) {
    var sample = container.firstElementChild;
    var frag = document.createDocumentFragment();
    items.forEach(function (item, index) {
      var node;
      if (sample) {
        node = sample.cloneNode(true);
      } else {
        var tag = isOrdered
          ? "li"
          : (templateName === "package-card" || templateName === "note-card" ? "article"
            : templateName === "faq-item" ? "details"
            : "li");
        node = document.createElement(tag);
      }
      node.className = templateName;
      renderTemplate(node, item, templateName, isOrdered, index);
      frag.appendChild(node);
    });
    container.innerHTML = "";
    container.appendChild(frag);
  }

  function renderTemplate(node, item, templateName, isOrdered, index) {
    var binds = node.querySelectorAll("[data-bind-text]");
    var ownBind = node.matches("[data-bind-text]") ? [node] : [];
    var allBinds = Array.prototype.slice.call(binds).concat(ownBind);
    allBinds.forEach(function (el) {
      var key = el.getAttribute("data-bind-text");
      var value = item[key];
      if (value !== undefined) {
        el.textContent = String(value);
      }
    });

    var iconNodes = node.querySelectorAll("[data-bind-icon]");
    iconNodes.forEach(function (el) {
      var key = el.getAttribute("data-bind-icon");
      var value = item[key];
      if (value !== undefined && ICON_MAP[value] !== undefined) {
        el.textContent = ICON_MAP[value];
        el.setAttribute("data-icon", ICON_MAP[value]);
      }
    });

    if (templateName === "contact-channel" && item.kind !== undefined) {
      node.setAttribute("data-kind", String(item.kind));
    }

    /* Verschachtelte Liste: data-list-nested="key" */
    var nested = node.querySelector("[data-list-nested]");
    if (nested) {
      var key = nested.getAttribute("data-list-nested");
      var subItems = item[key] || [];
      nested.innerHTML = "";
      subItems.forEach(function (txt) {
        var li = document.createElement("li");
        li.textContent = String(txt);
        nested.appendChild(li);
      });
    }

    /* Featured-Markierung für das mittlere Paket (Index 1) */
    if (templateName === "package-card" && typeof index === "number" && index === 1) {
      node.classList.add("package-card--featured");
    }
  }

  function bindLists() {
    var lists = document.querySelectorAll(".tierperspektive [data-list]");
    lists.forEach(function (container) {
      var path = container.getAttribute("data-list");
      var value = getPath(data, path);
      if (!Array.isArray(value)) { return; }
      var templateName = container.getAttribute("data-template") || "item";
      var isOrdered = container.tagName.toLowerCase() === "ol";
      if (!templateName || templateName === "item") {
        container.innerHTML = "";
        value.forEach(function (txt) {
          var tag = isOrdered ? "li" : "p";
          var el = document.createElement(tag);
          el.textContent = String(txt);
          container.appendChild(el);
        });
        return;
      }
      renderList(container, value, templateName, isOrdered);
    });
  }

  /* --- E-Mail-Adressen in Kontaktkanälen automatisch verlinken --- */
  function bindChannelLinks() {
    var channels = document.querySelectorAll(".tierperspektive .contact-channel");
    channels.forEach(function (channel) {
      var kind = channel.getAttribute("data-kind");
      var valueNode = channel.querySelector(".contact-channel__value");
      if (!valueNode) { return; }
      var valueText = valueNode.textContent.trim();

      if (kind === "email" && valueText && valueText.indexOf("@") !== -1) {
        var link = document.createElement("a");
        link.href = "mailto:" + valueText + "?subject=" +
          encodeURIComponent("Erstgespräch Tierperspektive");
        link.textContent = valueText;
        valueNode.innerHTML = "";
        valueNode.appendChild(link);
      }
    });
  }

  /* --- CTA-Mailto korrekt zusammensetzen --- */
  function bindCtaMailto() {
    var cta = data.cta && data.cta.primary;
    if (!cta) { return; }
    var btn = document.getElementById("cta-mailto");
    if (!btn) { return; }
    var email = (data.contact && data.contact.email) || "";
    var subject = encodeURIComponent(cta.mailtoSubject || "Erstgespräch Tierperspektive");
    var bodyParam = (cta.mailtoBody || "").replace(/%20/g, "+");
    btn.setAttribute("href",
      "mailto:" + email + "?subject=" + subject + "&body=" + bodyParam);
    if (typeof cta.label === "string") {
      btn.textContent = cta.label;
    }
  }

  /* --- Meta in <title> und <meta> schreiben --- */
  function bindMeta() {
    if (!data.meta) { return; }
    if (data.meta.title) {
      document.title = data.meta.title;
    }
    var desc = document.querySelector('meta[name="description"]');
    if (desc && data.meta.description) {
      desc.setAttribute("content", data.meta.description);
    }
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && data.meta.title) {
      ogTitle.setAttribute("content", data.meta.title);
    }
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && data.meta.description) {
      ogDesc.setAttribute("content", data.meta.description);
    }
  }

  function init() {
    bindMeta();
    bindText();
    bindNestedText();
    bindAnchors();
    bindIcons();
    bindLists();
    bindChannelLinks();
    bindCtaMailto();
    document.documentElement.setAttribute("data-tp-rendered", "true");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();