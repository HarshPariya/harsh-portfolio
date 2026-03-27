import Link from "next/link"
import { TextSlider } from "./TextSlider"
import { Socials } from "../Socials"
import { SITE_NAP, SITE_SLUGS } from "@/config/siteConfig"
import { H2 } from "@/app/ui/Elements"

const words: [string, string, string, string] = ["make", "code", "design", "build"]

export const socialLinks = [
  {
    href: SITE_NAP.profiles.linkedIn,
    icon: "linkedin",
  },
  {
    href: SITE_NAP.profiles.github,
    icon: "github",
  },
  {
    href: SITE_NAP.profiles.instagram,
    icon: "instagram",
  },
  {
    href: SITE_NAP.profiles.x,
    icon: "x",
  },
]

export const FooterV2: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-900/80">
      <div className="xs:pb-32 mx-auto flex w-full max-w-6xl flex-col gap-12 px-5.5 pt-12 pb-24 text-slate-50 sm:pb-40 md:gap-16 md:px-11 md:pt-16 lg:pb-54">
        <div className="flex flex-col gap-8 md:gap-12">
          <H2 className="text-5xl leading-12 text-slate-50 md:text-6xl md:leading-14">
            Let’s&nbsp;
            <TextSlider words={words} height={50} mobileHeight={41} />
            <br />
            <span className="text-slate-400">Let’s make great ideas real.</span>
          </H2>
          <ul className="flex flex-col justify-between gap-5.5 border-b border-slate-700 pb-6 text-sm md:flex-row md:items-center md:gap-8">
            <li className="flex flex-col gap-1 md:gap-2">
              <span className="text-slate-400">Email</span>
              <Link
                href={`mailto:${SITE_NAP.email}`}
                className="w-fit text-sm text-slate-100 transition-colors duration-200 hover:text-slate-300"
              >
                {SITE_NAP.email}
              </Link>
            </li>
            {/* <li className="flex flex-col gap-1 md:gap-2">
              <span className="text-gray-500">Call or Text</span>
              <Link href={`tel:${SITE_NAP.phone}`} className="w-fit text-sm transition-colors duration-200 hover:text-gray-300">
                {SITE_NAP.formattedPhone}
              </Link>
            </li> */}
            <li className="flex flex-col gap-2">
              <span className="text-slate-400">Socials</span>
              <Socials socialLinks={socialLinks} />
            </li>
          </ul>

          <div className="footer-links flex gap-4">
            <Link
              href={SITE_SLUGS.home}
              className="text-sm text-slate-200 transition-colors duration-200 hover:text-slate-50"
            >
              Home
            </Link>
            <Link
              href={SITE_SLUGS.projects}
              className="text-sm text-slate-200 transition-colors duration-200 hover:text-slate-50"
            >
              Projects
            </Link>
            <Link
              href={SITE_SLUGS.about}
              className="text-sm text-slate-200 transition-colors duration-200 hover:text-slate-50"
            >
              About
            </Link>
            <Link
              href={SITE_SLUGS.contact}
              className="text-sm text-slate-200 transition-colors duration-200 hover:text-slate-50"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between gap-2 text-xs text-nowrap text-slate-400 md:flex-row">
          <div className="flex items-center gap-5.5 max-sm:flex-wrap">
            <h3>
              <span className="text-slate-500">Based in </span> India
            </h3>
            <div className="flex gap-4">
              {/* <Link href="/terms-of-service" className="text-sm transition-colors duration-200 hover:text-gray-300">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="text-sm transition-colors duration-200 hover:text-gray-300">
                Privacy Policy
              </Link> */}
            </div>
          </div>
          <span className="text-slate-500">© 2026 Harsh Pariya</span>
        </div>
        <h2 className="large-brand-text absolute -bottom-16 left-0 flex w-full items-center justify-center font-medium whitespace-nowrap text-white/5 md:text-[180px] lg:text-[240px]">
          Harsh Pariya
        </h2>
      </div>
    </footer>
  )
}
