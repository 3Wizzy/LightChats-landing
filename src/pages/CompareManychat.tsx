import { useEffect } from "react";
import Link from "../i18n/LangLink";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LanguageContext";
import { compareManychat } from "../i18n/content/compareManychat";

export default function CompareManychat() {
  const { lang } = useLang();
  const c = compareManychat[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-surface-950 text-white font-sans flex flex-col">
      <PageNav />
      <main className="flex-1 w-full">
        <section className="max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-12 text-center">
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
            {c.eyebrow}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 leading-tight">
            {c.title}
          </h1>
          <p className="text-surface-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            {c.intro}
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-12">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-surface-900/50 border border-white/5 rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-2">{c.competitorHeader}</h2>
              <ul className="text-surface-400 text-sm space-y-2 leading-relaxed list-disc list-inside">
                {c.competitorBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-b from-brand-500/10 to-surface-900 border-2 border-brand-500/40 rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-2">{c.ourHeader}</h2>
              <ul className="text-surface-300 text-sm space-y-2 leading-relaxed list-disc list-inside">
                {c.ourBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-20">
          <div className="bg-surface-900/30 border border-white/5 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-start text-surface-500 font-medium px-6 py-4 min-w-[220px]">
                      {c.featureColLabel}
                    </th>
                    <th className="text-start text-brand-400 font-semibold px-6 py-4 bg-brand-500/[0.04]">
                      LightChats
                    </th>
                    <th className="text-start text-white font-semibold px-6 py-4">
                      {c.competitorColLabel}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {c.rows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={
                        i !== c.rows.length - 1 ? "border-b border-white/5" : ""
                      }
                    >
                      <td className="text-surface-400 px-6 py-4">
                        {row.feature}
                      </td>
                      <td className="text-surface-200 px-6 py-4 bg-brand-500/[0.04]">
                        {row.lightchats}
                      </td>
                      <td className="text-surface-300 px-6 py-4">
                        {row.competitor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-surface-500 text-xs mt-4">
            {c.footnote}
          </p>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-24">
          <div className="text-center bg-gradient-to-br from-brand-500/10 via-surface-900 to-surface-900 border border-brand-500/20 rounded-3xl p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {c.ctaTitle}
            </h2>
            <p className="text-surface-400 mb-6">{c.ctaSub}</p>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <a
                href="https://app.lightchats.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-full"
              >
                {c.ctaPrimary}
              </a>
              <Link
                to="/features"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-full border border-white/10"
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
