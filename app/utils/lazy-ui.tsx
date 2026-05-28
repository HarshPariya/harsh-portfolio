"use client"

import type { ReactNode } from "react"
import { LazyMotion, MotionConfig, domAnimation, m } from "framer-motion"

export const MotionWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <MotionConfig reducedMotion="never">
      <LazyMotion strict features={domAnimation}>
        {children}
      </LazyMotion>
    </MotionConfig>
  )
}

export const MotionDiv = m.div
export const MotionSpan = m.span
export const MotionH2 = m.h2
export const MotionArticle = m.article
export const MotionLi = m.li
export const MotionUl = m.ul
export const MotionCircle = m.circle
export const MotionSvg = m.svg
export const MotionPath = m.path
export const MotionH1 = m.h1
export const MotionP = m.p
export const MotionButton = m.button
