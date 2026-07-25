import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "velog.velcdn.com",
            },
            {
                protocol: "https",
                hostname: "images.velog.io",
            },
            {
                protocol: "https",
                hostname: "api.dicebear.com",
            },
        ],
    },
}

export default nextConfig