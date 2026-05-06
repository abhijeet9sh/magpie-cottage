import type { MetadataRoute } from "next";
import { journalArticles } from "@/lib/data/journal";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://magpiecottage.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Static pages with their priority and change frequency
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/the-cottage`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/book`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/experiences`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/our-story`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/legacy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/journal`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/refund`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic journal article pages — use actual publish dates for SEO
  const journalPages: MetadataRoute.Sitemap = journalArticles.map(
    (article) => ({
      url: `${BASE_URL}/journal/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })
  );

  return [...staticPages, ...journalPages];
}
