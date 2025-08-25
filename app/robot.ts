// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/about', '/contact', '/services'], // ✅ Allow public pages
      disallow: ['/dashboard', '/auth', '/settings', '/profile'], // ✅ Disallow protected and auth pages
    },
    sitemap: 'https://va-journey.vercel.app/sitemap.xml',
  };
}