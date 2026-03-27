import Link from "next/link"
import { Icon } from "./Icon"
import clsx from "clsx"
import type { Variants } from "motion"
import { MotionDiv } from "../utils/lazy-ui"
const container: Variants = {
  hidden: {
    x: -12,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      duration: 0.2,
    },
  },
}

const linkLogo: Variants = {
  hidden: {
    opacity: 0,
    x: -12,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export const Socials: React.FC<{
  socialLinks: { href: string; icon: string }[]
  className?: string
  iconClassName?: string
}> = ({ socialLinks, className, iconClassName }) => {
  const renderIcon = (icon: string) => {
    if (icon === "instagram") {
      return (
        <svg
          viewBox="0 0 24 24"
          height={15}
          width={15}
          className="text-current"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="17" cy="7" r="1.2" fill="currentColor" />
        </svg>
      )
    }

    if (icon === "x") {
      return (
        <svg
          viewBox="0 0 24 24"
          height={15}
          width={15}
          className="text-current"
          aria-hidden="true"
        >
          <path
            d="M5 4.5L9.75 10.2 5.3 19.5h2.2L11 12.7l3.8 4.8h4.2l-5-6.1 4.2-6.9H16l-3.2 5.2L9.5 4.5H5z"
            fill="currentColor"
          />
        </svg>
      )
    }

    return <Icon name={icon} height={15} width={15} className="text-current" />
  }

  return (
    <MotionDiv
      className={clsx("flex gap-2", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      {socialLinks.map((link) => (
        <MotionDiv variants={linkLogo} key={link.href}>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className={clsx("footer-link", iconClassName)}
            href={link.href}
            aria-label={link.icon}
            title={link.icon}
          >
            {renderIcon(link.icon)}
          </Link>
        </MotionDiv>
      ))}
    </MotionDiv>
  )
}
