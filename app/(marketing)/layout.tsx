// app/(marketing)/layout.tsx
import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
// AuthProvider is not needed for public pages.

// Define props type for the nested layout
interface MarketingLayoutProps {
  children: ReactNode;
}

// Nested Layout component for the (marketing) route group
export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    // No <html> or <body> tags here. They are in the root layout.
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-6">
        {children}
      </main>
      <Footer />
    </>
  );
}