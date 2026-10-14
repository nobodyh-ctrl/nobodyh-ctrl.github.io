// next/image doesn't add basePath to string srcs, so every local image goes through here.
export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  return src.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}` : src
}
