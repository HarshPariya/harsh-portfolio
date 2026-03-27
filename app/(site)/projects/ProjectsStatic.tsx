import { StaticImageData } from "next/image"
import { Card } from "@/app/components/ProjectCard/Card"
import squidaiImage from "@/public/assets/SquidAI.png"
import campusNavImage from "@/public/assets/Campus-nav.png"
import travelGoImage from "@/public/assets/TravelGo.png"
import quizImage from "@/public/assets/Quiz.png"
import { Link } from "@/app/utils/Link"
import { externalLinks, SITE_SLUGS } from "@/config/siteConfig"

type StaticProject = {
  id: string
  src: StaticImageData
  alt: string
  color: string
  type: string
  text: string
  title: string // Project Name
  href: string // Live Preview
  githubUrl: string // GitHub Repo
  ariaLabel: string
  isExternal: boolean
}

export const STATIC_PROJECTS: StaticProject[] = [
  {
    id: "squidai",
    src: squidaiImage,
    alt: "SquidAI Preview",
    color: "#4C1D95",
    type: "AI Technical Assistant",
    text: "View on GitHub",
    title: "SquidAI",
    href: "https://squidai.onrender.com/",
    githubUrl: "https://github.com/HarshPariya/SquidAI",
    ariaLabel: "View SquidAI on GitHub",
    isExternal: true,
  },
  {
    id: "campus-navigation",
    src: campusNavImage,
    alt: "Campus Navigation System Preview",
    color: "#0F766E",
    type: "Campus Navigation System",
    text: "View on GitHub",
    title: "Campus Navigation System",
    href: "https://campus-navigation-sigma.vercel.app/",
    githubUrl: "https://github.com/HarshPariya/Campus_Navigation_Frontend",
    ariaLabel: "View Campus Navigation System on GitHub",
    isExternal: true,
  },
  {
    id: "travelgo",
    src: travelGoImage,
    alt: "TravelGo Travel Agency Preview",
    color: "#EA580C",
    type: "Travel Agency Website",
    text: "View on GitHub",
    title: "TravelGo",
    href: "https://travelgo-by-hp01.netlify.app/",
    githubUrl: "https://github.com/HarshPariya/Travel-GO-Frontend",
    ariaLabel: "View TravelGo on GitHub",
    isExternal: true,
  },
  {
    id: "quiz-app",
    src: quizImage,
    alt: "Quiz App Preview",
    color: "#16A34A",
    type: "Quiz Application",
    text: "View on GitHub",
    title: "Quiz App",
    href: "https://quiz-app-by-harsh.netlify.app/",
    githubUrl: "https://github.com/HarshPariya/Quiz-App-Frontend",
    ariaLabel: "View Quiz App on GitHub",
    isExternal: true,
  },
]

export const ProjectsStatic: React.FC = () => {
  return (
    <section className="border-t border-slate-200">
      <div className="inside-container-small">
        <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          {STATIC_PROJECTS.map((project) => {
            return (
              <div key={project.id} className="h-full w-full">
                <Card
                  src={project.src}
                  alt={project.alt}
                  liveUrl={project.href}
                  githubUrl={project.githubUrl}
                  title={project.title}
                  detailUrl={`${SITE_SLUGS.projects}/${project.id}`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
