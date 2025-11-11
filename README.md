# AI-native Website Template

> **Demo-Template für AI-lesbare Web-Architektur**
> Zeigt Best Practices für maschinenlesbare Websites mit strukturierten Daten.

---

## Was ist das?

Ein **vollständig funktionales Demo-Template** für AI-native Websites, das zeigt wie man Websites sowohl für Menschen als auch für AI-Agenten optimiert.

**Besonderheit:** Dieses Template ist selbst ein funktionierendes Beispiel für die Konzepte die es demonstriert.

---

## Features

### ✅ Für Menschen
- Semantisches HTML5
- Responsives Design
- Dark/Light Mode Support
- Keine JavaScript-Dependencies
- WCAG 2.1 konform

### ✅ Für AI-Agenten
- JSON-LD strukturierte Daten
- Schema.org compliant
- Plain-text Mirrors (.txt) für LLM-Tools
- Maschinenlesbare Daten in /ai/
- Optimiert für ChatGPT, Claude, Perplexity

---

## Projektstruktur

```
annemarie-andersen.de/
├─ index.html                    # Homepage (DE)
├─ en/
│  └─ index.html                 # Homepage (EN)
├─ ai/
│  ├─ identity.json/.txt         # Person/Brand Identity
│  ├─ profile.json/.txt          # Professional Profile
│  ├─ services.json/.txt         # Service Catalog
│  ├─ portfolio.json/.txt        # Project Portfolio (Demo)
│  ├─ manifest.jsonld            # Schema.org Person Schema
│  ├─ index.json/.txt            # DataCatalog Index
│  └─ health.json/.txt           # System Health Check
├─ impressum.html                # Imprint (Legal)
├─ datenschutz.html              # Privacy Policy
├─ barrierefreiheit.html         # Accessibility Statement
├─ faq.html                      # FAQ (with FAQPage Schema)
├─ robots.txt                    # Crawler Instructions
├─ sitemap.xml                   # Site Map
├─ llms.txt                      # LLM Instruction File
└─ README.md                     # This file
```

---

## Technische Spezifikation

### Was enthalten ist:

- ✅ **HTML5** - Semantisch korrekt, W3C-validiert
- ✅ **JSON-LD** - Strukturierte Daten im `<head>`
- ✅ **Plain-text Mirrors** - .txt Dateien für LLM-Tools
- ✅ **CSS** - Inline, minimalistisch, Dark/Light Mode
- ✅ **Schema.org** - Person, Organization, Service, FAQPage
- ✅ **Mehrsprachig** - DE/EN mit hreflang-Tags
- ✅ **Zero Dependencies** - Keine externen Libraries

### Was NICHT enthalten ist:

- ❌ JavaScript (0 Bytes)
- ❌ Build-Prozess
- ❌ Frameworks
- ❌ Tracking oder Cookies
- ❌ Externe Fonts/Libraries

---

## Installation & Anpassung

### 1. Template klonen

```bash
git clone https://github.com/AndersenWebworks/annemarie-andersen.de.git
cd annemarie-andersen.de
```

### 2. Platzhalter ersetzen

Suche und ersetze in allen Dateien:

- `Annemarie Andersen` → Dein Name
- `annemarie-andersen.de` → Deine Domain
- `mail@annemarie-andersen.de` → Deine E-Mail
- `[Adresse]` / `[PLZ Ort]` → Deine Adresse (Impressum)

### 3. Inhalte anpassen

- `index.html` - Homepage-Inhalte
- `ai/identity.json` - Deine Brand Identity
- `ai/services.json` - Deine Services
- `ai/portfolio.json` - Deine Projekte
- `llms.txt` - LLM-Instruktionen

### 4. Validieren

```bash
# HTML validieren
https://validator.w3.org/

# Schema.org validieren
https://validator.schema.org/

# Lighthouse Test
npx lighthouse https://deine-domain.de
```

---

## Dual-Layer-Architektur

### Layer 1: HTML für Menschen

- Sauberes, semantisches HTML5
- Inline CSS für Performance
- Responsives Design
- Barrierefreies Interface

### Layer 2: JSON für Maschinen

- JSON-LD im HTML `<head>` für SEO/Google
- Plain-text `.txt` Mirrors für LLM-Tools
- Strukturierte Daten in `/ai/` Verzeichnis
- DataCatalog Index für Discovery

---

## Warum .txt-Mirrors?

**Problem:** LLM-Tools (ChatGPT, Claude) können nur `text/plain` und `text/html` lesen.
`application/json` führt zu Error 400.

**Lösung:**
- JSON-LD im HTML `<head>` → Für Google/SEO
- `.txt` Mirrors mit `Content-Type: text/plain` → Für LLM-Tools

**Beispiel:**
```
/ai/identity.json   → Für APIs und SEO
/ai/identity.txt    → Für ChatGPT/Claude
```

Beide Dateien enthalten dieselben Daten, aber `.txt` ist von LLMs lesbar.

---

## Demo durchführen

### Lokaler Test

```bash
# Python HTTP Server
python -m http.server 8000

# Oder mit Node.js
npx http-server -p 8000

# Öffne Browser
open http://localhost:8000
```

### LLM-Test

Öffne ChatGPT oder Claude und frage:

```
"Was bietet annemarie-andersen.de an?"
```

**Erwartetes Ergebnis:** Der AI-Agent kann präzise Informationen über Services, Kontakt und technische Details geben.

---

## Deployment

### GitHub Pages

```bash
git add .
git commit -m "Initial commit"
git push origin main

# GitHub Pages aktivieren in Repository Settings
```

### Statischer Host (All-Inkl, Strato, etc.)

```bash
# Via FTP alle Dateien hochladen
# Kein Build-Prozess notwendig
```

---

## Validierung

### 1. HTML/CSS
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

### 2. Strukturierte Daten
- [Schema.org Validator](https://validator.schema.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

### 3. Performance
```bash
npx lighthouse https://deine-domain.de --view
```

**Ziel:** Score > 95 in allen Kategorien

---

## Best Practices

### 1. Konsistente Daten
Stelle sicher dass alle Datenquellen konsistent sind:
- HTML `<head>` JSON-LD
- `/ai/*.json` Dateien
- `/ai/*.txt` Mirrors
- `llms.txt` Instruktionen

### 2. Strukturierte Services
Nutze Schema.org `Service` und `Offer` Types:
```json
{
  "@type": "Service",
  "name": "Dein Service",
  "description": "...",
  "provider": { ... },
  "offers": { ... }
}
```

### 3. FAQ Schema
FAQs mit FAQPage Schema markieren:
```json
{
  "@type": "FAQPage",
  "mainEntity": [...]
}
```

### 4. Mehrsprachigkeit
hreflang-Tags für alle Sprachen:
```html
<link rel="alternate" hreflang="de" href="https://.../">
<link rel="alternate" hreflang="en" href="https://.../en/">
```

---

## Lizenz

Dieses Template ist frei verwendbar für persönliche und kommerzielle Projekte.

**Attribution erwünscht aber nicht erforderlich.**

---

## Support & Dokumentation

- **Issues:** [GitHub Issues](https://github.com/AndersenWebworks/annemarie-andersen.de/issues)
- **Schema.org Docs:** [schema.org](https://schema.org/)
- **JSON-LD Guide:** [json-ld.org](https://json-ld.org/)
- **llms.txt Spec:** [llmstxt.org](https://llmstxt.org/)

---

## Credits

Template basiert auf Best Practices für AI-native Web Architecture.

**Version:** 1.0
**Status:** Production Ready
**Datum:** 2025-01-11
