"use client"

import { MeshGradient } from "@paper-design/shaders-react"

export default function BackgroundShaders() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <MeshGradient
        className="w-full h-full"
        colors={["#0a0a0f", "#7b2cbf", "#3b82f6", "#ec4899"]}
        speed={0.2}
      />
    </div>
  )
}
