import Image from "next/image"
import clsx from "clsx"
import profilePhoto from "@/public/profile.jpeg"
import signature from "../images/signature.png"
import { Text, Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about" className={clsx("border-y border-white/10 bg-slate-950/40 text-slate-100", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2 className="text-slate-300">
          About
          <br />
          <span className="text-slate-100">Harsh Pariya</span>
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src={profilePhoto} alt="Harsh Pariya" className="custom-shadow aspect-[4/4.5]" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text as="h2" size="lg" className="font-medium text-slate-50">
                Harsh Pariya
              </Text>
              <p className="text-sm text-slate-400">Full-Stack Developer (MERN + Next.js)</p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-300">
            <p>
              <strong className="font-semibold text-slate-50">Passionate Developer</strong> I thrive on building impactful software. My passion for
              technology drives me to constantly learn, experiment, and turn ideas into functional experiences.
            </p>

            <p>
              <strong className="font-semibold text-slate-50">Full-Stack Expertise</strong> Skilled in both frontend and backend, I create full-stack
              solutions using React, Node.js, Express, and MongoDB that are clean, scalable, and efficient.
            </p>

            <p>
              <strong className="font-semibold text-slate-50">Educational Background</strong> Currently pursuing B.Tech in Computer Science at Rai
              University, I&apos;ve developed strong foundations in problem solving, data structures, and software engineering.
            </p>

            <p>
              <strong className="font-semibold text-slate-50">Future Goals</strong> Aspiring to become a creative and technically sound Tech Architect,
              leading impactful projects and empowering the developer community through mentorship.
            </p>
          </Typography>
        </div>
      </div>
    </section>
  )
}
