/**
 * Hub child apps and their absolute favicon URLs.
 * Icons must be absolute (Vercel origin) so tabs stay correct when HTML is
 * rewritten from www.kmdigits.com — root-relative /favicon.ico always hits the hub.
 */
export type HubApp = {
  id: string;
  path: string;
  origin: string;
  title: string;
  /** Primary favicon URL (absolute). */
  favicon: string;
  /** Optional Apple touch icon (absolute). */
  appleTouchIcon?: string;
};

export const HUB_APPS: HubApp[] = [
  {
    id: "thirukkural",
    path: "/thirukkural",
    origin: "https://tirukkural.vercel.app",
    title: "Thirukkural",
    favicon: "https://tirukkural.vercel.app/favicon.png",
    appleTouchIcon: "https://tirukkural.vercel.app/pwa-192x192.png",
  },
  {
    id: "free-qr-code-generator",
    path: "/free-qr-code-generator",
    origin: "https://free-qr-code-generator-app.vercel.app",
    title: "Free QR Code Generator",
    favicon: "https://free-qr-code-generator-app.vercel.app/icon.png",
    appleTouchIcon: "https://free-qr-code-generator-app.vercel.app/icon.png",
  },
  {
    id: "calculator",
    path: "/calculator",
    origin: "https://calculator-xi-one-56.vercel.app",
    title: "Calculator",
    favicon: "https://calculator-xi-one-56.vercel.app/calculator/icon",
    appleTouchIcon:
      "https://calculator-xi-one-56.vercel.app/calculator/apple-icon",
  },
  {
    id: "docscan",
    path: "/docscan",
    origin: "https://docscan-virid.vercel.app",
    title: "DocScan",
    favicon: "https://docscan-virid.vercel.app/docscan/icon",
    appleTouchIcon: "https://docscan-virid.vercel.app/docscan/apple-icon",
  },
];

export const HUB_FAVICON = "/favicon.svg";
