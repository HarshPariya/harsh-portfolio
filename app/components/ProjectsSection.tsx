import React from "react"
import { ProjectsGrid } from "./ProjectsGrid"
import { AnimatedText } from "./AnimatedText"
import Link from "next/link"
import { Icon } from "./Icon"
import { SITE_SLUGS } from "@/config/siteConfig"
import { SectionHeader } from "./SectionHeader"

export const ProjectsSection: React.FC = () => {
  return (
    <section className="inside-container border-t border-black/15 text-stone-800">
      <SectionHeader label="WORK" number="01" />

      {/* overlay heading */}
      <div className="pointer-events-none relative z-5">
        <AnimatedText
          text="Selected"
          margin={200}
          once={true}
          className="inline-block text-5xl leading-9 tracking-tighter whitespace-nowrap text-stone-900 font-bold md:text-6xl md:leading-12 lg:text-7xl"
        />
        <br />
        <AnimatedText
          text="Projects."
          margin={200}
          once={true}
          className="inline-block text-5xl leading-12 tracking-tighter whitespace-nowrap italic font-light text-stone-500 md:text-6xl md:leading-16 lg:text-7xl"
        />
      </div>

      <ProjectsGrid />

      <Link href={SITE_SLUGS.projects} className="group flex items-center justify-center gap-2">
        <span className="underline-hover text-xl leading-6 tracking-tight text-stone-600 md:text-2xl">View More Projects</span>
        <Icon
          name="arrow-right"
          height={18}
          width={18}
          className="text-stone-700 group-hover:animate-wiggle-right"
          strokeWidth={1.2}
        />
      </Link>
    </section>
  )
}
