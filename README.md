# basvanderpaardt.com — Astro-site

Statische, tweetalige (NL/EN) site voor Bas van der Paardt. Bedoeld voor hosting op Netlify.

> **Let op:** dit project is geschreven zonder `npm install` of build (npm was geblokkeerd in de omgeving waar het gemaakt is). Draai eerst de stappen hieronder en meld fouten, dan fixen we ze.

## Starten

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # bouwt naar dist/
```

Node 20 of hoger. `package.json` vraagt Astro `^5`; als npm een nieuwere hoofdversie voorstelt, blijf op 5 tot de build werkt.

## Structuur

| Pad | Wat |
| --- | --- |
| `src/i18n/ui.ts` | **Alle teksten en routes** (NL + EN), de quotes en het e-mailadres |
| `src/content/cases/*.md` | Eén bestand per project (zie hieronder) |
| `src/components/` | Pagina's en blokken (`HomePage`, `CasePage`, `Contact`, …) |
| `src/pages/` | Dunne route-bestanden: NL op `/`, EN onder `/en/` |
| `src/styles/global.css` | Kleuren, typografie, layout (licht/donker automatisch) |
| `public/_redirects` | 301's van de oude WordPress-URL's |
| `netlify.toml` | Build-instellingen en headers |

## Een project toevoegen of aanpassen

Maak of wijzig een bestand in `src/content/cases/`. De bestandsnaam wordt de URL (`/werk/<naam>/` en `/en/work/<naam>/`).

```md
---
title: "Projectnaam"
tagline: { nl: "Korte regel", en: "Short line" }
summary: { nl: "Alinea in het Nederlands", en: "Paragraph in English" }
image: "/images/cases/projectnaam-1.jpg"   # beeld voor de kaart (vierkant uitgesneden); valt terug op het eerste carouselbeeld
images:                                     # carousel op de projectpagina, in volgorde
  - src: "/images/cases/projectnaam-1.jpg"
    alt: "Beschrijving van het beeld"
    note: { nl: "Geeltje bij dit beeld", en: "Sticky note for this image" }
  - src: "/images/cases/projectnaam-2.jpg"
    alt: "..."
links:                                     # links onder de tekst (optioneel)
  - label: { nl: "Projectwebsite", en: "Project website" }
    url: "https://voorbeeld.nl/"
    icon: "bed"                             # naam uit Google Material Symbols; weglaten = pijltje
order: 7            # volgorde, laag = eerst
draft: false        # true = verbergen
---
Optionele extra tekst in Markdown.
```

**Links en iconen:** kies een icoon op [fonts.google.com/icons](https://fonts.google.com/icons) (klik op het icoon, de naam staat rechts, schrijf hem in kleine letters met underscores, bijv. `local_bar`). Staat `icon` er niet, of bestaat de naam niet, dan komt er een pijltje. De iconen komen uit het pakket `@material-symbols/svg-400` en worden bij de build ingebouwd (geen verzoek naar Google).

**Geeltjes** zijn gewone HTML-tekst (`<figcaption>`) in de pagina, dus Google, Google Translate en schermlezers kunnen ze lezen. Zonder JavaScript blijft de carousel een horizontaal veegbare rij.

**Willekeurig grid:** de homepage toont 6 en `/werk/` 9 willekeurige projecten (`ShuffleGrid.astro`), onder elk project staan 3 willekeurige andere. Zonder JavaScript zie je de eerste N op volgorde. Alle beelden zijn vierkant (1:1, uitgesneden met `object-fit: cover`), ook op mobiel.

Het veld `featured` wordt niet meer gebruikt: de homepage kiest willekeurig uit alle projecten.

## Afbeeldingen

De cases verwijzen nu nog naar de afbeeldingen op de oude WordPress-site, zodat je meteen een preview ziet. **Voordat de oude site offline gaat**, draai op je eigen computer:

```bash
npm run images
```

Dat downloadt alle afbeeldingen naar `public/images/cases/` en past de bestanden in `src/content/cases/` aan naar lokale paden. Controleer daarna of het gelukt is.

## Contactformulier

Het formulier gebruikt Netlify Forms (`data-netlify="true"`, met honeypot). Na de eerste deploy verschijnen inzendingen in Netlify onder *Forms*; stel daar een e-mailmelding in. Succes stuurt door naar `/bedankt/` (NL) of `/en/thanks/`.

## Live zetten op Netlify

1. Push dit project naar een Git-repository.
2. In Netlify: *Add new site → Import from Git*. Build command `npm run build`, publish directory `dist` (staat al in `netlify.toml`).
3. Test op de Netlify-preview-URL.
4. Domein: stel `www.basvanderpaardt.com` in als primair domein en voeg `basvanderpaardt.com` en `vanderpaardt.com` toe als aliassen; Netlify stuurt aliassen door naar het primaire domein.
5. **E-mail:** het adres bas@vanderpaardt.com staat op het domein vanderpaardt.com. Als je de DNS naar Netlify verplaatst, neem dan alle bestaande MX-, SPF-, DKIM- en andere mailrecords over, anders valt je mail uit.
6. Controleer de redirects in `public/_redirects` tegen de oude URL's en zet pas daarna het oude WordPress-hosting uit. Bewaar eerst een backup.

## Nog te doen (inhoud)

- **Nieuw aanbod voor het AI-tijdperk.** Uit je projectomschrijving blijkt dat dit de kern van de herbouw is, maar ik heb er niets over verzonnen. Zodra je weet wat je aanbiedt, hoort er een eigen sectie bovenaan de homepage en een aparte pagina bij (`src/components/HomePage.astro`, teksten in `ui.ts`).
- **Beelden en geeltjes.** Elke case heeft nu één beeld met een korte conceptnotitie van mij (afgeleid van de oude tekst). Voeg meer beelden toe onder `images:` en schrijf je eigen commentaar per beeld.
- **Cases uitschrijven.** De teksten zijn korte samenvattingen in mijn woorden, gebaseerd op wat op de oude pagina's stond. Vervang ze door je eigen verhaal: opdracht, rol, aanpak, resultaat. Shiatsu Congress, BLAD, Promiss en Copernicus zijn nog bijna leeg.
- **Engelse vertalingen** (ook van de klantquotes) zijn conceptvertalingen van mij; laat ze nakijken. De Nederlandse quotes zijn licht ingekort of genormaliseerd ten opzichte van de oude site.
- **Over-pagina** is kort. De oude Over-pagina heeft mogelijk meer (en een foto/logo) dat hier nog niet in zit.
- **Lettertypen:** Zwitsers, dus Helvetica/Arial (systeemfonts) voor alles; alleen het geeltje gebruikt Caveat via `@fontsource/caveat` (zelf gehost, geen Google-verzoek). Wil je Inter (zoals in Figma), installeer `@fontsource-variable/inter` en importeer die in `Base.astro`.
