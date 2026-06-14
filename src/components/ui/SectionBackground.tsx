import React from "react"
import { cn } from "@/lib/utils"

export function SectionBackground({
  children,
  className,
  pattern = "dots"
}: {
  children?: React.ReactNode
  className?: string
  pattern?: "dots" | "grid" | "lines" | "none"
}) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Base Dark/Light bg is handled by parent, this adds patterns */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {pattern === "dots" && (
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}></div>
        )}
        {pattern === "grid" && (
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}></div>
        )}
      </div>
      
      {/* Animated glow orbs */}
      <div className="absolute top-0 left-[20%] w-[30vw] h-[30vw] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-[10%] w-[25vw] h-[25vw] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen pointer-events-none z-0" style={{animationDelay: '-4s'}}></div>
      
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  )
}
