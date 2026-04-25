export const WhiteButtonLink: React.FC<{ children: React.ReactNode; href: string; className?: string; download?: boolean }> = ({
  children,
  href,
  className,
  download,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      download={download}
      className={
        "bubble-hover flex w-fit items-center gap-1 rounded-full border border-[var(--beige-300)]/50 bg-white/80 px-4 py-3 text-sm font-medium whitespace-nowrap text-stone-700 shadow-sm transition-all duration-300 hover:translate-y-0.5 hover:bg-[var(--beige-100)] hover:shadow-none " +
        className
      }
    >
      {children}
    </a>
  )
}
