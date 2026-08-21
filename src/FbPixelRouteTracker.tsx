import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

/**
 * Fires a Meta Pixel PageView on client-side route changes. The initial
 * page load's PageView comes from the base snippet in index.html, so the
 * first render is skipped. No-op when the pixel isn't loaded (placeholder
 * ID, localhost, or SSR prerender — effects don't run server-side).
 */
export default function FbPixelRouteTracker() {
  const location = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    window.fbq?.('track', 'PageView')
  }, [location.pathname])

  return null
}
