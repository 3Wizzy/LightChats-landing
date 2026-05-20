import Link from "../i18n/LangLink";
import { useEffect } from "react";
import logo from "../assets/logo.png";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LanguageContext";
import { common } from "../i18n/common";
import { termsConditions } from "../i18n/content/termsConditions";

const DEFAULT_TITLE = "LightChats — Engage at the Speed of Light";
const DEFAULT_DESCRIPTION =
  "Drive more sales and conversions on Instagram using chat automation. Automate DMs, build visual flows, and convert followers into customers.";

const DATE_LOCALE: Record<string, string> = {
  en: "en-US",
  fr: "fr-FR",
  ar: "ar",
};

export default function TermsConditions() {
  const { lang } = useLang();
  const t = common[lang];
  const c = termsConditions[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = c.metaTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", c.metaDescription);
    return () => {
      document.title = DEFAULT_TITLE;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", DEFAULT_DESCRIPTION);
    };
  }, [c.metaTitle, c.metaDescription]);

  const dateString = new Date().toLocaleDateString(DATE_LOCALE[lang] ?? "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{c.title}</h1>
        <p className="text-surface-500 text-sm mb-12">
          {c.lastUpdated} {dateString}
        </p>

        <div className="space-y-10 text-surface-300 text-[15px] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{c.s1Title}</h2>
            <p>{c.s1P1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{c.s2Title}</h2>
            <p>{c.s2P1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{c.s3Title}</h2>
            <p>{c.s3P1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{c.s4Title}</h2>
            <p>{c.s4P1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{c.s5Title}</h2>
            <p>
              {c.s5P1Prefix}
              <Link to="/privacy" className="text-brand-400 hover:underline">
                {c.s5LinkText}
              </Link>
              {c.s5P1Suffix}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{c.s6Title}</h2>
            <p>{c.s6Intro}</p>
            <ul className="list-disc list-inside space-y-2 text-surface-400">
              {c.s6List.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{c.s7Title}</h2>
            <p>{c.s7P1}</p>
            <p>{c.s7P2}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{c.s8Title}</h2>
            <p>{c.s8P1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{c.s9Title}</h2>
            <p>{c.s9P1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{c.s10Title}</h2>
            <p>{c.s10P1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{c.s11Title}</h2>
            <p>{c.s11P1}</p>
            <p>{c.s11P2}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{c.s12Title}</h2>
            <p>{c.s12P1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{c.s13Title}</h2>
            <p>{c.s13P1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{c.s14Title}</h2>
            <p>{c.s14P1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{c.s15Title}</h2>
            <p>{c.s15P1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{c.s16Title}</h2>
            <p>{c.s16P1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{c.s17Title}</h2>
            <p>
              {c.s17P1Prefix}
              <span className="text-brand-400">contact@lightchats.com</span>
              {c.s17P1Suffix}
            </p>
            <p>
              Lightchats LLC<br />
              1501 South Greeley Hwy, Ste C #1266<br />
              Cheyenne, WY 82007
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
