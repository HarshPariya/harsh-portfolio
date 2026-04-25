"use client"

import { useEffect, useRef } from "react"
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiDocker,
  SiFigma,
  SiPostman,
} from "react-icons/si"
import { FaAws } from "react-icons/fa"
import { HiOutlineCodeBracket } from "react-icons/hi2"

const techs = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#44403c" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "REST APIs", icon: HiOutlineCodeBracket, color: "#8B5CF6" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
]

export const TechMarquee = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let animationId: number
    let offset = 0
    const speed = 0.4

    const step = () => {
      offset -= speed
      // Reset when half the content has scrolled (since we duplicate it)
      const halfWidth = el.scrollWidth / 2
      if (Math.abs(offset) >= halfWidth) offset = 0
      el.style.transform = `translateX(${offset}px)`
      animationId = requestAnimationFrame(step)
    }

    animationId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationId)
  }, [])

  const items = [...techs, ...techs] // duplicate for seamless loop

  return (
    <section className="relative overflow-hidden border-y border-black/15 bg-white/50 py-6 backdrop-blur-sm">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#fdf8f0] to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#fdf8f0] to-transparent" />

      <div ref={scrollRef} className="flex w-max items-center gap-10 will-change-transform">
        {items.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="group flex items-center gap-2.5 rounded-full border border-black/8 bg-white/80 px-5 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <tech.icon
              size={18}
              style={{ color: tech.color }}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-sm font-medium tracking-wide text-stone-700 whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
