import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Cloud, Code2, Database, FileText, Github, GraduationCap, Linkedin, Server } from "lucide-react"
import {
  siC, siClaude, siCplusplus, siCss, siDocker, siDotnet, siGit, siGithub, siHtml5, siJavascript, siJira, siLinux,
  siModelcontextprotocol, siMysql, siN8n, siNextdotjs, siNodedotjs, siPostgresql, siPostman, siPython, siSupabase,
  siTypescript, siVercel,
} from "simple-icons"

import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"
import ProjectCard from "@/components/project-card"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"
import ExperienceSection from "@/components/experience-section"
import SectionBackdrop from "@/components/section-backdrop"
import SiteFooter from "@/components/site-footer"
import TechIcon, { type Tech } from "@/components/tech-icon"
import { site } from "@/lib/site"

const projects = [
  {
    title: "OpenAegis",
    category: "Cloud Security",
    description: "Aplicación serverless que evalúa configuraciones de seguridad en AWS y centraliza los hallazgos con controles automatizados de solo lectura.",
    highlights: ["S3, CloudFront, API Gateway y Lambda", "Permisos con IAM y monitoreo en CloudWatch", "Evolución hacia IaC y prácticas DevSecOps"],
    imageSrc: "/images/openaegis.png",
    tags: ["Python", "AWS", "Serverless"],
    href: "https://github.com/nobodyh-ctrl/openaegis",
    gradientFrom: "#1e1b4b",
    gradientTo: "#7c3aed",
    accent: "#a78bfa",
  },
  {
    title: "PortScan",
    category: "Networking",
    description: "Escáner de puertos TCP por línea de comandos que identifica puertos abiertos, cerrados y filtrados en equipos de una red.",
    highlights: ["Rangos de puertos y timeouts configurables", "Reportes automáticos de cada escaneo", "Probado en laboratorio con Ubuntu Server y firewall"],
    imageSrc: "/images/portscan.png",
    tags: ["Python", "Sockets", "CLI"],
    href: "https://github.com/nobodyh-ctrl/portscan",
    gradientFrom: "#022c22",
    gradientTo: "#10b981",
    accent: "#34d399",
  },
]

const skillGroups: { title: string; items: Tech[] }[] = [
  {
    title: "Lenguajes",
    items: [
      { name: "Python", icon: siPython },
      { name: "C", icon: siC },
      { name: "C++", icon: siCplusplus },
      { name: "C#", monogram: "C#" },
      { name: "TypeScript", icon: siTypescript },
      { name: "JavaScript", icon: siJavascript },
      { name: "HTML", icon: siHtml5 },
      { name: "CSS", icon: siCss },
    ],
  },
  {
    title: "Frameworks y runtime",
    items: [
      { name: "Node.js", icon: siNodedotjs },
      { name: "Next.js", icon: siNextdotjs },
      { name: "ASP.NET", icon: siDotnet },
    ],
  },
  {
    title: "Bases de datos",
    items: [
      { name: "MySQL", icon: siMysql },
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "SQL Server", fallback: Database },
      { name: "Oracle DB", fallback: Database },
      { name: "Supabase", icon: siSupabase },
    ],
  },
  {
    title: "Cloud y DevOps",
    items: [
      { name: "AWS", fallback: Cloud },
      { name: "Docker", icon: siDocker },
      { name: "Linux", icon: siLinux },
      { name: "Vercel", icon: siVercel },
      { name: "Dokploy", fallback: Server },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { name: "Git", icon: siGit },
      { name: "GitHub", icon: siGithub },
      { name: "Postman", icon: siPostman },
      { name: "Jira", icon: siJira },
      { name: "n8n", icon: siN8n },
      { name: "Claude Code", icon: siClaude },
      { name: "MCP", icon: siModelcontextprotocol },
    ],
  },
]

export default function Page() {
  return (
    <main id="top" className="bg-neutral-950 text-white">
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
            <RevealOnView as="div" intensity="hero" className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8" staggerChildren>
              <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <Image src="/images/project-1.webp" alt="" fill priority sizes="420px" className="object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/10 via-neutral-950/60 to-neutral-950/90" />
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light"><DotGridShader /></div>
              <div className="relative">
                <div className="mb-8 flex items-center gap-4">
                  <Image src={site.photo} alt={site.name} width={64} height={64} priority className="h-16 w-16 rounded-full border border-white/15 object-cover" />
                  <div>
                    <div className="flex items-center gap-2"><div className="text-2xl font-extrabold tracking-tight">{site.name}</div><div className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" /></div>
                    <p className="text-sm text-white/50">{site.role}</p>
                  </div>
                </div>
                <AnimatedHeading className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl" lines={["Construyo software", "que escala"]} />
                <p className="mt-4 max-w-[42ch] text-lg text-white/70">Desarrollador de software enfocado en crear soluciones web, APIs, automatizaciones y herramientas de seguridad cloud.</p>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-transparent px-3"><a href={site.cv} target="_blank" rel="noreferrer"><FileText className="h-4 w-4" />Ver CV</a></Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-transparent px-3"><a href={site.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4" />GitHub</a></Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-transparent px-3"><a href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" />LinkedIn</a></Button>
                </div>
                <Button asChild size="lg" className="mt-2 w-full rounded-full"><Link href={`mailto:${site.email}`}>Contactarme <ArrowRight className="h-4 w-4" /></Link></Button>
              </div>
              <div className="relative mt-10 space-y-2 text-sm text-white/50"><p>{site.location}</p><p>Disponible para nuevos desafíos</p><p className="font-mono text-xs">{site.phone}</p></div>
            </RevealOnView>
          </aside>

          <div className="space-y-4">
            <ExperienceSection />

            <RevealOnView className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8" id="skills">
              <SectionBackdrop src="/images/project-6.webp" />
              <div className="relative mb-6 flex items-center gap-3"><Code2 className="h-5 w-5 text-white/60" /><h2 className="text-2xl font-bold">Skills técnicas</h2></div>
              <div className="relative space-y-6">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">{group.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((tech) => (
                        <span key={tech.name} className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:border-white/30 hover:text-white">
                          <TechIcon tech={tech} className="text-white/60 transition group-hover:text-white" />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnView>

            <RevealOnView className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8" id="formacion">
              <SectionBackdrop src="/images/project-2.webp" />
              <div className="relative">
                <div className="mb-6 flex items-center gap-3"><GraduationCap className="h-5 w-5 text-white/60" /><h2 className="text-2xl font-bold">Formación</h2></div>
                <p className="text-sm text-white/45">2024 — Actualidad</p><p className="mt-1 font-semibold">Tecnicatura Universitaria en Programación</p><p className="text-white/60">Universidad Tecnológica Nacional</p><p className="mt-2 text-sm text-white/45">Algoritmos, estructuras de datos, arquitectura de computadoras, sistemas operativos, C, C++, C#, programación web, bases de datos, metodologías de sistemas, Scrum y análisis de datos.</p>
              </div>
            </RevealOnView>

            <div className="pt-4" id="proyectos">
              <div className="mb-4 flex items-center justify-between px-1">
                <h2 className="text-2xl font-bold">Proyectos destacados</h2>
                <Button asChild variant="outline" className="rounded-full border-white/20 bg-transparent"><a href={site.github} target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4" />Ver GitHub</a></Button>
              </div>
              <div className="space-y-4">
                {projects.map((project, index) => <ProjectCard key={project.title} {...project} priority={index === 0} revealDelay={index * 0.06} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
