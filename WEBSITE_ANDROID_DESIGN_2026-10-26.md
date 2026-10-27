# Sikhi Khoj Android website design — 26 October 2026

Prepared for the weekly website batch. Not published.

## Result

- Android download is the primary action, using the exact Play Store link supplied by the owner.
- The English/Punjabi landing page has a clearer editorial hierarchy, warm saffron accents, larger type, readable feature cards and a separate download section.
- Website quiz remains usable without an account; existing quiz language-switch/scoring and form error/timeout fixes are preserved.
- Optional contact signup describes iOS availability interest only, with no release-date promise. No iOS store link, login availability, rating, download count or live-version lesson count is invented.
- The previous invented phone contents and progress statistics were removed. Two genuine captured app screens now appear inside CSS device frames and in a gallery that opens the full images.

## Design references

Read official primary pages on 26 October 2026:

- https://www.headspace.com/app — product screens in device framing beside a short feature explanation. Adapt the composition, not its copy, colors or imagery.
- https://www.khanacademy.org/downloads — direct store actions near the hero and honest platform labeling, with a device-led product image.
- https://www.duolingo.com/nojs/splash — download actions repeated after the benefit explanation. Only the owner's verified Android destination is offered here.

## Checks

- `node tests/smoke.mjs`: website assets, exact Android destination, removal of obsolete Android prelaunch wording, truthful iOS availability, no fabricated app-screen markup, and mocked quiz/form regressions.
- Actual browser inspection at desktop 1280px and mobile 390 × 844 in English and Punjabi: hero text/controls fit, Punjabi renders using bundled font, no horizontal overflow.
- Actual browser interaction: answer the first question in Punjabi, switch to English, and verify the answer remains locked with translated correct-answer feedback.
- No real contact form submission, login, analytics configuration change or production deployment was performed.

## Service compatibility

The existing backend endpoint, collection, analytics event names and legacy `prelaunch-site` source value remain unchanged. Visible consent now specifically describes iOS availability; historic signup records are not migrated and must not be treated as fresh iOS consent. This change does not promise an automated email delivery system.


## Genuine app image evidence

Captured in Unity 6000.3.26f1 from the existing disposable `u-3EVL8C` copy, containing the merged offline preview and reading-polish draft. Both images show `lsn_01_mool_mantar_intro`, first reading step, text scale 1, 540 × 1080:

- `assets/images/screenshots/en-lesson-development.jpg` — English, light theme, 32,612 bytes.
- `assets/images/screenshots/pa-lesson-development.jpg` — Punjabi, dark theme, 35,648 bytes.

Each image was opened with `view_image` and inspected: actual readable lesson content, navigation/progress/footer, correct language and theme, no personal data or empty render. These are development captures, not evidence of the current Play build or physical-device behavior; the website labels that distinction.

Capture used a cloned shipping PanelSettings asset with a RenderTexture, the actual shipping stylesheet/theme and `AppServices.BuildLessonPreview`, which constructs only in-memory progress/localization/content services. A newly created empty Splash scene prevented ordinary AppBootstrap initialization. The editor command supplied an isolated test-data path, no login or smoke-driver flags, and no Firebase/user-data/ad services were constructed. Temporary capture helpers exist only in the disposable Unity copy and are not included in website or app source changes. The owned Unity process exited after capture.

The initial worker could not finish browser QA after phone integration. See the continuation below for the current verification result.


## Local continuation ? 27 October 2026

- Inspected the clean prepared worktree at `830239f` and preserved it unchanged.
- `git cherry-pick --no-commit ea7c266..830239f` was denied because shared Git metadata is outside this worker workspace. Applied the identical binary Git diff from that range to this clean isolated worktree instead; all changes remain uncommitted for the orchestrator.
- Fixed a confirmed narrow-screen issue: the rotated front phone crossed the right content edge. Both frames now have a 4% mobile inset.
- Browser inspection covered the English mobile hero at 390 ? 844 and Punjabi desktop hero at 1280 ? 900. Punjabi mobile DOM inspection confirmed translated copy; both phone frames fit within the 375px content width, with no horizontal overflow. Desktop content width and scroll width both measured 1265px. Hero screenshots loaded successfully.
- No publication, push, PR, real signup submission, or store-build verification performed. The website remains in the weekly publication batch.
- Focused checks passed once: node tests/smoke.mjs (including mocked quiz/form regressions), node --check app.js, and git diff --check; this static site has no build step.
