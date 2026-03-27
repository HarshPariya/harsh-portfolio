import React from "react"
import { ProjectsGrid } from "./ProjectsGrid"
import { AnimatedText } from "./AnimatedText"
import Link from "next/link"
import { Icon } from "./Icon"
import { SITE_SLUGS } from "@/config/siteConfig"

export const ProjectsSection: React.FC = () => {
  return (
    <section className="inside-container bg-slate-950/40 text-slate-100">
      {/* overlay heading */}
      <div className="pointer-events-none relative z-5">
        <AnimatedText
          text="Latest Projects"
          margin={200}
          once={true}
          className="inline-block text-4xl leading-9 tracking-tighter whitespace-nowrap text-slate-50 md:text-5xl md:leading-12 lg:text-6xl"
        />
      </div>

      <ProjectsGrid />

      <Link href={SITE_SLUGS.projects} className="group flex items-center justify-center gap-2">
        <span className="underline-hover text-xl leading-6 tracking-tight text-slate-300 md:text-2xl">View More Projects</span>
        <Icon
          name="arrow-right"
          height={18}
          width={18}
          className="text-slate-100 group-hover:animate-wiggle-right"
          strokeWidth={1.2}
        />
      </Link>
    </section>
  )
}
