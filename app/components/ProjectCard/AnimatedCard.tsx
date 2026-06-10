"use client"
import type { MotionValue } from "framer-motion"
import { StaticImageData } from "next/image"
import { Card } from "./Card"
import clsx from "clsx"
import { Link } from "../../utils/Link"
import { useRef } from "react"
import { useCompositorSpring } from "../../hooks/useCompositorSpring"
import { SITE_SLUGS } from "@/config/siteConfig"

export type HeroOffset = {
  x: number
  y: number
  rot: number
  s: number
  dx?: number // fine-tune X
  dy?: number // fine-tune Y
}

export interface AnimatedCardProps {
  src: StaticImageData
  alt: string
  offset: HeroOffset
  color: string
  type: string
  gridId: string
  progress: MotionValue<number>
  href?: string
  githubUrl?: string
  title?: string
  priority?: boolean
  index?: number
}

export function AnimatedCard({ src, alt, offset, color, type, gridId, progress, href, githubUrl, title, priority, index }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  useCompositorSpring(ref, progress)

  // Determine the primary link for the card click (Live Preview if available, otherwise fallback)
  const primaryLink = href ?? `${SITE_SLUGS.projects}/${gridId}`

  return (
    <div
      className="relative h-full w-full"
      data-grid-id={gridId}
    >
      <div
        ref={ref}
        style={
          {
            "--tx": `${offset.x}px`,
            "--ty": `${offset.y}px`,
            "--rot": `${offset.rot}deg`,
            "--sc": `${offset.s}`,
          } as React.CSSProperties
        }
        className={clsx("group relative h-full w-full transform-gpu opacity-1 will-change-[transform,opacity] contain-content backface-hidden")}
      >
        <Card
          src={src}
          alt={alt}
          liveUrl={primaryLink}
          githubUrl={githubUrl}
          title={title}
          detailUrl={`${SITE_SLUGS.projects}/${gridId}`}
          priority={priority}
          color={color}
          index={index}
        />
      </div>
    </div>
  )
}
