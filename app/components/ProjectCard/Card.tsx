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
}: {
  src: StaticImageData
  alt: string
  liveUrl?: string
  githubUrl?: string
  title?: string
  detailUrl?: string
  // Keeping unused optional props for now to avoid breakages in other files not yet updated
  color?: string
  type?: string
  reveal?: boolean
  text?: string
  priority?: boolean
}) => {
  const primaryLink = detailUrl || liveUrl || "#"

  return (
    <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-zinc-900 shadow-xl">
      {/* Background Image with slight scale & dark tint on hover */}
      <div className="h-full w-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:brightness-[0.3]">
        <Image 
          className="h-full w-full object-cover" 
          src={src} 
          alt={alt} 
          priority={priority} 
          decoding="async" 
        />
      </div>

      {/* Overlay - Fades in softly on hover */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        
        {/* Top Header */}
        <div className="flex w-full justify-between items-start">
          <div className="flex flex-col transform -translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
             {title && (
               <h3 className="text-2xl font-bold tracking-tight text-white drop-shadow-lg">
                 {title}
               </h3>
             )}
          </div>
          
          {/* GitHub Icon */}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black transform -translate-y-4 group-hover:translate-y-0"
              title="View on GitHub"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>

        {/* Bottom Actions */}
        <div className="flex w-full items-center justify-between transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
          {detailUrl && (
            <a
              href={detailUrl}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              Read Case Study
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover/btn:duration-1000 group-hover/btn:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20" />
              </div>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Live App
            </a>
          )}
        </div>

      </div>
    </div>
  )
}
