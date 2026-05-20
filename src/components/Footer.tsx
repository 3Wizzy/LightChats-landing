import Link from "../i18n/LangLink";
import logo from "../assets/logo.png";
import { useLang } from "../i18n/LanguageContext";
import { common } from "../i18n/common";
import LanguageSwitcher from "../i18n/LanguageSwitcher";

export default function Footer() {
  const { lang } = useLang();
  const t = common[lang];

  const columns: Array<{
    title: string;
    links: Array<{ label: string; to?: string; href?: string }>;
  }> = [
    {
      title: t.productCol,
      links: [
        { label: t.features, to: "/features" },
        { label: t.pricing, to: "/pricing" },
        { label: t.affiliates, to: "/affiliates" },
        { label: t.changelog, to: "/changelog" },
      ],
    },
    {
      title: t.compareCol,
      links: [
        { label: "vs ManyChat", to: "/compare/manychat" },
        { label: "vs Respond.io", to: "/compare/respond-io" },
      ],
    },
    {
      title: t.resourcesCol,
      links: [
        { label: t.blog, to: "/blog" },
        { label: t.helpCenter, to: "/help" },
        { label: t.security, to: "/security" },
        { label: t.aiDisclosure, to: "/ai-disclosure" },
      ],
    },
    {
      title: t.companyCol,
      links: [
        { label: t.about, to: "/about" },
        { label: t.support, to: "/support" },
        { label: t.emailUs, href: "mailto:contact@lightchats.com" },
        { label: "+1 (380) 257-4689", href: "tel:+13802574689" },
        { label: t.privacyPolicy, to: "/privacy" },
        { label: t.termsConditions, to: "/terms" },
        { label: t.dataDeletion, to: "/data-deletion" },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/5 bg-surface-950 relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-10 grid-cols-2 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="LightChats" className="h-7 w-7" />
              <span className="font-bold text-white">LightChats</span>
            </Link>
            <p className="text-xs text-surface-600 leading-relaxed">
              {t.footerAddress1}
              <br />
              {t.footerAddress2}
              <br />
              {t.footerAddress3}
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-sm font-semibold mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="text-surface-500 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-surface-500 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-surface-600">
          <span>
            {t.copyright.replace("{year}", String(new Date().getFullYear()))}
          </span>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">{t.madeFor}</span>
            <LanguageSwitcher variant="footer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
