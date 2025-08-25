// app/(app)/layout.tsx

import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AuthProvider from "@/context/AuthProvider";
import ProtectedRoute from "@/components/ProtectedRoute";
import AppTabBar from "@/components/AppTabBar";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <Navbar />
      <ProtectedRoute>
        <main className="min-h-[calc(100vh-6rem)] pt-6 pb-20">
          {children}
        </main>
        <AppTabBar />
        <Footer /> {/* ✅ Moved the Footer inside the ProtectedRoute */}
      </ProtectedRoute>
    </AuthProvider>
  );
}