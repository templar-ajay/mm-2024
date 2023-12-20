import { MetadataRoute } from "next";
import { domain_name } from "@/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      //   disallow: "/private/",
    },
    sitemap: domain_name + "/sitemap.xml",
  };
}
