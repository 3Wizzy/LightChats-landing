import Link from "../i18n/LangLink";
import { useEffect } from "react";
import logo from "../assets/logo.png";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LanguageContext";
import { common } from "../i18n/common";
import { support } from "../i18n/content/support";

const DEFAULT_TITLE = "LightChats — Engage at the Speed of Light";
const DEFAULT_DESCRIPTION =
  "Drive more sales and conversions on Instagram using chat automation. Automate DMs, build visual flows, and convert followers into customers.";

export default function Support() {
  const { lang } = useLang();
  const t = common[lang];
  const s = support[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = s.metaTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", s.metaDescription);
    return () => {
      document.title = DEFAULT_TITLE;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", DEFAULT_DESCRIPTION);
    };
  }, [s.metaTitle, s.metaDescription]);

  return (
    <div className="min-h-screen bg-surface-950 text-white font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-surface-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="LightChats" className="h-8 w-8" />
            <span className="text-lg font-bold tracking-tight">
              LightChats
            </span>
          </Link>
          <Link
            to="/"
            className="text-sm text-surface-400 hover:text-white transition-colors flex items-center gap-1.5"
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
            {t.backToHome}
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{s.heading}</h1>
        <p className="text-surface-400 text-lg mb-12">{s.sub}</p>

        <div className="space-y-10">
          {/* Contact channels */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface-900/50 border border-white/5 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-brand-500/15 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-brand-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">{s.emailTitle}</h3>
              <p className="text-surface-400 text-sm mb-3">{s.emailDesc}</p>
              <a
                href="mailto:contact@lightchats.com"
                className="text-brand-400 text-sm hover:underline"
              >
                contact@lightchats.com
              </a>
            </div>

            <div className="bg-surface-900/50 border border-white/5 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-brand-500/15 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-brand-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">{s.phoneTitle}</h3>
              <p className="text-surface-400 text-sm mb-3">{s.phoneDesc}</p>
              <a
                href="tel:+13802574689"
                className="text-brand-400 text-sm hover:underline"
                dir="ltr"
              >
                +1 (380) 257-4689
              </a>
            </div>

            <div className="bg-surface-900/50 border border-white/5 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-brand-500/15 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-brand-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">{s.responseTitle}</h3>
              <p className="text-surface-400 text-sm">{s.responseDesc}</p>
            </div>
          </div>

          {/* Common topics */}
          <section>
            <h2 className="text-white text-xl font-semibold mb-6">
              {s.commonTopicsTitle}
            </h2>
            <div className="space-y-4">
              {s.topics.map((topic) => (
                <div
                  key={topic.title}
                  className="bg-surface-900/30 border border-white/5 rounded-xl p-5"
                >
                  <h3 className="text-white font-medium mb-2">{topic.title}</h3>
                  <p className="text-surface-400 text-sm leading-relaxed">
                    {topic.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Mailing address */}
          <section>
            <h2 className="text-white text-xl font-semibold mb-4">
              {s.mailingAddressTitle}
            </h2>
            <p className="text-surface-300 text-[15px] leading-relaxed">
              Lightchats LLC
              <br />
              1501 South Greeley Hwy, Ste C #1266
              <br />
              Cheyenne, WY 82007
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
