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

export default function DashboardClient() {
  const { user } = useAuth(); // Removed 'loading' since ProtectedRoute handles it
  const [completedDays, setCompletedDays] = useState(0);
  const [userEntries, setUserEntries] = useState<Entry[]>([]);

  useEffect(() => {
    if (user) {
      const fetchCompletedDays = async () => {
        const { count } = await supabase
          .from("entries")
          .select("id", { count: "exact" })
          .eq("user_id", user.id);
        setCompletedDays(count || 0);
      };

      const fetchUserEntries = async () => {
        const { data } = await supabase
          .from("entries")
          .select("id, created_at, day, title, description")
          .order("day", { ascending: true })
          .eq("user_id", user.id);
        setUserEntries(data as Entry[] || []);
      };

      fetchCompletedDays();
      fetchUserEntries();
    }
  }, [user]);

  const handleEntryLogged = async () => {
    if (user) {
      const { data } = await supabase
        .from("entries")
        .select("id, created_at, day, title, description")
        .order("day", { ascending: true })
        .eq("user_id", user.id);
      setUserEntries(data as Entry[] || []);

      setCompletedDays(prev => prev + 1);
    }
  };

  // ✅ The ProtectedRoute component is now used to wrap the content.
  // It will handle all the loading and authentication checks internally.
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 py-12 dark:bg-gray-950 dark:text-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            My Dashboard
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Progress Visualization */}
            <div className="bg-white p-8 rounded-xl shadow-lg dark:bg-gray-900">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Progress
              </h2>
              <JourneyProgress completedDays={completedDays} />
              <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
                You have completed **{completedDays}** of your 100-day journey!
              </p>
            </div>
            {/* Log Entry Form and User Entries */}
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