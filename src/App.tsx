import { Helmet } from "react-helmet-async";
import { SiteFooter } from "./components/SiteFooter";

const title = "KMDIGITS — Useful software, no signup";
const description =
  "Useful software shouldn't need a signup form. Free, fast tools that do one job — no accounts, no ads, no dark patterns.";

export default function App() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://kmdigits.com/" />
      </Helmet>

      <div className="flex min-h-dvh flex-col bg-ink text-chalk">
        <main className="flex flex-1 flex-col items-center justify-center px-6 py-20 sm:px-8">
          <div className="mx-auto flex w-full max-w-[40rem] flex-col items-center text-center">
            <p
              className="font-brand animate-fade text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-whisper sm:text-xs"
              style={{ animationDelay: "0ms" }}
            >
              KMDIGITS
            </p>

            <h1
              className="font-display animate-rise mt-10 max-w-[18ch] text-[1.875rem] font-semibold leading-[1.15] tracking-[-0.03em] text-chalk sm:mt-12 sm:text-[2.75rem] md:text-[3.25rem]"
              style={{ animationDelay: "120ms" }}
            >
              Useful software shouldn&apos;t need a signup form.
            </h1>

            <div
              className="animate-rise mt-8 max-w-[34rem] space-y-5 text-[0.9375rem] leading-relaxed text-mist sm:mt-10 sm:text-base sm:leading-[1.7]"
              style={{ animationDelay: "280ms" }}
            >
              <p>
                Every app here is free, fast, and does one job. No accounts, no
                ads, no dark patterns.
              </p>
              <p>
                Open a tool. Use it. Leave. Your files stay on your device. We
                don&apos;t track you across the web, sell your attention, or
                lock features behind an email wall.
              </p>
              <p>
                No funnels. No upsells. No &ldquo;create an account to
                continue.&rdquo; Just the job you came to do — and software that
                gets out of the way.
              </p>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
