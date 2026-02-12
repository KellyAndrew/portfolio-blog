---
title: "My docs-as-code setup: blog + API docs with automated publishing"

description: "How I run an Astro Paper blog and an Astro Starlight docs site with GitHub Actions + Pages deploying on every push."

pubDatetime: 2026-02-08T16:00:00+01:00
modDatetime: 2026-02-08T17:35:10+01:00
tags:
  - technical-writing
  - api-documentation
  - security
  - docs-as-code
  - astro
  - github
---

I’m building a public portfolio focused on **API documentation and security-adjacent technical writing** in Germany.

This site is deliberately simple: fewer moving parts, more shipping. The goal is to publish real work, in public, on a repeatable workflow.

## What I’m building

I’m running two sites from two separate GitHub repos:

- **Portfolio/blog (Astro Paper):** the place for posts, case studies, and project notes.
- **Docs site (Astro Starlight):** a structured API documentation site (Start here → Concepts → Guides → Reference → Help).

The blog header links directly to the docs site, so anyone reading a post can jump straight to the “show me the docs” part.

## Why this setup

I’m optimizing for three things:

1. **Clarity:** writing should be easy to read, easy to maintain, and easy to review.
2. **Reproducibility:** everything is tracked in Git for reliable, repeatable builds; (same input → same output).
3. **Proof of work:** each post and docs page is an artifact I can point to in applications and client conversations.

## The workflow

I use a simple mental model so I don’t get lost:

- **FILE:** write/edit in VS Code
- **TERMINAL:** run the dev server and Git commands
- **BROWSER:** preview locally and verify the live result

And the publishing pipeline has three layers:

- **Content** → write Markdown and assets
- **Local build** → preview with a dev server
- **Deployment** → push to GitHub → GitHub Actions → GitHub Pages

Git is my checkpoint system: small commits, frequent pushes, low risk.

## What I’ll publish here

This blog will focus on practical work, including:

- API documentation patterns (reference vs guides, example-first docs, error taxonomy)
- Security writing fundamentals (threat modeling notes, authN/authZ clarity, secure defaults)
- Docs-as-code workflow notes (versioning, review, information architecture)
- Tooling and process write-ups (what worked, what didn’t, what I changed)

I’m also building out the docs site in parallel, so posts can link to concrete pages rather than abstract ideas.

## What’s next

Over the next few weeks I’ll publish:

- A short “Start here” overview of the docs site structure and navigation
- A case study post: how I set up two Astro sites with automated publishing
- A security writing post: documenting authentication flows clearly (without lying to readers)

If you’re hiring for API/security documentation work in Germany, or you need help making complex technical systems readable, this site will show exactly how I work.

---
**Links**

- Docs: [https://docs.andrewkelly.de/]
- GitHub: [https://github.com/KellyAndrew]
