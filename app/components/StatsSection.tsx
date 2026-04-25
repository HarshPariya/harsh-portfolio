"use client"

import { useEffect, useRef, useState } from "react"
import { MotionDiv } from "../utils/lazy-ui"
import { SectionHeader } from "./SectionHeader"

interface StatItem {
  label: string
  value: number
  suffix: string
  description: string
}

const stats: StatItem[] = [
  { label: "Projects Built", value: 15, suffix: "+", description: "Full-stack apps & websites" },
  { label: "Technologies", value: 20, suffix: "+", description: "Tools in my arsenal" },
  { label: "Lines of Code", value: 50, suffix: "K+", description: "Written & maintained" },
  { label: "Cups of Coffee", value: 999, suffix: "+", description: "Fuel for innovation" },
]

function useCountUp(target: number, duration = 2000, trigger: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let startTime: number
    let animationId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) animationId = requestAnimationFrame(step)
    }

    animationId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationId)
  }, [target, duration, trigger])

  return count
}

const StatCard = ({ label, value, suffix, description, delay }: StatItem & { delay: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const count = useCountUp(value, 2000, isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <MotionDiv
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group relative flex flex-col items-center gap-2 rounded-2xl border border-black/8 bg-white/70 px-6 py-8 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--beige-200)]/0 to-[var(--beige-300)]/0 transition-all duration-500 group-hover:from-[var(--beige-200)]/30 group-hover:to-[var(--beige-300)]/10" />

      <div className="relative z-10">
        <span className="text-4xl font-bold tracking-tight text-stone-800 md:text-5xl">
          {count}
          <span className="text-[var(--beige-500)]">{suffix}</span>
        </span>
      </div>

      <h3 className="relative z-10 text-sm font-semibold uppercase tracking-widest text-stone-600">
        {label}
      </h3>
      <p className="relative z-10 text-xs text-stone-400">
        {description}
      </p>
    </MotionDiv>
  )
}

export const StatsSection = () => {
  return (
    <section className="inside-container border-t border-black/15">
      <SectionHeader label="STATS" number="05" />

      <div className="flex flex-col items-start gap-3">
        <h2 className="text-4xl font-bold tracking-tight text-stone-800 md:text-5xl lg:text-6xl">
          Numbers That
          <br />
          <span className="italic font-light text-stone-500">Matter.</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} {...stat} delay={i * 0.1} />
        ))}
      </div>
    </section>
  )
}
