// src/components/DashboardClient.tsx
"use client";

import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import LogEntryForm from "@/components/LogEntryForm";
import JourneyProgress from "@/components/JourneyProgress";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function DashboardClient() {
  const { user, loading } = useAuth();
  const [completedDays, setCompletedDays] = useState(0);

  useEffect(() => {
    if (user) {
      const fetchCompletedDays = async () => {
        const { count } = await supabase
          .from("entries")
          .select("id", { count: "exact" })
          .eq("user_id", user.id);
        setCompletedDays(count || 0);
      };
      fetchCompletedDays();
    }
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
            {/* Log Entry Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg dark:bg-gray-900">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Log New Entry
              </h2>
              <LogEntryForm
                onEntryLogged={() => setCompletedDays((prev) => prev + 1)}
              />
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}