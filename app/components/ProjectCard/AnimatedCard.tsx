"use client"
import { MotionValue } from "motion/react"
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
}

export function AnimatedCard({ src, alt, offset, color, type, gridId, progress, href, githubUrl, title, priority }: AnimatedCardProps) {
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
        {/* The Card component now handles the internal links (buttons). 
            We can make the image itself clickable by wrapping ONLY the image in Card if we wanted, 
            but Card handles the layout. Let's rely on the buttons inside Card for explicit actions, 
            or make the whole card clickable via an overlay link if needed. 
            For this design, let's pass the URLs to Card. If we want the whole card to be clickable, 
            we need to avoid nested <a> tags. Card uses <a> tags for buttons. 
            So we should NOT wrap Card in an <a> tag.
        */}
        <Card src={src} alt={alt} liveUrl={primaryLink} githubUrl={githubUrl} title={title} detailUrl={`${SITE_SLUGS.projects}/${gridId}`} priority={priority} />
      </div>
    </div>
  )
}
