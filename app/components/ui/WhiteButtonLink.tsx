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
        "bubble-hover flex w-fit items-center gap-1 rounded-full border border-emerald-400/40 bg-slate-900 px-4 py-3 text-sm font-medium whitespace-nowrap text-slate-100 shadow-lg transition-all duration-300 hover:translate-y-0.5 hover:bg-emerald-400/10 hover:shadow-none " +
        className
      }
    >
      {children}
    </a>
  )
}
