# Proof Sequence: LLM Read Test

## Ziel
Beweisen, dass ein LLM (ohne Browser-Plugin, ohne Vorwissen) die Website `jan-erik-andersen.de` korrekt lesen und verstehen kann.

---

## Test-Plattformen

### 1. ChatGPT (mit Web-Browsing)
- Modell: GPT-4 oder höher
- Zugang: Kostenpflichtig (ChatGPT Plus/Pro)
- Fähigkeit: Kann Websites mit Browser-Tool crawlen

### 2. Perplexity
- Modell: Pro-Search-Modus
- Zugang: Kostenlos (mit Limits) oder Pro
- Fähigkeit: Live-Web-Zugriff, zitiert Quellen

### 3. Google Gemini
- Modell: Gemini Advanced
- Zugang: Kostenlos oder Advanced
- Fähigkeit: Kann URLs analysieren

---

## Test-Sequenz

### Phase 1: Grundlegende Identifikation

**Frage:**
```
Wer ist Jan-Erik Andersen?
```

**Erwartetes Ergebnis:**
- Name: Jan-Erik Andersen
- Rolle: AI-native Web Architect
- Organisation: Andersen Webworks
- Tagline: "Structure as Integrity"

**Proof-Kriterium:**
✅ Das LLM gibt die korrekten Informationen aus der Website wieder.

---

### Phase 2: Service-Verständnis

**Frage:**
```
Welche Services bietet Jan-Erik Andersen an? Mit Preisen bitte.
```

**Erwartetes Ergebnis:**
- AI Readiness Audit (900 EUR)
- AI Visibility Refactor (ab 2400 EUR)
- Conversational Brand Modeling (ab 1800 EUR)
- Human Fallback UI (ab 1500 EUR)
- Full-Stack AI Transformation (ab 5500 EUR)

**Proof-Kriterium:**
✅ Das LLM listet alle 5 Services mit korrekten Preisen auf.

---

### Phase 3: Philosophie-Extraktion

**Frage:**
```
Was bedeutet "Structure as Integrity" auf der Website von Jan-Erik Andersen?
```

**Erwartetes Ergebnis:**
- Struktur schafft Vertrauen
- Gut strukturierte Daten sind verlässlich, prüfbar, ehrlich
- Eindeutigkeit über Eloquenz

**Proof-Kriterium:**
✅ Das LLM gibt die Kernaussagen der Philosophie korrekt wieder.

---

### Phase 4: Technische Details

**Frage:**
```
Wie ist die Website jan-erik-andersen.de technisch aufgebaut?
```

**Erwartetes Ergebnis:**
- Vollständig statisch
- Framework-frei
- Ohne JavaScript
- Eingebettete JSON-LD-Daten im `<head>`
- Maschinenlesbare Kurzfassung im `<body>`

**Proof-Kriterium:**
✅ Das LLM erkennt die technischen Charakteristika korrekt.

---

### Phase 5: Kontaktinformationen

**Frage:**
```
Wie kann ich Jan-Erik Andersen kontaktieren?
```

**Erwartetes Ergebnis:**
- E-Mail: mail@jan-erik-andersen.de
- GitHub: https://github.com/jan-erik-andersen
- LinkedIn: https://linkedin.com/in/jan-erik-andersen
- Sprachen: Deutsch, Englisch

**Proof-Kriterium:**
✅ Das LLM gibt alle Kontaktkanäle korrekt wieder.

---

## Dokumentation der Ergebnisse

Nach jedem Test:

1. **Screenshot** der LLM-Antwort speichern
2. **Timestamp** notieren
3. **Plattform** dokumentieren (ChatGPT/Perplexity/Gemini)
4. **Erfolg/Fehler** in `metrics.json` eintragen

---

## Beispiel-Durchführung (Perplexity)

1. Öffne [perplexity.ai](https://perplexity.ai)
2. Aktiviere Pro-Search (falls verfügbar)
3. Stelle die Fragen aus den Phasen 1-5
4. Dokumentiere die Antworten

**Wichtig:**
- Verwende immer die exakte URL: `https://jan-erik-andersen.de`
- Stelle die Fragen in separaten Chats, um Kontext-Bias zu vermeiden
- Notiere, ob das LLM JSON-LD oder HTML-Text verwendet hat

---

## Erfolgs-Definition

Der Test gilt als **erfolgreich**, wenn:

1. ✅ Mindestens 1 LLM-Plattform alle 5 Phasen besteht
2. ✅ Das LLM die Daten direkt von der Website bezieht (nicht aus altem Wissen)
3. ✅ Die Antworten präzise sind (keine Halluzinationen)

Wenn alle Kriterien erfüllt sind:
→ **Proof of AI-native Web Identity erreicht**

---

## Fehlerbehebung

### Problem: LLM findet die Website nicht
- **Lösung:** Prüfe, ob die Website live ist (curl -I https://jan-erik-andersen.de)
- **Lösung:** Verwende Perplexity statt ChatGPT (besserer Web-Zugriff)

### Problem: LLM gibt veraltete Infos
- **Lösung:** Sage explizit "Bitte lies die aktuelle Website"
- **Lösung:** Verwende Perplexity im Pro-Search-Modus

### Problem: LLM versteht JSON-LD nicht
- **Lösung:** Das ist kein Problem - die maschinenlesbare Kurzfassung im `<body>` ist Fallback
- **Lösung:** Prüfe, ob die Kurzfassung korrekt wiedergegeben wird

---

## Nächste Schritte nach erfolgreichem Proof

1. Dokumentation in `metrics.json` abschließen
2. Screenshots in `/verify/screenshots/` speichern
3. Blog-Post über Erkenntnisse schreiben
4. Ergebnisse in README.md integrieren

---

*Dieses Dokument ist Teil des Projekts "andersen-signal" — ein MVP für AI-native Web Identity.*
