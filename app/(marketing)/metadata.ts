// app/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VA Journey | Grow Your Skills & Stay Accountable",
  description: "A 100-day accountability journey platform to help virtual assistants and freelancers grow step by step.",
  openGraph: {
    title: "VA Journey | Grow Your Skills & Stay Accountable",
    description: "A 100-day accountability journey platform to help virtual assistants and freelancers grow step by step.",
    url: "https://va-journey.vercel.app",
    siteName: "VA Journey",
    images: ["/og-home.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VA Journey | Grow Your Skills & Stay Accountable",
    description: "A 100-day accountability journey platform to help virtual assistants and freelancers grow step by step.",
    images: ["/og-home.png"],
  },
};