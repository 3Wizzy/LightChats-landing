import { useEffect } from "react";
import Link from "../i18n/LangLink";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LanguageContext";
import { blog } from "../i18n/content/blog";

export default function Blog() {
  const { lang } = useLang();
  const c = blog[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-surface-950 text-white font-sans flex flex-col">
      <PageNav />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 md:py-24 w-full">
        <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
          {c.eyebrow}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-4 leading-tight">
          {c.h1}
        </h1>
        <p className="text-surface-400 text-lg leading-relaxed mb-12 max-w-2xl">
          {c.intro}
        </p>

        <div className="space-y-4">
          {c.posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block bg-surface-900/40 hover:bg-surface-900/70 border border-white/5 hover:border-white/10 rounded-2xl p-6 md:p-8 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3 text-xs text-surface-500">
                <span className="bg-brand-500/15 text-brand-400 px-2.5 py-1 rounded-full font-semibold">
                  {post.category}
                </span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">
                {post.title}
              </h2>
              <p className="text-surface-400 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-surface-900/40 border border-white/5 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-semibold mb-2">{c.moreTitle}</h2>
          <p className="text-surface-400 text-sm">{c.moreDesc}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
