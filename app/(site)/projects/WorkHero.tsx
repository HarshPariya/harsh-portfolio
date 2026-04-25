import { AnimatedElement } from "@/app/components/ui/AnimatedElement"
import { SectionHeader } from "@/app/components/SectionHeader"

export const WorkHero: React.FC = () => {
  return (
    <div className="inside-container-large bg-[var(--beige-100)]/40 text-stone-800">
      <SectionHeader label="WORK" number="01" />

      <div className="flex flex-col items-start gap-6 max-md:px-5.5">
        <h1 className="xs:text-6xl relative z-5 text-5xl leading-[1] font-bold tracking-tight text-stone-800 sm:text-7xl lg:text-8xl">
          <AnimatedElement element="span" offsetPx={20} fadeDirection="left" className="inline-block">
            Selected
          </AnimatedElement>{" "}
          <br />
          <AnimatedElement element="span" offsetPx={40} delay={0.2} fadeDirection="top" className="inline-block italic font-light text-stone-500">
            Projects.
          </AnimatedElement>
        </h1>
        <AnimatedElement
          element="p"
          delay={0.6}
          className="max-w-md text-sm leading-relaxed tracking-tight text-stone-500 md:text-base"
        >
          A collection of what I&apos;ve actually built — from open-source libraries like React Zero-UI to production apps. See Case Studies for more details.
        </AnimatedElement>
      </div>
    </div>
  )
}
