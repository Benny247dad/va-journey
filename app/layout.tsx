import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Providers } from "./providers";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast"; // ✅ Import Toaster
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
            <Toaster /> {/* ✅ Add the Toaster component */}
            <SpeedInsights />
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}