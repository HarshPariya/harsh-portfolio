"use client"

import { MotionDiv } from "../utils/lazy-ui"
import type { Variants } from "motion"
import { SectionHeader } from "./SectionHeader"

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understanding your vision, goals, and audience through deep research and strategic planning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="h-7 w-7">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design",
    description: "Crafting pixel-perfect interfaces with modern aesthetics that captivate and convert.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="h-7 w-7">
        <path d="M12 2L2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Develop",
    description: "Building with clean, performant code using React, Next.js, and modern architecture patterns.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="h-7 w-7">
        <polyline points="16,18 22,12 16,6" />
        <polyline points="8,6 2,12 8,18" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Deploy",
    description: "Shipping fast, optimized applications with CI/CD, testing, and continuous iteration.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="h-7 w-7">
        <path d="M22 2 11 13" />
        <path d="m22 2-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
  },
]

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const ProcessSection = () => {
  return (
    <section className="inside-container border-t border-black/15">
      <SectionHeader label="PROCESS" number="03" />

      {/* Header */}
      <div className="flex flex-col items-start gap-3">
        <h2 className="text-4xl font-bold tracking-tight text-stone-800 md:text-5xl lg:text-6xl">
          From Idea to
          <br />
          <span className="italic font-light text-stone-500">Reality.</span>
        </h2>
        <p className="max-w-lg text-sm text-stone-500">
          Every project follows a proven process designed to deliver exceptional results, on time and beyond expectations.
        </p>
      </div>

      {/* Steps Grid */}
      <MotionDiv
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {steps.map((step, i) => (
          <MotionDiv
            key={step.number}
            variants={item}
            className="group relative flex flex-col gap-5 bg-[#fdf8f0] p-7 transition-all duration-500 hover:bg-white"
          >
            {/* Step number */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold tracking-widest text-[var(--beige-400)]">
                {step.number}
              </span>
              {i < steps.length - 1 && (
                <div className="hidden text-stone-300 lg:block">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>

            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-black/8 bg-white shadow-sm text-[var(--beige-600)] transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
              {step.icon}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold tracking-tight text-stone-800">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-stone-500">
                {step.description}
              </p>
            </div>

            {/* Bottom accent line on hover */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[var(--beige-400)] to-[var(--beige-500)] transition-all duration-500 group-hover:w-full" />
          </MotionDiv>
        ))}
      </MotionDiv>
    </section>
  )
}
