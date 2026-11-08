---
title: "REST through EmbargoGate"
description: "Resources, methods, status codes and errors, explained with the EmbargoGate API."
pubDatetime: 2026-11-07T21:45:00+01:00
tags:
  - api
  - rest
  - embargogate
draft: false
---

## Introduction

401 vs. 403: let's say a client has a valid token but lacks the correct scope. Which code would they get? We'll look at this later in the status codes section. This post will look at Representational State Transfer (REST) architecture as it applies to the EmbargoGate Application Programming Interface (API) with respect to resources, methods, status codes, and errors. The EmbargoGate API is a reference specification, and not a real product.

## Resources: the nouns

According to Arnaud Lauret in _The Design of Web APIs_, "a resource can be anything and can be represented in requests or responses... HTTP methods allow retrieving (GET) and sending (POST) resources, among other basic interactions."

In the case of the EmbargoGate API, the resources are represented as JavaScript Object Notation (JSON). There are three resources: software bills of materials (SBOMs) `/sboms`, `/advisories`, and `/webhooks`. The paths hold nouns and IDs and never verbs as the Hypertext Transfer Protocol (HTTP) method carries the verb, so that the path only has to name the thing, or object which the verb acts on. For example, EmbargoGate will not include "disclose" in a path: `POST /advisories/EG-2026-0042/disclose`. Instead, the HTTP method instructs the API to create a new transition, which moves the advisory to its next state. The target state is carried in the JSON payload: `POST /advisories/EG-2026-0042/transitions`.

## Methods: the verbs

The only HTTP methods used here are `GET`, `POST`, and `DELETE`. Neither `PUT` nor `PATCH` is used. This is because state changes have to go through the state machine, and exposing `PUT` or `PATCH` could let clients edit advisories directly. This could skip the transition rules, the per-transition scopes, and the audit log. `/transitions` exists to stop exactly this issue.

### Safe vs. idempotent

- Safe: is defined as read-only, so GET is read-only. EmbargoGate may write a log entry, but the client didn't ask for it, so GET is still safe.

- Idempotent: Sending the same request several times has the same effect on the server as sending it once. From the Latin, _idem_ means the same, and _potent_ means power in the mathematical sense as in 1 to the power of 2: 1² = 1³ = 1. An _idempotent_ value stays the same no matter what power you raise it to. Applying the operation again changes nothing, and HTTP borrowed the idea.

So, if the connection drops during `DELETE /webhooks/{webhook_id}`, then you would still be able to resend the request, because in this case, something can only be deleted once. Once it is gone, requesting again will not change anything on the server. The resend may return a 404, but this is still idempotent because idempotency is about the effect on the server. However, if it drops during `POST /advisories`, then resending could create a duplicate advisory.

The table below shows three examples taken directly from the EmbargoGate documentation and categorizes them using the criteria defined above:

| Method | Safe? | Idempotent? | EmbargoGate example                     |
| :----- | :---- | :---------- | :-------------------------------------- |
| GET    | Yes   | Yes         | `/sboms/{sbom_id}`                      |
| POST   | No    | No          | `/advisories/{advisory_id}/transitions` |
| DELETE | No    | Yes         | `/webhooks/{webhook_id}`                |

For more information, see the official Request for Comments (RFC) documents published by the Internet Engineering Task Force (IETF) that define the HTTP protocol, rules, and specifications for how the internet works, in particular [RFC 9110, section 9.2](https://www.rfc-editor.org/rfc/rfc9110#section-9.2).

## PUT vs. PATCH

`PUT`: this method replaces the whole resource. However, if you forget something in your replacement that was present in the original, then that information is lost when the resource is overwritten. It is not safe, but is idempotent.

`PATCH`: this method is used to modify only part of a resource. It is not safe, and it is not guaranteed to be idempotent. Repeating the same patch can change the result depending on what it asks for. For example, "add 1" gives a different result each time, while "set this field to X" doesn't.

So why does EmbargoGate use neither of these methods? Because submissions are fixed records. For example, when an SBOM is submitted, EmbargoGate records its Secure Hash Algorithm (SHA-256) digest, a fingerprint of its content. The submitter also signs it with Sigstore Cosign, which proves who submitted it. Any edit, even a minor one, would change the SHA-256 digest, so it would no longer match the recorded one, and the signature would be invalidated. And as the Methods section showed, state changes only go through the state machine.

## Status codes: what went wrong, and whose fault is it?

### 4xx vs. 5xx

All status codes in the 4xx range (400 to 499) indicate a client/consumer error. According to Lauret: "The server can't process requests due to problems such as unparsable data, unhandled HTTP methods, missing properties, business logic checks, or insufficient rights."

Error status codes in the 5xx range (500 to 599) point to server or implementation errors. According to Lauret these are: "...caused by unexpected problems (a bugged implementation throwing a null pointer exception or an inaccessible database server, for example) or planned unavailability."

### 400 vs. 422

A 400 points to a malformed request, in other words: "I can't read this," for example, broken JSON. Whereas a 422 indicates that the request can be read, for example, the JSON is valid, but it failed a check due to an invalid signature, a missing required field, or content that doesn't match the schema; so "I can read it, but the content fails a check."

### 401 vs. 403

So the answer to the question from the introduction: a client has a valid token but lacks the correct scope. Which code would they get? The answer is 403. The 401 basically asks: "Who are you?" (missing or invalid credentials), whereas 403 says: "I know who you are, and the answer is no." One EmbargoGate twist: a missing client certificate never gets an HTTP status at all, because the Transport Layer Security (TLS) handshake fails first.

### 404

A caller outside the coordination group requests an embargoed advisory, what error status code do they get, a 404 or a 403? They would get a 404, stating that the resource does not exist. Why is that? A 403 would confirm that the resource exists and that the user does not have sufficient rights to access it, which in itself is a leak. Knowing an advisory exists tells an attacker there's an unpatched vulnerability to look for (see [Part 2](/posts/coordinated-disclosure-pt2/)). This has to apply in every non-public state: a response that changed from 403 to 404 would give the advisory away.

### 409 vs. 422

A coordinator tries to move an advisory from `SUBMITTED` straight to `DISCLOSED`. Why 409? The request conflicts with the advisory's current state, and the same request would be valid once the advisory is `EMBARGOED`. Why not 422? 422 is for content that fails a check no matter what state the advisory is in, like an invalid signature or a schema mismatch.

## Errors: problem details (RFC 9457)

A status code alone is not enough information, for example, if just 403 was returned without a description, how would the user know which scope is missing? RFC 9457 defines a standard error format called problem details. Here's the 403 from EmbargoGate's Errors page:

```json
{
  "type": "https://docs.andrewkelly.de/errors/insufficient-scope",
  "title": "Insufficient scope",
  "status": 403,
  "detail": "This operation requires scope 'advisory:disclose'.",
  "instance": "/v1/advisories/EG-2026-0042/transitions",
  "required_scope": "advisory:disclose"
}
```

RFC 9457 defines five standard fields. RFC 9457 replaced RFC 7807 in 2023. In plain words:

| Field      | Answers                                                                                |
| :--------- | :------------------------------------------------------------------------------------- |
| `type`     | What kind of problem is this? (a URL, or Uniform Resource Locator, that identifies it) |
| `title`    | A short, human-readable name for it                                                    |
| `status`   | The HTTP status code, repeated in the body                                             |
| `detail`   | What went wrong this time                                                              |
| `instance` | Which request or resource it happened on                                               |

`required_scope` is not one of the five. The RFC lets APIs add their own fields ("extension members"), so this would be a way to ensure that the relevant information is included.

### What errors should not reveal

Errors should never reveal internal details like stack traces, database errors, file paths, or anything else that might help an attacker map your system. This is exactly what we are avoiding with the 404 code: we simply deny the existence of the advisory instead of disclosing indirectly that it exists.

## Wrap-up

401 vs. 403: let's say a client has a valid token but lacks the correct scope. Which code would they get? You should now know that the answer is 403 and, more importantly, why. This post was a quick journey into the resources, methods, status codes and errors used by EmbargoGate. EmbargoGate's design (signed records, a state machine) decided which methods it needs.

Coming up next week: OpenAPI 3.1, the contract behind the docs.
