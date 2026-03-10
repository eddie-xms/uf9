import React from "react"
import { cn } from "@/lib/utils"

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
  iconSize?: number
  speed?: number
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full overflow-visible"
        >
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="text-muted-foreground/40"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index
        return (
          <div
            style={
              {
                "--angle": angle,
                "--radius": radius,
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                left: "50%",
                top: "50%",
                marginLeft: `-${iconSize / 2}px`,
                marginTop: `-${iconSize / 2}px`,
                animation: `orbit ${calculatedDuration}s linear infinite${reverse ? " reverse" : ""}`,
              } as React.CSSProperties
            }
            className={cn(
              "absolute flex items-center justify-center rounded-full",
              className
            )}
            {...props}
          >
            {child}
          </div>
        )
      })}
    </>
  )
}
