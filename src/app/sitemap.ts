import type { MetadataRoute } from "next";
import { BUSINESS, services, locations, serviceLocationPairs } from "@/lib/site";
import { posts } from "@/lib/posts";

// Static build date — do NOT call Date/new Date (keeps the sitemap deterministic).
const LAST_MODIFIED = "2026-07-13";

function url(path: string): string {
  return `${BUSINESS.url}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 1 },
    { url: url("/services"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/service-areas"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/about"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    { url: url("/contact"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/blog"), lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: url(`/services/${s.slug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const serviceLocationRoutes: MetadataRoute.Sitemap = serviceLocationPairs().map(
    ({ service, location }) => ({
      url: url(`/services/${service}/${location}`),
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const serviceAreaRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: url(`/service-areas/${l.slug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: url(`/blog/${p.slug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...serviceLocationRoutes,
    ...serviceAreaRoutes,
    ...blogRoutes,
  ];
}
