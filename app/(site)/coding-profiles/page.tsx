import { Metadata } from "next"
import { GitHubStats } from "@/app/components/CodingProfile/GitHubStats"
import { AnimatedH1 } from "@/app/components/ui/AnimatedH1"
import { SectionHeader } from "@/app/components/SectionHeader"

export const metadata: Metadata = {
  title: "Harsh Pariya - Coding Profiles | GitHub Stats",
  description: "Explore Harsh Pariya's coding stats and open-source contributions on GitHub.",
}

export default function CodingProfilesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="inside-container">
        <SectionHeader label="PROFILES" number="01" />

        <div className="mb-12">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-stone-800 md:text-6xl lg:text-7xl">
            Coding
            <br />
            <span className="italic font-light text-stone-500">Profiles.</span>
          </h1>
          <p className="max-w-2xl text-lg text-stone-500">
            A real-time look at my open source contributions and coding activity across platforms.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <GitHubStats />
        </div>
      </div>
    </div>
  )
}
