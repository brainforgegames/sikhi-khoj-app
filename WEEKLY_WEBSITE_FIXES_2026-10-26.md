# Weekly website fixes — 2026-10-26

Prepared on draft branch `bcc/task-sikhi-weekly-website-fixes-20261026`; changes remain uncommitted for the consolidated owner-approved weekly website update.

Reviewed `QUALITY_AUDIT.md` on `bcc/task-sikhi-website-audit-20261024` and actual website source. Confirmed quiz language changes reset the answer lock while retaining score, and signup had no timeout or contact syntax validation.

## Changes

- Quiz translation retains selected answer, feedback, score and completion. Restart clears attempt state. Completion event fires once per attempt rather than on result translation.
- Selected email gets basic syntax validation; selected WhatsApp accepts optional leading plus, spaces, parentheses and hyphens with 7–15 digits. This is a conservative client check, not proof of deliverability or server validation. Unselected contacts are omitted. Invalid fields receive focus and a status description.
- A 15-second deadline covers fetch and response JSON, aborts the request, restores submission and retains values on failure. A pending guard prevents duplicate submissions; switching language retains the sending label. Localized messages explain retry, uncertain delivery and the existing support email. Server messages are not inserted as HTML. Invalid JSON no longer reports success.
- Existing endpoint, branding, support address, consent and analytics configuration are unchanged. Shared script cache version is updated for the eventual batch.

## Validation evidence

2026-10-26: Node v24.20.0.

- `node tests/smoke.mjs`: PASS, preserving all existing checks and importing `tests/behavior.mjs`.
- Deterministic VM checks execute actual app code with DOM/storage/network doubles and a manually advanced clock: unanswered/answered/completed language switches, wrong/repeated answers, normal perfect score, restart, completion counts; invalid/missing selected contacts and consent; each contact-channel combination; omitted unused fields; offline, HTTP 400/429/500, malformed JSON, success/duplicate and retry; fetch/body stalls, cancellation, concurrent submit guard, pending translation, late response isolation, field focus and error attributes.
- `node --check app.js`, `node --check analytics.js`, `git diff --check`: PASS.
- No external network requests or real forms were used by behavioral tests. No analytics configuration changes, commits, pushes, PRs, merges, deployment or publishing.

## Limits and next checks

VM doubles do not establish real browser rendering, native DOM event behavior, mobile keyboard behavior, keyboard navigation or screen-reader announcements. Browser/device checks in Punjabi and English remain for the weekly batch, including long retry copy on narrow screens and language switching while sending. Existing modal/focus audit findings outside this task remain open.

Backend source is absent. Existing configured endpoint and object JSON/duplicate response convention were retained, with malformed responses treated as unconfirmed. Server validation, CORS, duplicate suppression and real delivery are not verified; no backend endpoints were invented. The timeout bounds client waiting, not server processing, so retry copy does not claim a timed-out request failed to arrive.
