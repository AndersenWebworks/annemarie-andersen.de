/* ========================================================================
   Gartenberatung – zentrale Inhalts- und Preisdatei
   ------------------------------------------------------------------------
   Diese Datei ist die einzige Quelle für Angebotsbeschreibungen, Preise
   und Texte der Gartenberatungs-Website. Layout und HTML-Struktur werden
   nicht angefasst, wenn hier etwas geändert wird.

   Bearbeitungshinweise
   --------------------
   * Texte in deutscher Sprache, sachlich, ohne Marketing-Floskeln.
   * Keine Versprechen über Ergebnisse, Erträge oder Tierbesuche.
   * Preise sind Pauschalen in EUR und vorläufig; die fachliche
     Preisprüfung ist noch nicht abgeschlossen. Verbindlich werden
     sie erst durch das schriftliche Angebot und Ihre Bestätigung.
   * Kontaktangaben (E-Mail, Telefon, Region) unten in `contact` –
     derzeit Platzhalter. Nach Freischaltung durch den Anbieter
     ersetzen.
   ======================================================================== */

window.GARTENBERATUNG_DATA = {
  /* ---------- Seitenweite Meta-Daten ---------- */
  meta: {
    title: "Gartenberatung mit Tier- und Lebensraumperspektive",
    description: "Gartenberatung in Pauschalpaketen für Gärten, in denen Pflanzen, Haustiere und Wildtiere zusammen gedacht werden. Vor-Ort-Termine in der Region Plau am See und Umgebung.",
    lastUpdated: "August 2026",
    priceStatus: "Vorläufige Preisempfehlung. Verbindliche Preise erhalten Sie im schriftlichen Angebot nach dem Erstgespräch."
  },

  /* ---------- Kontakt (Platzhalter) ---------- */
  contact: {
    email: "kontakt@gartenberatung.example",
    phoneLabel: "Telefon auf Anfrage",
    region: "Beratung vor Ort in der Region Plau am See und Umgebung (Umkreis ca. 30 km). Darüber hinaus nach Absprache."
  },

  /* ---------- Hero / Einstieg ---------- */
  hero: {
    eyebrow: "Gartenberatung",
    title: "Gärten, in denen Pflanzen, Tiere und Alltag zusammenpassen.",
    lead: "Ich berate Sie bei der Gestaltung und Pflege Ihres Gartens – mit Blick auf Ihre Heimtiere, auf Wildtiere wie Insekten und Vögel und auf das, was im Alltag wirklich funktioniert.",
    primaryCta: { label: "Kostenloses Erstgespräch anfragen", target: "kontakt" },
    secondaryCta: { label: "Pakete ansehen", target: "pakete" }
  },

  /* ---------- Zielgruppe ---------- */
  about: {
    title: "Für wen ist die Beratung gedacht?",
    paragraphs: [
      "Sie haben einen Hausgarten, einen kleinen Innenhof oder einen neu übernommenen Bestandsgarten und möchten ihn sinnvoll nutzen – mit Heimtieren, mit Kindern oder als naturnahen Rückzugsort.",
      "Sie suchen keine generischen Garten-Ratschläge, sondern eine konkrete Empfehlung, die zu Ihrem Standort, Ihrem Boden und Ihren Tieren passt.",
      "Sie wollen einen nächsten Schritt gehen, ohne gleich einen kompletten Umbau zu planen – etwa einen Bereich umgestalten, eine Ecke umdenken oder eine Pflanzung sinnvoll ergänzen."
    ],
    notFor: [
      "Großflächige landwirtschaftliche Planung oder gewerbliche Projekte.",
      "Akute Pflanzenschutz- oder Schädlingsdiagnosen (dafür wenden Sie sich bitte an die zuständige Beratungsstelle)."
    ]
  },

  /* ---------- Pauschalpakete ---------- */
  packages: [
    {
      id: "garten-check",
      name: "Garten-Check",
      price: "180",
      unit: "Pauschalpreis",
      short: "Vor-Ort-Termin mit Bestandsaufnahme und kurzer schriftlicher Empfehlung.",
      includes: [
        "Ein Vor-Ort-Termin bis ca. 60 Minuten.",
        "Bestandsaufnahme: Fläche, Boden, Lichtverhältnisse, Bestand, Tierbestand.",
        "Schriftliche Empfehlung als PDF (1–2 Seiten).",
        "Eine Nachfragen-Runde per E-Mail."
      ],
      target: "Empfohlen, wenn Sie herausfinden wollen, wo Sie anfangen sollen."
    },
    {
      id: "gartenkonzept-kompakt",
      name: "Gartenkonzept kompakt",
      price: "450",
      unit: "Pauschalpreis",
      short: "Konzept für einen Gartenbereich mit Pflanzplan und Begleit-PDF.",
      includes: [
        "Zwei Vor-Ort-Termine (Bestandsaufnahme und Besprechung).",
        "Pflanzplan mit Skizze für einen ausgewählten Bereich.",
        "Pflanzenliste mit Bezugsmöglichkeiten in der Region.",
        "Begleit-PDF mit Pflegehinweisen und Jahresplan.",
        "Eine Nachfragen-Runde per E-Mail."
      ],
      target: "Empfohlen, wenn Sie einen Bereich neu anlegen oder umgestalten möchten."
    },
    {
      id: "lebensraum-beratung",
      name: "Lebensraum-Beratung",
      price: "290",
      unit: "Pauschalpreis",
      short: "Analyse der Lebensraumqualität Ihres Gartens für Wildtiere.",
      includes: [
        "Ein Vor-Ort-Termin bis ca. 90 Minuten.",
        "Analyse: Strukturen, Nahrungsangebot, Gefahrenstellen für Wildtiere.",
        "Schwerpunkte: Wildbienen, Vögel, Igel, Amphibien – soweit vor Ort relevant.",
        "Maßnahmenliste als PDF mit priorisierten Empfehlungen.",
        "Eine Nachfragen-Runde per E-Mail."
      ],
      target: "Empfohlen, wenn Sie Ihren Garten ökologisch aufwerten möchten."
    },
    {
      id: "jahresbegleitung",
      name: "Jahresbegleitung",
      price: "690",
      unit: "Pauschalpreis",
      short: "Vier Beratungstermine im Jahreslauf mit saisonaler Anpassung.",
      includes: [
        "Vier Beratungstermine (Frühling, Sommer, Herbst, Winter).",
        "Saisonale Empfehlungen für Pflege und Pflanzung.",
        "Telefonische Rückfragen bis 30 Minuten pro Quartal inklusive.",
        "Pflege- und Pflanzpläne je Saison als PDF.",
        "Schriftliche Nachfragen per E-Mail im Umfang von 10 Fragen pro Jahr."
      ],
      target: "Empfohlen, wenn Sie Wert auf eine langfristige Begleitung legen."
    }
  ],

  /* ---------- Optionale Zusatzleistungen ---------- */
  addons: [
    {
      id: "bodenanalyse",
      name: "Boden-Schnelltest",
      price: "80",
      unit: "Pauschalpreis",
      description: "pH-Wert und Bodenstruktur, Empfehlung zur Bodenverbesserung. Inklusive Probennahme vor Ort."
    },
    {
      id: "pflanzenauswahl-plus",
      name: "Pflanzenauswahl erweitern",
      price: "60",
      unit: "Pauschalpreis",
      description: "Zusätzlicher Gartenbereich zum Pflanzplan, inklusive Skizze und Pflanzenliste."
    },
    {
      id: "vor-ort-zusatz",
      name: "Zusätzlicher Vor-Ort-Termin",
      price: "120",
      unit: "Pauschalpreis",
      description: "60 Minuten vor Ort, etwa zur Begleitung einer Pflanzaktion oder für eine Nachschau."
    },
    {
      id: "telefonberatung",
      name: "Telefonberatung",
      price: "55",
      unit: "Pauschalpreis",
      description: "30 Minuten am Stück für Einzelfragen außerhalb der gebuchten Termine."
    },
    {
      id: "fragenkatalog",
      name: "Schriftlicher Fragenkatalog",
      price: "45",
      unit: "Pauschalpreis",
      description: "Fünf Einzelfragen werden schriftlich per E-Mail beantwortet."
    },
    {
      id: "pflanzaktion",
      name: "Begleitung Pflanzaktion",
      price: "90",
      unit: "Pauschalpreis",
      description: "90 Minuten vor Ort: gemeinsame Pflanzung mit Anleitung und Sortierung."
    }
  ],

  /* ---------- Ablauf ---------- */
  process: [
    {
      step: "1",
      title: "Erstgespräch",
      description: "Telefonisch oder online, rund 15 Minuten. Wir klären Ihren Anlass, die Größe Ihres Gartens und Ihren Tierbestand."
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
      title: "Termin vor Ort oder online",
      description: "Die Beratung findet vor Ort oder nach Absprache online statt. Bei Vor-Ort-Terminen gilt der beschriebene Umkreis."
    },
    {
      step: "5",
      title: "Empfehlungen als PDF",
      description: "Sie erhalten im Anschluss ein Begleit-PDF mit Empfehlungen, Pflanzliste und Pflegehinweisen."
    },
    {
      step: "6",
      title: "Nachfragen",
      description: "Eine Nachfragen-Runde per E-Mail ist im Paket enthalten. Weitere Fragen können als Zusatzleistung gebucht werden."
    }
  ],

  /* ---------- Wichtige Hinweise / Gut zu wissen ---------- */
  notes: {
    title: "Gut zu wissen",
    lead: "Vier Punkte, die Sie vor der Anfrage einordnen sollten. Ohne Kleingedrucktes, ohne Marketing-Sprache.",
    items: [
      {
        id: "anfahrt",
        heading: "Anfahrt und Region",
        body: "Vor-Ort-Termine sind im Pauschalpreis enthalten, wenn Ihr Garten im Umkreis von rund 30 Kilometern um Plau am See liegt. Darüber hinaus berechne ich die Anfahrt mit 0,40 EUR pro zusätzlichem Kilometer einfache Strecke. Bei reinen Online-Beratungen fällt keine Anfahrt an."
      },
      {
        id: "saison",
        heading: "Saison und Termine",
        body: "Beratungen sind ganzjährig möglich. Pflanzplan und Vor-Ort-Termine empfehlen sich zwischen März und Oktober. In den Wintermonaten liegen die Schwerpunkte eher auf Bestandsaufnahme, Pflegeplanung und Vorbereitung der Frühjahrssaison. Anfragen nehme ich das ganze Jahr über an."
      },
      {
        id: "storno",
        heading: "Stornierung und Ausfall",
        body: "Bis 48 Stunden vor dem Termin können Sie kostenfrei absagen oder verschieben. Bei späterer Absage berechne ich 50 Prozent der Pauschale. Bei Absage am Tag des Termins oder Nichterscheinen wird die volle Pauschale fällig, sofern kein triftiger Grund vorliegt. Witterungsbedingte Verschiebungen bleiben für beide Seiten kostenfrei."
      },
      {
        id: "daten",
        heading: "Daten und Vertraulichkeit",
        body: "Alle Angaben zu Ihrem Garten, Ihren Tieren und Ihrem Haushalt behandle ich vertraulich. Ich gebe keine Daten an Dritte weiter. Fotos und Pläne werden ausschließlich für die Beratung genutzt. Auf Wunsch lösche ich alle Unterlagen nach Abschluss der Beratung."
      }
    ]
  },

  /* ---------- FAQ ---------- */
  faq: {
    title: "Häufige Fragen",
    lead: "Was Klientinnen und Klienten vor der Anfrage am häufigsten wissen wollen – knapp und ehrlich beantwortet.",
    items: [
      {
        id: "preis-verbindlich",
        question: "Sind die Preise auf der Seite verbindlich?",
        answer: "Nein. Die genannten Preise sind eine vorläufige Preisempfehlung. Verbindlich wird der Preis erst durch das schriftliche Angebot nach dem Erstgespräch und durch Ihre Bestätigung. So vermeiden wir, dass Sie am Ende mehr zahlen als Sie erwartet haben."
      },
      {
        id: "heimtiere",
        question: "Berücksichtigen Sie auch meine Heimtiere – Hund, Katze, Kaninchen?",
        answer: "Ja, soweit es für die Gartenplanung relevant ist: giftige Pflanzen, Ausbruchsicherungen, rutschfeste Beläge, Rückzugsbereiche, Sichtschutz. Welche Tiere bei Ihnen leben, frage ich im Erstgespräch ab. Für artgerechte Haltungsfragen, Erziehung oder Gesundheit bin ich nicht die richtige Ansprechpartnerin – dafür verweise ich auf erfahrene Stellen."
      },
      {
        id: "wildtiere",
        question: "Und was ist mit Wildtieren im Garten – Igel, Vögel, Insekten?",
        answer: "Genau das ist der zweite Schwerpunkt der Beratung. Ich schaue mir vorhandene Strukturen an – Hecken, Totholz, Wasserstellen, Nistkästen, Lichtquellen – und gebe Empfehlungen, wo Sie mit wenig Aufwand Lebensraum aufwerten können. Wenn Sie ein bestimmtes Tier in Ihren Garten locken möchten, sage ich Ihnen auch, ob das realistisch ist und was es dafür braucht."
      },
      {
        id: "online-vor-ort",
        question: "Muss der Termin vor Ort stattfinden?",
        answer: "Nein. Für einen Garten-Check oder eine Lebensraum-Beratung geht es nicht ohne Vor-Ort-Termin, weil ich Ihren Garten sehen muss. Für Folgegespräche, Pflegeplanung oder eine reine Konzeptbesprechung reicht eine Online-Beratung per Video. Das steht jeweils im Angebot."
      },
      {
        id: "bezahlung",
        question: "Wie wird abgerechnet?",
        answer: "Als Pauschale, die nach Abschluss des jeweiligen Pakets fällig wird. Bei der Jahresbegleitung teile ich die Pauschale auf zwei Raten (Frühjahr und Herbst). Sie erhalten eine ordentliche Rechnung als PDF mit allen Pflichtangaben nach § 14 UStG. Zahlung per Überweisung."
      },
      {
        id: "was-nicht",
        question: "Was kann die Beratung nicht leisten?",
        answer: "Ich ersetze keine Bodenanalyse im Labor, keine Pflanzendiagnose bei Krankheiten, keine Baugenehmigungen und keine Rechtsberatung zu Nachbarschaftsrecht. Ich plane keine Großflächen oder gewerblichen Anlagen. Bei akuten Problemen mit Pflanzen oder Schädlingen verweise ich auf die zuständigen Beratungsstellen."
      },
      {
        id: "warum-tierperspektive",
        question: "Warum heißt das Angebot „mit Tier- und Lebensraumperspektive"?",
        answer: "Weil ein Garten mehr ist als eine Pflanzfläche. Er ist Lebensraum für Ihre Heimtiere, für Wildtiere und für Sie selbst. Diese Perspektiven lassen sich meist gut verbinden – etwa wenn eine Hecke gleichzeitig Sichtschutz, Igelweg und Kinderversteck ist. Ich schaue gezielt, wo das bei Ihnen möglich ist."
      }
    ]
  },

  /* ---------- Kontaktsektion ---------- */
  contactSection: {
    title: "Kontakt und Buchung",
    lead: "Der erste Schritt ist immer ein kostenloses Erstgespräch. Danach entscheiden Sie in Ruhe, ob Sie ein Angebot möchten.",
    intro: "Schreiben Sie mir kurz, was Ihr Anliegen ist. Ich melde mich innerhalb von zwei Werktagen mit Terminvorschlägen für ein telefonisches Erstgespräch zurück.",
    channels: [
      {
        kind: "email",
        label: "E-Mail",
        value: "kontakt@gartenberatung.example",
        note: "Bevorzugter Kontaktweg. Anhänge wie Fotos oder Luftbilder sind willkommen."
      },
      {
        kind: "phone",
        label: "Telefon",
        value: "Telefon auf Anfrage",
        note: "Bitte per E-Mail um Rückruf bitten – ich rufe zeitnah zurück."
      },
      {
        kind: "region",
        label: "Region",
        value: "Plau am See und Umgebung (ca. 30 km)",
        note: "Online-Beratungen deutschlandweit möglich."
      }
    ]
  },

  /* ---------- Call-to-Action / Nächster Schritt ---------- */
  cta: {
    title: "Nächster Schritt: kostenloses Erstgespräch",
    lead: "Im Erstgespräch schildern Sie kurz Anlass, Gartengröße und Tierbestand. Ich sage Ihnen, welches Paket passt – und Sie entscheiden in Ruhe.",
    primary: {
      label: "Erstgespräch per E-Mail anfragen",
      mailtoSubject: "Erstgespräch Gartenberatung",
      mailtoBody: "Hallo,%0A%0Aich möchte ein kostenloses Erstgespräch zur Gartenberatung vereinbaren.%0A%0AKurz zu meinem Anliegen:%0A-%20Gartengröße:%0A-%20Heimtiere:%0A-%20Worum geht es mir:%0A%0AViele Grüße"
    },
    secondary: {
      label: "Pakete noch einmal ansehen",
      target: "pakete"
    },
    notes: [
      "Das Erstgespräch ist unverbindlich und kostenlos.",
      "Preise verstehen sich als Pauschale und gelten vorbehaltlich einer fachlichen Preisprüfung sowie Ihrer Bestätigung im schriftlichen Angebot.",
      "Beratungstermine vor Ort im Umkreis von ca. 30 km; darüber hinaus nach Absprache."
    ]
  }
};
