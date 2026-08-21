import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { LanguageProvider } from './i18n/LanguageContext'
import FbPixelRouteTracker from './FbPixelRouteTracker'
import { BASE_PATHS } from './i18n/routes'
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
    // French
    const fr = base === '/' ? '/fr' : `/fr${base}`
    out.push(<Route key={fr} path={fr} element={el} />)
    // Arabic
    const ar = base === '/' ? '/ar' : `/ar${base}`
    out.push(<Route key={ar} path={ar} element={el} />)
  }
  return out
}

const app = (
  <StrictMode>
    <BrowserRouter>
      <FbPixelRouteTracker />
      <LanguageProvider>
        <Routes>{buildRoutes()}</Routes>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
)

const rootEl = document.getElementById('root')!

if (rootEl.innerHTML.trim()) {
  hydrateRoot(rootEl, app)
} else {
  createRoot(rootEl).render(app)
}
