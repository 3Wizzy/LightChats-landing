import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface-950 text-white font-sans">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface-950/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Content Track" className="h-8 w-8" />
            <span className="text-lg font-bold tracking-tight">
              Content Track
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-surface-400">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a
              href="#how-it-works"
              className="hover:text-white transition-colors"
            >
              How it works
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://app.contenttrak.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-surface-300 hover:text-white transition-colors px-4 py-2"
            >
              Log in
            </a>
            <a
              href="https://app.contenttrak.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-full transition-colors"
            >
              Get Started Free
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
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface-900/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-3">
            <a href="#features" className="block text-surface-300 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="block text-surface-300 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>How it works</a>
            <a href="#pricing" className="block text-surface-300 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#faq" className="block text-surface-300 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a href="https://app.contenttrak.com/" target="_blank" rel="noopener noreferrer" className="block text-center bg-brand-500 text-white font-semibold py-2.5 rounded-full mt-2">Get Started Free</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-500/10 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-brand-400/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-surface-300 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Now in public beta
          </div>

          <h1 className="animate-fade-in-up animation-delay-200 text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Automate Your
            <br />
            <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
              Instagram Moderation
            </span>
          </h1>

          <p className="animate-fade-in-up animation-delay-400 text-lg md:text-xl text-surface-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Auto-delete toxic comments, reply to DMs instantly, and track
            engagement across all your Instagram accounts — all from one
            dashboard.
          </p>

          <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.contenttrak.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:shadow-[0_0_40px_rgba(233,77,30,0.3)]"
            >
              Start for free
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
              See how it works
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

          {/* Stats bar */}
          <div className="mt-16 md:mt-24 flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: "10K+", label: "Comments Moderated" },
              { value: "500+", label: "Active Accounts" },
              { value: "99.9%", label: "Uptime" },
              { value: "<1s", label: "Response Time" },
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

      {/* Dashboard Preview */}
      <section className="relative max-w-6xl mx-auto px-6 pb-20 md:pb-32">
        <div className="relative rounded-2xl border border-white/10 bg-surface-900/50 overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-4 text-xs text-surface-500">
              app.contenttrack.io
            </span>
          </div>
          <DashboardMockup />
        </div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-brand-500/10 blur-[60px] rounded-full pointer-events-none" />
      </section>

      {/* Marquee logos */}
      <section className="py-12 border-y border-white/5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              {[
                "Instagram",
                "Business Accounts",
                "Comment Moderation",
                "DM Automation",
                "Analytics",
                "Multi-Account",
                "Real-time Webhooks",
                "Forbidden Keywords",
              ].map((text) => (
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

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
              Features
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">
              Everything you need to
              <br />
              <span className="text-surface-400">manage your community</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                ),
                title: "Comment Moderation",
                desc: "Auto-detect and remove toxic, spam, or unwanted comments using your custom keyword filters.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                ),
                title: "DM Auto-Reply",
                desc: "Instantly respond to direct messages with customizable templates. Never miss a conversation.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                ),
                title: "Real-time Analytics",
                desc: "Track comments, removals, DM activity, and engagement trends with beautiful charts and insights.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                ),
                title: "Multi-Account Management",
                desc: "Connect unlimited Instagram business accounts and manage them all from a single dashboard.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                ),
                title: "Instant Webhooks",
                desc: "Real-time Instagram webhook integration means comments are caught and handled within seconds.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                ),
                title: "Flagged User Tracking",
                desc: "Automatically track users whose comments were removed. Build a watchlist of repeat offenders.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group relative bg-surface-900/50 border border-white/5 rounded-2xl p-8 hover:border-brand-500/30 hover:bg-surface-900/80 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-5 group-hover:bg-brand-500/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-brand-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-surface-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-32 bg-surface-900/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
              How it works
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">
              Set up in 3 minutes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect Your Account",
                desc: "Link your Instagram business account through our secure OAuth flow. Takes 30 seconds.",
              },
              {
                step: "02",
                title: "Set Your Rules",
                desc: "Define forbidden keywords, auto-reply messages, and moderation preferences for each account.",
              },
              {
                step: "03",
                title: "Let It Run",
                desc: "Content Track monitors 24/7 — auto-deleting bad comments, replying to DMs, and tracking everything.",
              },
            ].map((item, i) => (
              <div key={item.step} className="relative text-center md:text-left">
                <div className="text-6xl md:text-7xl font-black text-brand-500/10 mb-4 leading-none">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-surface-400 leading-relaxed">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-surface-700">
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
            ))}
          </div>
        </div>
      </section>

      {/* Big Feature Spotlight */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
                Dashboard
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Full visibility into your{" "}
                <span className="text-brand-400">community health</span>
              </h2>
              <p className="text-surface-400 leading-relaxed mb-8">
                See daily activity charts, comment trends, flagged users, and
                engagement metrics — all in real time. Know exactly what's
                happening across every connected account.
              </p>
              <div className="space-y-4">
                {[
                  "14-day activity history with visual charts",
                  "Per-account stats: followers, posts, engagement",
                  "Contact tracking with first/last seen timestamps",
                  "Real-time activity feed with instant updates",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
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
                    <span className="text-surface-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-surface-900/50 p-6 space-y-4">
                <ActivityChart />
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-500/5 blur-[80px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-32 bg-surface-900/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
              Pricing
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">
              Simple, transparent pricing
            </h2>
            <p className="text-surface-400 mt-4">
              Start free. Upgrade when you need more.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Free",
                price: "$0",
                period: "forever",
                desc: "Perfect to get started",
                features: [
                  "1 Instagram account",
                  "50 comments/day moderation",
                  "Basic keyword filters",
                  "7-day activity history",
                ],
                cta: "Get Started",
                highlight: false,
              },
              {
                name: "Pro",
                price: "$19",
                period: "/month",
                desc: "For growing creators",
                features: [
                  "5 Instagram accounts",
                  "Unlimited moderation",
                  "DM auto-reply",
                  "14-day activity history",
                  "Flagged user tracking",
                  "Priority support",
                ],
                cta: "Start Free Trial",
                highlight: true,
              },
              {
                name: "Team",
                price: "$49",
                period: "/month",
                desc: "For agencies & teams",
                features: [
                  "Unlimited accounts",
                  "Everything in Pro",
                  "Team collaboration",
                  "Advanced analytics",
                  "API access",
                  "Dedicated support",
                ],
                cta: "Contact Sales",
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
                  plan.highlight
                    ? "bg-gradient-to-b from-brand-500/10 to-surface-900 border-2 border-brand-500/40"
                    : "bg-surface-900/50 border border-white/5"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="text-surface-500 text-sm mt-1">{plan.desc}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-surface-500 text-sm">
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-surface-300"
                    >
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
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://app.contenttrak.com/"
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
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">
              Common questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do I need an Instagram Business account?",
                a: "Yes, Content Track works with Instagram Business and Creator accounts connected through Facebook's official API. Personal accounts are not supported.",
              },
              {
                q: "How fast are comments removed?",
                a: "Comments are detected and removed within seconds via Instagram's real-time webhook system. There's no polling delay.",
              },
              {
                q: "Is my Instagram data safe?",
                a: "Absolutely. We use Instagram's official Graph API with OAuth authentication. We never store your password and all data is encrypted.",
              },
              {
                q: "Can I customize what gets filtered?",
                a: "Yes — you define your own forbidden keywords and phrases per account. You have full control over what gets moderated.",
              },
              {
                q: "What happens when I reach my plan limit?",
                a: "You'll get notified as you approach your limit. Moderation pauses until the next billing cycle or you can upgrade your plan instantly.",
              },
            ].map((faq) => (
              <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-3xl bg-gradient-to-br from-brand-500/20 to-surface-900 border border-brand-500/20 p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Ready to protect your community?
              </h2>
              <p className="text-surface-400 text-lg mb-8 max-w-xl mx-auto">
                Join hundreds of creators who trust Content Track to keep their
                Instagram comments clean and engagement high.
              </p>
              <a
                href="https://app.contenttrak.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:shadow-[0_0_40px_rgba(233,77,30,0.3)]"
              >
                Get Started Free
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
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Content Track" className="h-7 w-7" />
              <span className="font-bold">Content Track</span>
            </div>
            <div className="flex items-center gap-8 text-sm text-surface-500">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <a href="mailto:contact@contenttrak.com" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
            <div className="text-sm text-surface-600">
              &copy; {new Date().getFullYear()} Content Track. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── Sub-components ─── */

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/5 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium pr-4">{question}</span>
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
          open ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="px-5 text-surface-400 text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="p-6 grid grid-cols-12 gap-4">
      {/* Sidebar mock */}
      <div className="col-span-3 space-y-3 hidden lg:block">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-full bg-brand-500/20" />
          <div>
            <div className="h-3 w-24 bg-white/10 rounded" />
            <div className="h-2 w-16 bg-white/5 rounded mt-1.5" />
          </div>
        </div>
        {["Dashboard", "Accounts", "Activity", "Settings"].map((item, i) => (
          <div
            key={item}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs ${
              i === 0
                ? "bg-brand-500/10 text-brand-400"
                : "text-surface-500"
            }`}
          >
            <div className="w-4 h-4 rounded bg-current opacity-20" />
            {item}
          </div>
        ))}
      </div>
      {/* Main content mock */}
      <div className="col-span-12 lg:col-span-9 space-y-4">
        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Comments", value: "1,284", color: "text-purple-400" },
            { label: "Removed", value: "47", color: "text-red-400" },
            { label: "DMs In", value: "89", color: "text-blue-400" },
            { label: "DMs Out", value: "156", color: "text-green-400" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/[0.03] border border-white/5 rounded-xl p-4"
            >
              <div className="text-xs text-surface-500">{stat.label}</div>
              <div className={`text-xl font-bold mt-1 ${stat.color}`}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>
        {/* Chart mock */}
        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 h-40">
          <div className="text-xs text-surface-500 mb-3">Activity (14 days)</div>
          <div className="flex items-end gap-1.5 h-24">
            {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95, 70, 80].map(
              (h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-brand-500/40 to-brand-400/20 rounded-t"
                  style={{ height: `${h}%` }}
                />
              )
            )}
          </div>
        </div>
        {/* Activity list mock */}
        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 space-y-3">
          <div className="text-xs text-surface-500">Recent Activity</div>
          {[
            { text: "Removed comment from @spammer_223", tag: "Removed", tagColor: "bg-red-500/10 text-red-400" },
            { text: "Auto-replied to @curious.fan", tag: "DM Sent", tagColor: "bg-green-500/10 text-green-400" },
            { text: "New comment on 'Summer vibes'", tag: "Comment", tagColor: "bg-purple-500/10 text-purple-400" },
          ].map((a) => (
            <div
              key={a.text}
              className="flex items-center justify-between text-xs"
            >
              <span className="text-surface-400">{a.text}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${a.tagColor}`}>
                {a.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ActivityChart() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const comments = [32, 45, 28, 64, 52, 38, 48];
  const removed = [3, 7, 2, 12, 5, 4, 6];
  const max = Math.max(...comments);

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Weekly Overview</h3>
        <span className="text-xs text-surface-500">Last 7 days</span>
      </div>
      <div className="flex items-end gap-3 h-40">
        {days.map((day, i) => (
          <div key={day} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full flex flex-col items-center gap-0.5" style={{ height: 120 }}>
              <div className="w-full flex-1 flex items-end">
                <div
                  className="w-full bg-brand-500/30 rounded-t"
                  style={{ height: `${(comments[i] / max) * 100}%` }}
                />
              </div>
              <div
                className="w-full bg-red-500/30 rounded"
                style={{ height: `${Math.max((removed[i] / max) * 100, 4)}%` }}
              />
            </div>
            <span className="text-[10px] text-surface-500">{day}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 text-xs text-surface-500">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-500/60" />
          Comments
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/60" />
          Removed
        </div>
      </div>
    </>
  );
}

export default App;
