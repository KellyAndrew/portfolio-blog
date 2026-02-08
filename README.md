# Portfolio Blog (Astro Paper)

This repository contains my personal portfolio/blog site built with Astro (Astro Paper theme).  
It’s part of a two-site docs-as-code setup:

- **Blog/portfolio (this repo):** short technical notes + portfolio material  
- **Docs site:** https://docs.andrewkelly.de (Astro Starlight, separate repo)

The site deploys automatically to **GitHub Pages** via **GitHub Actions** on every push to `main`.  
Custom domains are already configured; the `.eu` domain is deactivated.

---

## What this repo is for

- Publish clear, practical writing on **APIs**, **documentation systems**, and **security-adjacent** topics
- Keep content versioned and reviewable (Markdown + Git)
- Maintain a simple pipeline: **edit → preview locally → commit → push → deploy**

---

## Tech stack

- Astro + Astro Paper theme
- Markdown posts with frontmatter (stored in `src/data/blog/`)
- Tailwind CSS (via the theme)
- GitHub Actions → GitHub Pages

---

## Local development (Windows / PowerShell)

From the repo root:

```powershell
npm install
npm run dev
