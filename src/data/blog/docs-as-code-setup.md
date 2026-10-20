---
title: "My docs-as-code setup: blog + API docs with automated publishing"

description: "How I run an Astro Paper blog and an Astro Starlight docs site with GitHub Actions + Pages deploying on every push."

pubDatetime: 2026-10-17T17:45:00+02:00
modDatetime: 2026-10-20T12:00:00+02:00
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
- **Docs site (Astro Starlight):** the reference specification for [EmbargoGate API](https://docs.andrewkelly.de/), a portfolio project modelling a Coordinated Vulnerability Disclosure (CVD) and SBOM ingestion engine aligned with the EU Cyber Resilience Act. It covers STRIDE threat modeling, the advisory state machine, endpoint scopes, and RFC 9457 errors, structured as Start here → Concepts → Guides → Reference → Help.

## Why this setup

I’m optimizing for three things:

1. **Clarity:** writing should be easy to read, easy to maintain, and easy to review.
2. **Reproducibility:** everything is tracked in Git for reliable, repeatable builds; (same input → same output).
3. **Proof of work:** each post and docs page is an artifact I can point to in applications and client conversations.

## The workflow

The publishing pipeline runs on a lightweight docs-as-code loop:

- **Authoring (VS Code):** Draft and structure Markdown documentation and code examples locally.
- **Verification (Local Dev Server):** Preview Starlight and Astro builds locally to check navigation, layout, and rendering before committing.
- **Deployment (GitHub Actions → GitHub Pages):** Small, atomic Git commits trigger automated builds and deploy directly to production.

## What I’m documenting: EmbargoGate API

Rather than writing abstract notes about documentation, I’m documenting a reference security API called **EmbargoGate**—a coordinated vulnerability disclosure (CVD) and SBOM/VEX ingestion service designed around EU Cyber Resilience Act (CRA) requirements.

Each post on this blog pairs with a concrete section of the [EmbargoGate API documentation](https://docs.andrewkelly.de/), covering:

- **API design & error handling:** REST semantics, HTTP status codes, and RFC 9457 error payloads.
- **Security architecture:** OAuth 2.0 scopes, time-bound ABAC for embargoed data, mTLS, and HMAC webhook verification.
- **Domain & compliance:** Coordinated vulnerability disclosure state machines, SBOM/VEX ingestion, and STRIDE threat modeling.

## What’s next

Coming up:

- **A STRIDE threat model for EmbargoGate:** pairs with [Security considerations](https://docs.andrewkelly.de/concepts/security-considerations/)
- **Documenting authentication without lying to readers:** pairs with [Authentication](https://docs.andrewkelly.de/authentication/)

If you’re hiring for API/security documentation work in Germany, or you need help making complex technical systems readable, this site will show exactly how I work.

---

**Links**

- EmbargoGate API docs: [docs.andrewkelly.de](https://docs.andrewkelly.de/)
- GitHub: [github.com/KellyAndrew](https://github.com/KellyAndrew)
