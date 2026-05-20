import Link from "../i18n/LangLink";
import { useEffect } from "react";
import logo from "../assets/logo.png";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LanguageContext";
import { common } from "../i18n/common";
import { privacyPolicy } from "../i18n/content/privacyPolicy";

const DEFAULT_TITLE = "LightChats — Engage at the Speed of Light";
const DEFAULT_DESCRIPTION =
  "Drive more sales and conversions on Instagram using chat automation. Automate DMs, build visual flows, and convert followers into customers.";

const DATE_LOCALE: Record<string, string> = {
  en: "en-US",
  fr: "fr-FR",
  ar: "ar",
};

export default function PrivacyPolicy() {
  const { lang } = useLang();
  const t = common[lang];
  const p = privacyPolicy[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = p.metaTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", p.metaDescription);
    return () => {
      document.title = DEFAULT_TITLE;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", DEFAULT_DESCRIPTION);
    };
  }, [p.metaTitle, p.metaDescription]);

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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{p.title}</h1>
        <p className="text-surface-500 text-sm mb-12">
          {p.lastUpdated} {dateString}
        </p>

        <div className="space-y-10 text-surface-300 text-[15px] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{p.s1Title}</h2>
            <p>{p.s1P1}</p>
            <p>{p.s1P2}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{p.s2Title}</h2>
            <h3 className="text-white font-medium">{p.s2H1}</h3>
            <p>{p.s2H1P}</p>
            <h3 className="text-white font-medium">{p.s2H2}</h3>
            <p>{p.s2H2P}</p>
            <h3 className="text-white font-medium">{p.s2H3}</h3>
            <p>{p.s2H3P}</p>
            <h3 className="text-white font-medium">{p.s2H4}</h3>
            <p>{p.s2H4P}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{p.s3Title}</h2>
            <ul className="list-disc list-inside space-y-2 text-surface-400">
              {p.s3List.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{p.s4Title}</h2>
            <p>{p.s4P1}</p>
            <ul className="list-disc list-inside space-y-2 text-surface-400">
              {p.s4List.map((item) => (
                <li key={item.label}>
                  <span className="text-white">{item.label}</span> {item.text}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{p.s5Title}</h2>
            <p>{p.s5P1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{p.s6Title}</h2>
            <p>{p.s6P1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{p.s7Title}</h2>
            <p>{p.s7P1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{p.s8Title}</h2>
            <p>{p.s8P1}</p>
            <ul className="list-disc list-inside space-y-2 text-surface-400">
              {p.s8List.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              {p.s8P2Prefix}
              <span className="text-brand-400">contact@lightchats.com</span>
              {p.s8P2Suffix}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{p.s9Title}</h2>
            <p>{p.s9P1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{p.s10Title}</h2>
            <p>{p.s10P1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{p.s11Title}</h2>
            <p>{p.s11P1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">{p.s12Title}</h2>
            <p>
              {p.s12P1Prefix}
              <span className="text-brand-400">contact@lightchats.com</span>
              {p.s12P1Suffix}
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
