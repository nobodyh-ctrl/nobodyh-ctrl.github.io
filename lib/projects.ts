export type ProjectSection = { title: string; body: string }

export type Project = {
  title: string
  category: string
  /** One-liner for the card */
  description: string
  highlights: string[]
  tags: string[]
  imageSrc: string
  href: string
  /** Live demo, when the project has one */
  demo?: string
  gradientFrom: string
  gradientTo: string
  accent: string
  /** Detail panel ("Explorar proyecto") */
  summary: string
  stack: string[]
  sections: ProjectSection[]
}

// Content mirrors each repo's README; keep it in sync when the projects evolve.
export const projects: Project[] = [
  {
    title: "OpenAegis",
    category: "Cloud Security",
    description: "Aplicación serverless en AWS para gestionar controles de seguridad cloud, con checks automáticos de solo lectura en camino.",
    highlights: ["S3, CloudFront, API Gateway, Lambda y DynamoDB", "Rol con mínimo privilegio y validación estricta de entrada", "Roadmap hacia checks con boto3 e IaC con AWS CDK"],
    tags: ["Python", "AWS", "Serverless"],
    imageSrc: "/images/openaegis.png",
    href: "https://github.com/nobodyh-ctrl/openaegis",
    gradientFrom: "#1e1b4b",
    gradientTo: "#7c3aed",
    accent: "#a78bfa",
    summary: "Aplicación serverless en AWS para registrar controles de seguridad cloud con su severidad y estado, y evaluarlos más adelante con checks automáticos de solo lectura.",
    stack: ["Python", "Lambda", "API Gateway", "DynamoDB", "S3 + CloudFront", "IAM"],
    sections: [
      {
        title: "Problema",
        body: "Saber si una cuenta de AWS cumple reglas básicas de seguridad, como S3 sin acceso público, CloudTrail activo o MFA en el root, suele depender de revisar la consola a mano, control por control.",
      },
      {
        title: "Arquitectura",
        body: "Frontend estático en un bucket S3 privado servido por CloudFront con OAC. La API es un HTTP API de API Gateway que invoca una Lambda en Python puro, sin frameworks, que guarda los controles en DynamoDB y registra en CloudWatch Logs.",
      },
      {
        title: "Decisiones de seguridad",
        body: "El rol de la Lambda solo opera sobre una tabla y no hay access keys de larga duración. La entrada se valida con allowlist de campos contra mass assignment, CORS está restringido al frontend y el throttling pone un techo de costo mientras la API no tiene autenticación.",
      },
      {
        title: "Estado",
        body: "V1 en desarrollo: el CRUD de controles funciona. Siguen la revisión de IAM, la autenticación con Cognito, los checks con boto3 y la infraestructura como código con AWS CDK.",
      },
    ],
  },
  {
    title: "tenet",
    category: "AI Engineering",
    description: "Plugin para Claude Code que aplica un método de ingeniería en cualquier repo: workflows, agentes de mínimo privilegio, un guard de seguridad y memoria persistente.",
    highlights: ["Spec-driven development con OpenSpec", "Hook que bloquea comandos destructivos y pide permiso antes de push o deploy", "Instaladores para Windows y Linux con dry-run y backups"],
    tags: ["Claude Code", "Python", "OpenSpec"],
    imageSrc: "/images/tenet.png",
    href: "https://github.com/nobodyh-ctrl/tenet-plugin",
    gradientFrom: "#431407",
    gradientTo: "#ea580c",
    accent: "#ff7a1a",
    summary: "Plugin para Claude Code que define cómo trabaja el agente en cualquier repositorio, sin decidir qué es el producto: cada proyecto conserva sus requisitos, su stack y sus decisiones.",
    stack: ["Claude Code", "Python", "Bash", "PowerShell", "OpenSpec", "Engram"],
    sections: [
      {
        title: "Problema",
        body: "Un agente de código sin reglas puede saltarse los tests, inventar requisitos o ejecutar comandos riesgosos, y cada sesión empieza sin recordar las decisiones anteriores.",
      },
      {
        title: "Arquitectura",
        body: "Se distribuye como plugin: skills para cada workflow (feature, bugfix, release y aprendizaje), seis agentes con las herramientas mínimas que necesitan, reglas de metodología que se cargan en cada sesión y un Engineering Manual que se consulta bajo demanda. La memoria entre sesiones se apoya en Engram.",
      },
      {
        title: "Decisiones de seguridad",
        body: "Un hook revisa cada comando y cada acceso a archivos: bloquea los destructivos, pide permiso antes de push, deploy o instalaciones globales, protege los archivos con secretos y mantiene a los agentes revisores en solo lectura.",
      },
      {
        title: "Estado",
        body: "Beta 0.1.0-beta.1. Instaladores en PowerShell y Bash con dry-run, backups, manifiesto de archivos propios, idempotencia y desinstalación selectiva.",
      },
    ],
  },
  {
    title: "PortScan",
    category: "Networking",
    description: "Escáner de puertos TCP por línea de comandos que identifica puertos abiertos, cerrados y filtrados en equipos de una red.",
    highlights: ["Rangos de puertos y timeouts configurables", "Reportes automáticos de cada escaneo", "Probado en laboratorio con Ubuntu Server y firewall"],
    tags: ["Python", "Sockets", "CLI"],
    imageSrc: "/images/portscan.png",
    href: "https://github.com/nobodyh-ctrl/portscan",
    gradientFrom: "#022c22",
    gradientTo: "#10b981",
    accent: "#34d399",
    summary: "Herramienta de línea de comandos que escanea rangos de puertos TCP y clasifica cada uno como OPEN, CLOSED o FILTERED, escrita desde cero sin nmap ni librerías de escaneo.",
    stack: ["Python", "socket", "argparse", "TCP/IP"],
    sections: [
      {
        title: "Problema",
        body: "Herramientas como nmap resuelven el escaneo, pero esconden el mecanismo. El objetivo era entender qué pasa realmente en la red en cada intento de conexión.",
      },
      {
        title: "Cómo funciona",
        body: "Por cada puerto crea un socket TCP con timeout y llama a connect_ex: 0 es OPEN, ECONNREFUSED (el destino respondió RST) es CLOSED y la falta de respuesta es FILTERED. El rango se recorre con un generador para mostrar el progreso en tiempo real, y los resultados se guardan en un reporte.",
      },
      {
        title: "Laboratorio",
        body: "Probado contra una VM Ubuntu Server en VirtualBox: CLOSED con ufw allow sobre un puerto sin servicio y FILTERED con ufw deny. En Windows apareció un caso real: el firewall propio de un antivirus seguía filtrando aunque la regla del Firewall de Windows estuviera bien.",
      },
      {
        title: "Limitaciones",
        body: "Escaneo secuencial, timeout fijo, solo TCP y sin detección de servicios. Es una herramienta educativa, no un reemplazo de nmap.",
      },
    ],
  },
]

/** Accent-tinted pill used by the card buttons; set the color through the `--c` CSS variable */
export const accentButtonClass =
  "group/btn inline-flex cursor-pointer items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--c)_40%,transparent)] bg-[color-mix(in_srgb,var(--c)_15%,transparent)] px-3.5 py-1.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--c)_75%,transparent)] hover:bg-[color-mix(in_srgb,var(--c)_30%,transparent)] hover:shadow-[0_8px_24px_-10px_var(--c)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--c)]"
