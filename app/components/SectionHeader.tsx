"use client"

import { MotionDiv } from "../utils/lazy-ui"
import type { Variants } from "motion"

interface SectionHeaderProps {
  label: string
  number: string
  className?: string
}

const lineVariant: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const textVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export const SectionHeader = ({ label, number, className = "" }: SectionHeaderProps) => {
  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`flex flex-col gap-3 ${className}`}
    >
      <div className="flex items-center justify-between">
        <MotionDiv
          variants={textVariant}
          className="text-xs font-bold uppercase tracking-[0.25em] text-stone-400"
        >
          {label}
        </MotionDiv>
        <MotionDiv
          variants={textVariant}
          className="text-xs font-medium tabular-nums text-stone-400"
        >
          {number}
        </MotionDiv>
      </div>
      <MotionDiv
        variants={lineVariant}
        className="h-px origin-left bg-gradient-to-r from-black/30 via-black/15 to-transparent"
      />
    </MotionDiv>
  )
}
