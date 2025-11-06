# KAS/All-Inkl Support Request

**Datum:** 7. November 2025
**Domain:** jan-erik-andersen.de
**Problem:** ModSecurity blockiert legitime AI-Agent-Requests

---

## Betreff

ModSecurity blockiert legitime Machine-Endpoints (/ai/*.json, *.md)

---

## Text für Support-Ticket

```
Hallo All-Inkl-Support,

ich betreibe die Domain jan-erik-andersen.de auf Ihrem Server.

PROBLEM:
Bestimmte User-Agents (ChatGPT, andere AI-Fetcher) bekommen HTTP 400
für alle Dateien unter /ai/*.json, *.md und *.php.

TESTS:
- curl/Browser/Standard-UAs → HTTP 200 OK ✅
- ChatGPT/AI-Fetcher → HTTP 400 ❌
- Auch /ai/echo.php (PHP-Skript) gibt 400 → Problem VOR PHP

VERMUTUNG:
ModSecurity/WAF blockiert diese Requests auf Webserver-Ebene.

ZEITFENSTER:
6./7. November 2025, 23:00-01:00 UTC

BETROFFENE URLs (alle geben 400 bei bestimmten Agents):
- https://jan-erik-andersen.de/ai/health.json
- https://jan-erik-andersen.de/ai/services.json
- https://jan-erik-andersen.de/ai/echo.php

BITTE PRÜFEN:
1. ModSecurity-Logs für oben genanntes Zeitfenster
2. Welche Rule-IDs triggern auf /ai/*?
3. Welche User-Agents werden blockiert?

GEWÜNSCHTE LÖSUNG:
Option A) ModSecurity-Exceptions für Pfad /ai/* (nur GET-Requests)
Option B) WAF für Subdomain ai.jan-erik-andersen.de deaktivieren (Rest aktiv)
Option C) Whitelist für legitime Bot-UAs (GPTBot, ChatGPT-User, Claude-Web)

HINTERGRUND:
Die Website ist ein AI-native Projekt mit strukturierten Daten für AI-Agenten.
Die blockierten Dateien sind JSON/Markdown-Daten, die von AI-Agenten
gelesen werden sollen. Es handelt sich um keine schädlichen Requests.

Vielen Dank für die Unterstützung!

Mit freundlichen Grüßen
Jan-Erik Andersen
```

---

## Zusätzliche Informationen für Support

**Server-Details:**
- Hoster: KAS (All-Inkl)
- Server: w018c99c.kasserver.com
- Domain: jan-erik-andersen.de

**Betroffene Dateien:**
```
/ai/manifest.jsonld
/ai/services.json
/ai/portfolio.json
/ai/identity.json
/ai/index.json
/ai/health.json
/ai/echo.php
/blog/feed.json
/blog/google-zero.json
/blog/google-zero.md
/faq.json
/content/philosophy.md
/content/2030-web.md
```

**Funktionierende User-Agents (200 OK):**
- curl/8.14.1
- Mozilla/5.0 (Windows...)
- python-requests/2.31.0
- GPTBot/1.0 (bei meinen Tests)

**Blockierte User-Agents (400):**
- ChatGPT's Fetcher (unbekannter UA)
- Möglicherweise andere AI-Bots

**Logs zum Prüfen:**
```
Suche nach:
- "400" + "/ai/"
- "ModSecurity"
- "Access denied"
- "id [Regel-ID]"
```

---

## Temporäre .htaccess-Lösung (falls Support erlaubt)

**Option 1: ModSecurity für /ai/ deaktivieren**

Erstelle: `/ai/.htaccess`

```apache
# Disable ModSecurity for AI data endpoints
<IfModule mod_security.c>
  SecRuleEngine Off
</IfModule>

# Allow all GET requests
<RequireAll>
  Require method GET OPTIONS
  Require all granted
</RequireAll>
```

**Risiko:** Niedrig (nur Lese-Zugriff auf statische JSON-Dateien)

**Option 2: Nur für echo.php deaktivieren (zum Testen)**

In root `.htaccess`:

```apache
<Files "echo.php">
  <IfModule mod_security.c>
    SecRuleEngine Off
  </IfModule>
  Require all granted
</Files>
```

---

## Test nach Support-Lösung

**1. ChatGPT testen:**
```
"Lies https://jan-erik-andersen.de/ai/health.json und zeige mir den Inhalt"
```

**Erwartung:** JSON-Inhalt wird angezeigt, kein 400-Fehler

**2. curl testen:**
```bash
curl https://jan-erik-andersen.de/ai/health.json
```

**Erwartung:** HTTP 200 OK + JSON-Body

**3. Browser testen:**
Öffne: https://jan-erik-andersen.de/ai/health.json

**Erwartung:** JSON wird im Browser angezeigt

---

## Dokumentation der Lösung

**Nach Support-Antwort bitte dokumentieren:**

```markdown
## Lösung (Datum: ...)

**Problem-Ursache:**
[z.B. "ModSecurity Rule 920420 blockiert Requests ohne Accept-Header"]

**Rule-IDs:**
[z.B. "920420, 920430"]

**Umgesetzte Lösung:**
[z.B. "Rule-Exceptions für /ai/* in ModSecurity-Konfiguration"]

**Test-Ergebnisse:**
- ChatGPT: ✅ 200 OK
- curl: ✅ 200 OK
- Browser: ✅ 200 OK

**Status:** ✅ Gelöst
```

Speichern in: `CHATGPT-400-SOLUTION.md`

---

## Alternativen falls Support nicht verfügbar

**Option A: Subdomain**
- Erstelle `ai.jan-erik-andersen.de`
- Gleicher Docroot oder `/ai` als Root
- Deaktiviere ModSecurity nur für diese Subdomain
- Vorteil: Hauptdomain bleibt geschützt

**Option B: CDN mit Whitelist**
- Cloudflare (kostenlos) vor Domain schalten
- Bot-Filter auf "Low" setzen
- Whitelist für bekannte AI-Bots
- Vorteil: Mehr Kontrolle, bessere Logs

**Option C: API-Gateway**
- Separater Server für `/ai/*` Endpoints
- Reverse Proxy auf Hauptdomain
- Vorteil: Volle Kontrolle, aber Aufwand

**Option D: Manuelle Datei-Distribution**
- Stelle JSON-Dateien zusätzlich auf GitHub Pages bereit
- `https://andersensignal.github.io/data/services.json`
- Verlinke beide URLs (Fallback)
- Vorteil: Funktioniert immer, aber Duplikation

---

## Status

**Problem:** ✅ Identifiziert (ModSecurity/WAF)
**Ursache:** ⏳ Wird vom Support geprüft
**Lösung:** ⏳ Pending (Support-Ticket)
**Workaround:** ✅ Browser-Test funktioniert

**Next Steps:**
1. Support-Ticket erstellen (KAS)
2. Logs prüfen (falls Zugriff vorhanden)
3. Temporäre Lösung umsetzen (falls erlaubt)
4. Nach Lösung: Tests dokumentieren
