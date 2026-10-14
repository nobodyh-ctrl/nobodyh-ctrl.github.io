import Image from "next/image"
import { ArrowUp, FileText, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

import SectionBackdrop from "@/components/section-backdrop"
import RevealOnView from "@/components/reveal-on-view"
import { site } from "@/lib/site"

const nav = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Skills", href: "#skills" },
  { label: "Formación", href: "#formacion" },
  { label: "Proyectos", href: "#proyectos" },
]

const linkClass = "inline-flex items-center gap-2 text-white/60 transition hover:text-white"

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-4 pb-4">
      <RevealOnView className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8">
        <SectionBackdrop src="/images/project-3.webp" />
        <div className="relative grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src={site.photo} alt={site.name} width={48} height={48} className="h-12 w-12 rounded-full border border-white/15 object-cover" />
              <div>
                <p className="text-lg font-extrabold tracking-tight">{site.name}</p>
                <p className="text-sm text-white/50">{site.role}</p>
              </div>
            </div>
            <p className="mt-4 max-w-[38ch] text-sm text-white/55">Aplicaciones web, APIs, automatizaciones y herramientas de seguridad cloud. Si tenés un proyecto o una propuesta, escribime.</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              Disponible para nuevos desafíos
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">Navegación</h2>
            <ul className="space-y-2 text-sm">
              {nav.map((item) => <li key={item.href}><a href={item.href} className={linkClass}>{item.label}</a></li>)}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">Contacto</h2>
            <ul className="space-y-2 text-sm">
              <li><a href={`mailto:${site.email}`} className={`${linkClass} break-all`}><Mail className="h-4 w-4 shrink-0" />{site.email}</a></li>
              <li><a href={site.phoneHref} className={linkClass}><Phone className="h-4 w-4 shrink-0" />{site.phone}</a></li>
              <li className="inline-flex items-center gap-2 text-white/60"><MapPin className="h-4 w-4 shrink-0" />{site.location}</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">Perfiles</h2>
            <ul className="space-y-2 text-sm">
              <li><a href={site.github} target="_blank" rel="noreferrer" className={linkClass}><Github className="h-4 w-4" />GitHub</a></li>
              <li><a href={site.linkedin} target="_blank" rel="noreferrer" className={linkClass}><Linkedin className="h-4 w-4" />LinkedIn</a></li>
              <li><a href={site.cv} target="_blank" rel="noreferrer" className={linkClass}><FileText className="h-4 w-4" />CV (PDF)</a></li>
            </ul>
          </div>
        </div>

        <div className="relative mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <p>Hecho con Next.js y Tailwind CSS</p>
            <a href="#top" className="inline-flex items-center gap-1 text-white/60 transition hover:text-white">Volver arriba <ArrowUp className="h-3 w-3" /></a>
          </div>
        </div>
      </RevealOnView>
    </footer>
  )
}
