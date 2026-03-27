/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { viewTransition: true },
    allowedDevOrigins: ["localhost:3000"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
