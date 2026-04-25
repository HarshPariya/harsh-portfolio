import React from "react"
import { AnimatedText } from "./AnimatedText"

export const ExperienceSection: React.FC = () => {
    return (
        <section className="inside-container bg-[var(--beige-100)]/40 text-stone-800">
            {/* overlay heading */}
            <div className="pointer-events-none relative z-5 mb-16">
                <AnimatedText
                    text="Experience"
                    margin={100}
                    once={true}
                    className="inline-block text-4xl leading-9 tracking-tighter whitespace-nowrap text-stone-400 md:text-5xl md:leading-12 lg:text-6xl"
                />
            </div>

            <div className="relative z-4 grid grid-cols-1 gap-12 md:gap-16">
                {/* Experience Item 1 */}
                <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-8 border-b border-black/15 pb-12 last:border-0 last:pb-0">
                    <div className="flex flex-col gap-1 md:gap-2">
                        <h3 className="text-2xl font-medium tracking-tight text-stone-800 md:text-3xl">UI/UX Internship</h3>
                        <span className="text-lg text-stone-500">Gradscaler Technologies Private Limited</span>
                    </div>

                    <div className="flex flex-col gap-4 md:max-w-md lg:max-w-lg">
                        <span className="text-base font-medium text-stone-400">09/2025 - 11/2025</span>
                        <ul className="list-disc pl-4 text-base leading-relaxed text-stone-600">
                            <li>Designed a responsive dashboard interface focused on usability and clarity for end users</li>
                            <li>Created UI layouts for AWS-related pages aligned with client requirements</li>
                            <li>Collaborated with developers to refine designs based on feedback and feasibility</li>
                        </ul>
                    </div>
                </div>

                {/* Experience Item 2 */}
                <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-8 border-b border-black/15 pb-12 last:border-0 last:pb-0">
                    <div className="flex flex-col gap-1 md:gap-2">
                        <h3 className="text-2xl font-medium tracking-tight text-stone-800 md:text-3xl">Full Stack Developer</h3>
                        <span className="text-lg text-stone-500">Korsaq (Freelance Project)</span>
                    </div>

                    <div className="flex flex-col gap-4 md:max-w-md lg:max-w-lg">
                        {/* <span className="text-base font-medium text-stone-400">Date</span> */}
                        <ul className="list-disc pl-4 text-base leading-relaxed text-stone-600">
                            <li>Developed a multiplayer web-based number guessing game named Numble</li>
                            <li>Implemented real-time gameplay logic and user interactions</li>
                            <li>Built and integrated both frontend and backend components for seamless gameplay</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
