---
title: "Coordinated disclosure in plain English - Part one"
description: "What coordinated vulnerability disclosure is, who's involved, and why embargoes matter."
pubDatetime: 2026-10-25T15:00:00+01:00
tags:
  - security
  - cvd
draft: false
---

### The scenario

Let me set the scene for you. A software researcher discovers a serious vulnerability in widely used software. They have three options:

- **Option 1:** post the discovery publicly today.
- **Option 2:** tell nobody.
- **Option 3:** tell the vendor privately and agree when to go public.

**That third option is Coordinated Vulnerability Disclosure (CVD) in a nutshell.**

### The three models

The options I just listed are also commonly referred to as the disclosure scenarios:

#### Full disclosure:

This is complete transparency. All information on discovered vulnerabilities is shared with the public. This would usually also include the release of proof of concept exploit code and a report describing the problem. Sometimes, finders will either not inform the vendor before going public or only inform a vendor as they go public with the problem. This is often described as serving the greater good, as it allows optimal responses given all the information. Having all the information available means you can also reproduce the issue. Vendors sometimes publish full details themselves once a fix is out.

#### No disclosure:

Given the above this may sound counterintuitive, however, there can also be valid reasons for this approach. Non-disclosure agreements (NDAs) protect trade secrets and limit bad press. You don't always want people looking behind the curtain. Of course, the fewer people know about the issue, the less likely an exploit will be, that said, no one can really say what the impact of non-disclosure actually is, because ahem, mum's the word!

#### Coordinated disclosure:

If full disclosure and no disclosure are the two extremes of the same spectrum, then coordinated disclosure lies right in the middle of the two. The goal here is to make sure that anyone affected by a vulnerability has all the information they need to make informed decisions about their actions to secure their systems. The public and users of vulnerable products deserve to be informed too. Ideally, everyone involved coordinates and cooperates to protect the public, with the right approach this can be a public relations win for the vendor. Coordinating the release of information allows the users of a product to take sufficient action to protect themselves, while simultaneously, delaying reverse engineering and exploit development long enough for a fix to be developed and deployed.

### The problem

Software vulnerabilities and compromised systems are often synonymous with chaos and expensive remediation. The goal should always be to reduce the threat that any software vulnerabilities present to us as individuals, to businesses and to society and the state at large. Vulnerabilities are software conditions or behaviors that can be exploited by anyone with a vested interest in achieving goals at odds with the intended use of these systems, software or devices. People exploiting them are usually called attackers or adversaries.

### Managing the problem is complicated

Informing the public of a vulnerability/problem is not as easy as it may at first seem. Offering a solution or specific course of action to a problem, can often result in giving hackers an advantage as there will always be somewhat of a time lag until the problem or vulnerability is fixed. During this critical time, adversaries can wreak havoc by exploiting these vulnerabilities. This makes managing vulnerability disclosures very difficult.

The complicated nature of managing these types of issues is a direct result of their incomplete, contradictory and changing requirements which are also often difficult to recognize. Before we go any further, I would like to point out that the EmbargoGate project is a reference specification and not a live product. However, the approach and methodologies used in this project present a valid solution to these types of problems.

> "Coordinated vulnerability disclosure (CVD) is a process for reducing adversary advantage while an information security vulnerability is being mitigated. CVD is a process and not an event. Releasing a patch or publishing a document are important events within the process, but do not define it."
>
> — CERT Coordination Center, [_The CERT Guide to Coordinated Vulnerability Disclosure_](https://certcc.github.io/CERT-Guide-to-CVD/)

### Who is involved?

**Finder/Discoverer**
This is the person, or organization that identifies the vulnerability.

**Reporter**
The individual or organization that informs the vendor of the vulnerability.

**Vendor**
The individual or organization that created or maintains the product that is vulnerable. Larger vendors handle reports through a Product Security Incident Response Team (PSIRT).

**Coordinator**
An individual or organization that enables the coordinated response process. This could also typically be the Computer Emergency Response Team / Coordination Center (CERT/CC) or a national Computer Security Incident Response Team (CSIRT), for example in Germany this would be the Computer Emergency Response Team for Federal Authorities (BSI's CERT-Bund).

**Deployer**
The individual or organization that must deploy a patch or take other remedial action.

### Map of CVD phases to CVD roles

![Timeline of a coordinated disclosure: reporter, vendor, coordinator and users, with the embargo period marked](/images/cvd-timeline.png)

### What exactly is an embargo?

We've all seen vague news reports that only seem to give cursory details about a crime, this is so that the criminals or perpetrators cannot gain any insight into what detectives already know or are about to do or discover, because this information could potentially give the criminal(s) an advantage to keep one step ahead of their pursuers. An embargo is essentially the same thing, except for computer software. Embargoes are agreed periods of confidentiality that fall between the report and publication phases. This gives security teams (usually a subset of a development team) the time they need to devise a fix and test that it works. This takes time and should not be rushed, you need to know that your patch will work and that you fixed the problem. During this sensitive period, the last thing you want is for any specific information to be leaked that could potentially help the adversary and allow them to further exploit the vulnerability. It is not unusual to see 90 days for this phase, this is a norm rather than a specific rule.

#### Constraints

Confidentiality is key here, vendors and coordinators have to ensure that leaks are prevented. You might think this sounds obvious, but leaks can take many forms including: public tweets, blog posts, code commits and even casual chats about the bug while the embargo is active. Even within the vendor's company, this can take the form of a 'need to know basis' which is why the developers working on a fix are usually a subset of the overall development team.

### What CVD is not

1. NOT a vulnerability database or identifier:
   - CVD is the human process of cooperating on a fix. A Common Vulnerabilities and Exposures (CVE) is just the identifier assigned to the vulnerability, usually made public alongside the advisory.
2. NOT an absolute guarantee of a patch:
   - Breakdowns in cooperation can occur, for example, a vendor might decide a bug is working as intended or they might lack the resources to fix it.
3. NOT a legally binding contract:
   - Built on trust, ethics and industry etiquette and while it can be formalized into a company's policy it remains a voluntary agreement that runs on good communication.
4. NOT a bug bounty:
   - Think of CVD like a communication framework for the safe reporting of vulnerabilities. You can practice and be a part of CVD without money ever changing hands, whereas a bug bounty would traditionally sit on top of that framework offering financial incentives to researchers for their discoveries.
5. NOT full disclosure:
   - CVD actively restricts the immediate spread of information to protect users while a fix is being prepared.

### Coming up next week...

Next week, I will be taking a closer look at REST:

- REST through EmbargoGate: resources, methods, status codes and errors
