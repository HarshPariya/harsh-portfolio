"use client"
import clsx from "clsx"
import { Link } from "../../utils/Link"
import { useUI } from "@react-zero-ui/core"
import { SITE_SLUGS } from "@/config/siteConfig"

export const MobileMenu: React.FC<{ navItems: { name: string; href: string }[] }> = ({ navItems }) => {
  const [, setMobileMenu] = useUI<"open" | "closed">("mobile-menu", "closed")

  return (
    <ul className={clsx("mobile-menu-container flex flex-col gap-3 rounded-b-lg border-[var(--beige-200)] px-4 transition-all duration-300 ease-in-out md:hidden")}>
      {navItems.map((item, index) => (
        <li
          key={item.name}
          className="mobile-menu-item transform text-lg transition-all duration-300 ease-in-out"
          style={{ "--index": index } as React.CSSProperties}
        >
          <Link href={item.href} onClick={() => setMobileMenu("closed")} className="block pt-4 font-medium text-stone-700">
            {item.name}
          </Link>
        </li>
      ))}
      <li className={clsx("mobile-menu-item transform pt-3 transition-all duration-300 ease-in-out")}>
        <Link
          href="/resume.pdf"
          download
          onClick={() => setMobileMenu("closed")}
          className="bubble-hover block rounded-full border border-[var(--beige-300)] bg-gradient-to-br from-[var(--beige-400)] to-[var(--beige-500)] px-3 py-2 text-center font-semibold text-white shadow-lg duration-300 hover:shadow-[var(--beige-200)]/50"
        >
          Resume
        </Link>
      </li>
      <li className={clsx("mobile-menu-item transform pt-3 transition-all duration-300 ease-in-out")}>
        <Link
          href={SITE_SLUGS.contact}
          onClick={() => setMobileMenu("closed")}
          className="bubble-hover block rounded-full border border-[var(--beige-200)] bg-white px-3 py-2 text-center font-medium text-stone-700 shadow-lg duration-300 hover:border-[var(--beige-300)]"
        >
          Contact
        </Link>
      </li>
    </ul>
  )
}
