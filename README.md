# OTTV Tianjin 2026

Website for the OTTV training camp in Tianjin: public blog for followers/parents, password-protected handbook for participants and families.

## Quick start

```bash
cp .env.example .env   # set CAMP_PASSWORD
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

- **Public:** `/`, `/blog`, `/lager`
- **Private:** `/intern` (shared password from `.env`)

## Tagebuch (Teilnehmer:innen)

Add Markdown files under `src/content/blog/`:

```md
---
title: "Titel"
description: "Kurztext für die Übersicht"
pubDate: 2026-07-25
author: "Name oder Lager-Team"
cover: "/images/tagebuch/beispiel.jpg"
coverAlt: "Kurzbeschreibung des Fotos"
---

Text…

![Foto](/images/tagebuch/beispiel-2.jpg)

<video controls src="/videos/beispiel.mp4"></video>
```

## Production

```bash
npm run build
npm run preview
```

Runs as a Node server (`@astrojs/node`). Set `CAMP_PASSWORD` in the host environment.
