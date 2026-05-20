import type { Lang } from "./LanguageContext";

export const SUPPORTED_LANGS: Lang[] = ["en", "fr", "ar"];
export const DEFAULT_LANG: Lang = "en";

export const BASE_PATHS = [
  "/",
  "/privacy",
  "/terms",
  "/support",
  "/pricing",
  "/data-deletion",
  "/ai-disclosure",
  "/features",
  "/about",
  "/blog",
  "/blog/announcing-lightchats",
  "/affiliates",
  "/compare/manychat",
  "/compare/respond-io",
  "/changelog",
  "/security",
  "/help",
] as const;

export type BasePath = (typeof BASE_PATHS)[number];

/** Build a localized URL path. English = no prefix; others = /<lang><path>. */
export function localizedPath(path: string, lang: Lang): string {
  if (lang === DEFAULT_LANG) return path;
  if (path === "/") return `/${lang}`;
  return `/${lang}${path}`;
}

/** Strip the language prefix from a pathname; returns { lang, basePath }. */
export function parseLangFromPath(pathname: string): {
  lang: Lang;
  basePath: string;
} {
  const match = pathname.match(/^\/(fr|ar)(\/.*)?$/);
  if (match) {
    const lang = match[1] as Lang;
    const rest = match[2] || "/";
    return { lang, basePath: rest };
  }
  return { lang: DEFAULT_LANG, basePath: pathname || "/" };
}
