import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";

const SITE_URL = "https://www.skfighter.com";

// Generated at build time, so lastModified updates on every deploy.
// Only list indexable pages here (/chat and /zip are noindex).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${SITE_URL}/images/sushant-kumar-profile.jpg`],
    },
    {
      url: `${SITE_URL}/connect`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
