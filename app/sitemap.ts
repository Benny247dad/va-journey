import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://va-journey.vercel.app";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/resources`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}