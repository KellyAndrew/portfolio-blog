---
title: "Coordinated disclosure in plain English - Part two"
subtitle: "Why embargoes fail"
subtitleLink:
  text: "Read Part one"
  href: "/posts/coordinated-disclosure/"
description: "..."
pubDatetime: 2026-10-31T15:00:00+01:00
tags:
  - security
  - cvd
  - embargogate
draft: true
---

## What does the gentlemen's agreement run on?

As Part one explained, Coordinated Vulnerability Disclosure (CVD) is a process, not a legally binding contract. It is based on trust, ethics and industry etiquette. In principle, it runs on good communication; in practice, on tools like spreadsheets and email encrypted with Pretty Good Privacy (PGP). The whole process only works if everyone does everything right, so what happens when someone doesn't?

## Here's how embargoes fail

An embargo is a deal that boils down to this: researchers report vulnerabilities to vendors. In return for the researcher's silence, the vendor agrees to patch the problem before anyone goes public.

### 1. Active exploitation

A sophisticated adversary is already using the bug when the vendor receives the report. Public safety overrides the agreement and the embargo is terminated immediately to give defenders a chance to protect themselves or limit the damage. Staying silent only serves to protect the adversaries. This is exactly the situation that the EU Cyber Resilience Act (CRA) now regulates: the vendor has 24 hours to report it to the authorities.

### 2. Vendor foot dragging and ghosting

Whether intentionally or not, vendors drag their feet responding to a report and exceed the agreed deadline, often 90 days, sometimes hoping to save face or minimize the problem. Vendors respond with generic automated emails or request indefinite extensions without demonstrating any progress. They got the researcher's silence, but didn't fix the bug. If the deadline passes, the researcher can force a full disclosure. Otherwise, users would not know there was a problem and this would leave them open to being exploited.

### 3. Patch-gapping and open source leaks

Even when the vendor keeps the deal, the fix itself can give the bug away. When code is open source, for example Linux or Chromium, vendors are obliged to publish the fix, so a leak can occur before the end of the embargo. Adversaries watch public code commits for security-related changes like patches. They then compare the old code to the new code to work out what the vulnerability was and build an exploit. In short, the solution leaks the problem.

### 4. Over-sharing and human error

Typically, this is information drifting outside of the need-to-know circle, whether intentionally or not, resulting in a leak. It can start with something as innocent as a spreadsheet shared too widely or a comment to a customer. Social media makes accidental disclosures all too easy. Ideally, there should be clearly defined groups involved in the CVD process.

### 5. Legal and PR retaliation

Instead of reacting appropriately to reports of a vulnerability, some vendors leverage the legal system and send cease and desist letters or threaten researchers with Germany's "hacker paragraph" (§202c of the German Criminal Code, or _Strafgesetzbuch_), which criminalizes preparing to spy on data. Not surprisingly, under threat of legal action, researchers may pull out of the embargo to save themselves, sometimes dropping the details anonymously to journalists. This can result in the "Streisand effect" whereby the vendor's own move backfires and the story gets bigger.

As you can see, it is a delicate job balancing trust, discipline and timing - there are just so many moving parts. The failures used to cost a vendor its reputation, and now they're a legal matter.

## The EU & the Cyber Resilience Act (CRA)

While it has always been critical to deal with these issues in a confidential and timely manner, recent legislation now obligates manufacturers to report actively exploited vulnerabilities:

> **EU Cyber Resilience Act (CRA) – Article 14 Reporting Mandates**
>
> Source: [Regulation (EU) 2024/2847, Article 14](https://eur-lex.europa.eu/eli/reg/2024/2847/oj) | Effective Date: **September 11, 2026**
>
> - **The 24-Hour "Early Warning" Trigger**
>   - Manufacturers must send an early warning within 24 hours of becoming aware of an actively exploited vulnerability in their product. It goes via the single reporting platform to the national Computer Security Incident Response Team (CSIRT) acting as coordinator, and the European Union Agency for Cybersecurity (ENISA) receives it at the same time.
>   - This initial notification is required even if a patch or fix is not yet available.
> - **The 72-Hour Vulnerability Notification**
>   - A fuller notification must follow within 72 hours of becoming aware.
>   - It must give general information about the product, the general nature of the exploit and the vulnerability, any corrective or mitigating measures already taken, and what users can do to protect themselves.
> - **The 14-Day Final Report**
>   - A final report must be filed no later than 14 days after a corrective or mitigating measure is available.
>   - It must describe the vulnerability, including its severity and impact, any information about the malicious actor exploiting it (where available), and the security update or other fix.
> - **Applies to products already on the market**
>   - The reporting rules apply from September 11, 2026 to all products with digital elements within the scope of the CRA.
>   - Products already on the market are not exempt: the reporting rules also cover products placed on the market before December 11, 2027, when the rest of the CRA applies (Article 69(3)).

PGP inboxes and spreadsheets are good tools, but they can't reliably meet a 24-hour deadline, so the process needs guardrails that don't depend on someone remembering.
