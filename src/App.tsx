import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

// const APP_URL = "https://app.lightchats.com/";
const APP_URL = "https://lightchats.com/";

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
          <a href="/" className="flex items-center gap-2.5">
            <img src={logo} alt="LightChat" className="h-9 w-9" />
            <span className="text-lg font-extrabold tracking-tight">
              LightChat
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
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-surface-300 hover:text-white transition-colors px-4 py-2"
            >
              Log in
            </a>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-full transition-all hover:shadow-[0_0_30px_rgba(233,77,30,0.3)]"
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
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface-900/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-3">
            <a
              href="#features"
              className="block text-surface-300 hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block text-surface-300 hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it works
            </a>
            <a
              href="#pricing"
              className="block text-surface-300 hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="block text-surface-300 hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-brand-500 text-white font-semibold py-2.5 rounded-full mt-2"
            >
              Get Started Free
            </a>
          </div>
        )}
      </nav>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-500/10 rounded-full blur-[128px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-surface-300 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Now in public beta
          </div>

          <h1 className="animate-fade-in-up animation-delay-200 text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
            Engage at the
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 bg-clip-text text-transparent">
              Speed of Light
            </span>
          </h1>

          <p className="animate-fade-in-up animation-delay-400 text-lg md:text-xl text-surface-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Drive more sales and conversions on Instagram using automation.
            Engage followers, capture leads, and grow your business — all on
            autopilot.
          </p>

          <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={APP_URL}
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

          {/* Animated chat bubbles */}
          <ChatBubbles />

          {/* Stats */}
          <div className="mt-16 md:mt-24 flex flex-wrap justify-center gap-8 md:gap-16 animate-fade-in-up animation-delay-800">
            {[
              { value: "10K+", label: "Messages Automated" },
              { value: "500+", label: "Active Businesses" },
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

      {/* ─── Marquee ─── */}
      <section className="py-10 border-y border-white/5 overflow-hidden relative z-10">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              {[
                "Instagram DMs",
                "Flow Automation",
                "AI Smart Replies",
                "Lead Capture",
                "Comment Triggers",
                "Story Mentions",
                "Multi-Account",
                "Analytics",
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

      {/* ─── Feature 1: DM Automation ─── */}
      <section id="features" className="py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
                  Instagram DM Automation
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
                  Turn Conversations into{" "}
                  <span className="text-brand-400">Customers</span>
                </h2>
                <p className="text-surface-400 text-lg leading-relaxed mb-8">
                  Automatically engage with followers in your DMs. Reply
                  instantly to messages, qualify leads with smart questions, and
                  drive sales — all on autopilot, 24/7.
                </p>
                <div className="space-y-4">
                  {[
                    "Instant auto-replies to DMs and story mentions",
                    "Smart keyword triggers for targeted responses",
                    "Personalized messages based on user behavior",
                    "Seamless handoff to live agents when needed",
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
              <div className="flex justify-center">
                <PhoneMockup videoSrc="https://mccdn.me/martcdn/next-lp/contents/home-redesign/features_01v3.mp4" />
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Feature 2: Flow Builder ─── */}
      <section className="py-20 md:py-32 bg-surface-900/30 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <PhoneMockup videoSrc="https://mccdn.me/martcdn/next-lp/contents/home-redesign/features_03v3.mp4" />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
                  Visual Flow Builder
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
                  Build Powerful{" "}
                  <span className="text-brand-400">Automation Flows</span>
                </h2>
                <p className="text-surface-400 text-lg leading-relaxed mb-8">
                  Create visual automation workflows that guide users through
                  your sales funnel. Drag, drop, and connect — no coding
                  required. Turn every interaction into an opportunity.
                </p>
                <div className="space-y-4">
                  {[
                    "Drag-and-drop visual flow editor",
                    "Conditional branching based on user responses",
                    "Pre-built templates for common use cases",
                    "A/B test different conversation paths",
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
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Feature 3: AI Smart Replies ─── */}
      <section className="py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
                  AI-Powered
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
                  Smart Replies That{" "}
                  <span className="text-brand-400">Convert</span>
                </h2>
                <p className="text-surface-400 text-lg leading-relaxed mb-8">
                  Let AI handle common questions, recommend products, and close
                  sales while you focus on growing your business. Your always-on
                  sales assistant that never sleeps.
                </p>
                <div className="space-y-4">
                  {[
                    "AI understands context and intent",
                    "Product recommendations based on conversation",
                    "Handles FAQs automatically with natural language",
                    "Learns and improves from every interaction",
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
                Everything You Need
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">
                One platform to
                <br />
                <span className="text-surface-400">grow your business</span>
              </h2>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
                title: "DM Auto-Reply",
                desc: "Instantly respond to direct messages with customizable templates. Never miss a conversation again.",
              },
              {
                icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
                title: "Comment Moderation",
                desc: "Auto-detect and remove toxic, spam, or unwanted comments using your custom keyword filters.",
              },
              {
                icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
                title: "Real-time Analytics",
                desc: "Track messages, engagement trends, and conversion metrics with beautiful charts and insights.",
              },
              {
                icon: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.004.828c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z|M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                title: "Flow Automations",
                desc: "Build visual automation workflows with our drag-and-drop builder. No coding required.",
              },
              {
                icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
                title: "Contact Management",
                desc: "Organize and segment your audience. Track every interaction and build lasting relationships.",
              },
              {
                icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
                title: "Instant Triggers",
                desc: "React to comments, story mentions, and keywords in real-time. Engage at the speed of light.",
              },
            ].map((feature) => (
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
                      {feature.icon.split("|").map((d, i) => (
                        <path key={i} d={d} />
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
                How it works
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">
                Set up in 3 minutes
              </h2>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect Your Account",
                desc: "Link your Instagram business account through our secure OAuth flow. Takes 30 seconds.",
              },
              {
                step: "02",
                title: "Build Your Flows",
                desc: "Use our visual builder to create automation flows, set triggers, and customize your replies.",
              },
              {
                step: "03",
                title: "Watch It Convert",
                desc: "LightChat works 24/7 — engaging followers, qualifying leads, and driving sales automatically.",
              },
            ].map((item, i) => (
              <RevealSection key={item.step}>
                <div className="relative text-center md:text-left">
                  <div className="text-6xl md:text-7xl font-black text-brand-500/10 mb-4 leading-none">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-surface-400 leading-relaxed">
                    {item.desc}
                  </p>
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
                Pricing
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">
                Simple, transparent pricing
              </h2>
              <p className="text-surface-400 mt-4">
                Start free. Upgrade when you need more.
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Free",
                price: "$0",
                period: "forever",
                desc: "Perfect to get started",
                features: [
                  "1 Instagram account",
                  "50 messages/day",
                  "Basic auto-replies",
                  "7-day analytics",
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
                  "Unlimited messages",
                  "Visual flow builder",
                  "AI smart replies",
                  "Advanced analytics",
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
                  "Custom integrations",
                  "API access",
                  "Dedicated support",
                ],
                cta: "Contact Sales",
                highlight: false,
              },
            ].map((plan) => (
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
                      Most Popular
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
                    href={APP_URL}
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
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
                FAQ
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">
                Common questions
              </h2>
            </div>
          </RevealSection>

          <div className="space-y-4">
            {[
              {
                q: "Do I need an Instagram Business account?",
                a: "Yes, LightChat works with Instagram Business and Creator accounts connected through Facebook's official API. Personal accounts are not supported.",
              },
              {
                q: "How does LightChat automate my DMs?",
                a: "LightChat uses Instagram's official API to detect triggers like comments, story mentions, or keywords, then automatically sends personalized DM responses based on the flows you build.",
              },
              {
                q: "Is my Instagram data safe?",
                a: "Absolutely. We use Instagram's official Graph API with OAuth authentication. We never store your password and all data is encrypted at rest and in transit.",
              },
              {
                q: "Can I customize my automation flows?",
                a: "Yes — our visual flow builder lets you create custom automation paths with conditional logic, delays, and personalized messages. No coding required.",
              },
              {
                q: "What happens when I reach my plan limit?",
                a: "You'll get notified as you approach your limit. Automation pauses until the next billing cycle or you can upgrade your plan instantly.",
              },
            ].map((faq) => (
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
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-500/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-brand-400/5 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Ready to grow with chat?
                </h2>
                <p className="text-surface-400 text-lg mb-8 max-w-xl mx-auto">
                  Join hundreds of businesses using LightChat to automate
                  conversations and drive more sales on Instagram.
                </p>
                <a
                  href={APP_URL}
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
          </RevealSection>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-white/5 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="LightChat" className="h-7 w-7" />
              <span className="font-bold">LightChat</span>
            </div>
            <div className="flex items-center gap-8 text-sm text-surface-500">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <a
                href="mailto:contact@lightchats.com"
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
            <div className="text-sm text-surface-600">
              &copy; {new Date().getFullYear()} LightChats. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── Sub-components ─── */

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

function ChatBubbles() {
  const bubbles = [
    {
      text: "Hey! 👋",
      className: "chat-bubble chat-bubble-1",
      style: {
        top: "-10px",
        left: "5%",
      } as React.CSSProperties,
      align: "left" as const,
    },
    {
      text: "Get 20% off! 🔥",
      className: "chat-bubble chat-bubble-2",
      style: {
        top: "30px",
        right: "3%",
      } as React.CSSProperties,
      align: "right" as const,
    },
    {
      text: "Sure, sending now!",
      className: "chat-bubble chat-bubble-3",
      style: {
        top: "100px",
        left: "2%",
      } as React.CSSProperties,
      align: "left" as const,
    },
    {
      text: "Thanks! ✨",
      className: "chat-bubble chat-bubble-4",
      style: {
        top: "80px",
        right: "5%",
      } as React.CSSProperties,
      align: "right" as const,
    },
    {
      text: "How can I help?",
      className: "chat-bubble chat-bubble-5",
      style: {
        top: "160px",
        left: "8%",
      } as React.CSSProperties,
      align: "left" as const,
    },
  ];

  return (
    <div className="hidden lg:block absolute inset-0 pointer-events-none">
      {bubbles.map((bubble, i) => (
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
            {bubble.text}
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

export default App;
