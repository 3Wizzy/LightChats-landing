import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DEFAULT_LANG,
  SUPPORTED_LANGS,
  localizedPath,
  parseLangFromPath,
} from "./routes";

export type Lang = "en" | "fr" | "ar";

export { SUPPORTED_LANGS };

const STORAGE_KEY = "lc_lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  dir: "ltr" | "rtl";
  /** Build a URL path in the current language for an unprefixed base path. */
  localizedTo: (basePath: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const { lang, basePath } = parseLangFromPath(location.pathname);

  // Sync <html lang> / dir + localStorage whenever lang changes
  useEffect(() => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const setLang = (next: Lang) => {
    // Navigate to the same page in the new language
    const target = localizedPath(basePath, next) + location.search + location.hash;
    navigate(target);
  };

  const localizedTo = (path: string) => localizedPath(path, lang);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      dir: lang === "ar" ? "rtl" : "ltr",
      localizedTo,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang, basePath, location.search, location.hash]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      lang: DEFAULT_LANG,
      setLang: () => {},
      dir: "ltr",
      localizedTo: (p: string) => p,
    };
  }
  return ctx;
}

export function pick<T>(map: Record<Lang, T>, lang: Lang): T {
  return map[lang] ?? map.en;
}
