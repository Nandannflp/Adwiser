import React from "react"
import { cn } from "@/lib/utils"

export interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
}

export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    
    const baseClasses = "relative inline-flex items-center justify-center px-8 py-4 font-bold text-lg rounded-xl transition-all duration-300 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background"
    
    const variants = {
      primary: "bg-primary text-primary-foreground hover:scale-105 shadow-[0_0_20px_rgba(123,44,191,0.5)] focus:ring-primary",
      secondary: "bg-blue-600 text-white hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)] focus:ring-blue-500",
      outline: "border-2 border-primary/50 text-foreground hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(123,44,191,0.3)] focus:ring-primary",
      ghost: "text-foreground hover:bg-white/5 focus:ring-white/20"
    }

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variants[variant], className)}
        {...props}
      >
        {/* Glow effect overlay */}
        {(variant === "primary" || variant === "secondary") && (
          <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></span>
        )}
        
        {/* Shine animation */}
        <span className="absolute -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine pointer-events-none"></span>

        <span className="relative z-10">{children}</span>
      </button>
    )
  }
)
GlowButton.displayName = "GlowButton"
