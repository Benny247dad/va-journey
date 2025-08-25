import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Portfolio | VA Journey",
  description:
    "Explore the professional virtual assistant services I offer, including administrative support, social media management, and content creation. View my portfolio of work.",
  openGraph: {
    title: "Services & Portfolio | VA Journey",
    description:
      "Explore the professional virtual assistant services I offer, including administrative support, social media management, and content creation. View my portfolio of work.",
    url: "https://va-journey.vercel.app/services",
    siteName: "VA Journey",
    images: [
      {
        url: "https://va-journey.vercel.app/og-services.png", // (optional) create a custom image for social media
        width: 1200,
        height: 630,
        alt: "VA Journey Services and Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Portfolio | VA Journey",
    description:
      "Explore the professional virtual assistant services I offer, including administrative support, social media management, and content creation. View my portfolio of work.",
    images: ["https://va-journey.vercel.app/og-services.png"],
  },
};