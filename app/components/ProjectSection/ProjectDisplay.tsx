import { ProjectHero } from "./ProjectHero"

import { ResultsSection } from "./ResultsSection"
import { ApproachSection } from "./ApproachSection"
import { LargeReview } from "../LargeReview"
import { MoreProjectsSection } from "./MoreProjectsSection"
import { ProjectData } from "../../data/project-data"
import { RecruiterContact } from "../RecruiterContact"
import Image from "next/image"

const ProjectDisplay: React.FC<{ projectData: ProjectData }> = ({ projectData }) => {
  return (
    <main className="overflow-hidden">
      <ProjectHero {...projectData.hero} />
      {projectData.projectImage && (
        <section className="inside-container-large mt-12 mb-20 lg:mb-32">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[var(--beige-100)]">
            <Image
              src={projectData.projectImage}
              alt={`${projectData.hero.client} Project Image`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          </div>
        </section>
      )}
      {projectData.results && projectData.results.length > 0 && <ResultsSection analyticCards={projectData.results} />}
      {projectData.phases && projectData.phases.length > 0 && <ApproachSection phases={projectData.phases} />}
      {projectData.review && <LargeReview {...projectData.review} />}
      <MoreProjectsSection />
      <RecruiterContact />
    </main>
  )
}

export default ProjectDisplay
