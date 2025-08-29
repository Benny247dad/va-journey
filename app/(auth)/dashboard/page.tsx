// app/(auth)/dashboard/page.tsx

import DashboardContainer from "@/components/DashboardContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Dashboard | VA Journey Tracker",
  description: "Track your progress, log new entries, and view your 100-day journey insights from your personal dashboard.",
};

export default function DashboardPage() {
  return <DashboardContainer />;
}