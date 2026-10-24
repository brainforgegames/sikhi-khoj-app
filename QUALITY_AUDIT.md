# Sikhi Khoj website quality audit

Audit date: 2026-10-24. Baseline: `ea7c266501fba31b6d21e5edf8a820b24fd265f3`.

## Scope and method

Reviewed the actual buildless website: `index.html`, `styles.css`, `app.js`, `analytics.js`, `config.js`, `README.md`, assets and `tests/smoke.mjs`. The initial worktree was clean. No Unity project, backend implementation, package manifest or browser test suite is present. This is a code and UX audit only; no product code or production settings were changed.

“Verified” below means direct source evidence or isolated JavaScript execution, explicitly identified per finding. No rendered browser, physical mobile device, keyboard session, screen reader, live GA traffic or live signup endpoint was tested. Layout and assistive-technology outcomes therefore remain untested unless stated as source behavior. No contact data was submitted, no external scripts were loaded by audit checks, and no deployment, commit, push or PR was performed.

## Priority findings

### P1 — Quiz language switching corrupts scoring and completion (verified by isolated execution)

Evidence: `app.js:70-90`, `115-120`, `137-150`, `174-197`. Every language selection calls `renderQuestion()`, which clears `answered` while retaining `score` and `current`. Answer question 1 correctly, change language, then answer it correctly again: score becomes 2 while current remains 0. Repeating allows a score above 5. At completion, changing language replaces the result with question 5, hides Retry and permits another score increment and completion event. A regular five-answer perfect run correctly produces 5/5.

Next task: preserve selected answer, feedback and completion state when translating. Add regression coverage for switching before/after answers, repeated switches, result switching, wrong answers, retry and one completion event per attempt. Acceptance: score always stays between 0 and 5; translation never grants another answer or removes completion.

### P1 — Language modal lacks keyboard containment and focus restoration (verified source gap; browser impact untested)

Evidence: `index.html:21` dialog and `app.js:88-103`, `274-279`. Opening focuses a language choice, but there is no Tab containment, inert background, Escape handling or return-focus logic. Choosing a language hides the focused dialog without moving focus to a visible element. `aria-modal="true"` alone does not implement keyboard containment. The skip link is below the modal in stacking order (`styles.css:13-14`).

Next task: define initial and reopened-dialog dismissal behavior, contain focus, prevent background interaction and restore visible focus. Verify Tab/Shift+Tab, Enter/Space, Escape where appropriate, first visit and reopened switcher in both languages with a screen reader.

### P1 — Signup request can remain pending indefinitely (verified source gap)

Evidence: `app.js:243-269`. Submit is disabled before fetch; there is no timeout or cancellation. A fetch that never settles never reaches `finally`, leaving the user at SENDING. A rejected request does restore the button and retains form values (mock verified). The English fallback gives a contact address; Punjabi only asks the user to retry. All backend errors, including validation/rate limits, collapse to the same network/backend message.

Next task: bounded request timeout with actionable, localized retry guidance, preserving entered data and explaining ambiguous outcomes safely. Cover offline, hanging response, 400, 429, 500, malformed JSON, duplicate and retry; do not expose raw server messages through HTML.

### P2 — Signup validation bypasses email syntax and sends unused contact fields (verified source and mock)

Evidence: `index.html:171` uses `novalidate`; `app.js:237-251` checks only presence for selected contacts and serializes both email and phone regardless of preferences. An isolated submit with selected email `invalid` and an unselected phone sent both values to mocked fetch. Phone format is likewise unchecked. Backend validation/storage promises in README cannot be verified here.

Next task: align frontend validation with an inspected backend contract; omit unselected contact channels from the request and validate selected fields without unnecessarily excluding valid international names/numbers. Confirm server validation independently. Keep rejection messages localized and associate them with fields (`aria-invalid`/descriptions); current errors are a general live status without field focus or field association.

### P2 — Analytics starts before a privacy choice; disclosure is incomplete (verified source; policy assessment pending)

Evidence: `analytics.js:1-27` immediately queues GA configuration and injects Google's script whenever the configured ID is valid. No consent gate, opt-out or environment exclusion exists. This also applies to a local preview with unchanged config. The signup consent authorizes launch messages, not analytics. `index.html` provides a short contact-use note and removal email, but no analytics disclosure, retention period or full privacy-policy link.

Positive evidence: explicit custom event parameters are language/context, counts, score, notification method, duplicate boolean and fixed error reasons; no explicit contact values or quiz answer text are passed to custom events. Google signals and advertising personalization are disabled in source. The configured `anonymize_ip` flag does not establish end-to-end privacy compliance. The smoke test's regex is not proof that all GA-managed collection excludes personal data.

Next task: owner/privacy review of disclosure, analytics consent requirements, retention, deletion process, actual GA automatic/enhanced measurement settings and URL/referrer collection. Inspect network behavior in a safe environment with synthetic URLs. Do not change production analytics settings as part of this audit. Do not infer backend security, duplicate suppression or retention from README claims alone.

### P2 — Quiz transitions lack explicit focus management (verified source; assistive-technology impact untested)

Evidence: `app.js:147-168`, `183-188` disables the selected option, inserts Next, then replaces card contents on Next and result. It scrolls but never moves focus to the new heading/control. The surrounding `aria-live="polite"` is a useful starting point but does not ensure predictable focus or concise announcements. Wrong/correct options use classes/color; wrong feedback says “Learn this one” and provides an explanation rather than explicitly naming the correct option.

Next task: keyboard and screen-reader testing of every transition; provide predictable focus and textual answer feedback as needed. Explicit JS `scrollIntoView({behavior:'smooth'})` also needs reduced-motion verification; CSS reduced-motion rules alone do not demonstrate that these JS scrolls are reduced.

### P3 — Local preview instructions use a directory absent from this checkout (verified source)

Evidence: README instructs `python3 -m http.server 8080 --directory Website`, but `index.html` is at this repository root and there is no `Website` directory. For this checkout use `python -m http.server 8080 --bind 127.0.0.1 --directory .`. Ordinary preview executes configured analytics; use request interception/blocking before browsing for audit purposes. Do not temporarily relax backend production origin restrictions merely to preview signup.

Next task: correct checkout-specific preview instructions and describe safe mocked signup/analytics testing.

## Mobile UX and visual assessment

Verified responsive provisions in `styles.css:33-37`: single-column layouts below 980px, stacked form contacts below 620px, narrower phone preview, reduced type sizes, and hidden header links/CTA at small widths. Hero quiz/signup actions remain in the document. Main buttons have a 66px minimum height, inputs 50px; language choices are at least 72px on small screens. Local fonts, image dimensions, visible focus rules, skip link, labels, fieldset/legend and reduced-motion CSS are positive foundations.

Untested concerns to check before any visual change:

- At 320, 360, 390, 420, 620, 768 and 980 CSS pixels, in both languages, verify header CTA versus fixed language switch spacing, long Punjabi text wrapping, quiz options and form controls. `overflow-x:hidden` on html/body can conceal overflow instead of fixing it; wide decorative orbits require rendered inspection.
- Test 200% text enlargement, 400% browser zoom/reflow, landscape, short viewport language dialog, safe areas and the mobile software keyboard. Confirm all modal content and consent/submit remain reachable.
- Measure contrast for small muted copy, placeholders, privacy note, feedback and disabled states. Small text and low-emphasis colors are risk indicators, not measured failures in this audit.
- Test touch target spacing, focus visibility on option/reset/language controls, anchor offsets under the fixed header, font loading and slow-network layout stability. No browser screenshots or performance metrics were collected.
- Verify mixed-language spans have appropriate language metadata; the document language switches correctly, but fixed Punjabi preview/footer text remains within English mode without comprehensive `lang` marking.

## Quiz and signup behavior boundaries

Quiz content is five hardcoded bilingual questions with fixed answer positions; source review finds no quiz persistence. Reload resets the attempt, while the language preference uses guarded localStorage reads/writes. This is observable implementation, not a requirement to add accounts or persistence. Storage-denied handling is present in source but was not browser-tested. Religious/historical accuracy and provenance were not independently revalidated; README's reviewed-content claim is not enough evidence for lesson expansion. Arrange subject-matter review and source references before expanding content.

Signup positives: explicit unchecked consent, channel selection, autocomplete/input types, honeypot, disabled in-flight submit, localized status live region, generic failure copy, success/duplicate copy and reset only after success. Remaining concerns: any HTTP 2xx is treated as success even when JSON cannot be parsed (`app.js:258-262`); whether that is valid depends on the missing backend contract. Duplicate handling, CORS, rate limits, abuse prevention, retention, collection permissions and server validation are untested. The UI disabling a button is not server idempotency. Test language switching during submission as well: static translation can replace the SENDING label while the request remains in flight.

## Smoke-check evidence

Executed locally on 2026-10-24 with Node v24.20.0:

| Check | Result and limit |
| --- | --- |
| `node tests/smoke.mjs` | PASS: “Website smoke checks passed (6 local asset references).” Includes basic markup/event checks and mocked analytics initialization. Does not render a page, inspect CSS image/font URLs, execute app flows or contact Google. |
| `node --check app.js` | PASS, syntax only. |
| `node --check analytics.js` | PASS, syntax only. |
| Isolated Node VM running actual `app.js` with DOM stubs | PASS for reproducing duplicate scoring after language switch: score 2 at question index 0. |
| Same VM: normal perfect run then language switch | Normal run renders 5/5; switch renders question 5 and hides Retry. Confirms completion regression. |
| Same VM: submit callback with synthetic data and rejecting mock fetch | Malformed email and unselected phone reach mock payload; generic error renders, button re-enables, form reset is not called. Zero real network requests. |

The VM checks were an ephemeral PowerShell here-string piped to Node, not added to the repository. They verify JavaScript state/control flow, not native validation, real DOM focus, rendering or browser event semantics. Reproduce the quiz finding with: choose first answer on question 1, choose another language, choose first answer again; inspect score in a debugger or complete remaining questions. Perform browser reproduction with analytics and registration traffic intercepted.

## Prioritized next work

1. **P1: Fix quiz translation state and add flow regression tests.** Cover score bounds, answered/completed translation, retry and event counts.
2. **P1: Repair modal keyboard/focus behavior and verify quiz focus transitions.** Acceptance includes keyboard-only completion and a manual screen-reader pass in both languages.
3. **P1: Bound signup request duration and verify failure recovery using mocks.** Keep typed data; cover retry, errors and pending state without real contact submissions.
4. **P2: Inspect backend contract, tighten client validation and minimize contact payloads.** Validate response semantics and safe duplicate retry behavior with backend owner evidence.
5. **P2: Complete privacy/analytics review and owner-approved disclosure proposal.** Verify actual collection and settings without modifying production analytics.
6. **P2: Run mobile, zoom, contrast and assistive-technology matrix above.** Record screenshots/measurements before proposing visual fixes; prioritize measured failures.
7. **P3: Correct preview documentation and improve repeatable isolated tests.** Extend current smoke coverage for behavioral failures rather than relying on event-name regexes.
8. **P3: Establish source-backed bilingual content review before lesson expansion.** No speculative quiz/content changes in this task.

Website implementation work should be consolidated into one owner-approved weekly batch. This audit does not authorize release, merging, publishing, analytics configuration changes or Unity/account-linking changes.
