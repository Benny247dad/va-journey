import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
import { AuthProvider } from "@/context/AuthProvider";// ✅ make sure this matches the filename

// Define metadata for the application
export const metadata: Metadata = {
  title: "VA Journey",
  description: "Portfolio & Journey site",
};

// Define props type for RootLayout
interface RootLayoutProps {
  children: ReactNode;
}

// RootLayout component
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Set theme before hydration to avoid flicker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  const theme = stored || system;
                  if (theme === 'dark') document.documentElement.classList.add('dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {/* AuthProvider wraps the entire app for authentication context */}
        <AuthProvider>
          {/* Sticky progress bar at the top */}
          <ScrollProgress />

          {/* Main navigation */}
          <Navbar />

          {/* Page content */}
          <main className="pt-6">{children}</main>

          {/* Footer */}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}