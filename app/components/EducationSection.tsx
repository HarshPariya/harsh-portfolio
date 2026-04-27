"use client"

import { MotionDiv } from "../utils/lazy-ui"
import type { Variants } from "motion"
import { SectionHeader } from "./SectionHeader"
import { AnimatedH2 } from "./ui/AnimatedH2"

interface TimelineItem {
  date: string
  title: string
  institution: string
  description: string
  type: "education" | "certification"
  icon: React.ReactNode
}

const timelineData: TimelineItem[] = [
  {
    date: "2024 — Present",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Rai University, Gujarat",
    description:
      "Building strong foundations in data structures, algorithms, software engineering, and full-stack development. Actively participating in coding contests and building real-world projects.",
    type: "education",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path d="M4 10l8-6 8 6-8 6-8-6z" />
        <path d="M20 10v6c0 2-4 4-8 4s-8-2-8-4v-6" />
        <path d="M20 10v2" />
      </svg>
    ),
  },
  {
    date: "09/2025 — 11/2025",
    title: "UI/UX Design Internship",
    institution: "Gradscaler Technologies Pvt. Ltd.",
    description:
      "Designed responsive dashboard interfaces, created AWS-related page layouts, and collaborated with dev teams to refine user experiences based on feasibility and feedback.",
    type: "certification",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8m-4-4v4" />
      </svg>
    ),
  },
  {
    date: "2025",
    title: "Full Stack Developer — Freelance",
    institution: "Korsaq (Numble Game)",
    description:
      "Developed a multiplayer web-based game with real-time gameplay logic. Built and integrated frontend and backend for seamless user interactions using the MERN stack.",
    type: "certification",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <polyline points="16,18 22,12 16,6" />
        <polyline points="8,6 2,12 8,18" />
      </svg>
    ),
  },
  {
    date: "Ongoing",
    title: "Self-Taught & Continuous Learning",
    institution: "Online Platforms & Communities",
    description:
      "Constantly expanding expertise in React, Next.js, TypeScript, AWS, Docker, and system design through hands-on projects, open-source contributions, and competitive programming.",
    type: "certification",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
]

const containerVariant: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariant: Variants = {
  hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const lineVariant: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
}

export const EducationSection = () => {
  return (
    <section className="inside-container border-t border-black/15">
      <SectionHeader label="JOURNEY" number="07" />

      <AnimatedH2>
        Learning
        <br />
        <span className="text-stone-800 italic">Never Stops.</span>
      </AnimatedH2>

      <div className="relative mx-auto w-full max-w-3xl">
        {/* Animated vertical timeline line */}
        <MotionDiv
          variants={lineVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="absolute left-[19px] top-0 h-full w-px origin-top bg-gradient-to-b from-[var(--beige-400)] via-[var(--beige-300)] to-transparent md:left-[23px]"
        />

        <MotionDiv
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative flex flex-col gap-10"
        >
          {timelineData.map((item, i) => (
            <MotionDiv
              key={i}
              variants={itemVariant}
              className="group relative flex gap-6 md:gap-8"
            >
              {/* Timeline node */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/8 bg-white text-[var(--beige-600)] shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-110 md:h-12 md:w-12 md:rounded-2xl">
                  {item.icon}
                </div>
              </div>

              {/* Content card */}
              <div className="flex-1 rounded-2xl border border-black/8 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                {/* Date badge */}
                <span className="mb-3 inline-block rounded-full border border-[var(--beige-200)] bg-[var(--beige-50)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--beige-600)]">
                  {item.date}
                </span>

                <h3 className="mb-1 text-lg font-bold tracking-tight text-stone-800 md:text-xl">
                  {item.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-[var(--beige-500)]">
                  {item.institution}
                </p>
                <p className="text-sm leading-relaxed text-stone-500">
                  {item.description}
                </p>

                {/* Hover accent line */}
                <div className="mt-4 h-0.5 w-0 rounded-full bg-gradient-to-r from-[var(--beige-400)] to-[var(--beige-500)] transition-all duration-500 group-hover:w-full" />
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  )
}
