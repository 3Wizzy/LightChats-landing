import { useEffect } from "react";
import Link from "../i18n/LangLink";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LanguageContext";
import { help } from "../i18n/content/help";

export default function Help() {
  const { lang } = useLang();
  const h = help[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-surface-950 text-white font-sans flex flex-col">
      <PageNav />
      <main className="flex-1 w-full">
        <section className="max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-12 text-center">
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
            {h.eyebrow}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 leading-tight">
            {h.heading}
          </h1>
          <p className="text-surface-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            {h.introPrefix}
            <Link to="/support" className="text-brand-400 hover:underline">
              {h.introLinkText}
            </Link>
            {h.introSuffix}
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-20 space-y-10">
          {h.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {section.title}
              </h2>
              <p className="text-surface-400 mb-6">{section.desc}</p>
              <div className="space-y-3">
                {section.articles.map((article) => (
                  <details
                    key={article.title}
                    className="group bg-surface-900/40 border border-white/5 rounded-xl overflow-hidden"
                  >
                    <summary className="list-none cursor-pointer p-5 flex items-center justify-between gap-4">
                      <span className="text-white font-medium">
                        {article.title}
                      </span>
                      <svg
                        className="w-5 h-5 text-surface-500 flex-shrink-0 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5 text-surface-400 text-sm leading-relaxed">
                      {article.summary}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-24">
          <div className="text-center bg-gradient-to-br from-brand-500/10 via-surface-900 to-surface-900 border border-brand-500/20 rounded-3xl p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {h.stillNeedHelpTitle}
            </h2>
            <p className="text-surface-400 mb-6">{h.stillNeedHelpDesc}</p>
            <a
              href="mailto:contact@lightchats.com"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-full transition-all"
            >
              contact@lightchats.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
