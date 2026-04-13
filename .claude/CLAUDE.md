# annemarie-andersen.de - Projektkontext

## Projekt

Statische Website fuer Annemarie Andersens Sprachdienstleistungen.
Kein WordPress, kein CMS, kein JavaScript-Framework. Reines HTML/CSS mit Schema.org/JSON-LD.

- **Eigentuemerin:** Annemarie Andersen (person_id=2 im Finanztool)
- **Domain:** annemarie-andersen.de
- **Lokal:** Clautz serviert unter `/annemarie/` (Port 80)
- **Hosting (spaeter):** All-Inkl (w018c99c.kasserver.com)
- **Referenz-Struktur:** jan-erik-andersen.de

## Strategie (Stand: 13.04.2026)

**Positionierung:** "Ich sorge dafuer, dass Ihre Kommunikation barrierefrei, rechtssicher und verstaendlich ist - ob von Menschen oder KI geschrieben."

**Hauptargument:** Compliance-Druck (BFSG, BITV 2.0, BGG) - Unternehmen MUESSEN barrierefrei kommunizieren. NICHT "Textqualitaet" als Argument.

### Services (Hierarchie)

1. **Barrierefreiheit & Leichte Sprache** (Anker) - Gesetzliche Pflicht, wachsender Markt, BMF-Referenz
2. **Verstaendliche Verwaltung** (Entbuerokratisierung) - Politisch gewollt, Foerdermittel, Behoerden
3. **KI-Qualitaetssicherung & Post-Editing** - Zukunftsmarkt, QA-Background (Jung von Matt, Goodgame, InnoGames)
4. **Lektorat & Uebersetzung** (Basis) - Commodity, nicht pushen

### Zielgruppen

1. Oeffentliche Hand / Behoerden (BITV, BGG, Foerderprojekte)
2. Agenturen mit Behoerden-Auftraegen
3. KMU unter BFSG-Pflicht (E-Commerce, Banken, Telko)
4. Unternehmen die KI-Texte qualitaetssichern muessen

### Top-Referenz

Bundesministerium der Finanzen - Foerderleitfaden DARP (barrierefreie Kommunikation, Leichte Sprache nach BITV 2.0)

## Design

- **Farben:** Navy (#1e3a5f), Terracotta (#c0542b), Cream (#f8f6f3)
- **Fonts:** Libre Baskerville (Ueberschriften), Source Sans 3 (Fliesstext)
- **Prinzip:** Serioes + warm, Vertrauen + Menschlichkeit

## SEO / GEO

- Schema.org JSON-LD eingebettet (ProfessionalService + FAQPage)
- ai/-Ordner mit maschinenlesbaren Daten
- llms.txt fuer LLM-Agenten
- Organische Texte - duerfen NICHT nach KI klingen
- Fokus-Keywords: "Leichte Sprache BFSG", "barrierefreie Kommunikation Unternehmen", "BITV Leichte Sprache Dienstleister"

## Geplante Seitenstruktur

```
index.html                    <- Startseite (fertig)
barrierefreiheit.html         <- Barrierefreiheit & Leichte Sprache
verwaltung.html               <- Verstaendliche Verwaltung
ki-qualitaetssicherung.html   <- KI-QS & Post-Editing
lektorat.html                 <- Lektorat & Uebersetzung
ueber-mich.html               <- Story, nicht Lebenslauf
referenzen.html               <- Fallstudien, nicht nur Logos
kontakt.html                  <- Angebot anfordern
impressum.html                <- Pflichtseite
datenschutz.html              <- Pflichtseite
```

## Workflow

Annemarie bearbeitet die Seite ueber den Clautz-Webchat. Sie oeffnet das Tool "Annemarie Andersen - Website", sieht ihre Seite, sagt Clautz was sie aendern will. Clautz editiert die Dateien direkt in diesem Projektordner.