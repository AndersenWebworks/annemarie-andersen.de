# GitHub Pages Setup

Anleitung zum Aktivieren von GitHub Pages für `llm.annemarie-andersen.de`.

## Voraussetzungen

- ✅ Repository ist auf GitHub: `AndersenWebworks/llm.annemarie-andersen.de`
- ✅ Subdomain `llm.annemarie-andersen.de` ist DNS-konfiguriert (CNAME zu `andersenwebworks.github.io`)
- ✅ Alle Dateien sind im Repository (inkl. `CNAME`-Datei)

## Schritt 1: GitHub Pages aktivieren

1. Gehe zu: https://github.com/AndersenWebworks/llm.annemarie-andersen.de/settings/pages
2. **Source**: Wähle `Deploy from a branch`
3. **Branch**: Wähle `main` und `/ (root)`
4. Klicke **Save**

GitHub baut die Website automatisch und deployed sie nach 1-2 Minuten.

## Schritt 2: DNS-Konfiguration prüfen

Stelle sicher, dass die Subdomain `llm.annemarie-andersen.de` korrekt konfiguriert ist:

```
Type: CNAME
Name: llm
Value: andersenwebworks.github.io
TTL: 3600 (oder Auto)
```

**Wichtig**: Das `CNAME`-Record zeigt auf `andersenwebworks.github.io` (dein GitHub-Organisations-Name), NICHT auf die URL des Repos!

## Schritt 3: Custom Domain verifizieren

1. Gehe zu: https://github.com/AndersenWebworks/llm.annemarie-andersen.de/settings/pages
2. **Custom domain**: Trage `llm.annemarie-andersen.de` ein
3. Warte auf DNS-Check (kann 1-60 Minuten dauern)
4. Aktiviere **Enforce HTTPS** (wird automatisch nach erfolgreicher Verifizierung angeboten)

## Schritt 4: GitHub Actions Workflow verifizieren

Der Workflow `.github/workflows/ai-readable-mirrors.yml` sollte automatisch laufen bei jedem Push auf `main`.

**Test:**

1. Ändere `ai/identity.json`
2. Committe und pushe
3. Gehe zu: https://github.com/AndersenWebworks/llm.annemarie-andersen.de/actions
4. Der Workflow sollte laufen und `ai/identity.txt` automatisch generieren

## Schritt 5: Deployment testen

Nach 1-2 Minuten sollte die Website live sein:

- Homepage: https://llm.annemarie-andersen.de/
- Englisch: https://llm.annemarie-andersen.de/en/
- Leichte Sprache: https://llm.annemarie-andersen.de/leichte-sprache/
- AI Identity: https://llm.annemarie-andersen.de/ai/identity.json
- AI Identity TXT: https://llm.annemarie-andersen.de/ai/identity.txt

**Test mit curl:**

```bash
curl -I https://llm.annemarie-andersen.de/
curl https://llm.annemarie-andersen.de/ai/identity.txt
```

## Troubleshooting

### Problem: "DNS check failed"

**Lösung:**

1. Prüfe DNS-Konfiguration mit `nslookup llm.annemarie-andersen.de`
2. Warte 15-60 Minuten (DNS-Propagierung)
3. Lösche Custom Domain in GitHub Settings und trage sie erneut ein

### Problem: "404 Not Found"

**Lösung:**

1. Prüfe ob `CNAME`-Datei im Repository existiert
2. Prüfe ob Branch `main` und root (`/`) korrekt eingestellt ist
3. Warte 2-5 Minuten nach Aktivierung

### Problem: "Workflow schlägt fehl"

**Lösung:**

1. Gehe zu https://github.com/AndersenWebworks/llm.annemarie-andersen.de/actions
2. Klicke auf den fehlgeschlagenen Workflow
3. Prüfe Logs
4. Häufiger Fehler: Workflow-Permissions fehlen
   - Gehe zu Settings → Actions → General → Workflow permissions
   - Wähle "Read and write permissions"
   - Speichere

### Problem: ".txt-Dateien werden nicht generiert"

**Lösung:**

1. Prüfe ob `.github/workflows/ai-readable-mirrors.yml` existiert
2. Prüfe Workflow-Logs für Fehler
3. Trigger Workflow manuell:
   - Gehe zu https://github.com/AndersenWebworks/llm.annemarie-andersen.de/actions
   - Wähle "Generate AI-readable .txt mirrors"
   - Klicke "Run workflow"

## Deployment-Workflow

Nach dem Setup ist der Workflow simpel:

```bash
# 1. Inhalte bearbeiten (HTML, JSON)
# 2. Committen
git add -A
git commit -m "Update: Neue Inhalte"

# 3. Pushen
git push origin main

# 4. Warten (1-2 Minuten)
# → GitHub Actions generiert .txt-Mirrors
# → GitHub Pages deployed automatisch
# → Website ist live
```

## Nützliche Links

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **GitHub Actions Docs**: https://docs.github.com/en/actions
- **Custom Domains**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

**Fertig!** Die Website sollte jetzt live sein unter `https://llm.annemarie-andersen.de/`.
