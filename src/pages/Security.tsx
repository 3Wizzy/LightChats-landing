import { useEffect } from "react";
import Link from "../i18n/LangLink";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LanguageContext";
import { security } from "../i18n/content/security";

export default function Security() {
  const { lang } = useLang();
  const s = security[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-surface-950 text-white font-sans flex flex-col">
      <PageNav />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 md:py-24 w-full">
        <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
          {s.eyebrow}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
          {s.title}
        </h1>
        <p className="text-surface-400 text-lg leading-relaxed mb-10">
          {s.intro}
        </p>

        <section className="space-y-10 text-surface-300 leading-relaxed">
          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              {s.authTitle}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {s.authBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              {s.dataTitle}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {s.dataBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              {s.permsTitle}
            </h2>
            <p className="mb-3">{s.permsIntro}</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="text-white">{s.permsRead.label}</span>
                {s.permsRead.desc}
              </li>
              <li>
                <span className="text-white">{s.permsSend.label}</span>
                {s.permsSend.desc}
              </li>
              <li>
                <span className="text-white">{s.permsReadComments.label}</span>
                {s.permsReadComments.desc}
              </li>
              <li>
                <span className="text-white">{s.permsManage.label}</span>
                {s.permsManage.desc}
              </li>
            </ul>
            <p className="mt-3">{s.permsOutro}</p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              {s.paymentTitle}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {s.paymentBullets.map((b, i) => (
                <li key={i}>
                  {b.full ? (
                    b.full
                  ) : (
                    <>
                      {b.prefix}
                      <span className="text-white">{b.brand}</span>
                      {b.suffix}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              {s.aiTitle}
            </h2>
            <p>{s.aiBody}</p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              {s.vulnTitle}
            </h2>
            <p>
              {s.vulnBody1}
              <a
                href="mailto:contact@lightchats.com?subject=Security%20Disclosure"
                className="text-brand-400 hover:underline"
              >
                contact@lightchats.com
              </a>
              {s.vulnBody2}
              <span className="text-white">{s.vulnSubject}</span>
              {s.vulnBody3}
            </p>
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              {s.deletionTitle}
            </h2>
            <p>
              {s.deletionBody1}
              <Link
                to="/data-deletion"
                className="text-brand-400 hover:underline"
              >
                {s.deletionLink}
              </Link>
              {s.deletionBody2}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
