"use client"

import { useState, useEffect, useCallback } from "react"
import { MotionDiv } from "../utils/lazy-ui"
import type { Variants } from "motion"
import { SectionHeader } from "./SectionHeader"
import { AnimatedH2 } from "./ui/AnimatedH2"

interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  initials: string
  accentColor: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Harsh consistently delivered high-quality work ahead of schedule. His ability to take ownership of full-stack features — from database design to polished UI — made him an invaluable asset to our team.",
    name: "Gradscaler Team",
    role: "Supervisor",
    company: "Gradscaler Technologies",
    initials: "GT",
    accentColor: "var(--beige-500)",
  },
  {
    quote:
      "Working with Harsh on Numble was an excellent experience. He built both the frontend and backend from scratch, handled real-time multiplayer logic flawlessly, and communicated progress clearly throughout the project.",
    name: "Korsaq",
    role: "Client",
    company: "Freelance Project",
    initials: "KQ",
    accentColor: "var(--beige-400)",
  },
  {
    quote:
      "Harsh has a rare combination of strong technical fundamentals and creative problem-solving. His projects consistently demonstrate a deep understanding of modern web architecture and user-centric design thinking.",
    name: "Prof. Mentor",
    role: "Faculty Advisor",
    company: "Rai University",
    initials: "RU",
    accentColor: "var(--beige-600)",
  },
]

const cardVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
    filter: "blur(6px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
    filter: "blur(6px)",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

const containerVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const TestimonialsSection = () => {
  const [[page, direction], setPage] = useState([0, 0])
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const currentIndex = ((page % testimonials.length) + testimonials.length) % testimonials.length

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection])
    },
    [page]
  )

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      paginate(1)
    }, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, paginate])

  const testimonial = testimonials[currentIndex]

  return (
    <section className="inside-container border-t border-black/15">
      <SectionHeader label="TESTIMONIALS" number="06" />

      <AnimatedH2>
        What People
        <br />
        <span className="text-stone-800 italic">Say.</span>
      </AnimatedH2>

      <MotionDiv
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto w-full max-w-3xl"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Main testimonial card */}
        <div className="relative overflow-hidden rounded-3xl border border-black/8 bg-white/70 p-8 shadow-sm backdrop-blur-sm md:p-12">
          {/* Large decorative quote mark */}
          <div
            className="pointer-events-none absolute -left-2 -top-4 text-[160px] font-serif leading-none select-none md:-left-4 md:-top-6 md:text-[220px]"
            style={{ color: testimonial.accentColor, opacity: 0.08 }}
          >
            &ldquo;
          </div>

          <MotionDiv
            key={page}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative z-10"
          >
            {/* Quote text */}
            <blockquote className="relative mb-8 text-lg leading-relaxed font-normal tracking-tight text-stone-700 md:text-xl md:leading-relaxed before:content-none after:content-none">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author info */}
            <div className="flex items-center gap-4">
              {/* Avatar with initials */}
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm"
                style={{ backgroundColor: testimonial.accentColor }}
              >
                {testimonial.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-800">
                  {testimonial.name}
                </p>
                <p className="text-xs text-stone-500">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </div>
          </MotionDiv>

          {/* Hover glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--beige-200)]/0 to-[var(--beige-300)]/0 transition-all duration-500 hover:from-[var(--beige-200)]/20 hover:to-[var(--beige-300)]/10" />
        </div>

        {/* Navigation dots + arrows */}
        <div className="mt-8 flex items-center justify-center gap-6">
          {/* Left arrow */}
          <button
            onClick={() => paginate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 text-stone-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:text-stone-800"
            aria-label="Previous testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M19 12H5m7-7-7 7 7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > currentIndex ? 1 : -1])}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-8 bg-[var(--beige-500)]"
                    : "w-2 bg-stone-300 hover:bg-stone-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => paginate(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 text-stone-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:text-stone-800"
            aria-label="Next testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </button>
        </div>
      </MotionDiv>
    </section>
  )
}
