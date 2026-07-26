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
| `/calculator` | https://calculator-xi-one-56.vercel.app/calculator |
| `/docscan` | https://docscan-virid.vercel.app/docscan |

These apps use absolute production asset origins so JS/CSS load from their Vercel hosts while the browser URL stays on `kmdigits.com`.

## SEO sitemaps

`https://www.kmdigits.com/sitemap.xml` is a sitemap index that points at:

| Sitemap | App |
|---------|-----|
| `/sitemap-pages.xml` | Hub landing + app entry URLs |
| `/thirukkural/sitemap.xml` | Thirukkural chapters |
| `/free-qr-code-generator/sitemap.xml` | QR generator types |
| `/calculator/sitemap.xml` | Calculator tools |
| `/docscan/sitemap.xml` | DocScan OCR & converters |

`robots.txt` advertises the index for crawlers.
