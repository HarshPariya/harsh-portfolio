"use client"
import Image, { StaticImageData } from "next/image"

export const Card = ({
  src,
  alt,
  liveUrl,
  githubUrl,
  title,
  detailUrl,
  priority,
  color = "#78716c",
  index = 1,
}: {
  src: StaticImageData
  alt: string
  liveUrl?: string
  githubUrl?: string
  title?: string
  detailUrl?: string
  color?: string
  type?: string
  reveal?: boolean
  text?: string
  priority?: boolean
  index?: number
}) => {
  const num = String(index).padStart(2, "0")

  return (
    <div className="h-full w-full overflow-hidden rounded-2xl group relative bg-stone-100">
      {/* Project image */}
      <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
        <Image
          className="h-full w-full object-cover"
          src={src}
          alt={alt}
          priority={priority}
          decoding="async"
        />
      </div>

      {/* ── Persistent number badge (top-left) ── */}
      <div
        className="absolute top-4 left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold tracking-widest text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: color }}
      >
        {num}
      </div>

      {/* ── Frosted glass panel slides up from bottom on hover ── */}
      <div
        className="absolute inset-x-0 bottom-0 z-20 translate-y-full transition-transform duration-400 ease-out group-hover:translate-y-0"
        style={{ transitionDuration: "380ms" }}
      >
        {/* Coloured accent bar */}
        <div className="h-[3px] w-full" style={{ backgroundColor: color }} />

        {/* Glass body */}
        <div className="flex items-end justify-between gap-3 bg-white/90 px-5 py-4 backdrop-blur-md">
          {/* Title + CTA */}
          <div className="flex flex-col gap-0.5">
            {title && (
              <span className="text-sm font-bold tracking-tight text-stone-900 leading-tight">
                {title}
              </span>
            )}
            {detailUrl && (
              <a
                href={detailUrl}
                className="group/link inline-flex items-center gap-1 text-[11px] font-medium"
                style={{ color }}
                onClick={(e) => e.stopPropagation()}
              >
                View Details
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  className="translate-x-0 transition-transform duration-200 group-hover/link:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex shrink-0 items-center gap-2">
            {/* GitHub */}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 shadow-sm transition-all duration-200 hover:scale-110 hover:border-stone-400 hover:shadow-md"
              >
                <svg className="h-[14px] w-[14px] fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}

            {/* Live */}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex h-8 items-center gap-1.5 rounded-full px-3 text-[11px] font-semibold text-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
                style={{ backgroundColor: color }}
              >
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
