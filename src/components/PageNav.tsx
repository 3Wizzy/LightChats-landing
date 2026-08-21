import Link from "../i18n/LangLink";
import logo from "../assets/logo.png";
import { useLang } from "../i18n/LanguageContext";
import { common } from "../i18n/common";
import LanguageSwitcher from "../i18n/LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function PageNav() {
  const { lang } = useLang();
  const t = common[lang];
  return (
    <nav className="sticky top-0 z-50 bg-surface-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="LightChats" className="h-8 w-8" />
          <span className="text-lg font-bold tracking-tight">LightChats</span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6 text-sm">
          <Link
            to="/features"
            className="text-surface-400 hover:text-white transition-colors hidden sm:inline"
          >
            {t.features}
          </Link>
          <Link
            to="/pricing"
            className="text-surface-400 hover:text-white transition-colors hidden sm:inline"
          >
            {t.pricing}
          </Link>
          <Link
            to="/blog"
            className="text-surface-400 hover:text-white transition-colors hidden sm:inline"
          >
            {t.blog}
          </Link>
          <ThemeToggle />
          <LanguageSwitcher variant="nav" />
          <a
            href="https://app.lightchats.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all"
          >
            {t.getStarted}
          </a>
        </div>
      </div>
    </nav>
  );
}
