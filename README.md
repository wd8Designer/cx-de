# Cypherox Technologies — Deutsche Website Homepage (CX-DE)

Eine moderne, enterprise-fokussierte und konvertierungsstarke deutsche Homepage für Cypherox Technologies. Entwickelt von Grund auf unter Wahrung der exakten Informationsarchitektur und Sitemap der offiziellen UK-Referenz-Website (`https://cx-uk.netlify.app/`).

---

## Projektstruktur

```
.
├── index.html                  # Hauptseite mit 12 strukturierten Sektionen
├── components/
│   ├── header.html             # Wiederverwendbarer Header (Navigation, Mega-Menüs, Sprachauswahl, Mobile Drawer)
│   └── footer.html             # Wiederverwendbarer Footer (Sitemap-Spalten, Kontakt, Compliance)
├── css/
│   ├── style.css               # Design-Tokens, Typografie, Grid, Sektionen & Komponenten
│   ├── components.css          # Header, Sticky-Effekt, Mega-Menüs, Dropdowns & Footer
│   └── responsive.css          # Responsive Breakpoints (320px bis 1920px)
├── js/
│   ├── components.js           # Dynamischer fetch()-Loader für header.html & footer.html
│   ├── main.js                 # UI-Logik (Sticky Header, Mega-Menü, Mobile Drawer, Tabs, Formular)
│   └── animations.js           # IntersectionObserver Scroll-Reveals, Zähleranimation & Hero-Parallax
├── assets/
│   └── logos/
│       └── cypherox-logo.png   # Offizielles Cypherox Markenlogo
└── README.md                   # Dokumentation & Setup
```

---

## Technischer Aufbau & Dynamisches Laden

Gemäß den Anforderungen werden Header und Footer **nicht** direkt in `index.html` eingebettet, sondern als modulare Komponenten gepflegt:
- `#site-header` ➔ Lädt `/components/header.html`
- `#site-footer` ➔ Lädt `/components/footer.html`

Das Laden erfolgt asynchron über `fetch()` in `js/components.js`. Nach erfolgreichem Laden wird das Event `componentsLoaded` ausgelöst, welches die Menü-Interaktionen und den Mobile Drawer initialisiert.

> **Wichtiger Hinweis zum lokalen Testen:**  
> Da moderne Browser das Laden lokaler Dateien über das `file://`-Protokoll aus Sicherheitsgründen (CORS) einschränken, muss die Seite über einen lokalen Webserver bereitgestellt werden:

```bash
# Mit Node.js npx:
npx serve .

# Oder mit Python (falls vorhanden):
python -m http.server 8080
```

---

## Verifizierte Daten & Sitemap

Alle auf der Seite dargestellten Zahlen und Fakten wurden 1:1 mit der offiziellen Cypherox UK-Website abgeglichen:
- **Gründung:** Seit 2015 (11+ Jahre Erfahrung)
- **Teamgröße:** 130+ Ingenieure in KI, Software, Cloud, Mobile & Data
- **Erfolgreich gelieferte Projekte:** 1.500+
- **Kundenbewertung:** 4.9/5 Bewertung von 150+ Unternehmenskunden auf Clutch & Google
- **Regionale Präsenz:** Deutschland/Europa, UK, USA, VAE, Indien
- **Offizieller Kontakt:** `hello@cypherox.com` | `+44 20 1234 5678` | London, United Kingdom (Betreuung DACH/Europa)
- **Entwicklerprofile:** Hardik (Senior AI/ML), Krupa (Senior Full Stack), Akash (Senior Cloud/DevOps)
- **Fallstudien:** Healthcare (NLP-Dokumentenextraktion), FinTech (Echtzeit-Betrugserkennung), Logistik (Tourenoptimierung)
- **Kundenstimmen:** Britney (Acadia), Gabrielle, Becke, Jeff, Lauren
