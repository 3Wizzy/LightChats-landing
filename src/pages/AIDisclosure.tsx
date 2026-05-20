import { useEffect } from "react";
import Link from "../i18n/LangLink";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LanguageContext";
import { aiDisclosure } from "../i18n/content/aiDisclosure";

export default function AIDisclosure() {
  const { lang } = useLang();
  const c = aiDisclosure[lang];

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
        <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-6">{c.title}</h1>
        <p className="text-surface-400 text-lg leading-relaxed mb-10">
          {c.intro}
        </p>

        <section className="space-y-10 text-surface-300 leading-relaxed">
          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              {c.whereTitle}
            </h2>
            <p className="mb-3">{c.whereIntro}</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="text-white">{c.aiRepliesLabel}</span> —{" "}
                {c.aiRepliesDesc}
              </li>
              <li>
                <span className="text-white">{c.aiConvosLabel}</span> —{" "}
                {c.aiConvosDesc}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              {c.staticTitle}
            </h2>
            <p>{c.staticBody}</p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              {c.signatureTitle}
            </h2>
            <p>
              {c.signatureBeforeQuote}
              <span className="text-white">{c.signatureQuote}</span>
              {c.signatureAfterQuote}
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              {c.seesTitle}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {c.seesBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="mt-3">{c.seesFooter}</p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              {c.safetyTitle}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {c.safetyBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              {c.providersTitle}
            </h2>
            <p>
              {c.providersBefore}
              <Link to="/data-deletion" className="text-brand-400 hover:underline">
                {c.providersLink}
              </Link>
              {c.providersAfter}
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              {c.reportTitle}
            </h2>
            <p>
              {c.reportBefore}
              <a
                href="mailto:contact@lightchats.com?subject=AI%20Message%20Report"
                className="text-brand-400 hover:underline"
              >
                contact@lightchats.com
              </a>
              {c.reportAfter}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
