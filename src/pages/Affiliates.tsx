import { useEffect } from "react";
import Link from "../i18n/LangLink";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LanguageContext";
import { affiliates } from "../i18n/content/affiliates";

export default function Affiliates() {
  const { lang } = useLang();
  const c = affiliates[lang];

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
            {c.heroTitle}
          </h1>
          <p className="text-surface-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            {c.heroSub}
          </p>
          <a
            href="https://partners.lightchats.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-[0_0_40px_rgba(233,77,30,0.4)]"
          >
            {c.becomePartner}
          </a>
        </section>

        {/* Commission breakdown */}
        <section className="max-w-5xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-surface-900/40 border border-white/5 rounded-2xl p-8">
              <p className="text-4xl font-extrabold text-brand-400">
                {c.card1Value}
              </p>
              <p className="text-white font-semibold mt-2">{c.card1Title}</p>
              <p className="text-surface-500 text-sm mt-2 leading-relaxed">
                {c.card1Desc}
              </p>
            </div>
            <div className="bg-surface-900/40 border border-white/5 rounded-2xl p-8">
              <p className="text-4xl font-extrabold text-brand-400">
                {c.card2Value}
              </p>
              <p className="text-white font-semibold mt-2">{c.card2Title}</p>
              <p className="text-surface-500 text-sm mt-2 leading-relaxed">
                {c.card2Desc}
              </p>
            </div>
            <div className="bg-surface-900/40 border border-white/5 rounded-2xl p-8">
              <p className="text-4xl font-extrabold text-brand-400">
                {c.card3Value}
              </p>
              <p className="text-white font-semibold mt-2">{c.card3Title}</p>
              <p className="text-surface-500 text-sm mt-2 leading-relaxed">
                {c.card3Desc}
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="max-w-4xl mx-auto px-6 pb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {c.howItWorks}
          </h2>
          <div className="space-y-4">
            {c.steps.map((s) => (
              <div
                key={s.step}
                className="flex gap-5 items-start bg-surface-900/40 border border-white/5 rounded-xl p-6"
              >
                <div className="w-9 h-9 rounded-full bg-brand-500/15 flex items-center justify-center flex-shrink-0 text-brand-400 font-bold">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-white font-semibold">{s.title}</h3>
                  <p className="text-surface-400 text-sm mt-1 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Earnings example */}
        <section className="max-w-4xl mx-auto px-6 pb-20">
          <div className="bg-gradient-to-br from-brand-500/10 via-surface-900 to-surface-900 border border-brand-500/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {c.exampleTitle}
            </h2>
            <p className="text-surface-400 mb-8">{c.exampleSub}</p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-surface-950/50 border border-white/5 rounded-xl p-5">
                <p className="text-2xl font-bold text-white">{c.ex1Value}</p>
                <p className="text-surface-400 text-sm mt-1">{c.ex1Label}</p>
                <p className="text-surface-600 text-xs mt-1">{c.ex1Detail}</p>
              </div>
              <div className="bg-surface-950/50 border border-white/5 rounded-xl p-5">
                <p className="text-2xl font-bold text-white">{c.ex2Value}</p>
                <p className="text-surface-400 text-sm mt-1">{c.ex2Label}</p>
                <p className="text-surface-600 text-xs mt-1">{c.ex2Detail}</p>
              </div>
              <div className="bg-surface-950/50 border border-white/5 rounded-xl p-5">
                <p className="text-2xl font-bold text-white">{c.ex3Value}</p>
                <p className="text-surface-400 text-sm mt-1">{c.ex3Label}</p>
                <p className="text-surface-600 text-xs mt-1">{c.ex3Detail}</p>
              </div>
            </div>
            <p className="text-surface-500 text-sm mt-6">{c.exampleFooter}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 pb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            {c.faqTitle}
          </h2>
          <div className="space-y-3">
            {c.faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-surface-900/30 border border-white/5 rounded-xl overflow-hidden"
              >
                <summary className="list-none cursor-pointer p-5 flex items-center justify-between gap-4">
                  <span className="text-white font-medium text-[15px]">
                    {f.q}
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
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 pb-24">
          <div className="text-center bg-surface-900/40 border border-white/5 rounded-3xl p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {c.ctaTitle}
            </h2>
            <p className="text-surface-400 mb-6">{c.ctaSub}</p>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <a
                href="https://partners.lightchats.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-full transition-all"
              >
                {c.becomePartner}
              </a>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-full border border-white/10 transition-colors"
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
