// app/(app)/layout.tsx
import { ReactNode } from "react";
import "../../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AuthProvider } from "@/context/AuthProvider";
import ProtectedRoute from "@/components/ProtectedRoute";
import AppTabBar from "@/components/AppTabBar";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "My App Name",
    template: "%s | My App Name",
  },
  description: "Track your daily mood, progress, and streaks with My App.",
  keywords: ["mood tracker", "daily log", "habit tracking"],
  openGraph: {
    title: "My App Name",
    description: "Track your daily mood, progress, and streaks with My App.",
    url: "https://myapp.com",
    siteName: "My App Name",
    images: [
      {
        url: "https://myapp.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "My App preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My App Name",
    description: "Track your daily mood, progress, and streaks with My App.",
    images: ["https://myapp.com/og-image.png"],
    creator: "@yourtwitterhandle",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        <AuthProvider>
          <Navbar />
          <ProtectedRoute>
            <main className="min-h-[calc(100vh-6rem)] pt-6 pb-20">
              {children}
            </main>
            <AppTabBar />
          </ProtectedRoute>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}