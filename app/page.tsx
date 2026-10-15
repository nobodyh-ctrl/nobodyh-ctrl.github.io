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
import { projects } from "@/lib/projects"
import { site } from "@/lib/site"

const education = [
  {
    period: "2024 — Actualidad",
    degree: "Tecnicatura Universitaria en Programación",
    institution: "Universidad Tecnológica Nacional",
    logo: "/images/utn-logo.png",
    detail: "Algoritmos, estructuras de datos, arquitectura de computadoras, sistemas operativos, C, C++, C#, programación web, bases de datos, metodologías de sistemas, Scrum y análisis de datos.",
  },
  {
    period: "Desde 2027",
    degree: "Licenciatura en Ciberseguridad",
    institution: "Universidad Nacional de Hurlingham (UNAHUR)",
    logo: "/images/unahur-logo.png",
    upcoming: true,
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
              <div className="relative mb-6 flex items-center gap-3"><Code2 className="h-5 w-5 text-white/60" /><h2 className="text-2xl font-bold">Stack Operativo</h2></div>
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
                <div className="space-y-6">
                  {education.map((item) => (
                    <article key={item.degree} className="flex gap-4">
                      {/* Light plate: both logos are dark-on-transparent and vanish on the dark theme */}
                      <div className="relative h-16 w-16 shrink-0 rounded-2xl bg-white/90 shadow-[0_8px_24px_-12px_rgba(255,255,255,0.35)]">
                        <Image src={item.logo} alt={item.institution} fill sizes="64px" className="object-contain p-2.5" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm text-white/45">{item.period}</p>
                          {item.upcoming && (
                            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-2 py-0.5 text-xs text-cyan-300">Próximamente</span>
                          )}
                        </div>
                        <p className="mt-1 font-semibold">{item.degree}</p>
                        <p className="text-white/60">{item.institution}</p>
                        {item.detail && <p className="mt-2 text-sm text-white/45">{item.detail}</p>}
                      </div>
                    </article>
                  ))}
                </div>
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
