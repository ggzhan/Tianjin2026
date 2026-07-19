# OTTV Tianjin 2026

Public camp diary and password-protected handbook for the OTTV training camp in Tianjin.

**Site (GitHub Pages):** https://ggzhan.github.io/Tianjin2026/

## Local setup

```bash
cp .env.example .env   # set CAMP_PASSWORD
npm install
npm run dev
```

Open the local URL Astro prints (with base path `/Tianjin2026/`).

- **Public:** `/`, `/blog`, `/lager`
- **Private:** `/intern` (password from `CAMP_PASSWORD`)

## Environment variable

| Name | Where | Purpose |
|------|--------|---------|
| `CAMP_PASSWORD` | `.env` locally, GitHub Actions secret for Pages | Shared password for `/intern` |

At build time the password is hashed (SHA-256) into the static site. The plaintext is never committed.

## Deploy to GitHub Pages

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**  
   (Do **not** use “Deploy from a branch” on `main` — that runs Jekyll on the Astro source and fails.)
2. **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `CAMP_PASSWORD`
   - Value: the shared camp password
3. Push to `main` (or run the **Deploy GitHub Pages** workflow manually)

The workflow builds a static site with `base: /Tianjin2026` and deploys the `dist/` folder.

## Tagebuch entries

Add Markdown under `src/content/blog/`:

```md
---
title: "Titel"
description: "Kurztext für die Übersicht"
pubDate: 2026-07-25
author: "Name oder Lager-Team"
cover: "/Tianjin2026/images/beispiel.jpg"
coverAlt: "Kurzbeschreibung"
---

Text…

![Foto](../images/beispiel-2.jpg)

<video controls src="../videos/beispiel.mp4"></video>
```

## Note on password protection

GitHub Pages is static hosting. The intern pages are gated in the browser; this keeps casual visitors out, but is not strong server-side security.
