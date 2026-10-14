import Image from "next/image"
import { ArrowUpRight, Check, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import BlurBackdrop from "@/components/blur-backdrop"
import RevealOnView from "@/components/reveal-on-view"

type Props = {
  title?: string
  category?: string
  description?: string
  highlights?: string[]
  imageSrc?: string
  tags?: string[]
  href?: string
  priority?: boolean
  gradientFrom?: string
  gradientTo?: string
  /** Accent for label, checks and button; defaults to gradientTo */
  accent?: string
  imageContainerClassName?: string
  containerClassName?: string
  revealDelay?: number
}

// Server Component (no client hooks)
export default function ProjectCard({
  title = "Project title",
  category,
  description,
  highlights = [],
  imageSrc = "/placeholder.svg?height=720&width=1280",
  tags = ["Design", "Web"],
  href = "#",
  priority = false,
  gradientFrom = "#0f172a",
  gradientTo = "#6d28d9",
  accent,
  imageContainerClassName,
  containerClassName,
  revealDelay = 0,
}: Props) {
  const color = accent ?? gradientTo
  const external = href.startsWith("http")

  return (
    <article className={cn("group relative", containerClassName)}>
      <RevealOnView
        delay={revealDelay}
        className="rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)]"
        style={{
          backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        <div className="relative grid overflow-hidden rounded-[1.35rem] bg-neutral-950 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Banner */}
          <div className={cn("relative aspect-[2/1] w-full self-stretch overflow-hidden", imageContainerClassName)}>
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              priority={priority}
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>

          {/* Details: tinted by the banner itself */}
          <div className="relative flex flex-col gap-4 p-5 sm:p-6">
            <BlurBackdrop src={imageSrc} className="opacity-70" />
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-px md:block" style={{ backgroundImage: `linear-gradient(to bottom, transparent, ${color}66, transparent)` }} aria-hidden="true" />

            <div className="relative">
              {category && (
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color }}>{category}</p>
              )}
              <h3 className="mt-1 text-2xl font-bold">{title}</h3>
              {description && <p className="mt-2 text-sm text-white/70">{description}</p>}
            </div>

            {highlights.length > 0 && (
              <ul className="relative space-y-1.5 text-sm text-white/65 md:hidden 2xl:block">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <div className="relative mt-auto flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 bg-black/30 px-2.5 py-0.5 text-xs text-white/75 backdrop-blur-sm">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium text-white transition-colors"
                style={{ borderColor: `${color}66`, backgroundColor: `${color}26` }}
                aria-label={`Ver código de ${title} en GitHub`}
              >
                <Github className="h-4 w-4" />
                Ver código
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </RevealOnView>
    </article>
  )
}
