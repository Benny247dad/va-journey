// app/(auth)/dashboard/page.tsx
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import DashboardContainer from "@/components/DashboardContainer";
import { Database } from "@/types/supabase";

export default async function DashboardPage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Early return if no session
  if (!session?.user?.id) {
    return <div>Redirecting...</div>;
  }

  const { data: entries, error } = await supabase
    .from("entries")
    .select("*")
    .eq("user_id", session.user.id); // Now TypeScript knows this is defined

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <DashboardContainer entries={entries || []} />
    </div>
  );
}