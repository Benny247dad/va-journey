// app/providers.tsx
"use client";

import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      {children}
      <Toaster position="top-center" />
      <SpeedInsights />
    </AuthProvider>
  );
}