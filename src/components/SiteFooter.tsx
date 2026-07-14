export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="shrink-0 px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 text-center">
      <a
        href="https://kmdigits.com"
        className="font-display animate-fade text-sm text-hush transition-colors duration-300 hover:text-mist"
        style={{ animationDelay: "480ms" }}
      >
        kmdigits.com
      </a>
      <p className="mt-3 text-[0.6875rem] tracking-wide text-whisper">
        © {year} KMDIGITS. All rights reserved.
      </p>
    </footer>
  );
}
