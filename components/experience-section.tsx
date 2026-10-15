"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { animate, stagger } from "motion"
import {
  Bot, BriefcaseBusiness, Code2, Container, Database, FlaskConical, MessageCircle, Rocket, ServerCog, Sparkles, Wrench,
  type LucideIcon,
} from "lucide-react"

import RevealOnView from "@/components/reveal-on-view"
import { cn } from "@/lib/utils"

type Job = {
  company: string
  role: string
  period: string
  current?: boolean
  color: string
  image: string
  summary: string
  highlights: { icon: LucideIcon; title: string; text: string }[]
  stack: string[]
}

const jobs: Job[] = [
  {
    company: "GSAM TECH",
    role: ".NET Developer",
    period: "Feb 2026 — Actualidad",
    current: true,
    color: "#a78bfa",
    image: "/images/project-3.webp",
    summary: "Aplicaciones web y APIs en .NET, desde el análisis funcional y la revisión de código hasta la puesta en producción en servidores de clientes.",
    highlights: [
      { icon: ServerCog, title: "APIs en .NET", text: "ASP.NET y Entity Framework sobre MySQL." },
      { icon: Container, title: "Docker + Dokploy", text: "Contenedores y despliegues en servidores de clientes." },
      { icon: Database, title: "Migraciones y jobs", text: "FluentMigrator para el esquema y Coravel en segundo plano." },
      { icon: Sparkles, title: "IA en el flujo", text: "Engram y OpenCode, con evaluación de modelos." },
    ],
    stack: ["ASP.NET", "C#", "Entity Framework", "MySQL", "Docker", "Dokploy"],
  },
  {
    company: "Impulse Agency",
    role: "Desarrollador Principal",
    period: "Ago 2025 — Feb 2026",
    color: "#60a5fa",
    image: "/images/project-1.webp",
    summary: "Responsable técnico de soluciones a medida para clientes de comercio y retail, desde el relevamiento hasta el despliegue.",
    highlights: [
      { icon: Code2, title: "Web a medida", text: "TypeScript, Next.js y Node.js." },
      { icon: Rocket, title: "v0 + Vercel", text: "Prototipado rápido y despliegue continuo." },
      { icon: MessageCircle, title: "WhatsApp + n8n", text: "Automatizaciones con la API de Meta y Chatwoot." },
      { icon: Bot, title: "Agentes de IA", text: "Benchmarks de GPT, Gemini y Llama con LM Studio." },
    ],
    stack: ["TypeScript", "Next.js", "Node.js", "n8n", "Oracle DB", "Supabase"],
  },
  {
    company: "Itris Software",
    role: "Desarrollador",
    period: "Dic 2024 — Ago 2025",
    color: "#22d3ee",
    image: "/images/project-2.webp",
    summary: "Mantenimiento y evolución del ERP de la empresa: nuevos requerimientos de clientes, integraciones y bases de datos.",
    highlights: [
      { icon: Bot, title: "Agente para el ERP", text: "Carga de tareas en lenguaje natural con n8n y una API propia." },
      { icon: Database, title: "SQL Server", text: "Consultas y gestión de bases de datos." },
      { icon: Wrench, title: "Delphi / Pascal", text: "Mantenimiento y nuevos requerimientos." },
      { icon: FlaskConical, title: "Testing de APIs", text: "Validación de servicios con Postman." },
    ],
    stack: ["SQL Server", "Delphi", "n8n", "Postman", "ERP"],
  },
]

export default function ExperienceSection() {
  const [active, setActive] = useState(0)
  const panelRef = useRef<HTMLDivElement | null>(null)
  const firstRender = useRef(true)
  const job = jobs[active]

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    const panel = panelRef.current
    if (!panel) return
    const ease = [0.22, 1, 0.36, 1] as const
    animate(panel, { opacity: [0, 1], transform: ["translateY(10px)", "translateY(0)"], filter: ["blur(6px)", "blur(0px)"] }, { duration: 0.5, ease })
    animate(panel.querySelectorAll("[data-highlight]"), { opacity: [0, 1], transform: ["translateY(12px)", "translateY(0)"] }, { duration: 0.5, delay: stagger(0.06, { startDelay: 0.08 }), ease })
  }, [active])

  return (
    <RevealOnView className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8" id="experiencia">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {jobs.map((j, i) => (
          <Image
            key={j.company}
            src={j.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            className={cn("object-cover transition-opacity duration-700", i === active ? "opacity-40" : "opacity-0")}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/30 via-neutral-950/75 to-neutral-950/90" />
      </div>
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full blur-3xl transition-colors duration-700"
        style={{ backgroundColor: `${job.color}26` }}
        aria-hidden="true"
      />

      <div className="relative mb-6 flex items-center gap-3"><BriefcaseBusiness className="h-5 w-5 text-white/60" /><h2 className="text-2xl font-bold">Trayectoria Laboral</h2></div>

      <div role="tablist" aria-label="Experiencia laboral" className="relative grid gap-2 sm:grid-cols-3">
        {jobs.map((j, i) => {
          const selected = i === active
          return (
            <button
              key={j.company}
              role="tab"
              id={`job-tab-${i}`}
              aria-selected={selected}
              aria-controls="job-panel"
              onClick={() => setActive(i)}
              className={cn(
                "group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300",
                selected ? "bg-white/[0.04]" : "border-white/10 hover:border-white/25 hover:bg-white/[0.03]",
              )}
              style={selected ? { borderColor: `${j.color}66`, boxShadow: `0 0 0 1px ${j.color}22, 0 12px 40px -12px ${j.color}55` } : undefined}
            >
              <span
                className={cn("absolute inset-x-0 top-0 h-0.5 origin-left transition-transform duration-500", selected ? "scale-x-100" : "scale-x-0")}
                style={{ backgroundImage: `linear-gradient(90deg, ${j.color}, transparent)` }}
                aria-hidden="true"
              />
              <span className="flex items-center gap-2 text-xs text-white/45">
                <span className="h-2 w-2 rounded-full transition-opacity" style={{ backgroundColor: j.color, opacity: selected ? 1 : 0.5 }} aria-hidden="true" />
                {j.period}
              </span>
              <span className={cn("mt-2 block font-semibold transition-colors", selected ? "text-white" : "text-white/70 group-hover:text-white")}>{j.company}</span>
              <span className="block text-sm text-white/50">{j.role}</span>
            </button>
          )
        })}
      </div>

      <div ref={panelRef} id="job-panel" role="tabpanel" aria-labelledby={`job-tab-${active}`} className="relative mt-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="text-xl font-semibold sm:text-2xl">
            {job.role} <span style={{ color: job.color }}>@ {job.company}</span>
          </h3>
          {job.current && (
            <span className="inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 text-xs" style={{ borderColor: `${job.color}55`, color: job.color, backgroundColor: `${job.color}14` }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full" style={{ backgroundColor: job.color }} />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ backgroundColor: job.color }} />
              </span>
              Actual
            </span>
          )}
        </div>
        <p className="mt-2 max-w-[65ch] text-white/65">{job.summary}</p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {job.highlights.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              data-highlight
              className="flex gap-3 rounded-2xl border p-4 transition-colors hover:bg-white/[0.03]"
              style={{ borderColor: `${job.color}22`, backgroundColor: `${job.color}08` }}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${job.color}1f`, color: job.color }}>
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="font-medium">{title}</p>
                <p className="text-sm text-white/55">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {job.stack.map((tech) => (
            <span key={tech} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-1 w-1 rounded-full" style={{ backgroundColor: job.color }} aria-hidden="true" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </RevealOnView>
  )
}
