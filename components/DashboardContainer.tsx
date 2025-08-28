// components/DashboardContainer.tsx
"use client";

import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import LogEntryForm from "@/components/LogEntryForm";
import JourneyProgress from "@/components/JourneyProgress";
import UserEntries from "@/components/UserEntries";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Entry {
  id: string;
  created_at: string;
  day: number;
  title: string;
  description: string;
}

export default function DashboardContainer() {
  const { user, loading } = useAuth();
  const [completedDays, setCompletedDays] = useState(0);
  const [userEntries, setUserEntries] = useState<Entry[]>([]);

  useEffect(() => {
    if (!user) return;

    const channel = supabase.channel(`entries_for_user_${user.id}`);

    const fetchDataAndListen = async () => {
      const { data, count } = await supabase
        .from("entries")
        .select("id, created_at, day, title, description", { count: "exact" })
        .eq("user_id", user.id);

      setUserEntries((data as Entry[]) || []);
      setCompletedDays(count || 0);

      channel
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "entries",
            filter: `user_id=eq.${user.id}`,
          },
          (payload) => {
            const newEntry = payload.new as Entry;
            setUserEntries((prevEntries) => [...prevEntries, newEntry]);
            setCompletedDays((prevDays) => prevDays + 1);
          }
        )
        // ✅ Add listener for DELETE events
        .on(
          "postgres_changes",
          {
            event: "DELETE",
            schema: "public",
            table: "entries",
            filter: `user_id=eq.${user.id}`,
          },
          (payload) => {
            const deletedEntry = payload.old as { id: string };
            setUserEntries((prevEntries) =>
              prevEntries.filter((entry) => entry.id !== deletedEntry.id)
            );
            setCompletedDays((prevDays) => prevDays - 1);
          }
        )
        .subscribe();
    };

    fetchDataAndListen();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  if (loading || !user) {
    return (
      <ProtectedRoute>
        <div className="flex justify-center items-center min-h-screen">
          <p>Loading...</p>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 py-12 dark:bg-gray-950 dark:text-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            My Dashboard
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg dark:bg-gray-900">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Progress
              </h2>
              <JourneyProgress completedDays={completedDays} />
              <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
                You have completed **{completedDays}** of your 100-day journey!
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg dark:bg-gray-900">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Log New Entry
              </h2>
              <LogEntryForm />
            </div>
            <UserEntries entries={userEntries} />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
