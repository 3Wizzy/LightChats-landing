import { useEffect, useRef, useState } from "react";
import { useLang, SUPPORTED_LANGS, type Lang } from "./LanguageContext";

const LABELS: Record<Lang, { short: string; long: string; flag: string }> = {
  en: { short: "EN", long: "English", flag: "🇺🇸" },
  fr: { short: "FR", long: "Français", flag: "🇫🇷" },
  ar: { short: "AR", long: "العربية", flag: "🇸🇦" },
};

interface Props {
  variant?: "nav" | "footer";
}

export default function LanguageSwitcher({ variant = "nav" }: Props) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const current = LABELS[lang];

  const triggerClass =
    variant === "footer"
      ? "inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-surface-300 hover:text-white text-sm px-3 py-1.5 rounded-full border border-white/10 transition-colors"
      : "inline-flex items-center gap-1.5 text-surface-400 hover:text-white text-sm transition-colors px-3 py-1.5 rounded-full hover:bg-white/5";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={triggerClass}
        aria-label="Change language"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span aria-hidden="true">{current.flag}</span>
        <span className="font-medium">{current.short}</span>
        <svg
          className={`w-3.5 h-3.5 transition-transform ${
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
      {open && (
        <ul
          role="listbox"
          className={`absolute ${
            variant === "footer" ? "bottom-full mb-2" : "top-full mt-2"
          } right-0 min-w-[140px] bg-surface-900 border border-white/10 rounded-xl shadow-xl backdrop-blur-xl z-50 overflow-hidden`}
        >
          {SUPPORTED_LANGS.map((l) => (
            <li key={l}>
              <button
                type="button"
                onClick={() => {
                  setLang(l);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm text-left transition-colors ${
                  l === lang
                    ? "bg-brand-500/15 text-white"
                    : "text-surface-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span aria-hidden="true">{LABELS[l].flag}</span>
                <span>{LABELS[l].long}</span>
                {l === lang && (
                  <svg
                    className="w-3.5 h-3.5 text-brand-400 ms-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
