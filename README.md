# Sikhi Khoj prelaunch website

Buildless static site for GitHub Pages. It contains a five-question bilingual quiz that runs entirely in the browser. The site sends non-identifying usage events to Google Analytics; only a submitted launch-list form sends contact details to Firebase.

## Local preview

From the repository root:

```sh
python3 -m http.server 8080 --directory Website
```

Open `http://localhost:8080`. The production endpoint accepts requests only from `https://brainforgegames.github.io`; the form therefore displays its fallback error during a local preview unless the backend's origin allowlist is temporarily changed. Do not commit a localhost origin.

## Editable settings

- `config.js`: registration endpoint and contact email.
- `analytics.js`: lightweight Google Analytics loader. The measurement ID lives in `config.js`.
- `index.html`: visible bilingual copy and `mailto:` links.
- `app.js`: quiz questions copied from reviewed app content and the form behavior.

The website is mirrored to the public `brainforgegames/sikhi-khoj-app` repository because the private Unity repository's account plan does not support GitHub Pages. The public repository deploys the files without a build step. The canonical URL is:

`https://brainforgegames.github.io/sikhi-khoj-app/`

## Signup data

`registerPrelaunchInterest` validates consent and notification preferences, stores one duplicate-suppressed record in `prelaunchSignups`, and never exposes the collection to clients. Email addresses are stored only when email is selected; phone numbers are stored only when WhatsApp is selected. The website never sends names, email addresses, phone numbers, quiz answers or form contents to Google Analytics.
