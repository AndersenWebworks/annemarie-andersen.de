# andersen-signal v0.2

> **Jan-Erik Andersen — AI-native Web Architect**
> Professionelle Demo-Website, die zeigt, wie Unternehmen in der Post-Google-Ära sichtbar bleiben.

---

## Was ist das?

Eine **vollständig funktionale Demo-Website**, die zwei Zielgruppen perfekt bedient:

1. **Menschen** (Mittelständische Unternehmer) — Sehen eine überzeugende Landingpage mit klaren Nutzenversprechen
2. **Maschinen** (LLMs wie ChatGPT, Claude, Perplexity) — Bekommen strukturierte Daten für beeindruckende Antworten

**Das Besondere:** Die Website ist selbst ein Beweis für das Konzept.

---

## Das Problem, das wir lösen

**69% aller Google-Anfragen** enden heute ohne Klick (SparkToro 2024).
**50% weniger Website-Traffic** bis 2028 prognostiziert (Gartner).
**3 von 4 Wettbewerbern** wissen davon noch nichts.

**Konkret:**
Wenn ein Kunde ChatGPT fragt *"Finde mir einen Anbieter für X"*, erscheinen nur Unternehmen mit maschinenlesbaren Daten. Der Rest ist **unsichtbar**.

**Unsere Lösung:**
Websites mit strukturierten Daten ausstatten, die LLMs perfekt lesen können — ohne die menschliche Erfahrung zu ändern.

---

## Projektstruktur

```
jan-erik-andersen.de/
├─ index.html                    # Professionelle Landingpage (für Menschen)
├─ ai/
│  ├─ identity.txt               # Umfassende Person/Service-Daten (für LLMs)
│  ├─ services.txt               # Detaillierte Service-Beschreibungen
│  ├─ case-study.txt             # Mustermann GmbH Erfolgsgeschichte
│  └─ portfolio.txt              # Projekt-Portfolio
├─ content/
│  ├─ philosophy.md              # "Structure as Integrity"
│  ├─ 2030-web.md                # "Websites als Dateninterfaces"
│  ├─ about.md                   # Philosophisch-technische Beschreibung
│  └─ services.md                # Services in Prosa-Form
├─ verify/
│  ├─ proof-sequence.md          # Agent-Testanleitung
│  ├─ metrics.json               # Testergebnisse
│  └─ chatgpt-400-findings.md    # Dokumentation: Warum .txt-Mirrors nötig sind
├─ README.md                     # Diese Datei
├─ VISION.md                     # Projekt-Vision
└─ MARKETING.md                  # Akquise-Strategie

```

---

## Dual-Layer-Architektur

### Layer 1: **Für Menschen** (index.html)

- Direkte, selbstbewusste Sprache (keine Buzzwords)
- Schmerzpunkt → Lösung → Beweis
- Konkrete Zahlen: 69% Zero-Click, 50% Traffic-Rückgang
- Case Study: Mustermann GmbH (87.000 EUR in 2 Monaten)
- Klare CTAs: "Kostenlosen Test vereinbaren"
- Typografie: Minimalistisch, rot-schwarzes Farbschema
- Keine technischen Details für Nicht-Techniker

### Layer 2: **Für LLMs** (/ai/*.txt)

- **Content-Type: text/plain** (einziges Format, das LLM-Tools lesen können)
- Umfassende JSON-strukturierte Daten:
  - `identity.txt`: Person, Services, Philosophie, Case Studies, Kontakt
  - `case-study.txt`: Detaillierte Mustermann-GmbH-Story mit Metriken
  - `services.txt`: Alle Services mit Deliverables, Prozess, Pricing
  - `portfolio.txt`: Projekt-Portfolio mit Outcomes
- **Wow-Effekt:** LLMs können jede Frage präzise beantworten
- **Test:** Frage ChatGPT *"Was bietet Jan-Erik Andersen an?"* → Beeindruckende Antwort

---

## Warum .txt-Mirrors?

### Das Content-Type-Problem

**LLM-Tools** (ChatGPT, Claude, Perplexity, Gemini) können nur `text/plain` und `text/html` lesen.
`application/json`, `application/ld+json`, `text/markdown` → **Error 400**.

**Grund:** Nicht server-seitig (funktioniert auf All-Inkl UND GitHub Pages).
Sondern **LLM-Tool-Restriktion** (Sicherheits-Whitelist für MIME-Types).

**Lösung:**
- JSON-LD im HTML `<head>` → **Für Google/SEO**
- `.txt`-Mirrors mit `Content-Type: text/plain` → **Für LLM-Tools**

**Empirischer Beweis:**
ChatGPT kann `/ai/identity.txt` lesen, aber nicht `/ai/identity.json` (gleicher Inhalt).

---

## Technische Spezifikation

### Was drin ist:

- ✅ **HTML5**, semantisch korrekt
- ✅ **JSON-LD** im `<head>` (für Google)
- ✅ **Plain-text Mirrors** (.txt) für LLM-Tools
- ✅ **CSS** (inline, minimalistisch, dark/light mode)
- ✅ **Keine externen Dependencies**
- ✅ **Framework-frei, kein JavaScript**
- ✅ **W3C-validiert, Schema.org-compliant**

### Was NICHT drin ist:

- ❌ JavaScript
- ❌ Build-Prozess
- ❌ Frameworks (React, Vue, etc.)
- ❌ Tracking oder Cookies
- ❌ Externe Fonts oder Libraries

---

## Demo durchführen

### 1. Für Menschen (Browser-Test)

```bash
# Lokal testen
python -m http.server 8000

# Oder direkt öffnen
open http://localhost:8000
```

**Erwartung:** Professionelle Landingpage mit klaren Nutzenversprechen.

### 2. Für LLMs (ChatGPT-Test)

**Öffne ChatGPT und frage:**

```
"Was bietet Jan-Erik Andersen an? Nenne Services, Preise und Case Studies."
```

**Erwartetes Ergebnis:**

```
Jan-Erik Andersen bietet 4 Hauptservices:

1. AI Readiness Audit ("Der 5-Minuten-Schock")
   - Dauer: 3-5 Tage
   - Preis: Auf Anfrage
   - Deliverables: Live ChatGPT-Test, 1-seitige Analyse, Invisibility Score

2. AI Visibility Refactor ("Vom Unsichtbaren zum Unvermeidlichen")
   - Dauer: 2-4 Wochen
   - Preis: Auf Anfrage
   - Deliverables: JSON-LD, Semantic HTML5, .txt Mirrors, Validation

3. Conversational Brand Modeling
   - Dauer: 1-2 Wochen
   - Definition der Markenstimme für AI-Dialoge

4. Human Fallback UI
   - Dauer: 1-3 Wochen
   - Minimale, performance-optimierte Websites

**Case Study: Mustermann GmbH**
- Problem: Unsichtbar in AI-generierten Lieferantenlisten
- Lösung: 4 Wochen AI Visibility Refactor
- Ergebnis: 12 qualifizierte Leads, 87.000 EUR Umsatz in 2 Monaten

Kontakt: mail@jan-erik-andersen.de
```

**Das ist der Wow-Effekt.**

---

## Philosophie

### Structure as Integrity

Struktur ist nicht nur technisches Mittel, sondern Ausdruck von Verlässlichkeit.
Gut strukturierte Daten schaffen Vertrauen.

### Google Zero

Der Moment, in dem Suchmaschinen irrelevant werden.
AI-Agenten konsumieren Daten direkt aus strukturierten Quellen.
Wer dann keine semantische Signatur hat, ist **unsichtbar**.

### Human Fallback, nicht Human First

Die sichtbare Website ist nicht mehr der Kern.
Sie ist der Fallback für die 20%, die noch direkt besuchen.
**Das eigentliche Interface? Die strukturierten Daten.**

---

## Deployment

### Option 1: GitHub Pages

```bash
git push origin main
# GitHub Actions generiert automatisch .txt-Mirrors aus .json/.md
```

### Option 2: FTP (All-Inkl, Strato, etc.)

```bash
# Upload via FTP:
index.html
/ai/*.txt
/content/*.md
```

Kein Build-Prozess nötig. Die Dateien sind statisch.

---

## Validierung

### 1. HTML/CSS

```bash
# W3C Validator
https://validator.w3.org/

# Lighthouse
lighthouse https://jan-erik-andersen.de
```

**Ziel:** > 95 Score

### 2. Strukturierte Daten

```bash
# Schema.org Validator
https://validator.schema.org/

# JSON-LD Playground
https://json-ld.org/playground/
```

**Ziel:** Keine Fehler, keine Warnungen

### 3. LLM-Lesbarkeit

```bash
# ChatGPT Test
"Was bietet Jan-Erik Andersen an?"

# Claude Test
"Fasse die Services von Jan-Erik Andersen zusammen."

# Perplexity Test
"Welche Case Studies hat Jan-Erik Andersen?"
```

**Ziel:** Umfassende, präzise Antworten mit konkreten Daten

---

## Success Definition (MVP2)

✅ **Für Menschen:**
- Landingpage überzeugt Mittelständler ohne technisches Vorwissen
- Klare Schmerzpunkte, Lösungen, Beweise
- Direkte, selbstbewusste Sprache (wie andersen-webworks.de)
- CTA-Conversion-Rate messbar

✅ **Für LLMs:**
- ChatGPT, Claude, Perplexity, Gemini geben beeindruckende Antworten
- Alle Services, Case Studies, Kontaktdaten korrekt wiedergegeben
- Vergleich mit Wettbewerbern: Andersen hat mehr strukturierte Daten

✅ **Technisch:**
- W3C-validiert
- Schema.org-compliant
- Lighthouse > 95
- Funktioniert auf All-Inkl UND GitHub Pages

---

## Roadmap

### Phase 1: MVP2 (✅ Completed)

- [x] Professionelle Landingpage für Mittelständler
- [x] Umfassende LLM-Daten in /ai/*.txt
- [x] Case Study: Mustermann GmbH
- [x] Content-Type-Problem dokumentiert
- [x] Blog-Verzeichnis bereinigt

### Phase 2: Live-Deployment

- [ ] Deploy auf jan-erik-andersen.de
- [ ] GitHub Actions für .txt-Mirrors einrichten
- [ ] Monitoring für AI-Visibility
- [ ] A/B-Testing für CTAs

### Phase 3: Akquise

- [ ] LinkedIn-Kampagne starten
- [ ] Erste 10 kostenlose AI Readiness Audits
- [ ] Case Studies von echten Kunden
- [ ] Testimonials sammeln

---

## Kontakt

**Jan-Erik Andersen**
AI-native Web Architect

- Website: [jan-erik-andersen.de](https://jan-erik-andersen.de)
- E-Mail: mail@jan-erik-andersen.de
- GitHub: [github.com/jan-erik-andersen](https://github.com/jan-erik-andersen)
- LinkedIn: [linkedin.com/in/jan-erik-andersen](https://linkedin.com/in/jan-erik-andersen)

---

## Lizenz

Dieses Projekt ist ein Proof of Concept für AI-native Web Architecture.
Der Code ist frei verwendbar. Attribution erwünscht.

---

**Projekt:** andersen-signal v0.2
**Status:** MVP2 — Professional Demo
**Datum:** 2025-01-10
