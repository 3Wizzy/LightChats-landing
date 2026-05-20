import { useEffect } from "react";
import Link from "../i18n/LangLink";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LanguageContext";
import { blogAnnouncing } from "../i18n/content/blogAnnouncing";

export default function BlogAnnouncing() {
  const { lang } = useLang();
  const c = blogAnnouncing[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-surface-950 text-white font-sans flex flex-col">
      <PageNav />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 md:py-24 w-full">
        <Link
          to="/blog"
          className="text-sm text-surface-400 hover:text-white transition-colors flex items-center gap-1.5 mb-8"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {c.back}
        </Link>

        <article>
          <div className="flex items-center gap-3 mb-4 text-xs text-surface-500">
            <span className="bg-brand-500/15 text-brand-400 px-2.5 py-1 rounded-full font-semibold">
              {c.category}
            </span>
            <span>{c.date}</span>
            <span>·</span>
            <span>{c.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {c.title}
          </h1>
          <p className="text-surface-400 text-lg leading-relaxed mb-10">
            {c.lede}
          </p>

          <div className="prose prose-invert max-w-none space-y-6 text-surface-300 leading-relaxed">
            <p>{c.intro}</p>

            <h2 className="text-white text-2xl font-semibold mt-10 mb-3">
              {c.h2Problem}
            </h2>
            <p>{c.problemBody}</p>

            <h2 className="text-white text-2xl font-semibold mt-10 mb-3">
              {c.h2Day1}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {c.day1Bullets.map((b, idx) => (
                <li key={idx}>
                  {b.a}
                  {b.plansLink && (
                    <Link
                      to="/pricing"
                      className="text-brand-400 hover:underline"
                    >
                      {b.plansLink}
                    </Link>
                  )}
                  {b.b}
                </li>
              ))}
            </ul>

            <h2 className="text-white text-2xl font-semibold mt-10 mb-3">
              {c.h2No}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {c.noBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="text-white text-2xl font-semibold mt-10 mb-3">
              {c.h2Next}
            </h2>
            <p>
              {c.nextPre}
              <Link
                to="/changelog"
                className="text-brand-400 hover:underline"
              >
                {c.nextChangelog}
              </Link>
              {c.nextPost}
            </p>

            <p className="mt-10 text-surface-400">
              {c.closingPre}
              <a
                href="https://app.lightchats.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 hover:underline"
              >
                {c.closingStartFree}
              </a>
              {c.closingPost}
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
