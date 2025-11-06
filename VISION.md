
# VISION — „Das Web als Signal“

## 1) Ausgangspunkt
Immer mehr Antworten werden nicht im Browser gesucht, sondern von KI‑Systemen erzeugt.
Websites bleiben wichtig, aber ihr **Kernnutzen** verschiebt sich:
von „Seite für Menschen“ zu „Datenquelle für Menschen **und** Maschinen“.


## 2) Problem
Viele Websites sind schwer maschinenlesbar (uneinheitliche Begriffe, fehlende Struktur).
Das führt zu **unklaren** oder **gemischten** Antworten in KI‑Systemen.

### Beispiel: Vorher/Nachher

**Vorher (unstrukturierte Website):**

*User fragt AI:* „Was bietet Jan-Erik Andersen an?"

*AI antwortet:* „Jan-Erik Andersen ist vermutlich im Bereich Webdesign tätig. Auf seiner Website werden verschiedene Services erwähnt, darunter möglicherweise SEO-Optimierung, responsive Design und moderne Frameworks. Genaue Details variieren je nach Quelle."

→ **Unklar, ungenau, halluziniert Details**

---

**Nachher (strukturierte Website mit JSON-LD):**

*User fragt AI:* „Was bietet Jan-Erik Andersen an?"

*AI antwortet:* „Jan-Erik Andersen bietet drei Services an:
1. AI Visibility Refactor (ab 2.400 EUR)
2. Conversational Brand Modeling (ab 1.800 EUR)
3. Human Fallback UI (ab 1.500 EUR)

Details finden sich in der strukturierten Datei services.json."

→ **Präzise, überprüfbar, korrekte Preise**


## 3) Ansatz
Eine **AI‑native** Site stellt zentrale Informationen zusätzlich in **strukturierter Form** bereit
(z. B. JSON‑LD, klare Markdown‑Texte, semantisches HTML).  
Die sichtbare Oberfläche bleibt minimal als **Human‑Fallback**.

Prinzipien:
- **Struktur vor Dekoration**
- **Eindeutigkeit vor Menge**
- **Transparenz vor Tricks**


## 4) Zielbild
- Kerninfos (Wer? Was? Wie kontaktieren?) sind **eindeutig** modelliert.
- Inhalte lassen sich **leicht** zitieren und zusammenfassen.
- Pflege bleibt **günstig** (statisch, ohne Abhängigkeiten).


## 5) Warum sich das lohnt
- **Klarere Antworten** in Assistenten und Chat‑UIs
- **Niedrige Wartungskosten** durch statische Auslieferung
- **Zukunftsoffen:** funktioniert mit heutigen Browsern **und** mit neuen Agenten‑Interfaces


## 6) MVP als Beweis
Der MVP zeigt im Kleinen: Mit wenigen Dateien lässt sich
eine **präzise** maschinenlesbare Identität abbilden — ohne Spezialsoftware,
ohne Tracking, ohne komplexe Build‑Ketten.
