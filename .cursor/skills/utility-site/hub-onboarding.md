# New App Under KMDIGITS Mission Hub

Copy the closest sibling app. Do not invent a third embedding style.

| Stack | Copy from | Hub path example |
|-------|-----------|------------------|
| Next.js App Router | [calculator](file:///Users/manik/Documents/GitHub/calculator) (preferred) or [pulsar](file:///Users/manik/Documents/GitHub/pulsar) | `/calculator`, `/free-qr-code-generator` |
| Vite + React SPA | [kural-chronicle](file:///Users/manik/Documents/GitHub/kural-chronicle) | `/thirukkural` |
| Hub wiring | [mission](file:///Users/manik/Documents/GitHub/mission) | `vercel.json`, `src/config/apps.ts`, sitemaps |

Canonical public host: **`https://www.kmdigits.com/{path}`**.

---

## 1. Choose path + origins

Before coding, lock these constants:

| Constant | Example |
|----------|---------|
| Hub path | `/my-tool` |
| Vercel origin | `https://my-tool.vercel.app` |
| Public site URL | `https://www.kmdigits.com/my-tool` |

Put them in `src/lib/site.ts` (Next) or env/`vite.config` (Vite). Never hardcode `localhost` in SEO/canonicals.

---

## 2. Next.js embedding (prefer Calculator pattern)

```ts
// next.config.ts
const ASSET_ORIGIN =
  process.env.NODE_ENV === "production"
    ? "https://my-tool.vercel.app/my-tool" // include basePath — Next does not append it
    : "";

export default {
  basePath: "/my-tool",
  assetPrefix: ASSET_ORIGIN || undefined,
  // redirect bare Vercel `/` → `/my-tool` when using basePath
};
```

```ts
// src/lib/site.ts
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kmdigits.com/my-tool";
export const ASSET_ORIGIN = "https://my-tool.vercel.app";
```

**Icons (absolute — required under hub rewrite):**

```ts
// layout.tsx metadata
icons: {
  icon: [{ url: `${ASSET_ORIGIN}/my-tool/icon`, type: "image/png" }],
  apple: [{ url: `${ASSET_ORIGIN}/my-tool/apple-icon`, type: "image/png" }],
}
```

Add `src/app/icon.tsx` + `src/app/apple-icon.tsx` (ImageResponse) or static files under `public/`.

**Pulsar-style alternative** (no `basePath`, app lives at `/free-qr-code-generator` on the Vercel host): use `assetPrefix` to the Vercel root and absolute `icons` / `manifest`. Mission must add **extra rewrites** for root assets (`icon.png`, `sitemap.xml`, `robots.txt`) because `/app/:path*` maps to `/app/:path*` on the child, not child root.

---

## 3. Vite embedding (Kural pattern)

```ts
// vite.config.ts
base: mode === "production" ? "https://my-tool.vercel.app/" : "/",
```

```html
<!-- index.html — absolute via BASE_URL -->
<link rel="icon" href="%BASE_URL%favicon.ico" sizes="any" />
<link rel="icon" type="image/png" href="%BASE_URL%favicon.png" />
<link rel="apple-touch-icon" href="%BASE_URL%pwa-192x192.png" />
<link rel="manifest" href="%BASE_URL%manifest.webmanifest" />
```

PWA manifest icon `src` values must be **absolute** (`https://my-tool.vercel.app/pwa-192x192.png`), not `/pwa-….png`.

Mission rewrite strips the hub prefix:

```json
{ "source": "/my-tool", "destination": "https://my-tool.vercel.app/" },
{ "source": "/my-tool/:path*", "destination": "https://my-tool.vercel.app/:path*" }
```

---

## 4. Mission hub wiring (always)

Update [mission](file:///Users/manik/Documents/GitHub/mission):

1. **`vercel.json`** — path rewrite(s) before any catch-alls; add favicon/sitemap specials if the child serves those at a different path than `{hubPath}/{file}`.
2. **`src/config/apps.ts`** — append `HUB_APPS` entry (`id`, `path`, `origin`, `title`, absolute `favicon`, `appleTouchIcon`).
3. **`vite.config.ts` PWA** — add `navigateFallbackDenylist` entry: `/^\/my-tool(?:\/|$)/` so the hub SW does not swallow the app.
4. **`public/sitemap-pages.xml`** — add `<loc>https://www.kmdigits.com/my-tool</loc>`.
5. **`public/sitemap.xml`** — add child sitemap: `https://www.kmdigits.com/my-tool/sitemap.xml`.
6. **`README.md`** — document the new path → origin row.

Do **not** iframe apps. Hub uses Vercel **rewrites** only.

---

## 5. SEO + Search Console (every app)

| Item | Pattern |
|------|---------|
| Canonical / OG URLs | `https://www.kmdigits.com/{path}/…` |
| Sitemap locs | Same hub host (not bare `*.vercel.app`) |
| `robots.txt` | Point sitemap at hub URL when embedded |
| Google HTML verify | `public/google….html` with body `google-site-verification: google….html` |
| Verify path | Ensure hub rewrite reaches the file (Calculator: `/calculator/google….html`; QR may need a root rewrite or nested `public/{path}/`) |
| Meta verify | Optional `verification.google` in Next metadata / Vite `<meta>` |

---

## 6. Branding + sticky footer + analytics

- Footer / copyright: **KMDIGITS** (hub) / **OKM DIGITAL WORKS** where existing apps use it — match sibling, do not invent a third brand string.
- Sticky footer in the **shared shell** (`PageBackground` / `AppLayout`): `minHeight: 100dvh` flex column + footer `mt: 'auto'` / `mt-auto`. See skill §4 — every page, including short ones.
- `@vercel/analytics` once at root (`/next` or `/react` import by stack).
- Enable Analytics in the Vercel project dashboard.

---

## 7. Ship checklist

- [ ] Own Vercel project deployed
- [ ] Absolute assets (Next `assetPrefix` / Vite `base`)
- [ ] Absolute favicons in HTML/metadata + mission `HUB_APPS`
- [ ] Mission rewrites + PWA denylist + sitemaps
- [ ] Hub sitemap index lists child sitemap
- [ ] Google verify file live under hub URL
- [ ] Live smoke: `www.kmdigits.com/{path}` returns 200; JS/CSS from child origin 200; favicon 200
- [ ] Tab icon is the **app** icon, not the hub favicon
- [ ] Footer pinned to viewport bottom on a short page (empty search / sparse home)

---

## 8. Anti-patterns

- Root-relative `/favicon.ico` or `/icon.png` without absolute origin (browser hits the hub).
- `assetPrefix` missing `basePath` on Next (broken CSS/JS under hub).
- Relying on mission `/_next/:path*` (it already points at Pulsar — each Next app must use its own `assetPrefix`).
- Sitemap/`canonical` still on `*.vercel.app` after hub embed.
- Skipping mission `navigateFallbackDenylist` (hub SW serves SPA shell for child paths).
