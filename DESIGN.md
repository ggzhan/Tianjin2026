# Design System

## Visual Theme

Swiss youth sport meets China summer travel — kinetic but readable. Dual-mode companion: public storytelling and private handbook share one voice. Pure white canvas; deep violet carries brand authority; vermillion accents add ball-bounce play. Light mode only (parents checking phones in bright kitchens and hotel lobbies).

## Colors

Strategy: **Full palette** — violet primary + vermillion accent on pure white.

| Role | OKLCH | Use |
|------|-------|-----|
| `--bg` | `oklch(1.000 0.000 0)` | Page background |
| `--surface` | `oklch(0.965 0.012 294)` | Soft panels, alternate sections |
| `--ink` | `oklch(0.220 0.035 294)` | Body text |
| `--muted` | `oklch(0.480 0.025 294)` | Secondary text (≥3.5:1) |
| `--primary` | `oklch(0.400 0.140 294)` | Brand, private mode chrome, key UI |
| `--accent` | `oklch(0.620 0.185 35)` | CTAs, highlights, playful sparks |
| `--primary-ink` | `oklch(1.000 0.000 0)` | Text on primary fills |
| `--accent-ink` | `oklch(1.000 0.000 0)` | Text on accent fills |

## Typography

- **Display:** [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) — slightly quirky, sport-camp energy
- **Body:** [Atkinson Hyperlegible](https://fonts.google.com/specimen/Atkinson+Hyperlegible) — trust and readability for parents
- Scale: fluid `clamp()`, ≥1.25 ratio; body max ~70ch
- Headings: `text-wrap: balance`; prose: `text-wrap: pretty`

## Layout

- Max content width ~72rem; article prose ~42rem
- Public home: one composition hero (brand + one line + dual CTAs + full-bleed image)
- Private: dense but scannable — sticky subnav, time-block schedule, address blocks
- Cards only for interactive clusters (blog post links, login form)

## Motion

- 2–3 intentional motions: page enter stagger on hero, soft mode-switch cue into `/intern`, blog list reveal
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)
- Honor `prefers-reduced-motion: reduce`

## Components

- **Mode chip:** Public / Intern toggle in header
- **Password gate:** Simple form, shared camp password
- **Schedule day:** Date header + time rows
- **Phrase row:** DE / 中文 / Pinyin
- **Blog card:** Title, date, excerpt — no heavy chrome
