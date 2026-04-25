export const DOMAIN_URL = "https://folioharshdev.vercel.app"

export const SITE_CONFIG = {
  title: "Harsh Pariya | Full-Stack Developer",
  description:
    "Harsh Pariya is a Full-Stack Developer building fast, modern web applications with React, Next.js, and the MERN stack. Explore his portfolio of scalable web applications and software engineering projects.",
  url: DOMAIN_URL,
  siteName: "Harsh Pariya",
  keywords: [
    "Harsh Pariya",
    "Harsh Pariya Portfolio",
    "Harsh Pariya Developer",
    "Full-Stack Developer India",
    "MERN Stack Specialist",
    "Next.js Developer India",
    "React.js Expert",
    "Node.js Backend Developer",
    "MongoDB Portfolio",
    "Software Engineer India",
    "Freelance Web Developer India",
    "Frontend Engineer",
    "Scalable Web Architecture",
    "C++ Programmer",
    "System Design Portfolio",
    "APIHub Project",
    "Numble Game Developer",
    "developer",
    "freelancer",
    "portfolio",
    "Backend Developer",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "MERN Stack Specialist",
    "MongoDB Developer",
    "MongoDB Specialist",
    "Express.js Developer",
    "Express.js Specialist",
    "Node.js Developer",
    "Node.js Specialist",
    "React.js Developer",
    "React.js Specialist",
    "Next.js Developer",
    "Next.js Specialist",
    "Web Developer",
    "Web Designer",
    "Software Engineer",
    "Freelance Web Developer India"
  ],
  ogImage: "/assets/bg-home-poster-optimized.webp",
  ogImageAlt: "Harsh Pariya - Full-Stack Developer Portfolio Hero Image",
  logo: "/hp-logo.png",
  authors: [{ name: "Harsh Pariya", url: DOMAIN_URL }],
  creator: "Harsh Pariya",
  publisher: "Harsh Pariya",
} as const

export const SITE_NAP = {
  name: "Harsh Pariya",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Harsh Pariya",
  contactTitle: "Aspiring Full Stack Developer",
  email: "hpariya195@gmail.com",
  phone: "+919601986209",
  formattedPhone: "",
  addressLink: "", // Removing specific address link
  street: "",
  city: "",
  state: "India", // Location from resume
  zipCode: "",
  openingHours: [{ days: "Mon - Sat", hours: "9am - 6pm" }] as const,
  googleReviewLink: "",
  profiles: {
    linkedIn: "https://www.linkedin.com/in/harsh-pariya/",
    github: "https://github.com/HarshPariya",
    instagram: "https://www.instagram.com/_harshpariya_01",
    x: "https://x.com/harshpariya_01",
    leetcode: "https://leetcode.com/u/harshpariya",
  } as const,
  logo: "/hp-logo.png",
  favicon: "/hp-logo.png",
  images: ["/assets/bg-home-poster-optimized.webp"],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/#contact",
  about: "/#about",
  projectLinks: {
    automedics: "/projects/automedics",
    bespoke: "/projects/bespoke",
    iao: "/projects/iron-and-oak",
    hrms: "/projects/hrms",
    codingProfiles: "/coding-profiles",
  },
} as const

export const externalLinks = {
  vetsChoice: "https://vetschoiceinsurance.com/",
  zeroIconSprite: "https://github.com/react-zero-ui/icon-sprite",
  zeroCore: "https://github.com/react-zero-ui/core",
  entitled: "https://be-entitled.com/",
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
