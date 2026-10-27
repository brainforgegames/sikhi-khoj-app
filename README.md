# Sikhi Khoj website

Buildless static site for GitHub Pages. It contains a five-question bilingual quiz that runs entirely in the browser. The site sends non-identifying usage events to Google Analytics; only the optional iOS interest form sends contact details to Firebase. Android download links point to the owner-provided Google Play listing.

## Local preview

From the repository root:

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080`. The production endpoint accepts requests only from `https://brainforgegames.github.io`; the form therefore displays its fallback error during a local preview unless the backend's origin allowlist is temporarily changed. Do not commit a localhost origin.

## Editable settings

- `config.js`: registration endpoint and contact email.
- `analytics.js`: lightweight Google Analytics loader. The measurement ID lives in `config.js`.
- `index.html`: visible bilingual copy and `mailto:` links.
- `app.js`: quiz questions copied from reviewed app content and the form behavior.

Custom Analytics event names use the `web_` prefix so website actions are easy to distinguish from Unity app events. Google-managed automatic events such as `page_view`, `session_start` and `user_engagement` keep their standard names.
The three JavaScript references in `index.html` carry a release version query so GitHub Pages/browser caching cannot keep an older event schema active after deployment. Bump the shared version whenever these scripts change.

The website is mirrored to the public `brainforgegames/sikhi-khoj-app` repository because the private Unity repository's account plan does not support GitHub Pages. The public repository deploys the files without a build step. The canonical URL is:

`https://brainforgegames.github.io/sikhi-khoj-app/`

## Signup data

`registerPrelaunchInterest` validates consent and notification preferences, stores one duplicate-suppressed record in `prelaunchSignups`, and never exposes the collection to clients. Email addresses are stored only when email is selected; phone numbers are stored only when WhatsApp is selected. The website never sends names, email addresses, phone numbers, quiz answers or form contents to Google Analytics.


## Android availability and weekly publication

The owner supplied `https://play.google.com/store/apps/details?id=com.brainforgegames.sikhikhoj` on 26 October 2026. This site makes no store rating, download count, price, version or live lesson-count claims. iOS has no verified store link or announced release date. The existing signup service/collection remains unchanged; visible consent now specifically describes an iOS availability alert. Its legacy endpoint, event and source names are retained for compatibility; signup records are not migrated by this website change. Do not treat an existing legacy record as newly granted iOS consent.

Prepare changes in branches and include them in the owner's weekly website publication batch. A local preview is not a deployment.


## App preview images

The two local JPEGs under `assets/images/screenshots/` are genuine Unity 6000.3.26f1 development captures from the isolated memory-only lesson preview and reading-polish draft, captured 26 October 2026. They are not physical-device screenshots or verification of the live Play build. Keep the visible development-preview disclosure until replacement captures are verified against a released version. See `WEBSITE_ANDROID_DESIGN_2026-10-26.md` for capture provenance and validation limits.
