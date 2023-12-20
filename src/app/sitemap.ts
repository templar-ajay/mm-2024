import { MetadataRoute } from "next";
import { domain_name } from "@/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: domain_name,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: domain_name + "/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: domain_name + "/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
