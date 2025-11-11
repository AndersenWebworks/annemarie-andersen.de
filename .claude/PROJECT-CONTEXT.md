# Project Context für Claude-Instanzen

**Projekt:** AI-native Website Template v1.0
**Zweck:** Demo-Template für AI-lesbare Web-Architektur
**Status:** ✅ Production-ready, vollständig depersonalisiert
**Live URL:** https://andersenwebworks.github.io/annemarie-andersen.de/
**Repository:** https://github.com/AndersenWebworks/annemarie-andersen.de

---

## Was ist dieses Projekt?

**Ein vollständig generisches Demo-Template** für AI-native Websites, das zeigt wie man Websites sowohl für Menschen als auch für AI-Agenten optimiert.

**WICHTIG:** Dies ist KEIN persönliches Profil, sondern ein **Blank-Slate Template** mit Platzhalter-Inhalten.

**Kernprinzip:** "Dual-Layer Architecture - HTML für Menschen, JSON für Maschinen"

---

## Aktueller Status (Stand: 11. Januar 2025)

### ✅ Vollständig depersonalisiert
- Alle persönlichen Referenzen entfernt (jan-erik-andersen, andersen-webworks)
- Alle spezifischen Philosophien entfernt (Google Zero, Structure as Integrity, Human Fallback UI)
- Alle personalisierten Favicons entfernt
- Nur generische Platzhalter-Inhalte ("Annemarie Andersen" als Demo-Name)

### ✅ Template-Features vollständig erhalten
- JSON-LD strukturierte Daten
- Schema.org Person, Service, FAQPage Schemas
- Plain-text .txt Mirrors für LLM-Tools
- Dual-Layer-Architektur
- Zero JavaScript, Framework-frei
- WCAG 2.1 konform
- DE/EN Mehrsprachigkeit

---

## Projekt-Struktur

```
annemarie-andersen.de/
├── index.html                  # Homepage (DE) - generisch
├── en/index.html              # Homepage (EN) - generisch
├── faq.html + faq.json        # Template-FAQs
├── ai/                        # Strukturierte Daten (JSON + TXT)
│   ├── manifest.jsonld        # Person Schema (Platzhalter)
│   ├── identity.json + .txt   # Generische Brand Identity
│   ├── profile.json + .txt    # Generisches Profil
│   ├── services.json + .txt   # Beispiel-Services
│   ├── portfolio.json + .txt  # Demo-Projekte (fiktiv)
│   ├── index.json + .txt      # DataCatalog
│   └── health.json + .txt     # Health Check
├── impressum.html             # Impressum mit Platzhaltern
├── datenschutz.html           # Datenschutz mit Platzhaltern
├── barrierefreiheit.html      # Accessibility Statement
├── robots.txt                 # Crawler-Instruktionen
├── sitemap.xml                # Sitemap (bereinigt)
├── llms.txt                   # LLM-Instruktionsdatei
├── README.md                  # Template-Dokumentation
└── kindle-optimized.css       # Minimal CSS
```

---

## Wichtigste Dateien (ZUERST LESEN)

1. **[README.md](../README.md)** — Template-Dokumentation
2. **[llms.txt](../llms.txt)** — LLM-Instruktionen für AI-Agents
3. **[GITHUB-PAGES-SETUP.md](../GITHUB-PAGES-SETUP.md)** — Deployment-Setup

---

## Deployment

**Hosting:** GitHub Pages
**URL:** https://andersenwebworks.github.io/annemarie-andersen.de/
**Domain (geplant):** annemarie-andersen.de
**Deployment:** Automatisch via `git push`

```bash
# Workflow
git add -A
git commit -m "Description"
git push origin main

# → GitHub Pages baut automatisch
# → Live nach 1-2 Minuten
```

---

## Template-Anpassung für Endnutzer

### Schritt 1: Platzhalter ersetzen

Suche und ersetze in allen Dateien:
- `Annemarie Andersen` → Eigener Name
- `annemarie-andersen.de` → Eigene Domain
- `mail@annemarie-andersen.de` → Eigene E-Mail
- `[Adresse]` / `[PLZ Ort]` → Echte Adresse (Impressum)

### Schritt 2: Inhalte anpassen

- `index.html` + `en/index.html` — Homepage-Inhalte
- `ai/identity.json` — Brand Identity
- `ai/services.json` — Eigene Services
- `ai/portfolio.json` — Eigene Projekte (oder löschen)
- `llms.txt` — LLM-Instruktionen anpassen

### Schritt 3: Optional

- Eigene Favicons hinzufügen
- Datenschutz/Impressum vervollständigen
- CSS anpassen

---

## Technische Features

### Dual-Layer-Architektur

**Layer 1: HTML für Menschen**
- Semantisches HTML5
- Inline CSS, Dark/Light Mode
- Responsives Design
- Keine externen Dependencies

**Layer 2: JSON für Maschinen**
- JSON-LD im HTML `<head>` für SEO/Google
- Plain-text `.txt` Mirrors für LLM-Tools (ChatGPT, Claude)
- DataCatalog in `/ai/index.json`

### Warum .txt Mirrors?

LLM-Tools können nur `text/plain` und `text/html` lesen. `application/json` führt zu Error 400.

**Lösung:**
- `/ai/identity.json` → Für APIs und SEO
- `/ai/identity.txt` → Für ChatGPT/Claude

---

## Häufige Aufgaben

### Content-Update

```bash
# 1. Datei ändern
vim ai/services.json

# 2. Commit & Push
git add ai/services.json
git commit -m "Update services"
git push origin main

# 3. Warte 1-2 Min → Live
```

### AI-Agent testen

```
"Lies https://andersenwebworks.github.io/annemarie-andersen.de/ai/services.txt und nenne alle Services"
```

### Validierung

**HTML/CSS:**
- https://validator.w3.org/

**Schema.org:**
- https://validator.schema.org/

**Performance:**
```bash
npx lighthouse https://andersenwebworks.github.io/annemarie-andersen.de/
```

---

## Wichtige Änderungen (Changelog)

### v1.0 (11. Januar 2025)
**Vollständige Depersonalisierung:**
- ❌ Alle persönlichen Daten entfernt
- ❌ Alle spezifischen Philosophien entfernt (Google Zero, etc.)
- ❌ Alle Favicons entfernt
- ❌ Blog-Verzeichnis gelöscht
- ❌ Content-Verzeichnis gelöscht
- ❌ Verify-Verzeichnis gelöscht
- ✅ Alle AI-Dateien generisch
- ✅ FAQ mit Template-Fragen
- ✅ Services als Beispiele
- ✅ Sprach-Switcher (DE/EN) funktioniert
- ✅ Sitemap bereinigt
- ✅ robots.txt bereinigt
- ✅ llms.txt als Template

### Migration von jan-erik-andersen.de
Das Template basiert auf der Transformation der persönlichen Website jan-erik-andersen.de zu einem generischen Demo-Template.

**Entfernt:**
- Alle persönlichen Services (AI Visibility Refactor, etc.)
- Philosophie-Konzepte (Structure as Integrity, Post-Browser-Ära)
- Blog-Artikel über Google Zero
- Persönliche Portfolio-Projekte
- Social Media Links (LinkedIn, GitHub)
- Spezifische Kontaktdaten

**Erhalten:**
- Komplette AI-native Infrastruktur
- Technische Best Practices
- Dual-Layer-Architektur
- Alle strukturierten Daten-Formate

---

## Für neue Claude-Instanzen

**Wenn User sagt "arbeite am annemarie-andersen.de Projekt":**

1. ✅ Verstehe: Dies ist ein **Demo-Template**, kein persönliches Profil
2. ✅ Lies [README.md](../README.md) für Template-Dokumentation
3. ✅ Verstehe: Alle Inhalte sind **Platzhalter**
4. ✅ Verstehe: GitHub Pages = Deployment
5. ✅ Check `git status` / `git log` für neueste Änderungen
6. ✅ **WICHTIG:** DE + EN müssen IMMER synchron sein!

**Wichtigste Regeln:**

> Strukturierte Daten (JSON/TXT) sind PRIMARY.
> HTML ist SECONDARY (für Menschen).
> AI-Agents lesen TXT/JSON, nicht HTML.

> ALLE Änderungen an DE-Inhalten müssen auch in EN gemacht werden!
> index.html UND en/index.html IMMER im gleichen Commit!

**Deployment:**
```bash
git add -A
git commit -m "Description"
git push origin main
# → Automatisch live nach 1-2 Min
```

---

## Technologie-Stack

**Hosting:** GitHub Pages
**HTTPS:** Automatisch via GitHub
**CDN:** GitHub Global CDN
**Deployment:** `git push origin main`

**Keine Dependencies:**
- ❌ Kein JavaScript (0 Bytes)
- ❌ Kein CSS-Framework
- ❌ Kein Build-Prozess
- ❌ Kein Node.js (nur für Favicon-Generierung optional)
- ✅ Nur statische HTML/JSON/TXT/MD

**Vorteile:**
- Extrem schnell
- Funktioniert überall
- Kein Maintenance
- Kostenlos

---

## Wichtige Links

**Live Site:** https://andersenwebworks.github.io/annemarie-andersen.de/
**GitHub Repo:** https://github.com/AndersenWebworks/annemarie-andersen.de

**Tests:**
- Rich Results: https://search.google.com/test/rich-results
- Schema Validator: https://validator.schema.org/
- HTML Validator: https://validator.w3.org/

---

## Troubleshooting

### "Sprach-Switcher funktioniert nicht"

**Ursache:** Absolute Pfade statt relative

**Lösung:** Links müssen relativ sein:
- DE → EN: `en/` (nicht `/en/`)
- EN → DE: `../` (nicht `/`)

### "ChatGPT kann Dateien nicht lesen"

**Ursache:** LLM-Tools können nur `text/plain` lesen

**Lösung:** Immer `.txt` Dateien bereitstellen:
- `/ai/identity.json` → Für APIs
- `/ai/identity.txt` → Für ChatGPT/Claude

### "Änderungen nicht live"

**Check:**
1. GitHub Pages aktiviert? (Settings → Pages)
2. Pushed zu main? (`git log origin/main`)
3. Deployment erfolgreich? (Actions Tab)
4. Cache geleert? (Ctrl+F5)

---

## Version History

**v1.0** (11. Jan 2025)
- Vollständig depersonalisiertes Template
- Production-ready
- Alle Features dokumentiert

**Status:** ✅ Production-ready, bereit für Anpassung

---

**Projekt-Typ:** Open-Source Demo-Template
**Zuletzt aktualisiert:** 11. Januar 2025
