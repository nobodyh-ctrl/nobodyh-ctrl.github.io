"use client"

import Image from "next/image"
import type { CSSProperties } from "react"
import { ArrowRight, ExternalLink, Github, X } from "lucide-react"

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { accentButtonClass, type Project } from "@/lib/projects"

type Props = Pick<Project, "title" | "category" | "summary" | "stack" | "sections" | "imageSrc" | "href" | "demo" | "accent">

export default function ProjectDetails({ title, category, summary, stack, sections, imageSrc, href, demo, accent: color }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className={accentButtonClass}
          style={{ "--c": color } as CSSProperties}
          aria-label={`Explorar proyecto ${title}`}
        >
          Explorar proyecto
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
        </button>
      </SheetTrigger>

      {/* The default close button is hidden in favour of the boxed one below */}
      <SheetContent
        side="right"
        className="w-full gap-0 overflow-hidden border-white/10 bg-neutral-950 p-0 text-white sm:max-w-lg [&>button:last-child]:hidden"
      >
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: `${color}2e` }}
          aria-hidden="true"
        />

        <div className="relative flex-1 overflow-y-auto">
          {/* Banner, fading into the panel */}
          <div className="relative aspect-[2/1] w-full">
            <Image src={imageSrc} alt="" fill sizes="(min-width: 640px) 512px, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950" />
          </div>

          <div className="px-6 pb-6">
            <p className="inline-flex items-center gap-2 font-mono text-xs" style={{ color }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
              {category}
            </p>
            <p className="mt-4 font-mono text-xs text-white/40">./project</p>
            <SheetTitle className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</SheetTitle>
            <SheetDescription className="mt-3 text-base text-white/70">{summary}</SheetDescription>

            <div className="mt-5 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span key={tech} className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-xs text-white/80">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {sections.map((section, i) => (
                <section key={section.title} className="py-5">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-widest" style={{ color }}>
                    {String(i + 1).padStart(2, "0")} / {section.title}
                  </h3>
                  <p className="mt-2 text-white/70">{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex flex-wrap gap-2 border-t border-white/10 bg-neutral-950/90 px-6 py-4 backdrop-blur">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors"
              style={{ borderColor: `${color}66`, backgroundColor: `${color}26` }}
            >
              Abrir proyecto
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10"
            style={demo ? { borderColor: "rgb(255 255 255 / 0.15)" } : { borderColor: `${color}66`, backgroundColor: `${color}26` }}
          >
            <Github className="h-4 w-4" />
            Abrir repositorio
          </a>
        </div>

        <SheetClose
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-black/50 text-white/80 backdrop-blur transition-colors hover:bg-black/70 hover:text-white"
          aria-label="Cerrar"
        >
          <X className="h-4 w-4" />
        </SheetClose>
      </SheetContent>
    </Sheet>
  )
}
