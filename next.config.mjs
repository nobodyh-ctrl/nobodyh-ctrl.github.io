// GitHub Pages serves project sites from /<repo>; the deploy workflow sets this.
// Empty locally and for a <user>.github.io repo.
const basePath = process.env.PAGES_BASE_PATH || ""

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Static export has no image optimizer; the loader only prefixes basePath
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
}

export default nextConfig
