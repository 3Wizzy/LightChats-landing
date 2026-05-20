import { useEffect } from "react";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LanguageContext";
import { changelog, type ChangelogTag } from "../i18n/content/changelog";

const TAG_STYLES: Record<ChangelogTag, string> = {
  Launch: "bg-brand-500/15 text-brand-400",
  Feature: "bg-emerald-500/15 text-emerald-400",
  Improvement: "bg-blue-500/15 text-blue-400",
  Fix: "bg-amber-500/15 text-amber-400",
};

export default function Changelog() {
  const { lang } = useLang();
  const c = changelog[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-surface-950 text-white font-sans flex flex-col">
      <PageNav />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 md:py-24 w-full">
        <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
          {c.eyebrow}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-4 leading-tight">
          {c.h1}
        </h1>
        <p className="text-surface-400 text-lg leading-relaxed mb-12 max-w-2xl">
          {c.intro}
        </p>

        <div className="space-y-8">
          {c.entries.map((entry) => (
            <article
              key={entry.date + entry.title}
              className="bg-surface-900/40 border border-white/5 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-3 text-xs">
                <span
                  className={`px-2.5 py-1 rounded-full font-semibold ${
                    TAG_STYLES[entry.tag]
                  }`}
                >
                  {entry.tagLabel}
                </span>
                <span className="text-surface-500">{entry.date}</span>
                {entry.version && (
                  <>
                    <span className="text-surface-600">·</span>
                    <span className="text-surface-500 font-mono">
                      {entry.version}
                    </span>
                  </>
                )}
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">
                {entry.title}
              </h2>
              <ul className="space-y-2">
                {entry.changes.map((ch) => (
                  <li
                    key={ch}
                    className="flex items-start gap-2.5 text-surface-300 text-sm leading-relaxed"
                  >
                    <span className="text-surface-600 mt-1">•</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-surface-900/40 border border-white/5 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-semibold mb-2">{c.subscribeTitle}</h2>
          <p className="text-surface-400 text-sm mb-4">
            {c.subscribePre}
            <a
              href="https://app.lightchats.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:underline"
            >
              {c.subscribeLink}
            </a>
            {c.subscribePost}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
