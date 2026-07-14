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

Both apps use absolute production asset origins so JS/CSS load from their Vercel hosts while the browser URL stays on `kmdigits.com`.
