import { useState, useEffect, useRef } from "react";
import Link from "./i18n/LangLink";
import logo from "./assets/logo.png";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import TrustChip from "./components/TrustChip";
import { useLang } from "./i18n/LanguageContext";
import { common } from "./i18n/common";
import { home } from "./i18n/content/home";
import LanguageSwitcher from "./i18n/LanguageSwitcher";

const APP_URL = "https://app.lightchats.com/";

// Icons for the "why is this hard" columns: inbox flood, lost lead, clock.
const problemIcons = [
  "M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z",
  "M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z",
  "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang } = useLang();
  const t = common[lang];
  const h = home[lang];

  const gridIcons = [
    "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
    "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
    "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
    "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.004.828c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z|M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
    "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  ];

  const pricingPlans = [
    {
      name: h.pricingPro,
      price: "$9",
      period: h.perMonth,
      annual: h.pricingProAnnual,
      desc: h.pricingProDesc,
      features: h.pricingProBullets,
      cta: h.pricingProCta,
      ctaLink: "https://app.lightchats.com/signup",
      highlight: true,
    },
    {
      name: h.pricingAgency,
      price: "$29",
      period: h.perMonth,
      annual: h.pricingAgencyAnnual,
      desc: h.pricingAgencyDesc,
      features: h.pricingAgencyBullets,
      cta: h.pricingAgencyCta,
      ctaLink: "https://app.lightchats.com/signup",
      highlight: false,
    },
    {
      name: h.pricingCustom,
      price: h.pricingCustomPrice,
      period: "",
      annual: h.pricingCustomNote,
      desc: h.pricingCustomDesc,
      features: h.pricingCustomBullets,
      cta: h.pricingCustomCta,
      ctaLink: "mailto:contact@lightchats.com?subject=Custom%20plan",
      highlight: false,
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface-950 text-white font-sans relative">
      {/* Background effects */}
      <div className="bg-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <Particles />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface-950/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="LightChats" className="h-9 w-9" />
            <span className="text-lg font-extrabold tracking-tight">
              LightChats
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-surface-400">
            <a href="#features" className="hover:text-white transition-colors">
              {t.features}
            </a>
            <a
              href="#how-it-works"
              className="hover:text-white transition-colors"
            >
              {t.howItWorks}
            </a>
            <Link to="/pricing" className="hover:text-white transition-colors">
              {t.pricing}
            </Link>
            <Link to="/affiliates" className="hover:text-white transition-colors">
              {t.partner}
            </Link>
            <a href="#faq" className="hover:text-white transition-colors">
              {t.faq}
            </a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher variant="nav" />
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-surface-300 hover:text-white transition-colors px-4 py-2"
            >
              {t.logIn}
            </a>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-full transition-all hover:shadow-[0_0_30px_rgba(233,77,30,0.3)]"
            >
              {t.getStartedFree}
            </a>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface-900/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-3">
            <a
              href="#features"
              className="block text-surface-300 hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.features}
            </a>
            <a
              href="#how-it-works"
              className="block text-surface-300 hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.howItWorks}
            </a>
            <Link
              to="/pricing"
              className="block text-surface-300 hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.pricing}
            </Link>
            <Link
              to="/affiliates"
              className="block text-surface-300 hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.partner}
            </Link>
            <a
              href="#faq"
              className="block text-surface-300 hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.faq}
            </a>
            <div className="pt-2 flex items-center gap-3">
              <ThemeToggle />
              <LanguageSwitcher variant="nav" />
            </div>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-brand-500 text-white font-semibold py-2.5 rounded-full mt-2"
            >
              {t.getStartedFree}
            </a>
          </div>
        )}
      </nav>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-500/10 rounded-full blur-[128px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — copy */}
          <div className="text-center lg:text-start">
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-surface-300 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            {t.beta}
          </div>

          <h1 className="animate-fade-in-up animation-delay-200 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
            {t.heroTitleA}
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 bg-clip-text text-transparent">
              {t.heroTitleB}
            </span>
          </h1>

          <p className="animate-fade-in-up animation-delay-400 text-lg md:text-xl text-surface-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            {t.heroSub}
          </p>

          <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:shadow-[0_0_40px_rgba(233,77,30,0.3)]"
            >
              {t.startFree}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-surface-400 hover:text-white font-medium px-6 py-4 transition-colors"
            >
              {t.seeHow}
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>

          <p className="animate-fade-in-up animation-delay-600 mt-3 text-xs text-surface-500 text-center lg:text-start">
            {t.noCardRequired}
          </p>

          <div className="animate-fade-in-up animation-delay-800 mt-7 flex flex-wrap justify-center lg:justify-start gap-2">
            <TrustChip icon="meta" label={t.chipMetaPartner} />
            <TrustChip icon="check" label={t.chipOfficialApi} />
          </div>
          </div>

          {/* Right — floating phone mockups, above the fold */}
          <div className="relative">
            <ChatBubbles bubbles={[h.bubble1, h.bubble2, h.bubble3, h.bubble4, h.bubble5]} />
            <div className="hero-phones animate-fade-in-up animation-delay-400">
              <div className="hero-phone hero-phone-left hidden md:block">
                <PhoneMockup videoSrc="https://mccdn.me/martcdn/next-lp/contents/home-redesign/features_03v3.mp4" />
              </div>
              <div className="hero-phone hero-phone-center">
                <PhoneMockup videoSrc="https://mccdn.me/martcdn/next-lp/contents/home-redesign/features_01v3.mp4" />
              </div>
              <div className="hero-phone hero-phone-right hidden md:block">
                <PhoneMockup videoSrc="https://mccdn.me/martcdn/next-lp/contents/home-redesign/features_04v3.mp4" />
              </div>
            </div>
          </div>
          </div>

          <div className="mt-16 md:mt-20 flex flex-wrap justify-center gap-8 md:gap-16 animate-fade-in-up animation-delay-800">
            {[
              { value: "10K+", label: t.statsMessages },
              { value: "500+", label: t.statsBusinesses },
              { value: "99.9%", label: t.statsUptime },
              { value: "<1s", label: t.statsResponse },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-surface-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Marquee ─── */}
      <section className="py-10 border-y border-white/5 overflow-hidden relative z-10">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              {h.marquee.map((text) => (
                <span
                  key={text + i}
                  className="text-surface-600 text-sm font-medium uppercase tracking-widest"
                >
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ─── Problem ─── */}
      <section className="py-20 md:py-28 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <RevealSection>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-14">
              {h.problemTitle}
            </h2>
          </RevealSection>
          <div className="grid md:grid-cols-3 gap-10">
            {h.problems.map((prob, i) => (
              <RevealSection key={prob.title}>
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-surface-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d={problemIcons[i]} />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">{prob.title}</h3>
                  <p className="text-surface-400 text-sm leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Feature 1 ─── */}
      <section id="features" className="py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
                  {h.f1Eyebrow}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
                  {h.f1TitleA}
                  <span className="text-brand-400">{h.f1TitleB}</span>
                </h2>
                <p className="text-surface-400 text-lg leading-relaxed mb-8">
                  {h.f1Sub}
                </p>
                <div className="space-y-4">
                  {h.f1Bullets.map((item) => (
                    <Bullet key={item} text={item} />
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <PhoneMockup videoSrc="https://mccdn.me/martcdn/next-lp/contents/home-redesign/features_01v3.mp4" />
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Feature 2 ─── */}
      <section className="py-20 md:py-32 bg-surface-900/30 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <PhoneMockup videoSrc="https://mccdn.me/martcdn/next-lp/contents/home-redesign/features_03v3.mp4" />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
                  {h.f2Eyebrow}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
                  {h.f2TitleA}
                  <span className="text-brand-400">{h.f2TitleB}</span>
                </h2>
                <p className="text-surface-400 text-lg leading-relaxed mb-8">
                  {h.f2Sub}
                </p>
                <div className="space-y-4">
                  {h.f2Bullets.map((item) => (
                    <Bullet key={item} text={item} />
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Feature 3 ─── */}
      <section className="py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
                  {h.f3Eyebrow}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
                  {h.f3TitleA}
                  <span className="text-brand-400">{h.f3TitleB}</span>
                </h2>
                <p className="text-surface-400 text-lg leading-relaxed mb-8">
                  {h.f3Sub}
                </p>
                <div className="space-y-4">
                  {h.f3Bullets.map((item) => (
                    <Bullet key={item} text={item} />
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <PhoneMockup videoSrc="https://mccdn.me/martcdn/next-lp/contents/home-redesign/features_04v3.mp4" />
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Features Grid ─── */}
      <section className="py-20 md:py-32 bg-surface-900/30 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
                {h.gridEyebrow}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">
                {h.gridTitleA}
                <br />
                <span className="text-surface-400">{h.gridTitleB}</span>
              </h2>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {h.gridFeatures.map((feature, i) => (
              <RevealSection key={feature.title}>
                <div className="group relative bg-surface-900/50 border border-white/5 rounded-2xl p-8 hover:border-brand-500/30 hover:bg-surface-900/80 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-5 group-hover:bg-brand-500/20 transition-colors">
                    <svg
                      className="w-6 h-6 text-brand-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      {gridIcons[i].split("|").map((d, j) => (
                        <path key={j} d={d} />
                      ))}
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-surface-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="how-it-works" className="py-20 md:py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
                {h.hiwEyebrow}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">
                {h.hiwTitle}
              </h2>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-8">
            {h.hiwSteps.map((item, i) => (
              <RevealSection key={item.step}>
                <div className="relative text-center md:text-start">
                  <div className="text-6xl md:text-7xl font-black text-brand-500/25 mb-4 leading-none">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-surface-400 leading-relaxed">
                    {item.desc}
                  </p>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-8 -end-4 text-surface-700">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section
        id="pricing"
        className="py-20 md:py-32 bg-surface-900/30 relative z-10"
      >
        <div className="max-w-5xl mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
                {h.pricingEyebrow}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">
                {h.pricingTitle}
              </h2>
              <p className="text-surface-400 mt-4">{h.pricingSub}</p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <RevealSection key={plan.name}>
                <div
                  className={`relative rounded-2xl p-8 h-full ${
                    plan.highlight
                      ? "bg-gradient-to-b from-brand-500/10 to-surface-900 border-2 border-brand-500/40"
                      : "bg-surface-900/50 border border-white/5"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {h.mostPopular}
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    <p className="text-surface-500 text-sm mt-1">{plan.desc}</p>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-surface-500 text-sm">
                        {plan.period}
                      </span>
                    )}
                    <p className="text-surface-500 text-sm mt-1.5">
                      {plan.annual}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li
                        key={f.text}
                        className={`flex items-center gap-2 text-sm ${
                          f.highlight
                            ? "text-white font-semibold bg-brand-500/10 ring-1 ring-brand-500/25 rounded-lg px-2.5 py-2 -mx-1"
                            : f.type === "x"
                              ? "text-surface-500"
                              : "text-surface-300"
                        }`}
                      >
                        {f.type === "check" && (
                          <svg
                            className="w-4 h-4 text-brand-400 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                        {f.type === "x" && (
                          <svg
                            className="w-4 h-4 text-surface-600 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                        {f.type === "dollar" && (
                          <svg
                            className="w-4 h-4 text-brand-400 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        )}
                        {f.text}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center font-semibold py-3 rounded-full transition-all ${
                      plan.highlight
                        ? "bg-brand-500 hover:bg-brand-600 text-white hover:shadow-[0_0_30px_rgba(233,77,30,0.3)]"
                        : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection>
            <div className="mt-10 text-center">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 text-sm font-semibold transition-colors"
              >
                {h.seeFullPricing}
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Partner Program ─── */}
      <section id="partner" className="py-20 md:py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <RevealSection>
            <div className="relative rounded-3xl bg-gradient-to-br from-brand-500/10 via-surface-900 to-surface-900 border border-brand-500/20 overflow-hidden">
              <div className="absolute top-0 start-0 w-[400px] h-[400px] bg-brand-500/5 blur-[120px] rounded-full pointer-events-none" />
              <div className="grid md:grid-cols-2 gap-10 p-10 md:p-14 relative">
                <div>
                  <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
                    {h.partnerEyebrow}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 leading-tight">
                    {h.partnerTitleA}
                    <span className="text-brand-400">{h.partnerTitleB}</span>
                    {h.partnerTitleC}
                    <span className="text-brand-400">{h.partnerTitleD}</span>
                  </h2>
                  <p className="text-surface-400 text-lg leading-relaxed mb-8">
                    {h.partnerDescPrefix}
                    <span className="text-white font-medium">{h.partner30}</span>
                    {h.partnerDescMid}
                    <span className="text-white font-medium">{h.partner15}</span>
                    {h.partnerDescAfter}
                    <span className="text-white font-medium">{h.partner5}</span>
                    {h.partnerDescEnd}
                  </p>
                  <a
                    href="https://partners.lightchats.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:shadow-[0_0_30px_rgba(233,77,30,0.3)]"
                  >
                    {h.becomePartner}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
                <div className="space-y-5">
                  {h.partnerSteps.map((item) => (
                    <div
                      key={item.step}
                      className="flex gap-4 items-start bg-white/[0.03] border border-white/5 rounded-xl p-5"
                    >
                      <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0 text-brand-400 font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">
                          {item.title}
                        </h4>
                        <p className="text-surface-400 text-sm mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
                {h.faqEyebrow}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">
                {h.faqTitle}
              </h2>
            </div>
          </RevealSection>

          <div className="space-y-4">
            {h.faqs.map((faq) => (
              <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <RevealSection>
            <div className="relative rounded-3xl bg-gradient-to-br from-brand-500/20 to-surface-900 border border-brand-500/20 p-12 md:p-16 text-center overflow-hidden">
              <div className="absolute top-0 end-0 w-[300px] h-[300px] bg-brand-500/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 start-0 w-[200px] h-[200px] bg-brand-400/5 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {h.ctaTitle}
                </h2>
                <p className="text-surface-400 text-lg mb-8 max-w-xl mx-auto">
                  {h.ctaSub}
                </p>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:shadow-[0_0_40px_rgba(233,77,30,0.3)]"
                >
                  {h.ctaBtn}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─── Sub-components ─── */


function Bullet({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0">
        <svg
          className="w-3 h-3 text-brand-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <span className="text-surface-300 text-sm">{text}</span>
    </div>
  );
}

function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    for (let i = 0; i < 20; i++) {
      const p = document.createElement("div");
      p.classList.add("particle");
      p.style.left = Math.random() * 100 + "%";
      p.style.width = p.style.height = Math.random() * 2 + 1.5 + "px";
      p.style.animationDuration = Math.random() * 12 + 10 + "s";
      p.style.animationDelay = Math.random() * 10 + "s";
      container.appendChild(p);
    }
  }, []);

  return <div ref={containerRef} className="particles-container" />;
}

function ChatBubbles({ bubbles }: { bubbles: string[] }) {
  const positions = [
    { className: "chat-bubble chat-bubble-1", style: { top: "-10px", left: "5%" } as React.CSSProperties, align: "left" as const },
    { className: "chat-bubble chat-bubble-2", style: { top: "30px", right: "3%" } as React.CSSProperties, align: "right" as const },
    { className: "chat-bubble chat-bubble-3", style: { top: "100px", left: "2%" } as React.CSSProperties, align: "left" as const },
    { className: "chat-bubble chat-bubble-4", style: { top: "80px", right: "5%" } as React.CSSProperties, align: "right" as const },
    { className: "chat-bubble chat-bubble-5", style: { top: "160px", left: "8%" } as React.CSSProperties, align: "left" as const },
  ];

  return (
    <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
      {positions.map((bubble, i) => (
        <div
          key={i}
          className={`absolute ${bubble.className}`}
          style={bubble.style}
        >
          <div
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-medium backdrop-blur-sm ${
              bubble.align === "left"
                ? "bg-white/[0.07] border border-white/10 text-surface-300 rounded-bl-sm"
                : "bg-brand-500/15 border border-brand-500/20 text-brand-300 rounded-br-sm"
            }`}
          >
            {bubbles[i]}
          </div>
        </div>
      ))}
    </div>
  );
}

function PhoneMockup({ videoSrc }: { videoSrc: string }) {
  return (
    <div className="phone-mockup">
      <div className="phone-screen">
        <video autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/5 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-start hover:bg-white/[0.02] transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium pe-4">{question}</span>
        <svg
          className={`w-5 h-5 text-surface-500 flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
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
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="px-5 text-surface-400 text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default App;
