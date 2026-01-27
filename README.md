# 🚗 Automobilanwendung - Premium Autohaus App

Willkommen bei **Automobilanwendung**, einer modernen React-Anwendung zum Durchsuchen und Auswählen von Premium-Fahrzeugen. Dieses Projekt präsentiert eine High-End "Dark & Gold" Ästhetik mit fortschrittlichen Funktionen wie Internationalisierung (i18n) und Glassmorphism-UI.

![Projektvorschau](./public/preview.png) *(Hier später Screenshot einfügen)*

## ✨ Funktionen

*   **Premium Design**: Benutzerdefiniertes "Dark & Gold" Theme mit Glassmorphism-Effekten.
*   **Fahrzeugkatalog**: Entdecken Sie eine kuratierte Liste von Luxusfahrzeugen mit realen technischen Daten (Geschwindigkeit, Beschleunigung, Preis).
*   **Fahrzeugdetails**: Eigene Seite für jedes Auto mit detaillierten Informationen, die transparent über dem Hintergrund liegen.
*   **Internationalisierung (i18n)**: Volle Unterstützung für **Englisch**, **Deutsch** und **Russisch**.
*   **Responsive**: Vollständig optimiert für Desktop- und Mobilgeräte.

## 🛠 Technologie-Stack

*   **React** (v18)
*   **Redux Toolkit** (State Management)
*   **SCSS / SASS** (Styling, Mixins, Variablen)
*   **i18next** (Internationalisierung)
*   **React Router** (Navigation)

## 🚀 Erste Schritte

### Voraussetzungen

*   Node.js (v14 oder höher)
*   npm

### Installation

1.  Klonen Sie das Repository:
    ```bash
    git clone https://github.com/Start-Z/automobilanwendung.git
    cd automobilanwendung
    ```

2.  Installieren Sie die Abhängigkeiten:
    ```bash
    npm install
    ```

3.  Erstellen Sie eine `.env` Datei im Stammverzeichnis (Sicherheitsanforderung):
    ```env
    REACT_APP_DADATA_API_KEY=ihr_api_key_hier
    ```

4.  Starten Sie den Entwicklungsserver:
    ```bash
    npm start
    ```

## 📂 Projektstruktur

```
src/
├── components/      # React-Komponenten (Cars, CarDetails, Navbar...)
├── redux/           # State Management (Slices)
├── styles/          # SCSS-Dateien (Variablen, Mixins, globale Stile)
├── i18n.js          # Konfiguration der Internationalisierung
└── App.jsx          # Haupteinstiegspunkt der Anwendung
public/
└── locales/         # JSON-Übersetzungsdateien (en, de, ru)
```

## 🔒 Sicherheitshinweis

Dieses Projekt verwendet Umgebungsvariablen für API-Keys. Laden Sie Ihre `.env` Datei niemals in die Versionsverwaltung hoch.

---

Designed mit ❤️ von [Start-Z]
# automobilanwendung
