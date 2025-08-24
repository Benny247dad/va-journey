// app/(app)/profile/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | VA Journey",
  description: "View and edit your profile information, track your personal progress.",
  openGraph: {
    title: "Profile | VA Journey",
    description: "View and edit your profile information, track your personal progress.",
    url: "https://va-journey.vercel.app/profile",
    siteName: "VA Journey",
    images: ["/og-profile.png"], // add image in public folder later
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profile | VA Journey",
    description: "View and edit your profile information, track your personal progress.",
    images: ["/og-profile.png"],
  },
};