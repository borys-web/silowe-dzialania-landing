import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/polityka-prywatnosci`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${base}/regulamin`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
