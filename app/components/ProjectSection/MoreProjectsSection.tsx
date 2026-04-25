import { HeaderText } from "@/app/ui/HeaderText"
import { Card } from "../ProjectCard/Card"
import { Typography } from "@/app/ui/Elements"
import { Icon } from "../Icon"
import { Link } from "@/app/utils/Link"
import { ZeroUICarousel } from "../Carousel/Carousel"
import { STATIC_PROJECTS } from "@/app/(site)/projects/ProjectsStatic"
import { SITE_SLUGS } from "@/config/siteConfig"

export const MoreProjectsSection = () => {
  return (
    <section className="inside-container relative z-2">
      <HeaderText title="More Projects" />

      <ZeroUICarousel xlSlidesToShow={2} slidesToShow={2} mobileSlidesToShow={1} gap={24} autoplay={3000} className="mb-11 h-full w-full text-stone-800">
        <div className="relative h-full w-full">
          <div className="card-image flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white opacity-90 transition-opacity duration-500 will-change-transform group-hover:after:opacity-0 md:rounded-3xl">
            <div className="rounded-lg bg-[var(--beige-500)] p-5">
              <Icon name="plus" className="h-5 w-5 text-white" />
            </div>{" "}
            <Typography className="mt-5 max-w-xs text-center" as="p">
              Got a cool idea? This spot is waiting for your success story.
            </Typography>
          </div>
        </div>
        {STATIC_PROJECTS.map((project) => {
          // Since Card now handles its own links (buttons), we typically don't need a wrapper 
          // if we only rely on the buttons. However, if there are layout constraints requiring a wrapper
          // we can use a div. 
          // The Card component in MoreProjectsSection.tsx is currently being used inside a specific layout context.

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
      </ZeroUICarousel>
    </section>
  )
}
