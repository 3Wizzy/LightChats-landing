import { useEffect } from "react";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LanguageContext";
import { dataDeletion } from "../i18n/content/dataDeletion";

export default function DataDeletion() {
  const { lang } = useLang();
  const c = dataDeletion[lang];

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
              {c.selfTitle}
            </h2>
            <p>
              {c.selfBefore}
              <a
                href="https://app.lightchats.com/settings/account"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 hover:underline"
              >
                {c.selfLink}
              </a>
              {c.selfAfter}
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              {c.emailTitle}
            </h2>
            <p>
              {c.emailBefore}
              <a
                href="mailto:contact@lightchats.com?subject=Data%20Deletion%20Request"
                className="text-brand-400 hover:underline"
              >
                contact@lightchats.com
              </a>
              {c.emailMid}
              <span className="text-white">{c.emailQuoted}</span>
              {c.emailAfter}
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              {c.deletedTitle}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {c.deletedBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              {c.retentionTitle}
            </h2>
            <p>{c.retentionBody}</p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              {c.igTitle}
            </h2>
            <p>
              {c.igBefore}
              <span className="text-white">{c.igPath}</span>
              {c.igAfter}
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              {c.questionsTitle}
            </h2>
            <p>
              {c.questionsBefore}
              <a
                href="mailto:contact@lightchats.com"
                className="text-brand-400 hover:underline"
              >
                contact@lightchats.com
              </a>
              {c.questionsAfter}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
