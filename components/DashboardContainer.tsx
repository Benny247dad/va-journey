// components/DashboardContainer.tsx
"use client";

import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import LogEntryForm from "@/components/LogEntryForm";
import JourneyProgress from "@/components/JourneyProgress";
import UserEntries from "@/components/UserEntries";
import BackButton from "@/components/BackButton";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";

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

  // ✅ Performance Optimization: Memoize data fetching to avoid re-running on unnecessary renders
  useEffect(() => {
    if (!user) return;

    const channel = supabase.channel(`entries_for_user_${user.id}`);

    const fetchDataAndListen = async () => {
      // ✅ Performance: Select only the columns needed, reducing payload size
      const { data, count } = await supabase
        .from("entries")
        .select("id, created_at, day, title, description", { count: "exact" })
        .eq("user_id", user.id);
      
      setUserEntries(data as Entry[] || []);
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
            setUserEntries(prevEntries => [...prevEntries, newEntry]);
            setCompletedDays(prevDays => prevDays + 1);
          }
        )
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
            setUserEntries(prevEntries => prevEntries.filter(entry => entry.id !== deletedEntry.id));
            setCompletedDays(prevDays => prevDays - 1);
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <ProtectedRoute>
      {/* ✅ Semantic Main Tag: Use <main> for the primary content */}
      <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <BackButton targetPath="/" label="Back to Home" />
          </div>

          {/* ✅ Semantic Section Tag: Use <section> for logical content groups */}
          <section className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-300 dark:to-purple-400">
              My VA Journey Dashboard
            </h1>
          </section>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          >
            {/* ✅ Use <section> for these logical blocks */}
            <motion.section
              variants={sectionVariants}
              className="lg:col-span-1 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Progress Overview
              </h2>
              <JourneyProgress completedDays={completedDays} />
              <p className="mt-6 text-center text-lg text-gray-700 dark:text-gray-300 font-medium">
                You have completed{" "}
                <span className="text-indigo-600 dark:text-indigo-400 font-extrabold">
                  {completedDays}
                </span>{" "}
                of your 100-day journey!
              </p>
            </motion.section>

            <motion.section
              variants={sectionVariants}
              className="lg:col-span-2 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Log New Entry
              </h2>
              <LogEntryForm />
            </motion.section>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-2xl"
          >
            {/* ✅ Use <h2> for the entries heading */}
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              My Entries
            </h2>
            <UserEntries entries={userEntries} />
          </motion.div>
        </div>
      </main>
    </ProtectedRoute>
  );
}