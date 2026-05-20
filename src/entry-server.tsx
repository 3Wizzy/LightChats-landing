import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { BASE_PATHS, SUPPORTED_LANGS } from './i18n/routes'
import { routeMeta as localizedRouteMeta } from './i18n/meta'
import App from './App.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import TermsConditions from './pages/TermsConditions.tsx'
import Support from './pages/Support.tsx'
import Pricing from './pages/Pricing.tsx'
import DataDeletion from './pages/DataDeletion.tsx'
import AIDisclosure from './pages/AIDisclosure.tsx'
import Features from './pages/Features.tsx'
import About from './pages/About.tsx'
import Blog from './pages/Blog.tsx'
import BlogAnnouncing from './pages/BlogAnnouncing.tsx'
import Affiliates from './pages/Affiliates.tsx'
import CompareManychat from './pages/CompareManychat.tsx'
import CompareRespondio from './pages/CompareRespondio.tsx'
import Changelog from './pages/Changelog.tsx'
import Security from './pages/Security.tsx'
import Help from './pages/Help.tsx'

const ELEMENTS: Record<string, React.ReactElement> = {
  '/': <App />,
  '/privacy': <PrivacyPolicy />,
  '/terms': <TermsConditions />,
  '/support': <Support />,
  '/pricing': <Pricing />,
  '/data-deletion': <DataDeletion />,
  '/ai-disclosure': <AIDisclosure />,
  '/features': <Features />,
  '/about': <About />,
  '/blog': <Blog />,
  '/blog/announcing-lightchats': <BlogAnnouncing />,
  '/affiliates': <Affiliates />,
  '/compare/manychat': <CompareManychat />,
  '/compare/respond-io': <CompareRespondio />,
  '/changelog': <Changelog />,
  '/security': <Security />,
  '/help': <Help />,
}

function buildRoutes() {
  const out: React.ReactElement[] = []
  for (const base of BASE_PATHS) {
    const el = ELEMENTS[base]
    out.push(<Route key={base} path={base} element={el} />)
    const fr = base === '/' ? '/fr' : `/fr${base}`
    out.push(<Route key={fr} path={fr} element={el} />)
    const ar = base === '/' ? '/ar' : `/ar${base}`
    out.push(<Route key={ar} path={ar} element={el} />)
  }
  return out
}

/** Build the full list of (url, lang, basePath) tuples to prerender. */
export function listLocalizedRoutes(): Array<{ url: string; lang: 'en' | 'fr' | 'ar'; basePath: string }> {
  const out: Array<{ url: string; lang: 'en' | 'fr' | 'ar'; basePath: string }> = []
  for (const base of BASE_PATHS) {
    for (const lang of SUPPORTED_LANGS) {
      const url = lang === 'en' ? base : base === '/' ? `/${lang}` : `/${lang}${base}`
      out.push({ url, lang, basePath: base })
    }
  }
  return out
}

export const routeMeta = localizedRouteMeta

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <LanguageProvider>
          <Routes>{buildRoutes()}</Routes>
        </LanguageProvider>
      </StaticRouter>
    </StrictMode>
  )
}
