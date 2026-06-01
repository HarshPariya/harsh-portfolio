"use client"
import dynamic from "next/dynamic"
import { useMediaQuery } from "../hooks/useMediaQuery"

export const DotCursor = /*#__PURE__*/ dynamic(() => import("../components/DotCursor").then((m) => m.DotCursor), {
  ssr: false,
})

import { useState, useEffect } from "react"

export function DesktopCursor() {
  const hasFinePointer = useMediaQuery("(pointer:fine)")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Small defer to reduce initial TBT
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  if (!hasFinePointer || !isVisible) return null
  return <DotCursor />
}
