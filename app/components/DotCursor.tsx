"use client"

import { useEffect, useRef } from "react"
import {
  useMotionValue,
  useSpring,
  useVelocity,
  useTransform,
} from "framer-motion"
import { MotionDiv, MotionSpan } from "../utils/lazy-ui"

/* ─── tuning knobs ────────────────────────────────────────── */
const BASE_SIZE = 20          // resting dot diameter (px)
const HOVER_H   = 30          // height when showing a label
const MAX_W     = 260         // maximum label width
const PAD_X     = 10          // horizontal padding inside label pill

/* spring for cursor position — tight, responsive */
const POS_SPRING  = { stiffness: 600, damping: 55, mass: 0.5 }
/* spring for elastic shape — snappy recovery */
const SHAPE_SPRING = { stiffness: 180, damping: 16 }
/* ─────────────────────────────────────────────────────────── */

export function DotCursor() {
  const labelRef     = useRef<HTMLSpanElement>(null)
  const lastTargetRef = useRef<HTMLElement | null>(null)

  /* raw pointer position — updated instantly */
  const rawX = useMotionValue(-200)
  const rawY = useMotionValue(-200)

  /* smoothed display position */
  const x = useSpring(rawX, POS_SPRING)
  const y = useSpring(rawY, POS_SPRING)

  /* framer-motion velocity (px / s) derived from the spring values */
  const vx = useVelocity(x)
  const vy = useVelocity(y)

  /* label expansion */
  const w            = useSpring(BASE_SIZE, SHAPE_SPRING)
  const h            = useSpring(BASE_SIZE, SHAPE_SPRING)
  const labelOpacity = useSpring(0, { stiffness: 300, damping: 40 })

  /* ─── elastic stretch ──────────────────────────────────── */
  /* Speed-based stretch: faster → wider in direction of travel */
  const scaleX = useSpring(
    useTransform(() => {
      const speed = Math.sqrt(vx.get() ** 2 + vy.get() ** 2)
      return 1 + Math.min(speed / 280, 1.4)
    }),
    SHAPE_SPRING
  )

  /* Squash: compensates for scaleX so volume feels preserved */
  const scaleY = useSpring(
    useTransform(() => {
      const speed = Math.sqrt(vx.get() ** 2 + vy.get() ** 2)
      return Math.max(0.3, 1 - Math.min(speed / 450, 0.7))
    }),
    SHAPE_SPRING
  )

  /* Rotate the dot to face its direction of travel */
  const rotate = useTransform(() => {
    const velX = vx.get()
    const velY = vy.get()
    if (Math.abs(velX) < 3 && Math.abs(velY) < 3) return 0
    return Math.atan2(velY, velX) * (180 / Math.PI)
  })
  /* ─────────────────────────────────────────────────────── */

  useEffect(() => {
    const onMove = (ev: PointerEvent) => {
      rawX.set(ev.clientX)
      rawY.set(ev.clientY)

      /* label-hover detection */
      const target = ev.target as Element | null
      const el = (target?.closest("[data-text]") as HTMLElement) ?? null

      if (el === lastTargetRef.current) return
      lastTargetRef.current = el

      const text = el?.getAttribute("data-text") ?? ""
      const span = labelRef.current

      if (!el || !text) {
        if (span) span.textContent = ""
        w.set(BASE_SIZE)
        h.set(BASE_SIZE)
        labelOpacity.set(0)
        return
      }

      if (span) {
        span.textContent = text
        const textW = Math.ceil(span.scrollWidth)
        const targetW = Math.min(Math.max(BASE_SIZE, textW + PAD_X * 2), MAX_W)
        w.set(targetW)
        h.set(HOVER_H)
        labelOpacity.set(1)
      }
    }

    const onLeave = () => {
      lastTargetRef.current = null
      const span = labelRef.current
      if (span) span.textContent = ""
      w.set(BASE_SIZE)
      h.set(BASE_SIZE)
      labelOpacity.set(0)
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerleave", onLeave)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerleave", onLeave)
    }
  }, [rawX, rawY, w, h, labelOpacity])

  return (
    <MotionDiv
      aria-hidden="true"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        width:  w,
        height: h,
        scaleX,
        scaleY,
        rotate,
        willChange: "transform, width, height",
      }}
      className="pointer-events-none fixed top-0 left-0 isolate z-[60] flex items-center justify-center overflow-hidden rounded-full bg-white mix-blend-difference"
    >
      <MotionSpan
        ref={labelRef}
        style={{ opacity: labelOpacity }}
        className="relative z-10 px-2 text-sm leading-none font-semibold whitespace-nowrap select-none"
      />
    </MotionDiv>
  )
}
