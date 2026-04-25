"use client"

import { useRef } from "react"
import { useScroll, useTransform } from "motion/react"
import { MotionDiv, MotionSpan } from "../utils/lazy-ui"

const words = [
  "I", "don't", "just", "write", "code.", "I", "craft",
  "experiences", "that", "users", "love,", "businesses",
  "rely", "on,", "and", "developers", "admire."
]

export const ScrollTextReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  })

  return (
    <section
      ref={containerRef}
      className="inside-container border-t border-black/15"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="flex flex-wrap justify-center gap-x-2.5 gap-y-2 text-3xl font-bold leading-snug tracking-tight md:text-4xl lg:text-5xl lg:leading-tight">
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length

            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </p>
      </div>
    </section>
  )
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: string
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  range: [number, number]
}) => {
  const opacity = useTransform(progress, range, [0.15, 1])
  const y = useTransform(progress, range, [8, 0])

  // Highlight specific words
  const isHighlight = ["craft", "experiences", "love,", "admire."].includes(children)

  return (
    <MotionSpan
      style={{ opacity, y }}
      className={isHighlight ? "text-[var(--beige-500)]" : "text-stone-800"}
    >
      {children}
    </MotionSpan>
  )
}
