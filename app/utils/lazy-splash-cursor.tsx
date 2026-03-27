"use client"
import dynamic from "next/dynamic"
import { useMediaQuery, useTouch } from "../hooks/useMediaQuery"
import { TiltedWrapperProps } from "../ui/TiltedWrapper"

// hoist this to module scope (not inside the component)
export const SplashCursor = /*#__PURE__*/ dynamic(() => import("../components/SplashCursor").then((m) => m.SplashCursor), {
  ssr: false,
  loading: () => null,
})

export function LazySplashCursor() {
  const hasFinePointer = useMediaQuery("(pointer:fine)")
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)")

  if (!hasFinePointer || reduceMotion) return null

  // Always render the fluid cursor for pointer devices so it follows
  // the cursor across the entire site.
  return (
    <SplashCursor
      DENSITY_DISSIPATION={1.2}
      VELOCITY_DISSIPATION={0.9}
      PRESSURE={0.15}
      PRESSURE_ITERATIONS={30}
      CURL={18}
      SPLAT_RADIUS={0.35}
      SPLAT_FORCE={9000}
      SHADING
      COLOR_UPDATE_SPEED={7}
      BACK_COLOR={{ r: 5, g: 8, b: 20 }}
      TRANSPARENT
    />
  )
}

export const TiltedWrapper = /*#__PURE__*/ dynamic(() => import("../ui/TiltedWrapper").then((m) => m.TiltedWrapper), {
  ssr: false,
  loading: () => null,
})

export function LazyTiltedWrapper({ children, ...props }: TiltedWrapperProps) {
  const isTouch = useTouch()
  return isTouch ? (
    <div className="h-full w-full transform-gpu rounded-xl [box-shadow:var(--button-shadow)]">{children}</div>
  ) : (
    <TiltedWrapper {...props}>{children}</TiltedWrapper>
  )
}
