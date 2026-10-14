import Image from "next/image"
import { cn } from "@/lib/utils"

type Props = {
  src: string
  /** Image opacity before the darkening overlay */
  className?: string
}

/** Blurred, darkened image filling its (relative + overflow-hidden) parent. Siblings need `relative` to sit above it. */
export default function BlurBackdrop({ src, className }: Props) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Image src={src} alt="" fill sizes="50vw" className={cn("scale-125 object-cover opacity-50 blur-2xl", className)} />
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/20 via-neutral-950/60 to-neutral-950/85" />
    </div>
  )
}
