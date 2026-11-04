---
title: "REST through EmbargoGate"
description: "Resources, methods, status codes and errors, explained with the EmbargoGate API."
pubDatetime: 2026-11-07T15:00:00+01:00
tags:
  - api
  - rest
  - embargogate
draft: true
---

<!--
DRAFT SKELETON. Delete every comment before publishing.
Target: 1,000–1,200 words. Budgets per section are rough.
Reading: Lauret (REST/HTTP design chapter + errors chapter), Madden ch. 2, RFC 9110 sections 9 and 15.
Interview question to rehearse: "PUT vs PATCH? 401 vs 403?"
-->

## Intro

<!--
~100 words.
- Hook: open with the interview question, or with what a reader can't do yet.
- Say plainly that EmbargoGate is a reference spec, not a live product.
- One sentence on what the post covers: resources, methods, status codes, errors.
-->

## Resources: the nouns

<!--
~150 words.
- What is a resource? (Lauret)
- EmbargoGate has three: /sboms, /advisories, /webhooks.
- Why do the paths hold nouns and IDs, never verbs?
- Spell out SBOM on first use.
-->

## Methods: the verbs

<!--
~250 words.
- EmbargoGate only uses GET, POST and DELETE (see the Endpoints page). No PUT, no PATCH.
- Small table: method | safe? | idempotent? | EmbargoGate example. Source: RFC 9110 section 9.2.
- Explain "safe" and "idempotent" in one plain sentence each.
- Question to answer yourself: why is a state change POST /advisories/{id}/transitions
  and not PATCH /advisories/{id} with {"state": "DISCLOSED"}?
  Hint: think about the audit trail, and about the state machine refusing shortcuts.
-->

## PUT vs. PATCH

<!--
~150 words. Your interview answer, in writing.
- PUT replaces the whole resource; PATCH changes part of it.
- Which one is idempotent by definition, and which one isn't?
- Close the loop: why doesn't EmbargoGate need either?
-->

## Status codes: what went wrong, and whose fault is it?

<!--
~300 words. The core of the post.
- 4xx = the client's problem, 5xx = the server's problem.
- 400 vs 422: malformed vs well-formed but wrong.
- 401 vs 403 (interview question): who are you? vs. you can't do that.
  EmbargoGate twist: a missing client certificate never gets an HTTP status at all (TLS handshake fails).
- 404 for an embargoed advisory outside your group: why hide that it exists? (Link to Part 2 / leaks.)
- 409: the Errors page has no 409. Decide: is an invalid state transition a 409 (conflict
  with current state) or a 422 (as the docs say now)? Pick one and argue it in 2 sentences.
-->

## Errors: problem details (RFC 9457)

<!--
~150 words.
- Spell out RFC on first use (Request for Comments).
- Status code alone isn't enough. Problem details give type, title, status, detail, instance.
- Use one example from the Errors page (403 missing scope is the shortest).
- One line: RFC 9457 replaced RFC 7807 in 2023.
- Madden ch. 2: what must an error message NOT reveal?
-->

## Wrap-up

<!--
~80 words.
- One-paragraph recap.
- Coming up next week: OpenAPI 3.1, the contract behind the docs.
- Don't add the hiring line or docs/GitHub links: PostDetails.astro renders them.
-->

<!--
DOCS FIXES THIS POST FEEDS (api-docs repo, do after the post):
- errors.md: description and Summary still say RFC 7807 → RFC 9457 (review #11).
- errors.md: add 409 to the Status codes table, or not, depending on your decision above.
- errors.md: 422 for a missing SBOM digest (review #3), new example or new type?
- Cross-link this post from the Endpoints and Errors pages.
-->
