import { H1, Typography } from "@/app/ui/Elements"
import Link from "next/link"
import { Icon } from "../Icon"
import { ProjectHeroProps } from "@/app/data/project-data"

export const ProjectHero: React.FC<ProjectHeroProps> = ({ title, client, year, description, categories, link, githubLink }) => {
  return (
    <section className="inside-container-large relative z-2 flex max-w-2xl flex-col gap-8">
      <H1 variant="medium" className="wrap-break-word">
        {title}
      </H1>
      <Typography as="div" size="xs" className="flex gap-4 text-sm text-slate-300">
        <div className="flex gap-2">
          <span>Client</span>
          <span className="font-medium text-slate-100">{client}</span>
        </div>
        <div className="flex gap-2">
          <span>Year</span>
          <span className="font-medium text-slate-100">{year}</span>
        </div>
      </Typography>
      <Typography as="p" size="sm" className="leading-normal text-slate-300">
        {description}
      </Typography>
      <Typography as="div" size="xs" className="flex flex-col gap-2 leading-normal text-slate-300">
        <p className="font-medium">Scope of Work</p>
        <ul className="flex flex-wrap gap-2 text-xs font-medium text-slate-800">
          {categories.map((item) => (
            <li key={item} className="z-0 w-fit rounded-full border border-gray-200 bg-white px-4 py-1.5">
              {item}
            </li>
          ))}
        </ul>
      </Typography>
      <div className="flex flex-wrap gap-4">
        <Link
          href={link}
          title={`View ${client} live site`}
          target="_blank"
          className="underline-hover flex w-fit items-center gap-1 text-lg text-nowrap text-slate-100"
        >
          View Live Site
          <Icon name="arrow-right" className="h-3 w-3 text-slate-100" />
        </Link>
        {githubLink && (
          <Link
            href={githubLink}
            title={`View ${client} code`}
            target="_blank"
            className="underline-hover flex w-fit items-center gap-1 text-lg text-nowrap text-slate-100"
          >
            View Code
            <Icon name="github" className="h-3 w-3 text-slate-100" />
          </Link>
        )}
      </div>
    </section>
  )
}
