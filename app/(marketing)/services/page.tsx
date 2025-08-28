// app/(marketing)/services/page.tsx

import ServicesPageContainer from "@/components/ServicesPageContainer";
import { Metadata } from "next";

// ✅ SEO: Metadata for the Services Page
export const metadata: Metadata = {
  title: "VA Journey | Skills and Services",
  description: "Discover the key skills a Virtual Assistant needs—email management, research, scheduling, and more—through Dayo’s learning journey.",
};

export default function ServicesPage() {
  return <ServicesPageContainer />;
}