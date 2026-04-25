import Image from "next/image"
import { Link } from "../../utils/Link"
import { MobileMenuButton } from "./MobileMenuButton"
import { MobileMenu } from "./MobileMenu"
import { SITE_SLUGS } from "@/config/siteConfig"

const navItems = [
  { name: "Projects", href: SITE_SLUGS.projects },
  { name: "Profiles", href: SITE_SLUGS.projectLinks.codingProfiles },
  { name: "About", href: SITE_SLUGS.about },
]

export const TopBarV2: React.FC = () => {
  return (
    <nav className="font-switzer fixed top-1 left-1/2 z-50 flex w-fit -translate-x-1/2 justify-center text-base text-stone-800 sm:top-2.5 md:top-5 md:text-sm">
      {/* Wrapper that grows/shrinks on mobile */}
      <div className="overflow-hidden rounded-3xl border border-[var(--beige-200)] bg-white/85 shadow-md backdrop-blur-xl">
        <div className="relative flex flex-col">
          {/* Top Row (always visible) */}
          <div className="flex items-center gap-4 px-4 py-3 md:gap-8 md:py-2.5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-medium text-nowrap text-stone-800">
              <Image
                src="/pie-chart.png"
                alt="Harsh Pariya logo"
                width={24}
                height={24}
                className="rounded shadow-md"
              />
              Harsh Pariya
            </Link>

            {/* Desktop Navigation */}
            <ul className="md:scrolled-up:opacity-0 md:scrolled-up:max-w-0 md:scrolled-down:opacity-100 md:scrolled-down:max-w-96 hidden items-center gap-4 font-medium transition-all duration-300 ease-in-out md:flex">
              {navItems.map((item) => (
                <li key={item.name} className="flex">
                  <Link href={item.href} className="bubble-hover p-1 px-2 text-stone-700">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="flex gap-2">
                <Link
                  href="/resume.pdf"
                  download
                  className="bubble-hover hidden rounded-full border border-[var(--beige-400)]/60 bg-gradient-to-br from-[var(--beige-400)] to-[var(--beige-500)] px-3 py-1 font-semibold text-white shadow-md duration-300 hover:translate-y-0.5 hover:shadow-[var(--beige-300)]/40 md:inline-block"
                >
                  Resume
                </Link>
                <Link
                  href="/#contact"
                  className="bubble-hover hidden rounded-full border border-[var(--beige-300)]/40 px-3 py-1 font-medium text-stone-700 shadow-md duration-300 hover:translate-y-0.5 hover:border-[var(--beige-400)]/60 hover:shadow-none md:inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile Dots Menu */}
            <MobileMenuButton />
          </div>

          {/* Mobile Menu (renders always but hidden via overflow on wrapper) */}
          <MobileMenu navItems={navItems} />
        </div>
      </div>
    </nav>
  )
}
