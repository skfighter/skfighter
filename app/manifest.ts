import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sushant Kumar - Backend Developer",
    short_name: "Sushant Kumar",
    description:
      "Portfolio of Sushant Kumar, Senior Backend Developer (Node.js, PHP, Laravel, MySQL).",
    start_url: "/",
    display: "standalone",
    background_color: "#111827",
    theme_color: "#1e293b",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/apple-touch-icon.png", sizes: "48x48", type: "image/png" },
    ],
  };
}
