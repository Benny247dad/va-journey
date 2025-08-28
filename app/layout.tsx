// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// ✅ Corrected: Import Providers as a default export from the app directory
import { Providers } from "@/app/providers";
// ✅ Corrected: Import AuthProvider as a named export
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://va-journey.vercel.app/"),
  title: "VA Journey | 100-Day Virtual Assistant Tracker",
  description: "Track your 100-day journey to becoming a professional Virtual Assistant. Log daily entries, monitor progress, and achieve your goals with our intuitive dashboard.",
  keywords: ["virtual assistant", "VA", "100-day journey", "productivity app", "goal tracker", "personal development"],
  openGraph: {
    title: "VA Journey | Your 100-Day VA Challenge",
    description: "Follow and log your 100-day journey to becoming a professional Virtual Assistant. Achieve consistency, growth, and excellence with our dedicated tracker.",
    url: "https://va-journey.vercel.app/",
    siteName: "VA Journey",
    images: "/images/og-image.png",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VA Journey",
    description: "Log your 100-day journey to becoming a professional Virtual Assistant.",
    creator: "@yourtwitterhandle",
    images: "/images/og-image.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://va-journey.vercel.app/",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`h-full ${inter.className}`}>
        {/* ✅ The Providers component wraps AuthProvider and children */}
        <Providers>
          <AuthProvider>
            {children}
            <Toaster position="top-center" />
            <SpeedInsights />
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}