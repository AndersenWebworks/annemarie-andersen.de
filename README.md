
# README — MVP-PLAN „andersen-signal v0.1“

Ziel dieses MVP: **Nachweisen**, dass eine sehr einfache, semantisch saubere Website
von KI-Systemen leichter **korrekt** verstanden werden kann als eine typische, rein visuelle Website.

Der MVP ist bewusst klein, statisch und ohne Abhängigkeiten.

---

## 1) Projektstruktur (v0.1)

```
andersen-signal/
├─ index.html                 # Human Fallback UI (plain HTML)
├─ ai/
│  ├─ manifest.jsonld         # Identität (Person/Organisation), Verweise
│  ├─ services.json           # Leistungen in maschinenlesbarer Form
│  ├─ portfolio.json          # Referenzen (neutral, prüfbar beschrieben)
│  └─ identity.json           # Tonalität, Schlüsselbegriffe (optional)
├─ content/
│  ├─ philosophy.md           # kurze Haltung, zitierbar
│  └─ 2030-web.md             # Einordnung: „Web als Dateninterface“
├─ verify/
│  ├─ agent-test.md           # Testprompts & Erwartungshaltung
│  ├─ checklists.md           # Validierungs-Checklisten
│  └─ metrics.json            # Protokoll der eigenen Tests
└─ README.md
```

---

## 2) Was der MVP **beweist** (klar und überprüfbar)

1. **Maschinenlesbarkeit:** JSON‑LD und HTML validieren ohne Fehler.
2. **Antwortklarheit:** Bei einfachen Fragen (z. B. „Wer ist Jan‑Erik Andersen? Welche Leistungen?“)
   geben KI‑Modelle die Inhalte **konsistent** wieder, wenn man nur die Domain nennt.
3. **Wartbarkeit:** Statischer Deploy (z. B. GitHub Pages) ohne Frameworks oder Build‑Schritte.

Hinweis: Öffentliche „Zitationen“ durch einzelne Chatbots sind **nicht garantiert** und hängen von deren
eigenen Indizes ab. Für den MVP reicht, dass Modelle Inhalte **aus den bereitgestellten Dateien**
korrekt rekonstruieren, wenn man sie darauf hinweist.

---

## 3) Tests & Checks

### A) Validierung
- **HTML:** W3C Markup Validator
- **JSON‑LD:** Schema‑Validator (z. B. „Structured Data Testing Tool“ Alternativen)
- **Performance:** Lighthouse lokal (ziel: sehr hoch, da kein JS/Bilder)

Ergebnis in `verify/metrics.json` notieren.

### B) Verständnisfragen (manuell)
Beispielfragen für ein KI‑Modell (ohne führende Suggestionen außer Domain‑Kontext):
- „Fasse die Leistungen von Jan‑Erik Andersen knapp zusammen.“
- „Nenne die angebotenen Services so, wie sie in `services.json` heißen.“
- „Zitiere einen Satz aus `content/philosophy.md` und erkläre kurz die Bedeutung.“

Notiere für jede Frage: **korrekt / unklar / falsch** in `metrics.json`.

---

## 4) Meilensteine

- **v0.1:** Struktur + Inhalte + manuelle Tests dokumentiert.
- **v0.2:** Automatisierte Checks (JSON‑Schema‑Linting, Link‑Check) per CI.
- **v1.0:** Repo als wiederverwendbare Vorlage (Template).

---

## 5) Akzeptanzkriterien (Go/No‑Go)

- **GO**, wenn:
  - HTML/JSON‑LD validieren,
  - Verständnisfragen überwiegend **korrekt** beantwortet werden,
  - Deploy funktioniert (statisch, reproduzierbar).

- **NO‑GO**, wenn:
  - Validierung scheitert,
  - Antworten überwiegend **unklar/falsch** sind,
  - Deploy unstabil ist.

---

## 6) Risiken & Umgang

- **Modelle verstehen Inhalte nicht klar:** Texte kürzen, Begriffe vereinheitlichen, Dateinamen und Felder eindeutig halten.
- **Validierung schlägt fehl:** Schema prüfen, Minimalbeispiele testen, Schritt für Schritt erweitern.
- **Over‑Engineering:** MVP bewusst klein halten – Ziel ist **Beweis**, nicht Feature‑Vollständigkeit.
