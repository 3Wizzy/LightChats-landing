import { useEffect } from "react";
import Link from "../i18n/LangLink";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LanguageContext";
import { features } from "../i18n/content/features";

export default function Features() {
  const { lang } = useLang();
  const c = features[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-surface-950 text-white font-sans flex flex-col">
      <PageNav />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-12 text-center">
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
            {c.eyebrow}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 leading-tight">
            {c.heroTitleA}
            <br className="hidden md:block" /> {c.heroTitleB}
          </h1>
          <p className="text-surface-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            {c.heroSub}
          </p>
        </section>

        {/* Feature blocks */}
        <section className="max-w-5xl mx-auto px-6 pb-20 space-y-6">
          {c.features.map((f, i) => (
            <div
              key={f.title}
              className="bg-surface-900/40 border border-white/5 rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-500/15 flex items-center justify-center flex-shrink-0 text-brand-400 font-bold">
                  {i + 1}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">{f.title}</h2>
                  <p className="text-surface-400 mt-2 text-[15px] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
              <ul className="space-y-2.5 mt-6 ms-14">
                {f.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-surface-300 text-sm leading-relaxed"
                  >
                    <svg
                      className="w-4 h-4 text-brand-400 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 pb-24">
          <div className="text-center bg-gradient-to-br from-brand-500/10 via-surface-900 to-surface-900 border border-brand-500/20 rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {c.ctaTitle}
            </h2>
            <p className="text-surface-400 text-lg mb-8 max-w-xl mx-auto">
              {c.ctaSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <a
                href="https://app.lightchats.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-[0_0_40px_rgba(233,77,30,0.4)]"
              >
                {c.ctaBtn}
              </a>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full border border-white/10 transition-colors"
              >
                {c.ctaSecondary}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
