import Link from "../i18n/LangLink";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LanguageContext";
import { common } from "../i18n/common";
import { pricing } from "../i18n/content/pricing";

type FeatureType = "check" | "x" | "dollar";

function CheckIcon() {
  return (
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
  );
}

function XIcon() {
  return (
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
  );
}

function DollarIcon() {
  return (
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
  );
}

function FeatureIcon({ type }: { type: FeatureType }) {
  if (type === "check") return <CheckIcon />;
  if (type === "x") return <XIcon />;
  return <DollarIcon />;
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <details
      className="group bg-surface-900/30 border border-white/5 rounded-xl overflow-hidden"
      open={open}
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="list-none cursor-pointer w-full flex items-center justify-between gap-4 p-5 text-start hover:bg-white/[0.02] transition-colors">
        <span className="text-white font-medium text-[15px]">{q}</span>
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
        {a}
      </div>
    </details>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const { lang } = useLang();
  const t = common[lang];
  const p = pricing[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-12">
        <div className="text-center">
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
            {p.eyebrow}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 leading-tight">
            {p.titleA}
            <br className="hidden md:block" /> {p.titleB}
          </h1>
          <p className="text-surface-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            {p.intro}
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-2 mt-10">
          <div className="inline-flex items-center bg-surface-900/60 border border-white/5 rounded-full p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                billing === "monthly"
                  ? "bg-white text-surface-950"
                  : "text-surface-400 hover:text-white"
              }`}
            >
              {p.monthly}
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors flex items-center gap-2 ${
                billing === "annual"
                  ? "bg-white text-surface-950"
                  : "text-surface-400 hover:text-white"
              }`}
            >
              {p.annual}
              <span className="text-brand-400 text-xs font-semibold">
                {p.saveBadge}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Plan cards */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {p.plans.map((plan) => {
            const showAnnual = billing === "annual" && !plan.isFree;
            const price = showAnnual ? plan.annual : plan.monthly;
            const period = plan.isFree ? "" : showAnnual ? p.perYear : p.perMonth;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 h-full ${
                  plan.highlight
                    ? "bg-gradient-to-b from-brand-500/10 to-surface-900 border-2 border-brand-500/40"
                    : "bg-surface-900/50 border border-white/5"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {p.mostPopular}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="text-surface-500 text-sm mt-1">{plan.desc}</p>
                </div>
                <div className="mb-2">
                  <span className="text-4xl font-extrabold">{price}</span>
                  {period && (
                    <span className="text-surface-500 text-sm">{period}</span>
                  )}
                </div>
                {showAnnual && plan.annualSavings && (
                  <p className="text-brand-400 text-xs font-semibold mb-6">
                    {plan.annualSavings}
                    {p.vsMonthly}
                  </p>
                )}
                {!showAnnual && plan.annualSavings && (
                  <p className="text-surface-500 text-xs mb-6">
                    {p.orAnnualPrefix}
                    {plan.annual}
                    {p.orAnnualMid}
                    {plan.annualSavings.toLowerCase()}
                    {p.orAnnualSuffix}
                  </p>
                )}
                {!plan.annualSavings && <div className="mb-6" />}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f.text}
                      className={`flex items-start gap-2 text-sm ${
                        f.highlight
                          ? "text-white font-semibold bg-brand-500/10 ring-1 ring-brand-500/25 rounded-lg px-2.5 py-2 -mx-1"
                          : f.type === "x"
                            ? "text-surface-500"
                            : "text-surface-300"
                      }`}
                    >
                      <span className="mt-0.5">
                        <FeatureIcon type={f.type} />
                      </span>
                      <span>{f.text}</span>
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
            );
          })}
        </div>

        <p className="text-center text-surface-500 text-sm mt-8">
          {p.multiAccountNote}
        </p>
      </section>

      {/* Comparison table */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">{p.compareTitle}</h2>
          <p className="text-surface-400 mt-3">{p.compareSub}</p>
        </div>

        <div className="bg-surface-900/30 border border-white/5 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-start text-surface-500 font-medium px-6 py-4 min-w-[220px]">
                    {p.featureCol}
                  </th>
                  <th className="text-start text-white font-semibold px-6 py-4">
                    {p.freeCol}
                  </th>
                  <th className="text-start text-brand-400 font-semibold px-6 py-4 bg-brand-500/[0.04]">
                    {p.proCol}
                  </th>
                  <th className="text-start text-white font-semibold px-6 py-4">
                    {p.agencyCol}
                  </th>
                </tr>
              </thead>
              <tbody>
                {p.rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={
                      i !== p.rows.length - 1
                        ? "border-b border-white/5"
                        : ""
                    }
                  >
                    <td className="text-surface-400 px-6 py-4">{row.label}</td>
                    <td className="text-surface-300 px-6 py-4">{row.free}</td>
                    <td className="text-surface-200 px-6 py-4 bg-brand-500/[0.04]">
                      {row.pro}
                    </td>
                    <td className="text-surface-300 px-6 py-4">{row.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Auto top-up explainer */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-surface-900/30 border border-white/5 rounded-2xl p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-brand-500/15 flex items-center justify-center flex-shrink-0">
              <DollarIcon />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">{p.topupTitle}</h2>
              <p className="text-surface-400 mt-2">{p.topupSub}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-surface-950/50 border border-white/5 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">
                {p.topupCapTitle}
              </h3>
              <p className="text-surface-400 text-sm leading-relaxed">
                {p.topupCapBefore}
                <span className="text-white font-medium">
                  {p.topupCapBold}
                </span>
                {p.topupCapAfter}
              </p>
            </div>
            <div className="bg-surface-950/50 border border-white/5 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">
                {p.topupEmailTitle}
              </h3>
              <p className="text-surface-400 text-sm leading-relaxed">
                {p.topupEmailDesc}
              </p>
            </div>
            <div className="bg-surface-950/50 border border-white/5 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">
                {p.topupFreeTitle}
              </h3>
              <p className="text-surface-400 text-sm leading-relaxed">
                {p.topupFreeDesc}
              </p>
            </div>
            <div className="bg-surface-950/50 border border-white/5 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">
                {p.topupNoCardTitle}
              </h3>
              <p className="text-surface-400 text-sm leading-relaxed">
                {p.topupNoCardDesc}
              </p>
            </div>
          </div>

          <p className="text-surface-500 text-sm mt-8 leading-relaxed">
            {p.topupFootnote}
          </p>
        </div>
      </section>

      {/* Annual savings */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">{p.annualTitle}</h2>
          <p className="text-surface-400 mt-3">{p.annualSub}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-surface-900/50 border border-white/5 rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-1">{p.annualProTitle}</h3>
            <p className="text-surface-500 text-sm mb-6">{p.annualProSub}</p>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-surface-400">
                <span>{p.monthlyTimes12}</span>
                <span>$108</span>
              </div>
              <div className="flex justify-between text-surface-400">
                <span>{p.annualLabel}</span>
                <span className="text-white font-semibold">$79</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-white/5 text-brand-400 font-semibold">
                <span>{p.youSave}</span>
                <span>~27%</span>
              </div>
            </div>
          </div>
          <div className="bg-surface-900/50 border border-white/5 rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-1">
              {p.annualAgencyTitle}
            </h3>
            <p className="text-surface-500 text-sm mb-6">{p.annualAgencySub}</p>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-surface-400">
                <span>{p.monthlyTimes12}</span>
                <span>$348</span>
              </div>
              <div className="flex justify-between text-surface-400">
                <span>{p.annualLabel}</span>
                <span className="text-white font-semibold">$279</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-white/5 text-brand-400 font-semibold">
                <span>{p.youSave}</span>
                <span>~20%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate program */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="relative rounded-3xl bg-gradient-to-br from-brand-500/10 via-surface-900 to-surface-900 border border-brand-500/20 overflow-hidden">
          <div className="absolute top-0 start-0 w-[400px] h-[400px] bg-brand-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="p-10 md:p-14 relative">
            <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
              {p.affiliateEyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 leading-tight">
              {p.affiliateTitleA}
              <span className="text-brand-400">{p.affiliatePct}</span>
              {p.affiliateTitleB}
              <span className="text-brand-400">{p.affiliateBounty}</span>
              {p.affiliateTitleC}
            </h2>
            <p className="text-surface-400 text-lg leading-relaxed mb-8 max-w-3xl">
              {p.affiliateBodyA}
              <span className="text-white font-medium">
                {p.affiliateBodyPct1}
              </span>
              {p.affiliateBodyB}
              <span className="text-white font-medium">
                {p.affiliateBodyPct2}
              </span>
              {p.affiliateBodyC}
              <span className="text-white font-medium">
                {p.affiliateBodyBounty}
              </span>
              {p.affiliateBodyD}
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                <p className="text-2xl font-bold text-brand-400">30%</p>
                <p className="text-surface-300 text-sm font-medium mt-1">
                  {p.affiliateY1Title}
                </p>
                <p className="text-surface-500 text-xs mt-1">
                  {p.affiliateY1Desc}
                </p>
              </div>
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                <p className="text-2xl font-bold text-brand-400">15%</p>
                <p className="text-surface-300 text-sm font-medium mt-1">
                  {p.affiliateLifetimeTitle}
                </p>
                <p className="text-surface-500 text-xs mt-1">
                  {p.affiliateLifetimeDesc}
                </p>
              </div>
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                <p className="text-2xl font-bold text-brand-400">$5</p>
                <p className="text-surface-300 text-sm font-medium mt-1">
                  {p.affiliateInstantTitle}
                </p>
                <p className="text-surface-500 text-xs mt-1">
                  {p.affiliateInstantDesc}
                </p>
              </div>
            </div>

            <div className="bg-surface-950/50 border border-white/5 rounded-xl p-6 mb-8">
              <p className="text-surface-400 text-sm mb-3 font-medium">
                {p.affiliateExampleLabel}
              </p>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-white font-semibold">
                    {p.affiliateUpfrontAmount}
                  </p>
                  <p className="text-surface-500 text-xs">
                    {p.affiliateUpfrontDesc}
                  </p>
                </div>
                <div>
                  <p className="text-white font-semibold">
                    {p.affiliateY1Amount}
                  </p>
                  <p className="text-surface-500 text-xs">
                    {p.affiliateY1Calc}
                  </p>
                </div>
                <div>
                  <p className="text-white font-semibold">
                    {p.affiliateY2Amount}
                  </p>
                  <p className="text-surface-500 text-xs">
                    {p.affiliateY2Calc}
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://partners.lightchats.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:shadow-[0_0_30px_rgba(233,77,30,0.3)]"
            >
              {p.becomePartner}
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
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">{p.faqTitle}</h2>
        </div>
        <div className="space-y-3">
          {p.faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="text-center bg-gradient-to-br from-brand-500/10 via-surface-900 to-surface-900 border border-brand-500/20 rounded-3xl p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{p.ctaTitle}</h2>
          <p className="text-surface-400 text-lg mb-8 max-w-xl mx-auto">
            {p.ctaSub}
          </p>
          <a
            href="https://app.lightchats.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-[0_0_40px_rgba(233,77,30,0.4)]"
          >
            {p.ctaBtn}
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
      </section>

      <Footer />
    </div>
  );
}
