import { useEffect } from "react";
import Link from "../i18n/LangLink";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LanguageContext";
import { about } from "../i18n/content/about";

export default function About() {
  const { lang } = useLang();
  const c = about[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-surface-950 text-white font-sans flex flex-col">
      <PageNav />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 md:py-24 w-full">
        <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
          {c.eyebrow}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-8 leading-tight">
          {c.h1}
        </h1>

        <div className="space-y-8 text-surface-300 text-lg leading-relaxed">
          <p>{c.p1}</p>
          <p>
            {c.p2Pre}
            <span className="text-white">{c.p2Quote}</span>
            {c.p2Post}
          </p>
          <p>{c.p3}</p>
          <p>{c.p4}</p>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {c.valuesTitle}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {c.values.map((v) => (
              <div
                key={v.title}
                className="bg-surface-900/40 border border-white/5 rounded-xl p-6"
              >
                <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                <p className="text-surface-400 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {c.roadmapTitle}
          </h2>
          <p className="text-surface-300 text-[15px] leading-relaxed">
            {c.roadmapPre}
            <Link to="/blog" className="text-brand-400 hover:underline">
              {c.roadmapBlog}
            </Link>
            {c.roadmapMid}
            <Link to="/changelog" className="text-brand-400 hover:underline">
              {c.roadmapChangelog}
            </Link>
            {c.roadmapEnd}
          </p>
        </section>

        <section className="mt-16 bg-gradient-to-br from-brand-500/10 via-surface-900 to-surface-900 border border-brand-500/20 rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-3">{c.contactTitle}</h2>
          <p className="text-surface-400 mb-6">{c.contactSub}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:contact@lightchats.com"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-full transition-all"
            >
              contact@lightchats.com
            </a>
            <a
              href="tel:+13802574689"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-full border border-white/10 transition-colors"
            >
              +1 (380) 257-4689
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
