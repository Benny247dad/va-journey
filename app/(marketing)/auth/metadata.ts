// app/auth/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | VA Journey",
  description: "Sign in to your VA Journey account and continue your growth journey.",
  openGraph: {
    title: "Login | VA Journey",
    description: "Sign in to your VA Journey account and continue your growth journey.",
    url: "https://va-journey.vercel.app/auth",
    siteName: "VA Journey",
    images: ["/og-login.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Login | VA Journey",
    description: "Sign in to your VA Journey account and continue your growth journey.",
    images: ["/og-login.png"],
  },
};