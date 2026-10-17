# Sikhi Khoj prelaunch website

Buildless static site for GitHub Pages. It contains a five-question bilingual quiz that runs entirely in the browser and makes no network request. Only a submitted launch-list form calls Firebase.

## Local preview

From the repository root:

```sh
python3 -m http.server 8080 --directory Website
```

Open `http://localhost:8080`. The production endpoint accepts requests only from `https://brainforgegames.github.io`; the form therefore displays its fallback error during a local preview unless the backend's origin allowlist is temporarily changed. Do not commit a localhost origin.

## Editable settings

- `config.js`: registration endpoint and contact email.
- `index.html`: visible bilingual copy and `mailto:` links.
- `app.js`: quiz questions copied from reviewed app content and the form behavior.

The GitHub Pages workflow deploys `Website/` without a build step. The canonical public URL is:

`https://brainforgegames.github.io/Sikhi_Khoj/`

## Signup data

`registerPrelaunchInterest` validates consent and notification preferences, stores one duplicate-suppressed record in `prelaunchSignups`, and never exposes the collection to clients. Email addresses are stored only when email is selected; phone numbers are stored only when WhatsApp is selected. Short-lived daily IP hashes limit automated submissions and are removed by the existing daily maintenance function.
