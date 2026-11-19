/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets phones on the same Wi-Fi load the dev server (e.g. http://192.168.18.7:3000).
  allowedDevOrigins: ['192.168.*.*', '10.*.*.*'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Every photo is served as a resized WebP for the visitor's screen.
    formats: ['image/webp'],
    qualities: [75],
  },
}

export default nextConfig
