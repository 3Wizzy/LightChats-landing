import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, 'dist')

const { render, listLocalizedRoutes, routeMeta } = await import('./dist/server/entry-server.js')

const template = fs.readFileSync(path.resolve(distDir, 'index.html'), 'utf-8')
const ORIGIN = 'https://lightchats.com'
const LANGS = ['en', 'fr', 'ar']
const OG_LOCALE = { en: 'en_US', fr: 'fr_FR', ar: 'ar_AR' }

function escapeAttr(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

function buildLocalizedUrl(basePath, lang) {
  if (lang === 'en') return basePath === '/' ? `${ORIGIN}/` : `${ORIGIN}${basePath}`
  return basePath === '/' ? `${ORIGIN}/${lang}` : `${ORIGIN}/${lang}${basePath}`
}

for (const { url, lang, basePath } of listLocalizedRoutes()) {
  const appHtml = render(url)
  const meta = routeMeta[lang]?.[basePath] || routeMeta.en?.[basePath] || {}

  let html = template

  // <html lang> and dir
  html = html.replace(/<html\s+lang="[^"]*"[^>]*>/, `<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">`)

  // Inject rendered app
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  // Title
  if (meta.title) {
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(meta.title)}</title>`)
    html = html.replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${escapeAttr(meta.title)}"`)
    html = html.replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${escapeAttr(meta.title)}"`)
  }

  // Description
  if (meta.description) {
    html = html.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${escapeAttr(meta.description)}"`)
    html = html.replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${escapeAttr(meta.description)}"`)
    html = html.replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${escapeAttr(meta.description)}"`)
  }

  // Canonical (self-referential per language version)
  const canonical = buildLocalizedUrl(basePath, lang)
  html = html.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${canonical}"`)
  html = html.replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${canonical}"`)
  html = html.replace(/<meta name="twitter:url" content="[^"]*"/, `<meta name="twitter:url" content="${canonical}"`)

  // og:locale
  html = html.replace(/<meta property="og:locale" content="[^"]*"/, `<meta property="og:locale" content="${OG_LOCALE[lang]}"`)

  // hreflang alternates (one per language + x-default → English)
  const hreflangTags = LANGS.map((l) => {
    const href = buildLocalizedUrl(basePath, l)
    return `    <link rel="alternate" hreflang="${l}" href="${href}" />`
  }).join('\n')
  const xDefault = `    <link rel="alternate" hreflang="x-default" href="${buildLocalizedUrl(basePath, 'en')}" />`
  const alternates = `${hreflangTags}\n${xDefault}`

  // BreadcrumbList JSON-LD for sub-pages
  let breadcrumbScript = ''
  if (meta.breadcrumbLabel) {
    const homeUrl = buildLocalizedUrl('/', lang)
    const homeLabel = lang === 'fr' ? 'Accueil' : lang === 'ar' ? 'الرئيسية' : 'Home'
    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: homeLabel, item: homeUrl },
        { '@type': 'ListItem', position: 2, name: meta.breadcrumbLabel, item: canonical },
      ],
    }
    breadcrumbScript = `<script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>\n  `
  }

  html = html.replace('</head>', `${alternates}\n  ${breadcrumbScript}</head>`)

  // Output path: en → as before; fr/ar → /<lang>/<...>.html
  const outRel = url === '/' ? 'index.html'
    : url === '/fr' ? 'fr/index.html'
    : url === '/ar' ? 'ar/index.html'
    : `${url.slice(1)}.html`
  const filePath = path.resolve(distDir, outRel)
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, html)
  console.log(`Pre-rendered: ${url} -> ${path.relative(distDir, filePath)}`)
}
