import clsx from "clsx"
import { Icon } from "./Icon"
import { Text } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import type { Variants } from "motion"
import { MotionUl, MotionLi } from "../utils/lazy-ui"
import { SectionHeader } from "./SectionHeader"

const frontend = [
  { name: "React", src: "react" },
  { name: "Next.js", src: "next" },
  { name: "HTML", src: "html5" },
  { name: "Tailwind CSS", src: "tailwindcss" },
  { name: "Figma", src: "figma" },
]

const backend = [
  { name: "Node.js", src: "nodejs" },
  { name: "Express.js", src: "express" },
  { name: "MongoDB", src: "mongodb" },
  { name: "JWT", src: "jwt" },
]

const tools = [
  { name: "Git", src: "github" },
  { name: "GitHub", src: "github" },
  { name: "Postman", src: "postman" },
  { name: "AWS", src: "aws" },
  { name: "Workflows", src: "githubactions" },
]

const services = [
  { name: "Full Stack Development", src: "magic-wand" },
  { name: "React Development", src: "paint-bucket" },
  { name: "Performance Optimization", src: "web" },
  { name: "UI/UX Design", src: "world" },
  { name: "Code Reviews", src: "planet" },
  { name: "Advanced Motion", src: "cube" },
]

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const container2 = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
}
const element = {
  hidden: {
    opacity: 0,
    x: -40,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
}

const element2: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}
export const ServicesSectionV2: React.FC = ({ className = "" }: { className?: string }) => {
  return (
    <section
      id="technologies"
      className={clsx("inside-container relative z-2 items-start justify-center bg-[var(--beige-100)]/40 text-stone-800 md:flex-row md:items-center", className)}
    >
      {/*  LEFT COLUMN  */}
      <div className="flex h-full flex-col gap-10 max-md:w-full md:[flex:2_0_0px]">
        <SectionHeader label="SKILLS" number="04" />
        <AnimatedH2>
          Capabilities &<br />
          <span className="italic font-light text-stone-500">Tech Stack.</span>
        </AnimatedH2>

        {/* Categories */}
        <div className="flex flex-col gap-8 w-full">
          {/* Frontend */}
          <div>
            <Text size="sm" className="mb-4 font-medium tracking-wide text-stone-500 uppercase">
              Frontend
            </Text>
            <MotionUl
              className="flex flex-wrap gap-4"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            >
              {frontend.map(({ name, src }) => (
                <SkillItem key={name} name={name} src={src} />
              ))}
            </MotionUl>
          </div>

          {/* Backend */}
          <div>
            <Text size="sm" className="mb-4 font-medium tracking-wide text-stone-500 uppercase">
              Backend
            </Text>
            <MotionUl
              className="flex flex-wrap gap-4"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            >
              {backend.map(({ name, src }) => (
                <SkillItem key={name} name={name} src={src} />
              ))}
            </MotionUl>
          </div>

          {/* Tools */}
          <div>
            <Text size="sm" className="mb-4 font-medium tracking-wide text-stone-500 uppercase">
              Tools & DevOps
            </Text>
            <MotionUl
              className="flex flex-wrap gap-4"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            >
              {tools.map(({ name, src }) => (
                <SkillItem key={name} name={name} src={src} />
              ))}
            </MotionUl>
          </div>
        </div>
      </div>

      {/*  RIGHT COLUMN  */}
      <MotionUl
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={container2}
        className="grid [flex:1_0_0px] grid-cols-2 gap-8 md:grid-cols-1 mt-12 md:mt-0"
      >
        {services.map(({ name, src }) => (
          <MotionLi
            key={name}
            variants={element2}
            className="flex items-center gap-4 rounded-2xl bg-white/70 px-4 py-3 ring-1 ring-[var(--beige-300)]/50 backdrop-blur shadow-sm"
          >
            <span className="button-shadow flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-[var(--beige-100)] ring-1 ring-[var(--beige-400)]/50">
              <Icon
                name={src}
                width={30}
                height={30}
                className="object-contain text-[var(--beige-600)]"
                strokeWidth={1.2}
              />
            </span>
            <Text as="span" size="sm" className="text-stone-600">
              {name}
            </Text>
          </MotionLi>
        ))}
      </MotionUl>
    </section>
  )
}

const SkillItem = ({ name, src }: { name: string; src: string }) => (
  <MotionLi variants={element} className="flex flex-col items-center gap-2">
    <div className="group relative">
      <input placeholder={name} type="checkbox" className="peer hidden" id={name} />

      <label
        htmlFor={name}
        className="button-shadow flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--beige-300)]/50 bg-white/80 ring-1 ring-[var(--beige-300)]/40 peer-checked:translate-y-0.5 peer-checked:border-[var(--beige-500)]/80 peer-checked:shadow-none hover:translate-y-0.5 cursor-pointer"
      >
        <Icon name={src} width={34} height={34} className="object-contain text-stone-600" strokeWidth={1.2} />
      </label>
      {/* optional tooltip */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-stone-900/90 px-3 py-1.5 text-xs text-white opacity-0 transition delay-100 duration-300 group-hover:opacity-100 peer-checked:opacity-100 pointer-events-none">
        {name}
        {/* arrow */}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-stone-900/90"></span>
      </span>
    </div>
    <Text as="span" size="sm" className="text-stone-600 tracking-wide">
      {name}
    </Text>
  </MotionLi>
)

