import { useEffect, useState } from "react";
import Link from "../i18n/LangLink";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import TrustChip from "../components/TrustChip";
import { useLang } from "../i18n/LanguageContext";
import { common } from "../i18n/common";
import { affiliates } from "../i18n/content/affiliates";

const PARTNER_URL = "https://partners.lightchats.com";

/** Demo numbers shown in the illustrative dashboard mockup. */
const DASH_STATS = [
  { key: "clicks", value: "3,214" },
  { key: "signups", value: "209" },
  { key: "paid", value: "57" },
  { key: "earned", value: "$1,486" },
] as const;

export default function Affiliates() {
  const { lang } = useLang();
  const c = affiliates[lang];
  const t = common[lang];
  const [referred, setReferred] = useState(25);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const money = (n: number) =>
    `$${n % 1 === 0 ? n.toLocaleString("en-US") : n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const statLabels: Record<(typeof DASH_STATS)[number]["key"], string> = {
    clicks: c.dashClicks,
    signups: c.dashSignups,
    paid: c.dashPaid,
    earned: c.dashEarned,
  };

  return (
    <div className="min-h-screen bg-surface-950 text-white font-sans flex flex-col">
      <PageNav />
      <main className="flex-1 w-full">
        {/* ─── Hero ─── */}
        <section className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-12 text-center">
          <div className="animate-fade-in-up inline-flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-surface-300">
            {c.eyebrow}
          </div>
          <h1 className="animate-fade-in-up animation-delay-200 text-4xl md:text-6xl font-bold mt-6 leading-tight">
            {c.heroTitle}
          </h1>
          <p className="animate-fade-in-up animation-delay-400 text-surface-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            {c.heroSub}
          </p>
          <div className="animate-fade-in-up animation-delay-600 mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={PARTNER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:shadow-[0_0_40px_rgba(233,77,30,0.4)]"
            >
              {c.becomePartner}
            </a>
            <a
              href={PARTNER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-full border border-white/10 transition-colors"
            >
              {c.partnerLogin}
            </a>
          </div>
          <p className="animate-fade-in-up animation-delay-600 mt-3 text-xs text-surface-500">
            {c.freeToJoin}
          </p>
          <div className="animate-fade-in-up animation-delay-800 mt-6 flex flex-wrap justify-center gap-2">
            <TrustChip icon="meta" label={t.chipMetaPartner} />
            <TrustChip icon="check" label={t.chipOfficialApi} />
          </div>
        </section>

        {/* ─── Dashboard mockup ─── */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="animate-fade-in-up animation-delay-800 rounded-2xl border border-white/10 bg-surface-900/40 p-2">
            {/* window title bar */}
            <div className="flex items-center gap-2 px-4 py-3">
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/5" />
              <span className="ms-3 text-xs text-surface-500">{c.dashTitle}</span>
            </div>
            <div className="rounded-xl bg-surface-950/60 border border-white/5 p-4 md:p-6">
              {/* stat cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {DASH_STATS.map((s) => (
                  <div
                    key={s.key}
                    className="rounded-xl border border-white/5 bg-surface-900/50 px-5 py-4 hover:border-white/10 transition-colors"
                  >
                    <p className="text-[10px] uppercase tracking-widest text-surface-500 font-semibold">
                      {statLabels[s.key]}
                    </p>
                    <p
                      className={`text-2xl font-bold mt-1 ${s.key === "earned" ? "text-brand-400" : "text-white"}`}
                    >
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* chart */}
              <div className="mt-3 rounded-xl border border-white/5 bg-surface-900/30 p-5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <p className="text-sm font-medium text-surface-300">
                    {c.dashChartTitle}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-surface-500">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-400" />
                      {c.dashLegendCommissions}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-surface-500" />
                      {c.dashLegendReferrals}
                    </span>
                  </div>
                </div>
                <svg
                  viewBox="0 0 800 220"
                  className="w-full h-40 md:h-52 mt-4"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <line x1="0" y1="210" x2="800" y2="210" stroke="currentColor" className="text-white/10" strokeWidth="1" />
                  <line x1="0" y1="140" x2="800" y2="140" stroke="currentColor" className="text-white/5" strokeWidth="1" />
                  <line x1="0" y1="70" x2="800" y2="70" stroke="currentColor" className="text-white/5" strokeWidth="1" />
                  <path
                    className="dash-line"
                    d="M0,195 C90,188 150,172 240,155 C330,138 390,118 470,96 C550,74 640,58 720,44 L800,32"
                    fill="none"
                    stroke="#ed693e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    className="dash-line dash-line-2"
                    d="M0,206 C110,202 210,193 310,183 C430,171 540,155 650,140 L800,122"
                    fill="none"
                    stroke="#737373"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="6 6"
                  />
                </svg>
                <div className="flex justify-between text-[10px] text-surface-600 mt-2">
                  {c.dashMonths.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>

              {/* activity feed */}
              <div className="mt-3 grid md:grid-cols-3 gap-3">
                {c.dashActivity.map((a, i) => (
                  <div
                    key={a.label}
                    className={`animate-fade-in-up flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-surface-900/50 px-4 py-3 ${
                      ["animation-delay-400", "animation-delay-600", "animation-delay-800"][i]
                    }`}
                  >
                    <span className="inline-flex items-center gap-2 text-xs text-surface-400 min-w-0">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${i === 0 ? "bg-green-400" : "bg-brand-400"}`} />
                      <span className="truncate">{a.label}</span>
                    </span>
                    <span className={`text-xs font-semibold whitespace-nowrap ${i === 0 ? "text-surface-500" : "text-brand-400"}`}>
                      {a.meta}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Commission breakdown ─── */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-3 gap-4">
            {(
              [
                [c.card1Value, c.card1Title, c.card1Desc],
                [c.card2Value, c.card2Title, c.card2Desc],
                [c.card3Value, c.card3Title, c.card3Desc],
              ] as const
            ).map(([value, title, desc]) => (
              <Reveal key={title}>
                <div className="bg-surface-900/40 border border-white/5 rounded-2xl p-8 h-full hover:border-brand-500/30 transition-colors">
                  <p className="text-4xl font-extrabold text-brand-400">{value}</p>
                  <p className="text-white font-semibold mt-2">{title}</p>
                  <p className="text-surface-500 text-sm mt-2 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─── How it works ─── */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-12">{c.howItWorks}</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {c.steps.slice(0, 3).map((s, i) => (
              <Reveal key={s.title}>
                <div className="h-full">
                  {/* mini-visual */}
                  <div className="h-44 rounded-2xl border border-white/5 bg-surface-900/40 flex items-center justify-center overflow-hidden mb-5">
                    {i === 0 && (
                      /* sign-up form skeleton */
                      <div className="w-40 rounded-lg border border-white/10 bg-surface-950/70 p-4 space-y-2.5">
                        <div className="h-2 w-3/4 rounded bg-white/10" />
                        <div className="h-2 w-full rounded bg-white/5" />
                        <div className="h-2 w-full rounded bg-white/5" />
                        <div className="h-2 w-2/3 rounded bg-white/5" />
                        <div className="h-6 w-24 rounded-full bg-brand-500/80 mt-3" />
                      </div>
                    )}
                    {i === 1 && (
                      /* share-your-link graphic */
                      <div className="relative w-48 h-32">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-500/20 border border-brand-500/40 flex items-center justify-center">
                          <svg className="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                          </svg>
                        </div>
                        {[
                          { pos: "top-0 left-4", d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" },
                          { pos: "top-2 right-2", d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" },
                          { pos: "bottom-0 left-8", d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" },
                          { pos: "bottom-2 right-6", d: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" },
                        ].map((icon) => (
                          <div key={icon.pos} className={`absolute ${icon.pos} w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center`}>
                            <svg className="w-3.5 h-3.5 text-surface-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d={icon.d} />
                            </svg>
                          </div>
                        ))}
                      </div>
                    )}
                    {i === 2 && (
                      /* payout feed */
                      <div className="w-44 space-y-2">
                        {[
                          ["+$5.00", "bg-green-400"],
                          ["+$2.70", "bg-brand-400"],
                          ["+$8.70", "bg-brand-400"],
                        ].map(([amount, dot], j) => (
                          <div key={j} className="flex items-center justify-between rounded-lg border border-white/10 bg-surface-950/70 px-3 py-2">
                            <span className="flex items-center gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                              <span className="h-1.5 w-14 rounded bg-white/10 inline-block" />
                            </span>
                            <span className="text-[11px] font-semibold text-brand-400">{amount}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <h3 className="text-white font-semibold">{s.title}</h3>
                  <p className="text-surface-400 text-sm mt-2 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─── Earnings calculator ─── */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold">{c.calcTitle}</h2>
            <p className="text-surface-400 mt-3 mb-8">{c.calcSub}</p>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-surface-900/40 p-6 md:p-8">
              <div className="flex items-center justify-between mb-3">
                <label htmlFor="referred" className="text-sm font-medium text-surface-300">
                  {c.calcLabel}
                </label>
                <span className="text-xl font-bold text-white">{referred}</span>
              </div>
              <input
                id="referred"
                type="range"
                min={1}
                max={100}
                value={referred}
                onChange={(e) => setReferred(Number(e.target.value))}
                className="w-full accent-brand-500 cursor-pointer"
              />
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                <div className="rounded-xl border border-white/5 bg-surface-950/50 p-6 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-surface-500 font-semibold">
                    {c.calcBounty}
                  </p>
                  <p className="text-3xl font-extrabold text-white mt-2">{money(5 * referred)}</p>
                  <p className="text-surface-600 text-xs mt-1">{c.calcBountyDetail}</p>
                </div>
                <div className="rounded-xl border border-brand-500/25 bg-brand-500/[0.06] p-6 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-surface-500 font-semibold">
                    {c.calcProLabel}
                  </p>
                  <p className="text-3xl font-extrabold text-brand-400 mt-2">
                    {money(2.7 * referred)}
                    <span className="text-sm font-medium text-surface-500">{c.calcPerMonth}</span>
                  </p>
                </div>
                <div className="rounded-xl border border-white/5 bg-surface-950/50 p-6 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-surface-500 font-semibold">
                    {c.calcBusinessLabel}
                  </p>
                  <p className="text-3xl font-extrabold text-white mt-2">
                    {money(8.7 * referred)}
                    <span className="text-sm font-medium text-surface-500">{c.calcPerMonth}</span>
                  </p>
                </div>
              </div>
              <p className="text-center text-surface-500 text-sm mt-6">{c.calcFootnote}</p>
            </div>
          </Reveal>
        </section>

        {/* ─── FAQ ─── */}
        <section className="max-w-3xl mx-auto px-6 pb-24">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">{c.faqTitle}</h2>
          </Reveal>
          <div className="space-y-3">
            {c.faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-surface-900/30 border border-white/5 rounded-xl overflow-hidden"
              >
                <summary className="list-none cursor-pointer p-5 flex items-center justify-between gap-4">
                  <span className="text-white font-medium text-[15px]">{f.q}</span>
                  <svg
                    className="w-5 h-5 text-surface-500 flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-surface-400 text-sm leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="max-w-4xl mx-auto px-6 pb-24">
          <Reveal>
            <div className="text-center bg-gradient-to-br from-brand-500/10 via-surface-900 to-surface-900 border border-brand-500/20 rounded-3xl p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{c.ctaTitle}</h2>
              <p className="text-surface-400 mb-6">{c.ctaSub}</p>
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <a
                  href={PARTNER_URL}
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
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
