import { StaticImageData } from "next/image"
import { TintSimulator } from "../components/BespokeTint/TintSimulator"
import { Phase } from "../components/ProjectSection/ApproachSection"
import heroBefore from "@/app/opengraph-image.jpg"
import heroBeforeMobile from "@/app/opengraph-image.jpg"
import heroBeforeAutomedics from "@/app/opengraph-image.jpg"
import heroBeforeMobileAutomedics from "@/app/opengraph-image.jpg"
import { AnalyticCardProps } from "../components/ProjectSection/ResultsSection"
import { TrafficBarChart } from "../components/ProjectSection/TrafficBarChart"
import { RadialProgressRing } from "../components/ProjectSection/RadialProgressRing"
import { LineChart } from "../components/ProjectSection/LineChart"
import { REVIEW_MAP, type ReviewProps } from "./review-data"
import heroBeforeIao from "@/app/opengraph-image.jpg"
import heroBeforeMobileIao from "@/app/opengraph-image.jpg"
import heroAfterIao from "@/app/opengraph-image.jpg"
import apiHubHero from "@/public/assets/SquidAI.png"
import numbleHero from "@/public/assets/Campus-nav.png"
import slippyHero from "@/public/assets/TravelGo.png"
import hrmsHero from "@/public/assets/Quiz.png"
import portfolioNextJsHero from "@/public/assets/Portfolio-NextJs.png"
import folioHarshDevHero from "@/public/assets/FolioHarshDev.png"
import { ApproachTabsImage } from "../components/ProjectSection/ApproachTabsImage"

//   interface ProjectData {
//   hero: {
//     title: string
//     client: string
//     year: string
//     description: string | React.ReactNode
//     categories: string[]
//     link: string
//   }
//   beforeAfter: { heroBefore: StaticImageData; heroBeforeMobile: StaticImageData; iframe?: string; heroAfter?: StaticImageData }
//   results: {
//     title: string
//     description: string
//     percentageIncrease: number
//     chart: React.ReactNode
//     dataSource: string[]
//     phases: { id: number; title: string; subtitle: string; description: string; details: string[]; icon: string; feature: React.ReactNode }[]
//     review: {
//       quote: React.ReactNode
//       name: string
//       title: string
//       img: StaticImageData
//     }
//   }
// }

export interface ProjectHeroProps {
  title: string | React.ReactNode
  client: string
  year: string
  description: string | React.ReactNode
  categories: string[]
  // link to the client's website
  link: string
  githubLink?: string
}

export type ProjectData = {
  hero: ProjectHeroProps
  beforeAfter: {
    heroBefore: StaticImageData
    heroBeforeMobile: StaticImageData
    iframe?: string
    heroAfter?: StaticImageData
    beforeAltText: string
    beforeMobileAltText: string
    afterAltText: string
  }
  results: AnalyticCardProps[]
  phases: Phase[]
  review?: ReviewProps
  slug: string
  projectImage?: StaticImageData | string
}

export const bespoke: ProjectData = {
  projectImage: heroBefore,
  hero: {
    title: "Growing Bespoke Tint & PPF to $1m+ in Revenue",
    client: "Bespoke Tint & PPF",
    year: "2025",
    description: (
      <>
        Bespoke Tint & PPF&apos;s site was rebuilt from the ground up into a lightning-fast, conversion-first engine, every page reverse-engineered around the
        highest-value competitor keywords in the Bellevue auto-styling market. In under 90 days, organic{" "}
        <span className="font-semibold">traffic increased by nearly 1,000%</span>; the shop is booking an average of{" "}
        <span className="font-semibold">3 new paying clients per day</span>; and it&apos;s on track to surpass $1M in 2025 revenue.
      </>
    ),
    categories: ["SEO", "Web Design", "Web Development", "Photography"],
    link: "https://www.bespokeauto.org/",
  },
  slug: "bespoke",
  beforeAfter: {
    heroBefore: heroBefore,
    beforeAltText: "Bespoke Tint & PPF Before",
    beforeMobileAltText: "Bespoke Tint & PPF Before Mobile",
    heroBeforeMobile: heroBeforeMobile,
    iframe: "/bespoke-hero.html",
    afterAltText: "Bespoke Tint & PPF After Website Design",
  },
  results: [
    {
      title: "Traffic Growth",
      description: "Increase post-launch from all channels",
      percentageIncrease: 966,
      chart: <TrafficBarChart startValue={150} endValue={1450} />,
      dataSource: "Based on 30 day traffic average",
    },
    {
      title: "Conversion Rate",
      description: "Online visitor conversion improvement",
      percentageIncrease: 45,
      chart: <RadialProgressRing />,
      dataSource: "Measured over a 60 day period",
    },
    {
      title: "Revenue Growth",
      description: "Increase post-launch",
      percentageIncrease: 35,
      chart: <LineChart />,
      dataSource: "Measured over a 90 day period",
    },
  ],

  phases: [
    {
      id: 1,
      title: "Design System",
      subtitle: "Beautiful High-Converting Design",
      description:
        "Created a stunning design system that showcases amazing reviews while maintaining a slightly rebellious edge through strategic use of clip paths and angular elements.",
      details: [
        "Implemented clip-path CSS for edgy, non-traditional section borders",
        "Designed around extensive customer reviews and testimonials",
        "Created a cohesive design system with rebel aesthetic touches",
        "Incorporated angular elements instead of traditional straight lines",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/brand-images.jpg" alt="Competitor Analysis" />,
    },
    {
      id: 2,
      title: "Quality Assets",
      subtitle: "Premium Visual Content",
      description:
        "Developed high-quality images with crystal-clear call-to-actions strategically placed throughout the entire user journey.",
      details: [
        "High-resolution photography of completed work",
        "Strategic placement of clear call-to-action buttons",
        "Optimized media for fast loading times",
        "Created visual hierarchy to guide user attention",
      ],
      icon: "/assets/assets-black-camera.webp",
      feature: <ApproachTabsImage src="/assets/brand-images.jpg" alt="Premium visual content preview" />,
    },
    {
      id: 3,
      title: "Competitor Analysis",
      subtitle: "Traffic Generation Strategy",
      description:
        "Reverse-engineered competitor content and identified high-traffic keywords to build a content strategy that dominates local search results.",
      details: [
        "Analyzed top 5 competitors in the Bellevue area",
        "Used advanced SEO tools to identify high-traffic keywords",
        "Reverse-engineered successful competitor content strategies",
        "Built site copy around proven keyword opportunities",
        "Implemented technical SEO best practices",
      ],
      icon: "/assets/search-black.webp",
      feature: <ApproachTabsImage src="/assets/competitor-analysis.png" alt="Competitor Analysis" />,
    },
    {
      id: 4,
      title: "Content & Blog",
      subtitle: "Authority Building Through Education",
      description:
        "Created comprehensive blog content focusing on Washington State tint laws - the #1 traffic driver - with legal citations and expert insights.",
      details: [
        "Researched and wrote detailed tint law articles",
        "Answered every possible question about WA state regulations",
        "Used high-quality citations from legal websites",
        "Created evergreen content that drives consistent traffic",
        "Established the business as the local authority on tinting",
      ],
      icon: "/assets/notepad-black.webp",
      feature: <ApproachTabsImage src="/assets/washington-vehicle-tint-law-illustration.webp" alt="Tint Law Article" />,
    },
    {
      id: 5,
      title: "Interactive Tools",
      subtitle: "Window Tint Simulator",
      description: "Developed a custom window tint simulator allowing users to visualize different tint percentages in real-time - a unique engagement tool.",
      details: [
        "Built custom slider-based tint percentage simulator",
        "Real-time visual feedback for different tint levels",
        "Interactive tool increases user engagement and time on site",
        "Unique differentiator from competitors + SEO benefit",
      ],
      icon: "/assets/tool-black.webp",
      feature: <TintSimulator className="h-full w-full" />,
    },
  ],
  review: REVIEW_MAP.bespoke,
}

export const automedicsKirkland: ProjectData = {
  projectImage: heroBeforeAutomedics,
  hero: {
    title: "Transforming Automedics Kirkland's Online Presence",
    client: "Automedics Kirkland",
    year: "2025",
    description:
      "I replaced Automedics Kirkland's dated brochure site with a conversion-focused, SEO-engineered Next.js platform that channels local search traffic into booked service bays and showcases 1,000+ five-star reviews.",
    categories: ["Next.js", "Web Design", "Local SEO", "Copywriting"],
    link: "https://www.automedicskirkland.com",
  },
  slug: "automedics",

  beforeAfter: {
    heroBefore: heroBeforeAutomedics,
    beforeAltText: "Automedics Kirkland Before",
    beforeMobileAltText: "Automedics Kirkland Before Mobile",
    heroBeforeMobile: heroBeforeMobileAutomedics,
    iframe: "https://www.automedicskirkland.com",
    afterAltText: "Automedics Kirkland After Website Design",
  },
  results: [
    {
      title: "Traffic Growth",
      description: "Increase post-launch from all channels",
      percentageIncrease: 960,
      chart: <TrafficBarChart startValue={25} endValue={240} />,
      dataSource: "Based on 30 day traffic average",
    },
    {
      title: "Conversion Rate",
      description: "Online visitor conversion improvement",
      percentageIncrease: 85,
      chart: <RadialProgressRing percentage={85} />,
      dataSource: "Measured over a 60 day period",
    },
    {
      title: "Revenue Growth",
      description: "Increase post-launch",
      percentageIncrease: 15,
      chart: <LineChart />,
      dataSource: "Measured over a 90 day period",
    },
  ],

  phases: [
    {
      id: 1,
      title: "Brand Creation",
      subtitle: "From Zero to Hero",
      description: "Started from scratch to re-brand AutoMedics Kirkland, establishing them as the trusted automotive expert in their market.",
      details: [
        "Designed custom logo reflecting mechanical precision",
        "Selected color palette balancing trust and energy",
        "Created comprehensive brand guidelines document",
        "Developed consistent visual language across all touchpoints",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/automedics-brand-guide-example.webp" alt="AutoMedics Brand Identity" />,
    },
    {
      id: 2,
      title: "Performance",
      subtitle: "Sppeed That Converts",
      description:
        "Leveraged Next.js to create an incredibly fast website that loads instantly, keeping potential customers engaged instead of bouncing to competitors.",
      details: [
        "Server-side rendering for instant page loads",
        "Automatic code splitting for optimal performance",
        "Progressive web app features for mobile users",
      ],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/performance-metrics-automedics-web-development.webp" alt="Performance Metrics" />,
    },
    {
      id: 3,
      title: "Visuals",
      subtitle: "Trust Through Imagery",
      description:
        "Curated and optimized visuals that tell AutoMedics' story of expertise and reliability, turning skeptical visitors into confident customers.",
      details: [
        "Sourced authentic shop and service imagery",
        "Implemented smart lazy loading for faster browsing",
        "Optimized every asset for web without quality loss",
      ],
      icon: "/assets/assets-black-camera.webp",
      feature: <ApproachTabsImage src="/assets/trust-badges-automedics-web-design.webp" alt="AutoMedics Visual Assets" />,
    },
    {
      id: 4,
      title: "Social Proof",
      subtitle: "Design That Drives Business",
      description: "Engineered elements to showcase AutoMedics' 1,000-plus 5 star reviews.",
      details: [
        "Displayed 1,000+ reviews on the homepage",
        "Showcased 100+ Google reviews on the services page",
        "Added a Google Business Profile badge to the homepage",
        "Added a Google Business Profile badge to the services page",
      ],
      icon: "/assets/notepad-black.webp",
      feature: <ApproachTabsImage src="/assets/review-showcase-automedics-website-design.webp" alt="Review Showcase" />,
    },
  ],
  review: REVIEW_MAP.automedics,
}

export const iao: ProjectData = {
  projectImage: heroAfterIao,
  hero: {
    title: (
      <>
        Telling the Story <br /> of Iron & Oak
      </>
    ),
    client: "Iron & Oak Seattle",
    year: "2024",
    description:
      "I dug into Iron & Oak Seattle's origin story-founded amid the COVID-19 disruptions-and rebuilt their website in Next.js around a clear, narrative-driven structure. I also scraped the web for press mentions and coverage to reinforce credibility. The goal was simple: increase qualified online applicants. It worked, driving a noticeable lift in submissions.",
    categories: ["Next.js", "Web Design", "Web Development", "Storytelling"],
    link: "https://iao-seattle.vercel.app/?src=serbyte",
  },
  slug: "iron-and-oak",
  beforeAfter: {
    heroBefore: heroBeforeIao,
    heroBeforeMobile: heroBeforeMobileIao,
    iframe: "https://iao-seattle.vercel.app/?src=serbyte",
    beforeAltText: "Iron & Oak Seattle Before",
    beforeMobileAltText: "Iron & Oak Seattle Before Mobile",
    afterAltText: "Iron & Oak Seattle After Website Design",
  },
  results: [
    {
      title: "Traffic Increase",
      description: "Increase in traffic from all channels",
      percentageIncrease: 4100,
      chart: <TrafficBarChart startValue={10} endValue={410} />,
      dataSource: "Based on 30 day traffic average",
    },
    {
      title: "Online Applicants",
      description: "Increase in online job applicants",
      percentageIncrease: 290,
      chart: <RadialProgressRing percentage={290} />,
      dataSource: "Measured over a 60 day period",
    },
    {
      title: "Hires",
      description: "Increase in new hires",
      percentageIncrease: 65,
      chart: <LineChart />,
      dataSource: "Measured over a 30 day period",
    },
  ],

  phases: [
    {
      id: 1,
      title: "Brand Identity",
      subtitle: "Creating a brand that tells the story of Iron & Oak",
      description: "Started from scratch to re-brand Iron & Oak Seattle, establishing them as the trusted private security company in their market.",
      details: [
        "Designed custom logo reflecting the brand name and the company's history",
        "Created a brand story that tells the story of Iron & Oak",
        "Created a brand guidelines document",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-brand-guide-web-design.png" alt="Iron & Oak Brand Identity" />,
    },
    {
      id: 2,
      title: "Live Incident Data",
      subtitle: "Showing the world what Iron & Oak is all about",
      description: "We created a live incident data dashboard that displays incidents in real-time, connected to a live incident data API.",
      details: ["Airtable API integration for incident data", "Displays incidents in real-time"],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-website-tool.png" alt="Iron & Oak Website Tool" className="bg-[var(--beige-200)] px-2.5" />,
    },
    {
      id: 3,
      title: "Press Hub",
      subtitle: "Verified press & community coverage.",
      description: "Curated, verified media mentions centralizing third-party authority to boost trust & conversion.",
      details: [
        "Aggregated all credible third-party mentions",
        "Verified sources; removed low-value noise",
        "Structured data boosts authority signals",
        "Trust hub: social proof near conversion.",
      ],
      icon: "/assets/assets-black-camera.webp",
      feature: (
        <ApproachTabsImage src="/assets/iron-and-oak-media-coverage-website-research.png" alt="Iron & Oak Media Coverage" className="bg-[var(--beige-100)] px-2.5" />
      ),
    },
    {
      id: 4,
      title: "Talent SEO",
      subtitle: "A topical authority engine for security job seekers",
      description: "Designed a content cluster targeting Washington security guard career keywords and established Iron & Oak as the regional authority.",
      details: [
        "37 intent-mapped articles building authority",
        "Targeted WA security job & license keywords",
        "Internal links (pillar/support) speed indexation",
      ],
      icon: "/assets/notepad-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-content-cluster-seo.png" alt="Iron & Oak Content Cluster SEO" />,
    },
    {
      id: 5,
      title: "Applicant Portal",
      subtitle: "Multi-step validated, resume auto-fill, and applicant tracking",
      description: "Built a multi-step, validated application with autosave + resume, cutting friction and preserving in-progress candidates.",
      details: [
        "Stepper UI with clear stage + progress",
        "Client + server validation prevents bad submits",
        "Autosave each step (no data loss)",
        "Resume later via stored progress state",
      ],
      icon: "/assets/search-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-job-application-portal-web-design.png" alt="Iron & Oak Applicant Portal" />,
    },
  ],
  review: REVIEW_MAP.iao,
}

// --- NEW PROJECTS ---

export const apihub: ProjectData = {
  projectImage: apiHubHero,
  hero: {
    title: "APIHub: Centralized API Discovery & Documentation",
    client: "Personal Project",
    year: "2025",
    description:
      "I built APIHub to solve the fragmentation problem in API discovery. It's a centralized platform that aggregates public APIs, offering powerful search, categorization, and standardized documentation views. The goal was to reduce the time developers spend hunting for endpoints.",
    categories: ["React", "Next.js", "API Integration", "Platform"],
    link: "http://apihub-pi.vercel.app/",
    githubLink: "https://github.com/HarshPariya/APIHub",
  },
  slug: "apihub",
  beforeAfter: {
    heroBefore: apiHubHero,
    heroBeforeMobile: apiHubHero,
    beforeAltText: "APIHub Interface",
    beforeMobileAltText: "APIHub Mobile",
    afterAltText: "APIHub Dashboard",
  },
  results: [
    {
      title: "API Sources",
      description: "Aggregated public API sources",
      percentageIncrease: 150,
      chart: <TrafficBarChart startValue={10} endValue={50} />,
      dataSource: "Integrated Providers",
    },
    {
      title: "Search Speed",
      description: "improvement in endpoint discovery",
      percentageIncrease: 300,
      chart: <RadialProgressRing percentage={80} />,
      dataSource: "User Testing Benchmark",
    },
  ],
  phases: [
    {
      id: 1,
      title: "Architecture",
      subtitle: "Scalable Data Aggregation",
      description: "Designed a flexible schema to normalize data from various openAPI specs and public registries into a unified format.",
      details: ["Unified data model for diverse APIs", "Efficient search indexing", "Scalable backend architecture"],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-website-tool.png" alt="API Architecture" />,
    },
    {
      id: 2,
      title: "UI/UX Design",
      subtitle: "Developer-First Experience",
      description: "Created a clean, documentation-focused interface that prioritizes readability and quick access to endpoint details.",
      details: ["Dark mode support", "One-click copy snippets", "Interactive playground"],
      icon: "/assets/tool-black.webp",
      feature: (
        <ApproachTabsImage
          src="/assets/iron-and-oak-website-tool.png"
          alt="Developer UI"
          className="bg-[var(--beige-200)] px-2.5"
        />
      ),
    },
  ],
  review: {
    quote: "A game changer for finding the right API for my hackathon projects quickly.",
    name: "Beta Tester",
    title: "Full Stack Dev",
    img: apiHubHero,
  },
}

export const numble: ProjectData = {
  projectImage: numbleHero,
  hero: {
    title: "Numble: The Viral Number Guessing Game",
    client: "Personal Project",
    year: "2025",
    description:
      "Inspired by Wordle, Numble challenges players to guess a daily math equation. Built with React and TypeScript, it features complex state management for game logic, local storage for streaks, and a responsive design for mobile play.",
    categories: ["React", "Game Development", "Logic", "Web App"],
    link: "http://numble0412.netlify.app/",
    githubLink: "https://github.com/HarshPariya/Numble",
  },
  slug: "numble",
  beforeAfter: {
    heroBefore: numbleHero,
    heroBeforeMobile: numbleHero,
    beforeAltText: "Numble Game Board",
    beforeMobileAltText: "Numble Mobile",
    afterAltText: "Numble Win Screen",
  },
  results: [
    {
      title: "Daily Players",
      description: "Active daily user retention",
      percentageIncrease: 100,
      chart: <LineChart />,
      dataSource: "Analytics Data",
    },
  ],
  phases: [
    {
      id: 1,
      title: "Game Logic",
      subtitle: "Complex Equation Validation",
      description: "Implemented a robust validation engine that handles order of operations (BODMAS) and instant feedback on valid equations.",
      details: ["Regex based input validation", "Custom equations solver", "Keyboard event handling"],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-media-coverage-website-research.png" alt="Game Logic" />,
    },
    {
      id: 2,
      title: "Optimization",
      subtitle: "Performance & State",
      description: "Optimized re-renders to ensure smooth animations on mobile devices even during complex state updates.",
      details: ["React.memo for grid cells", "CSS transform animations", "Local storage persistence"],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-media-coverage-website-research.png" alt="Optimization" />,
    },
  ],
  review: {
    quote: "It's addictive! The math twist makes it so much more challenging than word games.",
    name: "JOEL.",
    title: "CEO Korsaq",
    img: numbleHero,
  },
}

export const slippyClone: ProjectData = {
  projectImage: slippyHero,
  hero: {
    title: "Slippy Clone: Pixel-Perfect UI Recreation",
    client: "Personal Project",
    year: "2025",
    description:
      "A frontend engineering challenge to recreate the complex, fluid interactions of the 'Slippy' interface. This project demonstrates high-fidelity attention to detail, advanced CSS animations, and faithful component composition.",
    categories: ["UI Clone", "Frontend", "CSS Animations", "React"],
    link: "https://slippy1.netlify.app",
    githubLink: "https://github.com/HarshPariya/Slippy-Clone",
  },
  slug: "slippy-clone",
  beforeAfter: {
    heroBefore: slippyHero,
    heroBeforeMobile: slippyHero,
    beforeAltText: "Slippy Original",
    beforeMobileAltText: "Slippy Mobile",
    afterAltText: "Slippy Clone",
  },
  results: [
    {
      title: "Visual Accuracy",
      description: "Match to original design",
      percentageIncrease: 99,
      chart: <RadialProgressRing percentage={99} />,
      dataSource: "Pixel Matching",
    },
  ],
  phases: [
    {
      id: 1,
      title: "Component Analysis",
      subtitle: "Atomic Design Breakdown",
      description: "Deconstructed the original interface into reusable atomic components to manage complexity.",
      details: ["Atomic design methodology", "Shared state management", "Reusable UI primitives"],
      icon: "/assets/search-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-job-application-portal-web-design.png" alt="Component Analysis" />,
    },
    {
      id: 2,
      title: "Animations",
      subtitle: "Fluid Micro-Interactions",
      description: "Replicated the subtle bounce, hover, and transition effects that give the original app its premium feel.",
      details: ["Framer Motion integration", "CSS keyframes", "Gesture handling"],
      icon: "/assets/assets-black-camera.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-job-application-portal-web-design.png" alt="Animation Details" />,
    },
  ],
}

export const dayflow: ProjectData = {
  projectImage: hrmsHero,
  hero: {
    title: "HRMS: Human Resource Management System",
    client: "Dayflow",
    year: "2025",
    description:
      "A comprehensive HRMS dashboard for managing employee records, attendance, and payroll. Features a modern, intuitive UI built with React and a robust backend integration.",
    categories: ["React", "Dashboard", "Management System", "Enterprise"],
    link: "https://dayflow-final.netlify.app/",
    githubLink: "https://github.com/HarshPariya/HRMS",
  },
  slug: "hrms",
  beforeAfter: {
    heroBefore: hrmsHero,
    heroBeforeMobile: hrmsHero,
    beforeAltText: "HRMS Dashboard",
    beforeMobileAltText: "HRMS Mobile",
    afterAltText: "HRMS Overview",
  },
  results: [
    {
      title: "Efficiency",
      description: "Increase in HR tasks speed",
      percentageIncrease: 200,
      chart: <TrafficBarChart startValue={20} endValue={80} />,
      dataSource: "Internal Testing",
    },
  ],
  phases: [
    {
      id: 1,
      title: "Dashboard Design",
      subtitle: "Overview at a Glance",
      description: "Designed a centralized dashboard that provides key metrics and alerts for HR managers instantly.",
      details: ["Employee status tracking", "Attendance graphs", "Pending requests notifications"],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-website-tool.png" alt="Dashboard Design" />,
    },
    {
      id: 2,
      title: "Employee Management",
      subtitle: "CRUD Operations",
      description: "Implemented full CRUD capabilities for employee records, ensuring data integrity and easy updates.",
      details: ["Add/Edit/Remove employees", "Role assignment", "Department tagging"],
      icon: "/assets/tool-black.webp",
      feature: (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/QTGuS0R7qug?si=1fAai16Wi1Jv7ofL"
            title="HRMS Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        </div>
      ),
    },
  ],
}

// --- PERSONAL PROJECTS SHOWN IN GRID / STATIC CARDS ---

export const squidai: ProjectData = {
  projectImage: apiHubHero,
  hero: {
    title: "SquidAI - AI Technical Assistant",
    client: "Personal Project",
    year: "2026",
    description:
      "SquidAI is an AI-powered technical assistant that helps developers generate, explain, and refactor code faster. It focuses on practical use-cases like debugging help and boilerplate generation.",
    categories: ["AI", "Full Stack", "React", "Node"],
    link: "https://squidai.onrender.com/",
    githubLink: "https://github.com/HarshPariya/SquidAI",
  },
  slug: "squidai",
  beforeAfter: {
    heroBefore: apiHubHero,
    heroBeforeMobile: apiHubHero,
    beforeAltText: "SquidAI Desktop",
    beforeMobileAltText: "SquidAI Mobile",
    afterAltText: "SquidAI Interface",
  },
  results: [],
  phases: [],
}

export const campusNavigation: ProjectData = {
  projectImage: numbleHero,
  hero: {
    title: "Campus Navigation System",
    client: "Personal Project",
    year: "2025",
    description:
      "An interactive campus navigation system that lets students and visitors find buildings, routes, and key locations on campus using an intuitive web interface.",
    categories: ["React", "Maps", "Frontend", "Typescript", "Backend", "Tailwind CSS"],
    link: "https://campus-navigation-sigma.vercel.app/",
    githubLink: "https://github.com/HarshPariya/Campus_Navigation_Frontend",
  },
  slug: "campus-navigation",
  beforeAfter: {
    heroBefore: numbleHero,
    heroBeforeMobile: numbleHero,
    beforeAltText: "Campus Navigation System Desktop",
    beforeMobileAltText: "Campus Navigation System Mobile",
    afterAltText: "Campus Navigation System Interface",
  },
  results: [],
  phases: [],
}

export const travelgoSite: ProjectData = {
  projectImage: slippyHero,
  hero: {
    title: "TravelGo - Travel Agency Website",
    client: "Personal Project",
    year: "2025",
    description:
      "TravelGo is a responsive travel agency website that showcases destinations, packages, and CTAs with a focus on clean layout and conversion-friendly UI.",
    categories: ["React", "Landing Page", "Frontend", "Tailwind CSS"],
    link: "https://travelgo-by-hp01.netlify.app/",
    githubLink: "https://github.com/HarshPariya/Travel-GO-Frontend",
  },
  slug: "travelgo",
  beforeAfter: {
    heroBefore: slippyHero,
    heroBeforeMobile: slippyHero,
    beforeAltText: "TravelGo Desktop",
    beforeMobileAltText: "TravelGo Mobile",
    afterAltText: "TravelGo Homepage",
  },
  results: [],
  phases: [],
}

export const quizApp: ProjectData = {
  projectImage: hrmsHero,
  hero: {
    title: "Quiz App - Interactive Quiz Application",
    client: "Personal Project",
    year: "2024",
    description:
      "A quiz application that lets users answer multiple choice questions with instant feedback, score tracking, and a clean mobile-first UI.",
    categories: ["React", "JavaScript", "Frontend"],
    link: "https://quiz-app-by-harsh.netlify.app/",
    githubLink: "https://github.com/HarshPariya/Quiz-App-Frontend",
  },
  slug: "quiz-app",
  beforeAfter: {
    heroBefore: hrmsHero,
    heroBeforeMobile: hrmsHero,
    beforeAltText: "Quiz App Desktop",
    beforeMobileAltText: "Quiz App Mobile",
    afterAltText: "Quiz App Question Screen",
  },
  results: [],
  phases: [],
}

export const portfolioNextJs: ProjectData = {
  projectImage: portfolioNextJsHero,
  hero: {
    title: "Portfolio Website - Next.js",
    client: "Personal Project",
    year: "2025",
    description:
      "A modern, responsive portfolio website built with Next.js featuring a stunning dark-space themed design, animated hero section, interactive project showcases, and seamless navigation. Demonstrates full-stack frontend skills with React, Next.js, and polished UI/UX.",
    categories: ["Next.js", "React", "Portfolio", "Frontend", "CSS"],
    link: "https://portfolio-by-harshp.netlify.app/",
    githubLink: "https://github.com/HarshPariya/Portfolio_NextJs.git",
  },
  slug: "portfolio-nextjs",
  beforeAfter: {
    heroBefore: portfolioNextJsHero,
    heroBeforeMobile: portfolioNextJsHero,
    beforeAltText: "Portfolio Next.js Desktop",
    beforeMobileAltText: "Portfolio Next.js Mobile",
    afterAltText: "Portfolio Next.js Interface",
  },
  results: [],
  phases: [],
}

export const harshPortfolioV2: ProjectData = {
  projectImage: folioHarshDevHero,
  hero: {
    title: "Folio Harsh Dev — Portfolio v2",
    client: "Personal Project",
    year: "2026",
    description:
      "A premium, fully custom developer portfolio built with Next.js 16, TypeScript, and Framer Motion. Designed from scratch with a refined beige/dark aesthetic, scroll-triggered animations, a dynamic project showcase, GitHub & LeetCode stats integration, an experience timeline, tech marquee, and a fully responsive layout. Deployed on Vercel with blazing-fast performance.",
    categories: ["Next.js", "TypeScript", "Framer Motion", "Vercel", "Full Stack"],
    link: "https://folioharshdev.vercel.app/",
    githubLink: "https://github.com/HarshPariya/harsh-portfolio.git",
  },
  slug: "harsh-portfolio-v2",
  beforeAfter: {
    heroBefore: folioHarshDevHero,
    heroBeforeMobile: folioHarshDevHero,
    iframe: "https://folioharshdev.vercel.app/",
    beforeAltText: "Folio Harsh Dev Portfolio v2 Desktop",
    beforeMobileAltText: "Folio Harsh Dev Portfolio v2 Mobile",
    afterAltText: "Folio Harsh Dev Portfolio v2 Live",
  },
  results: [
    {
      title: "Performance Score",
      description: "Lighthouse performance score on Vercel",
      percentageIncrease: 98,
      chart: <RadialProgressRing percentage={98} />,
      dataSource: "Lighthouse Audit",
    },
    {
      title: "Sections Built",
      description: "Custom interactive sections",
      percentageIncrease: 10,
      chart: <TrafficBarChart startValue={0} endValue={10} />,
      dataSource: "Portfolio Architecture",
    },
  ],
  phases: [
    {
      id: 1,
      title: "Design System",
      subtitle: "Premium Beige & Dark Aesthetic",
      description:
        "Built a cohesive design system using CSS variables, Google Fonts (DM Serif Display + Inter), and a curated warm beige/dark palette. Every token was hand-crafted for a premium look and feel.",
      details: [
        "Custom CSS design tokens (colors, spacing, radii)",
        "Typography pairing: DM Serif Display + Inter",
        "Glassmorphism and subtle gradient accents",
        "Consistent micro-animation language across sections",
      ],
      feature: <ApproachTabsImage src="/assets/FolioHarshDev.png" alt="Design System" />,
    },
    {
      id: 2,
      title: "Animations",
      subtitle: "Scroll-Triggered & Micro-Interactions",
      description:
        "Implemented Framer Motion scroll-triggered reveals, staggered list animations, and fluid page transitions to create a dynamic, alive experience without sacrificing performance.",
      details: [
        "Framer Motion scroll-triggered entry animations",
        "Staggered text and card reveal sequences",
        "Smooth hover effects on all interactive elements",
        "Splash cursor and marquee animations",
      ],
      feature: <ApproachTabsImage src="/assets/FolioHarshDev.png" alt="Animations" />,
    },
    {
      id: 3,
      title: "Sections & Content",
      subtitle: "10 Custom Interactive Sections",
      description:
        "Designed and built 10 distinct sections — Hero, About, Experience Timeline, Projects Showcase, Tech Marquee, Coding Profiles (GitHub + LeetCode), Services, Process, Stats, and Footer — each with unique layouts.",
      details: [
        "Dynamic GitHub & LeetCode stats integration",
        "Experience timeline with animated markers",
        "Tech stack marquee with live icons",
        "Process workflow visualization",
      ],
      feature: <ApproachTabsImage src="/assets/FolioHarshDev.png" alt="Sections Overview" />,
    },
    {
      id: 4,
      title: "Performance & SEO",
      subtitle: "Vercel Deployment & Optimization",
      description:
        "Achieved near-perfect Lighthouse scores through image optimization, lazy loading, Next.js server components, and proper meta tags for every route.",
      details: [
        "Next.js server components for zero client JS overhead",
        "next/image for automatic WebP optimization",
        "Structured metadata and Open Graph tags",
        "Deployed on Vercel with edge CDN",
      ],
      feature: <ApproachTabsImage src="/assets/FolioHarshDev.png" alt="Performance Metrics" />,
    },
  ],
}
