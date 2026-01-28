"use client"

import { useEffect } from "react"

export default function AnchorScroller() {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement
      const href = target.getAttribute("href")
      if (!href || !href.startsWith("#")) return
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      const headerHeightRaw = getComputedStyle(document.documentElement).getPropertyValue("--header-height")
      const headerHeight = parseFloat(headerHeightRaw) || 88
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8
      window.scrollTo({ top, behavior: "smooth" })
      try {
        history.replaceState(null, "", `#${id}`)
      } catch {
        // ignore
      }
    }

    const anchors = Array.from(document.querySelectorAll('.header a[href^="#"]')) as HTMLAnchorElement[]
    anchors.forEach(a => a.addEventListener("click", handleClick))
    return () => anchors.forEach(a => a.removeEventListener("click", handleClick))
  }, [])

  return null
}
