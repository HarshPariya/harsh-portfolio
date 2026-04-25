import { HeroV2 } from "../components/HeroV2"
import { ProjectsSection } from "../components/ProjectsSection"
import { AboutSectionV2 } from "../components/AboutSectionV2"
import { ServicesSectionV2 } from "../components/ServicesSectionV2"
import { RecruiterContact } from "../components/RecruiterContact"
import { TechMarquee } from "../components/TechMarquee"
import { StatsSection } from "../components/StatsSection"
import { ProcessSection } from "../components/ProcessSection"
import { ScrollTextReveal } from "../components/ScrollTextReveal"
import { Metadata } from "next"
import { SITE_CONFIG, SITE_SLUGS } from "@/config/siteConfig"
import { homeGraph } from "@/config/schemas"
import Script from "next/script"

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description:
    "Explore the web developer portfolio of Harsh Pariya, a full-stack engineer building fast, modern web applications. See projects in React, Next.js, and the MERN stack.",
}

const PortfolioPage: React.FC = () => {
  return (
    <main className="overflow-hidden text-stone-800">
      <Script
        id="id-site-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeGraph),
        }}
      />
      <HeroV2 />
      <ProjectsSection />
      <AboutSectionV2 />
      <ProcessSection />
      <ServicesSectionV2 />
      <TechMarquee />
      <StatsSection />
      <ScrollTextReveal />
      <RecruiterContact />
      {/* <FAQSection /> */}
    </main>
  )
}
export default PortfolioPage
