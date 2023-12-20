import { MetadataRoute } from "next";
import { getSettings } from "@/utils";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const settings = await getSettings();
  const { primary_color, background_color, meta_title, meta_description } =
    settings.data;
  return {
    name: meta_title || "Next.js App",
    short_name: meta_title || "Next.js App",
    description: meta_description || "Next.js App",
    start_url: "/",
    display: "standalone",
    background_color: background_color || "#fff",
    theme_color: primary_color || "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
