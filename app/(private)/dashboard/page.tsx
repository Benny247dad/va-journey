// app/(private)/dashboard/page.tsx

export const dynamic = "force-dynamic"; 
// 👆 This prevents static generation and ensures runtime rendering

// ✅ Correctly import DashboardContainer
import DashboardContainer from "@/components/DashboardContainer";

export default function DashboardPage() {
  return <DashboardContainer />;
}