<img width="605" height="345" alt="Blog banner" src="https://github.com/user-attachments/assets/657179fb-e11f-4a04-a67d-e973cfc0536b" />

# Portfolio Blog (Astro + Astro Paper)

[![Blog](https://img.shields.io/badge/blog-andrewkelly.de-blue)](https://www.andrewkelly.de/)
[![CI](https://github.com/KellyAndrew/my-site/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/KellyAndrew/my-site/actions/workflows/ci.yml)
[![Deploy](https://github.com/KellyAndrew/my-site/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/KellyAndrew/my-site/actions/workflows/deploy.yml)
[![Built with Astro](https://img.shields.io/badge/built%20with-Astro-ff5d01)](https://astro.build)

This repository contains my portfolio/blog site built with Astro (Astro Paper). It’s part of a two-site docs-as-code setup:

- **Blog/portfolio (this repo):** short technical notes + portfolio material
- **Docs site (separate repo):** https://docs.andrewkelly.de (Astro Starlight)

The site deploys automatically to **GitHub Pages** via **GitHub Actions** on every push to `main`.
Custom domains are configured; the `.eu` domain is deactivated.

---

## What this repo is for

- Publish clear, practical writing on **APIs**, **documentation systems**, and **security-adjacent** topics
- Keep content versioned and reviewable (Markdown + Git)
- Maintain a simple pipeline: **edit → preview locally → commit → push → deploy**

---

## Tech stack

- Astro + Astro Paper
- Markdown posts with frontmatter (`src/data/blog/`)
- Tailwind CSS (via the theme)
- GitHub Actions → GitHub Pages

---

## Local development (Windows / PowerShell)

From the repo root:

    npm install
    npm run dev

Stop the dev server:

    Ctrl + C

Build locally:

    npm run build
    npm run preview

---

## Content structure

- `src/data/blog/` — blog posts (Markdown + frontmatter)
- `src/pages/` — pages (e.g., `about.md`)
- `public/` — static assets

---

## Publishing

    git add .
    git commit -m "Describe change"
    git push

A GitHub Actions workflow builds and deploys the site to GitHub Pages.

---

## Notes

This is a working space, not a marketing surface. Content evolves as I learn, build, and refine the docs-as-code workflow.

---

## Links

- Main site: https://andrewkelly.de
- Docs: https://docs.andrewkelly.de
- GitHub: https://github.com/KellyAndrew
- Contact: hello@andrewkelly.de
