import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AppTabBar from "@/components/AppTabBar";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-6rem)] pt-6 pb-20">
        {children}
      </main>
      <AppTabBar />
      <Footer />
    </>
  );
}
