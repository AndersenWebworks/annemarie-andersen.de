# Annemarie Andersen – AI-Native Website Demo

Dies ist ein **Demo-Template** mit AI-nativer Architektur. Es zeigt die technische Struktur einer Website, die gleichzeitig für **Menschen** und **Maschinen** (AI-Agenten) optimiert ist.

## Was ist das?

Ein funktionsfähiges Website-Template mit:

- ✅ **3 Sprachen**: Deutsch, English, Leichte Sprache
- ✅ **Strukturierte Daten**: JSON-LD im HTML + separate JSON/TXT-Dateien
- ✅ **GitHub Pages**: Automatisches Deployment
- ✅ **Framework-frei**: Kein React/Vue/Next.js
- ✅ **JavaScript-frei**: 0 Bytes JS
- ✅ **Maschinenlesbar**: AI-Agenten können die Website direkt konsumieren

## Schnellstart

### 1. Repository klonen

```bash
git clone https://github.com/AndersenWebworks/llm.annemarie-andersen.de.git
cd llm.annemarie-andersen.de
```

### 2. Inhalte anpassen

Alle Dateien mit `DEMO:` im Text enthalten Platzhalter. Ersetze sie mit deinen eigenen Inhalten:

#### HTML-Seiten
- `index.html` - Hauptseite (DE)
- `en/index.html` - Hauptseite (EN)
- `leichte-sprache/index.html` - Hauptseite (Leichte Sprache)
- Impressum, Datenschutz, Barrierefreiheit in allen Sprachen

#### AI-Dateien (JSON)
- `ai/identity.json` - Deine Markenidentität, Werte, Expertise
- `ai/services.json` - Deine Services mit Preisen, Deliverables
- `ai/health.json` - Health-Check (optional anpassen)
- `ai/index.json` - DataCatalog (optional anpassen)

**Wichtig**: Die `.txt`-Mirrors werden automatisch von GitHub Actions generiert. Du musst nur die `.json`-Dateien bearbeiten!

### 3. Git initialisieren und pushen

```bash
git add -A
git commit -m "Initial commit: Annemarie Andersen Demo"
git push origin main
```

### 4. GitHub Pages aktivieren

Siehe `GITHUB-PAGES-SETUP.md` für Details.

## Architektur

### Dual-Format-System

Die Website nutzt ein **Dual-Format-System** für AI-Lesbarkeit:

- **JSON-Dateien** (`/ai/*.json`) - Für Google, SEO, Schema.org
- **TXT-Mirrors** (`/ai/*.txt`) - Für LLM-Tools (ChatGPT, Claude, Perplexity)

**Warum?** LLM-Tools können nur `text/plain` und `text/html` lesen, KEINE `application/json`. Daher die TXT-Mirrors.

Die TXT-Dateien werden **automatisch** von GitHub Actions generiert bei jedem Push auf `main`.

### Verzeichnisstruktur

```
llm.annemarie-andersen.de/
├── .github/workflows/
│   └── ai-readable-mirrors.yml   # Auto-generiert TXT-Mirrors
├── ai/
│   ├── identity.json + .txt      # Markenidentität
│   ├── services.json + .txt      # Service-Katalog
│   ├── health.json + .txt        # Health-Check
│   └── index.json + .txt         # DataCatalog
├── en/                           # Englische Version
│   ├── index.html
│   ├── imprint.html
│   ├── privacy.html
│   └── accessibility.html
├── leichte-sprache/              # Leichte Sprache
│   ├── index.html
│   ├── impressum.html
│   ├── datenschutz.html
│   └── barrierefreiheit.html
├── index.html                    # DE Homepage
├── impressum.html
├── datenschutz.html
├── barrierefreiheit.html
├── kindle-optimized.css          # Single CSS
├── favicon.svg
├── CNAME                         # Custom Domain
├── robots.txt                    # AI-optimiert
└── sitemap.xml                   # Komplett
```

## Technische Features

### HTML

- Semantisches HTML5
- JSON-LD strukturierte Daten (Schema.org Person)
- Hreflang-Tags für 3 Sprachen
- `<link rel="alternate">` zu AI-Dateien

### CSS

- Single CSS-Datei: `kindle-optimized.css`
- System Fonts (keine externen Fonts)
- Responsive (Mobile First)
- Dark Mode Support
- Terracotta Akzentfarbe (#b8503d)

### AI-Optimierungen

- **robots.txt**: Alle AI-Crawler erlaubt (GPTBot, Claude-Web, etc.)
- **JSON-LD**: Person, Organization, Services
- **Separate JSON/TXT**: Dual-Format für maximale Kompatibilität
- **DataCatalog**: Schema.org-konformes Verzeichnis aller AI-Endpoints

## Validierung

Teste die Website nach dem Deployment:

- **W3C Validator**: https://validator.w3.org/
- **Schema.org Validator**: https://validator.schema.org/
- **Lighthouse**: Performance, Accessibility, SEO
- **AI-Agent Test**: Frage ChatGPT/Claude nach deiner Website

## Support

Bei Fragen oder Problemen:

- GitHub Issues: https://github.com/AndersenWebworks/llm.annemarie-andersen.de/issues
- Original Template: https://github.com/AndersenWebworks/jan-erik-andersen.de

## Lizenz

DEMO: Hier deine Lizenz eintragen (z.B. MIT, CC-BY, etc.)

---

**DEMO-Hinweis**: Dieses Template enthält Platzhalter-Inhalte. Alle Texte mit `DEMO:` müssen durch eigene Inhalte ersetzt werden.
