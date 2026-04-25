import { MetadataRoute } from "next"
import { SITE_CONFIG } from "@/config/siteConfig"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: SITE_CONFIG.title,
        short_name: SITE_CONFIG.siteName,
        description: SITE_CONFIG.description,
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        theme_color: "#fff",
        icons: [
            {
                src: "/hp-logo.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    }
}
