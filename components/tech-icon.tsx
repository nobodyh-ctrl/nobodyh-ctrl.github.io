import type { SimpleIcon } from "simple-icons"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export type Tech = {
  name: string
  /** Brand icon from simple-icons; rendered monochrome via currentColor */
  icon?: SimpleIcon
  /** Fallback for brands simple-icons doesn't ship (AWS, Oracle, SQL Server...) */
  fallback?: LucideIcon
  /** Text monogram when no icon fits, e.g. "C#" */
  monogram?: string
}

export default function TechIcon({ tech, className }: { tech: Tech; className?: string }) {
  if (tech.icon) {
    return (
      <svg role="img" viewBox="0 0 24 24" aria-hidden="true" className={cn("h-4 w-4 fill-current", className)}>
        <path d={tech.icon.path} />
      </svg>
    )
  }
  if (tech.fallback) {
    const Icon = tech.fallback
    return <Icon aria-hidden="true" className={cn("h-4 w-4", className)} />
  }
  return (
    <span aria-hidden="true" className={cn("inline-flex h-4 min-w-4 items-center justify-center font-mono text-[11px] font-bold leading-none", className)}>
      {tech.monogram ?? tech.name.slice(0, 2)}
    </span>
  )
}
