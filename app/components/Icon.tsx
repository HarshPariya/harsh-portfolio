"use client"
import clsx from "clsx"
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiPostman,
  SiGithubactions,
} from "react-icons/si"
import { FaAws, FaLinkedinIn } from "react-icons/fa"
import {
  HiOutlineSparkles,
  HiOutlinePaintBrush,
  HiOutlineGlobeAlt,
  HiOutlineGlobeEuropeAfrica,
  HiOutlineCodeBracket,
  HiOutlineCube,
  HiOutlineArrowRight,
  HiOutlinePlus,
  HiOutlineCalendar,
  HiOutlineDocument,
  HiOutlineXMark,
} from "react-icons/hi2"
import type { IconType } from "react-icons"

// Map icon names to react-icons components
const iconMap: Record<string, IconType> = {
  // Frontend skills
  react: SiReact,
  next: SiNextdotjs,
  html5: SiHtml5,
  tailwindcss: SiTailwindcss,
  figma: SiFigma,

  // Backend skills
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  jwt: SiJsonwebtokens,

  // Tools & DevOps
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  aws: FaAws,
  githubactions: SiGithubactions,

  // Social links
  linkedin: FaLinkedinIn,

  // Services (right column)
  "magic-wand": HiOutlineSparkles,
  "paint-bucket": HiOutlinePaintBrush,
  web: HiOutlineGlobeAlt,
  world: HiOutlineGlobeEuropeAfrica,
  planet: HiOutlineCodeBracket,
  cube: HiOutlineCube,

  // UI / navigation icons
  "arrow-right": HiOutlineArrowRight,
  plus: HiOutlinePlus,
  calendar: HiOutlineCalendar,
  page: HiOutlineDocument,
  x: HiOutlineXMark,
}

interface Props {
  name: string
  width?: number
  height?: number
  className?: string
  strokeWidth?: number
}

export const Icon: React.FC<Props> = ({
  name,
  width = 24,
  height = 24,
  className,
  strokeWidth,
}) => {
  const IconComponent = iconMap[name]

  if (!IconComponent) {
    // Fallback: render a placeholder circle if icon not found
    return (
      <svg
        width={width}
        height={height}
        className={clsx("text-stone-700", className)}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <circle cx="12" cy="12" r="8" />
      </svg>
    )
  }

  return (
    <IconComponent
      size={Math.max(width ?? 24, height ?? 24)}
      className={clsx("text-stone-700", className)}
      style={strokeWidth ? { strokeWidth } : { strokeWidth: 1.2 }}
    />
  )
}
