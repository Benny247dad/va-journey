// app/(marketing)/journey/page.tsx

import JourneyPageContainer from "@/components/JourneyPageContainer";
import { Metadata } from "next";

// ✅ SEO: Metadata for the Journey Page
export const metadata: Metadata = {
  title: "My VA Journey | 100-Day Challenge Milestones",
  description: "Explore each milestone in Dayo’s 100-day Virtual Assistant challenge. From Day 1 to Day 100, track growth and lessons learned.",
};

export default function JourneyPage() {
  return <JourneyPageContainer />;
}