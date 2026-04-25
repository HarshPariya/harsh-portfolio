"use client"

import { HeroScrollClick } from "./HeroScrollClick"
import { ActivityDot } from "./ui/ActivityDot"
import { AnimatedElement } from "./ui/AnimatedElement"
import { CallToActionButton } from "./ui/CallToActionButton"
import { WhiteButtonLink } from "./ui/WhiteButtonLink"
import { Icon } from "./Icon"
import Link from "next/link"
import { SITE_NAP } from "@/config/siteConfig"

export const HeroV2 = () => {
  return (
    <section className="mx-auto max-w-6xl pt-25 sm:pt-28 md:pt-32 text-stone-800">
      {/* Top bar with role + social links */}
      <AnimatedElement
        element="div"
        delay={0.2}
        className="flex items-center justify-between border-b border-black/15 px-5.5 pb-4 md:px-11"
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
          Full Stack Developer — Based in India
        </span>
        <div className="hidden items-center gap-6 md:flex">
          {[
            { name: "GITHUB", href: SITE_NAP.profiles.github },
            { name: "LINKEDIN", href: SITE_NAP.profiles.linkedIn },
            { name: "INSTAGRAM", href: SITE_NAP.profiles.instagram },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium uppercase tracking-[0.15em] text-stone-400 transition-colors duration-300 hover:text-stone-800"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </AnimatedElement>

      <div className="inside relative flex [flex:1.5_0_0px] px-5.5 pb-12 pt-12 md:px-11 md:pb-24 md:pt-16">
        <div className="flex max-w-lg flex-col gap-8 md:min-w-sm">
          <AnimatedElement
            element="span"
            delay={0.6}
            className="z-2 inline-flex items-center gap-2 self-start rounded-full border border-[var(--beige-200)] bg-white/80 px-3 py-2 text-xs font-medium text-stone-700 shadow-sm backdrop-blur"
          >
            <ActivityDot />
            Available for work
          </AnimatedElement>

          <h1 className="xs:text-5xl relative z-5 text-4xl leading-[1] font-medium tracking-tight text-stone-900 sm:text-6xl lg:text-7xl">
            <AnimatedElement element="span" offsetPx={20} fadeDirection="left" className="inline-block font-bold">
              Harsh Pariya
            </AnimatedElement>{" "}
            <br />
            <AnimatedElement element="span" offsetPx={40} delay={0.2} fadeDirection="top" className="inline-block"></AnimatedElement>
            <AnimatedElement element="span" delay={0.4} offsetPx={20} fadeDirection="left" className="inline-block italic font-light text-stone-500">
              Full-Stack Developer.
            </AnimatedElement>
          </h1>

          <AnimatedElement element="p" delay={0.6} className="max-w-xs text-sm leading-snug tracking-tight text-stone-500 md:max-w-sm md:pr-4 md:text-base">
            I'm a creative developer passionate and dedicated to building modern, scalable web experiences with{" "}
            <strong className="font-semibold text-stone-800">React, Next.js & MERN Stack.</strong>
          </AnimatedElement>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <CallToActionButton />
              <AnimatedElement
                element="div"
                delay={0.7}
                className="z-2"
                variants={{
                  hidden: { opacity: 0, scale: 0.8, filter: "blur(5px)" },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: { delay: 0.7, duration: 0.5 },
                  },
                }}
              >
                <WhiteButtonLink href="/resume.pdf" download className="h-[48px] px-6 shadow-md hover:shadow-none">
                  <Icon name="page" height={18} width={18} className="h-[18px] w-[18px] text-stone-600" />
                  Download Resume
                </WhiteButtonLink>
              </AnimatedElement>
            </div>
          </div>
        </div>
        {/* Don't remove this span */}
        <span data-stack-target-id className="xs:ml-[8%] [flex:1 _0_0px] xs:mt-20 mt-24 ml-[4%] h-1 w-2 sm:mt-11 xl:ml-[16%]" />
        <HeroScrollClick />

        {/* subtle background ellipse */}
        <div className="pointer-events-none absolute inset-y-0 left-1/3 -z-1 hidden w-full bg-radial from-[var(--beige-200)]/30 via-transparent to-transparent blur-3xl md:block" />
      </div>
    </section>
  )
}
