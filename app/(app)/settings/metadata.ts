// app/(app)/settings/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | VA Journey",
  description: "Manage your account settings, preferences, and privacy options.",
  openGraph: {
    title: "Settings | VA Journey",
    description: "Manage your account settings, preferences, and privacy options.",
    url: "https://va-journey.vercel.app/settings",
    siteName: "VA Journey",
    images: ["/og-settings.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Settings | VA Journey",
    description: "Manage your account settings, preferences, and privacy options.",
    images: ["/og-settings.png"],
  },
};