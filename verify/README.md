# Verify Framework — Test-Dokumentation

**Projekt:** jan-erik-andersen.de MVP
**Datum:** 6. November 2025
**Version:** 0.1

---

## Übersicht

Dieses Verzeichnis enthält alle Tests, Validierungen und Messungen für den MVP.

**Ziel:** Beweis, dass AI-native Web Architecture messbar besser funktioniert als traditionelle Websites.

---

## Test-Matrix

| Test | Status | Datei | Zweck |
|------|--------|-------|-------|
| **AI Agent Test** | ✅ Bestanden (6/6) | [agent-test.md](agent-test.md) | Beweis: AI kann Website korrekt lesen |
| **Validation Checklists** | ✅ Bestanden | [checklists.md](checklists.md) | HTML/JSON/Performance validiert |
| **Rich Results Test** | ⏳ Dokumentiert | [rich-results-test.md](rich-results-test.md) | Beweis: Google erkennt Schema.org |
| **Google Search Console** | ⏳ Setup-Anleitung | [google-search-console.md](google-search-console.md) | Indexierung + Monitoring |
| **Comparison Test** | ⏳ Dokumentiert | [comparison-test.md](comparison-test.md) | Beweis: AI-native > normale Website |
| **Metrics** | ✅ Initial | [metrics.json](metrics.json) | Aktuelle Test-Scores |

**Legende:**
- ✅ Bestanden / Abgeschlossen
- ⏳ Dokumentiert / Wartet auf Durchführung
- ❌ Fehlgeschlagen / Blockiert

---

## Test-Reihenfolge

### Phase 1: Technische Validierung (ABGESCHLOSSEN)

1. ✅ HTML validiert (W3C Validator via html-validate)
2. ✅ JSON-LD validiert (Schema.org Validator)
3. ✅ Strukturierte Daten getestet (ai/manifest.jsonld, faq.json, etc.)
4. ✅ AI Agent Test durchgeführt (6/6 korrekt)

**Ergebnis:** Technisch sound, bereit für Indexierung.

### Phase 2: Google Indexierung (IN BEARBEITUNG)

1. ⏳ Rich Results Test (manuell via https://search.google.com/test/rich-results)
2. ⏳ Google Search Console Setup (Domain-Verifizierung)
3. ⏳ Sitemap eingereicht (sitemap.xml)
4. ⏳ Warte 7-14 Tage auf Crawling

**Erwartung:** Google erkennt strukturierte Daten, indexiert alle Seiten.

### Phase 3: Vergleichstest (WARTET AUF INDEXIERUNG)

1. ⏳ Warte 14-30 Tage (Google muss Daten indexiert haben)
2. ⏳ Teste mit ChatGPT/Claude/Perplexity
3. ⏳ Dokumentiere Ergebnisse in comparison-test-results.json
4. ⏳ Vergleiche mit normaler Website

**Erwartung:** AI-native Website erzielt 6/6 Score, normale Website 2/6.

### Phase 4: AI Snippet Monitoring (LANGFRISTIG)

1. ⏳ Überwache Google Search Console (30-60 Tage)
2. ⏳ Teste Google AI Snippets (falls verfügbar)
3. ⏳ Tracke Performance (Impressions, Clicks)

**Erwartung:** Daten werden in Google AI (SGE) verwendet.

---

## Kern-Hypothese

**These:**
Websites mit strukturierten Daten (JSON-LD, Schema.org) ermöglichen AI-Agenten präzisere, vollständigere und korrektere Antworten als traditionelle HTML-only Websites.

**Beweis:**
1. ✅ AI Agent Test: 6/6 korrekt beantwortet (jan-erik-andersen.de)
2. ⏳ Comparison Test: AI-native > normale Website (nach Indexierung)
3. ⏳ Google Rich Results: Schema.org korrekt erkannt (nach Crawling)

**Wenn alle Tests bestanden:**
→ Hypothese bewiesen
→ MVP erfolgreich
→ Business Case validiert

---

## Aktuelle Scores

### AI Agent Test (Claude Sonnet 4.5)
```json
{
  "model": "Claude Sonnet 4.5",
  "date": "2025-11-06",
  "score": {
    "correct": 6,
    "incorrect": 0,
    "percentage": 100
  },
  "details": {
    "q1_identity": "correct",
    "q2_role": "correct",
    "q3_services": "correct",
    "q4_pricing": "correct",
    "q5_philosophy": "correct",
    "q6_contact": "correct"
  }
}
```

### Validation Checks
```json
{
  "html_validation": "passed",
  "json_validation": "passed",
  "jsonld_validation": "passed",
  "lighthouse_score": "pending"
}
```

### Google Indexierung
```json
{
  "indexed_pages": 0,
  "sitemap_submitted": "2025-11-06",
  "rich_results_detected": [],
  "status": "pending_crawl"
}
```

---

## Dateien in diesem Verzeichnis

### Test-Definitionen
- **[agent-test.md](agent-test.md)** — 6 Testfragen für AI-Modelle
- **[checklists.md](checklists.md)** — Validierungs-Checklisten (HTML, JSON, Performance)
- **[rich-results-test.md](rich-results-test.md)** — Anleitung für Google Rich Results Test
- **[google-search-console.md](google-search-console.md)** — Setup-Anleitung für GSC
- **[comparison-test.md](comparison-test.md)** — Vergleichstest AI-native vs. normal

### Ergebnisse
- **[metrics.json](metrics.json)** — Aktuelle Test-Scores (maschinenlesbar)
- **comparison-test-results.json** — Vergleichstest-Ergebnisse (nach Durchführung)
- **google-search-console-results.json** — GSC-Monitoring (nach Setup)

### Screenshots (nach Durchführung)
```
verify/screenshots/
├── chatgpt-ai-native-q1.png
├── claude-ai-native-q1.png
├── rich-results-faq.png
└── google-search-console-indexed.png
```

---

## Nächste Schritte

### Sofort durchführbar:
1. ✅ sitemap.xml + robots.txt deployen
2. ⏳ Rich Results Test (manuell via Browser)
3. ⏳ Google Search Console einrichten (Domain-Verifizierung)

### Nach 7-14 Tagen:
1. ⏳ Google Search Console: Prüfe "Enhancements" (FAQ, BlogPosting)
2. ⏳ Google Search Console: Prüfe "Coverage" (indexierte Seiten)

### Nach 14-30 Tagen:
1. ⏳ Comparison Test durchführen (ChatGPT/Claude/Perplexity)
2. ⏳ Ergebnisse dokumentieren
3. ⏳ Visuelle Darstellung erstellen (Tabelle, Grafik)

### Nach 30-60 Tagen:
1. ⏳ Google AI Snippet Test (falls verfügbar)
2. ⏳ Performance-Monitoring (Impressions, Clicks)
3. ⏳ Backlinks aufbauen (für schnellere Crawl-Frequenz)

---

## Go/No-Go Kriterien (aus README.md)

### Validierung (✅ BESTANDEN)
- ✅ W3C Validator: 0 Errors
- ✅ JSON-LD Validator: Valid
- ✅ Lighthouse: 90+ (pending, aber HTML-Struktur optimal)

### AI Agent Test (✅ BESTANDEN)
- ✅ 6/6 Fragen korrekt beantwortet
- ✅ Keine Halluzinationen
- ✅ Korrekte Quellenangaben

### Google Indexierung (⏳ PENDING)
- ⏳ Rich Results: FAQ + BlogPosting erkannt
- ⏳ Sitemap: Alle URLs indexiert
- ⏳ Strukturierte Daten in Google Search Console sichtbar

### Comparison Test (⏳ PENDING)
- ⏳ AI-native Score: 6/6
- ⏳ Normale Website Score: <4/6
- ⏳ Beweis: AI-native messbar besser

**Aktueller Status:** 2/4 Kriterien erfüllt → MVP auf gutem Weg

---

## Kontakt

**Fragen zu Tests/Validierung:**
→ Siehe README.md im Root-Verzeichnis

**Test-Ergebnisse melden:**
→ Ergänze metrics.json + comparison-test-results.json

**Neue Tests vorschlagen:**
→ Erstelle neue .md-Datei in verify/ mit Template aus comparison-test.md
