"use client"

import { HeroScrollClick } from "./HeroScrollClick"
import { ActivityDot } from "./ui/ActivityDot"
import { AnimatedElement } from "./ui/AnimatedElement"
import { CallToActionButton } from "./ui/CallToActionButton"
import { WhiteButtonLink } from "./ui/WhiteButtonLink"
import { Icon } from "./Icon"

export const HeroV2 = () => {
  return (
    <section className="mx-auto max-w-6xl pt-25 sm:pt-28 md:pt-32 text-slate-100">
      <div className="inside relative flex [flex:1.5_0_0px] px-5.5 pb-12 md:px-11 md:pb-24">
        <div className="flex max-w-lg flex-col gap-8 md:min-w-sm">
          <AnimatedElement
            element="span"
            delay={0.6}
            className="z-2 inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-slate-900/60 px-3 py-2 text-xs font-medium text-slate-100 shadow-lg backdrop-blur"
          >
            <ActivityDot />
            India
          </AnimatedElement>

          <h1 className="xs:text-5xl relative z-5 text-4xl leading-[1] font-medium tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">
            <AnimatedElement element="span" offsetPx={20} fadeDirection="left" className="inline-block">
              Harsh Pariya
            </AnimatedElement>{" "}
            <br />
            <AnimatedElement element="span" offsetPx={40} delay={0.2} fadeDirection="top" className="inline-block"></AnimatedElement>
            <AnimatedElement element="span" delay={0.4} offsetPx={20} fadeDirection="left" className="inline-block text-slate-300">
              Portfolio
            </AnimatedElement>
          </h1>

          <AnimatedElement element="p" delay={0.6} className="max-w-xs text-sm leading-snug tracking-tight text-slate-300 md:max-w-sm md:pr-4 md:text-base">
            <strong className="font-semibold text-slate-50">Full-stack Developer.</strong> MERN Stack & Next.js Specialist. <br />
            Passionate about building scalable web applications and solving complex problems.
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
                <WhiteButtonLink href="/resume.pdf" download className="h-[48px] px-6 shadow-xl shadow-black/5 hover:shadow-none">
                  <Icon name="page" height={18} width={18} className="h-[18px] w-[18px] text-slate-100" />
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
        <div className="pointer-events-none absolute inset-y-0 left-1/3 -z-1 hidden w-full bg-radial from-indigo-100 via-transparent to-transparent blur-3xl md:block" />
      </div>
    </section>
  )
}
