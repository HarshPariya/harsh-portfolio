"use client"
import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard"
import squidaiImage from "@/public/assets/SquidAI.png"
import campusNavImage from "@/public/assets/Campus-nav.png"
import travelGoImage from "@/public/assets/TravelGo.png"
import quizImage from "@/public/assets/Quiz.png"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useMediaQuery"
import { useRef, useEffect } from "react"
import { useScroll, useSpring, useMotionValue } from "framer-motion"
import { useUI } from "@react-zero-ui/core"
import { externalLinks } from "@/config/siteConfig"

// These IDs are used for animation offsets and must match the gridId values below
const ids = ["squidai", "campus-navigation", "travelgo", "quiz-app"]

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const isSmallScreen = useIsMobile(576)
  const responsiveScale = isMobile ? 0.34 : 0.8
  const [, setReveal] = useUI<"true" | "false">("reveal", "false")

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["start start", "10% start"] : ["start start", "15% start"],
  })
  const stiffness = isMobile ? 120 : 220
  const damping = isMobile ? 50 : 90

  const rawProgress = useSpring(scrollYProgress, { stiffness, damping })

  // Once cards fully settle into the grid, lock them there.
  // Only unlock when the user scrolls all the way back to the top.
  const lockedRef = useRef(false)
  const progress = useMotionValue(0)

  const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.5

  useEffect(() => {
    const unsubscribe = rawProgress.on("change", (v) => {
      if (lockedRef.current) {
        // Check if user scrolled back to the very top
        if (scrollYProgress.get() < 0.02) {
          lockedRef.current = false
          progress.set(v)
          setReveal("false")
        }
        // Otherwise stay locked at 1
        return
      }

      // Not locked — follow the spring
      if (v >= triggerProgress) {
        // Cards reached the grid — lock them
        lockedRef.current = true
        progress.set(1)
        setReveal("true")
      } else {
        progress.set(v)
        setReveal("false")
      }
    })
    return unsubscribe
  }, [rawProgress, progress, scrollYProgress, setReveal, triggerProgress])

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    squidai: { rot: 9, s: responsiveScale, dx: isMobile ? -220 : -30, dy: isMobile ? -120 : -40 },
    "campus-navigation": { rot: -5, s: responsiveScale, dx: isMobile ? -230 : -60, dy: isMobile ? -130 : -40 },
    travelgo: { rot: 5, s: responsiveScale, dx: isMobile ? -225 : -45, dy: isMobile ? -130 : -25 },
    "quiz-app": { rot: -3, s: responsiveScale, dx: isMobile ? -220 : -50, dy: isMobile ? -110 : -35 },
  }

  const offsets = Object.fromEntries(
    ids.map((id) => {
      const base = rawOffsets[id] ?? { x: 0, y: 0 }
      const t = OFFSET_TUNING[id] ?? {}
      return [
        id,
        {
          x: (base.x ?? 0) + (t.dx ?? 0),
          y: (base.y ?? 0) + (t.dy ?? 0),
          rot: t.rot ?? 0,
          s: t.s ?? 1,
        },
      ]
    })
  )

  return (
    <section id="projects-grid" className={clsx("relative scroll-mt-36", className)} ref={ref}>
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">

        <AnimatedCard
          key="campus-navigation"
          src={campusNavImage}
          alt={"Campus Navigation System Preview"}
          offset={offsets["campus-navigation"]}
          gridId="campus-navigation"
          progress={progress}
          href="https://campus-navigation-sigma.vercel.app/"
          githubUrl="https://github.com/HarshPariya/Campus_Navigation_Frontend"
          title="Campus Navigation System"
        />

        <AnimatedCard
          key="travelgo"
          src={travelGoImage}
          alt={"TravelGo Travel Agency Preview"}
          offset={offsets["travelgo"]}
          gridId="travelgo"
          progress={progress}
          href="https://travelgo-by-hp01.netlify.app/"
          githubUrl="https://github.com/HarshPariya/Travel-GO-Frontend"
          title="TravelGo"
        />

        <AnimatedCard
          key="quiz-app"
          src={quizImage}
          alt={"Quiz App Preview"}
          offset={offsets["quiz-app"]}
          gridId="quiz-app"
          progress={progress}
          href="https://quiz-app-by-harsh.netlify.app/"
          githubUrl="https://github.com/HarshPariya/Quiz-App-Frontend"
          title="Quiz App"
        />

        <AnimatedCard
          key={"squidai"}
          src={squidaiImage}
          alt={"SquidAI Preview"}
          offset={offsets["squidai"]}
          gridId="squidai"
          progress={progress}
          href="https://squid-ai-phi.vercel.app/"
          githubUrl="https://github.com/HarshPariya/SquidAI"
          title="SquidAI"
          priority={true}
        />

      </div>
    </section>
  )
}
