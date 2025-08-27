// app/(marketing)/journey/page.tsx
import { supabaseServer } from "@/lib/supabaseServer";
import JourneyTimeline from "@/components/JourneyTimeline";

export default async function JourneyPage() {
  const supabase = await supabaseServer();

  const { data: journeyEntries, error } = await supabase
    .from("entries")
    .select("id, created_at, day, title, description")
    .order("day", { ascending: true });

  if (error) {
    console.error(error);
    return <div className="min-h-screen flex items-center justify-center">Error fetching journey data.</div>;
  }

  return (
    <div className="py-20 bg-gray-100 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          My 100-Day Journey
        </h1>
        <JourneyTimeline entries={journeyEntries || []} />
      </div>
    </div>
  );
}