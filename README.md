# mission

KMDIGITS mission landing page — useful software without signup forms.

## Stack

Vite + React + TypeScript + Tailwind CSS, with PWA and Vercel Analytics.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Path forwarding (Vercel)

Configured in `vercel.json` as **rewrites** so the browser URL stays on `kmdigits.com`:

| Path | Destination |
|------|-------------|
| `/thirukkural` | https://tirukkural.vercel.app/ |
| `/free-qr-code-generator` | https://free-qr-code-generator-app.vercel.app/free-qr-code-generator |

Thirukkural is built with an absolute asset base + router basename so JS/CSS still load from its origin. QR app `/_next` assets are also rewritten.
