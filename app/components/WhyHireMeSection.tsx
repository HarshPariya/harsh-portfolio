"use client"

import { MotionDiv } from "../utils/lazy-ui"
import type { Variants } from "motion"
import { SectionHeader } from "./SectionHeader"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { BlackButtonLink } from "./ui/BlackButtonLink"
import { SITE_NAP } from "@/config/siteConfig"

interface ValueProp {
  icon: React.ReactNode
  title: string
  description: string
  highlight: string
}

const valueProps: ValueProp[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Ship Fast, Ship Right",
    description:
      "I don't just write code — I deliver products. Clean architecture, tested features, and production-ready deployments. Every project I touch goes live with confidence.",
    highlight: "Delivery-focused",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path d="M12 2L2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    ),
    title: "Full-Stack Ownership",
    description:
      "From database schemas to pixel-perfect UIs — I own the entire stack. Your team ships faster because I bridge the gap between frontend polish and backend reliability.",
    highlight: "End-to-end",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Team Multiplier",
    description:
      "Clear communication, thorough code reviews, proactive problem-solving. I don't just join teams — I make them better. Every standup, every PR, every sprint.",
    highlight: "Collaborative",
  },
]

const containerVariant: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const ctaVariant: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: 0.4, ease: "easeOut" },
  },
}

export const WhyHireMeSection = () => {
  return (
    <section className="inside-container border-t border-black/15 bg-[var(--beige-100)]/40">
      <SectionHeader label="WHY ME" number="08" />

      <div className="flex flex-col items-center gap-4 text-center">
        <AnimatedH2 className="text-center">
          Why You Should
          <br />
          <span className="text-stone-800 italic">Hire Me.</span>
        </AnimatedH2>
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-lg text-sm text-stone-500 text-balance"
        >
          I bring more than technical skills to the table. Here&apos;s what sets me apart
          and why I&apos;ll be a valuable addition to your team.
        </MotionDiv>
      </div>

      {/* Value Proposition Cards */}
      <MotionDiv
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {valueProps.map((prop, i) => (
          <MotionDiv
            key={i}
            variants={cardVariant}
            className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-black/8 bg-white/70 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
          >
            {/* Highlight badge */}
            <span className="self-start rounded-full border border-[var(--beige-200)] bg-[var(--beige-50)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--beige-600)]">
              {prop.highlight}
            </span>

            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-black/8 bg-white text-[var(--beige-600)] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
              {prop.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold tracking-tight text-stone-800">
              {prop.title}
            </h3>
            <p className="text-sm leading-relaxed text-stone-500">
              {prop.description}
            </p>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[var(--beige-400)] to-[var(--beige-500)] transition-all duration-500 group-hover:w-full" />

            {/* Corner glow on hover */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--beige-200)]/0 transition-all duration-500 group-hover:bg-[var(--beige-200)]/30" />
          </MotionDiv>
        ))}
      </MotionDiv>

      {/* CTA */}
      <MotionDiv
        variants={ctaVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4"
      >
        <p className="text-center text-sm text-stone-500">
          Ready to bring impact to your team?
        </p>
        <BlackButtonLink href={`mailto:${SITE_NAP.email}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-[18px] w-[18px]">
            <path d="M22 2 11 13" />
            <path d="m22 2-7 20-4-9-9-4 20-7z" />
          </svg>
          Let&apos;s Talk
        </BlackButtonLink>
      </MotionDiv>
    </section>
  )
}
