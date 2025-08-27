// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Providers } from "./providers"; // ✅ Import the ThemeProvider wrapper
import AuthProvider from "@/context/AuthProvider"; // ✅ Import the AuthProvider
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "VA Journey",
  description: "A virtual assistant journey app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <AuthProvider>
            {children}
            <SpeedInsights />
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}