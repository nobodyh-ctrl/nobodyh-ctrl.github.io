import Image from "next/image"

/** Sharp, darkened image filling its (relative + overflow-hidden) parent. Siblings need `relative` to sit above it. */
export default function SectionBackdrop({ src }: { src: string }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Image src={src} alt="" fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/30 via-neutral-950/75 to-neutral-950/90" />
    </div>
  )
}
