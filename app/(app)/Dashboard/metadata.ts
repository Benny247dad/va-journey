// app/(app)/dashboard/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | VA Journey",
  description:
    "Track your daily progress, log moods, and maintain your growth streak on VA Journey.",
  openGraph: {
    title: "Dashboard | VA Journey",
    description:
      "Track your daily progress, log moods, and maintain your growth streak on VA Journey.",
    url: "https://va-journey.vercel.app/dashboard",
    siteName: "VA Journey",
    images: [
      {
        url: "https://va-journey.vercel.app/og-dashboard.png", // (optional) create an OG image later
        width: 1200,
        height: 630,
        alt: "VA Journey Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard | VA Journey",
    description:
      "Track your daily progress, log moods, and maintain your growth streak on VA Journey.",
    images: ["https://va-journey.vercel.app/og-dashboard.png"],
  },
};