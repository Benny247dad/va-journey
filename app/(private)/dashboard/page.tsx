// app/(private)/dashboard/page.tsx

export const dynamic = "force-dynamic"; 
// 👆 This prevents static generation and ensures runtime rendering

import DashboardClient from "@/components/DashboardClient";

export default function DashboardPage() {
  return <DashboardClient />;
}