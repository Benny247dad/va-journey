// app/(marketing)/about/page.tsx

import AboutPageContainer from "@/components/AboutPageContainer";
import { Metadata } from "next";

// ✅ SEO: Metadata for the About Page
export const metadata: Metadata = {
  title: "VA Journey | About Dayo",
  description: "Meet Dayo, the creator behind the 100-day VA journey. Learn why this project started and where it’s heading.",
};

export default function AboutPage() {
  return <AboutPageContainer />;
}