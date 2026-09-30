# Cypherox Technologies — Deutsche Website Homepage (CX-DE)

Eine moderne, enterprise-fokussierte und konvertierungsstarke deutsche Homepage für Cypherox Technologies. Entwickelt von Grund auf unter Wahrung der exakten Informationsarchitektur und Sitemap der offiziellen UK-Referenz-Website (`https://cx-uk.netlify.app/`).

---

## Projektstruktur

```
.
├── index.html                  # Hauptseite mit 12 strukturierten Sektionen
├── service-detail-template.html# Universelles Service-Detail-Template (voll responsiv)
├── hire-detail-template.html   # Universelles Hire-Developer-Detail-Template (voll responsiv)
├── industry-detail-template.html# Universelles Industry-Detail-Template (voll responsiv)
├── industries/
│   └── industry-detail-template.html
├── hire-developers/
│   └── hire-detail-template.html
├── header.html                 # Wiederverwendbarer Header (Navigation, Mega-Menüs, Mobile Drawer)
├── footer.html                 # Wiederverwendbarer Footer (Sitemap-Spalten, Kontakt, Compliance)
├── css/
│   └── style.css               # Einziges konsolidiertes Master-Stylesheet (Alles in einem)
├── js/
│   ├── components.js           # Dynamischer fetch()-Loader für header.html & footer.html
│   ├── header-footer.js        # Header/Footer/Mega-Menü/Mobile-Drawer Render-Logik & Fallback
│   ├── main.js                 # Sämtliche UI-Logik (Tabs, Akkordeon, Simulator, Rechner, Formulare)
│   └── animations.js           # IntersectionObserver Scroll-Reveals, Zähleranimation
├── assets/
│   └── logos/
│       └── cypherox-logo.png   # Offizielles Cypherox Markenlogo
└── README.md                   # Dokumentation & Setup
```

---

## Industry Details Template Usage & Duplication

To generate a new Industry page from `industry-detail-template.html`:

1. **Duplicate the file:** Copy `industry-detail-template.html` and rename it for your target sector (e.g., `healthcare.html`, `retail-ecommerce.html`, `manufacturing.html`, `logistics.html`, `real-estate.html`).
2. **Update Metadata & Breadcrumbs:**
   - `<title>` and `<meta name="description">`
   - Breadcrumb navigation path (e.g., `Home > Industries > Healthcare & Life Sciences`)
3. **Customize Hero Copy:**
   - H1 title (`<span class="text-gradient">`), subtitle, metrics bar, and interactive architecture nodes.
4. **Customize Industry Sections:**
   - 6 Compliance Badges in `#compliance` (e.g., HIPAA/MDR for Healthcare, ISO 9001 for Manufacturing)
   - 6 Strategic Value Driver cards in `#drivers`
   - 6 Industry Solutions & deliverables in `#solutions`
   - Real-world Case Study in `#case-study`
   - Technology Stack in `#tech-stack`
   - 5-Phase Implementation Methodology in `#methodology`
   - Sector-specific FAQ questions & answers in `#faq`
   - Default selected sector in the consultation form (`#consultation`).

---

## Hire Developer Template Usage & Duplication

To generate a new Hire Developer page from `hire-detail-template.html`:

1. **Duplicate the file:** Copy `hire-detail-template.html` and rename it for your target technology or role (e.g., `hire-react-developers.html`, `hire-python-developers.html`, `hire-ai-developers.html`, `hire-flutter-developers.html`).
2. **Update Metadata & Breadcrumbs:**
   - `<title>` and `<meta name="description">`
   - Breadcrumb navigation path (e.g., `Home > Hire Developers > Hire ReactJS Developers`)
3. **Customize Hero Copy:**
   - H1 title (`<span class="text-gradient">`), subtitle description, and verified stack badges in the Hero Talent Snapshot widget
4. **Customize Page Sections:**
   - 6 Strategic Value Driver cards in `#why-hire`
   - 6 Technical Competencies & checklists in `#competencies`
   - 3 Engagement Models (Dedicated Full-Time, Engineering Pod, Hourly) in `#engagement-models`
   - 3 Sample Developer Profiles in `#profiles` (adjust names, skills, and case study achievements)
   - 4-Step Onboarding Workflow in `#process`
   - Comparison Table in `#comparison`
   - Interactive Cost & Team Estimator in `#calculator` (rates adjustable in `js/hire-detail.js`)
   - FAQ questions & answers in `#faq`
   - Default selected role in the consultation form (`#consultation`).

---

## Service Details Template Usage & Duplication

To generate a new service page from this template:

1. **Duplicate the file:** Copy `service-detail-template.html` and rename it for your target service (e.g. `cloud-devops.html`, `web-development.html`, `predictive-maintenance.html`).
2. **Update Metadata & Breadcrumbs:**
   - `<title>` and `<meta name="description">`
   - Breadcrumb navigation path (e.g., `Home > Services > Cloud Infrastructure & DevOps`)
3. **Customize Hero Copy:**
   - Category badge, H1 title (`<span class="text-gradient">`), and subtitle description
4. **Customize Service Sections:**
   - 4 Value Driver cards in `#overview`
   - 6 Capability & deliverable cards in `#capabilities` with custom bullet points
   - 5 Delivery Roadmap phases in `#process`
   - Technology stack items in `#tech-stack`
   - Real-world Case Study in `#case-study`
   - FAQ accordion questions & answers in `#faq`
   - Set the default selected `<option>` in the contact form (`#service`).

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
