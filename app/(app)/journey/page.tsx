import { supabaseServer } from "@/lib/supabaseServer";
import { redirect } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";

export default async function JourneyPage() {
  const supabase = supabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/auth");
  }

  return (
    <main className="p-8 text-white">
      <h1 className="text-3xl font-bold">My 100-Day Journey 🚀</h1>
      <p>Welcome, {session.user.email}</p>
      {/* journey content goes here */}
    </main>
  );
}